---
layout: layouts/day.njk
title: CPNT 260 Day 9 - Maintainable CSS, Themes, and Transitions
description: We will work on creating more maintainable and organized css code, using custom variables to create well organized themes, and tweak pseudo classes using transitions for stylized user interaction.
date: 2021-09-28
---
## Trophy of the Day: A responsive and themed web design

## Review
- Trophies from last class
- Questions

---
## Overview
1. Plan it out
  - Set up site defaults
2. Brute force
  - Transitions and Keyframes for smooth interaction
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
## Topic 2: Transitions and Keyframes
_Interactions that don't need JavaScript_

### Terminology
`transition`
  : A shorthand property that encompasses: `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. Note that these can all be used separately as well
 `keyframe`
  : A syntax used for complex animations. You can string together multiple moving pieces with keyframes.
### Notes
- Transition syntax example: `transition: background-color 0.5s ease-in-out;
 - [Mdn docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
 - Generally better to use than keyframes as they are more performant, but they are also a bit simpler. Note that if you wanted to use a `cubic-bezier(0)`, you would replace `ease-in-out` with it.

- Keyframes:
  - To use keyframes, you set an `animation-name` property in the relevant element declaration
  - Then you code your keyframe like so:
  -`@keyframes identifier {
    from {
      /* stuff happens */
    }
    to {
      /* stuff happens */
    }`
    - These can be declared using percentage values as well.
      - [Mdn Article](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

      ----
## Activity: [Create a Themed Design]({{  '/activities/html-css/theme-builder.md' | url }})

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
- **Extra: Add progressive enhancement to your design**

---
## Prep for next day
- Read [CSS-Tricks on building a design system](https://css-tricks.com/design-systems-building-future/)
- Skim this [Medium article on creating a design system](https://medium.com/codyhouse/create-your-design-system-part-4-spacing-895c9213e2b9)
  - note this is just the part on spacing, there are links that address typography etc
- Add 1-3 things or vote on other people's things for topics to review for CPNT260

---
