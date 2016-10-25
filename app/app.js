'use strict';

(function() {

    // Declare app level module
    angular
        .module('angularClientApp', [
            'ui.router',
            'ngAnimate',
            'angularLazyImg',
            'ui.bootstrap',
            'localStorage.service',
            'loginservice.service',
            'signupService.service',
            'config',
            'auth',
            'base',
            'dashboard',
            'user',
            'proposalmanagement'
        ])
        .config(['$urlRouterProvider', '$locationProvider', initializeConfigurationPhase])
        .constant('domain','http://172.21.31.243:8000/');

    function initializeConfigurationPhase($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/login');
    }

})();
