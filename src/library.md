---
layout: layouts/page.njk
permalink: /library/
---

{% comment %}
Paired coding session to fix this issue:
https://github.com/sait-wbdv/fall-2021/issues/3

## Session Goal

Break apart this page into columns.

- Still a single page

## Plan it out

1. Break each HTML/CSS/JS category into its own Flexbox
   - container -> section
   - item -> article
2. Move lists into each respective card.
3. Make it minimally pretty

## Parking Lot

- [Add Issue to markdown-it GH](https://github.com/markdown-it/markdown-it/issues)

{% endcomment %}

## Recommended Courses

- Free Code Camp
  - [Introduction to Basic HTML & HTML5](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/)
  - [Introduction to CSS](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/)
  - [Introduction to JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)
    - [ES6 Challenges](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/)
    - [Debugging Challenges](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/)
    - [Basic Data Structure Challenges](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/)
- Advanced
  - [Javascript: the Weird Parts](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts)
    - This is the first 3.5 hours of a 12 hour Udemy course by Tony Alicea. It's and oldie but a goodie.

---

## Program Textbook: Mozilla Developer Network

<section class="container">

  <a href="{{ '/library/html/' | url }}">
    <article>
      <h3>HTML</h3>
      <img src="{{ '/assets/images/html5.svg' | url }}" alt="HTML logo">
    </article>
  </a>
  <a href="{{ '/library/css/' | url }}">
    <article>
      <h3>CSS</h3>
      <img src="{{ '/assets/images/css3-alt.svg' | url }}" alt="CSS logo">
    </article>
  </a>

  <a href="{{ '/library/javascript/' | url }}">
    <article>
      <h3>Javascript</h3>
      <img src="{{ '/assets/images/js.svg' | url }}" alt="Javascript logo">
    </article>
  </a>

</section>
