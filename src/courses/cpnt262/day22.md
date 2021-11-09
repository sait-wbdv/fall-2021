---
layout: layouts/day.njk
title: CPNT 262 Day 22 - Handling POST Requests with Mongoose
description: 
date: 2021-11-09
released: true
---

## Housekeeping
- Tony needs fancy features for approval
- Tweaks to [Final Project]({{ '/assignments/cpnt262/final-project/' | url }})

## Trophy of the day
- Deployed express server with mongoose

---

## 1. POST requests with `request.body` and `express.urlencoded()`

### Materials
- [Express: Handling POST Requests](https://gist.github.com/acidtone/008bde16ec883f5b8cda22417623d435)
- Starter Code: [Guild with Mongoose](https://github.com/sait-wbdv/in-class/tree/main/cpnt262/11-09-post-requests/01-starter-guild)

## Key Takeaways
- The `request` object stores parameters in three main objects:
    1. `req.params`: Parameters passed as route segments. 
        - Example: `GET /api/animals/:id`.
    2. `req.query`: Parameters passed after the `?` in a URL.
        - Example: `/api/animals?page=3&per_page=10`.
    3. `req.body`: Parameters passed in the request body, such as when a form is submitted with `method="POST"`.
- `req.body` is only available if you add the following middleware to your server file:

    ```js
    app.use(express.urlencoded({ extended: true }));
    ```

- Alternatively, you can add the following if the form was submitted in JSON format (not covered in this course):

    ```js
    app.use(express.json());
    ```

    - Both can be added at the same time and both will process `POST` form parameters and add them to `req.body`
- The form submission is handled by `app.post()` at the same path as your list entry endpoint. The method is set by the `method` attribute in your form:

    ```js
    app.post('/api/kittens', () => {...})
    ```

---

## 2. Creating Mongoose records
### Materials
- [CRUD Operations with Mongoose and MongoDB Atlas](https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas)
- Gist: [Create Mongoose document from form data in Express](https://gist.github.com/acidtone/c69a20727a1e11c58fcc9ff0503b1471)

### Key Takeaways
- Saving a record with Mongoose requires two steps:
    1. Creating a model instance, passing an object containing the information submitted by the form.
        ```js
        const kitten = new Kitten(req.body)
        ```
    2. Saving the instance with `model.save()`:
        ```js
        await kitten.save()
        ```
- Since we didn't cover view engines in express, we will be redirecting to static success and fail pages depending on the result of the `.save()`

    ```js
    response.redirect('/success.html')
    ```
    
    OR
    ```js
    response.redirect('/fail.html')
    ```
    
---

## 3. Deploying to Heroku with Atlas
### Materials
- [How to host a RESTful Node.js server with MongoDB Atlas database on Heroku](https://dev.to/cpclark360/how-to-host-a-restful-node-js-server-with-mongodb-atlas-database-on-heroku-1opl)
    - Note:
        - CORS headers are often not needed with Atlas... but sometimes they are.
        - We will be connecting to Mongoose a little differently that what is shown in this article.

### Key Takeaways
- Most of the steps in this tutorial were completed yesterday so you should only have to complete the following to have your Heroku connect to Atlas:
    - Add your connection string to the Config Var section of your App Settings with a name of `MONGODB_URL` (Important: Heroku won't connect to Atlas properly unless you use this variable name).
- Note: CORS is _probably_ not needed for your app to operate.

---

## Lab Time
- Trophy of the day
- Assignment 5
- Final Project

---

## Prep
### POST Requests with Express and Mongoose
- [Handle GET and POST Request in Express](https://codeforgeek.com/handle-get-post-request-express-4/)
    - Note: We don't need to require `body-parser` as of Express 4.16
- Gists: 
    - [Read MongoDB data with Mongoose and Express](https://gist.github.com/acidtone/de24abff567b3b2bf90b1af35bc3a23a)        
    - [Express: Handling POST Requests](https://gist.github.com/acidtone/008bde16ec883f5b8cda22417623d435)
    - [Create Mongoose document from form data in Express](https://gist.github.com/acidtone/c69a20727a1e11c58fcc9ff0503b1471)

### Deploying with Atlas on Heroku  
- [How to host a RESTful Node.js server with MongoDB Atlas database on Heroku](https://dev.to/cpclark360/how-to-host-a-restful-node-js-server-with-mongodb-atlas-database-on-heroku-1opl)
        - Note:
            - CORS headers are often not needed with Atlas... but sometimes they are.
            - We will be connecting to Mongoose a little differently that what is shown in this article.

{% comment %}
{% endcomment %}