// tailwind.config.js
module.exports = {
    darkMode: 'class', // Keep your dark mode setting from before
    content: [
      // Scan HTML files in the root directory (index.html, webdesigns.html etc.)
      './*.html',
      // Scan all njk and md files within your Eleventy source directory
      './eleventy_src/**/*.njk',
      './eleventy_src/**/*.md',
      // Scan your main JS file for classes if necessary
      './assets/js/**/*.js'
    ],
    theme: {
      extend: {
        // Add your theme customizations from before if you had any
        fontFamily: {
          sans: ['Inter var', 'system-ui', '-apple-system', 'sans-serif'],
          display: ['Poppins', 'system-ui', '-apple-system', 'sans-serif']
        },
      },
    },
    plugins: [],
  }