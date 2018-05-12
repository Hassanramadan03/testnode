(function(){
 'use strict';
    angular.module('app')
    .directive('footer',function(){
        return {
            templateUrl:'/views/footer.html',
            controller:footerController,
            controllerAs:'footerTemp'
        }
    });
    function footerController(){
    //     var vm=this;
    //     vm.auth=auth;
    //     vm.login=login;
    //     vm.logout=logout;

    //     function login(){
    //         auth.signin({},function(profile,token){
    //             store.set('profile',profile);
    //             store.set('id_token',token);
    //             $location.path('/profile')
    //         },function(err){
    //             alert(err)
    //         })
    //     }
    //     function logout(){
    //         store.remove('profile',profile);
    //         store.remove('id_token',token);
    //         auth.signout();
    //         $location.path('/')
    //     }
    // }
    }
})()