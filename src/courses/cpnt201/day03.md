---
layout: layouts/day.njk
title: CPNT 201 Day 3 - Raster Images
description: Raster images can make a website look and feel beautiful, but if not at a proper resolution and file size, they can also make a site look ugly and feel sluggish. We will look at how to prepare images for a website correctly and effectively.
date: 2021-10-01
---
## Prep for Today
- 
---
## Trophy of the Day: 

## Overview
1. Plan it out
  - Intro to raster images and image editors
  - Raster Image Theory
2. Brute force
  - Set up image directories
  - optimize images for web
3. Lab Time
  - Work on Activity
4. Walkthrough
  - Discussion on process

---
## Raster Image Editors
- [Gimp](https://www.gimp.org/)
  - [Photogimp](https://github.com/Diolinux/PhotoGIMP)
    - Enhance gimp's functionality
- [Pixlr](https://pixlr.com/)
- [Canva](https://www.canva.com/photo-editor/app/)
- [Photoshop](https://www.adobe.com/products/photoshop.html)

## Topic 1: Raster Images in Web Development

### Terminology
- [Terminology source](https://www.picmonkey.com/blog/photo-editing-terms-you-dont-know)
- Aspect Ratio
  : proportional representation of width vs height
- Clarity vs Sharpen
  : sharpen is contrast between light and dark pixels, clarity is contrast between mid tones.
- Exposure
  : How light or dark an image appears after capturing it
- Histogram
  : Displays tones in your image ranging from 0-255
- Compression
  : decreasing an image fileze for faster loading. lossy or lossless
- Lossy Compression
  : Reduces file size by eliminating information. The image will not be exactly the same. Data that is lost when performing a lossy compression cannot be recovered.
- Lossless Compression
  : All the original information is kept. PNG is an example of loseless compression.

### Image Size Approximate Reccomendations
#### Large
- 2500px wide
  - for images that span the whole width of the browser
- 1800px-2000px wide
  - Images that take up most of the page
- 1500px wide
  - images that will be opened up in a fullscreen view. (can go up to 2000px)

#### Medium
- 800px wide
  - Great for situations where you have a tall picture (like 800px by 1200px). 2:3 or 3:4 image ratios are good for portrait orientation images.
- 800px - 1500px wide
  - good general medium width size
  - choose width depending on the aspect ratio and height

#### Small
- 500px - 750px wide
  - small image size
- 75px to 200px
  - good thumbnail size

### Image size for Web extra Reading
- [Flothemes article](https://flothemes.com/flothemes-image-sizes/)

### File Formats for web
- PNG, JPG, WebP

### Activity: Optimized Image Hunt
- Inspect images in the web
- use Lighthouse to check for image optimization

---
## Organizing and Serving Images
- Directory Hierarchy
- lazy loading
- srcset

---
## Optimization
- Batch processing for resizing and file conversion using gimp
- Convert to Webp
- Optimize images

### Tooltime
- [BIMP](https://alessandrofrancesconi.it/projects/bimp/)
- [svgomg](https://jakearchibald.github.io/svgomg)

### Activity: Image Optimization

---
## Prep for tomorrow
- [Video: Keven Powell Getting started with Figma](https://www.youtube.com/watch?v=eZJOSK4gXl4)
	- overview of how to use figma. longer video with great intro content
- [Video: Logos by Nick Simple Box Icon](https://www.youtube.com/watch?v=zngMDDeOjmw&list=PLynG8gQD-n8BMplEVZVsoYlaRgqzG1qc4&index=11)
	- a design tutorial using inkscape. The same thing can easily be made in figma and illustrator. His method of using shapes is particularly useful.
