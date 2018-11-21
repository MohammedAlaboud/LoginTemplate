var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var controller = require('./controllers/user.controller');
//require modules to use their methods through created variables.

var port = 8080;
var db = 'mongodb://localhost/userExample';
//var for database run locally through MongoDB. Must run mongo on terminal to use first

mongoose.connect(db);
//connect to database

app.use(express.static(path.join(__dirname, 'views')));
//connect to files in views folder

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

//Post and get routes
app.get('/', function(req, res) { //route to get index.html file
  res.render('index.html'); //automatically looks for and in a "views" directory 
});

app.post('/', controller.register); //post located on roots page with a method register

//server setup
app.listen(port, function() {
  console.log('app listening on port ' + port);
});