---
layout: layouts/day.njk
title: CPNT 200 Day 7 - CMS Dev Team & Flex Day
description: We are going to set up the cpnt200 final groups, talk about working on a developer team, and work on projects. There will be an optional detailed vuetify demonstration as well.
date: 2021-11-24
released: true
---

## [Assignment 5: Group Project]({{ '/assignments/cpnt200/assignment-5/' | url }})
- **Due: December 1 @ 11:59pm**
- Groups of 3 - 4

## Topics
- v-model follow up
- Todo App Refactor
- Some sitewide data options
- vuetify config
- Group Assignment

---

## V-Model Followup
- [Vue Documentation](https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events) on passing data to and from child components
- [A theory focused gist for v-model](https://gist.github.com/lilyx13/08827cab9dfbcb30d64ca6c4dfdc50c4)
- [An example focused gist for v-model](https://gist.github.com/lilyx13/d79df284fbbb9396f9482d69107633e4)
- [Extra information about using `this`](https://gist.github.com/lilyx13/64a8cdd87a2ba916a8c537a2acf0b1e1)

- On the parent component side, use vue model to bind the input to a data() variable
- On the child component side, bind the input value to the value from the model and set an event listener with v-on.
  - `v-on:input="$emit('input', $event.target.value)`

### Activity
- Implement a simple v-model on an input field using v-model
- Put the input into a component
- (extra difficulty) Experiment with the label location:
  - In the component 
  - Outside of the component

---

## Todo App Code Refactoring: DRY Code
- Create major components
  - form
  - list
  - header
- Create small components
  - button
  - list item
- Optimize styles
  - small elements
    - buttons
    - headings
  - large elements
    - form
    - List of Items

### Feature Add
- Open discussion on other features
  - brief brainstorming about implementation ideas
- Goal: 5+ ideas of feature implementation with notes on scope

---

## Creating Site Wide Data

- Some data needs to be used across the whole site, you have a few options for doing this.
  - store in a json file in the static directory
  - when using @nuxt/content, store in the content directory
  - store as data in a layout (limited sitewide accessibility)
- Depending on the data, it might just be easier to write some things out when needed.

---

## Tailwind and Vuetify Configuration
These two css frameworks take very different approaches. Tailwind is focused on customization, vuetify (like other material frameworks) is focused on consistent component focused design.

### Tailwind Basic Configuration Options
  - Automatically set up a full default configuration using
  ```
  npx tailwindcss init --full
  ```
    - This will create [this default configuration](https://unpkg.com/browse/tailwindcss@2.2.19/stubs/defaultConfig.stub.js) in your project.
    - Review the `tailwind.config.js` file
      - Change the colors, fonts, borderRadius, spacing, and any others that you want to customize
      - Try adding [plugins](https://tailwindcss.com/docs/plugins)
  - Manually Configure tailwind
    - `theme`
    - `colors`
    - `fontFamily`
    - `extend spacing`
- [Check this Gist for some notes on customizing TailwindCSS](https://gist.github.com/lilyx13/f1c82147032f0b11a1ea8e6c36c681f6)

### Vuetify Basic Configuration Options
  - Review [the basic installation instructions](https://vuetifyjs.com/en/getting-started/installation/)
  - Set up your apps theme following the [theme configuration](https://vuetifyjs.com/en/features/theme/#light-and-dark) notes
  - 
  - Review the `vuetify.js` file
    - change the color values
    - Set a light and dark variant of your design
    - Set up your fonts
- **Note** that vuetify isn't intended to be customized as much as tailwind is.
  - This is because the components have all been designed to follow material design guidelines.

---

## Group Assignment
- Define Groups
- Discuss Blog Articles
  - [An article on blog lengths](https://www.wesfed.com/blog/ideal-blog-post-length-seo/)
  - small articles: 500 - 750 words (300 minimum)
  - medium articles: 750-1500 words
  - long articles: 2000+ words
- A few types of blog posts
  - Tutorial
  - Analytic
  - Opinion
  - Critique
- Examples of content to add to your posts:
  - Images
  - Vectors
  - Code blocks
  - Gifs
  - Videos
  - Tag cloud
  - Contents

- Review Github Kanban board for project management
  - Extra 2pts on assignment for organizing project with this (must link to the kanban board in your project submission)

### Questions?

---

## Lab Time
- Group Assignment