---
layout: layouts/day.njk
title: CPNT 262 Day 12 - Introduction to Node builtin modules
description: 
date: 2021-10-26
released: true
---

## Housekeeping
- [New assignment schedule]({{ '/assignments/cpnt262/' | url }})
- [Assignment 4]({{ '/assignments/cpnt262/assignment-4/' | url }})

## Trophies of the Day
- A command line app!

---

## 1. Node Global Objects

### Materials
- [Node global objects](https://www.tutorialspoint.com/nodejs/nodejs_global_objects.htm)
    - [Node Process Object Explained](https://www.freecodecamp.org/news/node-process-object-explained/)
- Reference: [`Array.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- Gist: [Default Node objects and properties](https://gist.github.com/acidtone/873e18b256e3feca52d36ead8b1d5318)

### Activities
- [Adding command line arguments with `process.argv`](https://gist.github.com/acidtone/99208821b9d7fbdc5b04ae2ddd4d04bc)
- [Tip Calculator from the command line with `process.argv`](https://gist.github.com/acidtone/176e0755a3919f85d7faaea348abb383)
- [Greeting App from the command line with `process.argv`](https://gist.github.com/acidtone/4afa69e5521e4232ecf406cae79a0ad0)

---

## 2. Builtin modules
- `path` module

### Terminology
Node Builtin Module
: Modules that are included with the Node runtime environment. These modules need to be imported into your script but do not need to be installed with `npm`.

### Materials
- [file paths](https://nodejs.dev/learn/nodejs-file-paths)
- ['path builtin module'](https://nodejs.dev/learn/the-nodejs-path-module)
- Gists: 
    - [Listing builtin modules](https://gist.github.com/acidtone/67f06e065255915f41f92abde65d2e2c)
    - [Manipulating file paths the with the `path` module](https://gist.github.com/acidtone/aa0302b5f6573d73cfd05fedb00fc708) 

### Key Takeaways
- Although builtin modules come pre-installed with Node, they still need to be imported into your script with `require()`.

### Activities
- Using the `path` builtin module and the `__filename` constant, create a node app that prints the file name (without directory) and extension of the current script.
- Using `path.isAbsolute`, determine if the first two arguments of `process.argv` are absolute paths or not.

---

## 3. `fs` module
### Materials
- [`fs builtin module`](https://nodejs.org/docs/latest/api/fs.html)
- Gist: [Reading files with fs](https://gist.github.com/acidtone/9fa3f74b8efc12273cfcdc224ac5f56b)

### Key Takeaways
1. Read files asynchronously whenever possible.
2. The "dot-slash" characters `./` at the beginning of a path mean it's location is relative to the current script.
3. `fs.readFile()` and `fs.readdir()` use "error-first callbacks" where the first argument passed to a callback is the error, if there was one. This is a common pattern in Node.

---

## 4. Lab Time
Looks like you need inspiration for Assignment 4!
- Can any of the following sample code be refactored to take arguments from the command line?

### Miscellaneous Node-friendly Gists
- Javascript basics
    - [Javascript: Names, values and variables](https://gist.github.com/acidtone/d85a9a0ba6bccfa73cfb269d65a25839)
- Strings
    - [Javascript: String Methods](https://gist.github.com/acidtone/4f1bd6ffff85fc8f4fed359b619fe76b)
- Arrays
    - [Javascript Arrays: Getting started](https://gist.github.com/acidtone/a55879499d884cc44167f5db15c82d70)
    - [Find a random item in an Array](https://gist.github.com/acidtone/2a3cac26a229aa95685e5cf6344f2e4e)
- [Javascript Objects: Getting started](https://gist.github.com/acidtone/8464c40543bb499925c59d8c481d626e)
- Functions
    - [Defining functions](https://gist.github.com/acidtone/e3ed5adfcb4f3c02f1b78f78c9c2bf8b)
    - [Example: Greet callback function](https://gist.github.com/acidtone/cf53fd8eac01a7a41fce234b8e66d3d6)
    - [Funception: How functions inherit variables](https://gist.github.com/acidtone/f3176c2da93f6813fd3c64f0bd8dfe4f)
- Loops 
    - [Example: Print 1-to-100 with a for Loop](https://gist.github.com/acidtone/e87aa5564ae1b286beca66b07d52550f)
    - [Basic loop with `Array.prototype.forEach()`](https://gist.github.com/acidtone/aca3574779b81c3ec6d19e3d075fb3ed)

## Prep
### Node basics
- Video [Node.js Tutorial for Beginners: Learn Node in 1 Hour](https://www.youtube.com/watch?v=TlB_eWDSMt4) by Programming with Mosh

### Reference
- [file paths](https://nodejs.dev/learn/nodejs-file-paths)
- ['path'](https://nodejs.dev/learn/the-nodejs-path-module)
- [`fs`](https://nodejs.org/docs/latest/api/fs.html)

{% comment %}

{% endcomment %}