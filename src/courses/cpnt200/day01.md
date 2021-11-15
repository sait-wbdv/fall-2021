---
layout: layouts/day.njk
title: CPNT 200 Day 1 - JAMstack and Nuxt Intro
description: We will look at a JAMstack and basic nuxt setup
date: 2021-11-17
released: true
---

## Prep
- Read Through [What is a JAMStack](https://jamstack.org/what-is-jamstack/)
- Skim through [this indepth article on JAMStack](https://www.freecodecamp.org/news/what-is-the-jamstack-and-how-do-i-host-my-website-on-it/)
- Watch [State of JAMstack Nation - Sarah Drasner](https://www.youtube.com/watch?v=COAVmST41Q0)
- Watch until 6:07 [NuxtJS Content](https://www.youtube.com/watch?v=UAQXQG5RnUQ)

## [Assignment 1: Nuxt Frontend Setup]({{ '/assignments/cpnt200/assignment-1/' | url}})
- **Due November 29th 11:59pm**
- Set up a nuxtjs page
- Remove boiler plate
- Add modules
- Create a header, footer, and nav component

---

## Topics
- LAMPStack vs JAMStack
- Intro to Nuxt
- Nuxt Configuration

---

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

## JAMStack and Headless CMS
JAMStack is quickly becoming a favourite for developers. You have a lot of options to configure a stack that works with you and your clients.

You can choose between different frontend frameworks such as:
- React
  - Gatsby (One of the most popular site builders around)
  - NextJS (Next and Nuxt are very similar, just one is react and the other is vue)
- Vue
  - Gridsome
  - Nuxt
- Svelte
  - Sveltekit
- Ruby
  - Jekyll
- Go
  - Hugo

---
## Intro to Nuxt
- NuxtJS is a frontend framework that uses VueJS
- It can be used to create:
  - Server Side Rendered (SSR) Pages
    - backend server sends data to frontend page (traditional page)
  - Static Site Generation (SSG)
    - Web page content is built and then hosted statically
  - Progressive Web Apps
    - A client side rendered web application
- Nuxt 2, Nuxt Bridge, Nuxt 3
  - Nuxt 2: stable version
  - Nuxt Bridge: adds some features from Nuxt 3 to Nuxt 2
  - Nuxt 3: Currently in Public Beta Version
- We will use Nuxt 2 as there are more available resources

### NuxtJS Resources
- [Offical Docs](https://nuxtjs.org/docs/get-started/installation)
- [Tutorials](https://nuxtjs.org/tutorials)
- [Traversy Video](https://www.youtube.com/watch?v=ltzlhAxJr74) **note that this tutorial is focused on SSR**

---

## Nuxt Setup
- Use the create nuxt-app command as noted on the documentation
  - npm, npx, and yarn are all good options
  - [Create Nuxt App Docs](https://github.com/nuxt/create-nuxt-app/blob/master/README.md)
- Going through the prompt:
  - _Make sure to press space to select options_
  - Follow [Ash's guide](https://gist.github.com/lilyx13/db43759b547b7cf909d4167d0577d482)       
  - If you use Nuxt with Strapi, select `axios` instead of `content` during setup

### Nuxt Tour Gists
- [Nuxt Project Structure](https://gist.github.com/lilyx13/4c973750fb63713d04f7d2f64fa20223)
- [Nuxt Navigation](https://gist.github.com/lilyx13/3ae4627f079929978634d9d84b776f35)
- [Nuxt Pages](https://gist.github.com/lilyx13/b4dfac6b3f0c3a5c98dee24a6d44eb72) 

### Important Modules
- [Nuxt Content](https://content.nuxtjs.org/) (selected during setup, but can also install after)
  - Handles the CMS stuff
  - install with `npm install -D @nuxt/content
- [Nuxt Images](https://image.nuxtjs.org/) (must add to project)
  - Automatic and easy optimization of images
  - install with `npm install -D @nuxt/image
    - Then add to `buildModules`
- [Nuxt Router](https://nuxtjs.org/docs/get-started/routing/) (built in)
  - `NuxtLink` makes site navigation easy

#### Activity - Install and explore nuxt
- Install
- Run dev
- Look at the pages and components files
- Try adding content in any of the `template` tags
  - In vue, you can write plain html in the template tags

### nuxt.config.js
- This is where you will set up your modules and a lot of your defaults
- Review [the documentation](https://nuxtjs.org/docs/directory-structure/nuxt-config/)
- check that `components: true`, if it is set to false, you will have to manually import components
- you can set default image sizes if you are using @nuxt/image in here
- you can import sass/scss into here as well.
- If you are using an external stylesheet, decalre it in this file (see docs)

#### Activity: Nuxt Config File
- Read through the docs and edit your config file
- Install the `@nuxt/image` module
  - Add it to the configuration
- Install the `@nuxtjs/dotenv` module
  - Add it to the configuration

---

## Lab Time
- Work on [Assignment 2]({{ '/assignments/cpnt200/assignment-2/' | url }})