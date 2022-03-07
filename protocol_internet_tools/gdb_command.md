GDB

```text
Break points:

b F                    	Set a break-point at function F.
b *A                   	Set a break-point at absolute address A
b N                    	Set a break-point at line number N.
b N:F                  	Set a break-point at line number N at file F.

info b                  Lists break-points.
cond B cond             Set a condition to a break-point B.
cond B                  Remove the condition of a break-point B.
delete B                Delete a break-point B.

```

```text

Stepping:

stepi or si             Execute one machine instruction (follows a call).
step or s               Execute one C-program statement (steps into functions).
stepi N                 Do N machine instructions.
nexti or ni            	Same as si but execute calls as one instructions.
next or n              	Same as ni but execute functions as one statement.
bt                     	Show names of the stack frames.
up                     	Go up one stack frame.
down                   	Go down one stack frame.

```

```text

Examining:

info reg           	List contents of registers.
p V                  	Print contents of a variable V.

x /CT A            Examining memory where:
                        C   number of units to display. 
                        T   x hex integer.
                            d dec integer.
                            u unsigned dec integer.
                            o octal integer.
                            c character.
                            s null terminated string.
                            i as machine instruction.
                        A   an absolute address or 
                            $reg pointed by some register.

```

```text

(gdb) unset env    <=> shell$ env -i ./my_program
(gdb) info proc mappings	: show the mapping of the memory.
(gdb) info files                            : print the true address of file regions
(gdb) del			: delete all breakpoints.
(gdb) define hook
 
(gdb) define hook-stop		: The hook enable command to run at every checkpoint stop.
>info register			: print the register check point.
>x/24wx $esp			: print [24 words] from the stack starting at 'esp'.
>x/2i 	$eip			: print the next [2 instruction] at check point.
>end				: exit the hook-stop mode.

(gdb) r				: short for 'run'
(gdb) c				: continue execute or restart form the beginning. Press ENTER, pass value to the program, if needed.
(gdb) x/wx $esp+0x5c		: show value at $address.


(gdb) x function_name		: Examime function by printing its address.
(gdb) p function_name		: Print the function address.
(gdb) x/s $address		: Return a STRING, starting at $address to END OF STRING.


(gdb) set { int }addressToWriteTo=ValueToWrite
(gdb) set pagination off
(gdb) set disassembly-flavor intel

(gdb) command                         : Similar to "define hook-stop"
(gdb) print *ObjectNameInTheHeap      : print the content of a struct 
2068862820

```