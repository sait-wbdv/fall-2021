---
layout: layouts/assignment.njk
title: CPNT 201 Assignment 3 - SVG Image
---
## Summary
A client has requested a custom graphic to be used as a logo/icon for a website that has multiple colour schemes.

## Requirements
To accomplish different colour schemes with the same graphic, you realize you will need to use and inline SVG.

For the purposes of this assignment, you may create a logo design of your choosing and implement it on a page of your choosing. Please pay attention to your documentation so your instructor can find the design in question.

### 1. SVG Design
Using Figma, or similar vector authoring tool, build an SVG that:
- Contains three separate closed paths. For example, these paths can be a combination of:
  - a manually "drawn" closed shape using the pen tool (avoid the use of the pencil tool);
  - an icon font (imported as an SVG) that has been altered using the Pathfinder or similar tool (see the [No Bugs](https://github.com/sait-wbdv/sample-code/blob/master/frontend/svg/no-bugs/images/no-bugs.svg) graphic built in class);
  - some other openly-licensed SVG design you find online.
- Can be of a design of your choosing. You will not be marked on the aesthetics of the design itself; only the technical requirements of the closed paths.

### 2. SVG Optimization
To ensure the best performance you will use [SVG OMG](https://jakearchibald.github.io/svgomg/) to optimize the exported design such that:
- Precision reduced to 1 (a precision of 2 is acceptable if a reduction in quality is apparent);
- Prettify Markup is turned on (for the benefit of your instructor);
- a `viewBox` is included in the file;
- `width` and `height` attributes are not included;
- no `style` element or inline `style` attributes are present within the `svg` element (presentational attributes are fine).

Note: SVG OMG may merge one or more of your paths. This is fine as long as your design has three visually distinct closed paths that can be targeted with CSS.

### 3. Inline SVG 
Insert the optimized SVG graphic into a test page such that:
- the design incorporates two colours that match a non-white background;
- use class selectors and an external CSS stylesheet to achieve the colour scheme;
- at least one property other than `fill` colour is used to enhance the design (such as `stroke`, `filter`, etc);
- the size is large enough to properly differentiate between the colours of the design (e.g. don't use the graphic as a tiny social media icon). In other words, make it loud and proud.
