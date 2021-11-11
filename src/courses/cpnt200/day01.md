---
layout: layouts/day.njk
title: CPNT 200 Day 1 - Content Management Systems
description: In this lesson, we will discuss what a CMS is and some of the basic concepts that you will need to make informed choices for setting up a CMS project.
date: 2021-11-16
---

## Prep

- [Headless CMS Explained](https://www.freecodecamp.org/news/what-is-headless-cms-explained/)
- [What's the Difference?](https://www.techmagic.co/blog/headless-vs-serverless-cms/)
- Watch [Getting started with Strapi in 3 minutes](https://www.youtube.com/watch?v=zd0_S_FPzKg)
--- 

## CPNT 200 Overview
- This course will consist of 6 assignments: 5 small assignments and 1 large group assignment
- During the 5 small assignments, you will get an idea of what aspect of CMS web management you want to focus on and groups will be assigned with this in mind.
- The team roles that this course and final assignment are based on are:
  - Backend Developer: Manages CMS, Database, and API
  - Content Creator: Manages content creation. Communicates content schema needs with backend developer
  - Frontend Developer: Manage Frontend Static Site Generator. Builds the framework
  - Frontend Designer: Focuses on styling content
- Everyone will have certain aspects of their role that need to work directly with other team members
  - However the Backend Developer and Content Creator will likely be collaborating a lot, and the Frontend Developer and Designer will also be collaborating a lot.

## [Assignment 1: Strapi Backend Configuration]({{ '/assignments/cpnt200/assignment-1/' | url }})
- **Due: November 29 11:59pm**
- Strapi install and setup

## Today's Topics
- CMS and Site Rendering
- Headless vs Traditional CMS
- Node Version Management
- How to set up a Headless CMS using Strapi
- Strapi Content Management Tour
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
  - Open & Closed Source
  - Self hosted and cloud hosted
  - Built using different languages and frameworks
- [Storyblok](https://www.storyblok.com/) is another fantastic headless cms

---

## Node Version Management
- You will need to use [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
  - NVM allows you to set the node version for a specific project
  - `nvm install` version number
  - `nvm use` select version
  - **Important** If you switch versions, you will need to install packages that you may have already installed in other versions

## Introduction to Strapi CMS
- Strapi is an open source self hosted headless cms. It is built with react and can be installed with `npm` or `yarn`
  - You can check out the [source code here](https://github.com/strapi)
- [Strapi Install Documentation](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/installation/cli.html#creating-a-strapi-project)


#### Activity: Strapi Setup
- [Strapi Install Directions](https://gist.github.com/lilyx13/ab6c6b5697b3a1db8682fb555a86b496)

---

## Strapi Admin Panel

- [Strapi Admin Documentation](https://docs-next.strapi.io/developer-docs/latest/developer-resources/plugin-api-reference/admin-panel.html)

### Walkthrough
1. Dashboard
  - Set up a user admin
  - User Roles & Permissions
2. General settings 
  - Configure user and plugin permissions etc
3. Plugins
  - Check out the plugin marketplace
4. Content Manager
  - Collection Types: editable categories of content
  - Configure views of content types
  - Managing Fields

### Activity: [Create a blog field](https://gist.github.com/lilyx13/f83513a37740706780acc5e4e936d3d9)

---

## Lab Time
- Work on [assignment 1]({{ '/assignments/cpnt200/assignment-1/' | url})
