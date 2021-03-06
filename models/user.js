
var mongoose = require('mongoose');
 
// define the schema for our user model
var userSchema = mongoose.Schema({
    local            : {
        firstname    : String,
        lastname     : String,
        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    type             : {type:String,default:'user'},
    
});

 

// create the model for users and expose it to our app
module.exports = mongoose.model('user', userSchema);
