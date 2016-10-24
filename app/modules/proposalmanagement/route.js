'use strict';
(function() {

    angular
        .module('proposalmanagement')
        .config(['$stateProvider', stateProvider]);

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base.proposalview', {
                url: '/proposalview',
                views: {
                    'content': {
                        templateUrl: 'app/modules/proposalmanagement/views/proposal_view.html',
                        controller: 'proposalmanagementController'
                    }
                }
            })
            .state('base.proposalview.info', {
                url: '/proposalinfo',
                views: {
                    'proposalSec': {
                        templateUrl: 'app/modules/proposalmanagement/views/proposal_info.html',
                        controller: 'proposalmanagementController'
                    }
                }
            })
            .state('base.proposalview.spec', {
                url: '/proposalspec',
                views: {
                    'proposalSec': {
                        templateUrl: 'app/modules/proposalmanagement/views/proposal_spec.html',
                        controller: 'proposalmanagementController'
                    }
                }
            });
    }

})();
