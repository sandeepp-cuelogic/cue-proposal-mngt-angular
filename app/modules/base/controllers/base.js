'use strict';
(function() {

    angular
        .module('base')
        .controller('baseController', ['$scope', '$state', baseController]);

    function baseController($scope, $state) {
        console.log("Inside Base controller");
    }

})();
