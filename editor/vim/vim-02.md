VIM ENVIRONEMENT
----------------

**OPEN COMMAND HISTORY**
1. First option:

  **In command mode** press **Ctrl + f**

2. Second option:

  **In normal mode** press **'q' + ':'**

---

HELP AND INFO OPTIONS
---------------------


**show how vim load data at bootup**
```vim
:help vimint
```
<p>&nbsp;</p>

---

OPEN VIMRC FILE
------------------
```vim
:e $MYVIMRC
```


RELOAD CONFIGURATION FILE VIMRC
-------------------------------
```vim
:source % " or so $MYVIMRC or ~/.vimrc
```


SEE ENV VARIABLE AND VIMINIT
------------------------------
```vim
echo $MYVIMRC
echo $HOME
```
```vim
:help viminit
```

Show the list of key-map used by vim
------------------------------------
```vim
:help index.txt
:help map-which-keys  " show info on how to map key
:map!                 " display the list of keys that are currently mapped
:map                  " display the list of all mapped keys
:map verbose <key>    " return all key-map that contain <key>
```
---

DISABLE BELL SOUND
------------------
```vim
1. set belloff=all  "Option one
2. autocmd GUIEnter *set vb t_vb=  " Option two for Gvim or vim
3. :help visualbell
4. set noerrbells
5. set vb t_vb=
```
---

LINE MARKER AND LINE SIZE
-------------------------
```vim
1. set textwidth=122   "set the length of a line
2. set colorcolumn=122 " put a color at the location of the max line length
```

Vim regex
---------

#### **non matching group**
**Symbole: (...)@<=**

Example:

```vim
\v(\w+)@<=(command)
```
