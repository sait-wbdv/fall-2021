---
layout: layouts/page.njk
title: Mobile design
description: 
image: 
---

## Terminology
Responsive Web
: A Web development concept focusing on making sites look and behave optimally on all devices, from desktop to mobile, using the same served web files.

Adaptive Web
: An outdated method of serving specialized content files to a browser based on the device it's running on.

Content Parity
: A measure of content consistency between mobile and desktop versions of the same website.

Viewport
: The viewable area of a website within the browser window.

Media Queries
: A feature of CSS that enables webpage content to adapt to different [screen sizes](https://codepen.io/browsertherapy/pen/mdPaZdW), [orientations](https://codepen.io/acidtone/pen/QWLZxRx), aspect ratios and mediums (e.g. print vs screen). It does this with conditional code blocks (i.e. `if` statements for CSS).

Breakpoint
: Points in responsive design where website presentation obviously changes due to changing viewport characteristics (width, orientation, etc).

Hamburger Menu
: A button in websites and apps that typically opens up into a vertical menu or navigation drawer.

Card Pattern
: A convenient means of displaying content composed of different types of objects. They are also well-suited for presenting similar objects whose size or supported actions can vary considerably, like photos with captions of variable length

---

## Key Takeaways
There are many things to consider when designing for both mobile and desktop screens but here are the key constraints we will be focusing on in this program:
- Layout
    - Navigation and content would never "overflow" the screen, creating a horizontal scroll bar. At narrow screen widths, navigation is often [replaced with a Hamburger toggle](https://codepen.io/acidtone/pen/xxqmWXb).
    - Content will often be displayed using the [card pattern](https://rubygarage.org/blog/card-based-design-best-practices). On mobile, these cards will display in a single column. See: ["Gridish" flexbox in this Codepen](https://codepen.io/acidtone/pen/ZEpgMGL).
    - In general, content should not touch the edge of the screen on mobile. There should be a visible "scroll track" letting the user know where to scroll with their finger.
    - When/if content reaches its maximum page width on desktop screens, the content should be centered. This website is an example.
- [Web Typography]({{ '/takeaways/design/web-typography/' | url }})
    - Body text line length should not be longer than 95 characters or shorter than 25ch (unless it's a heading).
    - Font size should be smaller on mobile than on desktop. This is called fluid typography.
    - See: [Responsive Text: Max Line Length with Fluid Typography](https://codepen.io/browsertherapy/pen/RwaJmbx)

---

## Responsive layout is all about width
Horizontal scroll bars should be avoided in most circumstances. Since screen widths will vary from `400px` to at least `2000px`, this constraint leads to a number of common design patterns:

### Text Line length
Text is most readable at line lengths between 30 and 90 characters long. **This should be a priority** when planning out a design (also see [the typography triad]({{ '/takeaways/design/web-typography/' | url }})).
- Font-size should be smaller on mobile screens to ensure a line length of at least 30 characters.
- Text boxes should have a maximum width set, in order to prevent line lengths of more than 90 characters.
- Given their larger `font-size`, multi-line headings are often readable at lengths shorter than 25 characters.

### Layout
Responsive content often follows the [card pattern](https://www.google.com/search?q=ux+card+pattern) in order to simplify the layouts required for varying screen widths.
- An image will often scale to fit the width of its parent container (which could be a card or an entire column on a page).
- When a row of multiple cards or images are too wide for the screen, they will wrap and create more rows.
- In general, layouts and galleries will be a single column on mobile and multiple columns at larger screen widths.
- To accommodate very large screen widths, (`2000px` or larger) page of content will often reach a maximum width and distribute extra negative space equally on either side of the page.

### Navigation
It's imperative that page navigation is not compromised at any screen width. When a screen is too narrow for a horizontal navigation menu, it will usually either:
- become a vertical navigation menu, or
- be replaced by a hamburger menu that will toggle a vertical navigation menu.

## Further Reading
- [Mobile Navigation: Image Grids or Text Lists?](https://www.nngroup.com/articles/image-vs-list-mobile-navigation/)
- [Mobile Sub-navigation](https://www.nngroup.com/articles/mobile-subnavigation/)
- Video: [Hamburger Menus Hurt UX Metrics](https://www.nngroup.com/videos/hamburger-menus/)
    - Study: [Hamburger Menus and Hidden Navigation Hurt UX Metrics](https://www.nngroup.com/articles/hamburger-menus/)
- [Mobile First Is NOT Mobile Only](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
- [Reading Content on Mobile Devices](https://www.nngroup.com/articles/mobile-content/)
- [A Checklist for Registration and Login Forms on Mobile](https://www.nngroup.com/articles/checklist-registration-login/)
