(function() {

    'use strict';

    angular
        .module('proposal')
        .controller('proposalController', ['$scope', '$state','proposals','proposalService', proposalController])
        .controller('proposalViewController', ['$scope', '$rootScope', '$state', '$stateParams','proposalService', proposalViewController]);

    function proposalController($scope, $state,proposals,proposalService) {
        $scope.userList = function() {
            //console.log(proposalService);
            proposals.getProposalList()
            .success(function (data, status, headers, config) {
                 console.log(data);
                 if(data.statusCode == 200) {
                  $scope.getProposals = data.data.proposals;
                  console.log(data.data.proposals);
                  proposals.getUserList()
                  .success(function (data, status, headers, config) {
                      $scope.users =  data;
                      //$scope.selectitem = $scope.users[8];
                    })
                    .error(function (data, status, header, config) {

                    });
                 }
                 else{
                   console.log("data") ;
                 }

            })
            .error(function (data, status, header, config) {

            });

        };
        $scope.updateAssignee = function(item,proposal_id) {
            proposalService.updateAssignedUser(item.id,proposal_id)
            .success(function (data, status, headers, config) {


              })
              .error(function (data, status, header, config) {

              });
        }
    };

    function proposalViewController($scope, $rootScope, $state, $stateParams, proposalService){
        $scope.proposalId = $stateParams.Id;
        $scope.proposalInfo = function(){
          proposalService.getProposalDetails($scope.proposalId)
            .success(function (resp) {
              $scope.proposalDetails =   resp.data.proposal;
            })
            .error(function (data, status, header, config) {
              $state.go('base.proposal');
              $rootScope.message = 'Please Try Again';
            });
        }
    };
})();
