---
layout: layouts/day.njk
title: CPNT 200 Day 3 - Intro to Nuxt
description: This class will focus on using nuxt to create a statically generated site.
date: 2021-11-18
---

## Prep
- 

## [Assignment 3 - Set up a Nuxt Project]({{ '/assignments/cpnt200/assignment-3/' | url }})
- **Due: Friday November 29 @ 11:59**


## Overview
- What is Nuxt
- Nuxt as a SSG
- Nuxt Basic Config
- Nuxt Default Layout
- Nuxt Router and Navigation
---

## Nuxt Introduction

### Nuxt as a Static Site Generator

### Nuxt Config

#### Config File and Adding Modules
- `nuxt.config.js` Setup
  - Styles
  - Modules

#### Activity: Create a Nuxt Page
- Use `npm`, `npx`, or `yarn` and set up a nuxt project

### Nuxt Default Layout
- `layouts/default.vue`
- No need for head content or anything here
- Put a simple page layout inside `<template></template>` tags

### Nuxt Router
- Check out the [documentation](https://nuxtjs.org/docs/features/nuxt-components/) for more info on using nuxt-link
- Nuxt provides it's own syntax for local links
  - `<NuxtLink to="/">Home</NuxtLink>
    - other links use `/about` type syntax
    - It depends on the name of the file in your `pages/` directory

 

#### Activity: Create a navigation using nuxt-router
- create 2-3 .vue files in the `pages/` directory
- use `<NuxtLink>` syntax to create a nav bar
  - use the default template

### Nuxt Images
Nuxt has a plugin for optimizing images
- Check out these [installation and setup documentation](https://image.nuxtjs.org/getting-started/installation)
  - in your nuxt repo, add the dev dependency `@nuxt/image`
    - `npm install -D @nuxt/image`
  - then in your `nuxt.config.js` file add it to the build modules
  ``` 
  buildModules: [
    '@nuxt/image'
  ]
  ```
- There are a few options to configure your image defaults [Check out modules options here](https://image.nuxtjs.org/api/options/)

### Nuxt Content
- [nuxt/content module](https://content.nuxtjs.org/)
---

## Lab Time
- Work on Assignment 3