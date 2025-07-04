// js/views/lessonView.js

const appRoot = document.getElementById('app-root');
const XP_PER_QUESTION = 50; // XP awarded for a correct answer

let state = {}; // Local state for this view

// --- NEW: Quiz Type Dispatcher ---
/**
 * Checks the quiz type and calls the appropriate render function.
 */
function startQuiz() {
  state.currentQuestionIndex = 0;
  state.score = 0;
  
  const quizType = state.lesson.quiz.type || 'mcq'; // Default to 'mcq' if type isn't specified

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

// --- NEW: Fill-in-the-Blank Functions ---
/**
 * Renders the fill-in-the-blank quiz interface.
 */
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

/**
 * Handles the submission of the fill-in-the-blank answer.
 */
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
    input.classList.add('border-green-500', 'bg-green-100');
    feedbackContainer.innerHTML = `<p class="text-green-600 font-semibold">Correct! +${XP_PER_QUESTION} XP</p>`;
    state.appState.userProgress.user.xp += XP_PER_QUESTION;
  } else {
    input.classList.add('border-red-500', 'bg-red-100');
    feedbackContainer.innerHTML = `<p class="text-red-600 font-semibold">Not quite. The correct answer was: <strong>${state.lesson.quiz.answer}</strong></p>`;
  }

  setTimeout(finishQuiz, 2500);
}


// --- EXISTING MCQ Functions (renamed for clarity) ---
function renderMCQQuestion() {
  const question = state.lesson.quiz.questions[state.currentQuestionIndex];
  // ... (This function's content is identical to the old 'renderQuestion' function)
  // ...
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
  // ... (This function's content is identical to the old 'handleAnswer' function)
  // ...
  const selectedIndex = parseInt(e.target.dataset.index);
  const question = state.lesson.quiz.questions[state.currentQuestionIndex];
  const isCorrect = selectedIndex === question.answer;

  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    if (parseInt(btn.dataset.index) === question.answer) {
      btn.classList.remove('border-gray-300', 'hover:border-blue-500');
      btn.classList.add('border-green-500', 'bg-green-100');
    }
  });

  const feedbackContainer = document.getElementById('feedback-container');

  if (isCorrect) {
    e.target.classList.add('border-green-500', 'bg-green-100');
    feedbackContainer.innerHTML = `<p class="text-green-600 font-semibold">Correct! +${XP_PER_QUESTION} XP</p>`;
    state.appState.userProgress.user.xp += XP_PER_QUESTION;
  } else {
    e.target.classList.remove('border-gray-300', 'hover:border-blue-500');
    e.target.classList.add('border-red-500', 'bg-red-100');
    feedbackContainer.innerHTML = `
      <p class="text-red-600 font-semibold mb-2">Not quite.</p>
      <p class="text-sm text-gray-700"><strong>Explanation:</strong> ${question.explanation}</p>
    `;
  }

  setTimeout(nextMCQStep, 2500);
}

function nextMCQStep() {
  // ... (This function's content is identical to the old 'nextStep' function)
  state.currentQuestionIndex++;
  if (state.currentQuestionIndex < state.lesson.quiz.questions.length) {
    renderMCQQuestion();
  } else {
    finishQuiz();
  }
}


// --- SHARED Functions (Unchanged) ---
function renderLessonContent() {
  // ... (This function is unchanged)
  const { lesson } = state;
  appRoot.innerHTML = `
    <div id="lesson-view">
      <a href="#" class="inline-flex items-center text-gray-500 hover:text-blue-600 mb-4">
        <i data-lucide="arrow-left" class="mr-2"></i>
        Back to Dashboard
      </a>
      <h1 class="text-3xl font-bold mb-4 text-slate-800">${lesson.title}</h1>
      <div class="prose max-w-none bg-white p-6 rounded-lg shadow-md border border-gray-200">
        ${lesson.content}
      </div>
      <button id="start-quiz-btn" class="mt-8 w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400">
        Check Your Understanding
      </button>
    </div>
  `;
  lucide.createIcons();
  document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
}

function finishQuiz() {
  // ... (This function is unchanged)
  state.appState.userProgress.progress[state.lesson.id] = 'complete';
  state.appState.api.saveUserProgress(state.appState.userProgress);

  appRoot.innerHTML = `
    <div class="text-center bg-white p-8 rounded-lg shadow-xl">
      <i data-lucide="check-circle-2" class="text-green-500 mx-auto" size="64"></i>
      <h2 class="text-3xl font-bold mt-4 text-slate-800">Task Complete!</h2>
      <p class="text-gray-600 mt-2">You have successfully completed this lesson.</p>
      <a href="#" class="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
        Back to Dashboard
      </a>
    </div>
  `;
  lucide.createIcons();
}

export function render(appState, lessonId) {
  // ... (This function is unchanged)
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