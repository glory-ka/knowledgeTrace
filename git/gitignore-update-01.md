UPDATE .gitignore and REMOVE ignored files
==========================================

After we `git add` and `git commit` files with old rules (rules are in the .gitignore file), changing the `gitignore` will not affect future adds or commits (`git add` and `git commit`).

The git .gitignore file tells git what files or directory to not track. However, once a file is tracked, we have to explicitely tell untrack it after we update the rules.

After we untrack a file, running the commands `git add <filename>`, would check the rule in the .gitignore file and track the specified file(s) using the new rules.

Steps
-----
1. Use the folling command to untrack a file
    + **git rm --staged \<filename>**

    + + User the **-r** flag to untrack a directory.
        + + **git rm -r --staged \<filename>**

2. Track the file or directory using the new rules
    + **git add <filename>**
    + **git commit -m "commit message"**
    
[Stackoverflow source](https://stackoverflow.com/questions/1274057/how-can-i-make-git-forget-about-a-file-that-was-tracked-but-is-now-in-gitign)
