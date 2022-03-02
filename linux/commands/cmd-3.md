### Share Folder Permission

__See Steps bellow:__

1. **Provide Permission**
**sudo usermod -aG <group> <user>**
```bash
sudo usermod -aG vboxsf [username]
# <user> = [username] = $USER
```

2. **Mount to Desktop**  
```bash
sudo ln -s /media/[foldername] /home/[username]/Desktop
```

### **Other Options for Step 1**
__Option 1__
    
```bash
# add yourself to the vboc
sudo adduser $USER vboxsf
```

__Option 2__
    
1. __Go to directory__ : /etc/group
2. __Look for line__   : `vboxsf:x:999`
3. __Add yourself__    : ':yourusername'
(3) Add yourself    : ':yourusername'


