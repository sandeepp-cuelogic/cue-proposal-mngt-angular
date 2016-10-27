'use strict';
(function() {

    angular
        .module('auth')
        .config(['$stateProvider', stateProvider]);

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base.login', {
                url: '/login',
                views: {
                    'content': {
                        templateUrl: 'app/modules/auth/views/login.html',
                        controller: 'loginController'
                    }
                }
            })
            .state('base.logout', {
                url: '/logout',
                views: {
                    'content': {
                        templateUrl: 'app/modules/auth/views/logout.html',
                        controller: 'loginController'
                    }
                }
            })
            .state('base.signup', {
                url: '/signup',
                views: {
                    'content': {
                        templateUrl: 'app/modules/auth/views/signup.html',
                        controller: 'signupController'
                    }
                }
            });
    }

})();
