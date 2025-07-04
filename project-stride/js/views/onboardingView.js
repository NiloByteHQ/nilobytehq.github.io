// js/views/onboardingView.js

const appRoot = document.getElementById('app-root');
let state = {};

/**
 * Handles the submission of the name form.
 * @param {Event} e - The form submission event.
 */
function handleSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[name="username"]');
  const userName = input.value.trim();

  if (userName) {
    // Update the user's name in the progress object
    state.appState.userProgress.user.name = userName;
    
    // Save the updated progress object to localStorage via the api
    state.appState.api.saveUserProgress(state.appState.userProgress);

    // --- UPDATED LOGIC ---
    // Instead of re-initializing, just change the hash to navigate.
    // The router's 'hashchange' listener will handle the rest.
    window.location.hash = '#/dashboard';
  }
}

/**
 * Renders the onboarding screen.
 * @param {object} appState - The global application state.
 */
export function render(appState) {
  state.appState = appState;
  
  const onboardingHTML = `
    <div id="onboarding-view" class="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div class="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full">
        <i data-lucide="rocket" class="mx-auto text-blue-500 mb-4" size="64"></i>
        <h1 class="text-3xl font-bold text-slate-800 mb-2">Welcome to Project Stride!</h1>
        <p class="text-gray-600 mb-6">Let's get your project started. First, what should we call you, Project Manager?</p>
        
        <form id="onboarding-form">
          <input 
            type="text" 
            name="username" 
            placeholder="Enter your name here..."
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button type="submit" class="mt-4 w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors">
            Begin Project
          </button>
        </form>
      </div>
    </div>
  `;

  appRoot.innerHTML = onboardingHTML;
  
  if (window.lucide) {
    lucide.createIcons();
  }
  
  document.getElementById('onboarding-form').addEventListener('submit', handleSubmit);
}
