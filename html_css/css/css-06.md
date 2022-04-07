In-page Linking
---------------
Link to a **section** within the same page.

```html
<a href=#example> Links to a spot on the page </a>
<section id="example"> Link goes here </section>
```

Class
-----
An html element can belong to two or more classes. We need to separate classes with a **space** within the quote.
Ex: class= "class1 class2 class3"

To apply a style to element that belong to more a group of classes, we use the following **selector**:

```css
/* Note that we don't have space between the class name */
.class1.class2.class3 { /* style */}
```

Grouping Selectors
------------------
```css
section h1, h2 {}

/* expands to */
section h1 {}
h2 {}


section h1, section h2 {}

/* expands to */
section h1 {}
section h2 {}
```

```css
/* applies to any elements with this class */
.intro { /* style */ }

/* applies to a <p> elements with this class */
p.intro { /* style */ }
```

Specificity
-----------
**Specificity** determines how browsers decide which CSS rule takes precedence.


**Selector** rank:

1. universal (\*)
2. type (p)
3. class (.example)
4. id (#example)

The **universal** selector has the lowest precedence. It can only override **inherited** properties.
when we add muliple **Selectors** together, their precedence value is also added up.

> The stylesheet is read for top to bottom. If the **specificity** is equal, CSS applies the last declaration of a property.
However, the style with with the highest specificity is applied regardless of the order they appear on the stylesheet.

We can override the CSS **specificity** by using the **!important** keyword. This is not recommended.
```css
p {
		font-size: 12px !important; /* This style will take precedence */
}

.example {
    font-size: 16px;
}
```
The only way to override a style declarion with **!important** is to use a **selector** with a **higher specificity** and the **!important** key word.
```css
p {
    font-size: 12px !important; 
}

p.class {
    font-size: 18px !important; /* This style will take precedence */
}
```

Pseudo-class Selector
---------------------
Pseudo class selectors are dynamic. This means they require some sort of action from the user interacting with the page.
They are used in conjuction with other selectors t create conditions to dynamically load the css.

See bellow the list of few commonly used **Pseudo-classes**:
+ :link
+ :visited
+ :focus
+ :hover
+ :active

> If we apply all these speudo-class to an element, they have to be listed in the order above because of the cascading rule of CSS

[CodePen code](https://codepen.io/christinatruong/pen/MxrVOd)

