const Comments = require('../../models/comment');
const Movie = require('../../models/movie');
const Rate = require('../../models/rating');
module.exports = {
    addMovie,
    addComment,
    addRate,
    getRates
}
 
 

 
function addComment(commentObj){
    return new Promise(async (resolve, reject) => {
       try {
            const comment = new Comment({
                comment:commentObj.comment,
                userName:commentObj.userName,
                userId:commentObj.userId,
                movieId:commentObj.movieId,
            });
            comment.save((err,comment)=>{
                if (err) {
                    console.log(err);
                } else {
                    console.log(comment);
                    resolve(comment)
                }
            }); 
              
            } catch (error) {
                reject(error)
            }
        })
    }
function getRates(userId){
    return new Promise(async (resolve, reject) => {
       try {
            const Rates=await Rate.find({userId:userId},{'createdAt':0,'userId':0,'__v':0});
            if(Rates.length>0) resolve({'message':'all rates',rates:Rates});
            else resolve({'message':'theres no rates',rates:Rates});
              
            } catch (error) {
                reject(error)
            }
        })
    }
function addRate(rateObj){
    return new Promise(async (resolve, reject) => {
       try {
            const movie=await Rate.find({movieId:rateObj.movieId,userId:rateObj.userId});
            console.log(movie)
            if(movie.length>0){
                console.log('Updated')

                const updatedMovie=await Rate.update({'movieId':rateObj.movieId,'userId':rateObj.userId},{rate:rateObj.rate});
                if(updatedMovie)
                resolve({'message':'Rate Successfully Updated',rate:updatedMovie});
            }else{
                console.log(rateObj.moveId)
                const _rate=new Rate({movieId:rateObj.movieId,rate:rateObj.rate,userId:rateObj.userId});
                const _rateCreated=await _rate.save();
                console.log(_rateCreated)
                console.log('Created')
                if (_rateCreated) 
                resolve({'message':'Rate Successfully Created ',rate:_rateCreated})
            }


              
            } catch (error) {
                reject(error)
            }
        })
    }
function addMovie(_movie){
    return new Promise(async (resolve, reject) => {
       try {
             
            const new_movie=await Movie.findOne({id:_movie.id});
            if(new_movie)resolve('Already Existed')
            else {
                 const movie=new Movie(_movie)
                 const savedMovie=await movie.save();
                 if (savedMovie)resolve(savedMovie)
            }

              
            } catch (error) {
                reject(error)
            }
        })
    }