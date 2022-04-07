Float and Collapsed Container
=============================

This sections is a complement to the information in the **css-04.md** file.

Problem
-------

Imagine we have a **div** element that contains a **div** element and a **paragraph** element.
If we **float** the inner **div** element, and the **height** of the first **div** (container) would adjust to the **height** of the **paragraph (p)** element. The first **div** would act as if its inner **div** element does not exist. We say that the inner **div** was removed from the **normal flow**.

If the **height** of **p** is smaller than the inner **div** elements, the inner **div** would **overflow**.

**Note:** if all the elements of container are **floated**, the entire container would collapse. This is easier to observer if there are borders around the container.


Solution
--------

To solve the problem described above, we can use any of the following method:
+ overflow property
+ clearfix hack
+ display property with value **flow-root**


Overflow property
-----------------

The overflow property has the following values:

+ visible - Default. The overflow is not clipped. The content renders outside the element's box
+ hidden - The overflow is clipped, and the rest of the content will be invisible
+ scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
+ auto - Similar to scroll, but it adds scrollbars only when necessary

In our case, using the **hidden** value fixes our problem.


clearfix hack
-------------

The clearfix hack is a community driven solution. We simply have to create a class, add some CSS properties and assign the class to the **container**.

```css
.clearfix:after {
    content: "";
    display: table;
    clear: both;
}
```
This CSS snippet allow the **container** to **clear** itself of the effect the **float** property of its children.

[The clearfix hack](https://css-tricks.com/snippets/css/clear-fix)

display: flow-root
------------------

Not all browser may support this technique. However, if a browser does, you simply need to add this **display** property to the **container**.


Box Model Fix
=============

This sections is also a complement to the information in the **css-04.md** file.

Problem
-------

+ Let's have four **block** elements stack on top of one another in order written in the html file.
+ Let's these four **block** elements be children of another **block** element (container).
+ Let's set the **container width to 800px** (This means the max-width of any child is therefore 800px).


+ Let's set the **second element width inside the container to 200px**.
+ Let's set the **third elements width inside the container to 600px**.

If we **float left** the **second** element, the **third** element would go to its right. However, given that we have a fixed **width** of **800px**, if we add **padding** or content, we may exceed the **800px** and break the float effect.

> Despite what we may think, the total width of the second and third elements would not add up to 800px (200px + 600px).
Instead, the total width would be the width of the element that floats around the floated element.

The total **width** of the new block is based on the **width** of the element around the floated element.

**Note**: If we do not specify the **width** property on the floated element, its **width** is shrunk to the **minimum** possible **width**. Alternatively, if we do not specify the **width** of the element around the floated element, the total **width** of the new block is be equal to the **default width** or **container width**.

Solution
--------
To avoid adjusting and keeping track of **width** and sometimes **height** of elements, we can let the browser automatically determine the appropriate **width** and **height** of element using the **box-sizing** property.

Use this code snippet if you use the **float** property:

```css
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

Box-sizing
----------
The following are the property of the **box-sizing** property:

+ **content-box** The width and height properties includes only the content. Border and padding are not included
+ **border-box** The width and height properties includes content, padding and border
+ **initial** Sets this property to its default value. Read about initial
+ **inherit** Inherits this property from its parent element. Read about inherit

The preferred value for the **box-sizing** property is **content-box**.
