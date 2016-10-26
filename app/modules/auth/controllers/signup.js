'use strict';

(function() {

    angular
        .module('auth')
        .controller('signupController', ['$scope', '$state', 'signupService', '$rootScope', signupController]);

    function signupController($scope,  $state, signupService, $rootScope) {
        $scope.user = {};
        $scope.submit = function () {
          signupService.registerUser($scope.user).success(function(response){
            $state.go('base.login');
            $rootScope.message = response.message;
          }).error(function(err) {
            $rootScope.message = err.message;
          });
        }
    }

})();
