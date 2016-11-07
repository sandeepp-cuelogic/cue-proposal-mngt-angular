'use strict';
(function() {
    angular
        .module('base')
        .controller('baseController', ['$scope', '$state','localStorageServiceWrapper', baseController]);

    function baseController($scope, $state,localStorageServiceWrapper) {

        $scope.$on('requestErrorHandler', function (event, data) {
            $scope.message = data;            
        });

        var c_user = localStorageServiceWrapper.get('current_user') ;
        if(c_user.uname) {
            $scope.user_name = c_user.uname ;
            $scope.show_text = true;
        }
        else{
        	$scope.show_text = false;
        }
    }
})();