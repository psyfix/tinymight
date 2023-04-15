// Dependencies
const express = require('express');
const path = require("path")
const helmet = require("helmet");
const multer = require("multer");

// Configure & Run the http server
const app = express();

// Start by creating some disk storage options:
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, __dirname + '/uploads');
  },
  // Sets file(s) to be saved in uploads folder in same directory
  filename: function (req, file, callback) {
      callback(null, file.originalname);
  }
  // Sets saved filename(s) to be original filename(s)
})

// Set saved storage options:
const upload = multer({ storage: storage })

app.post("/api", upload.array("files"), (req, res) => {
// Sets multer to intercept files named "files" on uploaded form data

  console.log(req.body); // Logs form body values
  console.log(req.files); // Logs any files
  res.json({ message: "File(s) uploaded successfully" });

});

var DIST_DIR = path.join(__dirname, "/dist/");

//app.use(helmet());

//Serving the files on the dist folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(DIST_DIR));

app.listen(80, () => {
  console.log('HTTP server running on port 80');
});