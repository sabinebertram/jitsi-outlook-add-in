const fs = require('fs');
const https = require('https');
const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('docs'));
/* Turn off caching when debugging */
app.use(function (req, res, next) {
res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
res.header('Expires', '-1');
res.header('Pragma', 'no-cache');
next()
});

const cert = {
  key: fs.readFileSync(path.resolve('./certs/server.key')),
  cert: fs.readFileSync(path.resolve('./certs/server.crt'))
};
https.createServer(cert, app).listen(3000, () => console.log('Server running on 3000'));