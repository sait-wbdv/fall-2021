const { DateTime } = require("luxon");
const md = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
});
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  
  eleventyConfig.setLibrary('md', md);
  eleventyConfig.addFilter('markdownify', str => md.render(str));

  eleventyConfig.addFilter('jsonify', variable => JSON.stringify(variable));

  eleventyConfig.addFilter('slugify', str => require('slugify')(str, {
    lower: true,
    replacement: '-',
    remove: /[*+~.·,()''`´%!?¿:@]/g
  }));

  eleventyConfig.addPlugin(syntaxHighlight);
  
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
    pathPrefix: "/fall-2021/",
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ]
  }
}