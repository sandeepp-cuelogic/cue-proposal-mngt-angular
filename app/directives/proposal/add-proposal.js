angular.module('proposal')
    .directive("proposalform", ['$state','$stateParams','proposalService','localStorageServiceWrapper' ,proposalform]);

function proposalform($state,$stateParams,proposalService,localStorageServiceWrapper ) {
    return {
        restrict: "E",
        link: function ($scope, element, attrs) {
            $scope.buttonValue = 'Create';
            $scope.title = 'Create';
            if($stateParams.id){
              proposalService.getProposalDetails($stateParams.id)
                .success(function (data, status, headers, config) {
                 $scope.proposalName = data.data.proposal.Proposal.title;
                   $scope.clientName = data.data.proposal.Client;
                   $scope.assigneeName = data.data.proposal.User;
                   $scope.moreInfo = data.data.proposal.Proposal.more_info;
                   $scope.buttonValue = 'Update';
                   $scope.title = 'Update';
                 })
                 .error(function (data, status, header, config) {
                      
                });
          }
          $scope.submitProposal = function(){
            if($stateParams.id){
              var data = {id: $stateParams.id, title: $scope.proposalName, client_id: $scope.clientName.id};
              if($scope.assigneeName!= null)
              {
                data.assigned_to = $scope.assigneeName.id;
              }
              
              if($scope.moreInfo != null)
              {
                data.more_info = $scope.moreInfo;
                
              }
              

            proposalService.updateProposal(data)
            .success(function (data, status, headers, config) {
                 if(data.statusCode == 200){
                
                $state.go('base.proposal');
                $scope.msg = data.message;
                      }
                      else{
                        $scope.message = data.message;
                      }
                    })
                    .error(function (data, status, header, config) {
              
                     $scope.message = data.message;
                });
            }
            else{
            var c_user = localStorageServiceWrapper.get('current_user');
            var user_id = c_user.user_id;  
            var data = {title: $scope.proposalName, client_id: $scope.clientName.id, created_by: user_id};
            if($scope.assigneeName != null)
            {
              data.assigned_to = $scope.assigneeName.id;
              
            }
            if($scope.moreInfo != null)
            {
              data.more_info = $scope.moreInfo;
              
            }
            proposalService.addProposal(data)
            .success(function (data, status, headers, config) {
              if(data.statusCode == 200){
                $scope.msg = data.message;
                $state.go('base.proposal');
                
                      }
                      else{
                        $scope.message = data.message;
                      }
                    })
                    .error(function (data, status, header, config) {
              
                     $scope.message = data.message;
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
