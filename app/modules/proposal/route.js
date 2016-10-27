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
                        getProposalList: function() {
                            return $http({ method: 'GET', url: configProvider.appUrl+'/proposals/1?page=1' });
                        },
                        getUserList: function() {
                            return $http({method: 'GET', url: configProvider.appUrl+'/users'});
                        }
                      }
                    }
                }
            })
            .state('base.proposalview', {
                url: '/proposalview/:Id',
                abstract:true,
                //redirectTo:'base.proposalview.info',
                views: {
                    'content': {
                        templateUrl: 'app/modules/proposal/views/proposal_view.html',
                        controller: 'proposalViewController'
                    }
                },
                resolve: {
                  proposalDetails: function(configProvider , $stateParams,$http ) {
                    console.log("proposalDetails Resolve called");
                    var url = configProvider.appUrl +'/proposal/'+$stateParams.Id;
                    return $http.get(url).then(function(proposalData){
                        console.log(proposalData, "Proposal data found");
                        return proposalData;
                    });
                  }
                }
            })
            .state('base.proposalview.info', {
                url: '/info',
                views: {
                    'proposalSec': {
                        templateUrl: 'app/modules/proposal/views/proposal_info.html',
                        controller: 'proposalViewController'
                    }
                }
            })
            .state('base.proposalview.spec', {
                url: '/spec',
                views: {
                    'proposalSec': {
                        templateUrl: 'app/modules/proposal/views/proposal_spec.html',
                        controller: 'proposalViewController'
                    }
                }
            })
            .state('base.proposalview.spec_form', {
                url: '/spec_form/:Id?',
                templateUrl: 'app/modules/proposal/views/specification_form.html'
            });
    }

})();
