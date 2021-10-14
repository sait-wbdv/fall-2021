---
layout: layouts/day.njk
title: CPNT 262 Day 6 - Booleans, comparison operators and conditionals
description: In this session we'll cover the Boolean value type and how it's used in condition if/else blocks. While we're at it, we'll upgrade our Tip Calculator form (among others) with select menus.
date: 2021-10-14
released: true
---

## Housekeeping
- Quick chat about Fat arrow functions
- No more Node until we start backend on Oct 26

---

## 1. Spoiler demo
- Form inputs for [Tip Calculator](https://gist.github.com/acidtone/b41a29264b72ca0439f772bfa2fb6b47) with anonymous functions

---

## 2. Equality and Truthiness
Coercion in untyped languages (such as Javascript) produces a concept known as "Truthiness": some values are more equal than others, based on their value type.

### Materials
- [Boolean values](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)
- [Equality and truthiness terminology]({{ '/takeaways/js/truthiness-equality/' | url }})

### Key Takeaways
- Use `===` when testing for equality (it's safer). Use `==` once you understand truthiness (or you just can't get the job done with `===`).
- Any value can be converted to a Boolean value:

    ```js
    myBool = Boolean(myVar); // Method 1
    myBool = !!myVar; // Method 2
    ```

### Activities
- Why does `3 > 2 > 1` evaluate to `false`?

---

## 3. Conditional code blocks
The `if`/`else` statement is used to conditionally run code when an expression is `true`.

### Materials
- [Making decisions in your code - conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Logical AND (`&&`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [`<select>`: The HTML Select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

### Key Takeaways
- An `if` block only runs if its expression evaluates to `true`
- An `else if` block only runs if its expression evaluates to `true` AND all `if` and `else if` blocks before it have evaluated to `false`.
- An `else` block only runs if all previous `if` and `else if` blocks have evaluated to `false`.
- The AND logical operator (`&&`) only evaluates to `true` if both operands also evaluate to `true`.
- The OR logical operator (`||`) evaluates to `true` if EITHER of the two operands evaluate to `true`.
- The NOT logical operator (`!`) inverts a `true` value to `false`, and vice versa.

### Activities
- [Simple Calculator from Adding Machine](https://gist.github.com/acidtone/fb9d28505944280f548ad6dde0890102)
- Add a select menu to your Tip Calculator form that uses conditional blocks to select the tip rate based on level of service:
    - Poor Service: 12%
    - Adequate Service: 18%
    - Superb Service: 23%

---

## 4. Validation
A common task in untyped languages is confirming the value type that you're working with.

### Materials
- Takeaways: [Validating values]({{ '/takeaways/js/variables-validating-types/' | url }})

### Activity
- Using your knowledge of comparison operators and conditional statements, add validation to your Tip Calculator that ensures that:
    1. The entered Bill Total is greater than $0, and
    2. The supplied Service Level is one of the options available in the select menu.

---

## Prep
### Booleans and Conditional Statements
- [Boolean values](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
- [Making decisions in your code - conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)
- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

### Logical operators
- [Logical AND (`&&`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [Logical OR (`||`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Logical NOT (`!`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)

### Forms
- [`<select>`: The HTML Select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

{% comment %}


{% endcomment %}