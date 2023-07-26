#!/usr/bin/bash

if [ "$EUID" -ne 0 ]; then
  echo "This script must be run as root."
  exit 1
fi

rsync -avz system/ system.work/
mkdir -p system.work/opt/tao.charlesbayley.dev/production
chown -R root:root system.work/
chown -R jenkins:jenkins system.work/opt/tao.charlesbayley.dev
chmod 0440 /etc/sudoers.d/jenkins_taoprogramming

a2ensite 100-tao.charlesbayley.dev
systemctl restart apache2
