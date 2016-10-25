(function() {

    'use strict';

    angular
        .module('proposal')
        .controller('proposalController', ['$scope', '$state','proposals','proposalService', proposalController]);

    function proposalController($scope, $state,proposals,proposalService) {
        $scope.userList = function() {
            //console.log(proposalService);
            proposals.getProposalList()
            .success(function (data, status, headers, config) {
                 console.log(data);
                 if(data.statusCode == 200) {
                  $scope.getProposals = data.data;
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



})();
