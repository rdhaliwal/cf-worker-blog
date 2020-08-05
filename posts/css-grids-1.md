# [WIP] - CSS Grid Pt. 1

I've started messing around with CSS Grids to see what all the fuss is about. Here's a bit of a primer of them, as well as what I've learned.

## Why use Grid?

Some questions myself (and others) have had are: Why should I use CSS Grid? What can it do that Flexbox can't? One quote that I came across that helped immensely reframe my thinking was this:

> Flexbox is essentially for laying out items in a single dimension – in a row OR a column. Grid is for layout of items in two dimensions – rows AND columns.
>
> Rachel Andrew: https://rachelandrew.co.uk/archives/2016/03/30/should-i-use-grid-or-flexbox/

Flexbox is great, yes, but it does get a bit messy when you try and do things for two dimensions; it often results in nested `<div>` with plenty of `display: flex` on these children. Grid is a cleaner and easier to work with than that. Some caveats though:

 - CSS Grid is not going to fix your codebase. It's a tool that you can use, and like all tools, it's good at some stuff, clunky at others, and downright bad for some use cases.

 - If by the end of this post, you still think you can get by with just Flexbox, then great! Whatever works, works.

---

 ## Rows and Columns

```css
.Grid {
  grid-template-rows: 10px;
  grid-template-columns: 10px;
}
```

TODO: Words about rows, columns, tracks, span, repeat, `fr` and other stuff.

---

 ## Spacing

```css
.Grid {
  grid-gap: 10px;
}
```

TODO: Words.


