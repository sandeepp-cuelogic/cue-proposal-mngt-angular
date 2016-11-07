'use strict';

(function() {

    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state','loginService','localStorageServiceWrapper', loginController]);

    function loginController($scope, $state, loginService,localStorageServiceWrapper ) {
        $scope.user = {} ;
        $scope.error = '';      
        
        if($state.current.name == "base.logout") {
           localStorageServiceWrapper.set('current_user',{});
           $state.go('base.login',{},{reload:true});
        }

       $scope.LoggedIn = function() {
            loginService.validate($scope.user.email,$scope.user.password)
            .success(function (data) {
                var current_user_info = {};
                current_user_info.token = data.data.token;
                current_user_info.uname = data.data.user.name;
                current_user_info.user_id = data.data.user.id;
                localStorageServiceWrapper.set('current_user',current_user_info);
                $state.go('base.proposal',{},{reload:true});
            }) ;        
       }
    }

})();
