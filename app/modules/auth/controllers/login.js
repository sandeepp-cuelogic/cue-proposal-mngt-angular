'use strict';

(function() {

    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state','$rootScope','loginService','localStorageServiceWrapper', loginController]);

    function loginController($scope, $state, $rootScope, loginService,localStorageServiceWrapper ) {
        $scope.user = {} ;
        $scope.error = '';
        
        if($state.current.name == "base.logout"){
           localStorageServiceWrapper.set('token','');
        }
       $scope.LoggedIn = function(){
         if($scope.user.email && $scope.user.password){
            loginService.validate($scope.user.email,$scope.user.password)
            .success(function (data, status, headers, config) {
                 //console.log(data) ;
                 if(data.statusCode == 400) {
                   $scope.error = data.message;
                 }
                 else{
                    localStorageServiceWrapper.set('token',data.token);
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
