---
layout: layouts/day.njk
title: CPNT 260 Day 4 - Mobile First Design, Flexbox, and Breakpoints
description: Modern web crawlers search for that follow mobile first best practices. Today we will continue learning flexbox and also use media queries to create distinct mobile - desktop layouts.
date: 2021-09-21
---

## Tropy of the day: Mobile first webpage with hamburger menu
[img here]

## Review
- Trophies from last class
- Question time


## Assignment 2: Services, Info, Team Members, or Product Page
- **Due: September 24 11:59pm**
- [Assignment Link]({{ 'assignments/cpnt260/assignment-2.md' | url }})

---
## Overview
1. Plan it out
  - Mobile First Design
2. Brute force
  - Card Design
  - Hamburger menu and icons
3. Walkthrough
4. Optimize/Test

---
## Topic 1: Mobile First Design 
_Media Queries and Breakpoints_

### Terminology
breakpoint
  : The points where the layout shifts
media-query
  : Media queries are used to set major breakpoints. CSS declarations within a media query will only run under the conditions specified in the media query declaration. You can have multiple media-query declarations in a file.

### Notes
- Use this [guide on screen resolutions](https://mediag.com/blog/popular-screen-resolutions-designing-for-all/) to determine sensible breakpoints
- With modern layouts like flexbox and grid, media queries are less important for creating a responsive experience.
  - Try to use them sparingly. Check out [this guide from css-tricks](https://css-tricks.com/a-complete-guide-to-css-media-queries/) on tips for using mobile queries
  - we will be focusing on using media queries in css

#### Media Query Gists
- [Mobile First](https://gist.github.com/acidtone/8b22888818aa6f81653ab0858ad4c418)
- [Desktop First](https://gist.github.com/acidtone/0f9c31e820f29511fc2671063fd71c58)
- [Mobile First and Orientation](https://gist.github.com/acidtone/6aeb476a3c9bbc9788ce1ebc958b98d1)

## Activity: Add media queries to a page
- Use one of your previously made pages or create a new one
- make the navigation and one other thing function differently at a mobile screen size
  - the nav menu needs to completely change layout to vertical and not flex when resizing the screen
- A good example to practice with is text over a background image
  - This often is set to look great at a certain layout, but can become unreadable and awkward at a different layout, try using media-queries to 

### Requirements
- Find an example where a page makes good use of breakpoints
- Find a site that does not effectively use breakpoints for mobile and desktop experience
- Draw a simple wireframe that shows the two different layouts based on the breakpoint
  - Can done by hand or with software
  - Use whatever tool feels comfortable

## Topic 2: Flexbox card layouts
_How to make easy and responsive cards_

### Notes
- Check out [Ash's Codepen](https://codepen.io/ashlyn-knox/pen/MWmxxbR) for a simple card layout
- Articles are a great tag for cards
- If you have clickable elements inside your cards, keep in mind how you want your interaction hierarchy to work.
  - Does the user click on the whole card? or button inside the card?
  - If you use a hover state to indicate that the card can be clicked on a desktop, how will you replace this visual breadcrumb for mobile users?

#### Code
- `@media media-type and (media-feature-rule) {
  /* styles here */
}`

#### Further Reading
- [Mdn Card Design](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Card)
- [Article on card designs](https://thenextweb.com/news/how-cards-are-taking-over-web-design)

---
## Topic 3: Adding Icons to your site
_Hamburger menus and many more_ 

### Notes
- To access fontawesome icons, include this in the head of your html
  - `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">`
- You can also download the icons and store them in your assets
- set icons with `<i>` tag

## Activity: [Add Icons and create a hamburger menu]({{ '/activities/html-css/' | url }})
- [Ash's Example](https://codepen.io/ashlyn-knox/pen/LYLWPBy)
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
- Read [Mdn CSS Grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
- Play [CSS Grid Garden](https://cssgridgarden.com/)
- Watch [Easy Layouts with CSS Grid](https://www.youtube.com/watch?v=tFKrK4eAiUQ)
- Watch Jen Simmons on [The basics of grid](https://www.youtube.com/watch?v=FEnRpy9Xfes)
- Watch Jen Simmons on [Using Flexbox and CSS Grid together](https://youtu.be/dQHtT47eH0M)
---
