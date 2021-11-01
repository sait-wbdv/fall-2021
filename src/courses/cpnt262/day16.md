---
layout: layouts/day.njk
title: CPNT 262 Day 16 - Express JSON routes
description: 
date: 2021-11-01
released: true
---

## Housekeeping
- [Assignment 5: Deployed REST API]({{ '/assignments/cpnt262/assignment-5' | url }})

## Trophy of the Day
- A REST API with the endpoints:

    ```js
    GET /api/your-object-here
    GET /api/your-object-here/:id
    ```

---

## 1. Higher order functions with `array.find()`
### Terminology
Higher order function
: A function that hides (abstracts) information so we can tackle a problem at a higher (more abstract level). Examples: [`Array.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`Array.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).

### Materials
- Search: ["js higher order functions"](https://www.google.com/search?q=js+higher+order+functions)
- Reference
    - [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- Gists: 
    - [Find a value in an array](https://gist.github.com/acidtone/385b2f850d4881364ac7b0da320f239a)
    - [Find an object in an array](https://gist.github.com/acidtone/fec626b5701beeed49cea776fc354325)

### Key Takeaways
- `Array.find()` loops through an array of objects and expects a Boolean return value:
    - If `true` is returned, the loops stops and `Array.find()` returns the current item;
    - If `false` is returned, the loop continues to the next item;
    - If no items are found by the end of the loop, `Array.find()` returns `undefined`.
- This method is considered a higher order function, meaning it hides (abstracts) information so we can tackle a problem at a higher (more abstract level). In this case, `Array.find()` hides the fact that it's looping through the array (and that it operations differently based on a boolean result).

### Activity: Practice with `Array.find()`
1. Find your array from your Gallery `.forEach()` assignment (or some other array of Objects);
2. Choose a property (with a string or number value) within your objects to test against;
3. Using `process.argv` and `Array.find()`, create a command line app that returns the item that matches the `inputValue` that is passed from the command line OR print a "Please try again" statement if no items were found.

---

## 2. Express routes

### Materials
- Prep
  - Review: 
      - [How to build a REST API with Node js & Express](https://www.youtube.com/watch?v=pKd0Rpw7O48) by Programming with Mosh
      - [Introduction to REST]({{ '/takeaways/express/rest/' | url }})
  - [Express Routes](https://expressjs.com/en/guide/routing.html) in the ExpressJS Documentation
- Sample Code
  - [Guild starter code](https://github.com/sait-wbdv/in-class/tree/main/cpnt262/11-01-express-routes/01-route-params-starter)

---

## 3. Route parameters and `request.params`

### Materials
- Prep
  - [Route parameters](https://expressjs.com/en/guide/routing.html#route-parameters) (linked to "Route parameters" section of "Express Routes" above)
  - [Step 3 - Using `req.params` with Routes](https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters#step-3-–-using-req-params-with-routes) in [How To Retrieve URL and POST Parameters with Express](https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters) on Digital Ocean
  - Reference: [`req.params`](https://expressjs.com/en/4x/api.html#req.params)
- Sample code 
  - [Definitions in-class code](https://github.com/sait-wbdv/in-class/tree/main/cpnt262/10-29-deploy-to-heroku/01-definitions)

### Activity
- [Express Activity: Create a JSON endpoint using route parameters](https://gist.github.com/acidtone/f470990b7ebd01907a37118f200b17ab)
{% comment %}


-- 

## Relevant Gists
- [Converting Javascript objects into json files](https://gist.github.com/acidtone/9ba1c784d5f78fdc9dc4df9c6f26bcf8)

- [Stretch Activity: Custom (local) Node modules](https://gist.github.com/acidtone/ebdc01c9fe3516f6d34fd3ff1249349c)
    - Spoilers: [Node: Three Stages of a greet app](https://gist.github.com/acidtone/7ab0bd9d11f8d85a39fe185d2fb0a065)
- [Express: `res.send()` vs `res.json()` vs `res.end()`](https://gist.github.com/acidtone/df91c6276e69ae3726e3f8b39223ceec)
{% endcomment %}