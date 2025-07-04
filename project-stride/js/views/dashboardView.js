// js/views/dashboardView.js

const appRoot = document.getElementById('app-root');

/**
 * Finds the very first lesson that has not been completed.
 * @param {object} courseData - The full course data.
 * @param {object} userProgress - The user's progress object.
 * @returns {object|null} The next lesson object (with themeTitle) or null if all are complete.
 */
function findNextLesson(courseData, userProgress) {
  for (const theme of courseData.themes) {
    for (const module of theme.modules) {
      for (const lesson of module.lessons) {
        if (!userProgress.progress[lesson.id]) {
          // Return the lesson and its parent theme info
          return { ...lesson, themeTitle: theme.title };
        }
      }
    }
  }
  return null; // All lessons are complete
}

/**
 * Calculates the user's overall progress percentage.
 * @param {object} courseData - The full course data.
 * @param {object} userProgress - The user's progress object.
 * @returns {number} The progress percentage (0-100).
 */
function calculateProgress(courseData, userProgress) {
  let totalLessons = 0;
  courseData.themes.forEach(theme => 
    theme.modules.forEach(module => 
      totalLessons += module.lessons.length
    )
  );

  const completedLessons = Object.keys(userProgress.progress).length;
  
  if (totalLessons === 0) return 0;
  return Math.round((completedLessons / totalLessons) * 100);
}

/**
 * Renders the main dashboard view into the app's root element.
 * @param {object} courseData - The full course data.
 * @param {object} userProgress - The user's progress object.
 */
export function render(appState) {
  const { courseData, userProgress } = appState;
  const userName = userProgress.user.name || "Project Manager";
  const userXP = userProgress.user.xp || 0;
  const progressPercentage = calculateProgress(courseData, userProgress);
  const nextLesson = findNextLesson(courseData, userProgress);

  let currentWorkPackageHTML = `
    <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
        <div class="flex justify-center mb-4">
            <i data-lucide="party-popper" class="text-green-500" size="48"></i>
        </div>
        <h3 class="text-lg font-semibold text-green-600 mb-2">Project Complete!</h3>
        <p class="text-gray-600">Congratulations, you've completed all available lessons!</p>
    </div>
  `;

  if (nextLesson) {
    currentWorkPackageHTML = `
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div class="flex items-center mb-4">
              <i data-lucide="book-open" class="mr-3 text-orange-500"></i>
              <h3 class="text-lg font-semibold text-slate-700">Theme: ${nextLesson.themeTitle}</h3>
          </div>
          <p class="text-gray-600 mb-6">Your next task is ready to begin. Stay focused and keep the project on track!</p>
          <button id="start-task-btn" class="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400">
              Start Task: ${nextLesson.title}
          </button>
      </div>
    `;
  }

  const dashboardHTML = `
    <div id="dashboard-view">
        <header class="flex justify-between items-center mb-8">
            <div>
                <h1 class="text-2xl md:text-3xl font-bold text-slate-800">Welcome, ${userName}!</h1>
                <p class="text-lg text-gray-500">Let's continue the project.</p>
            </div>
            <div class="text-right">
                <span class="text-2xl font-bold text-green-500">${userXP} XP</span>
                <p class="text-sm text-gray-400">Experience Points</p>
            </div>
        </header>

        <section id="project-timeline" class="mb-12">
            <h2 class="text-xl font-bold mb-4 text-slate-700">Project Timeline</h2>
            <div class="w-full bg-gray-200 rounded-full h-4 shadow-inner">
                <div class="bg-green-500 h-4 rounded-full transition-all duration-500" style="width: ${progressPercentage}%"></div>
            </div>
            <p class="text-right text-sm text-gray-500 mt-2">${progressPercentage}% Complete</p>
        </section>

        <section id="current-work-package">
            <h2 class="text-xl font-bold mb-2 text-slate-700">Current Work Package</h2>
            ${currentWorkPackageHTML}
        </section>
    </div>
  `;
  
  appRoot.innerHTML = dashboardHTML;
  // Re-run lucide to render any new icons after updating the DOM
  lucide.createIcons();

  // Add event listener for the 'Start Task' button if it exists
  if (nextLesson) {
    document.getElementById('start-task-btn').addEventListener('click', () => {
      // Change the hash to navigate to the lesson view via the router
      window.location.hash = `#/lesson/${nextLesson.id}`;
    });
  }
}