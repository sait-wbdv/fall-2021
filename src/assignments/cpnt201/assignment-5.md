---
layout: layouts/assignment.njk
title: CPNT 201 Assignment 5 - SASS and CSS Frameworks
---

## Summary

This assignment will give you some practice using modern css tools.

You will be adding styles to your repo from assignment 4. However instead of using vanilla css, you will use a css framework or sass/scss.

### How to choose your tech stack

- If you really like writing custom css, use sass/scss
- If you want predefined defaults and minimal setup/personalization, use bootstrap
- If you want a balance of defaults and customization, use tailwind

All 3 of the above mentioned tools are very powerful. Each lends themself to different design strategies.

---

## Goals

- Set up defaults with your chosen css tool for your website
- Add some basic page styles to the blog.html and/or index.html

## Requirements

- Assignment will be marked out of 15 points

### Setup (5pts)

#### 1a. Add a css framework and/or sass to your project repo

- Proper npm package setup
- Does **not** include node_modules in remote repository
- Correctly configured framework, using recommended directory structure

#### 1b. Create and use default styles and components

- Options (must pick at least 1):
  - Color scheme
    - In Tailwind, this will be done in `tailwind.config.js`
    - In Bootstrap, this will be done in a `$theme-colors: ()` variable set in a sass file
    - In SASS/SCSS, this will be done in a `defaults.scss`, `defaults.sass`, or similarly named file
  - Typography
  - Custom components
    - ie: a tailwind css `btn`

### 3. Stylize the blog.html page in your repo (5ts)

- Must use your chosen build tool, cannot be vanilla css
- Create a responsive design

### 4. Documentation (5pts)

- Use Proper markdown syntax
- Include project information (name, repo, github pages site, and chosen css tool)
- Code Review (less than 500 words): discuss your experience working with your chosen css framework.
- Attributions
