Basic Font Properties
---------------------

+ Font Family (font-family)
+ Font Weight (font-weight)
+ Font style  (font-style)
+ Font size   (font-size)

**Font Family example**:
```css
/* firt choice, second choice, fallback*/
p {
    font-family: "Times New Roman", Times, serif;
}
```
[CSS specification for font weight](https://goo.gl/MBv3y1)
> If the font specify doesn't exit, the browser would use a default font or nearest match.


System fonts vs Web fonts
-----------------------
The **system fonts** are default fonts installed on a browser. So, if a font family, in a **Stylesheet** linked to a page, doesn't exist, the browser would use its default **Fonts**.
[CSS Web safe Fonts](https://www.w3schools.com/cssref/css_websafe_fonts.asp)

To remedy this problem, we can use **Web fonts**. 
**Web fonts** are external or additional **fonts** that we load to a project. An advantage of using **Web fonts** is the **fonts** would look the same across all platforms.

To load **Web fonts** we use the **@font-face** or **@import** rule, **Link to a Stylesheet** or **Load via JavaScript**:

[Web fonts with @font-face rule](https://css-tricks.com/snippets/css/using-font-face)
[Web fonts with @import rule](https://goo.gl/35LphC)

> Linking to a Stylesheet is a little redundant since it probably uses the @font-face or @import rules to load the web fonts.

The Box Model
-------------
The box model refers to the physical properties of an element's rectangular box. These are **padding**, **borders**, **padding**, and content **width** and **height**.

Total width of an element = left border + right border + content width + right padding + left padding

Since the total **width** of an element can requires some addition, we could use the **box-sizing** property to make sure that an element as the exact value we want it to have.

Ex: 

**box-sizing: content-box**
```css
/* The content-box property of the box-sizing uses the previous formula to calculate the element total width */
.box {
    width: 300;
    padding: 10px;
    border: 1px solid block;
    box-sizing: content-box;
}
```
**box-sizing: border-box**
```css
/* The border-box property of the box-sizing uses the width value to assign the element total width */
.box {
    width: 300;
    padding: 10px;
    border: 1px solid block;
    box-sizing: border-box;
}
```
**NOTE**: Just because a property is not declared doesn't mean that its value is zero. Remember that browsers have default properties.
Also, a **100% width**, when combined with **padding** and **borders**, can create elements that are larger than their parents. 


Padding
-------
We can set padding for every side of an element:
+ padding-top
+ padding-right
+ padding-bottom
+ padding-left

We can also use a **shorthand notation**:
```css
/* Applies to Top, Right, Bottom, Left*/
padding: 10px 20px 30px 20px; 

/* Applies to Top, Left and Right, Bottom */
padding: 10px 20px 30px;

/* Applies to Top and Bottom, Left and Right*/
padding: 10px 30px;

/* Applies to all sides*/
padding: 10px;
```
**Padding: Parent Element**
If the **width** property of an **block-element** is not set, the element will expand to fill the **parent**, and allow the **padding** to define the content **width**.
```css
/* padding is added inside the element causing the content area to shrink */
p {padding: 20px} 

/* padding is added outside the element width causing it to exceed its parent element size*/
p {padding:20px; width:100%}

/* You can use the box-sizing property to controle this behavior */
```

Margin
------
Margins represent the space between elements. They are applied outside of an element edge.

**Note**: Margins values are not calculated as part of an elements **width**. However, it affects the amount of space an element takes up on the page.


Margin Syntax
-------------
The **margin** syntax is similar to the **padding**.

**Individual properties**:
+ margin-top
+ margin-right
+ margin-bottom
+ margin-left

**Shorthand notation**:
```css
margin: 10px 20px 30px 40px;
margin: 10px 20px 30px;
margin: 10px 20px;
margin: 10px;
```

**Note**: Unlike **horizontal margin**, **vertical margin** collapse. This means if we put two elements stack on top of one another only one of the element **margin** is applied.







