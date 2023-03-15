# Full Stack for Front-End Engineers, v3 Reference Guide

This document is a reference guide for the [Full Stack for Front-End Engineers, v3](https://frontendmasters.com/courses/fullstack-v2/) course on [Frontend Masters](https://frontendmasters.com/). The instructions/commands correspond with the lessons in the course.

### Create SSH Key (name it fsfe)
```bash
cd ~/.ssh
ssh-keygen
```

### Buy a Virtual Private Server (VPS)
- https://m.do.co/c/3bea45abfdb1
  - Create a Digital Ocean Account if you don't have one
- Create a new dropplet
  - Choose Data center
  - Ubuntu
  - Version 22.04 LTS x64
  - CPU: Regular (cheapest)
  - Add ssh key
    - head back to terminal and run `cat ~/.ssh/fsfe.pub`
    - copy/paste key into Digital Ocean
  - Click Create Droplet
  
### Simplify Connection
```bash
vi ~/.ssh/config

# Add/Edit:
Host *
  AddKeysToAgent yes
  UseKeychain yes
  
# Quit VIM and run:
ssh-add --apple-use-keychain fsfe
```

### Buy a Domain (or use an existing domain)
- namecheap.com or anywhere else
- Point DNS at Digital Ocean (ns1/ns2/ns3.digitialocean.com
- In Digital Ocean, add domain to dropplet
  - A record
  - WWW record

## Update/Restart Servever
```bash
ssh -i ~/.ssh/fsfe root@<your_IP>
apt update
apt upgrade
# When prompted: keep local version
# When prompted: <OK>
# When prompted: <Tab> <OK>
shutdown now -r
```

### Creating a New User
```bash
adduser <your-username>
usermod -aG sudo <your-username>
su <your_username>
```

### Enable login for new user (paste public ssh key in file
```bash
cd ~/
mkdir .ssh
vi ~/.ssh/authorized_keys
# paste public ssh key in here
```

### Add Security
```bash
chmod 644 ~/.ssh/authorized_keys
sudo vi /etc/ssh/sshd_config
# find PermitRootLogin and change to "no"
sudo service sshd restart
```

### Install Nginx
```bash
sudo apt install nginx
sudo service nginx start
```

### Install Node
```bash
curl https://deb.nodesource.com/setup_19.x | sudo -E bash -
sudo apt-get install nodejs
sudo apt install git
sudo chown -R $USER:$USER /var/www
mkdir /var/www/app
cd /var/www/app
git init
npm init -y
vi app.js
```

### Create a basic node server in app.js
```js
const http = require("http");
http.createServer(function (req, res) {
 res.write("On the way to being a full stack engineer!");
 res.end();
}).listen(3000);

console.log("Server started on port 3000");
```

### Create a New nginx server and proxy request
```bash
sudo vi /etc/nginx/sites-enabled/fsfe
```

### Add this to the fsfe file
```
server{
  listen 80 default_server;
  listen [::]:80 default_server;
  
  root /var/www/html;
  index index.html;
  
  server_name <your_domain OR IP address>;
  
  location / {
    proxy_pass http://127.0.0.1:3000;
  }
}
```

### Point nginx to new server
```bash
sudo vi /etc/nginx/nginx.conf
# Edit sites-enabed include to be: include /etc/nginx/sites-enabled/fsfe;

sudo nginx -t
sudo service nginx restart
```

### Install PM2 to run Node
```bash
sudo npm i -g pm2
pm2 start app.js
pm2 save
pm2 startup
# copy command that is generated and run it
```