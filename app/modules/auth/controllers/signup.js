'use strict';

(function() {

    angular
        .module('auth')
        .controller('signupController', ['$scope', '$state', 'signupService', '$rootScope', signupController]);

    function signupController($scope,  $state, signupService, $rootScope) {
        console.log("Inside signup controller");
        $scope.user = {};
        $scope.submit = function () {
          var signupStatus = signupService.registerUser($scope.user);
          signupStatus.then(function successCallback(response) {
            console.log(response.data.message,'resp');
          //  $scope.color = 'red';
            $rootScope.message = response.data.message;
            //return response;
          });
      //    console.log(signupStatus,'gaurav');
        }
    }

})();
