// js/api.js

const API_DATA_URL = './data/prince2_data.json';
const LOCAL_STORAGE_KEY = 'projectStrideProgress';

/**
 * Fetches the entire course data from the JSON file.
 * Uses async/await for modern, clean asynchronous code.
 * @returns {Promise<object>} A promise that resolves to the course data object.
 */
export async function getCourseData() {
  try {
    const response = await fetch(API_DATA_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching course data:", error);
    // You might want to display an error to the user here
    return null;
  }
}

/**
 * Retrieves user progress from localStorage.
 * If no progress is found, it returns a default initial state.
 * @returns {object} The user's progress object.
 */
export function getUserProgress() {
  try {
    const savedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedProgress) {
      return JSON.parse(savedProgress);
    }
  } catch (error) {
    console.error("Error parsing user progress from localStorage:", error);
    // If parsing fails, fall back to the default state
  }

  // Return a default structure if nothing is saved or parsing fails
  return {
    user: { name: null, xp: 0 },
    progress: {}, // e.g., { "l010101": "complete" }
    lastSession: new Date().toISOString(),
  };
}

/**
 * Saves the user's progress object to localStorage.
 * @param {object} progressData - The complete progress object to save.
 */
export function saveUserProgress(progressData) {
  try {
    const dataToSave = JSON.stringify(progressData);
    localStorage.setItem(LOCAL_STORAGE_KEY, dataToSave);
  } catch (error) {
    console.error("Error saving user progress to localStorage:", error);
  }
}