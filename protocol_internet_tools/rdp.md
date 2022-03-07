```bash
# To update the system
sudo apt update 

# install the Xrdp package
sudo apt install xrdp 

# enable the service to run
sudo systemctl enable  --now xrdp
sudo systemctl start xrdp
```

#### __check the firewall status__

**if port 3389 is not open enter the next command**
```
sudo ufw stats
```
##### **OPEN PORT ON FIREWALL**
```bash
# opton1
sudo ufw allow from any to any port 3389 proto tcp 

# option2
sudo ufw allow 3389/tcp	
```
#### __RELOAD THE FIREWALL__
```bash
sudo ufw reload
```

#### __OPTIONAL__
The Gnome desktop Environment could only allow RDP for the root user.
If it's the case install xfce4 and create a file to redirect the RDP sesson to xfce4 Desktop Environment.

```bash
sudo apt install xfce4
echo "xfce4-session" > /home/user_name/.xsession
```