---
layout: layouts/day.njk
title: CPNT 262 Day 19 - Mongoose and MongoDB
description: 
date: 2021-11-04
released: true
---

## Prep
### MVC pattern and environment variables
- [Model-view-controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

### Mongoose and MongoDB
- [NoSQL vs SQL Databases](https://www.mongodb.com/nosql-explained/nosql-vs-sql)
- [Mongoose CRUD](https://coursework.vschool.io/mongoose-crud/) (Create, Read, Update, Delete)
- [Mongoose Getting Started](https://mongoosejs.com/docs/)

### MongoDB Atlas
- [Using dotenv package to create environment variables](https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f)
- [Get Started with Atlas](https://docs.atlas.mongodb.com/getting-started/)
- [How to host a RESTful Node.js server with MongoDB Atlas database on Heroku](https://dev.to/cpclark360/how-to-host-a-restful-node-js-server-with-mongodb-atlas-database-on-heroku-1opl)
    - Note:
        - CORS headers are often not needed with Atlas... but sometimes they are.
        - We will be connecting to Mongoose a little differently that what is shown in this article.

{% comment %}

## Relevant Gists
- [Express: Handling POST Requests](https://gist.github.com/acidtone/008bde16ec883f5b8cda22417623d435)
- Mongoose CRUD operations
    - [Create Mongoose document from form data in Express](https://gist.github.com/acidtone/c69a20727a1e11c58fcc9ff0503b1471)
    - [Read MongoDB data with Mongoose and Express](https://gist.github.com/acidtone/de24abff567b3b2bf90b1af35bc3a23a)
    - [Update Mongoose document from form data in Express](https://gist.github.com/acidtone/c7da38b6783d05aa11cd02a1054cfc16)
    - [Mongoose: Delete a document in Express](https://gist.github.com/acidtone/6435085cd7eb57f202ca5a7b1941e447)
{% endcomment %}