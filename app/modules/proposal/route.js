(function() {
    'use strict';

    angular
        .module('proposal')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base.proposal', {
                url: '/proposal',
                views: {
                    'content': {
                        templateUrl: 'app/modules/proposal/views/proposal.html',
                        controller: 'proposalController'
                    }
                },
                resolve: {
                proposals: function ($http,configProvider) {
                  return {
                    getProposalList: function(){
                        //console.log(configProvider);
                        return $http({method: 'GET', url: configProvider.appUrl+'/proposals/1?page=1'});
                    },
                    getUserList: function(){
                        return $http({method: 'GET', url: configProvider.appUrl+'/users'});
                    }
                  }
                  
                }
                }
            })

            .state('base.proposalform', {
                url: '/proposalform/:id?',
                views: {
                    'content': {
                        templateUrl: 'app/modules/proposal/views/proposal_form.html'
                    }
                }
            })
            .state('base.proposalview', {
                url: '/proposalview',
                abstract:true,
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