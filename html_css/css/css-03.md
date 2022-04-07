Color
-----
There are three ways to define colors in css:
+ **Hexadecimal notation**
+ **RGB Color**
+ **HSL (Hue, Saturation, Lightness)**
    + Hue: 0 - 360  Saturation: 0 - 100%  Lightness: 0 - 100%

#### __Opacity__

We can use the **opacity** property to change the opacity of an element. However, it changes the **opacity** of the entire element (foreground, background, border, ...). CSS3 added a new feature to allow developer to change the opacity on specific parts of an element. This possible via the **RGB** and **HSL** **Alpha** (**RGBA**, **HSLA**).
```css
div {
    background: rgba(247, 235, 185, .5);
    color: #000;
    border: hsla(0, 100%, 0%, 0.5)
}
```

Unit of Measurement
-------------------
The **for most common** units of measurement in CSS are:
+ px
+ em
+ rem
+ %

**Pixel**:
There are **absolute** (**fixed**) values.

```css
p {
    font-size: 16px;
    margin-bottom: 16px;
}

.sidebar {
    padding: 20px;
    width: 10px;
}
```
...

#### __em__:

This is a **relative** value (relative to the **font-size** their **parent element**).

```css
/* Set the font-size to the maximum of the default font-size of the browser*/
body {
    font-size: 100%;
}

/* Set font-size to 300% of body font size */
h1 {
    font-size: 3em;
}

/* Set font-size to 100% of body font size */
p {
    font-size: 1em;
}
```
...

#### __rem__:

This is also a relative value (relative to **font-size** of **root element**).

...

#### __Percentage (%)__

There are used in responsive layouts. They let containers expand or shrink based on the viewport size.


Vendor Prefixes
---------------
CSS **vendor prefixes** allows browsers manufactures to add support for new CSS features before they are fully supported by all browsers.

#### __Common Vendor prefixes__:

+ -webkit-  WebKit(chrome, safari, iOS and Android)
+ -moz-     Moxilla(Firefox)
+ -ms-      Microsoft (Internet Explorer)
+ -o-       Opera(Opera)

[Which vendor prefix](http://ireade.github.io/which-vendor-prefix)
