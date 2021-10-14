---
layout: layouts/page.njk
title: Truthiness and equality
---

## Terminology
Boolean values
: `true` or `false` (there is no maybe).

[Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
: _Implicitly_ converting a value from one type to another.

Falsy
: A value that is considered `false` when converted to a Boolean value.

Truthy
: A value that is considered `true` when converted to a Boolean value.

Equality (`==`)
: The equality operator checks whether its two operands are equal, returning a Boolean result. Unlike the strict equality operator, it attempts to convert and compare operands that are of different types. 

Inequality (`!=`)
: The inequality operator checks whether its two operands are not equal, returning a Boolean result. Unlike the strict inequality operator, it attempts to convert and compare operands that are of different types. 

Strict Equality (`===`)
: The strict equality operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different. 

String Inequality (`!==`)
: The strict inequality operator (!==) checks whether its two operands are not equal, returning a Boolean result. Unlike the inequality operator, the strict inequality operator always considers operands of different types to be different. 
