const { DateTime } = require("luxon");
const md = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true,
});
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  
  eleventyConfig.setLibrary('md', md
  .use(require('markdown-it-attrs', {
    // optional, these are default options
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: []  // empty array = all attributes are allowed
  }))
  .use(require('markdown-it-container'), '', {
      validate: () => true,
      render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
              const classList = tokens[idx].info.trim()
              return `<div ${classList && `class="${classList}"`}>`;
          } else {
              return `</div>`;
          }
      }
    })
    .use(require('markdown-it-deflist'))
  );
  eleventyConfig.addFilter('markdownify', str => md.render(str));

  eleventyConfig.addFilter('jsonify', variable => JSON.stringify(variable));

  eleventyConfig.addFilter('slugify', str => require('slugify')(str, {
    lower: true,
    replacement: '-',
    remove: /[*+~.·,()''`´%!?¿:@]/g
  }));

  eleventyConfig.addPlugin(syntaxHighlight);
  
  // For Next/Previous navigation
  eleventyConfig.addCollection('lesson', collection => collection
    .getFilteredByTag('lesson')
    // ... (do things like filter and/or reverse here if you want)
    .map((cur, i, all) => {
        cur.data['siblings'] = {
            'next': all[i + 1],
            'prev': all[i - 1],
        };
        return cur;
    })
  );

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