---
layout: layouts/assignment.njk
title: CPNT 262 Assignment 5 - Deployed REST API
---
In the assignment you will:
- Create static web pages for your API Documentation (`index.html`) and custom 404 page (`404.html`).
- Serve JSON endpoints using `app.get()` and a local module. For example:

    ```
    GET /api/animals
    GET /api/animals/:id
    ```

    - Note: You will be creating your own endpoints not based on `animals` (unless you want to)
- Besides the public documentation and 404 page, there will be no frontend component to this assignment.

---

## Criteria
2 points will be given for each of the following criteria, for a total of 10 points:

### 1. Server setup
- Project directory structure:

    ```
    project-root
    └─ data
       └─ gallery.js (or similar)    
    └─ public
       ├─ assets
         ├─ css
         ├─ images
         └─ js
       ├─ 404.html
       └─ index.html
    └─ routes
       └─ api.js
    ├─ package-lock.json
    ├─ package.json
    └─ server.js
    ```

    You may add more but they will not be marked.

- `server.js`
  - Load the following packages:
    - `express`
    - local module containing your Gallery data (see below);
    - local module containing your routes (see below);

- App deployed to Heroku.
    - Connect your Heroku App to the Github repo of your project.
    - `"start": "node server.js"` defined as a script in `package.json` 
    - Server `PORT`: If `process.env.PORT` isn't found, use port 3000.

### 2. Data and list endpoint
Using your gallery from Assignment 2 (modifications are welcome), create a JSON API endpoint that returns a list of gallery items (`animals` used an example; modify your endpoint to match your content):

```
GET /api/animals
```

- Migrate your frontend Javascript array to a local Node module (`./data/gallery.js`).
    - Basic object properties:
        - `id` - Unique identifier (`number`);
        - `title` - Image heading (`string`);
        - `description` - Image description (`string`: 10-25 words);
    - Additional properties:
        - An image with:
            - information for the `src` attribute, such as file name or complete path
            - locally hosted image in an `images` directory
            - Note: `width` and `height` are not needed for this assignment
        - A date in ISO-8601 format:
            - Time is not required but set timezone to UTC if you decide to use it;
            - `dateCreated` or `dateAccessed` is a good starting point but feel free to adapt a date that fits your API;
            - See: [The 5 laws of API dates and times](http://apiux.com/2013/03/20/5-laws-api-dates-and-times/)


- Route is loaded as a local module using `require('./routes/api.js')`
- Data is loaded as a local module using `require('./data/animals.js')`
- Error handling is implemented:
    - requests to non-existent endpoints to `GET /api` return a JSON response with `404` status code:
         ```js
         {
           "error": "404 Not Found"
         }
         ```

    - Example endpoints that should return `404` as JSON:
      - `GET /api/whatever`
      - `GET /api/this/endpoint/does/not/exist`

### 3. Item endpoint
Using route parameters, create a JSON API endpoint that returns one gallery item, based on a unique `id` or other parameter:

```
GET /animals/:id
```

- The JSON response should match the array exported from your local module imported above.
- You may choose a parameter other than `:id` that suits your API.
- Error handling is implemented:
    - malformed requests (i.e. string when a number is expected) are handled gracefully with JSON `404` response
    - requests to non-existent parameters return a JSON response with `404` status code
    - Example endpoints that should return `404` as JSON:
        - `GET /api/animals/0` (assuming that `id` does not exist)
        - `GET /api/animals/not/an/id`
        - `GET /api/animals/233740055837` (assuming that `id` does not exist)
        - `GET /api/not-a-number`

### 4. Public documentation and custom 404 page
- Custom 404 html page
    - When requesting a non-existent HTML file (i.e. one NOT at `GET /api` the user should be redirected to a `404.html` or `/404` url or similar.
    - File must include a `404` response code.
    - Page must be a valid HTML page.
    - Example `404` requests:
        - `GET /whatever/`
        - `GET /no-file.html`
- Serve static assets from a `public` directory using `express.static()` middleware.
    - include a static `index.html` page that documents your API endpoints. 

### 5. Documentation and Code Quality
- Include a `README.md` in your project that contains the following information:
  - Course title;
  - Author name;
  - Links to:
    - your GH repo;
    - your deployed Heroku domain;
  - Any comments that may help squeeze marks out of your instructor (maybe give him hints on where to look for the requirements above);
  - Attributions for any code or assets that are not your own.
- Use best practices with file/directory names, commenting and indentation.

---

## Submitting Your Assignment
In order to receive a grade, you must:
1. Deploy your Express app to Heroku.
2. Zip your project (excluding `node_modules` and `.env` file) and submit them to Brightspace.
3. Include links to the following as a comment with your Brightspace submission:
    - GH Repo named `cpnt262-a5`
    - Deployed Heroku App URL
