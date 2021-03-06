TAB AND SPLIT NATIVATION
========================

Open Windows
-------------
```vim
:sp filename	" open filename in horizontal split
:vsp filename	" open filename in vertical split
```

Navigate Windows 
----------------
**Transform split screen**
```vim
CTRL + w + T      : tranform the current split screen into a TAB
```
**Move between split screen**
```vim
CTRL + w + <h,j,k,l>  : shift focus of split on DIRECTION of current split
CTRL + w + w          : shift focus to next split
```
**Universal split screen resize**
```vim
CTRL + w + =      : return to equal split
CTRL + w + _      : minimize current split
CTRL + w + |      : maximize current split
```
**Change split screen position**
```vim
CTRL + w + r          : Rotate shift screen (swap position)
CTRL + w + <H,J,K,L>  : Move current screen to fill DIRECTION 
```
**Resize horizontal split (:split)**
```vim
CTRL + w + n+     : increase size of current split by n
CTRL + w + n-     : decrease size of current split by n
```
**Resize vertical split (:vsplit)**
```vim
CTRL + w + <    : decrease size of current split
CTRL + w + >    : increase size of current split
```

Open Tabs
---------
```vim
:tabnew        " Create and unnamed buffer/file in a new tab
:tabnew <name> " Create and open new buffer
:tabnew <path> " Open existing file in new tab
```

Navigate Tabs
---------------
**In Normal mode**
```vim
" go to next tab
gt	 (or :tabn)  

" go to previous tab
gT	 (or :tabp)   

" go to nth tab
n+gt (or :tab n) 
```
...

**In Command mode**
```vim
" go to first tab
:tabf

" go to last tab
:tabl
```
...

**Change tab position**
```vim
" move current tab to last position
:tabm	

" move current tab to nth position
:tabm n		        
```
