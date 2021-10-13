---
layout: layouts/day.njk
title: CPNT 262 Day 5 - classList API and form events
description: In this session we'll look at two methods of interacting with a page using event listeners - the classList API and form events.
date: 2021-10-13
released: true
---

## Housekeeping

## Trophies of the day
- [CSS Toggle](http://browsertherapy.com/challenges/css-toggles-with-classlist/)

---

## 1. Spoiler Demo: Eat and Drink
- [Eat and Drink click handlers](https://gist.github.com/acidtone/37a879d3777bc123483d582248eded90)

---

## 2. Forms: text and number fields

### Materials
- Article: [Prevent Default and Form Events](https://wesbos.com/javascript/05-events/prevent-default-and-form-events) by Wes Bos
- Takeaways: [Forms and Javascript]({{ '/takeaways/js/forms/' | url }})

### Activities
- [Adding Machine](https://gist.github.com/acidtone/41311f0c2ae259445de4e6ca3b400edc)
- Refactor the latest version of the [Tip Calculator](https://gist.github.com/acidtone/e9e291765e7dea1928bd643b46660438) to accept form input:
    1. Create a form with two field inputs for subtotal and rate.
    2. Add a `submit` event listener to the form that invokes a function called `handleSubmit`.
    3. In `handleSubmit` prevent the form from submitting with `preventDefault()` and calculate the bill total.
    4. Output the bill total to the page using `textContent`.

---

## 3. CSS manipulation with classList
### Terminology
Separation of concerns
: The idea that each module or layer in an application should only be responsible for one thing and should not contain code that deals with other things.

### Materials
- ['Element.classList'](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
    - [dot notation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#Dot_notation)
    - [Code Examples](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Examples)

### Activity
- [Code Challenge: CSS Toggles with classList](http://browsertherapy.com/challenges/css-toggles-with-classlist/)

---

## 4. Lab Time
- [Assignment 1](https://sait-wbdv.github.io/fall-2021/assignments/cpnt262/assignment-1/)
- Stretch Activities: 
    - Create a function that accepts any array as an argument and returns a random item in that array. See: [Find a random item in an Array](https://gist.github.com/acidtone/2a3cac26a229aa95685e5cf6344f2e4e)
    - [Coding Challenge: Manipulating CSS with CSS Variables](http://browsertherapy.com/challenges/colour-sliders-css-variables/)

---

## Prep
### DOM and classList
- [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- ['Element.classList'](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
    - [dot notation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#Dot_notation)
    - [Code Examples](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Examples)
- [Code challenge: CSS Toggles](http://browsertherapy.com/challenges/css-toggles-with-classlist/)

### Forms and Javascript
- Review: [Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
- Article: [Prevent Default and Form Events](https://wesbos.com/javascript/05-events/prevent-default-and-form-events) by Wes Bos
- MDN: [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

{% comment %}
{% endcomment %}