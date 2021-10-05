---
layout: layouts/day.njk
title: CPNT 260 Day 6 - CSS Grid and Flex Together
description: We will do a focused session on using all the technologies we have learned, with a particular focus on grid. During this class detailed stylings will be reviewed and you will have a pair code focused lab session.
date: 2021-09-24
released: true

---

## Review
- README writing and attributions

### Trophies from last class
- David

{% CodePen "https://codepen.io/boostha/pen/xxraXqm", "result", 400 %}

{% comment %}
- James

{% CodePen "https://codepen.io/Archangel767/pen/xxrapLP", "result", "400" %}

- Fesal

{% Codepen "https://codepen.io/Fesal/pen/YzQOxjd", "result", "400" %}

{% endcomment %}
---

## Overview

1. Apply CSS Grid to VueJS Clone Webpage
2. How to use Flexbox in Grid
3. Lab Time


---
## Apply CSS Grid to a Website
- We will use the [Vuejs site rebuild](https://github.com/lilyx13/vue-clone-demo) that we started yesterday
  - We will apply a grid to the div containing the web content
  - We will practice styling some of the elements inside the layout
  - We will provide examples on nesting flexbox with grid

### Outcomes
- How to use css grid
- How to style content
- How to use flexbox inside grid

## Activity: Pair code or small group code
- Everyone choose one of the daily activities described in [lab time](#lab-time)
- You will choose this as a group
- Either
  - code in driver navigator pairs
  - Support one another to help build the decided layout
- You are welcome to choose your own partners

### Main Tasks
- Outline the page's html content
  - lorem ipsum and lorem picsum are fine for content
- Gather fonts and pick your color patterns
- use [hackmd](https://hackmd.io) to write your README (or a README in github if you are using githup pages)
  - In your readme, document the steps that you plan to follow to solve this
  - This stage requires everyone's participation

### Content (Ideas to get a design up and running)
- Wireframe your own layout
- Search on the web for layouts that you want to emulate
  - it does not need to be exact, can be just inspired
- Base a design off of one of our previous activities
  - Please do your own thing to it
- Wing it
  - Focus more on getting the layout to work than the content
  - Still must plan out how you will write your code (minmal planning)

---
## Lab Time
<a href="#lab-time"></a>
During the lab. Continue with the design that you planned out in the morning. Follow your planned code approach

### Mild Trophy of the Day: Website Layout (Flex or Grid)
- Choose one of the following:
  - Single column mobile layout
  - Desktop layout with both column and row layout
  - Responsive layout that changes from mobile to desktop 


### Medium Trophy of the Day: A Responsive section layout (Flex or Grid)
- Choose one of the following:
  - Image gallery
  - 3 Card layout
  - 6 Card layout 

### Spicy Trophy of the Day: A Grid Design (Grid Focused)
- Choose one of the following:
  - Calculator
  - Chessboard

---

### Style Goals
- 3 to 4 color theme
- at least 1 responsive image
- responsive fonts
- A flex or grid layout

### Deployment
- Codepen
- Github Pages

---

## Prep for next day

- Read [Mdn article on backgrounds and border](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- Read [Css-tricks article on height and hero components](https://css-tricks.com/fun-tip-use-calc-to-change-the-height-of-a-hero-component/)
- Read [Mdn Article on viewport height](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts)
- Watch [Jen Simmons on Common Grid Mistakes](https://www.youtube.com/watch?v=0Gr1XSyxZy0&t=87s)

### Extra Flex and Grid Practice
- For extra experience with Flex, practice [FreeCodeCamp Exercises on Flex](https://www.freecodecamp.org/learn/responsive-web-design/#css-flexbox) over the weekend
  - Apply code from exercises to your own code for best results
- For extra experience with Grid, work on [FreeCodeCamp Exercises on Grid](https://www.freecodecamp.org/learn/responsive-web-design/#css-grid)
  - Apply code from exercises to your own code for best results

---

## Progressive Enhancement
- Use progressive enhancement to support older browsers

### Terminology

- Progressive Enhancement
  : A design philosophy to provide a baseline of content functionality support to the most users that you can
  - [Mdn Article](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement)

### Notes
- Watch Jen Simmons on [Can I Use](https://www.youtube.com/watch?v=WM_cKHH7bZ0)
- It is a good idea to keep some support for older browsers. Even if it's minimal support so the layout isn't broken.
- Watch Jen Simmons on [CSS Grid Mistakes]

## Activity: [Add progressive enhancement to a design]({{ 'activities/html-css/progressive-enhancement/' | url}})

- Use feature queries
- Take inspiration from Rachel Andrews [grid by example](https://gridbyexample.com)
 
---