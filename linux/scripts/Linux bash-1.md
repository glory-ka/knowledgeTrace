[source](https://acloudguru.com/blog/engineering/conditions-in-bash-scripting-if-statements)

### FOR LOOP

__Example 1__

```bash

for name in name1 name2; do for dir in ./src*; do if [ -d $name ]; 
then continue; else mv $dir $name;  fi ; done; done

```

__Example 2__

```bash
for dir in ./src*; do for name in name1 name2; do if [[ -d $name || ! -d $dir ]]; 
then continue; else mv $dir $name; fi; done; done

```

__Example 3__

```bash
for i in 0 1 2 3 4 5; do touch "src$i/file$i.txt"; done 
```

__Example 4__

```bash

for i in 1 2 3 4 5 6; do if [[ ! $i -eq 3 ]]; then echo "branch$i"; else break; fi; done

```

__Example 5__

```bash
for i in 1 2 3 4 5 6; do if [[ ! $i -eq 3 ]]; 
then echo "branch$i"; else continue; fi; done

```

__Example 6__

```bash
OLDIFS=$IFS; IFS=','; for tuple in JavaScript,src0 ES6,src1 React,src2; 
do set -- $tuple; mv $2 $1; done; IFS=$OLDIFS

```
**Sepation in file vs separation on prompt**

```bash

string=c,3,d,4; OLDIFS=$IFS; IFS=','; for i in $string; do echo $i; done; IFS=$OLDIFS
OLDIFS=$IFS; IFS=','; for i in c,3,d,4; do echo $i; done; IFS=$OLDIFS

unset IFS  && echo "$IFS" | cat -et

```

**NOTE:** unzip '*zip' -d /dir1/dir2 **!=** unzip *zip ...

...

### IF CONDITION

```bash

#!/bin/bash

# Takes directory entries specified and renames them using the pattern provided.

for directory in *
do
    if [ -d "$directory" ]
    then
      mv "${directory}" "${directory}_temp" || echo 'Could not rename ${directory}'
    fi
done

```

...

### RENAME

__rename <expression> <directory>__
```bash

#file that start with A-Z replace with a-z
rename 'y/A-Z/a-z/' *		

#file that end with html replace with temp
rename 'y/_html/_temp/' *

ls -d *_html | rename 'y/*_html/*_temp/'

```


### IFS

```bash

# To see the IFS characters
echo "$IFS" | cat -et 

```

```bash

#!/bin/bash
echo " Input Parameters using \$@ : $@"
echo " Input Parameters using \$* : $*"


$ ./inputs.sh arg1 arg2 arg3
 #Input Parameters using $@ : arg1 arg2 arg3
 #Input Parameters using $* : arg1 arg2 arg3

```

```bash

#!/bin/bash
IFS='|'
echo " Input Parameters using \$@ : $@"
echo " Input Parameters using \$* : $*"

# filename = inputs.sh

$ ./inputs.sh arg1 arg2 arg3
 #Input Parameters using $@ : arg1 arg2 arg3
 #Input Parameters using $* : arg1|arg2|arg3
 
 # $* expends to $1c$2 ..., where c is the first character set in IFS.

```

**MANUAL FOR IF STATEMENT CONDITIONAL CHARACTERS**

```bash

man test	# namual of all flags used to test condition in if statement.

```


### STRING MANIPULATOIN

__TRUNCATE/SUBSTRING__

```bash

str=AnyString
echo ${str:0:2}  # Any

```

__STRING LENGHT__

```bash

str=StringLenght
echo ${#str}	# 12

```


### PROCESS

__SEE LINUX PROCESSES__

```shell

ps -el | awk '{ print $1 }' | sort |uniq -c
ps ax | grep 'command-name'

```

__KILL PROCESS__

```bash

kill -l kill -n PID  
# {n-> SIG-NUMBER ->'Kill -l'} {PID -> ps}
# NOTE: SIG-NUMBER TO ASK PROCESS TO STOP: 15, 2
# SIG-NUMBER TO ASK CPU TO STOP PROCESS: 9

fg %n	# n-> [0-9]

```



