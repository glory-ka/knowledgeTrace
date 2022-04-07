VIM SEARCH AND NAVIGATION WITH REGISTERS
========================================

SEARCH SCOPE
------------

**Search and Replace on the same line as the cursor**
```vim
:s/old/new/     " only replace the fist occurence of old on the line

:s/old/new/g    " replace all occurences of old on the line
```
**Search and Replace on the entire buffer/file**
```vim
:%s/old/new/    " only replace the first occurence of old in the buffer

:%s/old/new/g    " replace all occurences of old in the buffer
```


SEARCH SINGLE BUFFER IN NORMAL MODE
-----------------------------------

**SEARCH__GOBAL**
```vim
*    " search word under the cursor (forward search). Press * or n to navigate.
#    " same as * but searches backward. Press # or n to natigate.

:/ + char + <Enter>  " search all occurances of char. Press n to go to next match, and N to previous match. 

" Vim stores the latest searched text using * # or / in the [/ registiter]. Access it in command mode with <ctrl>r + /
:%s/<ctrl + r + />/newWord/g
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

DESABLE AND ENABLE SEARCH HIGHLIGHT
-----------------------------------
It is nice to have search result highlighted when we do work in vim. However, they don't go away after you are done searching and become annoying.
A simple way to remove the highlight on the words we searched is to enter the following commands: 
```vim
:nohls " no highlight search, in command mode

" or
:set hls! " set highlight search to the oposite of its current value (enable or disable)
```
> Be aware that you have to re-enable highlight for future search. Otherwise, the highlight will not appear in the next search.


JUMP/MOVE BETWEEN BUFFERS
--------------------
When you open a file, vim essentially loads it into a **buffer**. So, when you open a new file in the same windows -- without spliting the screen or in a separate tab -- the first file is still loaded in the previous buffer. To move between buffers, you can use the following methods:

1. Using a combination of keys
 ```vim
 " In normal mode
 <Ctrl> r
 ```
 
2. Using the register value that old the **alternate** buffer
```vim
" In command mode
:edit <ctrl>r + #
```
