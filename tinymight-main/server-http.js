// Dependencies
const express = require('express');
const path = require("path")

// Configure & Run the http server
const app = express();
const helmet = require("helmet");

var DIST_DIR = path.join(__dirname, "/dist/");

app.use(helmet());

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

app.listen(80, () => {
  console.log('HTTP server running on port 80');
});