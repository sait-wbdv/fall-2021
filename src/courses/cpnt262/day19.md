---
layout: layouts/day.njk
title: CPNT 262 Day 19 - Mongoose and MongoDB Atlas
description: 
date: 2021-11-04
released: true
---

## Housekeeping
- Tooltime: Install [MongoDB Compass](https://www.mongodb.com/try/download/compass)

## Trophy of the day
- You have connected to an Atlas database and imported data.
- You will not be able to submit this to Brightspace (otherwise you'd be sharing database credentials)

---

## 1. Spoiler Demo: Poisoned endpoint
Modify the List Entry endpoint of the [Guild sample code](https://github.com/sait-wbdv/in-class/tree/main/cpnt262/11-03-query-params-filter/02-starter-guild-routes) so that it can return a list of poisoned guild members.

---

## 2. MVC and NoSQL
### Materials
- [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC) definition on MDN
- [Model-view-controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) on Wikipedia
- Takeaways: [Getting started with NoSQL]({{'/takeaways/mongoose/nosql/' | url }})

---

## 3. `dotenv` and environment variables
### Materials
- [Using dotenv package to create environment variables](https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f)

### Key Takeaways
- IMPORTANT: Add `.env` to your `.gitignore`. This will prevent you from pushing private credentials to a public repo.
- Any app that uses Mongoose will have a `.env` file in the root directory that will store your database login information.

### Activity
Refactor one of your Express apps to use port 3001 using an environment variable.
1. Navigate to the project root on the command line.
2. Install [`dotenv`](https://www.npmjs.com/package/dotenv) as a dependency
3. Create a `.env` file in the project root and add `PORT=3001` (you can change this back to `3000` once you've confirmed `dotenv` is working).

---

## 4. Connecting to MongoDB Atlas
### Materials
- [Get Started with Atlas](https://docs.atlas.mongodb.com/getting-started/)

### Activity
- [Connecting to a MongoDB database in the cloud](https://gist.github.com/acidtone/534b025d6212a003a8a8ec3030a4d4ae)

---

## 5. Importing data into MongoDB Atlas
### Activity
1. Assumption: [Connected to a MongoDB database in the cloud](https://gist.github.com/acidtone/534b025d6212a003a8a8ec3030a4d4ae)
2. [Create a `json` file](https://gist.github.com/acidtone/9ba1c784d5f78fdc9dc4df9c6f26bcf8) containing the data you'd like to import (like the local module you're creating for Assignment 5).
    - **Warning**: MongoDB (and `mongoose`) assume you'll be importing an _array of objects_. Any other data types will lead to unexpected results.
3. [Install Compass](https://www.mongodb.com/products/compass)
4. Add your connection string.
    - MongoDB Atlas will create a starter for you, which you will modify with your db login and database name.
5. Create a Database (call it `wbdv-sait` or similar)
6. Create a Collection (plural noun like `gallery` or `images`)
7. Click "Import Data" and upload your `json` file.

---

## Lab Time
- Create an Atlas database and import your sample data.
- Final Project: choose a group member that will own the database you will use for your project. Follow today's steps and have all group members connect to this database.

---

{% comment %}

{% endcomment %}