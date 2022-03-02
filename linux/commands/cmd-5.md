## CYBER MENTOR


| Command | Description| 
| -------- | -------- |
| **ifconfig**   | : show the ip address of NICs and loopback address Loopback address are reserved for testing Network Cards.|
|**iwconfig**    | show the wireless connection address and info|
|**rout** 	     | show the routing table|
|**arp -a**	     | show the ip mac address translation|
|**ping** 	     | send ICMP package to a server.|
|**netstat -ano** | show active connections on the machine and port they use.|
**adduser name_of_new_user** | create an new uder
**su name_of_user**          | switch user
**su -**			 | switch to root user
**locate filename**  | search for the filename and return address(es).
**updatedb**		| use this command if "locate" doesn't find anything.



| file location | description |
| -------- | -------- |
/etc/passwd  	  | keep users
/etc/shadow  	 		 | keep passwords as hash
/var/log/auth.log 	| keep log of users trying to access unauthorized area.


### File Permission

__?rwx-xr-x__

| Command | Description |
| -------- | -------- |
chmod	        	| change file permission (ie. chmod +x file).
service      		| allow to start or stop services (ie. web server, ssh, database)

```bash
# python simple server is simpler than apache2
service apache2 start
service apache2 stop
```


| Command | Example | Description |
| -------- | -------- | -------- |
|**systemctl** | systemctl enable postgresql | open database at startup |


### Update/Upgrade

```shell
apt-get update && apt-get upgrade
apt-get install git
```



