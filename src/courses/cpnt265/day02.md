---
layout: layouts/day.njk
title: CPNT 265 Day 2 - Pintrest API with Nuxt
description: 
date: 2021-12-02
---

## Outline
- CPNT 200 Group Assignment Questions
- Nuxt and Environment Variables
- Pinterest Api
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
