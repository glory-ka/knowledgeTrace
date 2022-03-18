Vim tricks
==========

Some commands
--------------
See the following command:
```vim
ls   "list open buffers/files
pwd  "present working directory
cd <dirname> "change current directory
lcd <dirname> "local cd, change local/current buffer working directory
```
Record a Macro
--------------
```text
q + char 	: q start the recording a char gives it an id ---
q 		: stops the recording.
@ + char 	: replay the recording --> performed operations recorded.
```
Windows and Terminal in vim 8+
------------------------------
```vim
:vert term          " Open a vertical terminal
:bot  term          " Open a terminal at the bottom of the screen
:bot  15sp +term    " Open terminl at the bottom with split hight of 15
:sf <filename>      " split find. find a file and open it on a split screen
:vert sf <filename> " vertical split find

:20vsp . " Open a 20 unitwise vertical screen to act as file natigator
````
...

Buffers
-------
```vim
:buffers     " show open buffer and their number
:b 2         " jump to buffer number 2 -- :b <number>
```
Arguments
---------
The arguments contains the name of the file we passed to open vim on the terminal.
However, we can add to it and use for other things too.

```vim
:args  " Show argument list
:args **/*.yaml " Add file under the mentioned directory into the list args list.
                " After put new files into the argument list, it will open the first file in the list.
:sall           " Split all files in args into their own windows
:vert sall      " Split all vertically. short: vert sa
:windo difft    " Do a diff on every window.
```
Use vim as grep
---------------
You can use `vim` command to select specific text within a file and change it. To apply the change to multiple files, we can use the `args` variable.
Using **vimgrep** create a **quickfix list** that we can query using commands that start with `c`. See more in **help** documents. 

```vim
:vim /TODO/ %  " This searche the pattern "TODO" in the current buffer(%)

:args **/*.py  " We all all python file inside the directory tree into the args list

:vim /TODO/ ## " ## represent value of the args list

:cn            " Go to next match. This uses a quickfix list. Use help to read more about it.
:cp            " Go to previous match
:cl            " List all the matches

:cdo s/TODO/DONE/g " c do, replace all occurrence of TODO with DONE
```
To repeat the previous `c{x}` command,`cn` or `cp`, press `@:` in **normal mode**.

Registers
---------

**Registers as variable in normal mode**

Although some commands immediately interprete or extract the value of a register, some are not able to differentiate variables and registers.
To fix it, we simply have to use `@` before any register to write to it or extract its value.
```vim
" Initialize the register connect to the system clipboard to the value of the the register that hold the current file path
:let @+=@%  " You can the new value outside of vim.

:@:   " In normal mode. Use the value in the : register the last entered command.
```
---

**Macro with Registers**

Vim stores **macros** in registers. In fact, the name of the **macro** and the name of the **register** are the same. For exemple, **qw** stores the macro in register **w**.
What does it mean? Well, it means you can enter a macro once and edit it instead of recording it again and again until you got it right.
For example we can add a missing command at the end of a **macro** or edit the entire thing using **registers**.
```vim
" In command mode

:let @W=i;           " Upper case to append to register w. Enter insert mode (i) and add a comma (;)

:let @w=<CRTL>R + w  " Extract the macro and edit it as you want 
```
> This also means that if we are in normal mode, we can execute any register as if it was a macro. (e.i @+ in normal mode)

```vim
let @+='iThis is awesome' " don't forget the leading i to enter insert mode 
@+                        " This will display "This is awesome" in the buffer
---

**Expression Register(=)**

Use the **expression register** in **insert mode** to past the result of command into the buffer.
```vim
<CTRL>R + =
=23+34 <CR>      " The result is past at the postion of the cursor

<CTRL>R + =
=system('dir')   " Past the content of the current directory at the cursor position
```


