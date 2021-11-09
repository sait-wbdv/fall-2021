---
layout: layouts/assignment.njk
title: DRAFT - CPNT 262 Final Project - Deployed Product/Services Website
---

[Team Assignments]({{ '/assignments/cpnt262/teams/' | url }})

In this assignment, your group will deploy a multi-page, database-driven Product website using Express and Mongoose. It will be deployed to Heroku and MongoDB Atlas.

## Instructions
This website will sell/advertise new products/services of your choice that you have not covered in prior assignments in this program.

Note: Since this is not an HTML/CSS assignment, visual components such as hero sections, footers, logos etc may be reused from prior assignments and projects. Only the theme/product/service of the website must be unique for the purposes of this assignment. Existing images may be considered placeholders but **must be served locally** (no lorem picsum).

Design elements will be ignored for this assignment with the exception of:
- Accessible and responsive navigation
- Accessible forms
- Accessible and semantic images
- Responsive galleries and card layouts

Aside from the required endpoints and features defined, you may layout and organize your site as you feel appropriate. 

BUT, please make sure your instructor doesn't have to hunt to find your code...

### Project Setup
While not explicitly listed as assignment criteria, marks will be deducted for projects that are not properly deployed.
- Initialize a new project using npm.
- Dependencies:
  - `express`
  - `dotenv`
  - `mongoose`
  - Fancy feature (see below) 
- Serve static assets from a `public` directory.
- Return a custom 404 page when a file (or endpoint) cannot be found.
- Mongoose connection authenticated using `.env` file.
    - Log connection errors to the console. 
    - Log "Connected to DB..." to the console on successful connection.
    - Respond with custom `500 Internal Server` error page if connection fails

---

## Example Directory Structure

```
project-root
  ├─ models
      ├─ seeds
          ├─ images.js
          ├─ subscribers.js (if used)
          └─ team-members.js
      ├─ Image.js
      ├─ Subscriber.js
      └─ Member.js
  ├─ public
  ├─ routes
      └─ api.js
  ├─ package.json
  └─ server.js
```

- No route handlers or Mongoose models/connection should be in `server.js`.

---

## Criteria
Points will be awarded for the criteria below, for a total of 35 points:

### 1. Static pages: 5 points
Create HTML route handlers to render and serve the following static pages:
- `/public/index.html`
- `/public/subscribe.html`
  - Contains subscribe form:
    - Fields
      - `name`
      - `email`
      - `action="[POST endpoint]"`
      - `method="post"`
  - Returns with a static success or fail page informing the user of the submit result. Include a link to the original form.
- `/public/gallery.html`
  - lists 9-12 products/services/items of your choice with a minimum of the fields listed in the Model in the next section.
  - Client-side `fetch()` calls to a JSON endpoint (listed below)
- `/public/item.html?id=:id` (`:id` could be some other unique identifier)
    - Displays a single product/service from the above list.
    - Calls `GET /api/gallery/:id` endpoint using `fetch()`.
- `/public/team.html`
  - Displays a list of each of your team members.
  - Calls `GET /api/team` endpoint using `fetch()`.
- `/public/admin/index.html`
  - Displays a list of your subscribers.
  - Calls `GET /api/subscribers` endpoint using `fetch()`.

---

### 2. Schema/model implementation: 10 points
- Define the following Mongoose Schemas in a dedicated `/models` directory:
  - `/models/Gallery.js`: The product/service you are selling/advertising. This may be renamed to match your chosen theme.
    - `id`
    - `name` or `title`
    - `description`
    - `imageSrc`
    - `width`
    - `height`
  - `/models/Member.js`: Your group members, to be listed on your Team page.
    - `name`
    - `profilePic`
    - `title`
    - `bio`
    - `github`
  - `/model/Subscriber.js`: Subscribers to your mailing list.
    - `name`
    - `email`
- Based on the above schema, `require()` your compiled models into your app.
- Remember, the above singular noun will determine the name of your MongoDB collection. It will be the plural of the noun (i.e. `galleries`, `members` and `subscribers`).

#### DB seeds
Your instructor may need to build a local version of your database to mark this assignment.
- include a `./model/seeds` directory containing the objects you've defined Models for. 

---

### 3. JSON Endpoints: 5 points
Create the following JSON endpoints to serve your frontend views:
  1. Products/Services gallery
      - `GET /api/gallery`
  2. Single Product/Service
      - `GET /api/gallery/:id` 
  3. Subscribers list
      - `GET /api/subscribers`
      - `POST /api/subscribers`
          - Inserts subscriber to database using `subscriber` model
  4. Team members
      - `GET /api/members`
  5. Frontend `fetch()` implementations: Create appropriate frontend `fetch()` requests for the following JSON endpoints defined above:
      - Requests `GET /api/gallery` for `/public/gallery.html`
      - Requests `GET /api/gallery/:id` for `/public/item.html`
      - Requests `GET /api/subscribers` for `/public/admin/index.html`
      - Requests `GET /api/members` for `/public/team.html`
  6. For each `fetch()` request, build a corresponding gallery/list using `.forEach()` or similar method. 

---

### 5. Fancy Feature: 5 points
Implement an app feature that we haven't covered in this course. Your instructor needs to approve this feature (before the end of CPNT 262) to ensure it has a large enough scope to qualify for its 5 points of mark value.

Some examples that would qualify:
- A login session that password protects your `GET /admin` route. Your teammates and your instructor should each have login credentials (`/register` functionality to add user account would not be needed). Note: this will involve adding a view engine to display password protected pages and (potentially) login status on all pages.
- You can install a 3rd party frontend framework to add additional functionality to your page. For example,
    - Greensock to animate SVGs
    - A chart library to display bar or pie charts

---

### 5. Individual Contribution: 15 points
Assign the key roles and responsibilities for each group member in delivering the Final Project. After each entry write a short summary defining their role and what their responsibilities are in the project. 

This charter will serve as the reference for your instructor's evaluation of your individual contribution to the group project.

#### Peer Evaluation
At the end of the Final Project, all team members must evaluate their teammates on a scale of 1-10. Each member's mark for this portion will be the average score given to them by their teammates.

#### Instructor Evaluation
Your instructor will also evaluate the individual contribution of each team member, within the context of the Group Charter. This will be based largely on your commit history for the project.

Things to remember:
- You must have Git properly configured to use your GitHub email address in order for your commits to be associated with your GH account. Without this, you will not receive credit for any work you have completed.
- If you have made contributions to the project that are not reflected in your commit history, please elaborate in your Project README or as a comment when you submit your group evaluation.
- Equal(ish) division of work is required unless there are mitigating circumstances.

---

## Submitting Your Assignment
In order to receive a grade, you must:
1. Deploy your Express app to Heroku and MongoDB Atlas.
2. Include a `README.md` in your project that contains the following information:
  - Course title and Team name;
  - Team members;
  - Details on what your **Fancy Feature** is an where to find it.
  - Any comments that may help squeeze marks out of your instructor (maybe give him hints on where to look for the requirements above);
  - Attributions for any code or assets that are not your own.
3. Zip your project (excluding `node_modules` and `.env` file) and submit them to Brightspace.
    - include a copy of the database seed (the array of objects) you used for this project so your instructor can recreate your database, if needed.
4. Include links to the following as a comment with your Brightspace submission:
    - GH Repo
    - Deployed Heroku App URL
    - **Connection string for `MONGODB_URL`**
