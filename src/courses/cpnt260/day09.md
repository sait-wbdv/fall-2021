---
layout: layouts/day.njk
title: CPNT 260 Day 9 - Maintainable CSS, Themes, and Transitions
description: We will work on creating more maintainable and organized css code, using custom variables to create well organized themes, and tweak pseudo classes using transitions for stylized user interaction.
date: 2021-09-29
---

## Trophy of the Day: A responsive and themed web design

## Review

- Trophies from last class
- Questions

## Assignment 4: Landing Page + Hero Section

- [Assignment Link]({{ '/assignments/cpnt260/assignment-4/' | url }})
- **Due: October 3rd 11:59pm**
- Complete:
  - A landing page
  - Landing page needs to have a hero section with a call to action
  - CTA (call to action) should link to an accessible user form
  - Navigation should be responsive
    - a hamburger icon with hideable menu on mobile
    - a horizontal nav on desktop

---

## Overview

- Morning Syntax
  - Custom Variables
  - Transitions and User Interaction


3. Walkthrough
4. Optimize/Test

---

## Topic 1: Setting defauls with custom variables

### Notes

- Custom properties are set with `--propname: value;`
  - You can then use these over and over again
  - They are great for specific colors, opacity values, cubic bezier curves, and
    anything else that you only want to have to edit in one place
- A well organized set of custom variables can save a lot of dev time and make your layouts look much more professional.

---

## Activity: Analyze an inspirational web design

- Find a design on the internet
  - can be a layout, hero section, article etc
  - If you're stuck [Jen Simmons Labs](https://labs.jensimmons.com/) is a great resource
- Analyze the HTML and CSS
  - Take note because you will be using this as code inspiration for your own design

---
## Topic 2: Position

_For menus and different layouts_

### A Few Types of Position Tags

`absolute`
: Element position is relative to its parent element
`fixed`
: Like absolute but instead the element ignores the document folow and is relative to the browser window
`static`
: The default position. Element is rendered in order of the document flow
`sticky`
: Element's position is based on the scroll position

---

## Topic 3: Visiblity

_Ways to make something disappear_

### Notes

`visibility`
: An element can be `hidden`, `visible`, or `collapse`. The layout of the document does not change. If you use hidden, the space where it existed will be as if it was still there. If you are using a table, `collapse` will effectively 'collapse' rows and columns. Collapsed flex items will also remove the space the item takes up, but for all other elements, it will keep the space

- Visibility set to `hidden` also remove an element from the accessibility treewhich can mess with screen readers.
  `display`
  : To remove an element from the document layout, set `display` to `none`

---

## Activity 2: A Sliding Menu

- Menu must be not visible to user at off state
- Use color and opacity to focus user's gaze

---
## Topic 3: Transitions and Keyframes

### Terminology

`transition`
: A shorthand property that encompasses: `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. Note that these can all be used separately as well
`keyframe`
: A syntax used for complex animations. You can string together multiple moving pieces with keyframes.

### Notes

- Transition syntax example: `transition: background-color 0.5s ease-in-out;
- [Mdn docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- Generally better to use than keyframes as they are more performant, but they are also a bit simpler. Note that if you wanted to use a `cubic-bezier(0)`, you would replace `ease-in-out` with it.


## Activity: [Create a Themed Design]({{  '/activities/html-css/theme-builder/' | url }})

---

## Walkthrough

- Code Review
- Bug Hunting
- Discussion
- Comment and plan code changes

---

## Optimize

_End of Day Activity_

- Implement code changes
- Validate Code
- Deploy and Submit

---

## Prep for next day

- Read [CSS-Tricks on building a design system](https://css-tricks.com/design-systems-building-future/)
- Skim this [Medium article on creating a design system](https://medium.com/codyhouse/create-your-design-system-part-4-spacing-895c9213e2b9)
  - note this is just the part on spacing, there are links that address typography etc
- Add 1-3 things or vote on other people's things for topics to review for CPNT260

---
