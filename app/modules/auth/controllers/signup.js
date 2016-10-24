'use strict';

(function() {

    angular
        .module('auth')
        .controller('signupController', ['$scope', '$state', 'signupService',signupController]);

    function signupController($scope, $state, signupService) {
        console.log("Inside signup controller");
        $scope.user = {};
        $scope.submit = function () {
          signupService.registerUser($scope.user);
        }
    }

})();
