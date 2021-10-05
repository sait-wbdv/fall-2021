---
layout: layouts/day.njk
title: CPNT 201 Day 5 - Scalable Vector Graphics
description: In this class we will look at how you can add svg (a type of vector) code directly to a website and stylize it with css. We will learn how to optimize and prepare vectors for use on the web.
date: 2021-10-05
released: true
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

## CPNT 201 [Assignment 3: SVG Logo]({{ '/assignments/cpnt201/assignment-3/' | url }})
- Due: Friday October 8th @ 11:59pm

---
## Topic 1: Width and Height Img Src
- Adding width and height to images
- How to style them after setting this
- Any questions about assignment 2
- [This article](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/) has some good indepth information on dealing with issues related to setting width and height


### Quick follow up on fonts and reset
- go over font settings and reset css in [Ash's image optimization repo](https://github.com/lilyx13/srcset-demo-code)

## Topic 1: SVGs in HTML
- [Repo with instructions for design demos](https://github.com/lilyx13/svg-image-design)

### Activity: SVG Logo Design Continued
- Add to a previous svg design
- Build off of one of the demos done in class
- optimize with svgomg
- Download/export the svg file and store it in a repo
  - If you would like, you are welcome to fork the repo that I've provided
- inspect with dev tools after loading it into a browser
- visually inspect code for svg in vscode

---

## Topic 2: Optimize an SVG

### Tool Time: SVGOMG
- Jake Archibald's svg optimization app [svgomg](https://jakearchibald.github.io/svgomg)

### ViewBox and SVG Anatomy
- go over svg syntax
  - path
  - heigth and width
  - viewBox

## Topic 3: Add an SVG to HTML and style with CSS
- [Tony's Gist](https://gist.github.com/acidtone/90c99bbd1825f591586d05e5419d711f)
- Style svgs with css using fill and stroke
- Css filters can be applied to inline svgs


### Activity: Add 3 svgs to a web page
- Quick activity (10min)
- add 1 image with the img tag
- add 1 inline svg
- Create a section on a page and use an svg background. One way to do this is with [heropatterns](https://www.heropatterns.com/)
---

## Topic 4: SVG Style Tips
- Color
- Size
- Transitions and pseudo classes
- [Keyframes](https://css-tricks.com/snippets/css/keyframe-animation-syntax/)

## Lab Time: [Stylize svgs in html]({{ '/activities/images/svg-design/' | url }})
---

