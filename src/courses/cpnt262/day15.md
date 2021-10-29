---
layout: layouts/day.njk
title: CPNT 262 Day 15 - Deploying a server to Heroku
description: 
date: 2021-10-29
released: true
---

## Housekeeping
- Optional Lab Time this afternoon (no attendance)
- Draft: Assignment 5 released after lunch

## Trophy of the Day
- Deployed Heroku website

---

## 1. Global npm packages and `nodemon`
Global `npm` packages are available for all npm projects and are usually used for packages that help you during development (i.e. those that aren't needed on the live server). 

### Materials
- Reference: [Downloading and installing packages globally](https://docs.npmjs.com/downloading-and-installing-packages-globally)
- Reference: [nodemon](https://www.npmjs.com/package/nodemon)

### Key Takeaways
- `nodemon` is usually the first package developers install so they don't have to stop and restart their servers.

    ```
    $ npm install -g nodemon
    ```

    Usage:

    ```
    $ nodemon server.js
    ```
- Installing a dependency globally is not recommended for production dependencies (you're locked to one version of `express`, for example) but global dev dependencies are usually fine.
- Permissions issues sometimes happen with global packages depending on the system.

---

## 2. Route Handlers vs Middleware
### Terminology
Route Handler
: Events that fire only when a particular combination of HTTP Method AND Endpoint path are requested from a browser (i.e. `app.get()`, `app.post()`, etc).

Middleware
: A generic event that fires for _all_ HTTP Methods (i.e. `app.use(function)`). These often prepare the `request` and/or `response` for downstream middleware or routes but can also send the `response` directly.

### Materials
- [Using Express Middleware](https://expressjs.com/en/guide/using-middleware.html) in Express Docs

### Key Takeaways
- Server requests are [fulfilled on a first-come-first-served basis](https://stackoverflow.com/questions/32603818/order-of-router-precedence-in-express-js), so the order of your route handlers and middleware matter.
- If a route sends a `response`, the connection is closed and downstream routes are not invoked.
- Static file middleware is usually placed first in your app so that requests are fulfilled before dynamic responses are needlessly called (static files rarely need these resources). 
- `404` middleware is usually placed near the end of your app since successful calls would have already been fulfilled by then.

---

## 3. Testing a server with Postman
### Materials
- Gist: [Sample Postman Health Check Collection](https://gist.github.com/acidtone/bbcd40dc57774dfd0b01ddf3745e905b)
- Stretch readings/watchings:
    - Video: [The Basics of Using Postman for API Testing](https://youtu.be/t5n07Ybz7yI) by Steve Griffith
    - [Test script examples](https://learning.postman.com/docs/writing-scripts/script-references/test-examples/)
    - [10 Tips for Working with Postman Variables](https://blog.postman.com/10-tips-for-working-with-postman-variables/)

---

## 4. Deployment to Heroku
### Materials
- Gist: [Deploying an Express app to Heroku](https://gist.github.com/acidtone/0e02f60221468344482722fe9dcc7fba)

---

## Lab Time
### Activities
1. Install `nodemon` globally.
2. Deploy your static Express server from yesterday to Heroku.
3. Install the Postman Health Check Collection and edit it to test your deployed Heroku URL.

{% comment %}
{% endcomment %}