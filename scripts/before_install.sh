#!/usr/bin/bash
# Install node.js
# Install node.js and PM2 globally

sudo yum update
sudo yum install nodejs-legacy -y
sudo yum install npm  -y
sudo npm install pm2 -g