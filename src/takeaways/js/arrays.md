---
layout: layouts/page.njk
title: Getting started with arrays
---
:::terms
## Terminology
Array literal
: A comma separated list of values surrounded by `[]`. For example, ['cats', 'dogs', 'fish'].

Array index
: The location of an item in an array. In Javascript, his is always a sequential number starting at 0.

Array item
: Any Javascript data type (i.e. value) that an array index points to.

Array length
: The number of items in an array. Accessed with the `Array.length` property.
:::

## Key Takeaways
- Creating an array using `const` still allows you to change (or mutate) the items in that array.

    ```js
    const hobbies = ['pinball', 'bug hunting', 'napping'];
    hobbies[2] = 'proper sleeping'; // No error!
    ```

    - `const` only stops you from _re-assigning_ `hobbies`, not changing `hobbies`.

- The _value_ of an element can be any data type: `undefined`, `null`, `number`, `string`, `boolean`, `array`, `object`, etc.

    ```js
    const randomStuff = [null, 9, 'Hello World!'];
    ```

    - Although it's possible, you rarely see a mix of different value types in the same array.

---

### Accessing array items
Given the following array:

```js
const animals = [
  'Puppy',
  'Bear',
  'Moose',
  'Coyote',
  'Tiger',
  'Husky'
];
```

- You can retrieve an item from an array using the _index_:

    ```js
    const thirdAnimal = animals[2]; // Moose
    ```

- The _first_ index of an array is _always_ `0`.

    ```js
    const firstAnimal = animals[0]; // Puppy
    ```

- The _last_ index of an array is _always_ `Array.length - 1`.

    ```js
    const lastAnimal = animals[animals.length - 1]; // Husky
    ```

- To add an item to an array, the _next_ index is _always_ `array.length`.

    ```js
    animals[animals.length] = 'Wolf'; // New item at the end of the array
    ```

See: [Handy Array Methods]({{ '/takeaways/js/array-methods/' | url }})