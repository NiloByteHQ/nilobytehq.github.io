import { achievements as allAchievements } from './data.js';

let elements;

export function init(achievements) {
    elements = {
        // Views
        views: document.querySelectorAll('.view'),
        welcomeView: document.getElementById('welcome-view'),
        mainMenuView: document.getElementById('main-menu-view'),
        lessonView: document.getElementById('lesson-view'),
        quizView: document.getElementById('quiz-view'),
        examView: document.getElementById('exam-view'),
        resultsView: document.getElementById('results-view'),
        
        // Player Stats
        levelText: document.getElementById('level-text'),
        xpBar: document.getElementById('xp-bar'),
        xpText: document.getElementById('xp-text'),
        focusBar: document.getElementById('focus-bar'),
        focusText: document.getElementById('focus-text'),
        playerRank: document.getElementById('player-rank'),
        
        // Achievements
        achievementsGrid: document.getElementById('achievements-grid'),
        tooltip: document.getElementById('tooltip'),

        // Logs
        logMessages: document.getElementById('log-messages'),

        // Main Menu
        learningPathContainer: document.getElementById('learning-path-container'),
        
        // Lesson
        lessonTitle: document.getElementById('lesson-title'),
        lessonCategory: document.getElementById('lesson-category'),
        lessonContent: document.getElementById('lesson-content'),
        
        // Quiz
        quizTitle: document.getElementById('quiz-title'),
        quizQuestion: document.getElementById('quiz-question'),
        quizOptions: document.getElementById('quiz-options'),
        quizFeedback: document.getElementById('quiz-feedback'),
        submitAnswerButton: document.getElementById('submit-answer-button'),
        nextModuleButton: document.getElementById('next-module-button'),
        
        // Exam
        examCounter: document.getElementById('exam-counter'),
        examQuestion: document.getElementById('exam-question'),
        examOptions: document.getElementById('exam-options'),

        // Results
        resultsTitle: document.getElementById('results-title'),
        resultsScore: document.getElementById('results-score'),
        resultsSummary: document.getElementById('results-summary'),
    };
    
    // Initial render of achievements
    updateAchievements(new Set());
    
    // Tooltip logic
    elements.achievementsGrid.addEventListener('mouseover', e => {
        const target = e.target.closest('.achievement-icon');
        if (target && target.dataset.title) {
            elements.tooltip.textContent = `${target.dataset.title}: ${target.dataset.description}`;
            elements.tooltip.style.opacity = '1';
        }
    });
     elements.achievementsGrid.addEventListener('mousemove', e => {
        const target = e.target.closest('.achievement-icon');
        if (target) {
            elements.tooltip.style.left = `${e.pageX + 10}px`;
            elements.tooltip.style.top = `${e.pageY + 10}px`;
        }
    });
    elements.achievementsGrid.addEventListener('mouseout', e => {
        const target = e.target.closest('.achievement-icon');
        if (target) {
            elements.tooltip.style.opacity = '0';
        }
    });
}

export function renderView(viewId) {
    elements.views.forEach(view => view.classList.remove('active-view'));
    const activeView = document.getElementById(`${viewId}-view`);
    if (activeView) {
        activeView.classList.add('active-view');
    }
}

export function updatePlayerStats(player) {
    elements.levelText.textContent = player.level;
    elements.xpBar.style.width = `${(player.xp / player.xpToNextLevel) * 100}%`;
    elements.xpText.textContent = `${player.xp} / ${player.xpToNextLevel} XP`;
    elements.focusBar.style.width = `${player.focus}%`;
    elements.focusText.textContent = `${player.focus}%`;
    elements.playerRank.textContent = `Rank: ${player.rank}`;
}

export function updateAchievements(playerAchievements) {
    elements.achievementsGrid.innerHTML = '';
    allAchievements.forEach(ach => {
        const isUnlocked = playerAchievements.has(ach.id);
        const achElement = document.createElement('div');
        achElement.className = `achievement-icon flex items-center justify-center w-12 h-12 rounded-lg text-2xl transition-all duration-300 ${isUnlocked ? 'bg-amber-400 text-gray-900 shadow-lg' : 'bg-gray-700 text-gray-500'}`;
        achElement.textContent = isUnlocked ? ach.icon : '❓';
        achElement.dataset.title = ach.title;
        achElement.dataset.description = ach.description;
        elements.achievementsGrid.appendChild(achElement);
    });
}

export function logMessage(message, type = 'info') {
    const p = document.createElement('p');
    let typeClass = 'text-gray-400';
    if(type === 'success') typeClass = 'text-green-400';
    if(type === 'error') typeClass = 'text-red-400';
    if(type === 'xp') typeClass = 'text-sky-400';
    if(type === 'achievement') typeClass = 'text-amber-400 font-bold';
    
    p.className = `leading-tight ${typeClass}`;
    p.textContent = message;
    elements.logMessages.prepend(p);

    if (elements.logMessages.children.length > 10) {
        elements.logMessages.lastChild.remove();
    }
}

export function renderMainMenu(curriculum, completedModules) {
    elements.learningPathContainer.innerHTML = '';
    let lastCategoryCompleted = true;

    curriculum.forEach(category => {
        const categoryUnlocked = lastCategoryCompleted;
        let allModulesInCategoryCompleted = true;

        const categoryHtml = `
            <div class="bg-gray-800 p-6 rounded-lg ${!categoryUnlocked ? 'opacity-50' : ''}">
                <h3 class="text-2xl font-bold mb-1">${category.title}</h3>
                <p class="text-gray-400 mb-4">${category.description}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${category.modules.map((module, index) => {
                        const isCompleted = completedModules.has(module.id);
                        const isUnlocked = categoryUnlocked && (index === 0 || completedModules.has(category.modules[index-1].id));
                        if (!isCompleted) allModulesInCategoryCompleted = false;

                        return `
                            <button data-module-id="${module.id}" class="module-button text-left p-4 bg-gray-700 rounded-md transition-all duration-300 ${isUnlocked ? 'hover:bg-gray-600 hover:border-sky-500' : 'cursor-not-allowed opacity-60'} ${isCompleted ? 'border-green-500' : 'border-gray-600' } border-2" ${!isUnlocked ? 'disabled' : ''}>
                                <span class="flex items-center">
                                    <span class="text-2xl mr-3">${isCompleted ? '✅' : (isUnlocked ? '📖' : '🔒')}</span>
                                    <span class="font-semibold">${module.title}</span>
                                </span>
                            </button>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
        elements.learningPathContainer.insertAdjacentHTML('beforeend', categoryHtml);
        lastCategoryCompleted = allModulesInCategoryCompleted;
    });

    // Add Final Exam section
    const examUnlocked = lastCategoryCompleted;
    const examHtml = `
        <div class="bg-gray-800 p-6 rounded-lg ${!examUnlocked ? 'opacity-50' : ''}">
            <h3 class="text-2xl font-bold mb-1">Final Exam</h3>
            <p class="text-gray-400 mb-4">Test your complete knowledge with a timed simulation of the foundation exam.</p>
            <button data-action="start-exam" class="module-button w-full p-4 bg-red-600 rounded-md transition-all duration-300 ${examUnlocked ? 'hover:bg-red-500 pulse-glow' : 'cursor-not-allowed'}" ${!examUnlocked ? 'disabled' : ''}>
                <span class="text-lg font-bold">🚀 Launch Final Exam Simulation</span>
            </button>
        </div>
    `;
    elements.learningPathContainer.insertAdjacentHTML('beforeend', examHtml);
}

export function renderLesson(module, categoryTitle) {
    elements.lessonTitle.textContent = module.title;
    elements.lessonCategory.textContent = categoryTitle;
    elements.lessonContent.innerHTML = module.lessons.map(lesson => `
        <h3 class="font-bold text-xl mt-4 mb-2">${lesson.title}</h3>
        <p>${lesson.content}</p>
    `).join('');
}

export function renderQuiz(question, moduleTitle) {
    elements.quizTitle.textContent = `Knowledge Check: ${moduleTitle}`;
    elements.quizQuestion.textContent = question.question;
    elements.quizOptions.innerHTML = question.options.map((opt, index) => `
        <label class="block p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 has-[:checked]:bg-sky-800 has-[:checked]:ring-2 ring-sky-500">
            <input type="radio" name="quizOption" value="${index}" class="hidden">
            <span>${opt}</span>
        </label>
    `).join('');
    elements.quizFeedback.classList.add('hidden');
    elements.submitAnswerButton.classList.remove('hidden');
    elements.nextModuleButton.classList.add('hidden');
}

export function showQuizFeedback(isCorrect, message) {
    elements.quizFeedback.innerHTML = `<p class="font-semibold">${message}</p>`;
    elements.quizFeedback.className = `h-24 p-4 rounded-lg text-center flex items-center justify-center font-bold text-white ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`;
    elements.submitAnswerButton.classList.add('hidden');
}

export function setNextModuleButton(show) {
    if (show) {
        elements.nextModuleButton.classList.remove('hidden');
    } else {
        elements.nextModuleButton.classList.add('hidden');
    }
}

export function renderExamQuestion(question, index, total) {
    elements.examCounter.textContent = `Question ${index} of ${total}`;
    elements.examQuestion.textContent = question.question;
    elements.examOptions.innerHTML = question.options.map((opt, i) => `
         <label class="block p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 has-[:checked]:bg-sky-800 has-[:checked]:ring-2 ring-sky-500">
            <input type="radio" name="examOption" value="${i}" class="hidden">
            <span>${opt}</span>
        </label>
    `).join('');
}

export function renderExamResults(score, total, percentage, passed) {
    elements.resultsTitle.textContent = passed ? 'Congratulations! Exam Passed!' : 'Further Study Recommended';
    elements.resultsScore.textContent = `Your Score: ${score} / ${total} (${percentage.toFixed(1)}%)`;
    elements.resultsSummary.innerHTML = passed 
        ? '<p>You have demonstrated a strong understanding of the PRINCE2 framework. Well done!</p>' 
        : `<p>You did not meet the 60% passing threshold. Don't worry, review the material and try again. Focus is key!</p>`;
}