---
layout: layouts/day.njk
title: CPNT 200 Day 5 - VueJS Dynamic Templating
description: Advanced Vue Templating and vscode extension configuration
date: 2021-11-22
released: true
---

## [Assignment 4: Vue Templating]({{ '/assignments/cpnt200/assignment-4/' | url }})
- **Due: Friday November 26**

## Topics
- [Vscode Extensions](#vscode)
- [VueJS Dynamic Templating](#vue-syntax)
- [Tailwind and Vuetify Basic Config](#twind-config-1)
- [Prep for Tomorrow](#prep)
---

## <a id="vscode"></a> Vscode Extensions
- Eslint and Prettier can be installed globally `npm install -g prettier eslint`.
  - If you do this, then you can run `eslint --init` in your project to configure your project settings
  - Note that you will want to have project based eslint and prettier installed because otherwise formatting may not be consistent.
### Eslint
- Run `eslint --init` in your project root
- [Official Documentation](https://eslint.org/)
- [Eslint Getting Started Docs](https://eslint.org/docs/user-guide/getting-started)
- [Medium Article Tutorial](https://medium.com/@LegendofColt/eslint-for-vue-js-f39194f15beb)

### Prettier
- 
- [Official Documentation](https://prettier.io/docs/en/install.html)
- [Prettier + Eslint](https://www.robinwieruch.de/prettier-eslint/)
  - Install 2 packages ontop of prettier and eslint to make them work together better
  ```
  npm install --save-dev eslint-config-prettier eslint-plugin-prettier
  ```
  - Try using a popular style guide like airbnb's
- Edit the `prettier.
- [Blog Tutorial](https://glebbahmutov.com/blog/configure-prettier-in-vscode/)

### Vetur
- Review [This documentation](https://vuejs.github.io/vetur/guide/setup.html)
  - Add `vue` to your eslint config
- Use a `jsconfig.json` file to improve vue syntax highlighting in your project
  - [This article is really helpful](https://lmichelin.fr/vscode-intellisense-jsconfig-vue-js-nuxt-js-absolute-imports/)
    - IntelliSense doesn't work with code completion properly with absolute imports
    - Put this in your jsconfig.json to make it work properly with nuxt
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./*"],
      "@/*": ["./*"],
      "~~/*": ["./*"],
      "@@/*": ["./*"]
    }
  },
  "exclude": ["node_modules", ".nuxt", "dist"]
}
```
  - Note that this should be done when you select `jsconfig.json` at nuxt project setup
- [Vetur Documentation](https://vuejs.github.io/vetur/)

---

## Vue Syntax Review
- We will take some time to review the syntax we worked on last week, this will be to create content to loop through when we get to dynamic content

### Props and Data
- Data is a components _memory_
- Props are _properties_ that a child component takes from a parent component
  - parent child relationship in vue refers to :
  ```
  |- components/
    |- Button.vue
  |- pages/
    |- index.vue
  ```
  - In this example, you would use a button on the page
  - the page is the parent, the button is the child
  - components in the components directory can have child components too

### V-bind review
- Use v-bind to 'bind' data to an html element

### Activity: Vue Card Component
- Create contents for a single card component as data on a page
- Examples:
  - Team Member
  - Product
  - Character
- Create a card component layout
  - use object notation to assign props
  - use v-bind to send the object to the component
- We will be duplicating these dynamically with v-for loops

## <a id="vue-syntax"></a>VueJS Dynamic Templating
Vue offers a lot of options for templating. These are some of the commonly used directives that you can use in your projects. Review [the documentation](https://vuejs.org/v2/guide/) for more 


## Advanced Content Rendering
- [`v-for`](#v-for)
  : Render content from arrays, objects, and lists. [Documentation](https://vuejs.org/v2/guide/list.html)

- [`v-if`/`v-else`](#v-if)
  : Render content based on conditional statements. [Documentation](https://vuejs.org/v2/guide/conditional.html)

---

### <a id="v-for">List rendering with V-for</a>

- Use `v-for` to loop through arrays of variables and render groups of content
  ```
    <li v-for="item in items" :key="item.name> {{ item.name }}</li>
  ```
  - This will access a a group of objects in an array called `items` in `data`.
  - It uses the `name` property of the `item` as the counter.
  - It will create a list item with the array item's name in the text
  - You  can also access the index.
  ```
  <li v-for="(item, index) in items"> {{ index }} + {{ item.title }} + ': ' + {{ item.description }}</li>
  ```
- [V-for Detailed Gist](https://gist.github.com/lilyx13/b05778d1e2c02a33f13158788aa4639b)
  - This gist covers basic and advanced syntax using examples

### Activity: Display Cards with V-for
- Add more content to your card data
- Create a v-for loop to render the cards onto a page

#### Extra challenge
- Create a list that displays only some content from your array of objects
- Use the `name` argument to display content
- Use the `index` argument to display content
- Try rendering content in a range

---

### <a id="v-if">Conditional Rendering with v-if/else</a>

- Add conditional logic with `v-if`, `v-else-if`, `v-else`
  - booleans are great for if/else statements
  - Avoid using this on the same element as a `v-for`
  - Display content under certain conditions ex:
  ```
  <h1 v-if="true">Show this</h1>
  <h1 v-else> show this if false</h1>
  ```
- This can be used at all levels of your html hierarchy
- It can also be applied directly to the `<template>` tag
  - This allows you to make components render content dramatically different based on specific conditions
- `v-if` fully sets event listeners and child components in conditional blocks
- `v-if` is lazy, and will not render initial content if it doesn't have to
- [v-if/v-else Gist](https://gist.github.com/lilyx13/b76a2f92cff897e0edbb60de59b58dec)

#### v-show
- There is also a directive called `v-show`. This conditional rendering is only used for css changes as it is always rendered by the DOM, v-if/else is more effecient for actual content
- v-if has a higher toggle cost and v-show has higher initial render cost.
  - use v-show to hide something as you would with `display: none`
  - use `v-if` for conditions that won't change much

### Activity: Conditional Rendering
- Using the data created for the v-for activity, create another component that renders information based on specific conditions
- Examples:
  - Use a conditional v-if/else etc to show a specific welcome message based on user input
  - Create a Dark mode toggle
  - Use v-show to hide certain elements

---

## <a id="twind-config-1"></a> Tailwind & Vuetify Basic Config (Extra Content)
- **Tailwind Basic Configuration Options**
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
- **Vuetify Basic Configuration Options**
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

## Prep for November 23
- Read the essential and strongly recommended sections of the [vuejs style guide](https://vuejs.org/v2/style-guide/)
- Read [In Defense of a Fuzzy Website](https://css-tricks.com/in-defense-of-a-fussy-website/)
- Scan These websites:
  - [Cassie Evan's Website](https://www.cassie.codes/)
  - [Josh Comeau's Website](https://www.joshwcomeau.com/)
  - We will review this site for content that:
    - Would use vue rendering syntax
    - Be created using a CMS
  - And we will discuss:
    - Design Styles
    - How she showcases her work
  - Be ready for small group discussion
- Start thinking about what role in web development you would like to focus on for the CPNT 200 Group Project
  - Backend Developer (Setting up CMS, Netlify Deployment)
  - Content Creator (Gathers assets, writes articles, determine cms needs)
  - Frontend Developer (Setting up Nuxt, writes a lot of vue syntax)
  - Designer (Setting up CSS Framework, general site design)

---