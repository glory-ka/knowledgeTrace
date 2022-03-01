```shellbash
chmod +x ipsweep.sh
./ipsweep 192.168.1 > iplist.txt

for ip in $(cat iplist.txt); do nmap -sS -p 80 -T$ $ip & ; done
```