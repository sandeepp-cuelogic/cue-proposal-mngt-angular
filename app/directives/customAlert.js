'use strict';

(function() {

    angular.module('angularClientApp')
    .directive('customalert',customAlert);

    function customAlert() {
        return {
          template : '<span>{{message}}</span>'
        }

        /*{
          templateUrl: function(elem, attr) {
            return '<span style="'+attr.color+'" >{{message}}</span>';
          }
        };*/
    }

})();
