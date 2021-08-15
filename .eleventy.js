module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/js');

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