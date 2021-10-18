---
layout: layouts/day.njk
title: CPNT 262 Day 8 - Looping and higher order functions
description: 
date: 2021-10-18
released: true
---

## Housekeeping

## Trophy of the day
- [A comma-separated list of nouns](https://gist.github.com/acidtone/5c8b6c954dadb7f9e60cbb98cddc0230)
- [A gallery of Lorem Picsum images](https://gist.github.com/acidtone/0c3caca6908b650c17b605f4242ff004)

---

## 1. Spoiler Demos
- add validation to your [Tip Calculator](https://gist.github.com/acidtone/9adae5b6fcdf8f2b3bab4c814f9f1da6) that ensures that:
    1. Remove the `required` attribute from `total` field so we can test;
    2. The user entered a number for Bill Total (i.e. not empty);
    3. The entered Bill Total is greater than $0;
    4. Throw an error if `total` is negative or missing.
- [Text area character counter](https://gist.github.com/acidtone/74727a562940ead812f46c1b1b870d19)

---

## 2. Arrays
### Materials
- MDN: [Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
- MDN: [Common Array Operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Takeaways: [Array fundamentals]({{ '/takeaways/js/arrays/' |  url }})

---

## 3. Loops with `Array.prototype.forEach()`
### Materials
- [Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- Video: [JavaScript Array forEach Method](https://youtu.be/159EAISAxwg) by Steve Griffith 

### Key Takeaways
- `item` is the conventional name given to the array item passed to the callback function but you can name it whatever you want (i.e. `noun` if you're looping an array of nouns).
- You can optionally add the `index` (of the current iteration) as a second argument to the callback function.

### Activities
- [Creating a comma-separated list of nouns](https://gist.github.com/acidtone/5c8b6c954dadb7f9e60cbb98cddc0230)
- [Creating a gallery of Lorem Picsum images](https://gist.github.com/acidtone/0c3caca6908b650c17b605f4242ff004)

---

## 4. Addition assignment operator `+=`
### Terminology
Append
: To add to the end of a string or list.

### Materials
- Codepen: [Outputting an HTML list with .forEach()](https://codepen.io/acidtone/pen/BaQJqvY)

### Key Takeaways
- The addition assignment operator `+=` is used to add a string to the end of a variable
    ```js
    const sentence = "This is a ";
    sentence += 'sentence.';
    console.log(sentence); // "This is a sentence."
    ```
- The addition assignment operator `+=` is a shortcut for the following:

    ```js
    const sentence = "This is a ";
    sentence = sentence + 'sentence.';
    console.log(sentence); // "This is a sentence."
    ```
- Addition assignment is often used to gradually add to an `output` variable from within a loop

    ```js
    let output;
    const list = document.querySelector('ul');
    const hobbies = ['pinball', 'bug hunting', `netflix`];

    const handleItem = function(item) {
      output += `<li>${item}</li>`;
    }
    hobbies.forEach(handleItem);

    list.innerHTML = output;
    ```

---

## Lab Time
### Activities
- Instead of `.innerHTML`, try using one of the following accepted methods of outputting HTML to a page:
    - [Manipulating documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
    - [`<template>`: The Content Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)

---

## Prep
### Arrays
- [Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
- [Common Array Operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Loops
- [Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- Video: [JavaScript Array forEach Method](https://youtu.be/159EAISAxwg) by Steve Griffith    
- Video: [`for` Loop](https://www.youtube.com/watch?v=s9wW2PpJsmQ) by Mosh Hamedani

### Manipulating Documents
- Review: [`Element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- Reference: [Addition assignment (`+=`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)

{% comment %}

{% endcomment %}