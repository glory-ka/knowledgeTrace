
**[GITHUB USERNAME AND EMAIL CONFIG]**
```bash
git config --global user.name "username"
git config --global user.email "email@address"
```

**[SSH KEY SHARING]**
```bash
# To generate a ssh key --> (optional) add passphrase
ssh keygen

# list ssh keys
ssh-add -l
```
<pr>
vim .ssh/config
 Host *.bc.edu
    User username : username@Host
    forwardAgent yes : forward keys to current ssh session
</pr>



### __CS 50 IDE__

CS50 ide ~/.ssh/config
```bash
eval `ssh-agent`
ssh-add
```
<pr>
    
Host github.com
 Hostname ssh.github.com
 Port 443
 StrictHostKeyChecking no
</pr>

**gitHub-SSH**
```
git@github.com:<username>/<project>.git
```

```bash
kill $SSH_AGENT_PID
```
