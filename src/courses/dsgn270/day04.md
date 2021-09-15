---
layout: layouts/day.njk
title: DSGN 270 Day 4 - Responsive design
description: 
date: 2021-09-15
released: true
---

## Housekeeping
- Reminder for Tony: Hit record!
- Code Warrior leader board:
    - Icah (5), Fesal (5), Jessica (5), Lucas (5), David (4), Mysia (4), Chris (4), Evan (4), JP (4), James (4),  Devon (4), Hayden (3), Jean-Marc (3), Filora (3), Sharron (2), Jesse (2), Byung (2)
- Plug for Tony: [Friday Night Pints](https://www.meetup.com/pxandpints/events/280245328)

---

## Trophy of the Day: Mobile Wireframes
Upload a photo(s) of your sketches and wireframes from the activity today.

### [Today's Padlet Question](https://padlet.com/acidtone/fall_2021): How is mobile web browsing different than on desktop?

{% comment %}

- landscape vs portrait
- screen size -> hamburger menu
- no cursor -> no hover
- performance
- phone calls
- GPS/Wifi location -> maps
- camera (with depth perception on fancy phones)
- QR Code detection
- gestures
- accelerometer
- RFID
- Biometric authentication
- File storage
- Hardware accelerated augmented reality

{% endcomment %}

---

## [A brief history of layout](https://youtu.be/E005mjqpZ9Y) 
by [Layout Land](https://www.youtube.com/c/LayoutLand/)

### [Mobile Statistics]({{ '/takeaways/design/mobile-statistics/' | url }})
- About 60% of web traffic is on mobile
- About 88% of mobile screen time is spent using mobile apps, 12% is spent using mobile websites.
- Google's top page rank indicators
    - Mobile responsiveness
    - Mobile performance
    - Website accessibility

---

## [Responsive design fundamentals]({{ '/takeaways/design/mobile/' | url }})
There are many things to consider when designing for both mobile and desktop screens but here are the key constraints we will be focusing on in this program:
- Layout
    - Navigation and content would never "overflow" the screen, creating a horizontal scroll bar. At narrow screen widths, navigation is often [replaced with a Hamburger toggle](https://codepen.io/acidtone/pen/xxqmWXb).
    - Content will often be displayed using the [card pattern](https://rubygarage.org/blog/card-based-design-best-practices). On mobile, these cards will display in a single column. See: ["Gridish" flexbox in this Codepen](https://codepen.io/acidtone/pen/ZEpgMGL).
    - In general, content should not touch the edge of the screen on mobile. There should be a visible "scroll track" letting the user know where to scroll with their finger.
    - When/if content reaches its maximum page width on desktop screens, the content should be centered. This website is an example.
- [Web Typography]({{ '/takeaways/design/web-typography/' | url }})
    - Body text line length should not be longer than 95 characters or shorter than 25ch.
    - Font size should be smaller on mobile than on desktop. This is called fluid typography.
    - See: [Responsive Text: Max Line Length with Fluid Typography](https://codepen.io/browsertherapy/pen/RwaJmbx)

### Activity: Content Parity and Emulators
In groups of 3 or 4:

Compare and contrast the visual appearance of your favourite (or non-favourite) mobile websites between:
1. Desktop,
2. A real mobile device, and
3. The virtual mobile simulator in FireFox Dev Tools.

**Questions to ask**:
- Is there content parity between mobile and desktop versions of the website? What's missing? What's changed?
- What differences can you find between iOS and Android?
- How accurate is the phone simulator in FireFox and Chrome? 

Select a representative from each group to present a summary of your findings to the rest of the class.

---

## Wireflow Demo
- [User Flows vs. Wireframes: What’s the Difference?](https://careerfoundry.com/en/blog/ux-design/user-flows-vs-wireframes/)
- [How to Draw a Wireframe (Even if You Can’t Draw)](https://www.nngroup.com/articles/draw-wireframe-even-if-you-cant-draw/)
    - Related Video: [How to Sketch a UI for Non-Designers](https://www.youtube.com/watch?v=X2CbeBojKVM)

---

## Lab Time Activities
- Assignments
    - Assignment 1 is due tonight.
    - What software do you plan to use for wireframes? Share it with your classmates! 
- [Free Camp Exercises](https://www.freecodecamp.org/learn/responsive-web-design/)
    - These will be given as an assignment in CPNT 260

---

## Prep
### Background
- Read: [The web and web standards](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/The_web_and_web_standards) by the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn) (link to their Learning Area)
- Watch: [A brief history of layout](https://youtu.be/E005mjqpZ9Y) by [Layout Land](https://www.youtube.com/c/LayoutLand/)

### Mobile Stats
- Read: [Mobile vs. Desktop Usage in 2019](https://www.perficient.com/insights/research-hub/mobile-vs-desktop-usage-study)

### Mobile UX
- Watch: The first 7 minutes of [Beyond Media Queries](https://vimeo.com/235428198) by Michael Riethmuller (you can stop at Fluid Typography)
- Read: [Applying a Card-Based Design to User Interfaces: Best Practices](https://rubygarage.org/blog/card-based-design-best-practices)

### Wireframes
- [User Flows vs. Wireframes: What’s the Difference?](https://careerfoundry.com/en/blog/ux-design/user-flows-vs-wireframes/)
- [How to Draw a Wireframe (Even if You Can’t Draw)](https://www.nngroup.com/articles/draw-wireframe-even-if-you-cant-draw/)
    - Related Video: [How to Sketch a UI for Non-Designers](https://www.youtube.com/watch?v=X2CbeBojKVM)
    
{% comment %}

## Wireframes
- qr code -> mobile
    - at least 3 screens of one user flow
- one image of screens

{% endcomment %}