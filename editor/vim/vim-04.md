VIM SEARCH, REGISTERS AND NATIGATION
====================================

SEARCH SINGLE BUFFER IN NORMAL MODE
-----------------------------------

**SEARCH__GOBAL**
```vim
*    " search word under the cursor (forward search). Press * or n to navigate.
#    " same as * but searches backward. Press # or n to natigate.

:/ + char + <Enter>  " search all occurances of char. Press n to go to next match, and N to previous match. 
```
<p>&nbsp;</p>

**SEARCH__LOCAL**
```text
t + char	: moves cursor behind next instance of 'char' within a line.
f + char	: moves cursor on next instance of 'char' within a line.
;		: navigates to the next instance of 'char' after f/t + 'char' 

T + char	: LOOKUP BACKWARD
F + char	: LOOKUP BACKWARD
```
---
