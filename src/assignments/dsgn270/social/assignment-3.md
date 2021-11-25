---
layout: layouts/assignment.njk
title: DRAFT - DSGN 270 Assignment 3 - Social Integration Proof-of-Concept
---
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

## Example platforms:
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