---
layout: layouts/day.njk
title: CPNT 262 Day 17 - JSON 404 errors and local modules
description: 
date: 2021-11-02
released: true
---

## Housekeeping
- Tutorials: [Javascript Exercism](https://exercism.org/tracks/javascript)
- Ash and Norv will cover for Tony this afternoon

## Trophy of the Day
- A local module!

---

## 1. Spoiler demo
### Materials
- [Create a JSON endpoint using route parameters](https://gist.github.com/acidtone/f470990b7ebd01907a37118f200b17ab)
- Review: [Validating values](https://sait-wbdv.github.io/fall-2021/takeaways/js/variables-validating-types/)- [Arrow Functions In Javascript](https://medium.com/@mandeepkaur1/arrow-functions-in-javascript-9254e41a80e3)

### Activity
- A walk-through and optimization of the `guild` spoilers.

### Key Takeaways
A good coder is a lazy coder. Arrow functions are made for lazy coders.

Given the following input variables:

```js
const cats = require('./cats') // Array of objects
const searchName = 'fluffy' // From either argv or url 
```

Each of the following do the exact same thing (find a `cat` based on `name`).

1. Not lazy at all (bad):

    ```js
    const foundCat = cats.find(function(cat){
      if (cat.name === searchName) {
        return true
      } else {
        return false
      }
    })
    ```

    - The `if`/`else` is redundant in this case.

2. Lazy (good):

    ```js
    const foundCat = cats.find(function(cat){
      return cat.name === searchName
    })
    ```
    
    - Returning the comparison expression directly instead.

3. Suuuuper Lazy (fancy and modern):

    ```js
    const foundCat = cats.find(cat => cat.name === searchName)
    ```

    - `return` is assumed if the block is a single expression.

---

## 2. Review
### Terminology
Expression
: A piece of code that returns a value.

### Materials
- [Day 1: Data types]({{ '/courses/cpnt262/day01/' | url }})
  - Gist: [Common Data Types](https://gist.github.com/acidtone/d85a9a0ba6bccfa73cfb269d65a25839)
- [Day 4: Functions]({{ '/courses/cpnt262/day04/' | url }})

### Activity
Create a function that accepts any array as an argument and returns a random item in that array. See: [Find a random item in an Array](https://gist.github.com/acidtone/2a3cac26a229aa95685e5cf6344f2e4e)

---

## 3. Local modules
### Terminology
Module
: A reusable block of code whose existence does not accidentally impact other code (Javascript didn't have this before).

CommonJS Module
: An agreed upon standard for how code modules should be structured. Because modules are a relatively new feature of Javascript, there are competing standards: ES Modules are used in the browser but CommonJS Modules are most common in Node.js (which supports both standards).

### Materials
- Prep
    - Video: 19:16 - 37:40 of [Node.js Tutorial for Beginners](https://youtu.be/TlB_eWDSMt4?t=1156) by Mosh Hamedani    
    - [Export a Module in Node.js](https://www.tutorialsteacher.com/nodejs/nodejs-module-exports) by Tutorials Teacher
- Gist: [Custom (local) Node modules](https://gist.github.com/acidtone/4dd61a189ef934a76df8efde14738dfe)

### Key Takeaways
- You must prefix local module paths with `./`.
- `module.exports` is an empty object by default.
- You can assign any value to `module.exports` to expose it to the outer environment.
- `require()` returns the value that is assigned to a module's `module.exports`. All other variables will be private to the module. 

### Activities
- Find a literal in your Command Line App assignment and move it into a local module.
- Take the random item function from this morning's demo and move it into a local module such that:

    ```js
    const randomItem = require('./random-item')
    const array = ['one', 'two', 'three']

    console.log(randomItem(array)) // Output a random item
    ```

---

## Lab Time
- Ash and Norv!

---

{% comment %}
## Review

## Relevant Gist


  - Example: [Node: 3 stages of greet](https://gist.github.com/acidtone/7ab0bd9d11f8d85a39fe185d2fb0a065)
- [REST APIs: Getting Started](https://gist.github.com/acidtone/55f3c53bab36a7a9f9927a96a2556025)

{% endcomment %}