---
layout: layouts/day.njk
title: CPNT 260 Day 7 - Hero Sections and Page Backgrounds
description: Hero Sections are a very popular and useful web convention that we will be learning how to build today. This will include setting up CTAs(call to action), setting element heights, and how to use background-images
date: 2021-09-27
released: true

---

## Trophy of the Day: A Hero section with a CTA

## Review
- Assignment 1 Discussion
- Questions that came up over the weekend
- Check-in

### James Atkinson Codepen
{% CodePen "https://codepen.io/Archangel767/pen/KKqxXRQ", "result", 400 %}


## Assignment 3: Image Gallery and Icons

- **Due: September 30 11:59pm**
- [Assignment Link]({{ '/assignments/cpnt260/assignment-3/' | url}})
- Complete:
  - Create a responsive gallery
  - Gallery items should use `figure` tag and `figcaption`
  - Add social media icons and static reaction icons to your page

## Overview

- Setting background images
- Hero Section Introduction
- Hero Hunt Activity
- Groups present on hero sections they found
- Lab time
  - Activity: Build a Hero Section
  - Main Room: Advanced CSS
- [Prep for tomorrow](#prep)
---

## Topic 1: Figures
- `figure` and `figcaption tags
  - Use these for gallery cards
- [Mdn Docs on Figures](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)

## Topic 2: Section height and background images
_The fundamentals of eye catching hero sections_

### Notes

- Use `header` tag for most hero sections
- set heights with `vh` units (remember to use `vw` for any widths)
- `background-image: url('')` is used to add background images
- `background-size: ;` is used to declare the size of the backround
  - `cover` is a good property for a lot of heros
- `background-position: ;` is used to set the center point of the background image

### Extra Things to look for
- Make sure the text over the image is readable
  - you can add `filter()` or set a `background-color` to text content to make it stand out
- Mak sure it still looks good at a mobile screen size
---

## Topic 3: Hero Section

Hero Section
: A section of the website that is the first thing a user sees, it's generally really big, eye catching, and seeks to convey the identity and goal of a site. Hero sections also generally have a call to action.

### Key Questions
- when creating a hero section, ask yourself: If a user does 1 thing on this site, what do you want them to do?
- This question is useful for guiding hero section creation.
  Call to Action (CTA)
  : Guides the user to the next step of going to your site. Depending on the type and goal of the site, this can be many different things.
- Examples:
  - Subscribe
  - Free Trial
  - Sign Up
  - Download
  - Find Out More
  - Our Work
  - Get a Quote

### Example Analyses

- Assess the design and code of the following pages
  - [AirBnb Hero Section](https://airbnd.ca)
  - [Air Canada Flight Search](https://flightsearchdirect.com)
  - [Sandman Hotels](https://www.sandmanhotels.com/)


## Activity: [Find Hero Examples]({{ '/activities/html-css/hero-hunt/' | url }})

- Screenshot different hero sections
  - look for:
    - different positions of hero content
    - animations and user interaction
    - types of CTA
  - Answer:
    - What does this hero say about the site's identity?
    - What story does it tell?
    - What kind of engagement it is directing the user to do?
    - Is it intended to make you stop and think or does it direct you along?

## Walkthrough
- Group Discussion on hero sections that were found
- Each group will briefly examine one of their hero sections from the hero hunt for the class

---
## Lab Time
There will be a daily activity to do, plus I'll be working on some css stuff in the main room
### Main Room: Advanced Topics in CSS

### Activity: [Build a Hero Section with a Call to Action]({{ '/activities/html-css/hero-section/' | url }})

- Hero section must take up the majority of the screen height
- Hero section must use a background-image
- Hero section must have a call to action
- Hero section needs at least 1 text component

### Background Images in Detail with Kevin Powell
- [CSS Youtube Tutorial](https://www.youtube.com/watch?v=3T_Jy1CqH9k)

---

## <a href="#prep"></a> Prep for next day

- Read [Mdn Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- Read [Tips for making great user forms](https://css-tricks.com/tips-for-creating-great-web-forms/)
- Hands on learning [FreeCodeCamp Accessibility](https://www.freecodecamp.org/learn/responsive-web-design/#applied-visual-design) (note this one is not for marks)

---
