"use strict";

require('dotenv').config();

var express = require('express');

var helmet = require('helmet');

var rateLimit = require('express-rate-limit');

var cors = require('cors');

var bodyParser = require('body-parser');

var http = require('http');

var compression = require('compression');

var app = express();
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); // Security middlewares

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); // Enable compression

app.use(compression()); // Rate limiting

var limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs

});
app.use(limiter); // Serve static files from the 'public' directory with caching

app.use(express["static"]('public', {
  maxAge: '1d'
}));
var port = process.env.PORT || 3000;
http.createServer(app).listen(port, function () {
  console.log("Server is running on port ".concat(port));
});
//# sourceMappingURL=server.dev.js.map
