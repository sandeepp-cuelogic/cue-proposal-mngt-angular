'use strict';

(function() {
    angular.module('angularClientApp')
    .directive('customalert',['$interval',customAlert]) ;
    
    function customAlert($interval) {
        return {
          template : '<span>{{message}}</span>',
          scope: true,
          link: function(scope) {
            $interval(function () { scope.message = ''; }, 10000);
          }
        }
    }

})();
