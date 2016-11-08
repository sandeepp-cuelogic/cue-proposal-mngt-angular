'use strict';
(function() {
    angular
        .module('base')
        .controller('baseController', ['$scope', '$state','localStorageServiceWrapper', baseController]);

    function baseController($scope, $state,localStorageServiceWrapper) {

        $scope.$on('requestErrorHandler', function (event, data) {
            $scope.message = data;
        });

        var current_user = localStorageServiceWrapper.get('current_user') ;
        if(current_user && current_user.uname) {
            $scope.user_name = current_user.uname ;
            $scope.show_text = true;
        }
        else{
        	$scope.show_text = false;
        }
    }
})();
