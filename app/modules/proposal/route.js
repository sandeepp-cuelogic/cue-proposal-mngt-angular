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

            .state('base.addproposal', {
                url: '/addproposal',
                views: {
                    'content': {
                        templateUrl: 'app/modules/proposal/views/proposal_form.html'
                    }
                }
            })
            .state('base.editproposal', {
                url: '/editproposal/:id',
                views: {
                    'content': {
                        templateUrl: 'app/modules/proposal/views/proposal_form.html'
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
                  proposals: function ($http,configProvider,$stateParams) {
                    return {
                      getProposalInfo: function(){
                          return $http({method: 'GET', url: configProvider.appUrl + '/proposal/' + $stateParams.Id});
                      }
                    }

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
            .state('base.proposalview.spec.spec_add', {
                url: '/specification',
                params: {
                    specId: null
                },
                views: {
                    'spec_form': {
                        templateUrl: 'app/modules/proposal/views/spec_form.html',
                        controller: 'proposalViewController'
                    }
                }
            })
            .state('base.proposalview.spec.spec_edit', {
                url: '/specification/:specId',
                params: {
                    specId: null
                },
                views: {
                    'spec_form': {
                        templateUrl: 'app/modules/proposal/views/spec_form.html',
                        controller: 'proposalViewController'
                    }
                }
            });
    }

})();
