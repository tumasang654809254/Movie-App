#!/bin/bash

cd /home/ec2-user/server
cp build/nginx.conf /etc/nginx/nginx.conf
cp -R dist /var/www/html/taxi-booker
nginx
sudo service codedeploy-agent start