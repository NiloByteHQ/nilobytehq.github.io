// .eleventy.js
const { DateTime } = require("luxon"); // Require luxon at the very top

module.exports = function(eleventyConfig) { // Start of the single exported function

  // --- Passthrough Copy Configuration ---
  // Copy the entire assets folder as-is
  eleventyConfig.addPassthroughCopy("assets");

  // Copy specific root-level files
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("404.html");
  eleventyConfig.addPassthroughCopy("inquiry.html");
  eleventyConfig.addPassthroughCopy("templates.html");
  eleventyConfig.addPassthroughCopy("webdesigns.html");

  // Copy all project demonstration files
  eleventyConfig.addPassthroughCopy("project_*.html");

  // Copy other essential root files
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("LICENSE");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  // --- Filters and Shortcodes ---
  // Add date filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    // Format dates like: Apr 29, 2025
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLL dd, yyyy");
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    // Format dates like: 2025-04-29
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Add year shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


  // --- Eleventy Directory and Template Configuration ---
  // This return statement should be the last thing inside the main function
  return {
    dir: {
      input: "eleventy_src",    // Source folder for Eleventy processing
      includes: "_includes",    // Layouts folder (relative to input)
      output: "_site"           // Final build output folder
    },
    // Template formats Eleventy will process within 'input' directory
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };

}; // <-- End of the single module.exports function