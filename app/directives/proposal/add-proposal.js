angular.module('proposal')
    .directive("proposalform", ['$state','$rootScope','$stateParams','proposalService',proposalform]);

function proposalform($state,$rootScope,$stateParams,proposalService) {
    return {
        restrict: "E",
        link: function ($scope, element, attrs) {
            $scope.bvalue = 'Create';
            $scope.title = 'Create';
            if($stateParams.id){
              proposalService.getProposalDetails($stateParams.id)
                .success(function (data, status, headers, config) {
                 $scope.pName = data.data.proposal.Proposal.title;
                   $scope.selectedclient = data.data.proposal.Client;
                   $scope.selectedassignee = data.data.proposal.User;
                   $scope.minfo = data.data.proposal.Proposal.more_info;
                   $scope.bvalue = 'Update';
                   $scope.title = 'Update';
                 })
                 .error(function (data, status, header, config) {
                      
                });
          }
          $scope.addProposal = function(){
            if($stateParams.id){
              var data = {id: $stateParams.id, title: $scope.pName, client_id: $scope.selectedclient.id};
              if($scope.selectedassignee != null)
              {
                data.assigned_to = $scope.selectedassignee.id;
                
              }
              if($scope.minfo != null)
              {
                data.more_info = $scope.minfo;
                
              }
              proposalService.updateProposal(data)
            .success(function (data, status, headers, config) {
              console.log(data);
              if(data.statusCode == 200){

                $rootScope.message = data.message;
                $state.go('base.proposal');
                
                      }
                      else{
                        $rootScope.message = data.message;
                      }
                    })
                    .error(function (data, status, header, config) {
              
                     $rootScope.message = data.message;
                });
            }
            else{
            var data = {title: $scope.pName, client_id: $scope.selectedclient.id, created_by: 1};
            if($scope.selectedassignee != null)
            {
              data.assigned_to = $scope.selectedassignee.id;
              
            }
            if($scope.minfo != null)
            {
              data.more_info = $scope.minfo;
              
            }
            proposalService.addProposal(data)
            .success(function (data, status, headers, config) {
              if(data.statusCode == 200){
                $rootScope.message = data.message;
                $state.go('base.proposal');
                
                      }
                      else{
                        $rootScope.message = data.message;
                      }
                    })
                    .error(function (data, status, header, config) {
              
                     $rootScope.message = data.message;
                });
               }
          };
           proposalService.getUser()
            .success(function (data, status, headers, config) {
                      $scope.assignee = data;
                      
                    })
                    .error(function (data, status, header, config) {
                     
             });
           proposalService.getClient()
           .success(function (data, status, headers, config) {
           			//console.log(data);
                      $scope.clients = data;
                      
                    })
                    .error(function (data, status, header, config) {
                     
             });      
        },
        templateUrl: "app/directives/proposal/views/add-proposal.html"
        
    };
}
