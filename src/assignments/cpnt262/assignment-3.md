---
layout: layouts/assignment.njk
title: CPNT 262 Assignment 3 - Fetching API Data
---
In this assignment you'll be fetching data asynchronously from a [public API](https://github.com/public-apis/public-apis) and displaying in on a web page.

You may use an API endpoint of your choice that has not been demonstrated in class. Have fun with it! 

Speak to your instructor if you'd like to try something that doesn't quite fit the requirements listed below.

---

## Criteria
This assignment will be marked out of 10 points. Each of the following requirements are worth 2 points each:

### 1. Using `fetch()` to retrieve data
Using the `fetch()` Web API retrieve an array or object from a public API using a `GET` request.

The retrieved data must include
- A name or title
- An image url
- A date
- An off-site link that's directly related to the data
- At least one other property that can be displayed on the page

Data must be logged to the browser console to receive full marks. 

### 2. HTML Output
Display the above information on an `index.html` page.
- Name or title should be displayed in an appropriate heading;
- Date should be formatted to be human-readable;
- Image should not be distorted and include a custom `alt` attribute derived from the retrieved data;
- All other data should be displayed appropriately according to the content.

### 3. Interactivity
An interactive element of your choice, and related to the data, must be included on your page. 

Examples:
- A button to refresh a random Disney character (without reloading the page);
- A button to show the next episode in a season;
- A button to change the sort order of a list.

The action should be directly related to either retrieving more data or changing the way the current data is displayed.

### 4. Error handling
All errors must be handled gracefully. For example, the page should display a human-readable error to the user if:
- The `fetch()` is rejected and is redirected to `.catch()` (for example, there is a network error);
- The request doesn't return a `200 OK` response such as `404 Not found`. 

### 5. Documentation
- Include a `README.md` in your project that contains the following information:
  - Course title;
  - Author name;
  - Links to:
    - your GH repo;
    - Gh Pages link;
  - Any comments that may help squeeze marks out of your instructor (maybe give him hints on where to look for the requirements above);
  - Attributions for any code or assets that are not your own.
- Use best practices with file/directory names, commenting and indentation.

---

## General Requirements
While this assignment is not testing your HTML or CSS skills, points will be deducted if conventions of accessibility and visual hierarchy aren't followed.
- There should be an obvious key message (i.e. Random Disney Character of the day) for the page;
- Text and images should be readable;
- Colours and layout should be aesthetically pleasing and should support the key message.

---

## Submission Requirements
- Push this assignment to a repo named `cpnt262-a3`.
- ZIP all files required for the site to operate and upload to Brightspace. 
- Leave a link to the following as a comment in your Brightspace submission:
  - GH repo
  - GH Pages site
