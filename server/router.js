const AuthenticationController = require('./controllers/authentication'),  
      express = require('express'),
      passportService = require('./config/passport'),
      passport = require('passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });  
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function(app) {  
  // Registration route
  app.post('/register', AuthenticationController.register);
  app.get('/ping', requireAuth, function(req, res, next){
    res.status(200).send('ping')
  })
  // Login route
  app.post('/login', requireLogin, AuthenticationController.login);
};

