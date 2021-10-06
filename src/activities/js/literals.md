---
layout: layouts/page.njk
title: Javascript Literals
description: Find online examples of Javascript literals 
---

## Instructions
1. Using a method of your choice, find examples of Javascript code online, for example:  
    - Search "javascript examples";
    - Find your favourite Javascript library;
    - Inspect live websites
2. Within the code you find, identify examples of literals for each of the following value types (they don't all have to be from the same example):
    - string
    - number
    - boolean
    - null
    - array
    - optional: object
    - optional: function
3. In a separate file, record:
    1. the literal example;
    2. the line(s) of code you found it in;
    3. a link to the original source (if available).

## Example Literals
### String
- `"demo"` 
    - line: `document.getElementById("demo").innerHTML = x;`
    - [source](https://www.w3schools.com/js/tryit.asp?filename=tryjs_syntax_variables)

### Number
- `6` 
    - line: `x = 6;`
    - [source](https://www.w3schools.com/js/tryit.asp?filename=tryjs_syntax_variables)

### Boolean
- `true` 
    - line: `assert.ok(config.setSepChr('/') === true);`
    - [source](https://www.npmjs.com/package/config-js)

## Null
- `null`
    - line: `if ( data == null && fn == null ) {`
    - [source](https://github.com/jquery/jquery/blob/main/src/event.js)

### Array
- `['generateLabels', 'filter', 'sort']` 
    - line: `_scriptable: (name) => !['generateLabels', 'filter', 'sort'].includes(name),`
    - [source](https://github.com/chartjs/Chart.js/blob/master/src/plugins/plugin.legend.js)

### Object
```
{
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}
```

line:

```
const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}
```

- [source](https://github.com/lodash/lodash/blob/master/escape.js)

### Function
```
function(width, height) {
  return width * height;
}
```

line: 

```
const getRectArea = function(width, height) {
  return width * height;
};

```
- [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)