### __Install Sublim__

**Install the GPG key**
```bash

wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
```
---

**Ensure apt is set up to work with https sources**
```bash
sudo apt-get install apt-transport-https
```
---

**Select the version of the app**

#### __Stable__
```bash

echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
```
#### __Dev__
```bash

echo "deb https://download.sublimetext.com/ apt/dev/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
```
---

**Update apt sources and install Sublime Text**
```bash
sudo apt-get update
sudo apt-get install sublime-text
```

#### __apt-key__
```bash
# display info in the "/etc/apt/trusted.gpg.d/ " directory.
sudo apt-key list

# add element in the "/etc/apt/trusted.gpg.d/ " directory.
sudo apt-key add

sudo apt-key del [use key id]
```
<pr>
key code: 6ED6 F5CB 5FA6 FB2F 460A  E88E EDA0 D238 8AE2 2BA9
key id: last two set of characters of the key code.
key id: 8AE22BA9 : remove the space between characters [8AE2 2BA9].
</pr>

**update information in cach into memory.**
```bash
sudo apt update
```



