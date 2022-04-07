The Box Model
=============
The browser represents every HTLM element as a box, even text. This is referred to as the **box model**.
The **five** properties of the **box model** are the following:

+ Width
+ Height
+ Padding
+ Margin
+ Border

Each box has **four** parts:

+ Content
+ Padding
+ Border
+ Margin

#### __Content box__
It is the information contained within the html tag. It can be text, image or video.

#### __Padding box__
It is the area around the Content area. It is inside the element.

#### __Border box__
It is the area around the padding box. Also inside the element.

#### __Margin__
It is the area that surrounds the border box and the entire element.

Box Property
------------
We already listed the **box model** properties above. Here we want to see how they change the element and what part they control.

+ Width: Change the width of the **content area**
+ Height: Change the height of the **content area**
+ Padding: Add or remove space within the element.
+ Margin: Add or remove space around the element
+ Border: Added between **padding** and **margin**


Element type
------------

There are two type of HTML elements: **inline**  and **block-level** elements.

One difference is that the **width** and **height** properties have no effect on **inline** elements. To have alter the **with** and/or **height** of such element we have to use the **display** property.

+ display: **block** (this turn a **inline** element to a **block** element)
+ display: **inline** (inverse of **display: block**)
+ display: **inline-block** (apply the characteristic of both **inline** and **block**)


#### __Inline__:

+ They take the same space as their content
+ Elements are displayed in a line, from the left
+ Elements only wrap when elements cannot fit

**Ex**: \<a>, \<span>, \<strong>

#### __Block__

+ Always starts on new line
+ Same height as content
+ Same width as container, even if the content width is smaller than the container width


Relative 'Length' unit
----------------------
+ em: Represent inherited **front-size** of element
+ rem: Represent the **font-size** of the root element
+ 1vw: 1% of the **width** of the viewport
+ 1wh: 1% of the **height** of the viewport
+ vmin: Equal to the smaller of **vw** and **vh**
+ vmax: Equal to the larger of **vw** and **vh**


Tip
---
A common technic to positioned a element in the middle of the screen is to alter its **width**, and **margin** property.
The **width** must be smaller than the parent element.

```css
section {
    width: 500px;
    margin: 0 auto; /*top/bottom: 0 , left/right: auto */
}
```



