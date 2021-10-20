---
layout: layouts/day.njk
title: CPNT 262 Day 10 - `fetch()` and Asynchronous Javascript
description: 
date: 2021-10-20
released: true
---

## Housekeeping
- [Assignment 3 announced]({{ '/assignments/cpnt262/' | url }})
    - 10% of Final mark
    - Due: Oct 27 @ 11:59 PM

## Trophy of the day
- A page displaying data fetched from an API!

---

## 1. Spoiler Demo
- Picsum gallery: [Upgrade the gallery using an array of objects](https://gist.github.com/acidtone/a5f40cda47c6d5c1a8e3815833572024).

---

## 2. Postman and JSON Placeholder
### Materials
- [Working with JSON data](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- Sample endpoints: 
  - [JSON Placeholder](https://jsonplaceholder.typicode.com/)

### Activity
- Using Postman and [JSON Placeholder](https://jsonplaceholder.typicode.com/):
    1. Retrieve a list of albums;

        ```
        GET https://jsonplaceholder.typicode.com/albums
        ```

    2. Choose a record from the returned JSON and retrieve the data for just that record by using it's `id`:

        ```
        GET GET https://jsonplaceholder.typicode.com/albums/:id
        ```

---

### 3. Basics: Asynchronous Javascript 
- [Introducing asynchronous Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- Video: [Asynchronous Callbacks](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts&t=5855s) by Tony Alicea (you can stop at 1:48:00)

---

## 4. Fetching data with `fetch()`
### Materials
- [Fetching data from the server](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- Gist: [fetch GET: Retrieving data asynchronously](https://gist.github.com/acidtone/33304c82f8d22e9a330003b19a147303)
- Gist: [Practice REST API endpoints](https://gist.github.com/acidtone/673dfc5c11ce06e9e8cd6ce33609eb3c)

### Activity
- Take one of the [Practice REST API endpoints](https://gist.github.com/acidtone/673dfc5c11ce06e9e8cd6ce33609eb3c) (or one from this list of [list of public APIs](https://github.com/public-apis/public-apis)) and either:
    - Display a single item on a web page;
    - Use `.forEach()` to display a list of items on a web page.

---

## Prep
### Asynchronous Javascript
- [Asynchronous Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
    - [General asynchronous programming concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)
    - [Introducing asynchronous Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- Video: [Asynchronous Callbacks](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts&t=5855s) by Tony Alicea (you can stop at 1:48:00)

### `fetch()` and JSON
- [Fetching data from the server](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [Working with JSON data](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- Tool: [JSON Placeholder](https://jsonplaceholder.typicode.com/)

### Public JSON APIs
- Using this [List of Public APIs](https://github.com/public-apis/public-apis), find an endpoint (a URL that returns a `json` object, not an HTML page) that returns an array of objects. You will use this for an activity tomorrow.

{% comment %}

{% endcomment %}