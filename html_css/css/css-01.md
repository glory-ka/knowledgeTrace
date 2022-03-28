Introduction to CSS
===================
> Browsers have default style that you override when you write css.
Browers styles may vary from browser to browser.

CSS systax
----------
CSS syntax contains **two parts**:

+ Selector
+ Declaration block
	+ Property
	+ value

**Note**: Space or whitespace doesn't matter inside a declaration block since the **property and value pair** ends with the comma. However, it matters in the **selection** side. You shouldn't separate selectors with whitespace.

**Additional Syntax rules**:
+ Shorthand
+ Pseudo-elements
+ Pseudo-classes
+ Inline Style rules

CSS Selectors
-------------
Selectors are used to target HTLM elements.

**The four most common type of the selectors:**
+ Element Selector
+ ID Selector
+ Class Selector
+ Descendant Selector

> An ID selector starts with hatag symbole (#), and a Class selector starts with dot (.).
Additionally, sytle applied with an ID selector overrides the one with Class selector.

**Note**: Selectors have weight which is used to determine their priority when there is conflict.
+ ID (#name) = 100
+ Class (.name) = 10
+ Element (name) = 1


An **Element-Specific** selector is a **class** or **id** selector that target a **specific element**.

Ex:
+ div#idName {}
+ div.className {}


Descendant Selector
-------------------
It allows to target an element based on where it is found within another element. 
The following is an example:

```css
/* Found an element div that has a paragraph and an anchor inside a paragraph*/
div p a {color: blue;}
```

Style Location
--------------
There are three options you can use to apply css on a html file:

+ External Stylesheet
+ Embedded Styles
+ Inline Styles

www.htmldog.com/references/properties
www.codedrop.com
www.w3c.org/Style/CSS
www.caniuse.com


CSS Normalization and Reset
---------------------------

Since browsers have **default built-in Style Sheet**, it is not uncommon that a page looks slightly different on different pages.
A way to make sure that a page always looks the same across browsers is to remove or reset all default style. This process is called **CSS Resets** or **CSS Normalization**.

> Unlike CSS Reset, Normalize keeps some of the useful default built-in browser Style.

You can find **CSS Reset** and **CSS Normalization** in these sites:
+ [MeyerWeb](http://meyerweb.com/eric/tools/css/reset)
+ [Html5 Doctor](http://html5doctor.com/html-5-reset-stylesheet)
+ [Murtaugh](https://github.com/murtaugh/HTML5-Reset)
+ [Normalize.css](http://necolas.github.io/normalize.css)




