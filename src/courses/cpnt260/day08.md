---
layout: layouts/day.njk
title: CPNT 260 Day 8 - Accessible Forms, Images, and CSS Grid II
description: Today we will continue learning about forms and user input. Along with learning form syntax and practicing design strategies that were covered in DSGN-270, we will also learn how to make our forms readable by screen readers.
date: 2021-09-28
released: true
---

## Trophy of the Day: A sign up form

## Review

- Trophies from last class
- Questions

---

## Overview

- Morning Syntax Focus
  - object-fit and img css
  - CSS Grid
- Morning Theory
  - How to write user forms 
- Morning activity
  - Plan a user form in pairs to build and design
- Afternoon Syntax
  - Form syntax
- Lab Time
  - Github SSH password issues
  - Activity: Create a web form



---
## Topic 1: Object-fit and images
- [Mdn Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)

## Topic 2: CSS Grid
- Position items in a grid container with:
  - `justify-items:`
  - `align-items:`
- Set the columns and rows of a grid item
  - `grid-column:`
    - Set the column that an item starts at
    - `1 / -1` syntax, `span 2` syntax, `2` syntax 
  - `grid-row`
    - Same as column but rows
### Reading
- [CSS Tricks The Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - Properties of Grid Items
- [CSS tricks on auto-fill vs auto-fit](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)


## Topic 2: Create Accessible, Inclusive, and Meaningful Web Forms

### Creating Good Forms - Some Guiding Questions

- Forms are very intention specific, and more questions means more work for your user. Consider these questions when writing forms
  - For whom's benefit is the form?
    - ie: Optimizing a user's experience with tailored content, providng ways for users to express themself.
    - ie: Gathering user data in order to conduct research for app improvement
  - Is the data that your asking for necessary?
    - ie: is it legally required? will it be used for password recovery?
  - At what point will the user be filling this out?
    - ie: Do they have to sign in in order to access the main content?
    - ie: Is it going to be something they do at say checkout?
    - Is it a user survey?
  - What benefit is it to the user to do this?

### Activity: Plan a User Form
- Can be about anything
- Try to use multiple select, radio buttons, text input, date input, and email input
    - Dropdown select menus are good to try to use as well
- This form should be a bit longer. Try to kep to best practices as dicussed, but also try to use as many types of data as you can.
1. Wireframe a form
2. Draft content text (questions and answers)
3. Look up types of input syntax that you will possibly use for this, take note of all teh syntax
   - If you want an extra challenge in the afternoon. Try to write out all the html code with only your notes and wireframe

### Terminology

`form`
: Forms are one of the most used ways for a user to interact with a website. They can be used to `GET` data or `POST` data.

- `GET` and `POST` methods will be covered later in this course. Here we are just creating the forms frontend
  `label`
  : every input needs a label to describe it.
  `input`
  : a field that users can interact with. There are [many types that can be learned about here](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
- The main ones you'll likely use are - `text` - `checkbox` - `radio` - `email` - `datetime`
  `textarea`
  : an input text box, this is like the text input but it provides the user a larger writing space than the single line that `text` provides
  `fieldset`
  : group multiple related inputs together. It will draw a box around the inputs
  `legend`
  : used to define a fieldset. This is especially important for screen readers.
  `button`
  : Forms and input types need a way to submit requests to the server. THis is normally done with a button tag

### Accessiblity and Forms

- [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
  - tabindex can be used to set how the user can tab through content. It is especially important for screen readers.
  - `tabindex = -1` will make something invisible to the tab key.
  - `tabindex = 0` is preferred in most cases. you can mess up the order that a user moves through content by having higher numbers
    - it's better to just have your content written in a logical sequence
  - avoid using tabindex on non-interactive content such as `div`
- `label`
  - it's important to correctly label your forms
    - `label`, `aria-label`, and `legend` all have particular use cases.
    - If a field does not need a visual label, use a `aria-label` as this will help screen readers
  - [Read more about labels](https://www.w3schools.com/accessibility/accessibility_labels.php)

#### Dropdown menu

- don't use this for navigation
- nest multiple `option` tags within `select` tags. just like `li` within `ul`
- don't forget a `label`

---

## Lab Time

### Activity: [Create a Form]({{ '/activities/html-css/form-builder/' | url }})

- It must use labels
- It must use the form tag
- It must use fieldset and legend appropriately
- It must have text, checkboxes, radio buttons, and a select menu

### SSH Github Password Issue

## Prep for next day

- Read [Mdn on Custom properties/variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- Read [CSS Transition Examples](https://www.freecodecamp.org/news/css-transition-examples/)

---
