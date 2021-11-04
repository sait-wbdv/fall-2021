---
layout: layouts/day.njk
title: CPNT 262 Day 18 - Query params and .filter() 
description: 
date: 2021-11-03
released: true
---

## Housekeeping
- Announced after lunch:
    - Group assignments for Final Project
    - Draft of Assignment 6 and Group Project announced
- Tooltime: 
    - Experiment: starter code in `in-class` 
    - [Syncing a Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)

## Trophy of the day
- A randy module: Build an express module that returns a random item from a List Entry endpoint.
- A filter that returns a list of poisoned guild members

---

## 1. Spoiler demo: Random array items
- Create a local module that accepts any array as an argument and returns a random item from that array. See: [Find a random item in an Array](https://gist.github.com/acidtone/2a3cac26a229aa95685e5cf6344f2e4e)

---

## 2. Query params
### Materials
- [Get Query Strings and Parameters in Express.js - Stack Abuse](https://stackabuse.com/get-query-strings-and-parameters-in-express-js/)
- Gist: [Handling URL query parameters](https://gist.github.com/acidtone/1916673f27a1e1668c0a5855ea6f7cf4)
- [REST APIs: Getting Started](https://gist.github.com/acidtone/55f3c53bab36a7a9f9927a96a2556025)

### Key Takeaways
- The `request` object stores parameters in three main objects:
    1. `req.params`: Parameters passed as route segments. 
        - Example: `GET /api/animals/:id`.
    2. `req.query`: Parameters passed after the `?` in a URL.
        - Example: `/api/animals?page=3&per_page=10`.
    3. `req.body`: Parameters passed in the request body, such as when a form is submitted with `method="POST"`.
- Query parameters are not included in the path when being matched by `app.get()` and the other method handlers.
- In REST APIs, query parameters are most used for:
    - filtering
    - sorting
    - pagination
    - search
- Query params are usually applied to a List Entry endpoint, even if only one item is returned.

### Demo: Random guild member endpoint
Find a random guild member using this sample code:[Find a random item in an Array](https://gist.github.com/acidtone/2a3cac26a229aa95685e5cf6344f2e4e)
- Starter Code
    - [Random array item](https://github.com/sait-wbdv/in-class/tree/main/cpnt262/11-03-query-params-filter/01-starter-random-array-item)
    - [Guild routes](https://github.com/sait-wbdv/in-class/tree/main/cpnt262/11-03-query-params-filter/02-starter-guild-routes)

### Activity
Build your own local module that returns a random item in an array and apply it to your own List Entry route (i.e. from Assignment 5).

---

## 3. Filtering arrays with `Array.filter()`
### Materials
- MDN: [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Filter an Array of Objects in JavaScript](https://masteringjs.io/tutorials/fundamentals/filter-array-of-objects)

### Key Takeaways
- `Array.filter()` loops through an array of objects, expects a Boolean return value and it creates a new empty array that will be returned at the end of the loop:
    - If `true` is returned, the current item is added to the new array;
    - If `false` is returned, the loop continues to the next item;
    - At the end of the loop, `Array.find()` returns the new array containing all the items that passed the test.
- The `.filter()` method operates very similarly to `.find()`, except that it returns an array instead of a single item.
- `.filter()` returns a _new_ array, it does not modify the original array.  

### Activity
Modify the List Entry endpoint of the [Guild sample code](https://github.com/sait-wbdv/in-class/tree/main/cpnt262/11-03-query-params-filter/06-starter-guild-poison-filter) so that it can return a list of poisoned guild members.

---

## Lab Time
- [Final Project]({{ '/assignments/cpnt262/final-project/' | url }}): [Group assignments]({{ '/assignments/cpnt262/teams/' | url }})
    - Decide on a group name
    - Decide on a theme for your website
- Morning Activities
- Stretch resources:
    - [REST API: Sorting, Filtering, and Pagination](https://www.taniarascia.com/rest-api-sorting-filtering-pagination/) by Tania Rascia
    - [Sort an Array of Objects in JavaScript](https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/)
        - Reference: [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

---


{% comment %}
{% endcomment %}