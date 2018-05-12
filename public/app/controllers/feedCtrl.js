(function(){
 'use strict';
    angular.module('app')
    .controller('feedCtrl',function($scope,feedService,$location){
      	$scope.myBackgroundUrl={'background-image':'url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/baby-driver-poster.jpg)'};
        $scope.Movies=[];
      	$scope.rates=[];
        $scope.rate=false;
        $scope.root=0;
        $scope.videoLink= {'link':'https://www.youtube.com/watch?v=t2ByLmLnYJ8'}
      	feedService.getMovies().then(function(movies){
      		
      		$scope.Movies=movies;
      	})
        feedService.getRates().then(function(rates) {
          $scope.rates=rates;
        })
        $scope.drawRating=function (id) {
             for (var i = $scope.rates.length- 1; i >= 0; i--) {
               if ($scope.rates[i].movieId===id) 
                return $scope.rates[i].rate/5*100;
             }
           
        }
          
      	$scope.readyStyleObject=function(moviePosterUrl){
      		return {'background-image':`url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${moviePosterUrl})`}
      		
      	}
        $scope.disappear=function () {
          $scope.rate=true;
          console.log('asdf')
        }
    		$scope.getVideoLink=function(movieId){
          feedService.getTrailer(movieId,function(response){
               console.log(document.getElementById("iframe"))
                var _movie=JSON.parse(response).results[0];
                var url=`https://www.youtube.com/embed/${_movie.key}`;
                document.getElementById("iframe").src=url;
                feedService.addMovie({id:movieId,key:_movie.key,title:_movie.title});
                  
          })
        
    		}
      	$scope.des='';
          $scope.setDes=function(des){
          $scope.des=des;
        }
        $scope.addRate=function(rate,l,id,title){
                  feedService.addRate({movieId:id,userId:JSON.parse(localStorage.getItem('currentUser')).userId,rate:rate}).then(function () {
                              feedService.getRates().then(function(rates) {
                                     $scope.rates=rates;
                            })
                        });
                  for (var i=1;i<=5;i++){
                  var cur=document.getElementById(l+"star"+i)
                      cur.className="fa fa-star"
                  }

                  for (var i=1;i<=rate;i++){
                  var cur=document.getElementById(l+"star"+i)
                      if(cur.className=="fa fa-star")
                      {
                      cur.className="fa fa-star checked"
                      }
                  }

              }
         $scope.close=function(){
           $scope.appear=true;
          
            $location.path('/')
        }	 
        $scope.addComment=function (argument) {
          // body...
        }
         $scope.getComments=function (argument) {
          // body...
        }
    });

   
})()