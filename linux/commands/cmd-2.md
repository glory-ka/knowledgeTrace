### SHELL HISTORY MANIPULATION
.

### Event designators

| Event| Description|
| -------- | -------- |
!!	| last command entered	
$	| last argument
^	| first argument
`*`	| all argument


...

### Modifers
| Modifiers| Description |
| -------- | -------- |
**r**		| removes trailing suffix (extension).
**h**		| removes trailing pathname (path/trailing_stuff).
**e**		| removes everything but the trailing pathname.
**p**		| extract without running the program (click Ctrl to run)

...

### Event and Word designators

| Event:Word | Description |
| -------- | -------- |
**!n:$**	| get last argument of nth command
**!n:^**	| get first argument of nth command
**!n:^-$**	| get all argument of last command `[!n:*]`
**!!:2**	| get second argument of last command
**!!:2-4**	| get second to fourth arguments of last command

...

### Event and Word designators, plus modifiers

| Event:Word:Modifier| Description |
| -------- | -------- |
**!!:$:r**	| get last argument and remove trailing suffix (extension).
**!!:$:h**	| get last argument and remove trailing pathname.
**!!:$:e**	| get last argument and remove all but trailing pathname.
**!!:0:p**	| extract the argument zera aka command but don't run.

...

### Event and Word designators to search and modify

| Replace notation | Description |
| -------- | -------- |
**!n:gs/urs/usr**| replace urs with usr in last command

```
s/old/new        : replaces old with new.
gs/old/new       : globally replaces old with new.
```
...


### COMMAND TO SPEED UP TERMNAL TYPING
.

| Key Combination | Description |
| -------- | -------- |
ALT + U | Captitalize everything after cursor
ALT + C | capitalize one letter then jump to next word.
ALT + B | GO backward
ALT + F | GO forward
ALT + T | OPEN new terminal
ALT + W | CLOSE terminal
ALT + D | DELETE WORD

```bash
export PS1="\[\e[01;34m\][\[\e[m\]\[\e[01;34m\]\W\[\e[m\]\[\e[01;34m\]]\[\e[m\]\[\e[01;34m\]-> \[\e[01;m\] "
```

```bash
export PS1='\[\e]0;\a\033k$(cwdSlashAtEnd base)\033\\\]\[$(printf "\x0f")\033[01;34m\]$(cwdSlashAtEnd)\[\033[00m\]$(__git_ps1 " (%s)") $'
```

```bash
export PS1='\[\e]0;\u@\h:\w\a\]${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$' 
```