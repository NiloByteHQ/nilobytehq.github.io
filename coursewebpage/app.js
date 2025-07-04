import { curriculum, examQuestions, achievements, playerRanks } from './data.js';
import * as ui from './ui.js';

const state = {
    player: {
        level: 1,
        xp: 0,
        xpToNextLevel: 100,
        focus: 100,
        rank: playerRanks[0],
        completedModules: new Set(),
        achievements: new Set(),
    },
    currentView: 'welcome',
    activeModule: null,
    activeQuiz: [],
    quizIndex: 0,
    exam: {
        active: false,
        questions: [],
        index: 0,
        score: 0,
    },
};

// --- Game Logic ---

function addXP(amount) {
    state.player.xp += amount;
    ui.logMessage(`+${amount} XP`, 'xp');

    while (state.player.xp >= state.player.xpToNextLevel) {
        state.player.xp -= state.player.xpToNextLevel;
        state.player.level++;
        state.player.xpToNextLevel = Math.floor(state.player.xpToNextLevel * 1.5);
        state.player.rank = playerRanks[Math.min(state.player.level - 1, playerRanks.length - 1)];
        updateFocus(100); // Full focus restore on level up
        ui.logMessage(`LEVEL UP! You are now Level ${state.player.level}!`, 'success');
        checkAndAwardAchievement(`LEVEL_${state.player.level}`);
    }
    ui.updatePlayerStats(state.player);
}

function updateFocus(amount) {
    state.player.focus = Math.max(0, Math.min(100, state.player.focus + amount));
    if (amount < 0) {
        ui.logMessage(`Focus lost! ${amount}%`, 'error');
    }
    ui.updatePlayerStats(state.player);
}

function checkAndAwardAchievement(id) {
    if (!id || state.player.achievements.has(id)) return;
    
    const achievement = achievements.find(a => a.id === id);
    if (achievement) {
        state.player.achievements.add(id);
        ui.logMessage(`Achievement Unlocked: ${achievement.title}`, 'achievement');
        ui.updateAchievements(state.player.achievements);
    }
}

function checkMajorAchievements() {
    const allPrinciplesDone = curriculum.find(c => c.id === 'c1').modules.every(m => state.player.completedModules.has(m.id));
    if (allPrinciplesDone) checkAndAwardAchievement('PRINCIPLES_MASTER');

    const allThemesDone = curriculum.find(c => c.id === 'c2').modules.every(m => state.player.completedModules.has(m.id));
    if (allThemesDone) checkAndAwardAchievement('THEMES_MASTER');

    const allProcessesDone = curriculum.find(c => c.id === 'c3').modules.every(m => state.player.completedModules.has(m.id));
    if (allProcessesDone) checkAndAwardAchievement('PROCESSES_MASTER');

    if (allPrinciplesDone && allThemesDone && allProcessesDone && state.player.achievements.has('EXAM_PASSED')) {
        checkAndAwardAchievement('GRANDMASTER');
    }
}

// --- Navigation & View Control ---

function showView(viewId) {
    state.currentView = viewId;
    ui.renderView(viewId);
}

function selectModule(moduleId) {
    const category = curriculum.find(c => c.modules.some(m => m.id === moduleId));
    state.activeModule = category.modules.find(m => m.id === moduleId);
    
    ui.renderLesson(state.activeModule, category.title);
    showView('lesson');
}

function startQuiz() {
    state.activeQuiz = [...state.activeModule.quiz];
    state.quizIndex = 0;
    ui.renderQuiz(state.activeQuiz[state.quizIndex], state.activeModule.title);
    showView('quiz');
}

function submitQuizAnswer(selectedIndex) {
    const question = state.activeQuiz[state.quizIndex];
    const isCorrect = selectedIndex === question.correct;

    if (isCorrect) {
        ui.showQuizFeedback(true, 'Correct!');
        addXP(25);
        updateFocus(5);
    } else {
        ui.showQuizFeedback(false, `Not quite. The correct answer was: "${question.options[question.correct]}"`);
        updateFocus(-10);
    }
    
    state.quizIndex++;

    if (state.quizIndex >= state.activeQuiz.length) {
        // Quiz finished
        const perfectScore = !document.querySelector('#quiz-feedback.bg-red-500'); // simple check
        if(perfectScore) checkAndAwardAchievement('PERFECT_QUIZ');
        
        state.player.completedModules.add(state.activeModule.id);
        checkAndAwardAchievement(`${state.activeModule.id.toUpperCase()}_DONE`);
        checkAndAwardAchievement('QUICK_LEARNER');
        checkMajorAchievements();
        addXP(75); // Bonus XP for completing module
        ui.setNextModuleButton(true);
    } else {
        // Show next question after a delay
        setTimeout(() => {
            ui.renderQuiz(state.activeQuiz[state.quizIndex], state.activeModule.title);
        }, 2000);
    }
}

function showMainMenu() {
    ui.renderMainMenu(curriculum, state.player.completedModules);
    showView('main-menu');
}

// --- Exam Logic ---

function startExam() {
    if (state.player.focus < 50) {
        alert("Your Focus is too low to start the exam! Review some lessons to increase it.");
        return;
    }
    state.exam = {
        active: true,
        questions: [...examQuestions].sort(() => 0.5 - Math.random()), // shuffle
        index: 0,
        score: 0,
    };
    ui.renderExamQuestion(state.exam.questions[state.exam.index], state.exam.index + 1, state.exam.questions.length);
    showView('exam');
}

function submitExamAnswer(selectedIndex) {
    const question = state.exam.questions[state.exam.index];
    if (selectedIndex === question.correct) {
        state.exam.score++;
    }

    state.exam.index++;

    if (state.exam.index >= state.exam.questions.length) {
        finishExam();
    } else {
        ui.renderExamQuestion(state.exam.questions[state.exam.index], state.exam.index + 1, state.exam.questions.length);
    }
}

function finishExam() {
    const percentage = (state.exam.score / state.exam.questions.length) * 100;
    const passed = percentage >= 60;

    ui.renderExamResults(state.exam.score, state.exam.questions.length, percentage, passed);
    if (passed) {
        checkAndAwardAchievement('EXAM_PASSED');
        checkMajorAchievements();
    }
    showView('results');
}

// --- Event Listeners Setup ---

function initialize() {
    document.getElementById('start-journey-button').addEventListener('click', () => {
        ui.renderMainMenu(curriculum, state.player.completedModules);
        showView('main-menu');
    });

    document.getElementById('back-to-menu-button').addEventListener('click', showMainMenu);
    document.getElementById('return-to-menu-button').addEventListener('click', showMainMenu);

    document.getElementById('start-quiz-button').addEventListener('click', startQuiz);
    document.getElementById('submit-answer-button').addEventListener('click', () => {
        const selected = document.querySelector('input[name="quizOption"]:checked');
        if (selected) submitQuizAnswer(parseInt(selected.value));
    });
    document.getElementById('next-module-button').addEventListener('click', showMainMenu);

    document.getElementById('submit-exam-answer-button').addEventListener('click', () => {
        const selected = document.querySelector('input[name="examOption"]:checked');
        if (selected) {
            submitExamAnswer(parseInt(selected.value));
        } else {
            alert('Please select an answer.');
        }
    });
    
    document.getElementById('restart-exam-button').addEventListener('click', startExam);

    // Dynamic event listeners for module selection
    document.getElementById('learning-path-container').addEventListener('click', (e) => {
        const moduleButton = e.target.closest('.module-button');
        if (moduleButton && !moduleButton.disabled) {
            selectModule(moduleButton.dataset.moduleId);
        }
        if (moduleButton && moduleButton.dataset.action === 'start-exam') {
            startExam();
        }
    });

    // Initialize UI
    ui.init(achievements);
    ui.updatePlayerStats(state.player);
    showView('welcome');
}

// Start the application once the DOM is ready
document.addEventListener('DOMContentLoaded', initialize);

// Expose a few functions to the UI module if needed (or use callbacks)
export const app = {
    startExam
};