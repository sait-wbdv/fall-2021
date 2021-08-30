const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  
  eleventyConfig.addFilter("shortDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
        zone: "Europe/Amsterdam",
    }).setLocale('en').toFormat('LLL d');
  });

  eleventyConfig.addFilter("longDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
        zone: "Europe/Amsterdam",
    }).setLocale('en').toFormat('ccc, LLLL d');
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