---
layout: layouts/page.njk
title: Forms and Javascript
---

## Event object
You cannot pass arguments to event handlers but the browser creates and event object for you and makes it optionally available as an argument for your event handler. You can name this anything you want (usually `e`, `evt` or `event`).

```js
const clickHandler = function(event) {
  console.log(event);
}
```

Handy properties of the event object:
- [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault): Submitting a form will automatically trigger a page refresh and stop any scripts running on the page. We can invoke `Event.preventDefault()` to stop the form from submitting, like when a form is only being used client-side such as a calculator. 
- `Event.target`: returns the element that triggered the event. In the case of form submissions, this is usually the `submit` button.

---

## `HTMLFormElement.elements`
The [`<form>` object](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement) provides easy access to its form controls (i.e. text fields, radio buttons, etc) with the [`elements` property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements). Given the following form (labels are omitted for clarity):

```html
<form action="some-url" method="post">
  <input type="text" name="username" id="username">
  <input type="password" name="password" id="password">
  <input type="submit" value="Submit">
</form>
```
And the following Javascript:

```js
const form = document.querySelector('form');
```

- `form[0]` returns the first text field (username), `form[1]` returns the second (password) and so on.
- Fields are also accessible by `name` and `id`. For example: 
    - `form.username`
    - `form.password`.
- Use the `value` property of a form field to access the information entered. For example:
    - `form.username.value` returns the string the user entered in the form.