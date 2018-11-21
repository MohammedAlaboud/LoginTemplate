var User = require('../models/User.model'); //.. to go up one level

exports.register = function(req, res) {
  var newUser = new User(); //constructor function to make a new user obj 

  newUser.username = req.body.username; //reference properties of model User
  newUser.email = req.body.email;
  newUser.password = req.body.password;

  newUser.save(function(err, user) {
    if(err) {
      console.log(err.message);
      console.log(err.errors.username.message);
      res.send('error registering user');
    } else {
      console.log(user);
      res.redirect('/signup.html');
    }
  });
};
