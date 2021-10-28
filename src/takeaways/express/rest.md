---
layout: layouts/page.njk
title: Introduction to REST
---
:::terms
### Terminology
Request Endpoint (URL path)
: The part of a URL, minus the domain. The "location" or path of a resource on the server. This is an actual location in the case of static files but is a virtual location when requesting JSON data.

HTTP Method
: An action that represents what the client would like the server to do with a resource. In this course, we will cover `GET` (Read), `POST` (Create), `PUT` (Update) and `DELETE` (Delete, duh).

Route
: The combination of both a Request Path and an HTTP Method tells the server how to route a request to the proper location in our code.
:::

RESTful APIs define how a client requests information from a server over HTTP. It is based largely on HTTP Methods and URL path of a request. Much of our code in Express will be organized using these two pieces of information.

## CRUD operations
CRUD represents the four ways we can use or affect information which map directly to HTTP Methods:
- Create a resource: `GET` Request
- Read a resource: `POST` Request
- Update a resource: `UPDATE` Request
- Delete a resource: `DELETE` Request

## Routes: a key concept
The Request URL and HTTP Method are very important to Express. They are used to route a request to the proper section of our application. In the case of REST APIs, we document our routes like so:

```
GET /users
GET /users/:id
POST /users
PUT /users/:id
DELETE /users/:id
```

In Express, routes are represented as event listeners similar to `click` or `submit` handlers in a browser: 

```js
// Send a resource back to the browser
app.get([url path], [function])

// Create a resource in the database
app.post([url path], [function])

// Update a resource in the database
app.put([url path], [function])

// Delete a resource from the database
app.delete([url path], [function])
```

Much of the code we write for the rest of the course will be organized in the functions attached to routes.

### Key Takeaways
- Think of `server.js` as a configuration file for our HTTP server. It runs once when the server starts and leaves behind event listeners for particular path/method combinations.
- Unlike our simple Node and browser examples, most of our code will be inside methods (functions attached to objects).
- Most Express methods will be asynchronous: our code will only run when a request with a particular path and method are received.
- For every request, Express will create `request` and `response` objects that are passed from method to method until the response is sent.