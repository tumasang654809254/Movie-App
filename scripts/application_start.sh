#!/usr/bin/bash

cd /home/ec2-user/nodejs
sudo npm install
pm2 stop all
pm2 start /home/ec2-user/nodejs/app.js