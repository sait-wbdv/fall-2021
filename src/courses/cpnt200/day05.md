---
layout: layouts/day.njk
title: CPNT 200 Day 5 - VueJS Dynamic Templating
description: Advanced Vue Templating and vscode extension configuration
date: 2021-11-22
---

## [Assignment 4: Vue Templating]({{ '/assignments/cpnt200/assignment-4/' | url }})
- **Due: Friday November 26**

## Topics
- [Vscode Extensions](#vscode)
- [VueJS Dynamic Templating](#vue-syntax)
- [(Optional) Vuetify Deep Dive](#vuetify)
- [Prep for Tomorrow](#prep)
---

## <a id="vscode"></a> Vscode Extensions


## <a id="vue-syntax"></a>VueJS Dynamic Templating
Vue offers a lot of options for templating. These are some of the commonly used directives that you can use in your projects. Review [the documentation](https://vuejs.org/v2/guide/) for more 

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

## Advanced Content Rendering
- [`v-for`](#v-for)
  : Render content from arrays, objects, and lists. [Documentation](https://vuejs.org/v2/guide/list.html)

- [`v-if`/`v-else`](#v-if)
  : Render content based on conditional statements. [Documentation](https://vuejs.org/v2/guide/conditional.html)

- [`v-on`](#v-on)
  : Used for event handling. [Documentation](https://vuejs.org/v2/guide/events.html)

- [`v-model`](#v-model)
  : Used form rendering bindings. It's like `v-bind` but data can pass both ways between parent and child components. [Documentation](https://vuejs.org/v2/guide/forms.html)

---

### <a id="v-for">V-for</a>

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
- [Gist]()

---

### <a id="v-if">V-if/else</a>

- Add conditional logic with `v-if`
  - booleans are great for if/else statements
  - Avoid using this on the same element as a `v-for`
  - Display content under certain conditions ex:
  ```
  <h1 v-if="true">Show this</h1>
  <h1 v-else> show this if false</h1>
- [Gist]() 

---

### <a id="v-on">V-on</a>

- [Gist]()

---

### <a id="v-model">V-model</a>

- [Gist]()

---

## <a id="vuetify"></a>Vuetify

---

## Prep for November 23
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