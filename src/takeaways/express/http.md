---
layout: layouts/page.njk
title: HTTP Basics
---
:::terms
### Terminology
HTTP Header
: A list of name and value pairs that contain information that a client and server send back and forth to each other. 

Request Header
: The information a client (a browser) sends to a server to request a file. These files can be static such as `index.html`, `main.css` and `logo.jpg`. They can also be dynamically generated JSON files such as `customers.json`. 

Response Header
: The information that the server sends back to the browser. This will include the requested file (usually) and a Response Code telling the client if the request was successful or not.

Resource
: The file or information that the browser is requesting.

Request Endpoint (URL)
: The "location" or path of a resource on the server. This is an actual location in the case of static files but is a virtual location when requesting JSON data.

HTTP Verb
: An action that represents what the client would like the server to do with a resource. In this course, we will cover `GET` (Read), `POST` (Create), `PUT` (Update) and `DELETE` (Delete, duh).
:::

## Request/Response Cycle
The Request/Response Cycle is the basis for all communication between a browser and a server.
1. The browser sends a Request to the server for a file (such as `index.html` or an action (such as submit a form).
2. The Request is magically routed to the server using many Internet protocols, such as DNS (domain names -> IP addresses) and HTTP.
3. The server receives the request and decides what to do based on the:
    - Endpoint URL - The "location" of a resource (a file or information) on the server.
    - HTTP Verb - The action that is requested, based on CRUD operations:
        - Create a resource: `GET` Request
        - Read a resource: `POST` Request
        - Update a resource: `UPDATE` Request
        - Delete a resource: `DELETE` Request
4. The server performs the requested action based on how we've coded our application.
5. The server sends a Response back to the client including a:
    - File - either static (`index.html`) or dynamically generated JSON (`customers.json`).
    - Response code - usually either:
        - `200 OK` - Success!
        - `404 Not Found` - We've all seen these.
        - `500 Internal Server Error` - Usually caused by a problem with our code.

