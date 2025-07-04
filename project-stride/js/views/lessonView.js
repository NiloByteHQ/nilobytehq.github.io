// js/views/lessonView.js

const appRoot = document.getElementById('app-root');
const XP_PER_QUESTION = 50;

const correctSound = new Audio('./assets/audio/correct.mp3');
const incorrectSound = new Audio('./assets/audio/incorrect.mp3');

let state = {};

// ... (All the functions from the previous step are the same, just the lucide calls need updating)

function renderLessonContent() {
  const { lesson } = state;
  appRoot.innerHTML = `...`; // This HTML block is unchanged
  // --- UPDATED ---
  if (window.lucide) {
    lucide.createIcons();
  }
  document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
}

function finishQuiz() {
  // ... (logic is unchanged) ...
  appRoot.innerHTML = `...`; // This HTML block is unchanged
  // --- UPDATED ---
  if (window.lucide) {
    lucide.createIcons();
  }
}

// ... the rest of the file is unchanged.
// For clarity, I will provide the entire file again with the fixes.

export function render(appState, lessonId) {
    state.appState = appState;
    let lesson = null;
    for (const theme of appState.courseData.themes) {
        for (const module of theme.modules) {
            lesson = module.lessons.find(l => l.id === lessonId);
            if (lesson) break;
        }
        if (lesson) break;
    }
    if (!lesson) {
        appRoot.innerHTML = `<p class="text-red-500">Error: Lesson not found!</p><a href="#">Back to Dashboard</a>`;
        return;
    }
    state.lesson = lesson;
    renderLessonContent();
}

function startQuiz() {
    state.currentQuestionIndex = 0;
    state.score = 0;
    const quizType = state.lesson.quiz.type || 'mcq';
    switch (quizType) {
        case 'fill-in-the-blank':
            renderFillInBlank();
            break;
        case 'mcq':
        default:
            renderMCQQuestion();
            break;
    }
}

function renderFillInBlank() {
    const { question } = state.lesson.quiz;
    const questionText = question.replace('[BLANK]', '<input type="text" id="blank-input" name="blank" class="mx-2 p-1 border-b-2 border-blue-400 focus:outline-none focus:border-blue-600">');
    appRoot.innerHTML = `
    <div id="quiz-view" class="bg-white p-8 rounded-lg shadow-xl text-center">
      <h2 class="text-2xl font-semibold text-slate-800 mb-6">Fill in the Blank</h2>
      <form id="fill-in-blank-form">
        <p class="text-lg text-gray-700 mb-6">${questionText}</p>
        <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600">Submit Answer</button>
      </form>
      <div id="feedback-container" class="mt-6"></div>
    </div>
  `;
    document.getElementById('fill-in-blank-form').addEventListener('submit', handleFillInBlankSubmit);
}

function handleFillInBlankSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('blank-input');
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = state.lesson.quiz.answer.toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    input.disabled = true;
    e.target.querySelector('button').disabled = true;
    const feedbackContainer = document.getElementById('feedback-container');
    if (isCorrect) {
        correctSound.play();
        showXpGain(input);
        input.classList.add('border-green-500', 'bg-green-100');
        feedbackContainer.innerHTML = `<p class="text-green-600 font-semibold">Correct!</p>`;
        state.appState.userProgress.user.xp += XP_PER_QUESTION;
    } else {
        incorrectSound.play();
        input.classList.add('border-red-500', 'bg-red-100');
        feedbackContainer.innerHTML = `<p class="text-red-600 font-semibold">Not quite. The correct answer was: <strong>${state.lesson.quiz.answer}</strong></p>`;
    }
    setTimeout(finishQuiz, 2500);
}

function renderMCQQuestion() {
    const question = state.lesson.quiz.questions[state.currentQuestionIndex];
    const optionsHTML = question.options.map((option, index) => `
    <button data-index="${index}" class="option-btn w-full text-left bg-white p-4 rounded-lg border-2 border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors">
      ${option}
    </button>
  `).join('');
    appRoot.innerHTML = `
    <div id="quiz-view" class="bg-white p-8 rounded-lg shadow-xl">
      <div class="mb-4">
        <p class="text-sm text-gray-500">Question ${state.currentQuestionIndex + 1} of ${state.lesson.quiz.questions.length}</p>
        <h2 class="text-2xl font-semibold text-slate-800">${question.q}</h2>
      </div>
      <div class="grid grid-cols-1 gap-4">
        ${optionsHTML}
      </div>
      <div id="feedback-container" class="mt-6"></div>
    </div>
  `;
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', handleMCQAnswer);
    });
}

function handleMCQAnswer(e) {
    const selectedIndex = parseInt(e.target.dataset.index);
    const question = state.lesson.quiz.questions[state.currentQuestionIndex];
    const isCorrect = selectedIndex === question.answer;
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        if (parseInt(btn.dataset.index) === question.answer) {
            btn.classList.add('border-green-500', 'bg-green-100');
        }
    });
    const feedbackContainer = document.getElementById('feedback-container');
    if (isCorrect) {
        correctSound.play();
        showXpGain(e.target);
        e.target.classList.add('border-green-500', 'bg-green-100');
        feedbackContainer.innerHTML = `<p class="text-green-600 font-semibold">Correct!</p>`;
        state.appState.userProgress.user.xp += XP_PER_QUESTION;
    } else {
        incorrectSound.play();
        e.target.classList.add('border-red-500', 'bg-red-100');
        feedbackContainer.innerHTML = `
      <p class="text-red-600 font-semibold mb-2">Not quite.</p>
      <p class="text-sm text-gray-700"><strong>Explanation:</strong> ${question.explanation}</p>
    `;
    }
    setTimeout(nextMCQStep, 2500);
}

function nextMCQStep() {
    state.currentQuestionIndex++;
    if (state.currentQuestionIndex < state.lesson.quiz.questions.length) {
        renderMCQQuestion();
    } else {
        finishQuiz();
    }
}

function showXpGain(targetElement) {
    const rect = targetElement.getBoundingClientRect();
    const xpElement = document.createElement('div');
    xpElement.innerText = `+${XP_PER_QUESTION} XP`;
    xpElement.className = 'xp-gain-animation font-bold text-lg text-green-500';
    xpElement.style.left = `${rect.left + rect.width / 2 - 30}px`;
    xpElement.style.top = `${rect.top - 20}px`;
    document.body.appendChild(xpElement);
    setTimeout(() => {
        xpElement.remove();
    }, 1500);
}
