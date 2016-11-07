(function() {

    'use strict';

    angular
        .module('proposal')
        .controller('proposalController', ['$scope', '$state','proposals','proposalService', proposalController])
        .controller('proposalViewController', ['$scope', '$state', '$stateParams', 'proposals', 'proposalService', proposalViewController]);

    function proposalController($scope, $state,proposals,proposalService) {

          function setPageNo(count, plimit) {
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
                 if(data.statusCode == 200) {
                    if(data.data.count >=1) {
                    $scope.getProposals = data.data.proposals;

                  setPageNo(data.data.count,data.data.proposals.length);
                  
                  proposals.getUserList()
                  .success(function (data, status, headers, config) {
                      $scope.users =  data; 
                      //$scope.message = data.message;
                    })
                    .error(function (data, status, header, config) {
                     
                    });
                  }
                  else{
                    $scope.message = 'No Proposal Data';
                  }
                 }
                 else{
                  $scope.message = data.message;
                 }
                
            })
            .error(function (data, status, header, config) {
              
            });
            
        };
        $scope.updateAssignee = function(item,proposal_id) {
            proposalService.updateAssignedUser(item.id,proposal_id)
            .success(function (data, status, headers, config) {
                      if(data.statusCode == 200){
                        $scope.message = data.message;
                          }
                          else{
                            $scope.message = data.message;
                          }

                    })
                    .error(function (data, status, header, config) {
                     
                    });
        };

       $scope.changePageNo = function(){
         proposalService.fetchProposals($scope.pageno,$scope.searchValue)
         .success(function (data, status, headers, config) {
            $scope.getProposals = data.data.proposals;
            $scope.message = data.message;
         })
         .error(function (data, status, header, config) {
              
        });
       };

       $scope.search = function(){
        proposalService.fetchProposals(1,$scope.searchValue)
         .success(function (data, status, headers, config) {
            if(data.statusCode == 200) {
              if(data.data.count >=1){
                $scope.getProposals = data.data.proposals;
                setPageNo(data.data.count,data.data.proposals.length);
                $scope.message = data.message;
              }
              else{
                $scope.message = 'No Proposal Data';
              }
            }
            else{
                $scope.message = data.message;
            }
            
         })
         .error(function (data, status, header, config) {
              
        });
       }

       $scope.deactiveProposal = function(proposal_id){
        proposalService.deActiveProposal(proposal_id)
        .success(function (data, status, headers, config) {
            if(data.statusCode == 200){
                         $state.reload();
                         $scope.message = data.message;
                          }
                          else{
                            $scope.message = data.message;
                          }
           
         })
         .error(function (data, status, header, config) {
              
        });
      }
    };

    function proposalViewController($scope, $state, $stateParams, proposals, proposalService){
      $scope.proposalId = $stateParams.Id;
    
     proposals.getProposalInfo()
            .success(function (resp) {
              $scope.proposalDetails = resp.data;
              $scope.specifications = $scope.proposalDetails.specifications ;
              $scope.message = resp.data.message;
            })
            .error(function (data, status, header, config) {
              $state.go('base.proposal');
              $scope.message = 'Please Try Again';
            });
        };





})();
