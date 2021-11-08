---
layout: layouts/day.njk
title: CPNT 262 Day 22 - Handling POST Requests with Mongoose
description: 
date: 2021-11-09
---

## Prep
### POST Requests with Express and Mongoose
- [Handle GET and POST Request in Express](https://codeforgeek.com/handle-get-post-request-express-4/)
    - Note: We don't need to require `body-parser` as of Express 4.6
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