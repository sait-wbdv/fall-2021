---
layout: layouts/day.njk
title: CPNT 200 Day 2 - Content Management Systems
description: Today we will explore setting up a headless CMS with Netlify CMS. We will also go into more detail on the options available for setting up CMS websites and things that you will need to consider for your future clients.
date: 2021-11-17
released: true
---

## Prep

- [Headless CMS Explained](https://www.freecodecamp.org/news/what-is-headless-cms-explained/)
- [What's the Difference?](https://www.techmagic.co/blog/headless-vs-serverless-cms/)

--- 

## [Assignment 2: Netlify CMS Admin Panel]({{ '/assignments/cpnt200/assignment-2/' | url }})
- **Due: November 29 11:59pm**
- Create a nuxt project and set up an netlify-cms admin panel 

## Today's Topics
- CMS and Site Rendering
- Headless vs Traditional CMS
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
- [Netlify CMS Documentation](https://www.netlifycms.org/)
- Netlify CMS is based on your git workflow
  - Unlike Strapi and many others, it does not require a database
  - This creates a full JAMstack configuration
    - lightweight, fast deployment, and secure
- [Netlify Github Setup](https://www.netlifycms.org/docs/github-backend/)

### Netlify Setup Notes
- [Netlify Setup Directions](https://gist.github.com/lilyx13/94398c49afce55e49032251687227cfc)
  - This will add netlify to your nuxt instance
- [Netlify CMS Nuxt Official Docs](https://www.netlifycms.org/docs/nuxt/)
- Netlify CMS will integrate with the `nuxt/content` module

#### Activity: Add netlify CMS to your Nuxt page
- Follow [this gist](https://gist.github.com/lilyx13/94398c49afce55e49032251687227cfc) 
  - The code snippits are taken from netlify cms' documentation


### Netlify CMS Widgits
- With your `yml` file, you have a lot of power over creating widgits
- [Documentation](https://www.netlifycms.org/docs/configuration-options/)   
- [Article on Netlify CMS Widgits](https://www.netlify.com/blog/2017/06/20/extending-netlify-cms-part-one-custom-widgets/)

#### Netlify Widget Steps
- [Follow these directions](https://gist.github.com/lilyx13/f16358b2eeffb684b89991dd877fe3ef)

---

## Lab Time
- Work on [assignment 2]({{ '/assignments/cpnt200/assignment-2/' | url })
