Advanced Selectors
==================

We started by learning how to use **descendant selectors** in previous sections.

Descendant Selectors
--------------------
A **descendant selector** creates matching patterns based on the relationship between nested elements.

Ex:

```css
section a {...}
.example p {...}
```
The first selector in the example above, matches all **\<a>** tags inside the **<section>** tag.
The second selector is similar to the first selector, but this time it matches based on the class name.


Child Selectors
--------------
Although **child selector** may seem similar to **Descendant selector**, they are different.
**Descendant selector** matches to **child** and **descendant** target **element** alike. On the other hand, **child selectors** match to direct **child** of a **parent** element.

Ex:

```css
section > a {...}
.example > p {...}
```

**Descendant and child selectors**:

```css
/* descendant selector */
parent child {}
ancestor descendant {}


/* child selector */
parent > child {}
```


Adjacent Sibling Combinator (+)
--------------------------------
The **adjacent sibling combinator** has a right and left selector separated by a plus sign(+).

EX: 

```css
h1 + p {...}
```

This translates to: Match a **<p>** tag that comes right after (direct sibling of) a **<h1>** tag.

**Note**: To match, there can be no tag other between the **<h1>** and **<p>** tag.


General Sibling Combinator (~)
-------------------------------

Whereas the **adjacent sibling combinator** only matches the direct sibling of the left tag, the **General sibling combinator** matches all siblings regardless of the position.

**Note**: **sibling** means children of the same parent **element**, so it doesn't include **descendant**.

```css
h1 ~ p {...}
```

Pseudo-Selector
--------------

We have already seen some **pseudo-class selector**, but there are more we can also see:

+ :first-child
+ :last-child
+ :first-type-of
+ :last-type-of

```css
/* First child of a parent element */
p:first-child {...}

/* First child of type p of a parent element */
p:first-type-of {...}

/* last child of a parent element *
p:last-child {...}

/* last child of type p of a parent element */
p:last-type-of {...}
```
