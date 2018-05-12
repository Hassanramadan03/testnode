'use strict';
// Declare app level module which depends on filters, and services
// angular.module('app', ["auth0","angular-storage","angular-jwt","ngMaterial","ngRoute"])
angular.module('app', ['satellizer',"ngRoute"])
.config( function( $routeProvider,$authProvider, $locationProvider) {
     console.log(localStorage.getItem('currentUser'));
    
    var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
    
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
          deferred.reject();
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      }];
  
      var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
          deferred.resolve();
        } else {
          $location.path('/login');
        }
        return deferred.promise;
      }];
    
   
    $routeProvider.when('/',{
        templateUrl:'/views/home.html',
        controller:'homeCtrl'
    }). 
    when('/signup',{
        templateUrl:'/views/signup.html',
        controller:'SignupCtrl'
    }).
    when('/login',{
        templateUrl:'/views/login.html',
        controller:'loginCtrl'
    }).  
    when('/feed',{
        templateUrl:'/views/feed.html',
        controller:'feedCtrl' ,
        resolve: {
            loginRequired: loginRequired
          }
        
        
    }). 
    when('/feed',{
        templateUrl:'/views/feed.html',
        controller:'feedCtrl'
        
    }).
     when('/movie',{
        templateUrl:'/views/movieInfo.html',
        controller:'infoCtrl' ,
        resolve: {
            loginRequired: loginRequired
          }
        
    }).when('/video',{
        templateUrl:'/views/video.html',
        resolve: {
            loginRequired: loginRequired
          }
        
    }).
    otherwise({redirectTo:'/'});
    $locationProvider.html5Mode(true);
    
});