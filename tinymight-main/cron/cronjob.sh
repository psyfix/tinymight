#!/bin/bash

#Shutdown server.
cd /root/tinymight/
pm2 delete tinymight

#Checks for new template repository upload and then updates.
if [ -f "/root/tinymight/uploads/templates.zip" ]
then
mv /root/tinymight/src/templates /root/tinymight/backups/templates
cd /root/tinymight/src/uploads/
unzip templates.zip
mv templates /root/tinymight/src/templates
rm templates.zip
fi

#Updates the findings.js file.
cd /root/tinymight/src/
python3 updateFindings.py

#Rebuilds code and starts server again.
cd /dev/tinymight/
npm run build
pm2 start tinymight.js --name tinymight
