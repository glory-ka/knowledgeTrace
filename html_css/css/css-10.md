Flexbox
=======

This section is a complement to the information in the css-05.md file.


Flexbox
-------
A **flexbox** consists of **two type of elements**:
+ **Flex container** The parent element
+ **Flex items** Children of the flex container

**Flex container** and **flex items** have different properties as listed in the example below:
```css
.flex-container {
    background: lightgray;
    margin-bottom: 10px;
    width: 500px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
```
```css
.flex-itmes {
    box-sizing: border-box;
    border: 1px solid blue;
    padding: 10px;
    width: 100px;
}
```

To create a **flex** box, we can give the **display** property one of **two values**:
+ **flex** Flex container behaves like a **block** element.
+ **inline-flex** Flex container behaves like a **inline** element.

**Note**: The size of the **flex container** is the same as the **height** of the longest item.

There are **three** properties we can apply to the **flex-items** to set their size and behavior:

+ **flex-grow** Determines how the items will expand if there is extra space in the container
+ **flex-shrink** Determines how the items will shrink if there isn't enough space in the container
+ **flex-basis** Sets the initial size of all flex-items

We can use the **shorthand** notation: 

**flex**: grow shrink basis
```css
.flext-items {
    flex: 0 1 100px; /*default[ grow: 0  shrink: 1] */
}
```


Flexbox Alignment
-----------------

We can align a flexbox and its items using the followng properties:

+ **justify-content** Aligns items on the main axis
+ **align-items** Aligns items on the cross axis

```css
.box {
    display: flex;
    justify-content: center;
    align-items: center;
}
```



Grid
====

Similar to **floxbox**, **grid** also has two main elements:

+ **grid element** The parent element
+ **grid items** The child elements within the **grid container**

Again, similar to **flexbox** two **display** property values can create a **grid**:

```css
.grid-container {

    /* The width of each element would be equal to the container width*/
    display: grid; 

    /* Or */

    /* The width of each element would be equal to width of its content */
    display: inline-grid; 
}
```

Grid lines
----------
The **grid lines** are not like **rows** in a table. There are the lines that make up **grid cells**. This means that a **grid cell** is made of **four lines**.


Explicit Grid
-------------
We can create an explicit **grid** by defining the **grid lines and tracks** with the following properties:

+ grid-template-columns
+ grid-template-rows

```css
.grid-container {
    display: grid;
    grid-template-columns: 100px 100px 100px; /* 3 columns */
    grid-template-rows: 100px 100px; /* 2 rows */
}
```
#### __The Fraction Unit: Fr__

**fr**: represents a fraction of the available space in the **grid container**.
```css
.grid-container {
    display: grid;

    /* we use 1fr to divede the space evenly between the columns*/
    grid-template-columns: 1fr 1fr 1fr; /* 3 columns */

    grid-template-rows: 1fr 1fr; /* 2 rows */
}
```

repeat()
--------

The **repeat()** function allow us to repeat similar values.
**repeat([number of tracks], [size of tracks])**

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, fr); /* 3 columns */
    grid-template-rows: repeat(2, fr) ; /* 2 rows */
}

.grid-container-new {
    display: grid;

    /* column 1 is 50px wide, column 2 and 3 take the remaining space */
    grid-template-columns: 50px repeat(2, fr); /* 3 columns */
}
```

Gutter
------
The space between adjacent lines is called **gutter** (gap).
We can add **gutter** using the **gap** property:

```css
gap: 10px; /* rows and columns */
gap: 10px 20px; /* rows | columns */
```

**valid gap property units**:
```css
/* valid */
gap: 20px
gap: 18%
gap: calc(10% + 20px)

/* not valid */
gap: 1fr
```

**Shorthand**:
```css
gap: 10px 20px
```

**Longhand**:
```css
row-gap: 10px
column-gap: 20px
```


Implicit grid
-------------

If we have a **div** element that we use as a container inside which we have six other **div** elements. When we transform the container into a **grid container** without specifying the number of **columns**, the layout will not change. The elements will still be stacked on top of one another.

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```
```css
.grid-item {
  border: 2px solid mediumvioletred;
  padding: 10px;
}
```

However, if we then specify a number of columns, but smaller than the number of **grid items**, the **grid container** would create **implicit rows** to put the remaining items. If the number of remaining **items** is greater or smaller than the number of **columns**, the **grid container** would display more **implicit elements** to fill any empty **grid cells**.

```css
.grid-container {
  border: 4px solid black;
  display: grid;

  grid-template-columns: 100px repeat(2, 1fr);

  /* A second implicit row would be created */
  grid-template-rows: 100px;
}
```

The dimension of the **implicit element** (rows or columns) would use the **width** and **height** of the **grid cell content**. This means we might not have a **grid** with our desired shape.
To remedy this problem, we can use the **grid-auto-rows** and **grid-auto-columns** properties to indicate the size of any **implicit row or columns**.

```css
.grid-container {
  border: 4px solid black;
  display: grid;

  grid-template-columns: 100px repeat(2, 1fr);

  /* A second implicit row would be created */
  grid-template-rows: 100px;

  /* Set dimension the auto generated implicit rows */
  grid-auto-rows: 200px;
}
```

Grid Placement
--------------

We can arbitrary add a **grid cell** or make **big grid cell** by spanning more than one **rows or/and columns**.
To do that, we use the following properties:

+ grid-column-start
+ grid-column-end
+ grid-row-start
+ grid-row-end

**Shorthand**:
```css
.grid-items1 {

    /* grid-column: grid-column-start / grid-column-end */
    grid-columns: 2 / 4;

    /* grid-row: grid-row-start / grid-row-end */
    grid-row: 1 / 3;
}

.grid-items2 {
    /* grid-column: grid-column-start / grid-column-end */
    grid-columns: 1 / 2;
}

.grid-items3 {
    /* grid-row: grid-row-start / grid-row-end */
    grid-row: 3 / 5;
}
```
