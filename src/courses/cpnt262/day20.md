---
layout: layouts/day.njk
title: CPNT 262 Day 20 - Introduction to Mongoose and Heroku with Atlas
description: 
date: 2021-11-05
released: true
---

## Housekeeping
- Proposed assignment changes
    1. Assignment 6 removed
    2. Assignment upgraded to include Mongoose
        - Weight: 20%
        - Due: Nov 10
    3. Group project now 40% (15% for individual contribution)
- Tony needs your team names
- Ash will be covering for Tony this afternoon

## Trophy of the Day
- Have ONE member submit a group charter as a Daily

--- 

## 1. `express.Router`
### Materials
- [ExpressJS - Routing](https://www.tutorialspoint.com/expressjs/expressjs_routing.htm) on Tutorials Point
- Reference: [Express Routes - `express.Router`](https://expressjs.com/en/guide/routing.html#express-router)

### Demo: Guild routes with `express.Router`
- [Starter Code](https://github.com/sait-wbdv/in-class/tree/main/cpnt262/11-05-mongoose/starter-guild-router)

### Key Takeaways
Route modules work much like other local modules but require some added steps:
- Inside the route module file (`./routes/api.js`):
    1. `express` is required as a module.
    2. Your router is defined using the `express.Router` function:

        ```js
        const express = require('express')
        const router = express.Router()
        ```

        - it's convention to name the app `router` when within a local module.

    3. Route handlers operate the same, except:
        - the `router.get()` is used instead of `app.get()`;
        - the path does not include `/api` because that is assigned in `server.js` below.

    4. `router` is exported normally:
        
        ```js
        module.exports = router
        ```

- In `server.js`:
    1. The route module is required normally:
       
        ```js
        const api = require('./routes/api')
        ```
    
    2. The often missed step: attach your route to a path using middleware (`app.use()`) and the optional path argument:

        ```js
        app.use('/api', api)
        ```

---

## 2. Introduction to Mongoose
### Materials
- [Mongoose CRUD](https://coursework.vschool.io/mongoose-crud/) (Create, Read, Update, Delete)
- [Mongoose Getting Started (kittens!)](https://mongoosejs.com/docs/)
- Gist: [Read MongoDB data with Mongoose and Express](https://gist.github.com/acidtone/de24abff567b3b2bf90b1af35bc3a23a)

### Demos 
- Kittens in [Mongoose Getting Started](https://mongoosejs.com/docs/)
- If there's time: Guild app with mongoose

---

## 4. MongoDB Atlas on Heroku
- [How to host a RESTful Node.js server with MongoDB Atlas database on Heroku](https://dev.to/cpclark360/how-to-host-a-restful-node-js-server-with-mongodb-atlas-database-on-heroku-1opl)

### Key Takeaways
- Most of the steps in this tutorial were completed yesterday so you should only have to complete the following to have your Heroku connect to Atlas:
    - Add your connection string to the Config Var section of your App Settings.
- Note: CORS is _probably_ not needed for your app to operate.

---

### Lab Time
- Have ONE member submit a group charter as a Daily
- Assign the key roles and responsibilities for each group member in delivering the Final Project. After each entry write a short summary defining their role and what their responsibilities are in the project.

{% comment %}

{% endcomment %}