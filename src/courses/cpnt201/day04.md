---
layout: layouts/day.njk
title: CPNT 201 Day 4 - Optimized Rasters and Intro to Vector Design
description: We will be covering html syntax for srcset and sizes for use with raster images. This is the second part of content needed to finish assignment 2. We will also walk through creating a vector icon in figma.
date: 2021-10-04
released: true
---

## Trophy of the Day: Build a Vector Logo

## Review
- Questions about current assignment
- Follow up on raster image editing
- Assignment 3 Review

---
## Topic 1: Serving Images with `srcset` and `sizes`
- `srcset` is used to give the browser a more optimal sized image to display at a given viewport width
- `sizes` is used to set breakpoints at different viewport sizes and will set a placeholder on load
  - This speeds up loading times

### How to optimize your images
- [Gist on srcset and sizes](https://gist.github.com/lilyx13/fff897237bcd0427183c76eee9483404)
- [Ash's github repo on srcset and sizes](https://github.com/lilyx13/srcset-demo-code)
- We will use this codebase for todays demo.
- Please fork and follow along
- Use your fork to experiment with
- **IMPORTANT** Readme in this repo contains essential instructions for doing this.

## Morning Activity
- Try modifying the code in your fork of [Ash's github repo](https://github.com/lilyx13/srcset-demo-code)
  - edit sizes
  - edit the images
  - try adding css and markup around the images
  
---
## Topic 1: Vector Editors
- Figma, Inkscape, Illustrator, Coreldraw, Penpot... So many options!
- Main tools and methods 

### Important vector design tools that most vector editors will have
- selection tools
- shapes (ellipse, square...)
- pen tool
- path editor tools (use these with your shapes)
  - union
  - subtract
  - merge
  - intersect
- align tools

---
## Vector Logo Design Intro
- Basic usage of tools
- We will create a simple logo using the abovementioned tools in figma
- Today we will cover basic vector manipulation, tomorrow we will run through a more advanced design and then optimize + edit it with css.

---
## Lab Time
- [Build a Vector Logo]({{ '/activities/images/vector-build/' | url }})
- These is a basic outline, feel free to get more advanced


---

## Prep for tomorrow
- [Svgs on the web](https://svgontheweb.com/)
- [Mdn Collection on SVGs](https://developer.mozilla.org/en-US/docs/Web/SVG)
- [Kevin Powel Video: From design to code](https://www.youtube.com/watch?v=hQCRU7hZldE)
- [Article: Using SVGs](https://css-tricks.com/using-svg/)
- [Article: SVG Optimization](https://css-tricks.com/understanding-and-manually-improving-svg-optimization/)
- [Tony Gist: Problem with Clipping the ViewBox](https://gist.github.com/acidtone/1180c12d207234f9a053eedda981ddf9)
