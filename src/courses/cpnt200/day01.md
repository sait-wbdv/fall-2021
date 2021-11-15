---
layout: layouts/day.njk
title: CPNT 200 Day 1 - Content Management Systems
description: 
date: 2021-11-16
---

## Prep

- [Headless CMS Explained](https://www.freecodecamp.org/news/what-is-headless-cms-explained/)
- [What's the Difference?](https://www.techmagic.co/blog/headless-vs-serverless-cms/)
- [State of JAMstack Nation - Sarah Drasner](https://www.youtube.com/watch?v=COAVmST41Q0)
--- 

## CPNT 200 Overview
- This course will consist of 6 assignments: 5 small assignments and 1 large group assignment
- The 5 small assignments will be focused on the main aspects of setting up a Headless CMS website
  - All the individual assignments will be due on November 29th
- The group project will give you an opportunity to focus on the area of development that interests you the most*
  - Your team be organized as: Backend Dev, Content Manager, Frontend Dev, and Designer

## [Assignment 1: Netlify CMS Admin Panel]({{ '/assignments/cpnt200/assignment-1/' | url }})
- **Due: November 29 11:59pm**
- Create a nuxt project and set up an netlify-cms admin panel 

## Today's Topics
- CMS and Site Rendering
- Headless vs Traditional CMS
- Node Version Management
- Netlify CMS Setup
---

##  Content Management Systems and Site Rendering
CMS's are used to organze content on websites. This includes text content like blogs and articles, images, videos, products, etc.

Traditional CMS's like Wordpress and Drupal are built on a LAMP stack. These types of sites still make up over 40% of websites on the internet. 

However new types of CMS's are starting to emerge as well. The JAMStack has recently become a serious contender due to it's flexibility, developer friendliness, optimization, and security.

### CMS Headless & Traditional

- Traditional CMS
  : Backend and frontend content are tightly together.

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

---

## Node Version Management
- You will need to use [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
  - NVM allows you to set the node version for a specific project
  - `nvm install` version number
  - `nvm use` select version
  - **Important** If you switch versions, you will need to install packages that you may have already installed in other versions

## Introduction to Netlify CMS


#### Activity: Nuxt install and NetlifyCMS Setup

---

## Netlify CMS Admin Panel

### Walkthrough
1. Dashboard
2. General settings 
3. Plugins
4. Content Manager

### Activity: [Create a blog field](https://gist.github.com/lilyx13/f83513a37740706780acc5e4e936d3d9)

---

## Lab Time
- Work on [assignment 1]({{ '/assignments/cpnt200/assignment-1/' | url})
