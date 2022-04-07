Typography
==========
**Typography** is the art of arranging type for readability and to engage and communicate with the reader.

Typeface
--------

A **Typeface** is a set of fonts designed with common characteristics, composed of glyphs.
It is often referred to as **font** or **font-family**.

There are five type of **typeface**:
+ Script Fonts
+ Decorative Fonts
+ Monospace Fonts
+ Serif Fonts
+ Sans-serif Fonts


Font Family
-----------

```css
body {
    font-family: Helvetica, Arial, Sans-serif;
}
```

The **font-family** property sets the **typeface** in css. We can specify multiple **font type** in order of preference.
This list of fonts is often referred to as a **font stack**.

A browser would apply the first font it founds and stop. Browsers do not have all existing fonts installed. That is why the last font is often a generic font that we assume every browser has or knows how to render.

Generic font-family Names
-------------------------

There are **five generic font-family**:

+ serif (serif fonts)
+ sans-serif (sans-serif fonts)
+ cursive (script or decorative fonts)
+ fantasy (decorative fonts)
+ monospace (monospace fonts)

[CSS Fonts](https://www.cssfontstack.com)


Font-family and Quotes
----------------------

If a **font name** contains a **number** or a **special character** other than an **hyphen (-)** we need to escape it with a **backward slash (\)**.

```css
p {
    font-family: Ahem!, sans-serif; /* Not valid*/
    font-family: Ahem\!, sans-serif; /* escaped, valid */
}
```

We could also wrap the **font name** in a **double or single quote**.

```css
p {
    font-family: 'Ahem!', sans-serif; /* single quoted, valid*/
    font-family: "Ahem!", sans-serif; /* double quoted, valid*/
}
```

**Note**: Never quote **generic font name**, but it is recommended to quote **font names** that contain a space.

```css
p {
    font-family: "Gill Sans", sans-serif; /* valid and recommended */
    font-family: Gill Sans, sans-serif; /* valid */
}
```

Font-weight
-----------

The **font-weight** property determines the amount of thickness of a **typeface**.
Although **font-weight** accepts keywords such as **bold** or **normal** to determine the thickness of a word, these keyword map to numerical values.

Some **font-family** are not able to display certain level of thickness, so the browser selects the nearest thickness value possible.
Additionally, if you choose a **font-weight** value that doesn't exist, the browser also select the nearest **typeface**.

The thickness values go from **100** to **900**:
```css
font-weight: 100; /* lightest or thinnest */
font-weight: 200;
font-weight: 300;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900; /* darkest or thickest */
```

The **font-weight** values roughly corresponds to the following **keyword**:
+ 100 - Thin
+ 200 - Extra light (Ultra light)
+ 300 - Light 
+ 400 - Normal
+ 500 - Medium
+ 600 - Semi Bold (Demi bold)
+ 700 - Bold
+ 800 - Extra Bold (Ultra bold)
+ 900 - Black (Heavy)

#### **Default font-weight values:**
+ **normal** is equal to **400** and is also the default for body text.
+ **bold** is equal to **700** and is the default for headings.

> Note: There are two additional keywords: bolder and lighter.
The value of these keywords are inferred from the parent element of the tag.


Font-style
----------
There are only **three font-style** values:
+ Italic
+ Oblique
+ Normal

```css
p {
    font-style: italic;
}

em {

    font-style: normal;
}
```

Font-size
---------
There are **three** units we can use to attribute a value to the **font-size** property:
+ px  : absolute value/fixed value
+ em  : Relative value, calculated relative the nearest ancestor element
+ rem : Relative value, calculated relative to the root element

The default browser **font-size** is **16px**.

> Avoid using decimal value for pixel unit (px). Browsers have different interpretation of such values.
However, it is common to use decimal values for em or rem units.


Web font
--------
**Web fonts** are additional fonts that we can download or load from an external source. They are usually used to supplement the built-in browser fonts.

The following is the general syntax to create **web font**:

```css
@font-face{
    font-family: 'name of font';
    src: url(my-font.woff); /* relative path */
    src: url(http://example.com/fonts/my-font.woff) ; /* absolute path */
}
```
[Generate Web Font](https://www.fontsquirrel.com/tools/webfont-generator)
[Web font tricks](https://lnkd.in/css-using-font-face)
[Google fonts](https://fonts.google.com)


Text-decoration
---------------
```css
/* shorthand */
text-decoration: underline red solid;

/* longhand */
text-decoration-line: underline;
text-decoration-color: red;
text-decoration-style: solid;
```

Text-align
----------
The **text-align** property is used to align content **within a block element**. It does not work with **inline** elements.

> Note: To use text-align with inline element, use the display property to change its behavior (display: block; display:inline-block).

The **text-align** property applied to a **block** element is inherited to all children elements regardless of their type.

```css
text-align: center;
text-align: right;
text-align: left;
text-align: justify;
```


Line-height
-----------
The **line-height** property sets the height of the space between two lines of text.
It is closely related to **font-size**.

**Few rules:**

+ If the **font-size** and **line-height** have the same value, there would be not space between the lines.
```css
p {
    font-size: 16px;
    line-height: 16px;
}
```

+ If the **line-height** is smaller than the **font-size**, the line will overlap.
```css
p {
    font-size: 16px;
    line-height: 10px;
}
```

+ If the **line-height** value is in percent(%) or unitless, its value would be relative to the **font-size**.
```css
p {
    font-size: 16px;
    line-height: 150%; /* 150% of font-size */
    line-height: 1.5; /* 1.5 of font-size */
}
```

**Line-height** value can take the following units:
+ px
+ percent (%)
+ ems
+ rems
+ unitless

