---
layout: layouts/day.njk
title: CPNT 262 Day 13 - Introduction npm and dependencies
description: 
date: 2021-10-27
released: true
---
## Housekeeping
- Daily submission counts

## Trophy of the day
- Example app using an `npm` package

---

## 1. Spoiler Demos
- [Simple Calculator](https://gist.github.com/acidtone/99208821b9d7fbdc5b04ae2ddd4d04bc)

---

## 2. `npm` Package Manager
### Materials
- Takeaways: [Introduction to `npm`]({{ '/takeaways/npm/introduction/' | url }})
- Video: [NPM Crash Course](https://www.youtube.com/watch?v=jHDhaSSKmB0) by Traversy Media
- NodeJS: [An introduction to the npm package manager](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager)

### Activity: File size - before and after
1. Download or clone the `hello-npm` project to your workspace.
2. Navigate to the root of the project on the command line.
3. Use your operating system to determine the file size of this new project and how many files there are:
    - File size: 188 kB on disk
    - Number of items: 5 files
4. Install dependencies with `npm install`
5. Check the file size and number again:
    - File size: ???
    - Number of files: ???
6. Questions to ask:
    - What has changed? 
    - What is taking up the extra disk space?
    - Would we want to include `node_modules` in our repositories? Hint: the answer is no.

---

## 3. Ignoring `node_modules`
### Materials
- [Where does npm install the packages?](https://nodejs.dev/learn/where-does-npm-install-the-packages)

We want to exclude the `node_modules` directory (with a `.gitignore` file) for a few reasons:
1. Including the directory will bloat the file size of your repos, which we'll see later.
2. Even if the file size of `node-modules` is small, it will "pollute" your commit history with changes you didn't make because the directory is auto-generated and auto-updated.
3. There's no reason not to! `npm` can rebuild the `node_modules` directory at anytime with the `npm install` command. You only need to commit `package.json`.

### Key Takeaways
- Use your _global_ `.gitignore` for files that your operating system might add to your projects.
- Use your _project_ `.gitignore` for project-specific files that your team members all need to exclude.

---

## 4. Initializing `npm` projects and installing packages
### Materials
- Gists:
    - [Evaluating the status of an `npm` project](https://gist.github.com/acidtone/d57f41d7c18d0d198263c7bc3ab230e3)
    - [Initializing a new `npm` project](https://gist.github.com/acidtone/f2e901fb4b04bd41aa59755e2de9af4f)

### Activity: Starter packages
1. Install one or all of these packages:
    - JS Utilities: [lodash](https://www.npmjs.com/package/lodash)
    - Dates: [luxom](https://www.npmjs.com/package/luxon)
        - [Installation](https://moment.github.io/luxon/#/install)
    - URLs: [slugify](https://www.npmjs.com/package/slugify)
    - Command line arguments: [`yargs`](https://www.npmjs.com/package/yargs)
        - Video: [Passing Command Line Arguments Node.js](https://www.youtube.com/watch?v=5aT02ihNueU)
2. For any given package, create an example app by following the usage instructions.
3. Have one of your classmates clone and run your demo app _without_ including `node_modules`.

---

## Lab Time
- Assignment 4
- Example `npm` package demo
- Sharing your package demo

---

## Prep
### NPM Basics
- Video: [NPM Crash Course](https://www.youtube.com/watch?v=jHDhaSSKmB0) by Traversy Media 
- [An introduction to the npm package manager](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager)
- [Where does npm install the packages?](https://nodejs.dev/learn/where-does-npm-install-the-packages)
- [Semantic Versioning using npm](https://nodejs.dev/learn/semantic-versioning-using-npm)

### `package.json`
- [Anatomy of a `package.json` File](https://www.digitalocean.com/community/tutorials/nodejs-package-json) on Digital Ocean
- [The `package.json` guide](https://nodejs.dev/learn/the-package-json-guide)



{% comment %}


{% endcomment %}