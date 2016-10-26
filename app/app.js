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
        .constant('domain','http://172.21.31.243:8000')
        .service('APIInterceptor',['$q','$rootScope','localStorageServiceWrapper','$location',authService] )
        .run(function($rootScope) {
            $rootScope.message = '';
        });



    function initializeConfigurationPhase($urlRouterProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/login');
         $httpProvider.interceptors.push('APIInterceptor');
    }

    function authService($q, $rootScope, localStorageServiceWrapper, $location) {
        var service = this;
        service.request = function(config) {
            var access_token = localStorageServiceWrapper.get('token');
            console.log(access_token);
            if (access_token) {
                config.headers.Authorization = 'Bearer '+access_token;
            }
            return config;
        };
        service.responseError = function(error) {
            if (error.status === 401) {
                $rootScope.$broadcast('unauthorized') ;
                $location.url('/login');
            }
            return $q.reject(error);
            //return error ;
        };
    }

})();
