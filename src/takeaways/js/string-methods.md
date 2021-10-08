---
layout: layouts/page.njk
title: Numbers, Strings and Coercion
---

## Terminology
Prototype
: A base object that other objects can inherit. In the case of strings, methods such as [`string.prototype.substr()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) and [`string.prototype.trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) are inherited using prototypes.

Property
: A fancy term for a variable that lives inside an object and is most often accessed using dot notation. Example: `string.length`.

Method
: A fancy term for a function that lives inside an object and is most often accessed using dot notation. Example: `string.trim()`.

## Key Takeaways
- Deep dark secret: everything in Javascript is actually an object.
- Although a string is one of the primitive types, it is implicitly coerced into an object that includes the `String` prototype. This means that using `new String()` is rare since we get the methods anyway.
- The `String()` constructor can be used in two ways!
    1. `new String('some string/value')` will create a String _object_ (you will do this rarely).
    2. Calling it as a function: `String('some value')` will convert that value to a string _primitive_ (you will do this more often).
- Along with `string.length` string characters are also copied into an array; each character is given a number, starting at zero, in order of the characters. Each character can be accessed with [bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements).
