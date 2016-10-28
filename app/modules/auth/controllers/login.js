'use strict';

(function() {

    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state','$rootScope','loginService','localStorageServiceWrapper', loginController]);

    function loginController($scope, $state, $rootScope, loginService,localStorageServiceWrapper ) {
        $scope.user = {} ;
        $scope.error = '';
        
        if($state.current.name == "base.logout"){
           localStorageServiceWrapper.set('current_user',{});
        }
       $scope.LoggedIn = function(){
         if($scope.user.email && $scope.user.password){
            loginService.validate($scope.user.email,$scope.user.password)
            .success(function (data, status, headers, config) {
                 console.log(data) ;
                 if(data.statusCode == 400) {
                   $scope.error = data.message;
                 }
                 else{
                    var current_user_info = {};
                    current_user_info.token = data.data.token;
                    current_user_info.uname = data.data.user.name;
                    //console.log(current_user_info) ;
                    localStorageServiceWrapper.set('current_user',current_user_info);
                    $rootScope.message = data.message;
                    $state.go('base.proposal');
                 }


            })
            .error(function (data, status, header, config) {

            });


         }
         else{
         	$rootScope.message = "Please enter username and password.";
         }
       }
    }

})();
