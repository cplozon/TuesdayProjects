// Importing Node modules and initializing Express
const express = require('express'),  
      app = express(),
      bodyParser = require('body-parser'),
      path = require('path'),
      logger = require('morgan'),
      mongoose = require('mongoose'),
      config = require('./config/main');


//route for user authorization
const router = require('./router'); 

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(express.static("client/build"));

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Database Connection
mongoose.connect(config.database);  
router(app);  

// Start the server
const server = app.listen(config.port, function() {
  console.log('Your server is running on port ' + config.port + '.');
});