/**
 * Setting up the web service environment upon environment basis
 */
(function() {

    //Environment related configration
    'use strict';

    angular.module('config', [])
        .provider('configProvider', [configProvider]);

    function configProvider() {
        var environment = {
            'appUrl': 'http://172.21.31.243:8000'
        };

        this.$get = function() {
            return environment;
        }
    }

})();
