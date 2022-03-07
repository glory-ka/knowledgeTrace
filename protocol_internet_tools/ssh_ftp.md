### __CREATE KEY__

```bash
# create a key

ssh-keygen -t rsa
```

##### __Best Practice on the client side__

```bash
#  store the key in a "id_rsa" file in a ".ssh" folder

~/.ssh/ id_rsa 
```
##### __Best Practice on the server side__

```bash
# store the public generated key in the "authorized_keys" file in the ".ssh" folder

~/.ssh/authorized_keys
```

##### __Sometimes OPTIONAL__

If after the above steps, ssh doesn't work or require password follow the next step.

```bash

ssh-add ~/.ssh/id_rsa
```

### __FROM THE CLIENT, ADD THE SSH PUBLIC KEY WITH A SINGLE COMMAND LINE__

```bash

cat ~/.ssh/id_rsa.pub | ssh demo@198.51.100.0 "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

[Gist github](https://gist.github.com/bradtraversy/f03df587f2323b50beb4250520089a9e)
source YouTube: Traversy Media 


### __ESTABLISH A SFTP CONNECTION__

```bash
sftp username@[hostname|ipaddress]
sftp -oPort=port_number username@[hostname|ipaddress]

sftp username@xxx.xxx.xxx.xxx 
```

__NOTE: YOU CAN USE ALL LINUX COMMANDS WITHIN THE SESSION SHELL__
```bash
> put localDir/file.txt  remoteDir/
> get remoteDir/file.txt [optional: localDir/file.txt]
> lpwd	# local pwd
```
### __ESTABLISH A SCP CONNECTION__

##### __NOTE: NO PERSISTANT CONNECTION, JUST A FILE TRANSFER__
##### __NOTE: UNLIKE SSH, PORT FLAG USE CAPITAL P__

```bash

scp -P ~/remoteDir/file.txt ~/localDir/
```
