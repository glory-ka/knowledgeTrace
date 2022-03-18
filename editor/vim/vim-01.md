EDIT AND MOVE IN VIM
====================

EDIT
----

```text
dd: delete
yy: copy
p: past
u: undo
ctrl-r: redo
.: replay the last command and keystrocks.
```
---


MOVE COMMANDS
-------------

```text
j	: down
k	: up
l	: left
h	: right
```
..

```text
{ 	: moves up by a block (of code)
} 	: moves down by a block (of code)
```
...

```text
gg	: moves to begining of file.
n + gg	: moves to the nth line.
G	: moves to end of file.
zz	: scrolls the current text position to the middle of the screen.
```
...

```text
ctrl e	: scrolls down the screen.
ctrl y	: scrolls up the screen.
```
...

```text
ctrl u	: scrolls up one halft screen.
ctrl d	: scrolls down one half screen.
```
...

```text
ctrl f	: scrolls down one full screen.
ctrl b	: scrolls up one full screen.
```
...

```text
%	: if cursor on one pair, move to the other pair '{},[],{}'
```
...

```text
m + char	: put a marker to a line and name it 'char'
` + char	: jump to a line marker called 'char'
```
..

```text
0 + w	: move to the firt word of the line.
^ 		: same as 0 + w --> move to the first word of a line.
$ 		: moves to the end of a line.
g_		: moves cursor to last non-white-space character of a line.

w	: moves foward a word at the time.
b	: moves backward a word at the time.

B and W : same as b and w, but separate word by space.
>>	: indents to the left --> adds tab before line.
```

**ENTER INSERT MODE**
```text
o		: adds space bellow cursor
O		: adds space above cursor
```
...

**VISUAL MODE**
```text
V :THEN: MOVE COMMAND		: Enter visual mode then select lines, and copy [y]
v				: Selects words within a line, and copy [y].
ctrl + v 			: select rows

[ctrl + v] -> select columns :THEN: [I] -> insert mode :THEN: [Esc] 
This replaces all the selected columns with text entered in [I]
```

---

MOVE + EDIT
------------

**REPLACE/CHANGE CHARACTER(S) USING TWO KEYS**
```text

c + {move command} 	: replaces characters within the range of move command
and ENTER INSET MODE.
c + w			: changes word --> removes word under cursor and ENTERS INSERT MODE.

d + {move command} 	: deletes characters within the range of move command
d + w			: deletes word --> deletes one word at a time.

D         : removes all text to the right of the cursor and enters insert mode.
```
---


**REPLACE/CHANGE CHARACTER(S) USING THREE KEYS**

KEYS 1: **c**, **d**
KEYS 2: **t**, **f**, **i**
KEYS 3: **char**, **move command**


##### __\[DELETE FORWARD FROM CURSOR UP TO, BUT NOT INCLUDING, 'CHAR']__

```text
d + t + char	: deletes everything to the right up to and excluding char
c + t + char	: same as d + t + char THEN we enter INSERT MODE
```
<p>&nbsp;</p>

##### __\[DELETE FORWARD FROM CURSOR INCLUDING 'CHAR']__

```text
d + f + char	: delete everything to the right up to and including char.
c + f + char	: same as d + t + char THEN we enter INSERT MODE.
```
<p>&nbsp;</p>

##### __\[DELETE FORWARD INSIDE BLOCK -> \[], {}, (), '', ""]__

```text
d + i + Block 	: Delete everything Inside Parenthesis.
c + i + Block 	: same as d + i + Block THEN we enter INSERT MODE.


x	: deletes single character at a time. 
r	: replaces a single character.
R	: replaces multiple characters -> Enter replace mode.
```
---

...


CREATE NEW FILE
-----------------
``` text
:new -> create a new file
:w [path] -> save file to path
```
---

USEFUL KEY COMBINATION
----------------------
```text
0 + w 	: same as ^
d + d 	: delete line
d + w 	: delete word
d + n + w	: deletes <n:number> word 
```
