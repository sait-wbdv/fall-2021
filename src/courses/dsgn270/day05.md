---
layout: layouts/day.njk
title: DSGN 270 Day 5 - Connecting to Social Tools
description: We will look at adding social media to a website with a focus on using API's. This lesson will focus on security and connections.
date: 2021-11-25
released: true
---

## Housekeeping
- DRAFT: [Assignment 3]({{'/assignments/dsgn270/' | url }})

## Trophy of the Day
- An API worth hacking for your assignment
- An authenticated connection to the GitHub API

---

## 1. Small World theory of networks
### Materials
- Takeaways: [Small World Theory of Networks]({{ '/takeaways/social/small-world/' | url }})

### Key Takeaways
- As a network grows, the connections between the nodes of that network grow exponentially.
- People only have the capacity for about 200 social relationships.
- The more social connections you create, the less you will know those people, on average.
- People have stronger connections with others of similar interests, which are "connected" to other special interest groups by "people who know everybody".

---

## 2. The Dark side of social
### Materials
- [5 Crazy Ways Social Media Is Changing Your Brain Right Now](https://www.youtube.com/watch?v=HffWFd_6bJ0)
- [You Will Wish You Watched This Before You Started Using Social Media](https://www.youtube.com/watch?v=PmEDAzqswh8)

### Key Takeaways
- 5-10% of people can't control how much time they spend on social media.
- Heave social media users are worse at multi-tasking than casual users.
- Phantom Phone Vibration: when you think phone went off in your pocket when it didn't.
- 30-40% of face-to-face communication is talking about ourselves but 80% of online communication is self-involved.
- Studies show that partners tend to like each other more when they first meet online.

---

## 3. API Authentication: Tokens vs Keys
### Materials
- [Authentication vs. Authorization](https://auth0.com/docs/get-started/authentication-and-authorization)
- [What is the difference between API keys and API tokens?](https://security.stackexchange.com/questions/161946/what-is-the-difference-between-api-keys-and-api-tokens-usages)
- [Why and when to use API keys](https://cloud.google.com/endpoints/docs/openapi/when-why-api-key) from Google Cloud documentation

### Key Takeaways
- [Authentication vs. Authorization]({{ '/takeaways/security/authentication-vs-authorization/' | url }})
- Tokens and keys often look the same and are generated with similar algorithms but the difference is how they are _handled_.
- Tokens: 
    - identify the user, keys only identify a project or application.
    - cannot be used on the frontend and should never be shared publicly because they identify you (or your client) as a user.
- Access Tokens 
    - similarly identify you but also authorize you to use restricted resources.
- Keys 
    - are for authorization only and are not used to identify the user.
    - can be used on the frontend but are not considered secure, especially if they are passed in the URL as a query parameter (which can't be encrypted).

---

## 4. Demo: GitHub API on the server
### Materials
- [What is API Rate Limiting All About?](https://apisyouwonthate.com/blog/what-is-api-rate-limiting-all-about)
- Reference: [GitHub REST API Documentation](https://docs.github.com/en/rest)
    - [GitHub API rate limits](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting)
    - [GitHub Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
    - [Octokit JS Library](https://github.com/octokit/octokit.js)
- Starter code: [GitHub API](https://github.com/sait-wbdv/in-class/tree/main/cpnt262/11-25-social-apis/01-starter-oktokit)

### Key Takeaways
- Unauthenticated users can make up to 60 requests per hour. 
- Authenticated users (i.e. using a personal access token) can make 50,000 requests per hour.
- GH automatically removes personal access tokens that haven't been used in a year.
- GH highly recommends adding an expiration to your personal access tokens.
- Because GH uses tokens and not keys, authenticated connections to the API must be made on the server-side.

---

### 4. Treasure hunt: Developer friendly social APIs
Find the developer documentation of a social API (GitHub, Twitter, LinkedIn, Twitter, etc) of your choice. For example: search `twitter api documentation`, `instagram api nodejs`, `github public api`, etc.
- Is there a Getting Started or Getting Connected page for the API?
- What are the API rate limits?
- What's the current version of the API?
- Are there any Javascript libraries for using the API?
- Is there a public API available for frontend requests? Does it need to be authenticated?

Based on the tutorials/guides/documentation you find, what's the easiest method of sending a request to the API?

{% comment %}

{% endcomment %}