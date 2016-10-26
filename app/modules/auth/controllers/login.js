'use strict';

(function() {

    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state','loginService','localStorageServiceWrapper', loginController]);

    function loginController($scope, $state, loginService,localStorageServiceWrapper ) {
        $scope.user = {} ;
        $scope.error = '';
       $scope.LoggedIn = function(){
         if($scope.user.email && $scope.user.password){
            loginService.validate($scope.user.email,$scope.user.password)
            .success(function (data, status, headers, config) {
                 //console.log(data) ;
                 if(data.statusCode == 400) {
                   // console.log("data") ;
                   $scope.error = data.message;
                 }
                 else{
                    localStorageServiceWrapper.set('token',data.token);
                    $state.go('base.proposal');
                 }


            })
            .error(function (data, status, header, config) {

            });


         }
         else{
         	alert("Please enter username and password.");
         }
       }
    }

})();
