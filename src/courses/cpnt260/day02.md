---
layout: layouts/day.njk
title: CPNT 260 Day 2 - Navigation and Responsive Page Design
description: Today we will start working in the text editor Vscode. Topics include creating page navigation, using colour, typography, and white space.
date: 2021-09-20
---

## Trophy of the day: Responsive Page Design
[img here]
- Create a Page with a Site Navigation

## Review
- Trophies from last class
- Go over questions from last day

## Tool Time
- Text Editors
  - Vscode
  - Vscodium

## Assignment 1 - About Page and Simple Nav
- **Due: September 22 11:59pm**
- [Assignment Link]()
- Complete:
  - Create an About page that has text, images, and styling
  - Create a site navigation. Note this will be improved on throughout the following assignments.

---
## Overview
1. Plan it out
  - Importing and Styling Elements
    - _Connect to dsn_
2. Brute force
  - Responsive Fonts
  - Site Navigation
3. Walkthrough
  - Code review
    - add comments
    - check for errors
4. Optimize/Test
  - Improve code

---
## Topic 1: Importing and Styling Elements
_Using different types of content_

### Key Terms and Syntax
Cdn
  :  Content Delivery Network. Allows for fast transfer of assets needed to load web content.
Box Model
  : Everything in CSS has a box around it. These boxes are either block or inline elements. [Read more here](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
`background-color`
  : set a background color with this tag. Keep in mind what element you are setting background color to.
`color`
  : Used to set items color
`hsla()`
  : [HSLA](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla()) is notation to describe colors by 'hue', 'saturation', 'lightness', and 'alpha' (alpha is for transparency)
`padding`
  : Used to add space within an elements box
Stylesheet
  : Separate your css into stylesheets to keep your code more organized.
### Notes

---
## Activity 1: Create a 404 Page

---
## Topic 2: Responsive Fonts and Elements
_Make site content look got on all devices_

### Key Terms
`clamp()`
  : Use clamp to set minimum and maximum font size and the range that they increase and decrease by. ie: `font-size: clamp(1.2rem, 2.5vw, 1.4rem)`
`text-align`
  : align text left, center, right, or justified. [Mdn article](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align).
`max-width` and `min-width`
  : Both of these will override the `width` property. And `min-width` will override `max-width`.
### Notes

---
## Topic 3: Site Navigation
_The basics of guiding user your users_

### Key Terms
Target Attribute
  : When setting a link with `a href=""`, you can make links open in new tabs by setting the `target` attribute to `target="_blank"` in the opening `a` tag.
    - To prevent a type of phishing, also add `rel="noreferrer noopener"` to the `a` link whenever you use `target="_blank"`
    - Read this [FreeCodeCamp article](https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/) to learn more about this.

### Notes

---
## Activity 2: A Web Page with a Nav Menu

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
## Homework for next day
- Read through this [Mdn Article on Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- Play [Flexbox Froggy](https://flexboxfroggy.com/)
- Watch [Flexbox Patterns You Can Use](https://www.youtube.com/watch?v=vQAvjof1oe4)

---