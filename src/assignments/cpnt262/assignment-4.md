---
layout: layouts/assignment.njk
title: CPNT 262 Assignment 4 - Node command line app
---
In this assignment, you will create a simple Node app of your choice that will:
- accept at least two arguments from the command line;
- log three different responses to the console;
- incorporate a third party npm package.

The arguments, responses and npm package are up to you. Use your imagination! The goal is to fulfill the criteria below.

Note: you CANNOT use app examples shown in class:
- Tip Calculator
- Adding Machine
- Simple Calculator
- Greeting App

---

## Criteria
This assignment will be marked out of 10 points. Each of the following requirements are worth 2 points each:

## 1. Command Line Arguments
- App must accept at least two command line arguments using the `process.argv` array.
- Both arguments must be used to determine the Logged Response (see below). 
- App may also use the `yargs` package as your third-party `npm` package (see below).

## 2. Logged Response
- Responses must be logged to the console using `console.log()`.
- App must support at least three distinct responses that depend on the Command Line Arguments above.
- App must respond gracefully when:
    - No arguments are passed;
    - Not enough arguments are passed;
    - Arguments are not the expected value type (i.e. values are validated).

## 3. npm Project Setup
- A valid `package.json` file is present:
    - `name` is set to `cpnt262-a4`;
    - `main` is set to `app.js`;
    - `author` is set to your name;
    - `dependencies` includes the Third-party `npm` Package below.
- A project `.gitignore` file is included and excludes the `node_modules` directory.
- The `node_modules` directory is not present in your repo, nor the ZIP submitted to Brightspace.

## 4. Third-party npm Package
- At least one third-party `npm` package (of your choice) must be incorporated into your App.
- Package must:
    - be included as a dependency in `package.json`;
    - NOT be included in a `node_modules` directory;
    - contribute in some way to the Logged Responses, either directly or indirectly.

## 5. Instructions and Documentation
Instructions and documentation must be included in a `README.md` file to help your instructor mark your assignment:
- A short (one sentence) description of what your App does (it does not have to be useful);
- Include three example commands that can be copy and pasted (note: each of these three commands should return different responses);
- Describe (be short and concise) how you used your third-party app and reference a line number where an example can be found;
- Attributions for:
    - code that is not yours;
    - help you received from any classmates;
    - the Third-party `npm` Package you used.

---

## General Requirements
Points will be deducted for:
- Apps that does not operate after your instructor runs the command `npm install`;
- Violations of coding conventions (indentation, naming, etc);
- Extra time it takes for your instructor to run/debug your App (for example: file permissions errors if App writes to the database);
- Not following the Submission Requirements.

---

## Submission Requirements
- Push this assignment to a repo named `cpnt262-a4`.
- ZIP all files required for the site to operate and upload to Brightspace. 
- Leave a link to the following as a comment in your Brightspace submission:
  - GH repo
  - GH Pages site
