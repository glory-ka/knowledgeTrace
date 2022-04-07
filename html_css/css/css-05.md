Flexbox
-------
**Flexbox** allow us to controle elements relative to their parents. The most common usage is to define a **container** and add child elements to it. We then give the container a **display** value of **flex**. Once that is done, we can layout the child element in any direction using **flexbox** properties.

```css
.container {
    display: flex;
    flex-direction: row;
}

.container {
    display: flex;
    flex-direction: column;
}
```

Grid
----
**Grid** property works in a somehow similar way to **Flexbox**. However, **Flexbox** is **one-dimensional**, but **Grid** is **two-dimensional**. This means we can draw a **Grid** a put elements wherever we want within that grid completely independent of HTML semantic structure.

To create a grid we have to set the **dispay** property of an element to **grid**.

Some key word related to **grid**:
+ row : horizontal lines.
+ columns: vertical lines.
+ grid lines: horizontal or vertical.
+ grid Track: space between grid lines. Horizontal or veritcal.
+ grid cell: space between four grid lines. (top, bottom, left, right lines).
+ grid area: Any area within the grid defined by its outer most four lines.

```css
.container {
    display: grid;
}
```

Media query
-------------
This allows us to create conditions and css block that are applied to a page only when conditions are met.
It allow us to taillor CSS properties to specific devices and viewport.

The **Media query** type:

+ all : all devices
+ print: apply css before printing a document
+ screen: screen proporty
+ speech: screen readers

The general syntax:
```css
@media not|only mediatype and (media feature) {
    /* Style */
}
```
...

```css
@media only screen and (min-width: 800px) {
    .site-title {
        text-align: left;
    }
}
```

