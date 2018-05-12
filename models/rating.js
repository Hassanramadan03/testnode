var mongoose = require('mongoose');
var ratingSchema = new mongoose.Schema({
    rate : {type:Number,default:0},
    userId : mongoose.Schema.Types.ObjectId,
    movieId :Number  ,
    createdAt: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('rating', ratingSchema);
