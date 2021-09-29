---
layout: layouts/day.njk
title: CPNT 260 Day 9 - Maintainable CSS, Position, and Transitions
description: We will be learning about css reset files, position, transition, and custom variables. 
date: 2021-09-29
released: true

---

## Trophy of the Day: A responsive webpage rebuild

## Review
- Questions regarding assignments or last class
- Rules of the [helpdesk](https://github.com/sait-wbdv/helpdesk)
  - For any and all code related issues
  - Git related issues
  - Filesystem, vscode, figma software type issues
  
## [Assignment 4 Landing Page and API's]({{ '/assignments/cpnt260/assignment-4/' | url }})
- **Due: October 3rd 11:59pm**
- Complete:
  - A landing page
  - Call to Action
  - Form
  - Google API (or other)

---

## Overview
- Morning Activity
- Custom Variables
- Position
- Visibility
- Lab Activity
- [Prep](#prep) for tomorrow


### Activity: Form Review (30 Minutes)
- You will be meeting in random groups
1. Share and review one another's forms
  - The reviewer will offer feedback based on how they experienced using the form
    - cannot give technical advice, only useage related advice
    - Please keep in mind that all of these are **Work in Progress**
    - Clarify on details as best as possible
2. The developer needs to take note of 1-3 things that they can fix quickly to resolve any of the issues mentioned
  - In either a README, a hackmd file, or in a comment in your codepen, make note of the feedback
3. Then make your 1-3 edits
  - If you have specifc ideas on how to make a fix, but don't have time to code it, write a comment that would give future you enough information to quickly code the idea
4. Submit a codepen with edits and submit your review notes.
   - In either your Readme, Comments, or Hackmd, Please cite the reviewer
- **Watch the time, you only have 30 minutes to review, document, and make any fixes**

---
<a id="top"></a>

## CSS Reset Files
- Watch [Kevin Powell 5 minute video](https://www.youtube.com/watch?v=0GcTUor2ANw)
- CSS Reset files are used to remove default browser styles
- You can have a range of depth to your reset, some basic styling regarding padding and margin can be really helpful
- There are lots online that you can experiment from
- The course reset file used looks like
- This file should be called `reset.css`
- In your HTML, make it the first file declared in your list of css files
 
```
/* Reset */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

nav ul {
  list-style: none;
  padding-left: 0;
}
```

## Topic 1: Setting defauls with custom variables

### Notes

- Custom properties are set with `--propname: value;`
  - You can then use these over and over again
  - They are great for specific colors, opacity values, cubic bezier curves, and
    anything else that you only want to have to edit in one place
- A well organized set of custom variables can save a lot of dev time and make your layouts look much more professional.
- access a custom property by using: `var(--variable-name)`

### In class activity
- We will build a colour scheme using hsla values and custom variables

---
## Topic 2: Position

_For menus and different layouts_

### A Few Types of Position Tags

`absolute`
: Element position is relative to its parent element
`fixed`
: Like absolute but instead the element ignores the document flow and is relative to the browser window
`static`
: The default position. Element is rendered in order of the document flow
`sticky`
: Element's position is based on the scroll position. Note that this doesn't have 100% browser support

---

## Topic 3: Visiblity

_Ways to make something disappear_

### Notes

`visibility`
: An element can be `hidden`, `visible`, or `collapse`. The layout of the document does not change. If you use hidden, the space where it existed will be as if it was still there. If you are using a table, `collapse` will effectively 'collapse' rows and columns. Collapsed flex items will also remove the space the item takes up, but for all other elements, it will keep the space

- Visibility set to `hidden` also remove an element from the accessibility tree which can mess with screen readers.

`display`
  : To remove an element from the document layout, set `display` to `none`


---

## Topic 3: Transitions and Keyframes
- These are used to enhance how your users experience your web pages.
- While we see hover quite a bit, you can also effect active state as well
- Child selectors become really helpful when getting into transition
  - `:nth-child(#)`
- We will be using these quite a bit when we get into vector images
- Try using `bezier-curve` on your transitions for greater control

### Terminology

`transition`
: A shorthand property that encompasses: `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. Note that these can all be used separately as well

`keyframe`
: A syntax used for complex animations. You can string together multiple moving pieces with keyframes.

### Notes

- Transition syntax example: `transition: background-color 0.5s ease-in-out;
- [Mdn docs](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- Generally better to use than keyframes as they are more performant, but they are also a bit simpler. Note that if you wanted to use a `cubic-bezier()`, you would replace `ease-in-out` with it.

---

## Lab Time

### Activity: [Wayback Machine Website Redesign]({{  '/activities/html-css/wayback-site-revamp/' | url }})

---

## <a id="prep"></a> Prep for next day
- Watch [Kevin Powel on srcset and sizes](https://www.youtube.com/watch?v=2QYpkrX2N48)
- Read [Mdn srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)
- Read [Css Tricks srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)
- Watch [Kevin Powell on lazy loading](https://www.youtube.com/watch?v=AActXSWxsRo)
- Read [Mdn Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)

### [Back to Topic 1](#top)

---
