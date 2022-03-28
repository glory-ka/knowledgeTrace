CSS Positioning
===============

There are three types of CSS Positioning:
+ Normal Flow
+ Element floating
+ Absolute positioning


Normal Document Flow
--------------------
This is the default browser layout method. Its displays the content, in order, found in HTML elememts. It stacks up elements on top of each other.

**Block-level elements**:
+ Headings
+ Paragraphs
+ Divs
+ Articles
+ Asides
+ And more

**Inline elements**:
+ Images
+ Links
+ Spans

**Note**: **Block-level elements** take their own space inside a document normal flow and stack up on top of one another like blocks. On the other hand, **inline elements** appear insde of **block-level elements** and stack themselves according to the flow of **line boxes**.


Position
--------
To change the position of an element you can use the **position** property. 
The **position** property accepts one of five **values**:

+ static    (use normal **normal document flow**: default)
+ relative  (still consider part of **normal document flow** with extra)
+ inherit   (use postion value of parent)
+ absolute
+ fixed

Relative position
-----------------

This is consider part of the **Normal document flow**, but we can use **offset value** (top, bottom, left, right) to alter the position of the elements.

The main characteristic of an element that has **relative postition** relate to how other element around it behave.

Let's imagine three boxes, box1 to box3, stack up on top of one another.
Then let's give box1 a **relative position (position: relative;)**. If we move the box to the left using **offset value (left: [n]px)**, the elements underneath do not fill the empty space box1 creates after we move it. That is because **relative positioning** does not remove an element from the **normal flow**.

```css
/* box1 moves to the left and down, but the box2 and box3 don't take up its place. 
    It effectivelly creates a hole where box1 was supposed to be.
*/
box1 {
    position: relative;
    left    : 100px;
    top     : 50px;
}
```

Absolute Positioning
--------------------

An elements that has a its **position** property set to **absolute** is positionned relative to its nearest parent element that has position (that has a **position** property set). If no position is found, the element positions itself relative to the **body** tag which means it positions itself relative to the viewport.

Whereas an element with **relative postion** would create a hole when moved to a different position on the screen (using **offset values**), elements underneath an element with **absolute position** move to fill up the void. This is because moving an element with **relative position** removes it from the **normal flow**.

```css

/* box1 moves to the left and down, and box2 and box3 moves up to fill the empty space.
    This is because box1 is no longer part the normal document flow.
*/
box1 {
    position: absolute;
    left    : 100px;
    top     : 50px;
}
```

Fixed Positioning
-----------------
Fixed elements are considered to be **absolutetly positioned**, but they are always positioned relative the the active viewport. That is why menu bar for example stay in place when we scroll up or down a page.


Element Stacking
----------------
Sometimes elements can overlap, so we can decide what elements should appear on top of another elements. By default, **positioned** elements appears on top of **non-positioned** elements.

To determine which elements should appear on top of others we can use the **z-index** property.
The element with largest **z-index** value has the highest priority.

```css
.content {
    z-index: 1;
}

.quote {
    z-index: 2;
}
```

Floats
------
Float is a CSS layout technique based on the relationship of the elements being floated (I know, right!!).
There are some similarities between **float** and **absolute positioning** wherein holes in the layout are filled with other elements. However, where with **absolute positining** we could move an element using the **offset values**, **floated** element are either pushed to the farthest possible right or left position.

Moreover, when we give a float property to an element, the element shrinks to its smallest possible **width** without altering its text content (Inline boxes). Another element, the one bellow it, then goes to fill the hole.

The **float** property can take the following values:
+ left
+ right
+ none
+ inherit

Let's again use the example of three boxes stuck up on top of one another.
When we give the proporty **float** with value **right** to box1, it moves as far as it can to the right. Then the box2 fills the space box1 used to occupy.

**Float** is a easy way to create a two column layout.

We can also for example put the three boxes side by side:
```css
<head>
    <style>
        .box1,
        .box2,
        .box3 {
            float: left;
            padding: 15px;
        }
        .box1 {color: blue;}
        .box2 {color: green;}
        .box3 {color: yellow;}
    </style>
</head>
<body>
    <div class='box1'>Box 1 </div>
    <div class='box2'>Box 2 </div>
    <div class='box3'>Box 3 </div>
</body>
```

Clear
-----
The **clear** property is used to prevent an element from being **moved to the hole left by a floated element.**
This is very useful since we might want to create a layout with two side by side boxes with space in between (float one left and float the other right), but we also want a third box bellow. This wouldn't be possible as the third box would also move in between the two boxes. To stop the rearrengment of the third box, we use the **clear** property.

The **clear** property can take the following values:

+ none - The element is not pushed below left or right floated elements. This is default
+ left - The element is pushed below left floated elements
+ right - The element is pushed below right floated elements
+ both - The element is pushed below both left and right floated elements
+ inherit - The element inherits the clear value from its parent
