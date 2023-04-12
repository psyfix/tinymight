const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')
const port = 3000
const path = require("path")


var DIST_DIR = path.join(__dirname, "/dist/");

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/example.co.nz/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/example.co.nz/fullchain.pem')
}
const server = https.createServer(httpsOptions, app)
    .listen(port, () => {
        console.log('server running at ' + port)
    })


    
