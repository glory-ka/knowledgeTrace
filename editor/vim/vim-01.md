**EDIT**

```text
.: replay the last command and keystrocks.
dd: delete
yy: copy
p: past
u: undo
ctrl-r: redo
```
---

**OPEN COMMAND HISTORY**
* First option: 
In command mode press **Ctrl + f**

* Second option: 
In normal mode press **'q' + ':'**

---

**HELP AND INFO OPTIONS**


**show how vim load data at bootup**
:help vimint

<p>&nbsp;</p>

**show the list of key-map used by vim**
```vim

:help index.txt
:help map-which-keys	" show info on how to map key
:map!									" display the list of keys that are currently mapped
:map									" display the list of all mapped keys
:map verbose <key>		" return all key-map that contain <key>
```

**MOVE COMMAND**

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
` + char	: go to a line marker called 'char'
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

**INSERT MODE**
```text
o		: adds space bellow cursor
O		: adds space above cursor
```
...

```text
VISUAL MODE:
V :THEN: MOVE COMMAND		: Enter visual mode then select lines, and copy [y]
v				: Selects words within a line, and copy [y].
ctrl + v 			: select rows

[ctrl + v] -> select columns :THEN: [I] -> insert mode :THEN: [Esc] 
This replaces all the selected columns with text entered in [I]
```

---
**REPLACE/CHANGE CHARACTER(S)**
```text

{c + move command} 	: replaces characters within the range of move command
and ENTER INSET MODE.
c + w			: changes word --> removes word under cursor and ENTERS INSERT MODE.

{d + move command} 	: deletes characters within the range of move command
dw			: deletes word --> deletes one word at a time.

D: removes all text to the right of the cursor and enters insert mode.
```
---

### __SEARCH__

**SEARCH__GOBAL**
```text
*	: place cursor on word :THEN: press [*] to search and navigate.
/ + char + 'Enter' :THEN: [n] to navigate to search forward.
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
___


### __TRIPLE COMBO \[c,d] \[t, f, i] \[char, move command]__


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
___

__RECORD A MACRO__
```text
q + char 	: q start the recording a char gives it an id ---
q 		: stops the recording.
@ + char 	: replay the recording --> performed operations recorded.
```
___

__COMBO__
```text
0 + w 	: same as ^
d + d 	: delete line
d + w 	: delete word
d + n+w	: deletes <n:number> word 
```
___

__CREATE NEW FILE__
``` text
:new -> create a new file
:w [path] -> save file to path
```
___

__OPEN VIMRC FILE__
```vim
:e $MYVIMRC
```
___

__RELOAD CONFIGURATION FILE VIMRC__
```text
:source % (or so $MYVIMRC or ~/.vimrc) 
```
___

__SEE ENV VARIABLE AND VIMINIT__
```vim
echo $MYVIMRC
echo $HOME
```
```vim
:help viminit
```
___

__TAB AND SPLIT NATIVATION__
```vim
" go to next tab
gt	 (or :tabn)  

" go to previous tab
gT	 (or :tabp)   

" go to nth tab
n+gt (or :tab n) 

" go to first tab
:tabf

" go to last tab
:tabl

" move current tab to last position
:tabm	

" move current tab to nth position
:tabm n		        
```
..

```vim
:sp filename	" open filename in horizontal split
:vsp filename	" open filename in vertical split
```
..

```text
CTRL + w + T			: tranform the current split screen into a TAB

CTRL + w + <h,j,k,l>	: shift focus of split on DIRECTION of current split
CTRL + w + w			: shift focus to next split
CTRL + w + n+			: increase size of current split by n
CTRL + w + n-			: decrease size of current split by n
CTRL + w + =			: return to equal split
CTRL + w + _			: minimize current split
CTRL + w + |			: maximize current split

CTRL + w + r			: Rotate shift screen (swap position)
CTRL + w + <H,J,K,L>	: Move current screen to fill DIRECTION 
```

__KEYS AND FORMAT__
```text
:%s/
//g		:TO enter ^M press: ctrl + v + m --> This will replace all
occruence of ^M with an empty string. (help ffs, help ++ff)
```

__TO SEE THE RESPERSENTATION OF A KEY__
```text
1. TYPE ':'
2. THEN CLICK CTRL + v + \<KEY>
```

__MAP KEYS DIFFICULT TO IDENTIFY__
```text
1. ENTER INSERT OR COMMAND MODE
2. TYPE: set \<KEY1-KEY2>='Press Ctlr + v :THEN: Press KEY1+KEY2' 
3. IF RESULT OF STEP 2 HAS SYBMOL '^\[' REPLACE IT BY '\<Esc>' 
4. FINALLY USE \<KEY1-KEY2> TO MAP YOUR KEYS WITH MAP FUNCITION
```

**Example**
```vim
set <A-K>=ê  " ê = Alt + j
nnoremap 	<A-k> mz:m+<cr>`z 
```
___

### __DISABLE BELL SOUND__
```vim
1. set belloff=all  "Option one
2. autocmd GUIEnter *set vb t_vb=  " Option two for Gvim or vim
3. :help visualbell
4. set noerrbells
5. set vb t_vb=
```
___

### __LINE MARKER AND LINE SIZE:__
```vim
1. set textwidth=122   "set the length of a line
2. set colorcolumn=122 " put a color at the location of the max line length
```

