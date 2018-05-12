var mongoose = require('mongoose');
var movieSchema = new mongoose.Schema({
    rating : Number,
    comment :String,
    userId : mongoose.Schema.Types.ObjectId,
    propertyId :  mongoose.Schema.Types.ObjectId,
    createdAt: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('movie', movieSchema);
