---
layout: layouts/page.njk
title: Numbers, Strings and Coercion
---

:::terms
## Terminology
[Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
: _Implicitly_ converting a value from one type to another.

Arithmetic operator
: [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math#arithmetic_operators) take numerical values (either literals or variables) as their operands and return a single numerical value.

Addition Operator (`+`)
: The [addition operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition) produces the sum of numeric operands OR string concatenation.

String Concatenation
: Joining two or more strings together.
:::

## Untyped languages and coercion
It's important to know that Javascript is an untyped language, meaning that a variable will often be converted from one data type (such as a number) to another (a string). This often "helps" programmers type less code but will sometimes cause problems when you don't expect it.

- See: [JavaScript type coercion explained](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/) for more information

### Key Takeaways
- The addition `+` does two jobs:
    1. It adds numbers together;
    2. It concatenates (joins) two strings together.
- The `+` operator will concatenate values if one or more is a string.
    - For example: `1 + 1` is `2`, but `1 + "1"` is `"11"`.
- When a number is needed but the type cannot be converted to a number, you'll see the dreaded [`NaN` property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- When you need to concatenate a string with a variable, it's recommended you use the new (ES6) [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) syntax.