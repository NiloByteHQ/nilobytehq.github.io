// js/router.js

import * as dashboardView from './dashboardView.js';
import * as lessonView from './lessonView.js';
import * as onboardingView from './onboardingView.js';
import * as api from './api.js';

let appState = {
  api: api,
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
  if (!appState.userProgress.user.name) {
    onboardingView.render(appState);
    return;
  }

  // --- UPDATED LOGIC ---
  const hash = window.location.hash;

  // Better parsing for routes with parameters like '#/lesson/l010101'
  const pathParts = hash.split('/');
  const route = pathParts.length > 2 ? `${pathParts[0]}/${pathParts[1]}` : hash; // Reconstructs to '#/lesson'
  const param = pathParts.length > 2 ? pathParts[2] : null; // Gets 'l010101'

  const renderFunc = routes[route] || routes['']; // Look for '#/lesson' in our routes object

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

  window.addEventListener('hashchange', router);
  router(); 
}
