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
                 $state.go('base.proposal');
                $scope.$parent.message = data.message;
                    });
            }
            else{
            var current_user = localStorageServiceWrapper.get('current_user');
            var user_id = current_user.user_id;  
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
              $state.go('base.proposal');
                $scope.$parent.message = data.message;
                    });
               }
          };
           proposalService.getUser()
            .success(function (data, status, headers, config) {
                      $scope.assignee = data;
                      
                    });
           proposalService.getClient()
           .success(function (data, status, headers, config) {
           			//console.log(data);
                      $scope.clients = data;
                      
                    });      
        },
        templateUrl: "app/directives/proposal/views/add-proposal.html"
        
    };
}
