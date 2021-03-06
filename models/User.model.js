var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//reference for plugin installed: mongooseHidden (nmpjs.com)
var mongooseHidden = require('mongoose-hidden')(); //plugin has to be initialized with these extra parenthesis

//minlength from mongoose api; used SchemaString minlength
//other validators exist that check for specific inputs
var minlength = [3, 'The value of path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({minlength})' ];

//User properties with validators 
var UserSchema = new Schema({
  username: {
    type: String,
    minlength: minlength,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true //only one person can sign up with this email!
  },
  password: {
    type: String,
    hide: true //uses mongooseHidden api
  }
});

UserSchema.plugin(mongooseHidden); //setup plugin by passing in mon hidden param

//to usei in other files
module.exports = mongoose.model('User', UserSchema, 'users'); //reference db to fix issue for that data