---
layout: layouts/day.njk
title: CPNT 260 Day 7 - Hero Sections and Page Backgrounds
description: Hero Sections are a very popular and useful web convention that we will be learning how to build today. This will include setting up CTAs(call to action), setting element heights, and how to use background-images
date: 2021-09-27
---

## Trophy of the Day: A Hero section with a CTA

## Review

- Trophies from last class
- Question time

## Assignment 3: Image Gallery and Icons

- **Due: September 30 11:59pm**
- [Assignment Link]({{ '/assignments/cpnt260/assignment-3/' | url}})
- Complete:
  - Create a responsive gallery
  - Gallery items should be figures
  - Add social media icons and static reaction icons to your page


## Overview

1. Plan it out

- Section height and using background images
- Hero header section

2. Brute force

- Hero section with CTA

3. Walkthrough
4. Optimize/test

---

## Topic 1: Section height and background images

_The fundamentals of eye catching hero sections_

### Notes

- Assess the design and code of the following pages
  - [AirBnb Hero Section](https://airbnd.ca)
  - [Air Canada Flight Search](https://flightsearchdirect.com)
  - [Sandman Hotels](https://www.sandmanhotels.com/)

---

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

---

## Topic 2: Hero Section

_Hero Layouts_

### Terminology

Hero Section
: A section of the website that is the first thing a user sees, it's generally really big, eye catching, and seeks to convey the identity and goal of a site. Hero sections also generally have a call to action.

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

### Notes

- Make sure that your text is very clear. `filter()` can be a helpful way to change how items in a hero section (or how the background of the hero section) appear.
- `header` tag is suitable for hero sections
- your `nav` can be inside the `header` tag or outside of it. If it's on the outside, absolute positioning can be used on the nav to make them still overlap

## Activity: [Build a Hero Section with a Call to Action]({{ 'activities/html-css/hero-section/' | url}})

- Hero section must take up the majority of the screen height
- Hero section must use a background-image
- Hero section must have a call to action
- Hero section needs at least 1 text component

---

## Walkthrough

- Code review
- Discussion on Storytelling with Hero Sections
- Comment and plan code changes

---

## Optimize

_End of Day Activity_

- Implement code changes
- validate code
- Deploy and submit

---

## Prep for next day

- Read [Mdn Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- Read [Tips for making great user forms](https://css-tricks.com/tips-for-creating-great-web-forms/)
- Hands on learning [FreeCodeCamp Accessibility](https://www.freecodecamp.org/learn/responsive-web-design/#applied-visual-design) (note this one is not for marks)

---
