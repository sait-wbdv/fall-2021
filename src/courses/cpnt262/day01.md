---
layout: layouts/day.njk
title: CPNT 262 Day 1 - Introduction to Javascript and primitive types
description: In this session we'll install Node, run some javascript in the browser and then talk about values, literally.
date: 2021-10-06
released: true
---

## Housekeeping
- Introductions: Isha and Bruk
- [Assignment Schedule]({{ '/assignments/cpnt262/' | url }})
- Course Overview: [Days 1 - 11]({{ '/schedule/' | url }})
- Tooltime: [Install Node](https://nodejs.org/en/download/)

## Trophy of the day
- Treasure Hunt: [Javascript Literals]({{ '/activities/js/literals/' | url }})
- Submit your list of literals as a daily in Brightspace

---

## 1. Javascript: The big picture
- [A quick history](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)
- The Browser Triad
    - HTML (content): the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.
    - CSS (presentation): a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.
    - Javascript (behaviour): a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

### Demo: [Browser web console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console)

---

## 2. Javascript Basics

### Materials
- [Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)

### Key Takeaways
- JavaScript is case-sensitive and uses the Unicode character set.
- When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom. There are exceptions with invoked functions.
- Hyphens are not allowed in JavaScript names because they can be mistaken as subtraction attempts. 
- [By convention](https://www.w3schools.com/js/js_conventions.asp), we:
    - use camelCase for identifier names (variables and functions);
    - always put spaces around operators ( = + - * / ), and after commas;
    - end a simple statement with a semicolon (there is some debate around this).
    - avoid lines longer than 80 characters (for readability).

---

## 3. Javascript data types
There are 9 data types in Javascript (depending on how you define them) but, for the most part, we only care about 7 of them:
- Primitive types:
    - Strings - used to represent textual data.
    - Numbers - a double-precision 64-bit binary value (numbers between -(2^53 − 1) and 2^53 − 1).
    - Booleans - represents a logical entity and can have two values: true and false.
    - Null - has exactly one value: null.
    - Undefined - a variable that has not been assigned a value has the value undefined. Although you can, never manually assign a variable as undefined.
- Complex types
    - Arrays - a list of values, including other arrays.
    - Objects - a collection of name/value pairs (properties).
    - Functions - a block of reusable code that accepts arguments (input data) and may or may not return a value.

### Materials
- Gist: [Common data types](https://gist.github.com/acidtone/d85a9a0ba6bccfa73cfb269d65a25839)

### Activity
- Treasure Hunt: [Javascript Literals]({{ '/activities/js/literals/' | url }})

---

4. Open Lab

---

## Prep
### MDN Readings
- [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [A first splash into JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)
- [Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)

### Free Code Camp Exercises
- [Javascript basics](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript): Exercises 1-8
    - Start: [Comment Your JavaScript Code](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comment-your-javascript-code)
    - Complete and Stop (or not): [Understanding Case Sensitivity in Variables](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-case-sensitivity-in-variables)

