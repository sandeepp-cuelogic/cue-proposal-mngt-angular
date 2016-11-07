(function() {

    'use strict';

    angular
        .module('proposal')
        .controller('proposalController', ['$scope', '$state','proposals','proposalService', proposalController])
        .controller('proposalViewController', ['$scope', '$state', '$stateParams', 'proposals', 'proposalService', proposalViewController]);

    function proposalController($scope, $state,proposals,proposalService) {



          function setPageNo(count, plimit){
              var page = [];
              var tpage = count / plimit;
              for(var i=0; i< tpage; i++){
                page[i] = i+1;
              } 
              $scope.pages = page;
              $scope.pageno = page[0];
          }

        $scope.proposalList = function() {
            //console.log(proposalService);
            proposals.getProposalList()
            .success(function (data, status, headers, config) {
               //  console.log(data.data.proposals);
                 
                    if(data.data.count >=1) {
                    $scope.getProposals = data.data.proposals;

                  setPageNo(data.data.count,data.data.proposals.length);
                  
                  proposals.getUserList()
                  .success(function (data, status, headers, config) {
                      $scope.users =  data; 

                      $scope.$parent.message = data.message;
                    });
                  }
                  else{
                    $scope.$parent.message = 'No Proposal Data';
                  }
                 
                
            });
            
        };
        $scope.updateAssignee = function(item,proposal_id) {
            proposalService.updateAssignedUser(item.id,proposal_id)
            .success(function (data, status, headers, config) {
                      if(data.statusCode == 200){
                        $scope.$parent.message  = data.message;
                          }
                          else{
                            $scope.$parent.message = data.message;
                          }

                    });
        };

       $scope.changePageNo = function(){
         proposalService.fetchProposals($scope.pageno,$scope.searchValue)
         .success(function (data, status, headers, config) {
            $scope.getProposals = data.data.proposals;
            $scope.$parent.message = data.message;
         });
       };

       $scope.search = function(){
        proposalService.fetchProposals(1,$scope.searchValue)
         .success(function (data, status, headers, config) {
           
              if(data.data.count >=1){
                $scope.getProposals = data.data.proposals;
                setPageNo(data.data.count,data.data.proposals.length);
                $scope.$parent.message = data.message;
              }
              else{
                $scope.$parent.message = 'No Proposal Data';
              }
            
            
         });
       }

       $scope.deactiveProposal = function(proposal_id){
        proposalService.deActiveProposal(proposal_id)
        .success(function (data, status, headers, config) {
            
                         $scope.$parent.message = data.message;
                         $state.reload();
                         
         });
      }
    };

    function proposalViewController($scope, $state, $stateParams, proposals, proposalService){
      $scope.proposalId = $stateParams.Id;
    
     proposals.getProposalInfo()
            .success(function (resp) {
              $scope.proposalDetails = resp.data;
              $scope.specifications = $scope.proposalDetails.specifications ;
              $scope.$parent.message = resp.data.message;
            })
            .error(function (data, status, header, config) {
              $state.go('base.proposal');
              $scope.$parent.message = 'Please Try Again';
            });
        };





})();
