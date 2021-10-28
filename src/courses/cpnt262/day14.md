---
layout: layouts/day.njk
title: CPNT 262 Day 14 - Serving static files with Express
description: 
date: 2021-10-28
released: true
---

## Trophy of the day
- Build a static Express server for one of your GH Pages sites.

---

## 1. HTTP and the request/response cycle
### Materials
- Prep
    - [request/response cycle](https://medium.com/@jen_strong/the-request-response-cycle-of-the-web-1b7e206e9047)
    - [What is a web server? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
    - [Introduction to the server side - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)
    - [Client-Server Overview - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)
- Takeaways
    - [HTTP Basics]({{ '/takeaways/express/http/' | url }})
- Reference
    - [HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

---

## 2. HTTP servers with Node (yuck)
### Materials
- [Create a simple `http` server](https://gist.github.com/acidtone/4f96eefab57e9ab8d2ec4e21f6029be3)

### Key Takeaways
This will be the only time we use the `http` module directly because it's a pain to use. BUT, we will use it to illustrate the request/response cycle.

---

## 3. HTTP servers with Express (yum!)
### Materials
- Prep
    - Express Docs
    - [Installing Express](https://expressjs.com/en/starter/installing.html)
    - [Hello World! with Express](https://expressjs.com/en/starter/hello-world.html)
    - [Serving static files in Express](https://expressjs.com/en/starter/static-files.html)
    - Video: [How to build a REST API with Node js & Express](https://www.youtube.com/watch?v=pKd0Rpw7O48) by Programming with Mosh
- Takeaways:
    - [Introduction to REST]({{ '/takeaways/express/rest/' | url }})
- Gists:
    - [Express: Hello World!](https://gist.github.com/acidtone/8a188adf6e85a913f7f88c4f6cd53677)
    - [Express: Catch 404 Not Found errors](https://gist.github.com/acidtone/f5a08d0f15e70c4ddf1d40571b9e0645)
    - [Express: Serving static files](https://gist.github.com/acidtone/e2590b67f8fd701a36f7a04e62caa594)

---

## 4. Lab time
- Assignments
- Trophy of the day

{% comment %}
{% endcomment %}