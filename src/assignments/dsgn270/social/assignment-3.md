---
layout: layouts/assignment.njk
title: DRAFT - DSGN 270 Assignment 3 - Social Integration Proof-of-Concept
---
Outcome: Integrate social media content into a website.

In this assignment, you will build a small proof-of-concept social media integration that you can promote to a potential market of clients.

## Potential APIs
- Youtube, Twitch, Vimeo, TikTok
- Twitter
- Facebook, Instagram, WhatsApp
- LinkedIn
- Shopify, Etsy
- Reddit, 4Chan
- GitHub, Codepen
- Pintrest
- Snapchat
- Vibr

## Instructions
1. Define a market of potential businesses to sell your product/service to. For example:
    - Bars and restaurants
    - Retail stores
    - Teachers/instructors
    - Other developers (or a product/service you can use yourself)
2. Define a need for that market that can be solved by displaying their social media content on their own website. For example:
    - Local pub posts their daily specials on Instragram but they don't have time to update their website daily.
    - A carpenter would like to display daily Twitter progress photos of their latest project on their portfolio website.
    - A martial arts instructor would like to display their Youtube video series (on how to properly kick a hole through a wall) on the fight club website.
3. Select a social media platform with a developer API that you can use to request the required content.
    - Create a test account on that platform in the name of a fake client.
    - Post relevant content to that account that you can request with the developer API.
4. Using a secure platform of your choice, display this content on a webpage so that it solves your defined problem. 
5. Create user documentation describing to the client how to update their content on the Social Media platform so that it updates on their website.
6. Create developer documentation outlining the steps taken to set up the API connection in case it needs to be repeated.

---

## Marking Rubric - 50 points
Each of the following criteria will be worth 10 points.

### 1. Market and Problem definition - 10 points
- 5 points: Define a User Story for your target client. It should follow the [format covered in the first half of this course]({{ '/courses/dsgn270/day03/' | url }}):
    - As a bar owner, I'd like my `#daily-special` Instagram updates to show up on my website because some of my regulars don't use social media.
- 5 points: 100-150 word summary of the market and problem that your social media integration solves
    - What's the target market for this integration? Who would pay to have this installed on their website?
    - What problem/pain does the integration solve?
    - How does the choice of social tool contribute to the solution?

## 2. Test account with sample content - 10 points
Choose a social media tool that solves your market problem and User Story.
- Create a new account; do not use your actual account. You may use one of the following for an email address:
    - SAIT email account;
    - Email attached to a free `.me` domain (available with the [GitHub Developer Pack](https://education.github.com/pack));
    - Your primary email with [plus addressing](https://will.koffel.org/post/2014/using-email-plus-addressing/).
- Account contains at least three non-lorem posts that support the defined market and problem.
    - Content does not have to be original and can be based on open source content.
    - Content must support the User Story (i.e. a "daily special" post should be an image of food, not a sunset).
    - Talk to your instructor if three posts is not appropriate for the social tool you have chosen. For example, you're not expected to edit three separate videos for a YouTube integration.

## 3. Operational integration with Task Flow - 10 points
Create a public web page that displays social content in a way that supports your User Story. 

To be included in the project README. Define instructions as a Task Flow for the potential client to test the integration. For example:
1. Go to web page and take note of the current content.
    - content can be displayed using an embed strategy offered by the social tool.
2. Log into social tool (include creds in brightspace comment).
3. Make a change or add a new post in social tool admin.
4. Refresh output page to confirm content has changed.

Further notes:
- Points given for unique use of the tool that goes beyond simply displaying content. For example:
    - Content only displayed when a particular hashtag is present in description.
    - Displaying content that is added to a particular collection.
    - Displaying a list with pagination.
- Task can be to create a new post (i.e. new "daily special" OR edit the existing content in some significant way that supports the User Story (i.e. label an existing post as "featured" to change the output of the integration).
- One of the three non-lorem posts may be used as sample content for the client to use to create a new post.
- Include relevant supporting links from the user documentation of the social tool you've chosen (i.e. "How to create an Instagram Post" from the IG website).
- Your instructor will follow these instructions to mark this assignment so be clear and concise.

## 4. Custom Branding using an API endpoint - 10 points
- 5 points: Output content from a Developer API to show that content can be displayed with a custom design and brand colours.
- 5 points: In the project README, include relevant links from the Developer API Documentation:
    - General Usage
    - Rate limits
    - Authentication methods
    - Creating a token
    - Endpoint Reference

## 5. Secure API token/key - 10 points
- Points given for not displaying API key or token in public source code.
- You may use a method of your choice to do this, such as:
    - A proxy endpoint created in Node or a serverless function.
    - Calling the API during the build process of a framework such as Eleventy or Nuxt.
- In your README, include details of how you secured your API, along with links to relevant documentation.

---

## General Requirements
- README should use elements of visual hierarchy to make content readable. For example:
    - Use proper headings to label the sections of the Rubric (Market/Problem definition, usage instructions, API documentation, etc)
    - Use code blocks when appropriate
    - Step-by-step instructions should use numbered lists.
- Code should follow proper conventions (indentation, naming, etc);
- README and integration should reflect a real-world solution to a market problem that a client would find valuable.

---

## Submitting Your Assignment
In order to receive a grade, you must:
1. Deploy your integration using a hosting method of your choice (i.e. GH Pages, Heroku, Netlify, etc).
2. In addition to the requirements of the assignment, include the following in your project `README.md`:
  - Course title and Team name;
  - Any comments that may help squeeze marks out of your instructor (maybe give him hints on where to look for the requirements above);
  - Attributions for any code or assets that are not your own.
3. Zip your project (excluding `node_modules` and `.env` file) and submit them to Brightspace.
4. Include the following as a comment with your Brightspace submission:
    - Relevant GH repo(s);
    - Live integration link;
    - Link to the social media test account;
    - Login information for the social media test account.

---

## Appendix Example platforms:
### 1. JAMstack with proxy
- No backend server
- API calls come from a static website
- Use a serverless function (i.e. on Netlify) to secure the API Key

### 2. Nuxt build
- API is called at build time (secure)
- Content is displayed statically after it's generated at build time

### 3. Node as proxy
1. Custom API is called from your page to your Node endpoint.
2. Node requests data from the API on the backend (secure).
3. Node sends the response data back to the client.
