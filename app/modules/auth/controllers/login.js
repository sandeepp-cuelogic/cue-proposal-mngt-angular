'use strict';

(function() {

    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state','loginService','localStorageServiceWrapper', loginController]);

    function loginController($scope, $state, loginService,localStorageServiceWrapper ) {
        $scope.user = {} ;
        $scope.error = '';
       
        
        if($state.current.name == "base.logout"){

           localStorageServiceWrapper.set('current_user',{});
        }
       $scope.LoggedIn = function(){
         if($scope.user.email && $scope.user.password){
            loginService.validate($scope.user.email,$scope.user.password)
            .success(function (data, status, headers, config) {
                if(data.statusCode == 400) {
                   $scope.error = data.message;
                 }
                 else{
                    //console.log(data.data) ;
                    var current_user_info = {};
                    current_user_info.token = data.data.token;
                    current_user_info.uname = data.data.user.name;
                    current_user_info.user_id = data.data.user.id;
                    //console.log(current_user_info) ;
                    localStorageServiceWrapper.set('current_user',current_user_info);
                    
                    $state.go('base.proposal',{},{reload:true});
                 }


            })
            .error(function (data, status, header, config) {

            });


         }
         else{
         	$scope.$parent.message = "Please enter username and password.";
         }
       }
    }

})();
