const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/js');
  
  eleventyConfig.addFilter("readablePostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
        zone: "Europe/Amsterdam",
    }).setLocale('en').toFormat('LLL d');
  });

  return {
    dir: {
      output: "docs",
      input: "src"
    },
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ]
  }
}