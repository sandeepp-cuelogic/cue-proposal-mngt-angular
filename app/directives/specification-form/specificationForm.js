'use strict';
(function() {
    angular.module('proposal').directive('specificationForm',['$location','$rootScope','$http','configProvider','$stateParams',specificationForm]) ;
    function specificationForm($location,$rootScope,$http,configProvider,$stateParams ) {
        return {
          restrict: 'E' ,
          templateUrl : 'app/directives/specification-form/views/specification-form.html',
          link:function(scope,element,attr) {          		          		
          		scope.specification = {} ;
              //console.log(scope.proposalDetails);
              if($stateParams.specId && scope.proposalDetails){
                
                for(var i=0; i<scope.proposalDetails.specifications.length; i++){
                  if(scope.proposalDetails.specifications[i].id == $stateParams.specId){
                    scope.specification.title = scope.proposalDetails.specifications[i].title;
                    scope.specification.info = scope.proposalDetails.specifications[i].info;
                    scope.specification.cost = scope.proposalDetails.specifications[i].cost;
                    scope.specification.id = scope.proposalDetails.specifications[i].id;
                    break;
                  }
                }
              }
          		scope.submitSpec = function() {
          			scope.specification['proposal_id'] = $stateParams.Id ;
                var url = configProvider.appUrl + '/specification' ;
          			var method ;
                

                if($stateParams.specId && $stateParams.specId > 0){
          				method = 'PUT' ;
                 
          			}
                else{
                  method  = 'POST' ;
                  scope.specification['created_by'] = '1' ;
                  
                }
                
          			$http({
				        method : method,
				        url :url,
				        data : scope.specification
				    }).then(function(response) {
              
              $location.url('/proposalview/'+$stateParams.Id+'/spec');
              
              $rootScope.spmsg = response.data.message;
             
              
				    }, function(response) {
				        //console.log(response, "Error")
                $rootScope.spmsg = response.data.message;
				    });


          		}
          }          
        }
    }
})();