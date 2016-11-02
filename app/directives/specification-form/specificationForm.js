'use strict';
(function() {
    angular.module('proposal').directive('specificationForm',['$http','configProvider','$stateParams',specificationForm]) ;
    function specificationForm($http,configProvider,$stateParams ) {
        return {
          restrict: 'E' ,
          templateUrl : 'app/directives/specification-form/specification-form.html',
          link:function(scope,element,attr) {          		          		
          		scope.specification = {} ;
          		console.log("Submit specification called") ;
          		console.log(scope.proposalId) ;
          		scope.submitSpec = function() {
          			scope.specification['proposal_id'] = $stateParams.Id ;		
          			var url = configProvider.appUrl + '/specification' ;
          			var method  = 'POST' ;
          			if($stateParams.specId && $stateParams.specId > 0){
          				method = 'PUT' ;
          			}
          			$http({
				        method : method,
				        url :url,
				        data : scope.specification
				    }).then(function(response) {
				        console.log(response, "Proposal updated")
				    }, function(response) {
				        console.log(response, "Error in proposal updating")
				    });

          		}
          }          
        }
    }
})();