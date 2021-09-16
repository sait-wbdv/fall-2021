---
layout: layouts/day.njk
title: CPNT 260 Day 8 - User Input and Accessible User Experience
description: Today we will continue learning about forms and user input. Along with learning form syntax and practicing design strategies that were covered in DSGN-270, we will also learn how to make our forms readable by screen readers.
date: 2021-09-27
---
## Trophy of the Day: A sign up form

## Review
- Trophies from last class
- Questions

## Assignment 4: Landing Page + Hero Section
- [Assignment Link]({{ '/assignments/cpnt260/assignment-4.md' | url }})
- **Due: September 30 11:59pm**
- Complete:
  - A landing page
  - Landing page needs to have a hero section with a call to action
  - CTA (call to action) should link to an accessible user form
  - Navigation should be responsive
    - a hamburger icon with hideable menu on mobile
    - a horizontal nav on desktop
---
## Overview
1. Plan it out
  - Create accessible, engaging, and inclusive web forms
2. Brute force
  - Positions and Visibility
  - Transitions and user interaction
3. Walkthrough
4. Optimize/test

---
## Topic 1: Create Accessible, Inclusive, and Meaningful Web Forms

### Terminology
`form`
  : Forms are one of the most used ways for a user to interact with a website. They can be used to `GET` data or `POST` data.
  - `GET` and `POST` methods will be covered later in this course. Here we are just creating the forms frontend
`label`
  : every input needs a label to describe it.
`input`
  : a field that users can interact with. There are [many types that can be learned about here](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
  - The main ones you'll likely use are
    - `text`
    - `checkbox`
    - `radio`
    - `email`
    - `datetime`
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

---
## Activity: [Create a Form]({{ '/activities/html-css/ }})
- It must use labels
- It must use the form tag
- It must use fieldset and legend appropriately
- It must have text, checkboxes, radio buttons, and a select menu

---
## Topic 2: Position
_For menus and different layouts_

### A Few Types of Position Tags
`absolute`
  : Element position is relative to its parent element
`fixed`
  : Like absolute but instead the element ignores the document folow and is relative to the browser window
`static`
  : The default position. Element is rendered in order of the document flow
`sticky`
  : Element's position is based on the scroll position
---
## Topic 3: Visiblity
_Ways to make something disappear_

### Notes
`visibility`
  : An element can be `hidden`, `visible`, or `collapse`. The layout of the document does not change. If you use hidden, the space where it existed will be as if it was still there. If you are using a table, `collapse` will effectively 'collapse' rows and columns. Collapsed flex items will also remove the space the item takes up, but for all other elements, it will keep the space
  - Visibility set to `hidden` also remove an element from the accessibility treewhich can mess with screen readers.
`display`
  : To remove an element from the document layout, set `display` to `none`

----
## Activity 2: A Sliding Menu
- Menu must be not visible to user at off state
- Use color and opacity to focus user's gaze

---
## Walkthrough
- Code review
- Discussion
- Comment and plan code changes

---
## Optimize/test
_End of Day Activity_
- Implement code changes
- Validate Code
- Deploy and Submit
- **Extra: Form styling tutorial**

---
## Prep for next day
- Read [Mdn on Custom properties/variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- Read [CSS Transition Examples](https://www.freecodecamp.org/news/css-transition-examples/)

---
