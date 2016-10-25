'use strict';

angular.module('loginservice.service', [])
    .service('loginservice', loginservicewrap);

    function loginservicewrap($http,domain){
    	var service = {};
    	
		function validate(email, password){
			 var data = { email: email, password: password};
			 var config = {};
			
			return $http.post(domain+'/login', data);
            
		}
		service.validate = validate;
   		return service;
    }