# Javascript Learning Map
## Fundamentals
Lessons that will help with most imperative programming languages.
- HTML Anatomy
    - `<script defer>`
    - activity: fork/clone [Gist of example js values](https://gist.github.com/acidtone/d85a9a0ba6bccfa73cfb269d65a25839)
    - stretch: `<script type="module">`
        - pre-requisites
            - functions and scope
- Grammar
    - [reserved words](https://www.w3schools.com/js/js_reserved.asp)
- Values
    - types by literal
        - base
            - string
            - number
            - boolean
            - array
        - stretch
            - object
            - function
    - naming
        - camelCase
            - cabob-case
    - activity: a literal hunt
        - Pick an open-source javascript file of your choice and find examples of each of the literals mentioned today.
    - stretches
- Declaration vs assignment
    - syntax errors
    - `const` vs `let` vs `var`
    - stretch
        - hoisting
- Numbers and operators
    - numbers
    - operators
        - arithmetic operators
    - coercion
        - `1 + "1"` equals `"11"`  
            - why?

- Strings and string methods
    - expressions
    - prototypes
        - documentation: `Array.prototype.whatever`
        - string methods
    - arrays
- boolean and conditional blocks
    - boolean        
    - `if`/`else`
    - coercion
        - stretch: 3 < 2 < 1 == true 
            - why?
- Looping
    - i
    - for
    - activity: fizzbuzz
- Scope
    - functions
    - parameters vs arguments
    - return keyword
- 

## Dev Life
1. Errors
    - console.log
    - syntax errors
        - look for line numbers
        - don't freak out over a stack trace
            - try the first line, then try the last line. Hopefully one will make sense
        - VS Code error squiggles

## Extras
- semi-colons
        - just be consistent
        - learn both, be consistent with what's already there if it's a legacy project
        - teams: is this a hill you want to die on?