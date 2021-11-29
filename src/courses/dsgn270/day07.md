---
layout: layouts/day.njk
title: DSGN 270 Day 7 - Serverless functions and the Instagram API
description: Let's secure API calls that pass token as a URL query string.
date: 2021-11-29
released: true
---

## Housekeeping
- Guest Speaker: Kaje - schedule for Thursday the 9th in the afternoon? Or Wednesday the 8th?
- Ash will be available this afternoon for questions on the [200 group assignment]({{ '/assignments/cpnt200/assignment-5/' | url }})
- [Assignment 3 Overview]({{ '/assignments/dsgn270/social/assignment-3/' | url }})
    - Due: Friday, December 3 @ 11:59pm
    - 50% of final course mark

---

## 1. Netlify Serverless Functions
### Materials
- Documentation: [Serverless functions overview](https://docs.netlify.com/functions/overview/)
    - [Javascript-specific overiew](https://docs.netlify.com/functions/build-with-javascript/)
    - [Netlify Dev - Running a local developer environment](https://docs.netlify.com/cli/get-started/#netlify-dev)
- Sample code: [hello-netlify-functions](https://github.com/acidtone/hello-netlify-functions)

### Instructions
1. In a new project, create a `hello.js` function in a `functions` directory with this sample code:
    ```js
    exports.handler = async function(event, context) {
        return {
            statusCode: 200,
            body: JSON.stringify({message: "Hello World"})
        };
    }
    ```
2. In the root directory, create a `netlify.toml` file with the following code:

    ```js
    [functions]
      directory = "functions"
    ```

    This tells Netlify which directory to use to load serverless functions.
3. Push this project to a new GH repo.
4. Create a new App in your Netlify team and deploy the repo you just created.
5. Test your hello world serverless function by navigating to:

    ```
    https://[site-name].netlify.app/.netlify/functions/hello
    ```

---

## 2. Connecting to the Instagram API
### Materials
### JAMstack security and connection types
- [Are your keys secure on the JAMstack?](https://dev.to/shortdiv/are-your-keys-secure-on-the-jamstack-pin)
- [APIs and Authentication on the JAMstack ](https://css-tricks.com/apis-and-authentication-on-the-jamstack/)
- Instagram Tutorial: [Using the Instagram API + Serverless Netlify to display your own Photos in 2021](https://harrisonkolor.medium.com/using-the-instagram-api-serverless-netlify-to-display-your-own-photos-in-2021-7923014522d0)

### Spoilers
- [Live site](https://laughing-allen-ca1d0d.netlify.app/)
- [GH repo](https://github.com/sait-wbdv/hello-instagram-netlify)

---

## Lab Time
- Assignments
- Final Presentation

{% comment %}
{% endcomment %}

---

## Prep

### Netlify serverless functions
- Documentation: [Serverless functions overview](https://docs.netlify.com/functions/overview/)
    - [Javascript-specific overview](https://docs.netlify.com/functions/build-with-javascript/)
    - [Netlify Dev - Running a local developer environment](https://docs.netlify.com/cli/get-started/#netlify-dev)
- Videos:
    - [Create your first Netlify Serverless Function!](https://www.youtube.com/watch?v=n_KASTN0gUE) by Ania Kubów, AND/OR
    - [Serverless Lambda Functions](https://www.youtube.com/watch?v=drJwMlD9Mjo) by Traversy Media (might be a little out of date)
    - Local Netlify environment: [Netlify Serverless Functions with Netlify Dev](https://www.youtube.com/watch?v=bVmUHvVK8Hs) by James Q Quick

### Instagram API
- Instagram Tutorial: [Using the Instagram API + Serverless Netlify to display your own Photos in 2021](https://harrisonkolor.medium.com/using-the-instagram-api-serverless-netlify-to-display-your-own-photos-in-2021-7923014522d0)
