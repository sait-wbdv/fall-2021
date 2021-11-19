---
layout: layouts/day.njk
title: CPNT 200 Day 4 - Dynamic Templating with Vue
description: We will learn about some of the cool things that you can do with vuejs. We will especially focus on some of the important terminology and directives used to make dynamic components.
date: 2021-11-19
released: true
---

## Assignment Update
- 1 Vue syntax assignment worth 20% of course mark
- **assigned Monday November 22**
- **due Friday December 26**
- Take the weekend to focus on the 3 CMS assignments


## Outline
- Review Nuxt Content Rendering
- Render Multiple Collections
- Basic Terminology
- Components
- Directives

---

## Nuxt Content Rendering Review
- Discuss and debug common problems
- Short demo of adding content to a dynamic page

### Breakout Session: Construct a Blog Template (30min)
- In your _slug.vue page create a layout that displays all your blog fields

---

## How to Render Multiple Collections
- [This article](https://ednsquare.com/story/nuxt-js-dynamic-nested-routing-with-vue-router------EXBBRt) is helpful for understanding the nuxt router
- Create 2 directories in `pages/`, name them after the collections in your cms
- Add `_slug.vue` to each directory
- Use these [instructions](https://gist.github.com/lilyx13/0c457082cdf9c19d5e223be5acf3084a) to connect the content to the framework.
- Change the relevant variables in the script tag
- [Review this gist](https://gist.github.com/lilyx13/0452d4c090983fa417581c3ef747707f) for details on creating multiple collections

---

## VueJS: Introduction
- Vue is a progressive framework
- It is a littl opinionated, but still flexible
- Vue is scalable and flexible
- You can use as much vue syntax as you want
- Vue syntax is used in Nuxt
- We will use vue for the frontend rendering of page content

### Activity: Set up a simple vue project
- [This documentation](https://vuejs.org/v2/guide/installation.html#CDN) describes different ways of setting up a vue projec.
- Create a vue project using `npm` or `yarn`

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

---

## Common Directives
- Review [this gist on vue directives for examples and detailed notes](https://gist.github.com/lilyx13/bd6ceed5c3ffd642d01ce670fc8893b1)
- Basic directives for displaying content:
  - `v-text`: add string variables from `data`. Similar to `{{ moustache syntax }}`
  - `v-html`: add strings that can render html syntax
- Directives for more rendering data
  - `v-bind`: for accessing properties from parent components. For adding properties to html tags. One way passing of values. It operates sort of like an import script

### Basic Rendering
- Vue offers a few basic rendering directives
- You can use `v-html` or mustache syntax `{{ var-name }}` to add text content from `data(){...}` to your `<template>...</template>`
```
<p v-text="var-name"></p>
```
```
<p> {{  var-name }}</p>
```
- However you cannot add html tags using v-text or mustache syntax
  - for that you can use `v-html`
    - in your data(), you can write html tags and they will render
    ```
    data() {
      return
        var-name: '<p>text stuff n whatever</p>'
    }
    ```
      - Use the string in your template. This will add the paragraph object within the div
      ```
      <div v-html="var-name"></div>
      ```

### Data Binding
- v-bind is used to bind data to attributes and components
- [Check out this gist](https://gist.github.com/lilyx13/9e1c1cd6f7f6f3d6d0a9bb7eff9e5652) for examples of how v-bind can be used

### Activity: Make a component

- Try making any of these:

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

#### Tips for Practicing with Vue Components
- vue directives provide extensive power and flexiblity, the above use cases are suggestions but you can do lots of different things with them.
- A great way to practice this is to:
  - Take one of your layouts from 260.
    - redesign a part of it into a vue component
    - determine some variables to make into dynamic content
      - create a data function in your script
        - then add the variables to your data
        - use v-text, v-html, and/or mustache syntax to render the variables
  - Using imported data (like our cms content), or props called from a parent component is the same process as what's been described above
- Take some time to look at other websites and think about what content should be dynamic
  - Things to look for:
    - Branding and repeated key words
    - Terms that could be changed depending on time and state
    - Repeated components with different information being displayed
      - ie: buttons, banners, cards, articles...
---

## Prep for Monday
- Review [VueJs Documentation: Introduction](https://vuejs.org/v2/guide/)
- Skim [A quick intro to vue](https://medium.com/free-code-camp/a-quick-introduction-to-vue-js-72937ee8880d)
- Watch [Vue Tips](https://www.youtube.com/watch?v=r5rcdqkYAes)
- Not required but interesting backstory to vue [The VueJS documentary](https://www.youtube.com/watch?v=OrxmtDw4pVI) (34 Minutes)
 
---

## Lab Time
- Work on Assignments 1-3