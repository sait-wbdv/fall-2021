---
layout: layouts/day.njk
title: CPNT 262 Day 7 - Validating value types, Scope and Review
description: 
date: 2021-10-15
released: true
---

## Housekeeping
- [Assignment 1]({{ '/assignments/cpnt262/assignment-1/' | url }}) now due Sunday Oct 17 @ 11:59pm

## Trophy of the day
- [Text area character counter](https://gist.github.com/acidtone/74727a562940ead812f46c1b1b870d19)

---

## 1. Spoiler demo: Tip calculator upgrade
- [Tip Calculator with drop down menu](https://gist.github.com/acidtone/9adae5b6fcdf8f2b3bab4c814f9f1da6)

---

## 2. Value validation
A common task in untyped languages is confirming the value type that you're working with.

### Materials
- Takeaways: [Validating values]({{ '/takeaways/js/variables-validating-types/' | url }})

### Activity
- Using your knowledge of comparison operators and conditional statements, add validation to your [Tip Calculator](https://gist.github.com/acidtone/9adae5b6fcdf8f2b3bab4c814f9f1da6) that ensures that:
    1. Remove the `required` attribute from `total` field so we can test;
    2. The user entered a number for Bill Total (i.e. not empty);
    3. The entered Bill Total is greater than $0;
    4. Throw an error if `total` is negative or missing.

---

## 3. Scope
### Materials
- Article: [A Simple Explanation of Scope in JavaScript](https://dmitripavlutin.com/javascript-scope/)
- [Scope terminology]({{ '/takeaways/js/scope/' | url }})

---

## 4. Activity: Text area counter
### Materials
- [`<textarea>` HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
- [Element.getAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)

### Activity
- [Text area character counter](https://gist.github.com/acidtone/74727a562940ead812f46c1b1b870d19)

---

## Lab Time
- [Walkthrough](https://gist.github.com/acidtone/271634bbc2c1b1b6b6ace82306480e2e) of this week's [in-class code](https://github.com/sait-wbdv/in-class/)

---

## Prep
### Validating value types
- Takeaways: [Validating values]({{ '/takeaways/js/variables-validating-types/' | url }})

### Scope
- Article: [A Simple Explanation of Scope in JavaScript](https://dmitripavlutin.com/javascript-scope/)
- Video: [Javascript the Weird Parts: Function scope and the execution stack](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts&t=3598s) @59:58 (you can stop at Dynamic Typing)
- StackOverflow: [Do DOM tree elements with ids become global variables?](https://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-variables)

### Forms
- [`<textarea>` HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

{% comment %}
{% endcomment %}