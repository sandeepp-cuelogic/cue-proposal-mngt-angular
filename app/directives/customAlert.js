'use strict';

(function() {

    angular.module('angularClientApp')
    .directive('customalert',['$rootScope','$interval',customAlert]);

    function customAlert($rootScope, $interval) {
        return {
          template : '<span>{{message}}</span>',
          link: function() {
            $interval(function () { $rootScope.message = ''; }, 10000);
          }
        }
    }

})();
