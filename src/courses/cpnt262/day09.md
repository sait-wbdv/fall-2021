---
layout: layouts/day.njk
title: CPNT 262 Day 9 - Looping with objects
description: 
date: 2021-10-19
released: true
---

## Housekeeping
- Tooltime: [Install Postman](https://www.postman.com/downloads/)
- Alternatives to Lorem Picsum

## Trophies of the Day
- [Upgraded Lorem Picsum gallery](https://gist.github.com/acidtone/a5f40cda47c6d5c1a8e3815833572024)
- Fizzbuzz: See Section 4 below
- Mocking Sponge Bob function: See Section 4 below

---

## 1. Spoiler Demos
- [Creating a comma-separated list of nouns](https://gist.github.com/acidtone/5c8b6c954dadb7f9e60cbb98cddc0230)
- [Creating a gallery of Lorem Picsum images](https://gist.github.com/acidtone/0c3caca6908b650c17b605f4242ff004)

---

## 2. Local images
While [Lorem Picsum](https://picsum.photos/) is a wonderful service for inserting placeholder images, it's not a practical solution for a production website.

In this session, you will refactor yesterday's Lorem Picsum gallery to use local images instead of placeholder links.

### Materials
- [Spoilers: Create a Lorem Picsum Gallery](https://gist.github.com/acidtone/fbfa8e15f7098f231e8cc52d0518ee2b)
- [Animal Lorem Picsum Images](https://github.com/acidtone/animals-ids)

### Activity: Refactor for local images
- Replace the placeholder links in the Lorem Picsum Gallery with local image links. For example,

    Instead of this:

    ```html
    <img src="https://picsum.photos/id/237/300/300" alt="...">
    ```

    Use host your images locally like this:

    ```html
    <img src="images/md/237.jpg" alt="...">
    ```

---

## 3. Arrays of objects
### Materials
- [Object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Working_with_Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

### Activities
- Picsum gallery: [Upgrade the gallery using an array of objects](https://gist.github.com/acidtone/a5f40cda47c6d5c1a8e3815833572024).

---

## 4. Stretch: `for` loops
### Materials
- [Looping code: The standard `for` loop](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#the_standard_for_loop)
- Video: [`for` Loop](https://www.youtube.com/watch?v=s9wW2PpJsmQ) by Mosh Hamedani
- Examples: 
    - [Print 1-to-100 with a for Loop](https://gist.github.com/acidtone/e87aa5564ae1b286beca66b07d52550f)
    - [Tony's Name Generator](https://acidtone.github.io/namor/)
        - [method call](https://github.com/acidtone/namor/blob/master/js/app.mjs#L16) in `app.mjs` on Line 16 
        - [`for` loop code](https://github.com/acidtone/namor/blob/master/js/phraser.mjs#L11-L13) in `phraser.mjs` on Lines 11-13

### Activities
- **FizzBuzz**: Using conditional logic and a `for` loop, [print a series of numbers from 1 to 100](https://gist.github.com/acidtone/e87aa5564ae1b286beca66b07d52550f) such that:
    - if the number is divisible by 3, print 'Fizz';
    - if the number is divisible by 5, print 'Buzz';
    - if the number is divisible by both 3 and 5, print 'FizzBuzz';
    - otherwise, print the number.
- Using a `for` loop and your favourite [mocking Sponge Bob meme](https://nymag.com/intelligencer/2017/05/what-is-the-mocking-spongebob-capitalized-letters-chicken-meme.html), create a function that will turn a phrase like this:

    > "Can I get some extra credit?"

    To sticky caps, like this:

    > "cAn i GEt SomE eXtRa creDiT?"

---

## Prep
### Loops
- [Looping code: The standard `for` loop](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#the_standard_for_loop)
- Video: [`for` Loop](https://www.youtube.com/watch?v=s9wW2PpJsmQ) by Mosh Hamedani

### Objects
- [Object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Working_with_Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

### Strings
- Review: [Handling text - strings in Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)
- Review: [Useful string methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)


{% comment %}
- Tooltime
    - Postman
    - whitespace
    - lorem picsum vs
- Trophies
    1. local animal images

        From: 

        ```html
        <img src="https://picsum.photos/id/237/300/300" alt="Random Picsum Image">
        ```

        To: 
        ```html
        <img src="/images/animals/md/237.jpg" alt="Random Picsum Image">
        ```

    2. alt in obj
        
        From: 
        ```js
        const imageIds = [237, , , ];
        ```

        To:

        ```js
        const images = [
          {
            src: '237.jpg',
            alt: 'Super cute puppy'
          }, {}, {}, {}];
        ``` 

    3. [sticky caps](https://nymag.com/intelligencer/2017/05/what-is-the-mocking-spongebob-capitalized-letters-chicken-meme.html)

{% endcomment %}