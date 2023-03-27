#!/bin/bash
cd /dev/tinymight/
pm2 delete tinymight
cd /dev/tinymight/src/
python3 updateFindings.py
cd /dev/tinymight/
npm run build
pm2 start tinymight.js --name tinymight
