(function() {

    'use strict';

    angular
        .module('proposal')
        .controller('proposalController', ['$scope', '$state', 'proposalService', proposalController]);

    function proposalController($scope, $state, proposalService) {
        $scope.userList = function() {
            
            proposalService.getProposalList()
            .success(function (data, status, headers, config) {
                 console.log(data);
                 if(data.statusCode == 200) {
                  $scope.getProposals = data.data;
                  proposalService.getUserList()
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
