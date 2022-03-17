VIM CONFIGURATION FOR GLOBAL NAVIGATION
=======================================

**Lauch vim using vi binary:**
```vim
vi -Nu NORC <filename>
" or
vi -Nu NONE <filename>
```
**Option:**
```
Nu        - non compatible mode
NORC      - no rc (don't load built-in default config)
```

Reload configuration
--------------------
Configure and reload filetype, indentation and plugin configurations.

```vim
:set filetype plugin indent on
:filetype detect
```
Support backspace
-----------------
Although the **backpace** configuration is correctly set on **gvim**, the default **vim** behavior is to not allow deletion of previous insertions in **insert mode**. So, if you enter **insert mode**, type something, **escape insert mode**, then enter **insert mode** again; you can not delete the previous insertion using **backspace**.

**To change that behavior set backapce to "start", "end of line" and "indent"**

```vim
:set backspace=start,eol,indent
```

Switch buffer
-------------
By default **vim** doesn't allow you to switch buffer before it is saved to disk and unloaded.

Buffer in this case means an unsaved file. And we can switch buffers by using a command like ```: edit <filename>```.

To go around it and switch buffer while keeping all the unsaved changes, we must change the buffer setting to **hidden**.

```vim
:set hidden
```

Open and Navigate directory
---------------------------
You can open a directory and see it content as you would with any file. However, directory have special command that you can use to make changes.

**Create a new file**
To create a new file type `%`, then enter the file name.

**Create a new directory**
To create a new directory press `d`, then enter the directory name. You can enter a directory by pressing `Enter` (`<cr>`).

**Learn more**
To learn more type `F1` for help.

Run time path and variables
---------------------------
To view the run time path type:

```vim
set rtp? " or set runtimepath?
```
The first path of the **runtimepath** is almost always the **~/.vim** path.

It can be helpful to have the location or path of the /.vim directory in a variable for quick access. We can extract it with the follwing command:

```vim
let $RTP=split(&runtimepath, ',')[0]
let $RC="$HOME/.vim/vimrc"
```
Global file marker
------------------
To set a global marker, you set a marker on a line within a file using `m + character`, but the character has to be in **capitale** so it can be reffered to outside the current buffer.

To go to a marked line within a file, type `' + character`, where **character** is the marker name.

See hidden characters
---------------------
**Special characters**

To see hidden characters, we can use the following command:
```vim
:set list
```

To then hid these special characters we can enter the following:
```vim
:set list!
```
**Color column**
To set a color column at line 80 (only on the current buffer), we can enter the following command:
```vim
:setlocal colorcolumn=80
```

Set tab configuration
---------------------
Tab configuration may vary depending on languages. However, most commonly, it is best to set **tab** to four spaces.

```vim
:set shiftwidth=4 tabstop=4 softtabstop=4 extendtab autoindent smartindent
```

To change the tab format of a currently open file after we changed the vimrc file, we can type the following command:
```vim
retab
```
We generally don't have to do that since the **tab** would automatically readjust, but in some case, the current **tab** might not use the actully **tab** characters. That is why `set list` can be helpful. If the **tab** that the current file contains are not the normal or classical **tab** characters, we have use the `retab` command. 

Set your Path
-------------
It is important to correctly set your path to make your work flow easier. This allows searching for files, or jumping to file.
We can use the `find` command to jump to a file. This is useful when we want to look inside a referenced file or imported file (ex: **import \<filenme>**, **include(\<filename>)**).
Use the `find` command as shown bellow:
```vim
find <filename> "filename doesn't need an extension
```
**path**
To see the default path value type
```vim
:set path?  "Display the path information

" The output should look like this: path=.,/usr/inclulde,,
" dot, /usr/include, empty string
```
The **dot (.)** represents the directory of your current file.
The **/usr/include** could be path to the **vim** runtime.
The **empty string** represents the current working directory.

> vim allows the user to change it current working directory, so the directory of the current file and the current working directory might not be the same.

One way to allow easier search into the current project folder is to set the path to **the current file (.)** and the **current directory along all its children (\*\*)**.
This would look like the following:
```vim
:set path=.,**
```
> It might not be a good idea to set the path all files and subdirectories in a large project, but instead have a more targeted setting. This is because vim would index the current directory and all its children. 

**Local path**

One important thing with paths is that the path variable is set when we first open vim. This means that if we open any other file afterward within vim, the path of the first file would be the same for every file.

So, we might not want all buffer to have the path set to `path=.,**`. This is because the `**` makes vim index the entire directory. And in some project, like **javascript with node** we might have lot of subfolders. This would slowdown the search. So, it is better to not add this path in the **vimrc**.

To circomvent that we have to set a local path that target specific directories were we know our code resides. We can manually set each buffer we open with the appropriate path or we can create a vim configuration that applies to certain filetype.

>In order for this setting to work, we have to first enable the filetype detection, then create a configuration file for a target file type (ex: .py, .c, .cpp). To not override the default vim configuration for a type of file, we have to put the customed configuration file in the /vim/after directory. The customed configuration file should have the same name as the file type it seeks to customize.
ex: python.vim for python file.  

In your customed configuration file for a file type, add the following lines.
> ex: ~/.vim/ftplugin/after/python.vim

```vim
setlocal path=.,./src/**,./doc/**
```
This is the same setting as in the vimrc, but this time, once the **filetype** is detected, vim runs all configuration related to that file, and that would inclde the configuration file in the **~/.vim/ftplugin/after** directory for that file type.

Inlcude search
--------------
Vim uses a special search, using regex pattern, to search for files that a programmer includes/imports into his main file.
This **include pattern** varies by language. For example, in python the pattern looks for the **import** and the **from** keywords. Afterward, vim tries to resolve the expression after the **import** and **from** statement into a file path. It first add a **.py** in the case of python (**suffixesadd=.py**, that's the variable used to add the extension).
If the file is not found, it passes the expression into the **includeexpr** function (it's a variable that references a function) to find the corresponding file. 

To find out what include search pattern is configured for your current file type:
```vim
:set include?
:set includeexpr?
```
> The include search extract the name of imported file, then a file search occurs using the configured path. So, that is also a reason why configuring path is important.

**Include search based**
We can use a palett of key combination to use the pattern defined in the `include` to go to files referrence by the `include` or `import` statements and search within it. Simply put, we can search inside **imported** files and jump there when a match is found. This is mostly used to search for and read functions definition.

```vim
" import keras
" keras.flatten()
:ij flatten  " include jump flatten, jump to the keras file and search for 'flatten'
```
To see **import** statement that were successfully linked (resolved) to files, use the following command:
```vim
checkpath!
```

Tailored include pattern
-----------------------
We sometimes have to write our own regex pattern to tell vim how to correctly resolve some **import** statement. For example, **from** xxx **import** yyy **as** ppp.
In this case however, we don't do what vim does which is to match the **import** or **from** keywords and somehow take the expressions right after them. We instead a matching these expressions directly. We also create our modify **includeexpr**. 

Here is an example for python:
```vim
set include=^\s*\(from\|import\)\s*\zs\(\S\+\s\{-}\)*\ze\($\| as\)
```
Because of how the include configuration work (don't ask me), we have to escape some backslash characters.
```vim
:%s/\(|\|\\\)/\\\1/g
```
**Next**
We can build a function that use the new include pattern to convert the **import** symboles into file paths.
```vim
function! PyInclude(fname)
    let parts = split(a:fname, 'import')
    let l = parts[0]
    if len(parts) > 1
        let r = part[1]
        let joined = join([l, r], '.')
        let fp = substitute(joined, '\.', '/', 'g').'.py'
        if len(found)
            return found
        endif
    endif
    return substitute (l, '\', '/', 'g').'.py'
endfunction

setlocal includeexpr=PyInclude(v:fname)
```

define search
-------------
Building on top of the files we linked using the **include** expression/pattern, we can now make a more targetted search into files that we successfully **imported**. 
The normal behavior of a **include search (ij \<keyword>)** is to traverse linked files to search a keyword. However, using the **define** buffer **regex** we can decide to match specific **patterns**, hence jumping to, for example, a **class** definition instead of a random string containing our searched keywork. 

See bellow an example for python:
```vim
setlocal define=^\s*\<\(def|class) "def : python methond and class: python class
```
As we did with the **include** we have to replace the escape the backslash.
```vim
:%s/\(|\|\\\)/\\\1/g
```
Now we can jump to/search a keyword -- in this case it would take us to either a **def** or **class** -- using the following commands:
```vim
dj <keywork>
```

tag search
----------
Some languages organize their **import** or **include** statements in a way that is not easy to match using a **include** regex pattern. In that case, we can use `ctag` to index all the language symboles. However, it requires a **ctag configuration file**.


[source](https://www.youtube.com/watch?v=Gs1VDYnS-Ac)

[Slide](https://docs.google.com/presentation/d/19m3KUN03OMwj9m_Ut4GTt1ifXuDPd2wiApy0RCtP7n4/edit#slide=id.g9417be01f0_0_706)


Quick command summary:
---------------------
```vim
:set rtp?    "check runtimepath
:set backspace=start,eol,indent "make previous edits removable in insert mode (press backspace)
:set filetype plugin indent on

:setlocal path=.,**  "allow search into subdirectories
:find <filename>     "works well if path+=**

:set ft?             " show the filetype of the current file
:filetype detect     "used to reload a file type specific configuration file (~/.vim/after/python.vim)


:set define? 
:set include?
checkpath! " Check whether files referred by the import or include statement were included

dj <keywork>    "define jump, search using 'define' pattern
ij <keywork>    "include jump, search using 'include' pattern

:set list! " See hidden characters
:set list

:set hidden  " leave current buffer without saving
:b <buffer name> " jump to a buffer
:first "go to first open buffer

:retab  "after changing tab setting, retab file that doesn't use conventional tab characters 
```



