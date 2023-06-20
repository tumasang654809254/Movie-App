#!/usr/bin/bash

# Install node.js
sudo curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash
sudo yum install nodejs -y

# Install pm2
sudo npm install pm2@latest -g