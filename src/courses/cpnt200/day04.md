---
layout: layouts/day.njk
title: CPNT 200 Day 4 - Dynamic Templating with Vue
description: We will learn about some of the cool things that you can do with vuejs. We will especially focus on some of the important terminology and directives used to make dynamic components.
date: 2021-11-19
---

## Prep
- Read [VueJs Documentation: Introduction](https://vuejs.org/v2/guide/)
- Skim [A quick intro to vue](https://medium.com/free-code-camp/a-quick-introduction-to-vue-js-72937ee8880d)
- Watch [Vue Tips](https://www.youtube.com/watch?v=r5rcdqkYAes)
- Not required but interesting backstory to vue [The VueJS documentary](https://www.youtube.com/watch?v=OrxmtDw4pVI) (34 Minutes)
  

## [Assignment 4: Create a vue component inside your nuxt project]({{ '/assignments/cpnt200/assignment-4/' | url }})
- **Due: Friday November 29 @ 11:59pm**
- Create a simple page layout
- Create a simple component
- Add the component to your page
---

## Outline
- Basic Terminology
- Components
- Directives
- Advanced Directives


## VueJS: Introduction
- Vue is a progressive framework
- It is a littl opinionated, but still flexible
- Vue is scalable and flexible
- You can use as much vue syntax as you want
- Vue syntax is used in Nuxt
- We will use vue for the frontend rendering of page content

### Activity: Set up a simple vue project
- [This documentation](https://vuejs.org/v2/guide/installation.html#CDN) describes different ways of setting up a vue projec.
- Create a vue project in at least one of the following ways:
  - Use a cdn
  - Add vue to a codepen
    - Note that while this is quick to get going with, it's a bit different from how you will use vue in production
  - Create a vue project using `npm` or `yarn`
    - This is how you will be using vue in nuxt and in other vue project

### Basic Terminology
The following are some of the most used parts of using VueJS

- `data`
  : This is the memory of a component. It is similar to props but is meant for to be only used in the component in which it is declared. data goes into your script tag

- Directives
  : Vue directives are bits of templating syntax. they allow you to dynamically generate content on a web page. They are also useful for passing values between components. Use these in the `<template>` tag

- `props`
  : Properties are specifically used to pass information from a parent to a child component. For instance, if you had a card component that you used over again, you would pass information **to** it in the parent component.

### Components Overview
Components are self contained units in Vue. They can have a `template`, `style`, and `script` tag.
- Check out [this gist on vue file structure](https://gist.github.com/lilyx13/7b28e3dfdb0e075e97706f08c8e4ce39) for a quick overview of how a vue file is set up
- The `template` is like an html file
- The `style` is like a css file (can be scoped to just the component)
- The `script` is like a `.js` file
- Vue keeps them all in one place for quick access 
- **You will use the same setup for your layout files**

#### Activity: Create a simple vue page
- Create a vue page layout
  - use the `template`, `style`, `script` syntax
  - add comments to your template to describe content that you want to display
  - in your `data`, add strings and other variables that you want to use.
    - examples:
      - array for any list or group of content (img urls/files, names)
      - objects (can be within arrays)
      - branding variables

#### Component Uses (a few examples)
- page sections (header, footer...)
- card layouts
- buttons, links...
- navigation bar

#### Component layering
- Components can take variables from imports and their parent component (or layout). This allows you to create replicable layouts and pass values into them
- **[Read the Docs](https://vuejs.org/v2/guide/single-file-components.html) for more info

### Common Directives
- Review [this gist on vue directives for examples and detailed notes](https://gist.github.com/lilyx13/bd6ceed5c3ffd642d01ce670fc8893b1)
- Basic directives for displaying content:
  - `v-text`: add string variables from `data`. Similar to `{{ moustache syntax }}`
  - `v-html`: add strings that can render html syntax
- Directives for more complicated rendering
  - `v-for`: for loop through arrays of variables.
  - `v-bind`: for accessing properties from parent components. For adding properties to html tags. One way passing of values.
  - `v-model`: Like `v-bind` but can pass values both ways. Especially useful for forms and input fields.

### Activity: Make a component

- Pick 1 of 3 Options:
  - a header or footer  (mild)
    - render strings from data in the component
    - use: `v-text`, `v-html`, and/or `v-bind`
  - A card (medium)
    - create a figure that includes text for a figcaption and an image
    - use `v-bind`, moustach syntax, and props
  - A button (spicy)
    - use props to change text on something when the button is clicked
    - use `v-bind`, `v-model`, and moustache syntax
    - use `v-on:click` or `@click` syntax to trigger a click event
---

## Advanced Content Rendering

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
- Add conditional logic with `v-if`
  - booleans are great for if/else statements
  - Avoid using this on the same element as a `v-for`
  - Display content under certain conditions ex:
  - [Documentation](https://vuejs.org/v2/guide/conditional.html)
  ```
  <h1 v-if="true">Show this</h1>
  <h1 v-else> show this if false</h1>
  ```
---

## Lab Time
- Work on Assignment 4