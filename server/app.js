/*eslint-env node*/
var express = require('express');
var app = express();
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config');

var proxiesAPIConnect = require('./proxiesAPIConnect.js')();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json());


//Add proxies to API Connect
proxiesAPIConnect.setUp(app)

var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

//------------- UI Home Page --------------------
app.get('/home', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//------------------- APIs ----------------------
app.get('/api/v1/getProducts', function(req, res) {
  res.send(["Watson Conversation", "Watson Natural Language"])
});


// start server on the specified port and binding host
var port = 5001;
app.listen(port, function() {
  console.log("server starting on localhost:" + port);
});