'use strict';
(function() {

    angular
        .module('base')
        .controller('baseController', ['$scope', '$state','localStorageServiceWrapper', baseController]);

    function baseController($scope, $state,localStorageServiceWrapper) {
         var c_user = localStorageServiceWrapper.get('current_user');
        if(Object.getOwnPropertyNames(c_user).length === 0) {
        	
        }
        else{
        	$scope.user_name = c_user.uname ;
        }
        
        }

})();
