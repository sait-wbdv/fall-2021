---
layout: layouts/day.njk
title: CPNT 200 Day 2 - Headless CMS and the CMS Landscape
description: Today we will explore setting up a headless CMS with 11ty. We will also go into more detail on the options available for setting up CMS websites and things that you will need to consider for your future clients.
date: 2021-11-17
---

## Prep
- Read Through [What is a JAMStack](https://jamstack.org/what-is-jamstack/)
- Skim through [this article describing a JAMStack](https://www.freecodecamp.org/news/what-is-the-jamstack-and-how-do-i-host-my-website-on-it/)
- Read [SQL Syntax](https://www.w3schools.com/sql/sql_syntax.asp)
- Watch [GraphQL: A Documentary](https://www.youtube.com/watch?v=783ccP__No8)

## [Assignment 2: SQL and GraphQL Databases]({{ '/assignments/cpnt201/assignment-2/' | url}})
- **Due November 29th 11:59pm**
- Write 8 Database queries

---

## Topics
- LAMPStack vs JAMStack
- 
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

In this course, we will build a JAMStack that uses NuxtJS on the frontend and StrapiCMS on the backend.

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

### Our Stack Documentation
- [NuxtJS](https://nuxtjs.org/)
  - We are using nuxt because vue is easier to get started with than react
  - Nuxt is a powerful and popular framework that can create a SSR, SSG, and PWA
  - It also has great documentation
- [StrapiCMS](https://strapi.io)
  - Open Source
  - Large Community
  - Self Hosted (you aren't locked in with a specificy company)
  - Lots of active development
  - Lots of tutorials

#### Hosting
- [Heroku](https://heroku.com)
  - Used to host backend API and DB
- [Netlify](https://netlify.com)
  - Used to host the frontend
  - You can also use Github Pages for this, however Netlify is more robust and offers better features

#### Database
- Strapi uses SQLite by default. Which we will use. However you can use Mysql, postresql, and mongo (for the time being) instead
  - [Sqlite](https://www.sqlite.org/index.html)
    - Used to store content
  - [Graphql](https://graphql.org/)
    - Used for frontend-backend communication

#### Design
In CPNT201, we explored some modern design options with Tailwind and Bootstrap. Tailwind in particular offers the developer a lot of flexibility and control over style. However there are other prebaked solutions that you can use to get your site up and running.

Developers Choice:
- [TailwindCSS](https://tailwindcss.com)
- [Bootstrap](https://getbootstrap.com)
- [UIkit](https://getuikit.com)
- [Material Design](https://material.io/design)

---

## Databases
Strapi makes backend development really easy. You won't need to manually do much in the way of writing sql statements or setting up your database in a cli. However it's important to know what's going on in the background.

### SQL
- SQL is a relational database. It is more structured than NOSQL databases like Mongo. SQL is a stable database system that is great for organizing lots of data.

1. SQL Syntax
    - Read: [SQL Syntax](https://www.w3schools.com/sql/sql_syntax.asp) from w3schools (and the world ends...)
    - Reference: 
        - [SQL INSERT INTO Statement](https://www.w3schools.com/sql/sql_insert.asp)
        - [SQL SELECT Statement](https://www.w3schools.com/sql/sql_select.asp)
        - [SQL WHERE Clause](https://www.w3schools.com/sql/sql_where.asp)
        - [SQL ORDER BY Keyword](https://www.w3schools.com/sql/sql_orderby.asp)
        - [SQL UPDATE Statement](https://www.w3schools.com/sql/sql_update.asp)
        - [SQL DELETE Statement](https://www.w3schools.com/sql/sql_delete.asp)
        - [SQL INNER JOINS](https://www.w3schools.com/sql/sql_join_inner.asp)
2. Relational Databases
    - Read: [Summary - Relational Database Model](https://dev.to/lmolivera/everything-you-need-to-know-about-relational-databases-3ejl)


### Important rules for using SQL Databases
- Naming convensions for database tables and columns:
  - lowercase
  - spaces replaced with underscores
  - no numbers
  - valid, descriptive names no longer than 64 characters

### Activity: Experiment with the IMDb Dataset
- Install SQLite if you don't already have it
- [Download the imdb dataset from [this link](https://www.imdb.com/interfaces/)
- Try using the following queries:
  - Create a record with `INSERT`.
  - Retrieve a record with `SELECT`.
    - Filter results with `WHERE` conditions.
    - Sort results with an `ORDER` clause.
  - Update a record with `UPDATE`.
    - Target records with `WHERE` conditions.
  - Combine the results from two tables with `INNER JOIN`. 

---

## GraphQL
- A modern database query language
- Open Source
- Flexible

### Resources
- [Video and article on core concepts](https://www.howtographql.com/basics/2-core-concepts/)
  - Schema Definition Langauge: A syntax used to send queries and mutations to the API
  ```
  type Person {
    name: String;
    age: Int;
  }
  ```
    - In the above example, a person is defined with the datatypes string and integer for its variables
  - Fetching Data with Queries
    - Give the request a name and specify the information that you want returned
    ```
    {
      allPersons {
        name
      }
    }
    ```
      - This would return all the names as 'allPersons'
    - Each field can have 0 or more arguments
    ```
    {
      allPersons(limit: 2) {
        name
      }
    }
    ```
      - This would return a max of 2 entries


### Activity: Explore Graphql in this Practice API
- [Spacex graphql](https://api.spacex.land/graphql/)
  - Make requests to access data on spacex launches

---

## Lab Time
- Work on [Assignment 2]({{ '/assignments/cpnt200/assignment-2/' | url }})
