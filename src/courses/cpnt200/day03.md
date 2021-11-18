---
layout: layouts/day.njk
title: CPNT 200 Day 3 - Integrating CMS with Nuxt Frontend
description: Deploy your blog pages to your nuxt site and deploy the website to netlify.
date: 2021-11-18
released: true
---

## [Assignment 3 - JAMstack Setup]({{ '/assignments/cpnt200/assignment-3/' | url }})
- **Due: November 24 @ 11:59**
- Push a blog article onto your nuxt page dynamically
- Deploy to Netlify

## Topics
- Review Collections and Fields
- Nuxt-Content Setup
- Dynamically load CMS posts into Nuxt
- CSS Framework Exploration

### Resources
- [Fixing NPM Vulnerabilities Guide](https://gist.github.com/lilyx13/52a4356d5cb7eee315d71493c693b59b)
- [Netlify CMS Collections Tutorial](https://dev.to/robbailiff/how-to-configure-the-collections-in-netlify-cms-50kb)
- [Nuxt Content Documentation](https://gist.github.com/lilyx13/0c457082cdf9c19d5e223be5acf3084a)
- [Nuxt Content Module Article](https://dev.to/rdelga80/using-nuxt-s-new-nuxt-content-module-to-launch-my-new-portfolio-3iha)
- [Fetching Content](https://content.nuxtjs.org/fetching/)

---

## Netlify CMS Collections and Fields Review
- Review yaml syntax for nested lists
  - white space sensitive
  - Creating different widgets
- [Netlify CMS Collections Gist](https://gist.github.com/lilyx13/003a7bca82c6acdb72cc4ccd81cc6fe0)
  - This is the example we used in class. it shows a few use cases for setting up a content editor. Note the nesting and indentation styles
---

## Nuxt-Content Setup
- Make sure that you have installed the module `@nuxt/content`
  - If it's not in your `package.json` file, run `npm i @nuxt/content`
  - Then add it to the `nuxt.config.js` file:
  ```
  {
  modules: [
    '@nuxt/content'
  ],
  content: {
    // Options
  }
}```

- nuxt-content allows you to use:
  - `$content`
  - `fetch()`
  - `asyncData`
  - `<nuxt-content>` component
- This allows you to call content onto any page

### Dynamically Load CMS Posts into Nuxt
- [How to create a page template](https://gist.github.com/lilyx13/0c457082cdf9c19d5e223be5acf3084a)
- [How to add links to your cms content to a page](https://gist.github.com/lilyx13/d584d2fd37059892d6b41e60c96d3018)

---

## Lab Time
- Work on [Assignment 3]({{ '/assignments/cpnt200/assignment-3' | url }})