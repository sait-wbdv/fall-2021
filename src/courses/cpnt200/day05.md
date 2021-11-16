---
layout: layouts/day.njk
title: CPNT 200 Day 5 - VueJS Dynamic Templating
description: We will cover some of the more advanced directives in vue templates
date: 2021-11-22
---

## [Assignment 5: Advanced Vue Templating]({{ '/assignments/cpnt200/assignment-5/' | url }})
- Due Monday November 29

## Topics
- Loops: `v-for`
- Binding: `v-model`
- Conditionals: `v-if`

---

## VueJS Dynamic Templating
Vue offers a lot of options for templating. These are some of the commonly used directives that you can use in your projects. Review [the documentation](https://vuejs.org/v2/guide/) for more 

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
 