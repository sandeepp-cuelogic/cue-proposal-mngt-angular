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
            'proposal',
        ])
        .config(['$urlRouterProvider', '$locationProvider', '$httpProvider', initializeConfigurationPhase])
        .service('APIInterceptor',['$q','$rootScope','localStorageServiceWrapper','$location',authService] )
        .run(function($rootScope,$location,localStorageServiceWrapper) {
            $rootScope.message = '';
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
               var loggedIn = false;
               var c_user = localStorageServiceWrapper.get('current_user');
               if(c_user)
                {
                    var access_token = c_user.token;
                    if (access_token) {
                        loggedIn = true;
                    }
                }
                
                if(loggedIn) {
                    $location.path('/proposal');
                }
            });
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
        var service = this ;
        service.request = function(config) {
            var c_user = localStorageServiceWrapper.get('current_user');
            if(c_user)
            {
                var access_token = c_user.token;
                if (access_token) {
                    config.headers.Authorization = 'Bearer '+access_token;
                }
            }
            
            return config;
        };
        service.responseError = function(error) {
            $rootScope.$broadcast('requestErrorHandler', error.data.message) ;
            return $q.reject(error) ;
        };
    }

})();