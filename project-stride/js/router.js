// js/router.js

import * as dashboardView from './views/dashboardView.js';
import * as lessonView from './views/lessonView.js';
import * as onboardingView from './views/onboardingView.js'; // Import the new view
import * as api from './api.js';

let appState = {
  api: api,
  // Add a reference to the router itself to help with navigation
  router: {
    init: init 
  }
};

const routes = {
  '': dashboardView.render,
  '#': dashboardView.render,
  '#/dashboard': dashboardView.render,
  '#/lesson': lessonView.render,
};

function router() {
  // If the user's name is not set, force the onboarding view regardless of hash
  if (!appState.userProgress.user.name) {
    onboardingView.render(appState);
    return;
  }

  const hash = window.location.hash;
  const [route, param] = hash.split('/');
  const renderFunc = routes[route] || routes[''];

  if (renderFunc) {
    renderFunc(appState, param);
  }
}

/**
 * Initializes the router.
 * @param {object} courseData - The full course data object.
 * @param {object} userProgress - The user's progress object.
 */
export function init(courseData, userProgress) {
  appState.courseData = courseData;
  appState.userProgress = userProgress;

  // Add event listener and trigger the initial route check
  window.addEventListener('hashchange', router);
  router(); 
}