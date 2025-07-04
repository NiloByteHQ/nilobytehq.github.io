// script.js
import { prince2Content, quizzes, examQuestions } from './prince2-content-data.js';

// --- DOM Elements ---
const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');

const playerNameSpan = document.getElementById('playerName');
const playerLevelSpan = document.getElementById('playerLevel');
const playerXPSpan = document.getElementById('playerXP');
const playerXPToNextLevelSpan = document.getElementById('playerXPToNextLevel');
const playerHealthSpan = document.getElementById('playerHealth');

const currentQuestTitle = document.getElementById('currentQuestTitle');
const currentQuestDescription = document.getElementById('currentQuestDescription');

const dialogueBox = document.getElementById('dialogue-box');
const dialogueText = document.getElementById('dialogueText');
const nextDialogueBtn = document.getElementById('nextDialogueBtn');

const quizArea = document.getElementById('quiz-area');
const quizQuestionElem = document.getElementById('quizQuestion');
const quizOptionsElem = document.getElementById('quizOptions');
const submitAnswerBtn = document.getElementById('submitAnswerBtn');
const quizFeedbackElem = document.getElementById('quizFeedback');

const examPrepArea = document.getElementById('exam-prep-area');
const examQuestionCountElem = document.getElementById('examQuestionCount');
const examQuestionTextElem = document.getElementById('examQuestionText');
const examOptionsElem = document.getElementById('examOptions');
const nextExamQuestionBtn = document.getElementById('nextExamQuestionBtn');
const finishExamBtn = document.getElementById('finishExamBtn');
const examResultsElem = document.getElementById('examResults');
const playAgainBtn = document.getElementById('playAgainBtn');

const openInventoryBtn = document.getElementById('openInventoryBtn');
const openSkillTreeBtn = document.getElementById('openSkillTreeBtn');
const startExamPrepBtn = document.getElementById('startExamPrepBtn');
const gameMessagesElem = document.getElementById('game-messages');

const inventoryModal = document.getElementById('inventory-modal');
const skillTreeModal = document.getElementById('skill-tree-modal');
const closeInventoryBtn = document.getElementById('closeInventoryBtn');
const closeSkillTreeBtn = document.getElementById('closeSkillTreeBtn');
const inventoryList = document.getElementById('inventoryList');
const learnedConceptsList = document.getElementById('learnedConceptsList');

// --- Game State ---
let player = {
    name: 'Aspiring PM',
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    health: 100, // Represents "Confidence" for exam prep
    inventory: [],
    prince2Knowledge: {} // To track learned concepts (e.g., prince2Knowledge.principles.businessJustification = true)
};

let currentScene = 'intro'; // 'intro', 'quest', 'quiz', 'exam'
let currentDialogueLines = [];
let currentDialogueIndex = 0;
let currentQuest = null;
let currentQuiz = null;
let examMode = {
    isActive: false,
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [], // Store selected option index
    correctAnswersCount: 0
};

// --- Game Initialization ---
function initGame() {
    // Set canvas dimensions dynamically for responsiveness (adjust as needed)
    gameCanvas.width = document.getElementById('game-container').offsetWidth * 0.65;
    gameCanvas.height = document.getElementById('game-container').offsetHeight * 0.95;

    updatePlayerUI();
    showDialogueBox();
    displayMessage("Game Initialized. Welcome to PRINCE2 Quest!", 'info');
    startIntroDialogue();
    gameLoop(); // Start the game loop for rendering
}

// --- UI Update Functions ---
function updatePlayerUI() {
    playerNameSpan.textContent = player.name;
    playerLevelSpan.textContent = player.level;
    playerXPSpan.textContent = player.xp;
    playerXPToNextLevelSpan.textContent = player.xpToNextLevel;
    playerHealthSpan.textContent = player.health;
}

function displayMessage(message, type = 'info') {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = message;
    msgDiv.classList.add('game-message', type);
    gameMessagesElem.prepend(msgDiv);

    setTimeout(() => {
        msgDiv.remove();
    }, 5000);
}

// --- Dialogue System ---
function showDialogueBox() {
    dialogueBox.style.display = 'block';
    quizArea.style.display = 'none';
    examPrepArea.style.display = 'none';
}

function hideDialogueBox() {
    dialogueBox.style.display = 'none';
}

function startIntroDialogue() {
    currentDialogueLines = [
        "Welcome, brave Project Manager! This land needs your expertise.",
        "To succeed, you must master the ancient wisdom of PRINCE2 Project Management.",
        "Your first challenge: understand 'Overview of PRINCE2 Project Management'."
    ];
    currentDialogueIndex = 0;
    displayNextDialogueLine();
}

function displayNextDialogueLine() {
    if (currentDialogueIndex < currentDialogueLines.length) {
        dialogueText.textContent = currentDialogueLines[currentDialogueIndex];
        currentDialogueIndex++;
    } else {
        hideDialogueBox();
        // After intro, start the first learning module
        startQuest(prince2Content.modules.overview);
    }
}

// --- Quest/Learning Module System ---
let activeModuleKey = 'overview'; // Start with the first module

function startQuest(quest) {
    currentQuest = quest;
    currentQuestTitle.textContent = quest.title;
    currentQuestDescription.textContent = quest.description;
    currentQuest.currentStepIndex = 0; // Reset step for new quest
    executeQuestStep();
}

function executeQuestStep() {
    const quest = currentQuest;
    const step = quest.steps[quest.currentStepIndex];

    if (!step) {
        // Quest completed
        displayMessage(`Objective Completed: "${quest.title}"!`, 'success');
        player.xp += (quest.steps[quest.steps.length - 1].xp || 0); // Reward from last step
        if (quest.steps[quest.steps.length - 1].item) {
             player.inventory.push(quest.steps[quest.steps.length - 1].item);
             displayMessage(`You received a valuable item: "${quest.steps[quest.steps.length - 1].item}"!`, 'success');
        }
        updatePlayerUI();
        checkLevelUp();
        quest.completed = true;

        // Transition to next module or end game
        const nextModuleKey = quest.nextModule;
        if (nextModuleKey && prince2Content.modules[nextModuleKey]) {
            activeModuleKey = nextModuleKey;
            currentQuestTitle.textContent = 'Next Module: ' + prince2Content.modules[nextModuleKey].title;
            currentQuestDescription.textContent = prince2Content.modules[nextModuleKey].description;
            // Optionally auto-start next module or prompt user
            setTimeout(() => {
                startQuest(prince2Content.modules[nextModuleKey]);
            }, 3000);
        } else {
            currentQuestTitle.textContent = 'All PRINCE2 Modules Completed!';
            currentQuestDescription.textContent = 'You are ready for the exam!';
            displayMessage("All core PRINCE2 modules completed! Time for exam prep!", 'success');
            startExamPrepBtn.style.display = 'block'; // Enable exam button
        }
        return;
    }

    switch (step.type) {
        case "dialogue":
            currentDialogueLines = step.text;
            currentDialogueIndex = 0;
            showDialogueBox();
            nextDialogueBtn.onclick = () => {
                displayNextDialogueLine();
                if (currentDialogueIndex >= currentDialogueLines.length) {
                    // Dialogue finished, move to next quest step
                    currentQuest.currentStepIndex++;
                    executeQuestStep();
                }
            };
            displayNextDialogueLine(); // Display first line immediately
            break;
        case "quiz":
            startQuiz(quizzes[step.id]);
            break;
        case "reward":
            player.xp += step.xp || 0;
            if (step.item) {
                player.inventory.push(step.item);
                displayMessage(`You received: ${step.item}`, 'success');
            }
            updatePlayerUI();
            checkLevelUp();
            currentQuest.currentStepIndex++;
            executeQuestStep(); // Move to next step after showing reward
            break;
    }
}

// --- Quiz System ---
function startQuiz(quiz) {
    currentQuiz = quiz;
    quizArea.style.display = 'block';
    dialogueBox.style.display = 'none';
    examPrepArea.style.display = 'none';
    quizFeedbackElem.style.display = 'none';
    quizFeedbackElem.className = ''; // Clear previous classes

    quizQuestionElem.textContent = quiz.question;
    quizOptionsElem.innerHTML = '';
    quiz.options.forEach((option, index) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'quizOption';
        input.value = index;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option.text));
        quizOptionsElem.appendChild(label);
    });
    submitAnswerBtn.disabled = false; // Ensure button is enabled
}

function submitQuizAnswer() {
    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    if (!selectedOption) {
        displayMessage("Please select an answer.", 'error');
        return;
    }

    const selectedIndex = parseInt(selectedOption.value);
    const isCorrect = currentQuiz.options[selectedIndex].isCorrect;

    quizFeedbackElem.style.display = 'block';
    if (isCorrect) {
        quizFeedbackElem.textContent = "Correct! Well done.";
        quizFeedbackElem.classList.add('correct-feedback');
        player.xp += 25; // Reward XP for correct answer
        player.health = Math.min(100, player.health + 5); // Boost confidence
        displayMessage("You gained 25 XP!", 'success');
    } else {
        quizFeedbackElem.textContent = `Incorrect. ${currentQuiz.explanation}`;
        quizFeedbackElem.classList.add('incorrect-feedback');
        player.health = Math.max(0, player.health - 10); // Lose confidence
        displayMessage("Your confidence took a hit!", 'error');
    }
    updatePlayerUI();
    // Disable quiz after answer
    quizOptionsElem.querySelectorAll('input').forEach(input => input.disabled = true);
    submitAnswerBtn.disabled = true;

    // Auto-advance after a delay
    setTimeout(() => {
        quizArea.style.display = 'none';
        quizOptionsElem.querySelectorAll('input').forEach(input => input.disabled = false);
        submitAnswerBtn.disabled = false;
        if (currentQuest) {
            currentQuest.currentStepIndex++;
            executeQuestStep();
        }
    }, 4000);
}

// --- Level Up System ---
function checkLevelUp() {
    if (player.xp >= player.xpToNextLevel) {
        player.level++;
        player.xp -= player.xpToNextLevel; // Carry over excess XP
        player.xpToNextLevel = Math.floor(player.xpToNextLevel * 1.5); // Increase XP needed for next level
        player.health = 100; // Restore health on level up
        updatePlayerUI();
        displayMessage(`🌟 Level Up! You've reached PRINCE2 Knowledge Level ${player.level}! 🌟`, 'success');
    }
}

// --- Exam Preparation Mode ---
function startExamPrep() {
    examMode.isActive = true;
    examMode.questions = shuffleArray(examQuestions.slice()); // Shuffle and copy questions
    examMode.currentQuestionIndex = 0;
    examMode.userAnswers = new Array(examMode.questions.length).fill(null); // Initialize with null
    examMode.correctAnswersCount = 0;
    playAgainBtn.style.display = 'none';

    quizArea.style.display = 'none';
    dialogueBox.style.display = 'none';
    examPrepArea.style.display = 'block';
    examResultsElem.style.display = 'none';

    displayExamQuestion();
    displayMessage("PRINCE2 Foundation Exam Simulation started! Good luck!", 'info');
}

function displayExamQuestion() {
    if (examMode.currentQuestionIndex >= examMode.questions.length) {
        finishExam();
        return;
    }

    const question = examMode.questions[examMode.currentQuestionIndex];
    examQuestionCountElem.textContent = `Question ${examMode.currentQuestionIndex + 1} of ${examMode.questions.length}`;
    examQuestionTextElem.textContent = question.question;
    examOptionsElem.innerHTML = '';

    const isMultiSelect = Array.isArray(question.correctAnswerIndices);
    const inputType = isMultiSelect ? 'checkbox' : 'radio';
    const inputName = isMultiSelect ? `examOption_${examMode.currentQuestionIndex}` : 'examOption';

    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = inputType;
        input.name = inputName;
        input.value = index;

        // Restore previous answer if it exists
        if (examMode.userAnswers[examMode.currentQuestionIndex] !== null) {
            if (isMultiSelect) {
                if (examMode.userAnswers[examMode.currentQuestionIndex].includes(index)) {
                    input.checked = true;
                }
            } else {
                if (examMode.userAnswers[examMode.currentQuestionIndex] === index) {
                    input.checked = true;
                }
            }
        }

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        examOptionsElem.appendChild(label);
    });

    nextExamQuestionBtn.textContent = (examMode.currentQuestionIndex === examMode.questions.length - 1) ? "Finish Exam" : "Next Question";
    finishExamBtn.style.display = 'none'; // Only show Finish when on last question and ready to submit
    nextExamQuestionBtn.style.display = 'block';
}

function recordExamAnswer() {
    const question = examMode.questions[examMode.currentQuestionIndex];
    const isMultiSelect = Array.isArray(question.correctAnswerIndices);

    if (isMultiSelect) {
        const selectedOptions = Array.from(document.querySelectorAll(`input[name="examOption_${examMode.currentQuestionIndex}"]:checked`))
                               .map(input => parseInt(input.value));
        examMode.userAnswers[examMode.currentQuestionIndex] = selectedOptions;
    } else {
        const selectedOption = document.querySelector('input[name="examOption"]:checked');
        examMode.userAnswers[examMode.currentQuestionIndex] = selectedOption ? parseInt(selectedOption.value) : null;
    }
}

function submitExamAnswerAndNext() {
    recordExamAnswer(); // Record the current answer before moving
    examMode.currentQuestionIndex++;
    displayExamQuestion();
}

function finishExam() {
    examMode.isActive = false;
    examPrepArea.style.display = 'none';
    examResultsElem.style.display = 'block';
    playAgainBtn.style.display = 'block';

    examMode.correctAnswersCount = 0;
    examMode.questions.forEach((q, index) => {
        const userAnswer = examMode.userAnswers[index];
        if (Array.isArray(q.correctAnswerIndices)) { // Multi-select question
            const sortedUser = userAnswer ? [...userAnswer].sort() : [];
            const sortedCorrect = [...q.correctAnswerIndices].sort();
            if (sortedUser.length === sortedCorrect.length && sortedUser.every((val, i) => val === sortedCorrect[i])) {
                examMode.correctAnswersCount++;
            }
        } else { // Single-select question
            if (userAnswer === q.correctAnswerIndex) {
                examMode.correctAnswersCount++;
            }
        }
    });

    const score = examMode.correctAnswersCount;
    const totalQuestions = examMode.questions.length;
    const percentage = (score / totalQuestions) * 100;

    let resultText = `You answered ${score} out of ${totalQuestions} questions correctly. (${percentage.toFixed(2)}%)`;
    let passFail = '';
    let feedbackDetails = '';

    if (percentage >= 60) { // PRINCE2 Foundation pass mark is 60% (36/60)
        passFail = 'Congratulations! You passed the PRINCE2 Foundation simulation!';
        displayMessage("You crushed the exam simulation!", 'success');
        player.xp += 500; // Big XP reward for passing exam simulation
        player.health = 100; // Full confidence restore
    } else {
        passFail = 'Keep studying! You did not pass the PRINCE2 Foundation simulation.';
        displayMessage("You'll get it next time! Review those concepts.", 'error');
        player.health = Math.max(0, player.health - 30); // Significant confidence drop
    }
    updatePlayerUI();
    checkLevelUp();

    feedbackDetails += `<h4>Detailed Review:</h4>`;
    examMode.questions.forEach((q, index) => {
        const userAnswer = examMode.userAnswers[index];
        const isCorrect = Array.isArray(q.correctAnswerIndices) ?
                          (userAnswer && [...userAnswer].sort().length === [...q.correctAnswerIndices].sort().length && [...userAnswer].sort().every((val, i) => val === [...q.correctAnswerIndices].sort()[i])) :
                          (userAnswer === q.correctAnswerIndex);
        
        let userChoiceText = "No answer";
        if (Array.isArray(userAnswer)) {
            userChoiceText = userAnswer.map(idx => q.options[idx]).join('; ');
        } else if (userAnswer !== null && q.options[userAnswer] !== undefined) {
            userChoiceText = q.options[userAnswer];
        }

        let correctChoiceText = "";
        if (Array.isArray(q.correctAnswerIndices)) {
            correctChoiceText = q.correctAnswerIndices.map(idx => q.options[idx]).join('; ');
        } else if (q.correctAnswerIndex !== undefined && q.options[q.correctAnswerIndex] !== undefined) {
            correctChoiceText = q.options[q.correctAnswerIndex];
        }


        feedbackDetails += `<p><strong>Question ${index + 1}:</strong> ${q.question}</p>`;
        feedbackDetails += `<p>Your Answer: <span style="color: ${isCorrect ? 'green' : 'red'};">${userChoiceText}</span></p>`;
        if (!isCorrect) {
            feedbackDetails += `<p>Correct Answer: <span style="color: green;">${correctChoiceText}</span></p>`;
            if (q.rationale) {
                feedbackDetails += `<p>Rationale: ${q.rationale}</p>`;
            }
        }
        feedbackDetails += `<hr>`;
    });


    examResultsElem.innerHTML = `<h3>Exam Results</h3><p>${resultText}</p><p>${passFail}</p>${feedbackDetails}`;
}


// --- Utility Function (for shuffling array) ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// --- Game Loop (for animations/rendering - basic example) ---
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    // Basic placeholder for a character or game scene on canvas
    if (dialogueBox.style.display === 'none' && quizArea.style.display === 'none' && examPrepArea.style.display === 'none') {
        ctx.fillStyle = '#666';
        ctx.fillRect(50, 50, 100, 100); // Simple square for player
        ctx.fillStyle = 'white';
        ctx.font = '16px Arial';
        ctx.fillText("Learning Area", 40, 40);
    }
    

    // Request next frame
    requestAnimationFrame(gameLoop);
}

// --- Event Listeners ---
nextDialogueBtn.addEventListener('click', displayNextDialogueLine);
submitAnswerBtn.addEventListener('click', submitQuizAnswer);
nextExamQuestionBtn.addEventListener('click', submitExamAnswerAndNext);
playAgainBtn.addEventListener('click', startExamPrep);

openInventoryBtn.addEventListener('click', () => {
    inventoryList.innerHTML = '';
    if (player.inventory.length === 0) {
        inventoryList.innerHTML = '<li>Your inventory is empty.</li>';
    } else {
        player.inventory.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            inventoryList.appendChild(li);
        });
    }
    inventoryModal.style.display = 'flex';
});

openSkillTreeBtn.addEventListener('click', () => {
    learnedConceptsList.innerHTML = '';
    const learnedModules = Object.values(prince2Content.modules).filter(module => module.completed);
    if (learnedModules.length === 0) {
        learnedConceptsList.innerHTML = '<li>You have not learned any concepts yet.</li>';
    } else {
        learnedModules.forEach(module => {
            const li = document.createElement('li');
            li.textContent = module.title;
            learnedConceptsList.appendChild(li);
        });
    }
    skillTreeModal.style.display = 'flex';
});

closeInventoryBtn.addEventListener('click', () => {
    inventoryModal.style.display = 'none';
});

closeSkillTreeBtn.addEventListener('click', () => {
    skillTreeModal.style.display = 'none';
});

startExamPrepBtn.addEventListener('click', startExamPrep);


// Start the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);

// Start the game loop
requestAnimationFrame(gameLoop);