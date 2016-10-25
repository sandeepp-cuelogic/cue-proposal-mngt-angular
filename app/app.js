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
            'signupService.service',
            'config',
            'auth',
            'base',
            //'dashboard',
            'proposal',
            //'user'

        ])
        .config(['$urlRouterProvider', '$locationProvider', '$httpProvider', initializeConfigurationPhase])
        .service('APIInterceptor',['$rootScope','localStorageServiceWrapper',authService] );


    function initializeConfigurationPhase($urlRouterProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/login');
         $httpProvider.interceptors.push('APIInterceptor');
    }

    function authService($rootScope, localStorageServiceWrapper) {
        var service = this;
        service.request = function(config) {
            var access_token = localStorageServiceWrapper.get('token');
            console.log(access_token);
                if (access_token) {
                config.headers.Authorization = 'Bearer '+access_token;
            }
            return config;
        };
        service.responseError = function(response) {
            if (response.status === 401) {
                $rootScope.$broadcast('unauthorized');
            }
            return response;
        };
    }

})();
