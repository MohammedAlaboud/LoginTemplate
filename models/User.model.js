var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


//User properties
var UserSchema = new Schema({
  username: String,
  email: String,
  password: String
});

//to use in other files
module.exports = mongoose.model('User', UserSchema, 'users'); //reference db to fix issue for that data