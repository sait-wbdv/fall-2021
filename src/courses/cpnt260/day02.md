---
layout: layouts/day.njk
title: CPNT 260 Day 2 - Navigation and Responsive Page Design
description: Today we will start working in the text editor Vscode. Topics include creating page navigation, using colour, typography, and white space.
date: 2021-09-17
---

## Trophy of the day: Responsive Page Design
[img here]
- Create a Page with a Site Navigation

## Review
- Trophies from last class
- Go over questions from last day

## Tool Time
- Text Editors
  - Vscode/vscodium
    - plugins
  - Vim/neovim 
- zsh
  - [zsh plugins](https://travis.media/top-10-oh-my-zsh-plugins-for-productive-developers/)
- tmux
  - [install on mac](https://macappstore.org/tmux/)
  - [install on windows](https://gist.github.com/DeanPDX/acff533cff0cfbda2761d1e62e8cb1a7)
  - [Ashlyn's tmux config](github)
- [taskwarrior](https://taskwarrior.org/)
- [Ash's Dotfiles](https://github.com/lilyx13/dotfiles)
  - especially for using tmux. these keybindings are a lifesaver when your deep in code

## Assignment 1 - About Page and Simple Nav
- **Due: September 22 11:59pm**
- [Assignment Link]({{ 'assignments/cpnt260/assignment1' | url }})
- Complete:
  - Create an About page that has text, images, and styling
  - Create a site navigation. Note this will be improved on throughout the following assignments.

---
## Overview
1. Plan it out
  - Importing and Styling Elements
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

- `hsla()` is better for screen readers and gives you better control over your colors (especially for setting custom variables etc)
  - However it can be a struggle to work with at first.
    - I often draft with hex colors, and then when I get detailed, convert to hsla() values.
- Padding and margin are your friend. A common newbie mistake is having elements too tightly clustered together.
  - however when adding them, be aware of how they're creating space and what happens at different screen sizes.
  - Remember:
    - Padding is space within an elements box
    - Margin is space around an elements box

### Linking Fonts
- `@import` is slower `link` is faster
- use `preconnect` to improve font loading times
- A good solid approach to loading fonts
- `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`

#### Terms
preload
  : fonts and absolutely necessary assets that you will be using
preconnect
  : CDN or resource for loading from another domain
prefetch
  : content that _may_ be needed for user interaction. It gets stuff prepped that we anticipate the user going to next

#### Sources
- This is a nuanced topic. Here are a couple articles that get into the details:
  - 
  - [Optimize web fonts](https://www.freecodecamp.org/news/web-fonts-in-2018-f191a48367e8/)
  - [comparing preload, preconnect, and prefetch](https://george.mand.is/2019/11/whats-the-difference-between-link-preload-preconnect-and-prefetch/)

---
## Topic 2: Responsive Fonts and Elements
_Make site content look got on all devices_

### Terminology
`clamp()`
  : Use clamp to set minimum and maximum font size and the range that they increase and decrease by. ie: `font-size: clamp(1.2rem, 2.5vw, 1.4rem)`
`text-align`
  : align text left, center, right, or justified. [Mdn article](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align).
`max-width` and `min-width`
  : Both of these will override the `width` property. And `min-width` will override `max-width`.

### Notes
- When setting responsive sizes, make sure to do a lot of testing as you go. It's one thing to fix an unexpected bug from something you just did, it's another to be a bunch of lines of code later and then realize that something broke and now you have to find what's broken.
- Read [This css tricks article](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/) on using clamp based off viewport units

---
## Topic 3: Site Navigation
_The basics of guiding user your users_

### Terminology
Target Attribute
  : When setting a link with `a href=""`, you can make links open in new tabs by setting the `target` attribute to `target="_blank"` in the opening `a` tag.
    - To prevent a type of phishing, also add `rel="noreferrer noopener"` to the `a` link whenever you use `target="_blank"`
    - Read this [FreeCodeCamp article](https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/) to learn more about this.

### Notes
- Having a list inside a nav element is somewhat debated [as is noted in this article](https://css-tricks.com/navigation-in-lists-to-be-or-not-to-be/)
  - however it is common convention
- A footer navigation does not necessarily need a nav element: [mdn article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
- a document may have several `nav` elements 
  - such as a site nav and then a page nav

---
## Activity 2: [A Web Page with a Nav Menu]({{ 'activities/html-css/nav-menu.md' | url }})

## Extra Activity: [Create a 404 Page]({{ '/activities/html-css/404-page.md' | url }})
  - This was originally the first activity of the day but since we will just have the afternoon, this one will be for fun
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
## Prep for next class
- Read through this [Mdn Article on Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- Play [Flexbox Froggy](https://flexboxfroggy.com/)
- Watch [Flexbox Patterns You Can Use](https://www.youtube.com/watch?v=vQAvjof1oe4)

---