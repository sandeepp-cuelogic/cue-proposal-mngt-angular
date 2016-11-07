'use strict';

(function() {

    angular
        .module('auth')
        .controller('signupController', ['$scope', '$state', 'signupService', signupController]);

    function signupController($scope,  $state, signupService) {
        $scope.user = {};
        $scope.submit = function () {
          signupService.registerUser($scope.user).success(function(response){
            $scope.$parent.message = response.message;
            $state.go('base.login');
          }).error(function(err) {
            $scope.$parent.message = err.message;
          });
        }
    }

})();
