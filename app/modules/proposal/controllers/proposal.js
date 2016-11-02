(function() {

    'use strict';

    angular
        .module('proposal')
        .controller('proposalController', ['$scope', '$state','$rootScope','proposals','proposalService', proposalController]);
        

    function proposalController($scope, $state,$rootScope,proposals,proposalService) {

          function setPageNo(count, plimit){
              var page = [];
                  var tpage = count / plimit;
                  for(var i=0; i< tpage; i++){
                    page[i] = i+1;
                  } 
                  $scope.pages = page;
                  $scope.pageno = page[0];
          }

        $scope.userList = function() {
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
                      $rootScope.message = data.message;
                    })
                    .error(function (data, status, header, config) {
                     
                    });
                  }
                  else{
                    $scope.msg = 'No Proposal Data';
                  }
                 }
                 else{
                   $rootScope.message = data.message;
                 }
                
            })
            .error(function (data, status, header, config) {
              
            });
            
        };
        $scope.updateAssignee = function(item,proposal_id) {
            proposalService.updateAssignedUser(item.id,proposal_id)
            .success(function (data, status, headers, config) {
                      if(data.statusCode == 200){
                        $rootScope.message = data.message;
                          }
                          else{
                            $rootScope.message = data.message;
                          }

                    })
                    .error(function (data, status, header, config) {
                     
                    });
        };

       $scope.changePageNo = function(){
         proposalService.fetchProposals($scope.pageno,$scope.searchname)
         .success(function (data, status, headers, config) {
            $scope.getProposals = data.data.proposals;
         })
         .error(function (data, status, header, config) {
              
        });
       };

       $scope.search = function(){
        proposalService.fetchProposals(1,$scope.searchname)
         .success(function (data, status, headers, config) {
            if(data.statusCode == 200) {
              if(data.data.count >=1){
                $scope.getProposals = data.data.proposals;
                setPageNo(data.data.count,data.data.proposals.length);
              }
              else{
                $scope.msg = 'No Proposal Data';
              }
            }
            else{
                $rootScope.message = data.message;
            }
            
         })
         .error(function (data, status, header, config) {
              
        });
       }

       $scope.deactiveProposal = function(proposal_id){
        proposalService.deActiveProposal(proposal_id)
        .success(function (data, status, headers, config) {
            if(data.statusCode == 200){
                        $rootScope.message = data.message;
                         $state.reload();
                          }
                          else{
                            $rootScope.message = data.message;
                          }
           
         })
         .error(function (data, status, header, config) {
              
        });
      }
    };

    function proposalViewController($scope, $rootScope, $state, $stateParams, proposals, proposalService){
      $scope.proposalId = $stateParams.Id;
      proposals.getProposalInfo()
            .success(function (resp) {
              $scope.proposalDetails = resp.data;
            })
            .error(function (data, status, header, config) {
              $state.go('base.proposal');
              $rootScope.message = 'Please Try Again';
            });
        };
      })
})



})();
