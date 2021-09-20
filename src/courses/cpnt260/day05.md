---
layout: layouts/day.njk
title: CPNT 260 Day 5 - Introduction to CSS Grid
description: Today we will be covering the newer technology css grid. We will implement basic grid designs. We will also be practicing debugging strategies for CSS that will also be useful when coding in JS and other languages.
date: 2021-09-23
---

## Trophy of the day: Use CSS Grid to create a site layout

## Review

- Trophies from last class
- Question

---

## Overview

1. Plan it out

- CSS Grid Design

2. Brute force

- Grid Layous
- Flexbox and Grid Together

3. Walkthrough
4. Optimize/test

---

## Topic 1: CSS Grid Design

### Notes

- use `display: grid` to create grid
- `grid-template-columns` is one of the most useful properties for grid
- `fr` units are used to set grid items to a declared fraction of available space
- `minmax()` is used to declare a minimum and maximum size of grid item
- [repeat syntax](<https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()>)
  - `auto-fit`, `auto-fill` are particularly useful for flexible layouts
  - Often using a rigidly sized parent element can be useful for setting the grid row's max width
- [Tony's grid starter code gist](https://gist.github.com/acidtone/d946ea7147e60568d7f8262b5e7be449)

### Ash and Tony Examples

- [Complex Grid Design](https://codepen.io/ashlyn-knox/pen/eYWbdZV)

### Resources

- [Build a Classic Layout Fast in CSS Grid](https://youtu.be/KOvGeFUHAC0) by Mirian Suzanne
- [Easy Layouts with CSS Grid](https://youtu.be/tFKrK4eAiUQ)
- [Read Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

## Topic 2: Grid Layouts

### Notes

- Grid is especially useful for making responsive site layouts
  - [Grid by example layout sample code](https://gridbyexample.com/patterns/)
- Be aware of the size of the parent container,

---

## Activity: [Create a Grid Layout]({{ '/activities/html-css/grid-layouts.md | url }})

---

## Topic 3: Debugging CSS

_Quickly figure out what's wrong with your css_

### Types of Errors

- Logic Errors
  : Errors that stop the program from doing what's expected. While there isn't logic in CSS the same way there is in JS, you will still find that logic errors can be very common. Early on, CSS Grid can be a tricky spot for logic errors
- Syntax Errors
  : Errors in your actually typed characters. Misspelled keywords, punctuation etc.

### Notes

- Always, always, always, think through what's actually broken before you start chopping up your code
  - promotes faster debugging skills as you gain experience, and you will likely cause less mistakes
- If you are experiencing overlap and horizontal scroll issues, adding outlines to everything can help tell what's doing it
  - [Check out this article on debugging css](https://rohitgulam.hashnode.dev/the-best-way-to-debug-css-code)
  - `border` can also work, but it effects dimension and can give you an inaccurate read
- **Devtools are your friend** Take the time to get comfortable with checking errors with them.
- Be methodical
  - think through why you think a bug exists
  - decide on a plan and be aware of what you think each thing you try **should** do
  - step through your code and test until you find it
  - remember that sometimes a bug can be caused by something that works ok being interferred with by something else - it might not be the thing that looks broken.

### Resources

- [Mdn Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)

---

## Activity: [Bug Hunting]({{ '/activities/html-css/bug-hunting' | url }})

---

## Walkthrough

- Code review
- Bug Hunting
- Discussion
- Comment and plan code changes

---

## Optimize

_End of Day Activity_

- Implement changes noted in comments
- Validate Code
- Deploy and Submit

---

## Prep for next day

- Read [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-gri)
- Watch Jen Simmons on using [flexbox and grid together](https://www.youtube.com/watch?v=dQHtT47eH0M)
- Explore Jen Simmons [Experimental Layout Lab](https://labs.jensimmons.com/)
- Watch Jen Simmons on [Progressive Enhancement](https://www.youtube.com/watch?v=u00FY9vADfQ)

---
