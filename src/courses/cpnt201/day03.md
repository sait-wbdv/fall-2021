---
layout: layouts/day.njk
title: CPNT 201 Day 3 - Raster Images
description: Raster images can make a website look and feel beautiful, but if not at a proper resolution and file size, they can also make a site look ugly and feel sluggish. We will look at how to prepare images for a web development.
date: 2021-10-01
released: true
---

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

## [CPNT201 Assignment 2: Raster Image Optimization]({{ '/assignments/cpnt201/assignment-2/' | url }})

- Due: Tuesday October 5th @ 11:59pm;

---

## Raster Image Editors

- [Gimp](https://www.gimp.org/)
  - [Youtube Video Tutorials](https://www.youtube.com/c/LogosByNick)
  - [Photogimp](https://github.com/Diolinux/PhotoGIMP)
    - Enhance gimp's functionality
  - [BIMP](https://alessandrofrancesconi.it/projects/bimp/)
    - A plugin for Batch Image Processing
- [Pixlr](https://pixlr.com/)
  - Web based raster editing
- [Canva](https://www.canva.com/photo-editor/app/)
  - Web and mobile based editing
- [Photoshop](https://www.adobe.com/products/photoshop.html)
  - Premium raster image editing program (Industry Standard)
  - [Youtube Tutorial Videos](https://www.youtube.com/c/TerryWhite01)
- I will be doing examples using GIMP with photogimp and bimp

## Raster Images in Web Development

### Terminology

- [Terminology source](https://www.picmonkey.com/blog/photo-editing-terms-you-dont-know)

Aspect Ratio
: proportional representation of width vs height

Clarity vs Sharpen
: sharpen is contrast between light and dark pixels, clarity is contrast between mid tones.

Exposure
: How light or dark an image appears after capturing it

Histogram
: Displays tones in your image ranging from 0-255

Compression
: decreasing an image fileze for faster loading. lossy or lossless

Lossy Compression
: Reduces file size by eliminating information. The image will not be exactly the same. Data that is lost when performing a lossy compression cannot be recovered.

Lossless Compression
: All the original information is kept. PNG is an example of loseless compression.

## Common Practices for Raster Image Editing

- Color Selection
  - Photoshop: healing brush
- Brightness, Colors, Levels, Exposure
  - Gimp: Colors tab
  - Photoshop: Image/Adjustments tabs
- Touch up photos
  - Healing Brush
  - Gimp: Heal Selection
  - Photoshop: Spot Healing
- Cut a something out of a background
  - photoshop: direct selection tool, refine edge, mask mode
  - gimp:

### [Gist on image size ranges](https://gist.github.com/lilyx13/8aa5c8e4550652e37ce0fa8fa10c1983)

### Image size for Web extra Reading

- [Flothemes article](https://flothemes.com/flothemes-image-sizes/)

### File Formats for web

- PNG, JPG, WebP

### Activity: [Set up Directory Hierarchy]({{ '/activities/images/image-directory/' | url }})

---

## Lazy Loading

- This is used to shorten the critical rendering path
- items that are not required immediatly will be downloaded when the user gets to them
- this is the opposite of `preload` which we use on our fonts to speed up the rendering of the page
- for lazy loading, the image loads at render

```
<!-- image lazy loading -->
<img src="image.jpg" alt="..." loading="lazy">
<!-- iframe lazy loading -->
<iframe src="video-player.html" title="..." loading="lazy"></iframe>
```

---

## Optimization

- Batch processing for resizing and file conversion using gimp
- Convert to Webp
- Optimize images

### Tooltime

- [BIMP](https://alessandrofrancesconi.it/projects/bimp/)
- [squoosh](https://squoosh.app)

### Activity: [Image Optimization]({{ '/activities/images/image-optimization' | url }})

---

## Prep for tomorrow

- [Video: Keven Powell Getting started with Figma](https://www.youtube.com/watch?v=eZJOSK4gXl4)
  - overview of how to use figma. longer video with great intro content
- [Video: Logos by Nick Simple Box Icon](https://www.youtube.com/watch?v=zngMDDeOjmw&list=PLynG8gQD-n8BMplEVZVsoYlaRgqzG1qc4&index=11)
  - a design tutorial using inkscape. The same thing can easily be made in figma and illustrator. His method of using shapes is particularly useful.
