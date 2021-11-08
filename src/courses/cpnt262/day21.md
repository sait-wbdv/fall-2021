---
layout: layouts/day.njk
title: CPNT 262 Day 21 - Mongoose with async/await and try/catch
description: 
date: 2021-11-08
released: true
---

## Housekeeping
- Assignment 3 marks published.

## Trophy of the day
- Assignment 3 refactored to use `async`/`await` and `try`/`catch`

---

## 1. Promises with `async`/`await`
### Materials
- MDN: [Making asynchronous programming easier with async and await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- Demo Starter Code: [Fetch Random Dog](https://github.com/sait-wbdv/in-class/tree/main/cpnt262/11-08-mongoose-async-await/01-starter-random-dog)

### Key Takeaways
- `async`/`await` is a newer and alternative syntax for Promises, which function the same way as with `.then()` and `.catch()`.
- Only 95% of browsers (as of Nov 2021) understand `async`/`await` but all updated Node servers understand it. You don't see `.then()` and `.catch()` very often on the server side.
- In order to use the `await` keyword, you need to wrap your code inside a function defined with the `async` keyword.

    ```js
    const hello = async function() { 
      // `await` can now be used inside this function
      return "Hello" 
    };
    ```

- `await` is used to "pause" your code when invoking a function that returns a promise, like `fetch()` or `model.find()` and `.then()`.

    ```js
    const myFetch = async function() {
      const response = await fetch('/api/characters/5');

      const data = await response.json();

      document.querySelector('.container').textContent = data.name;
    }

    myFetch();
    ```

- `.catch()` works the same way when you use `async`/`await` but you define it when you invoke the `async` function:

    ```js
    // Define an async function
    const myFetch = async function() {
      let response = await fetch('/api/characters/5');

      // An exception thrown by the developer
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let data = await response.json();

      document.querySelector('.container').textContent = data.name;
    }

    // Invoke an async function
    myFetch().catch(function(error) {
      console.log(error);
    });
    ```

    - Note: `fetch()` only throws an exception when there's a network error (i.e. domain not found), not when there's a `404 Not Found` error.

---

## 2. Exceptions and `try`/`catch` blocks
### Terminology
Exceptions
: An error that produces an error object that can be "handled" by the Javascript engine. Exceptions can be "thrown" when Javascript encounters a runtime error or if the developer explicitly throws an exception.

Throwing an Exception
: Producing an error object.

Exception Handling
: Doing something with an exception instead of moving to the next statement in the code. Also called "catching" errors.

### Materials
- [The Basics of Exception Handling in JavaScript](https://www.section.io/engineering-education/exception-handling-in-javascript/)
- MDN: [`try`/`catch` blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

### Key Takeaways
- Exceptions can only be thrown by runtime errors. Syntax errors cannot throw exceptions because the code can't run in the first place.
- A common way to handle exceptions is to wrap your code in a `try`/`catch` block.
- With asynchronous code, `try`/`catch` is often used with `async`/`await` instead of using a `.catch()` block.

    ```js
     // Define an async function
    const myFetch = async function() {
      try {
        let response = await fetch('/api/characters/5');
        
        let data = await response.json();

        document.querySelector('.container').textContent = data.name;
      } catch(error) {
        console.log(error);
      }
    }

    // Invoke an async function
    myFetch();   
    ```
- The developer can throw Exceptions explicitly with `throw new Error()`:

    ```js
     // Define an async function
    const myFetch = async function() {
      try {
        let response = await fetch('/api/characters/5');
        
        let data = await response.json();

        document.querySelector('.container').textContent = data.name;
      } catch(error) {
        console.log(error);
      }
    }

    // Invoke an async function
    myFetch();   
    ```

### Activity
Refactor Assignment 3 so that it uses `async`/`await` with a `try`/`catch` block instead of `.then()`/`.catch()`.

---

## 3. Mongoose GET requests with `async`/`await`
### Materials
- Prep
    - Mongoose with Promises: [CRUD Operations with Mongoose and MongoDB Atlas](https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas)
    - Reference: [Mongoose Queries](https://mongoosejs.com/docs/queries.html) in the mongoose documentation.
        - [`Model.find()`](https://mongoosejs.com/docs/api.html#model_Model.find)
        - [`Model.findOne()`](https://mongoosejs.com/docs/api.html#model_Model.findOne)
- Gist: [Read MongoDB data with Mongoose and Express](https://gist.github.com/acidtone/de24abff567b3b2bf90b1af35bc3a23a)
- Demo Starter Code:
    - [Basic Atlas Connection](https://github.com/sait-wbdv/in-class/tree/main/cpnt262/11-08-mongoose-async-await/02-starter-atlas-connection)
    - [Simple Guild Endpoints](https://github.com/sait-wbdv/in-class/tree/main/cpnt262/11-08-mongoose-async-await/03-starter-guild-endpoints)

### Key Takeaways
- Since all our Mongoose code will be inside a function passed to our method handler, we place the `async` keyword in front of it.
    
    ```js
    app.get('/api/cats', async (request, response) => {
      response.send('This is asynchronous!');
    })
    ```
- Once your Mongoose code is inside an `async` function, you use the `await` keyword whenever you invoke a Mongoose method (because all Mongoose functions use Promises when you don't pass it a callback function as an optional parameter).

    ```js
    const catSchema = new mongoose.Schema({name: String})
    const Cat = mongoose.model('Cat', catSchema);
    
    app.get('/api/cats', async (request, response) => {
      const data = await Cat.find();
      response.send(data);
    })
    ```
- Since `app.get()` invokes our callback function for us, it's difficult (impossible) to a `.catch()` method (for Promises) on the end of it. Instead, we use a `try`/`catch` block to handle any problems we might have with Atlas:

    ```js
    const catSchema = new mongoose.Schema({name: String})
    const Cat = mongoose.model('Cat', catSchema);
    
    app.get('/api/cats', async (request, response) => {
      try {
        const data = await Cat.find();
        response.send(data);
      } catch(error){
        console.log('Caught an error!', err)
        response.send({error: 'Uh oh, there was an error'})
      }
    })
    ```

---

## Lab Time
- Trophy of the day
- Assignment 5
- Final Project

---

## Prep
### Introduction to CRUD and Mongoose
- Using Callbacks: [NodeJs CRUD Operations Using Mongoose and MongoDB Atlas](https://www.geeksforgeeks.org/nodejs-crud-operations-using-mongoose-and-mongodb-atlas/)
- Using Promises: [CRUD Operations with Mongoose and MongoDB Atlas](https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas)
- Reference: [Mongoose Queries](https://mongoosejs.com/docs/queries.html) in the mongoose documentation.
    - [`Model.find()`](https://mongoosejs.com/docs/api.html#model_Model.find)
    - [`Model.findOne()`](https://mongoosejs.com/docs/api.html#model_Model.findOne)
### POST Requests in Express
- [Handle GET and POST Request in Express](https://codeforgeek.com/handle-get-post-request-express-4/)
- Gists: 
    - [Read MongoDB data with Mongoose and Express](https://gist.github.com/acidtone/de24abff567b3b2bf90b1af35bc3a23a)        
    - [Express: Handling POST Requests](https://gist.github.com/acidtone/008bde16ec883f5b8cda22417623d435)
    - [Create Mongoose document from form data in Express](https://gist.github.com/acidtone/c69a20727a1e11c58fcc9ff0503b1471)
### Stretch Gists: 
- [Update Mongoose document from form data in Express](https://gist.github.com/acidtone/c7da38b6783d05aa11cd02a1054cfc16)
- [Mongoose: Delete a document in Express](https://gist.github.com/acidtone/6435085cd7eb57f202ca5a7b1941e447)

{% comment %}

{% endcomment %}