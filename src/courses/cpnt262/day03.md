---
layout: layouts/day.njk
title: CPNT 262 Day 3 - Strings, string methods and the browser environment
description: In this session we'll take a closer look at the String value, coercion and string methods. We'll then play with dates and strings in the browser.
date: 2021-10-08
released: true
---

## Houskeeping
- [in-class code pushed to GitHub](https://github.com/sait-wbdv/in-class/)

## Trophy of the day
- [A Date with Harry Potter](https://gist.github.com/acidtone/d7685ba337620ce4c01e2767211efb95)

---

## 1. Spoiler Demo: Tip Calculator 
### Materials
- [JS Activity: Tip Calculator](https://gist.github.com/acidtone/5c13ec3ff2ea53b7f75ae3692ca944d1)

---

## 2. Strings and string methods
### Materials
- [Handling text - strings in Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)
- [Useful string methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- Takeaways: [String Methods]({{ '/takeaways/js/string-methods/' | url }})
- Gist: [String Methods](https://gist.github.com/acidtone/4f1bd6ffff85fc8f4fed359b619fe76b)

---

## 3. Dates and the `Element` prototype
### Materials
- [Manipulating Documents with Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Element.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
- [Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

### Key Takeaways
- The `querySelector()` method accepts any valid CSS selector, such as:
    - `.intro`
    - `h1`
    - `#sign-in-form`
    - `a[href="https://example.org"]`
- `querySelector()` will return the first matching element only. Use `querySelectorAll()` to return a list of all matching elements.
- _All_ HTML elements have the `querySelector()` method, so you can query for elements directly inside other elements:

    ```js
    // finds the first paragraph in the document
    const paragraph = document.querySelector('p');

    // finds the first span element in the above paragraph
    const paraSpan = paragraph.querySelector('span'); 
    ```

- Both `textContent` and `innerHTML` are object properties that you can read and assign like any other variable.
- Use `textContent` unless the value contains HTML, then use `innerHTML`.

### Activity
- [A Date with Harry Potter](https://gist.github.com/acidtone/d7685ba337620ce4c01e2767211efb95)

---

## 4. Open Lab
- Trophy of the Day
- Free Code Camp Exercises
- Assignments
- Prep for tomorrow

---

## Prep
### MDN Readings
- String data type
    - [Handling text - strings in Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)
    - [Useful string methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- Outputting information to a web page
    - Background: [Manipulating Documents with Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
    - Creating a variable from an HTML element with [Element.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
    - Outputting to an HTML element with [Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

### Free Code Camp Exercises
- [Javascript basics](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript): Exercises 23-36
    - Start: [Declare String Variables](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-string-variables)
    - Complete and Stop (or not): [Word Blanks](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/word-blanks)

{% comment %}


{% endcomment %}