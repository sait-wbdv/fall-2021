---
layout: layouts/day.njk
title: CPNT 260 Day 5 - Introduction to CSS Grid
description: Today we will be covering the newer technology css grid. We will implement basic grid designs. We will also be practicing debugging strategies for CSS that will also be useful when coding in JS and other languages.
date: 2021-09-23
released: true

---

## Trophy of the day: Use CSS Grid to create a site layout
  - We will be building one as a class, your daily will be to create your own in the afternoon
  - Dailies today should focus on increased design optimization
    - Dailies with effective use of responsive design, css-grid, and optimized design will be used as case studies on friday morning
---

## Overview

1. Plan it out and Project Prep Review
  - Assignment Questions/Concerns
  - [Project Directory Structure](#planit)
2. [Brute force](#bruteforce)
    - Recreate the [VueJS Documentation Site](https://v3.vuejs.org/guide/introduction.html) as a class
3. [Walkthrough](#walkthru)
  - Intro to CSS Grid
  - Plan how we will refactor to a grid layout
4. [Lab Time](#lab)
  - Ash will refactor our morning activity to use grid
  - Breakout rooms for working on daily activity
5. [Prep for Tomorrow](#prep)
6. [Debugging CSS Tips](#debugnotes)
---
## <a id="planit"></a> Directory Structure and Filenames

```
project-name/
  |- assets/
  |  |- images/
  |  |  |- img1.jpg
  |  |  |- img2.jpg
  |  |- css/
  |  |  |- style.css
  |  |  |- fonts.css
  |- index.html
  |- about.html
```
- Note that the html files are in the root directory
- CSS files have their own directory in assets
- images are kept in assets as well
- **no spaces ever in file names**

### A few commands for quick directory management
`mkdir -p dirname/dirname/`
  : Creates both the parent and child directory in 1 command
`touch filename.ext`
  : will create the file name specified
`less filename`
  : will print the contents of the file directly in the terminal for quick viewing

---
## <a id="bruteforce"></a> Morning Activity: VueJS Docsite Rebuild
- We will try to recreate the VueJS documentation website using code we've learned so far
- This will all be done in vscode and git

---

## <a id="walkthru"></a> Topic 3: Intro to CSS Grid

### Notes

- use `display: grid` to create grid
- `grid-template-columns` is one of the most used declarations for grid
- `fr` units are used to set grid items to a declared fraction of available space
- `minmax()` is used to declare a minimum and maximum size of grid item
- [repeat syntax](<https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()>)
  - `auto-fit`, `auto-fill` are particularly useful for flexible layouts
  - Often using a rigidly sized parent element can be useful for setting the grid row's max width
- [Tony's grid starter code gist](https://gist.github.com/acidtone/d946ea7147e60568d7f8262b5e7be449)
- [Complex Grid Design](https://codepen.io/ashlyn-knox/pen/eYWbdZV)

### Resources for getting a grid layout off the ground

- [Build a Classic Layout Fast in CSS Grid](https://youtu.be/KOvGeFUHAC0) by Mirian Suzanne
- [Easy Layouts with CSS Grid](https://youtu.be/tFKrK4eAiUQ)
- [Read Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid by example layout sample code](https://gridbyexample.com/patterns/)

---

## <a id="lab"> Lab Time

### Main Room: Ash Refactors and Optimizes the VueJS Website Clone

### Activity: [Create a Grid Layout]({{ '/activities/html-css/grid-layouts/' | url }})
  - This activity must be started from scratch 
  - You are welcome to work in pairs and both submit the same project.

---

## <a id="prep"></a>Prep for next day

- Read [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-gri)
- Watch Jen Simmons on using [flexbox and grid together](https://www.youtube.com/watch?v=dQHtT47eH0M)
- Explore Jen Simmons [Experimental Layout Lab](https://labs.jensimmons.com/)
- Watch Jen Simmons on [Progressive Enhancement](https://www.youtube.com/watch?v=u00FY9vADfQ)

---
## <a id="debugnotes"></a>Extra Notes on Debugging CSS

Logic Errors
  : Errors that stop the program from doing what's expected. While there isn't logic in CSS the same way there is in JS, you will still find that logic errors can be very common. Early on, CSS Grid can be a tricky spot for logic errors
Syntax Errors
  : Errors in your actually typed characters. Misspelled keywords, punctuation etc.

### Notes
- **Devtools are your friend** Take the time to get comfortable with checking errors with them.
- Always, always, always, think through what's actually broken before you start chopping up your code
  - promotes faster debugging skills as you gain experience, and you will likely cause less mistakes
- If you are experiencing overlap and horizontal scroll issues, adding outlines to everything can help tell what's doing it
  - `border` can also work, but it effects dimension and can give you an inaccurate read
- Be methodical
  - Step through your code and talk it out **yes talk to yourself, a colleague, a rubber duck...**
  - remember that sometimes a bug can be caused by something that works ok being interferred with by something else - it might not be the thing that looks broken.

### Resources

- [Mdn Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)
- [Article on debugging css](https://rohitgulam.hashnode.dev/the-best-way-to-debug-css-code)
