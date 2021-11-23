---
layout: layouts/day.njk
title: CPNT 200 Day 6 - CMS Page Design
description: Today we will analyze and experiment making some blog component layout design, learn 2 more vue directives, and go deeper into tailwind css
date: 2021-11-23
released: true
---



## Topics
- Blog Page Analysis
- [Vue Syntax (v-on, v-model)](#vue-syntax)
- Tailwind CSS Deep Dive (optional)
- Ash and Tony Live Pair Code & Lab Time
---

## Page Design Analysis
Today we will analyze these pages for layout and design. Tomorrow we will look more specifically at the actual content. 
- Key Points from [Sarah Drasner's article](https://css-tricks.com/in-defense-of-a-fussy-website/)
  - speed and effeciency are important
  - but so is making a website memorable
    - Following convention and aiming for pure minimalism will often leave your website feeling void of personality
    - Create UX informed designs that showcase personality through the design.
      - Take a couple specific ui components, and focus adding extra visual interest to them.
      - Ground your visual candy in well through out functional design.
> If something is meaningful to you, the audience you'll gather will likely be the folks that find it meaningful, too.
[_Sarah Drasner_](https://css-tricks.com/in-defense-of-a-fussy-website/)

### Small Group Page Review (20min)
- Analyze an index page an a blog article for design. use the following questions to guide your analysis. Pick 1 page to discuss with the class.
- Write your notes in a gist to share

#### Index Page to Review 
- [Cassie Evans](https://www.cassie.codes/writing)
- [Josh Comeau](https://www.joshwcomeau.com/)
- [Sarah Drasner](https://sarahdrasnerdesign.com/writing)

Each of these sites contain blog content among other information. They each focus on showcasing the developer's strengths and interests.

- **NOTE** Review the blog index page **OR** the top level index page

##### Key Questions
- How does the developer present themself?
  - visually, through narrative...
- Without looking for anything, what catches your interest when scanning the page?
- Sketch out the content hierarchy on the main index page or blog index page (if they are different)
  - do this quickly, if you have to question the design etc, take notes of what is confusing
- Identify as many components as you can
  - components are repeated ui elements used to portray different content
- Are there any ui features that all or most of these pages share (that go beyond the obvious)
- What does the layout do well?


#### Blog Page Review
Navigate to one of the actual blog articles and analyze it's design. **use your devtools**

##### Key Questions
- How well does the developer use:
  - Typography
  - Color
  - Layout
  - Hover Elements
  - Animations
  - Sound
  - Length
  - Contact & Social Media
- How different is the mobile experience? (use devtools to check mobile ui)
- Inspect elements that are done particularly well or bad and take note on how they implemented their design.
  - this can include font size, line height etc.

### Class Discussion
- Each group will present their findings from one of the pages reviewed.

---

## <a id="vue-syntax"></a> Vue Dynamic Rendering

### Directives
We will build a small todo app using these next two vue directives

- [`v-on`](#v-on)
  : Used for event handling. [Documentation](https://vuejs.org/v2/guide/events.html)

- [`v-model`](#v-model)
  : Used form rendering bindings. It's like `v-bind` but data can pass both ways between parent and child components. [Documentation](https://vuejs.org/v2/guide/forms.html)


#### <a id="v-on">V-on</a>
- v-on is used for event handling. It listens to DOM events
- Basic Syntax for v-on looks like
```
v-on:event="method
```
- You can also use the shorthand syntax like
```
@event="method"
```

- [v-on gist](https://gist.github.com/lilyx13/74543137780c1958f01e9b470a3cb13b)

---

#### <a id="v-model">V-model</a>
- v-model is used for two way bindings. This is especially important for forms.
- You can use `v-model` for all of the input types
- Check[the documentation](https://vuejs.org/v2/guide/forms.html) for info on how to use `v-model`
- `v-model` is also useful for passing information from a child component back to a parent component
- `v-model` works great with vue conditionals `v-if/else` statements

- Syntax:
```
<input v-model="message" type="text">
<p> Print out the {{ message }}</p>
```
- [Gist](https://gist.github.com/lilyx13/08827cab9dfbcb30d64ca6c4dfdc50c4)

---

### Properties 
Use computed and methods for adding javascript functions to your code

- [computed](#computed)
  : In template expressions are intended to be simple to keep the template clean and readable. Use the computed property to render logic and complex JavaScript. `computed` is a property that goes in your script tag, just like `props` and `data()`.

- [methods](#methods)
  : Functions in the methods object are used when you need to perform functions that handle events. methods are just like `computed` but will re-render again and again.

#### <a id="computed">Computed</a>
- Computed property's dependencies are reactive values. They only calculate when needed.
  - If you need something to always be recalculated on render, use `methods` just like `computed`
  - a great example on the [vuejs documentation](https://vuejs.org/v2/guide/computed.html) is the returning of `Date.now()` in computed. it is not reactive so it wont be re-run on render
    - Instead, returning `Date.now()` as a method, will re-render.
  - The caching feature of `computed` is especially useful when you have really heavy functions that process a lot of data. It keeps the execution down to a minimum.
- Example using array methods to reverse a string
```
data () {
  message: 'hello'
},
computed: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```
- template syntax to show difference
```
<div>
  <p>{{ message }}</p>
  <p>{{ reversedMessage }}</p>
</div>
```
- The documentation will show more information about how to use computed properties, but this should be enough to get you started. Just remember to put reactive logic into computed and you're good.

### Methods
These are like computed, but are always watching, so they work especially well with `v-on`
- Review [the documentation](https://vuejs.org/v2/guide/events.html) for excellent examples that show how the methods can be used for event handling with `v-on`

---

## Lab Time
- Work on Assignments
- (Optional) Ash and Tony Pair Code in Main Room
  - Build and Stylize a Todo App
    - [Feature Planning](https://gist.github.com/lilyx13/7a37f951edf1c7db0db7d3388a472c1d)
    - [Figma Mockup](https://www.figma.com/file/wve80uHDm0IBEp323DVQMV/Todo-App?node-id=0%3A1)
  - Tailwind CSS
    - [Extracting Components](https://v1.tailwindcss.com/docs/extracting-components)
    - [Adding Base Styles](https://v1.tailwindcss.com/docs/adding-base-styles)
    - [Writing Plugins](https://v1.tailwindcss.com/docs/plugins)
  - Vue Syntax
    - v-model, v-on, v-bind, script properties