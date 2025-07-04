// js/main.js

import * as api from './api.js';
import * as router from './router.js'; // Import the router

async function init() {
  console.log("Project Stride is initializing... 🚀");

  const courseData = await api.getCourseData();
  if (!courseData) {
    console.error("Initialization failed: Could not load course data.");
    return;
  }

  const userProgress = api.getUserProgress();
  
  // Initialize the router and pass the loaded data to it.
  // The router will now be responsible for rendering the correct view.
  router.init(courseData, userProgress);
}

init();