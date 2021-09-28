---
layout: layouts/assignment.njk
title: Assignment 3 - Image gallery and Icons
description: Create a responsive image gallery using flexbox and/or css grid. Your gallery page should also employ social media icons in the footer section, and reaction icons on the gallery figures.
---

- 20% of Final Grade | Due September 28 11:59pm 2021

## Client User Stories

- Create an image gallery for your client
- Galleries can be:
  - Portfolio gallery
  - travel image gallery
  - products
  - hairstyles
  - animals for adoption
- Link social media accounts to their page
  - facebook, instagram, youtube, github...

## Marking Rubric

Each of the following will be marked out of 4 points (for a total of 20 points), based on the requirements below:

### Code Quality

- Page is marked up with proper semantic structural elements
  - `header`, `nav`, `main`, `article`, `footer`
- Accessibility best practices
  - contrast ratio below AA for text size
  - images have proper alt text
- Use best practices with file/directory names, commenting, and indentation
  - 2 spaces per indent
  - no spaces in file names, use dashes or underscores instead
  - In general, use lower case characters except for README file name and DOCTYPES
  - Filenames should be short but descriptive (< 25 characters)

### 1. Figure Cards

- Semantic images using figure and figcaption
  - figcaption should include title or image description and photo credit
  - fig-caption should have a `min-width` to preserve line length
- images should use `img` tag and have proper `alt` text
  - note, if you use any functional images (such as links), then the alt text should describe the function and not the picture
- Preserve image aspect ratio

### 2. Responsive Gallery

- Single column on mobile, 3+ columns on desktop
- gallery can be done in flex or grid
- Gallery should be centered in it's container
- **No** media queries
- 6 to 12 gallery items

### 3. Social Media Icon Links

- social media icons should appear in the footer
  - vertical or horizontal distribution is fine
- Also use a higher contrast and attention grabbing icons elsewhere on the page
  - can be the same social media icons
  - can also be like thumb, dislike thumb, mail icon etc in your figures
- They can link to random accounts or ones provided
- Icons can be linked with a method of your choice:
  - Icons using an icon font such as Font Awesome
  - SVG icons
- icons should be in an unordered list

### 4. Reactions (with gallery items)

- Figure cards should have reaction icons
- These icons should clearly indicate that they can be interacted with
- Purpose of the icons should be clear to the user
  - whom benefits from the reaction icon?
  - why is the user interacting with this?

### 5. Project Documentation

- Include a `README.md` in your project that contains:
  - Course Title:
  - Author Name:
  - Links to
    - Github Repo
    - Github Pages
  - Code Review (less than 500 words)
    - Outline a bug that you ran into
    - How did you fix it?
    - What benefits/limits came out of your solution beyond the immediate goal
  - Attributions
  
## Submission Requirements

- Push this assignment to a repo named cpnt260-a3.
- ZIP all files required for the site to operate and upload to Brightspace.
- Leave a link to the following as a comment in your Brightspace submission (this is duplicated in your readme but comes in handy sometimes):
- GH repo
- GH Pages site
