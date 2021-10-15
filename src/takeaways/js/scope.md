---
layout: layouts/page.njk
title: Variable Scope
---
## Terminology
Scope
: Where a variable is available in your code.

Global
: All code that is not inside a function.

Global Scope
: Variables that are available anywhere in your code (even inside functions).

Code Block
: Javascript that is surrounded by curly braces `{}` such as inside `if` / `else if` / `else`, loops and functions.

Block Scope
: `let` and `const` variables that are declared inside a code block are only available within that block. In other words, they are local variables.

Function Scope
: All variables defined inside a function are only available inside that function.

Execution Context
: A wrapper to help manage the code that is running. The scope that is currently running is managed via execution contexts.
 