Make search using a value in register
-------------------------------------
Press `/` , then press `ctrl` + `r`, then  `=`

After that enter the register name, or variable for that matter, preceeded by a `&` symbole. Typically we use `$`, but not in this case -- and some other cases too.

> You can replace search (`\`) by any other action or command. Ex: `:`, `:read`


Vim range based command
-----------------------
You can search for a sequence of characters or words by typing `?<keywords>` in **normal mode**. However, we can also use a similar appraoch to copy a past a line into the current cursor position. To do this follow the pattern bellow:
```vim
:?<keyword>t.
```
> Note that we started with a `:` then `?`.

Multiple Window useful keys
---------------------------
When you have more than one window open, it can take some keystrocks to close one of them.
Instead of closing a window, you could simple make the current window, the **only** window with the following keys:
```vim
<ctrl> + w + o
```
Alternatively, we can enter the following command:
```vim
:only "for window
:tabonly : for tabs
```

Delete, Copy and past using registers
-------------------------------------
[source website](https://www.baeldung.com/linux/vim-registers)

**Vim has ten different types of registers:**

1. The unnamed register “”
2. 26 Named registers “a to “z (or “A to“Z)
3. The small delete register “-
4. 10 numbered registers “0 to “9
5. The selection and drop registers “*, “+, and “~
6. Three read-only registers “:, “., and “%
7. The alternate file register “#
8. The expression register “=
9. Last search pattern register “/
10. The black hole register “_

We have roughtly two types of register. The **quote (")** and the **plus (+)** registers.

### __User quote to access registers__

To delete a line and store it content into the a register you can use the following keystrocks in **normal mode**:
**double quote** + **register name** + **action**
```vim
"<register-name>d
```

The **register name** is usually a single characters as is the **action** (**d** for delete, **p** for past, and **yy** for copy/yank).
The deletion goes into the **register** that has the name we specified.

> If we don't enter a register name after `"` in **normal mode** vim would assume that we want to use the unnamed register.

> We need to press Enter to delete a line into a register, but it is not necessary when we past into the current buffer. The content of the register is put into the buffer as soon as we enter the last key.

**Note**: the last command(**EX Script**) gets stored in the `:` register.
For example, if we type `:s/old/new/` and then type `":p`, the command we just type we be pastd onto the screen. **:s/** does an line search, and **:%s/** does a global search.

We can see the value of the registers using the follwing commands:
```vim
:register  "Show all registers
:register : 0 "Only show register : and 0
```

### __unnamed register__

The **unnamed register** is the default register where vim stores all the **delete, copy/yank** data. In addition, the **unnamed** register is also used even when we specify another register or when some data are stores on other registers.

### __named register__

We can **delete** and **copy/yank** text into a named registers. We can **retrive/past** from them too. However, there are only **26 named registers**. They use the letters a-z and A-Z (lowecase and uppercase). Both the **lowercase** and **uppercase** letters point to the same register. However, **copy** operations (**copy/yank** and **delete**) using **lowercase** register name overwrite existing data wherease **uppercase** register name append data to the existing data. 
```vim
"ayy  "copy into and overwrite regiter a
"Ayy  "copy into and append to regiter a
```

### __number register__

There are **10 number registers**. When we **copy/yank** data, it is stored in register **0**. Register **1** takes deleted data that are to big to be stored in the **small delete register (-)**.

The **registers 2-9** keep the history store the deletion history. Of course, new deletion goes to **register 1** and the old deletions get pushed out of **register 9**.

    

### __plus register__

The plus register connects to the system **clipboard**, so we can copy out and into vim.
To use it we can enter the following keys in **normal mode**.
```vim
"+yy
```
> This sequence of keys will copy the line at the cursor position. 

We can also set the vim **clipboard** to the **unnamed clipboard** to copy data into the **system clipboard**.
This is possible with the follwing command:
```vm
set clipboard=unnamed
```

Change directories
------------------
One quick and easy way to change dirctory is to `lcd` (local cd) to the head of the current file. The current file is denoted by `%`.
The command would look as the following:
```vim
lcd %:h
```
This change the directory back to the location of the current file.
