---
layout: layouts/day.njk
title: CPNT 201 Day 7 - SASS, Minification, and CSS frameworks
description: Modern web design often involves using css frameworks such as bootstrap and tailwind as well as SASS (an extension of CSS) to create maintainable and high quality site designs. We will look at these technologies and learn a bit about how you can use them in your projects.
date: 2021-10-25
released: true
---

## Morning Reflection

- Assignment 4 Check in
- Open Questions
- Make sure that everyone has node and npm installed

## Assignment 5: Build Tools

- [Assignment Link]({{ '/assignments/cpnt201/assignment-5' | url }})
- Assignment Due: November 1 @11:59pm

## Prep

- [tailwindcss documentation](https://tailwindcss.com/docs)
- [sass documentation](https://sass-lang.com/documentation)
- [bootstrap documentation](https://getbootstrap.com/)

---

## Overview

1. [Intro to CSS Frameworks](#css-frame)
2. [CSS Frameworks](#npm-css-setup)
3. [SASS](#sass)
4. [Minification](#minify)
5. [Lab Time](#lab)

---

## <a id="css-frame"></a> Intro to CSS Frameworks

- CSS Frameworks help make site styles more maintainable and quicker to deploy.
- There are lots of options and they cater to different developer needs/preferences
- 3 of the most common tools:

### [SASS/SCSS](https://sass-lang.com/)

- Definition
  : A superset of css. Compatible with css and extends css functionality. Sass is also used to build css frameworks. It gives you the ability to nest css declarations, create defaults easily, and add logic to your stylesheets.

- Example (nesting):
  ```
  header {
    display: flex;
    a.btn {
      background-color: blue;
      color: white;
      font-weight: 700;
      padding: 2px 4px;
      border-radius: 50px;
    }
    a.btn: hover {
      background-color: darkblue;
    }
  }
  ```
- Example (mixin):

  ```
  /* declare the mixin */
  @mixin reset-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  /* Then use the mixin like so: */
  nav ul {
    @include reset-list;
  }
  ```

- Note that you can use tailwind inside of sass
- Important syntax includes:
  - `@function`, `@mixin`, `@include`, and `$variable-name` (for custom variables)

---

### [Tailwind CSS](https://tailwindcss.com/)

- Definition
  : A utility-first framework. Create your own components and styles effeciently. Great for developers' who want to have a lot of personalization to their stylesheets. Not as opinionated at Bootstrap.

- Example: `<a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px4 rounded-full">button</a>`

  - you can then turn this into a component in a css file by using the `@apply` directive

    ```
    .btn {
      @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px4 rounded-full;
    }
    ```

  - Then your html markup would look like
    - `<a class="btn">button</a>`

---

### [Bootstrap CSS](https://getbootstrap.com/)

- Definition
  : A component focused css framework. Includes javascript plugins and a responsive grid system. Bootstrap was created by Twitter. It's an older, heavier, and more opinionatedframework and sites that use it tend to look the same. However it is very powerful and easy to use.

- Example:
  - `<a class="btn btn-primary">button</a>`

You can try these out in codepen by adding any of them to your css in the settings via the cdn.

- For your projects, you will need to install the framework of choice with npm.

---

### Tips to get Started

- All 3 of the tools mentioned have amazing documentation that is designed to be searched as you work.

  - Get used to using the search bar on the website to find the code you need
  - There are also great vscode extensions that will bring code snippits into your editor

- [An article to help u get going with tailwind](https://www.freecodecamp.org/news/get-started-with-tailwindcss/)
- [A default settings repo for bootstrap](https://github.com/twbs/bootstrap-npm-starter)

### Activity: Experiment with a css framework in codepen

- Fork or use one of your old codepens
- Add a framework or sass preprocessor
- follow the documentation and try implementing any of the following changes:
  - restyle a nav bar
  - style a button
  - style a card layou
- **NOTE** you can use sass with bootstrap or tailwind. However it is considered best practice to use minimal custom css when using a framework

---

## <a id="npm-css-setup"></a> Install a Framework

**For demonstration I will be using tailwind and sass/scss**

- You can install any of these with `npm` or `yarn`
- Install guides can be found in the documentation and on [npm's website](https://npmjs.com)
- For a project specific install (generally use this) you would:
  1. go to the root of your project directory in your command line
  2. run `npm install package-name`
  3. Do any other configurations required
  4. Start coding

### SASS Setup

- create a `main.scss` file and edit your styles in there
- To render the css file, you can use the vscode Live Sass Compiler plugin, and you can also add a build script to your `package.json`
- [Review this doc](https://sass-lang.com/guided)

#### How to compile in the commandline

Add this to the `"scripts": {}` part of your `package.json`

- `"scss": "node-sass --watch scss -o css"`
  - this will compile the output of your sass to the css directory.
    - **IMPORTANT** this command assumes that you have a folder called `scss/` inside of one called `css`. If you used different names, you have to change them in the command

### Tailwind Setup

#### How to compile a tailwind file

- `npx tailwindcss -o tailwind.css`
  - this will create a default tailwind.css file
  - Add it to your html document like you would any other stylesheet
- [Follow this doc page for quick startup](https://tailwindcss.com/docs/installation#using-tailwind-cli)
- [Review this doc page for advanced startup](https://tailwindcss.com/docs/installation)

#### Create a custom configuration

- this will generate a `tailwind.config.js` file
  - `npx tailwindcss init`
  - to create a full complete configuration run
    - `npx tailwindcss init --full`

### Activity: Set up tailwind css in a project

- Create a new repository
- Add tailwind css to it along with an html file
  - Use the install method that makes the most sense to you
- Add some sample content (keep it small)
- Stylize your sample content

---

## <a id="minify"></a> Minification

- This optimizes your code for production
- install a minifier through a vscode extension

- Minification
  : A build process that reduces css and js file size by removing comments and whitespace. Will also reduce js variable/function names in advanced cases.

- [Minification plugin](https://marketplace.visualstudio.com/items?itemName=olback.es6-css-minify)

---

## <a id="lab"></a> Lab Time

- Submit a link to your codepen or the repo created for your local tailwindcss activity to Brightspace for the daily activity
- Work on Assignment 4 or 5
- Rooms will be open for your choice

### Extra Trophy Activity: [Feature Branch](https://gist.github.com/lilyx13/695f214efa87cb48a45a51bd443f2129)

- Create a feature branch on your assignment 4 repository
- Use this branch to write your assignment 5 code
  - you can submit this branch or merge it into your main branch
    - (it will not interfere with assignment 4 as that is all based on specific commits)
