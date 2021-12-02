---
layout: layouts/day.njk
title: CPNT 265 Day 2 - Moodboards and Privacy Policy with Pinterest and Netlify
description: 
date: 2021-12-02
released: true
---

## Outline
- CPNT 200 Group Assignment Questions
- Nuxt and Environment Variables
- Pinterest Api
- Privacy Policies
- Moodboards
---


## Nuxt Environment Variables
- [Nuxt Runtime Config](https://nuxtjs.org/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config/)
- From Nuxt 2.13 onwards, nuxt has built-in dotenv support

### Configuration File
- in your `nuxt.config.js` you will set up your environment variables like this
```
export default {
  publicRuntimeConfig: {
    baseURL: 'https://nuxtjs.org'
  },
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  }
}
```

### Important Security Practices for Environment Variables
- Don't put sensitive information in your git repo
- Don't store senitive information nuxt.config or .env (unless it's gitignored) 
- Secret keys **should be stored on your hosting platoform** ie Netlify
- Use camelCase naming conventions in runtimeConfig
- use runtimeConfig instead of env

---

## Pinterest API
- [Developer Guidelines](https://policy.pinterest.com/en/developer-guidelines)
- Create a Pinterest Developer Account
- Create a privacy policy
  - Check out [this list of privacy policy generators](https://digital.com/privacy-policy-generators/)
  - In order to use the pinterest api, you will need a privacy policy added to your web page


### Creating a Privacy Policy
- Add a privacy policy to your website
- [Demo with iubenda](https://www.iubenda.com/en/)

---

## Moodboard

- What is a moodboard
  : A moodboard is a collection of images and other content that you can use to develop a brand, understand clients better, and creatively brainstorm

- Software for moodboards
  - [pinterest](https://pinterest.com)
  - [milanote](https://milanote.com)
  - graphic design software such as:  
    - gravit, inkscape, photoshop, figma
- You can submit a moodboard for your final project

---

## Extra resources
- If you are interested in learning more about jamstacks, netlify published a free book that you can download [check it out here](https://www.netlify.com/oreilly-jamstack/)