---
layout: layouts/page.njk
title: Variables - Declaration vs Assignment
---

:::terms
## Terminology
Expression
: A piece of code that returns a value.

Variable Declaration
: Creating a variable name in memory (with or without a value). In Javascript ES6, this is accomplished with the `const` and `let` declaration keywords.

Variable Assignment
: When we give a variable name a value using the `=` assignment operator. We say we've "assigned a variable". If a variable hasn't been assigned, it's value will be `undefined`.
:::

## `const` vs `let` vs `var`
Variables should be initially declared (a name created in memory) with a declaration keyword. This is only needed when the variable is first created. Of the three keywords available, it is recommended you try them in this order
1. `const`: The value of a constant can't be changed through reassignment. This is the safest way to declare a variable.
2. `let`: If you need to reassign a variable later (see common errors below), you should use `let`.
3. `var`: This keyword is the classic (ES5) method of declaring a variable and should be avoided.

### Key Takeaways
- Use strict mode whenever possible. It will make you a better (safer) coder:

    At the top of your script, add:

    ```js
    'use strict';
    ```

    - Note: if you include your file with `<script type="module">`, your code will run in strict mode by default.

- By default, all declared variables have a value of `undefined` until they are assigned. 
- When declaring variables, start with the `const` keyword and use `let` only when you need to reassign a variable. Avoid the use of the older `var` keyword.
- Declaration keywords (`const` and `let`) are only used the first time to declare the variable. After that, you can use the variable without it.
- Arrays and objects defined with `const` are still changeable, they just can't be reassigned. In other words, the items in an array created with the `const` keyword can still be changed. The same is true for objects including HTML Elements.
- Never explicitly assign a variable to `undefined`. When you need a variable to be "nothing" use `null` instead. The `undefined` data type should be reserved for use by the runtime environment.

---

## Common assignment/declaration syntax errors
1. Calling a variable that hasn't been declared:

    ```
    Uncaught ReferenceError: 'whatever' is not defined
    ```

    - Probably the most common syntax error: trying to use a variable that doesn't exist. Best solution: declare the variable so it exists!
    - Note: "is not defined" does not mean `undefined`. This is an unfortunate choice of wording.

2. Missing assignment on `const` variable:

    In Firefox:

    ```
    Uncaught SyntaxError: missing = in const declaration
    ```

    Or, in Chrome/Node

    ```
    SyntaxError: Missing initializer in const declaration
    ```

    The `const` keyword requires that you assign the variable with a value at the time of creation. If you need to create a variable without assigning it, use `let`.

3. Re-assigning a `const` variable:

    In Firefox:

    ```
    Uncaught TypeError: invalid assignment to const 'whatever'
    ```

    Or, in Chrome/Node

    ```
    TypeError: Assignment to constant variable.
    ```

    You tried to reassign a constant variable. Try declaring with `let` if you need to reassign.
