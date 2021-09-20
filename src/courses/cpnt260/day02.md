---
layout: layouts/day.njk
title: CPNT 260 Day 2 - Navigation and Responsive Page Design
description: Today we will start working in the text editor Vscode. Topics include creating code optimization, site navigation, and color.
date: 2021-09-20
released: true

---

## Trophy of the day: 404 page with a site navigation

## Review

- Trophies from last class
- Code debief

## Assignment 1 - About Page and Simple Nav

- **Due: September 22 11:59pm**
- [Assignment Link]({{ '/assignments/cpnt260/assignment-1/' | url }})
- Complete:
  - Create an About page that has text, images, and styling
  - Create a site navigation. Note this will be improved on throughout the following assignments.

---

## Overview

1. Plan it out
     - [Codepen to Vscode](#vscode)
     - [Code Indentation and CSS Selector Nesting](#topic-1)
     - [Importing and Using Fonts](#topic-2)
     - [Activity 1](#activity-1)
2. Brute force
     - [Site Navigation](#topic-3)
     - [Activity 2](#activity-2)
3. Walkthrough
     - [Colour in CSS](#color)
     - Code review
4. Optimize/Test
- [Next Day Prep](#prep)
---

## <a id="vscode"></a> Tool Time
- Switching from codepen to vscode
- Using `head` tag in html
- Emmet plugin and autocompletion
---

## <a id="topic-1"></a> Topic 1: Code Indentation and CSS Selector Nesting

### Code Indentation
- Indentation is very important, in some languages it's necessary for code to run
- Any HTML elements that are _within_ a container element must be nested inside using indents
  - You can use hotkeys to auto indent your code. This saves a lot of time

### CSS Selector nesting
- In bruteforce mode, it's normaly to add classes directly to elements
- After everything works like you want, your optimization process should include removing redundent code
- A good practice is to add a class to a parent element and then use nested selectors on it's children
    - `nav.parent-class a {/* link styles */}`

---

## <a id="topic-2"></a> Responsive Fonts

### Terminology
These css properties and values are especially useful for setting responsive fonts.
- `clamp()`
  : Use clamp to set minimum and maximum font size and the range that they increase and decrease by. ie: `font-size: clamp(1.2rem, 2.5vw, 1.4rem)`
- `text-align`
  : align text left, center, right, or justified. [Mdn article](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align).
- `max-width` and `min-width`
  : Both of these will override the `width` property. And `min-width` will override `max-width`.
- `rem`
  : rem units are equal to the font-size declared on a root element. 1 `rem` unit is equal to `16px`. A px is 10times bigger than a rem.

#### Font size readings
- If you are wanting to get more detailed with font-size, read this [CSS-tricks article](https://css-tricks.com/rems-ems/) which shows how to use px, em, and rem together effectively
- Read [This css tricks article](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/) on using clamp based off viewport units

#### Font optimization Notes and Readings
- `@import` in css is slower than using `link` in html
- use `preconnect` to improve font loading times
- Link example: `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`
- [Optimize web fonts](https://www.freecodecamp.org/news/web-fonts-in-2018-f191a48367e8/)
- [comparing preload, preconnect, and prefetch](https://george.mand.is/2019/11/whats-the-difference-between-link-preload-preconnect-and-prefetch/).

## <a id="activity-1"></a> Activity 1: [Create a 404 Page]({{ '/activities/html-css/404-page/' | url }})
---

## <a id="topic-3"></a>Topic 3: Site Navigation

- Navigation should use a `nav` tag.
- You can have more than one nav
- It is conventional to put an unordered list inside your nav for links, but not essential
- To link to content on the same page, add an `id` tag to the link location and specify it in your link
  - nav link = `<a href="#link-on-page">Link</a>`, then add the id to the element like: `<h2 id="link-on-page">Text</h2>`
- To open the link in a new tab use `target="_blank"` in your link tag
- A `nav` is often found inside a `header` or above a `header`. It depends on the site

### Extra Reading

- To add a list to a nav or not is discussed in this [css-tricks article](https://css-tricks.com/navigation-in-lists-to-be-or-not-to-be/).
- A footer navigation does not necessarily need a nav element: [mdn article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav).

 
---

## Walkthrough
- Check for syntax errors
- Fix HTML indentation
- Plan CSS declarations cleanup

### <a id="color"></a>Better Colour Codes
- using color tags such as `red` and `rebeccapurple` are good for quick planning
- In production you will want to use hex codes or hsl()/hsla() for better color control
- Hex code colors follow RGB values but notate them in hexadecimal numbers
  - For Example: the lighter red in the SAIT logo is `#e12726` which means: red=e1 green=27 and blue=26
- HSL() stands for Hue, Saturation, Lightness, add an A `hsla() to include opacity
  - This is a newer approach and gives better control of colors, plus browsers read them better for accessiblity
---
## Optimize
 
- Implement walkthrough changes
- Validate Code
- Deploy and Submit

### <a id="activity-2"></a>Activity 2: [A Web Page with a Nav Menu]({{ '/activities/html-css/nav-menu/' | url }})
- You can use your 404 page as body content for this
---

## <a id="prep"></a> Prep for next class

- Read through this [Mdn Article on Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- Play [Flexbox Froggy](https://flexboxfroggy.com/)
- Watch [Flexbox Patterns You Can Use](https://www.youtube.com/watch?v=vQAvjof1oe4)

---

## Extra Goodies: Terminal Tool Time
Check out these links if you're interested in expanding your knowledge and usage of terminal applications. The following configurations have helped me streamline my own workflow extensively.

- Vim/neovim
  - Settings section on line 71 in [this init.vim file](https://github.com/lilyx13/dotfiles/blob/main/init.vim)
    - Many of these make vim much nicer to use
  - [Vim Plug](https://github.com/junegunn/vim-plug) is a plugin manager for vim and neovim that allows your to extend your vim functionality
- zsh
  - [zsh plugins](https://travis.media/top-10-oh-my-zsh-plugins-for-productive-developers/)
- tmux
  - [install on mac](https://macappstore.org/tmux/)
  - [install on windows](https://gist.github.com/DeanPDX/acff533cff0cfbda2761d1e62e8cb1a7)
- [taskwarrior](https://taskwarrior.org/)
- [Ash's Dotfiles](https://github.com/lilyx13/dotfiles)
  - neovim, tmux, and zsh configurations


