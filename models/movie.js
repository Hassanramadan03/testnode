var mongoose = require('mongoose');
var movieSchema = new mongoose.Schema({
    title : String,
    id :  Number,
    key:String
   
});
module.exports = mongoose.model('movies', movieSchema);
