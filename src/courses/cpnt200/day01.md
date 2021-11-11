---
layout: layouts/day.njk
title: CPNT 200 Day 1 - Content Management Systems
description: In this lesson, we will discuss what a CMS is and some of the basic concepts that you will need to make informed choices for setting up a CMS project.
date: 2021-11-16
---

## Prep
- Read Through [What is a JAMStack](https://jamstack.org/what-is-jamstack/)
- Skim through [this article describing a JAMStack](https://www.freecodecamp.org/news/what-is-the-jamstack-and-how-do-i-host-my-website-on-it/)
- Watch [Getting started with Strapi in 3 minutes](https://www.youtube.com/watch?v=zd0_S_FPzKg)
- Read [SQL Syntax](https://www.w3schools.com/sql/sql_syntax.asp)
- Watch [GraphQL: A Documentary](https://www.youtube.com/watch?v=783ccP__No8)

--- 

## CPNT 200 Overview


## [Assignment: Strapi Backend Configuration]({{ '/assignments/cpnt200/assignment-1/' | url }})
- **Due: November 29 11:59pm**
- Strapi install and setup

## Topics
- JAMStack vs LAMP Stack
- Headless CMS
- Tour of Strapi
- Basics of SQL

---

##  Content Management Systems and Site Rendering
CMS's are used to organze content on websites. This includes text content like blogs and articles, images, videos, products, etc.

Traditional CMS's like Wordpress and Drupal are built on a LAMP stack. These types of sites still make up over 40% of websites on the internet. 

However new types of CMS's are starting to emerge as well. The JAMStack has recently become a serious contender due to it's flexibility, developer friendliness, optimization, and security.

### LAMP Stack vs JAMStack
- LAMP Stack stands for:
  - Linux Apache MySQL and PHP
    - Linux = Operating System
    - Apache = Web Server
    - MySQL = Database
    - PHP = Programming Language
  - The LAMP stack is a mature, stable, and powerful stack to use for websites.
  - LAMP Stacks are Server Side Rendered (SSR)
- JAM Stack stands for:
  - Javascript API Markup
    - Javascript = Dynamic programming, ran on client
    - API = Server-side functions and database actions. Served using a CDN
    - Markup = Content (templates etc) built before build time in the browser. Static Site Generators are used for this.
  - Many site builders used to make JAMStack sites can create SSR, SSG, and PWA (Progressive Web Apps)

---

## CMS Headless & Traditional

- Traditional CMS
  : Backend and frontend content are tightly together.

- Headless CMS
  : The Content is separated from the frontend.

- There are many headless cms options.
  - Open & Closed Source
  - Self hosted and cloud hosted
  - Built using different languages and frameworks
- [Storyblok](https://www.storyblok.com/) is another fantastic headless cms

### Strapi CMS
- Strapi is an open source self hosted headless cms. It is built with react and can be installed with `npm` or `yarn`
  - You can check out the [source code here](https://github.com/strapi)
- [Strapi Install Documentation](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/installation/cli.html#creating-a-strapi-project)

#### Node Version Management
- You will need to use [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
  - NVM allows you to set the node version for a specific project
  - `nvm install` version number
  - `nvm use` select version
  - **Important** If you switch versions, you will need to install packages that you may have already installed in other versions

#### Activity: Strapi Setup
- [Strapi Install Directions](https://gist.github.com/lilyx13/ab6c6b5697b3a1db8682fb555a86b496)
---

## Strapi Admin Panel

- [Strapi Admin Documentation](https://docs-next.strapi.io/developer-docs/latest/developer-resources/plugin-api-reference/admin-panel.html)
- Walkthrough

### Content Type and Collection Setup
- When you use strapi, you create content types in collections
- This approach allows you to tailor the fields to the needs of the content creator
- Strapi organizes the content into an sqlite database by default. This can be changed to mysql, mariadb, postresql, mongodb (for the time being).

### Activity: [Create a blog field](https://gist.github.com/lilyx13/f83513a37740706780acc5e4e936d3d9)

---

## Lab Time
- Work on [assignment 1]({{ '/assignments/cpnt200/assignment-1/' | url})
