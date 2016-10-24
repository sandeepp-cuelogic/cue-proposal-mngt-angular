'use strict';

(function() {

    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state','loginservice','localStorageServiceWrapper', loginController]);

    function loginController($scope, $state, $loginservice, $localStorageServiceWrapper) {
        $scope.user = {} ;
       $scope.LoggedIn = function(){
         if($scope.user.email && $scope.user.password){

         	$loginservice.validate($scope.user.email,$scope.user.password)
            .success(function (data, status, headers, config) {
                 console.log(data) ;
                 if(data.statusCode == 400) {
                   // console.log("data") ;
                   $scope.error = data.message; 
                 }
                 else{
                    $localStorageServiceWrapper.set('token',data.token);
                    $state.go('base.dashboard');
                 }
                
                
            })
            .error(function (data, status, header, config) {
               // console.log("data");
                

            });


         }
         else{
         	alert("Please enter username and password.");
         }
       }
    }

})();
