'use strict';
(function() {
    angular.module('proposal').directive('specificationForm',['$location','$state','$http','configProvider','$stateParams','localStorageServiceWrapper',specificationForm]) ;
    function specificationForm($location,$state,$http,configProvider,$stateParams,localStorageServiceWrapper ) {
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
          		scope.submitSpecification = function() {
          			scope.specification['proposal_id'] = $stateParams.Id ;
                var url = configProvider.appUrl + '/specification' ;
          			var method ;
                

                if($stateParams.specId && $stateParams.specId > 0){
          				method = 'PUT' ;
                 
          			}
                else{
                  method  = 'POST' ;
                  var c_user = localStorageServiceWrapper.get('current_user');
                  var user_id = c_user.user_id;
                  scope.specification['created_by'] = user_id ;
                  
                }
                
          			$http({
				        method : method,
				        url :url,
				        data : scope.specification
				    }).then(function(response) {
              
              $state.go('base.proposalview.spec', {},{reload: true});
            
              scope.$parent.message = response.data.message;
             
              
				    }, function(response) {
				        //console.log(response, "Error")
                scope.$parent.message = response.data.message;
				    });


          		}
          }          
        }
    }
})();