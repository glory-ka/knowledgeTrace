KEY MAPPING
===========

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

TO SEE THE RESPERSENTATION OF A KEY
-----------------------------------
```text
1. TYPE ':'
2. THEN CLICK CTRL + v + \<KEY>
```

__SUBSTITUTE ^M WITH WHITE SPACE__
```text
:%s/^M//g		:TO enter ^M press: ctrl + v + m --> This will replace all
occruence of ^M with an empty string. (help ffs, help ++ff)
```

MAP KEYS THAT DIFFICULT TO IDENTIFY
-----------------------------------
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