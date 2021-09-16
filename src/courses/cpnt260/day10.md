---
layout: layouts/day.njk
title: CPNT 260 Day 10 - Working on Legacy Code and Using Design Systems
description: Today we will apply ideas from design systems such as Material.io to our html and css. This class will be a summarization of the code we have learned over the past 9 days. We will have fun revamping old and outdated web designs found on the waybackmachine.
date: 2021-09-29
---
## Trophy of the Day: Revamp an old webpage
- Use the [Wayback Machine](https://web.archive.org/) to find an old and dated website, modernize it's site content

## Review
- Trophies from yesterday
- Topic suggestions from yesterday

---
## Overview
1. Plan it Out
  - How to use a design system
2. Brute force
  - Apply a design system
  - Revamping an old website
3. Walkthrough
4. Optimize

---
## Topic 1: Design Systems
_Creating consistent and beautiful web pages_

### Notes
- Companies such as google and apple create comprehensive design guides for their apps and websites.
- CSS Frameworks such as bootstrap, material.io, and tailwind (we will cover these in CPNT201 in greater detail) make design systems very easy to apply
- Prior to learning how to use these systems, their documentation provide great patterns to emulate with vanilla css

### Code Analysis
- Example for analysis [Card Layout](https://material.io/components/cards)
---
## Topic 2: Revamping Legacy Code 
_An often painstaking and frustrating but necessary task_

### Notes
- Having done some deeper analysis on what modern design systems look like, and after having learned so much about modern css, let's look at what the web **used** to look like (and sadly may sometimes be a little more like then we would want it to be)

#### Audit Tips
1. Know what you're working with
  - Use lighthouse to check performance and seo scores
  - Review design and content
2. Mood board and Competitor analysis
  - See what you're redesign is up against
3. Step through the code
  - Understand what's what before you start hacking

## Activity 1: [Find and audit an old site to revamp]({{ '/activities/html-css/wayback-site-review.md' | url }})

---
## Topic 3: Revamping an old website

### Tips
- Avoid the urge to deleting code at will, especially if you're not super sure on what it's doing.
  - Take the time to test
  - When you get into using libraries etc, make sure to look into compatability and dependencies
  - git branches are your friend, if you're going to experiment and are not sure of how this will work, a git branch can be really helpful
- Consider what types of updates you are making
  - overall look and feel (identity)
  - content and purpose of site
  - intended users
  - relevant user stories
    - some of these will be really easy. A search engine can only have so much variation to it
    - However some sites will be using outdated technologies. Even some will not be that old but because of the times, require a big revamp (think of how aweful some of the virtual menu's have been at restraunts during covid)
- When approaching themes (like HTML5UP), be particularly careful as they are often designed in a way to make it really hard to change


---
## Activity: [Revamp an old site]({{ '/activities/html-css/wayback-site-revamp.md' | url}})
- Have fun with this
- Try to use as much original text and assets as possible
- Try following either Apple's HIG or Google's material design for ideas
  - Or do your own thing :)
- You can use either the modern branding of your site (colors, typography etc) or create your own concept

---
### Walkthrough
- Code review
- Discussion

---
### Optimize
- Final Discussion
- Implement code edits
- Validate Code
- Deploy and Submit

