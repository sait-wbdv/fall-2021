---
layout: layouts/day.njk
title: CPNT 201 Day 5 - Scalable Vector Graphics
description: In this class we will look at how you can add svg (a type of vector) code directly to a website and stylize it with css. We will learn how to optimize and prepare vectors for use on the web.
date: 2021-10-05
---

{% comment %}
## Tasks
- Prep a vector for production  
  - union paths
  - remove extra content
  - remove background
  - set the image background border to fit the content
  - optimize with [svgomg](https://jakearchibald.github.io/svgomg/)
    - prefer viewbox over width and height
  - style to attribute
  - clean ids is only good if youre not gonna do stuff to it
## Manual svg cleaning
- change id to class
- 
{% endcomment %}

## Trophy of the Day: Stylized SVG
- Create an svg and stylize it with css
  - add classes to paths
  - for interaction use transitions and pseudo classes
  - for animation try using keyframes

---
## Topic 1: SVGs in HTML
- Insert svgs into html
  - img
  - css background image
  - inline
- [Tony's Gist](https://gist.github.com/acidtone/90c99bbd1825f591586d05e5419d711f)
- Style svgs with css using fill and stroke
- Css filters can be applied to inline svgs

### Activity: Add 3 svgs to a web page

---
## Topic 2: ViewBox and SVG Anatomy
- go over svg syntax
  - path
  - heigth and width
  - viewBox

### SVG Editing Preparation
- Optimization
- Identifying and naming paths

### Tool Time: SVGOMG
- Jake Archibald's svg optimization app [svgomg](https://jakearchibald.github.io/svgomg)

---
## Topic 3: SVG Style Tips
- Color
- Size
- Transitions and pseudo classes
- Keyframes

### Editing Walkthrough
- We will take an svg logo that we have recently built and stylize it for use on a web page

## Activity: Stylize an inline svg

---

