---
layout: layouts/day.njk
title: CPNT 260 Day 6 - Progressive Enhancement and Creative Designs
description: We will learn how to use feature queries to provide maximum browser support for different layouts. Along with this, we will continue learning about CSS Grid and look at how it can be used with Flexbox.
date: 2021-09-24
---

## Trophy of the Day: A gallery layout

- Examples:
  - Image gallery
  - collage
  - calculator

## Review

- Trophies from last class
- Question time

## Assignment 3: Image Gallery and Icons

- **Due: September 27 11:59pm**
- [Assignment Link]({{ '/assignments/cpnt260/assignment-3.md' | url}})
- Complete:
  - Create a responsive gallery
  - Gallery items should be figures
  - Add social media icons and static reaction icons to your page

---

## Overview

1. Plan it out

- Progressive enhancement

2. Brute force

- Nesting flex and grid

3. Walkthrough

- Galleries

4. Optimize/test

---

## Topic 1: Progressive enhancement

_Use feature queries to provide a good web experience to all users_

### Terminology

- Progressive Enhancement
  : A design philosophy to provide a baseline of content functionality support to the most users that you can
  - [Mdn Article](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement)

### Notes

- Watch Jen Simmons on [Can I Use](https://www.youtube.com/watch?v=WM_cKHH7bZ0)
- It is a good idea to keep some support for older browsers. Even if it's minimal support so the layout isn't broken.

---

## Activity: [Add progressive enhancement to a design]({{ 'activities/html-css/progressive-enhancement.md' | url}})

- Use feature queries
- Take inspiration from Rachel Andrews [grid by example](https://gridbyexample.com)

---

## Topic 2: Nesting flexbox and css grid

_The best of both worlds_

### Notes

- [A Grid Gallery](https://codepen.io/ashlyn-knox/pen/powepMZ)
- A common method is to use css grid for a main layout, and then use flexbox inside grid items to control how html elements inside the grids are positioned.
- You can also use grid inside flexbox, though this is less common, it can be useful if you have a small complex and percise design made in grid that is apart of a larger flexbox layout

## Activity: [Create a grid of flexbox containers]({{ 'activities/html-css/flexb0x-grid-together.md' | url }})

- use a simple css grid layout
- Design the layout of the grid items with flexbox

---

## Walkthrough

- On creating galleries
- Bug Hunting
- Discussion: Comparing Grid and Flexbox
- Comment and plan code changes

---

## Optimize/test

_End of Day Activity_

- Implement changes to code noted in comments
- Validate Code
- Deploy and Submit

---

## Prep for next day

- Read [Mdn article on backgrounds and border](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- Read [Css-tricks article on height and hero components](https://css-tricks.com/fun-tip-use-calc-to-change-the-height-of-a-hero-component/)
- Read [Mdn Article on viewport height](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts)

---
