---
layout: layouts/day.njk
title: CPNT 200 Day 2 - Content Management Systems
description: 
date: 2021-11-16
released: true
---

## Prep

- [Headless CMS Explained](https://www.freecodecamp.org/news/what-is-headless-cms-explained/)
- [What's the Difference?](https://www.techmagic.co/blog/headless-vs-serverless-cms/)
--- 



## [Assignment 1: Netlify CMS Admin Panel]({{ '/assignments/cpnt200/assignment-1/' | url }})
- **Due: November 29 11:59pm**
- Create a nuxt project and set up an netlify-cms admin panel 

## Today's Topics
- CMS and Site Rendering
- Headless vs Traditional CMS
- Nuxt Install
- Netlify CMS Setup
---

##  Content Management Systems and Site Rendering
CMS's are used to organze content on websites. This includes text content like blogs and articles, images, videos, products, etc.

Traditional CMS's like Wordpress and Drupal are built on a LAMP stack. These types of sites still make up over 40% of websites on the internet. 

However new types of CMS's are starting to emerge as well. The JAMStack has recently become a serious contender due to it's flexibility, developer friendliness, optimization, and security.

### Headless CMS vs Traditional CMS


- Headless CMS
  : The Content is separated from the frontend.

- There are many headless cms options.
  - Open Source
    - [Netlify CMS](https://www.netlifycms.org/)
      - simpler, less featured, pure JAMstack, great integration with netlify hosting
    - [Strapi CMS](https://strapi.io)
      - Very full featured, sql database default, deployed separately from frontend, most popular open source headless cms
  - Closed Source
    - [Storyblok](https://storyblok.com)
      - Visual Editor, stable, great features, SAAS
    - [Ghost CMS](https://ghost.org/)
      - Beautiful editor, 14 day free trial

- Traditional CMS
  : Backend and frontend content are tightly together. LAMP stack.

- Examples includes:
  - Wordpress, Drupal...

### Why Headless?
- We will be using a headless CMS because it is more flexible, secure, and developer friendly than traditional cms options.

#### Netlify CMS vs Strapi
- Netlify CMS is best for:  
  - Simple content management
  - Not excessive data
  - Data does not need to be stored in a data base
- Netlify CMS is **full JAMstack**
  - All you need is a git repo and a netlify account
- Strapi is best for:
  - Separation of data from frontend
  - Deployment of data to multiple frontends
  - Lots of data
  - Lots of different types of data
- Strapi is a headless cms
  - You will need to deploy to Heroku or something similar
  - Frontend will be deployed separately
    - GH Pages, Netlify...

---


## Introduction to Netlify CMS
- What is Netlify CMS?
- How do you set it up?
- Why are we using Netlify CMS?

### Netlify Setup Notes


### Netlify CMS Admin Panel

#### Walkthrough
1. Dashboard
2. General settings 
3. Plugins
4. Content Manager

### Activity: [Create a blog field](https://gist.github.com/lilyx13/f83513a37740706780acc5e4e936d3d9)

---

## Lab Time
- Work on [assignment 1]({{ '/assignments/cpnt200/assignment-1/' | url})
