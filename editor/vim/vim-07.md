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
Windows and Terminal in vim 8+
------------------
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
