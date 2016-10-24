'use strict';

angular.module('loginservice.service', [])
    .service('loginservice', loginservicewrap);

    function loginservicewrap($http){
    	var service = {};
    	
		function validate(email, password){
			 var data = { email: email, password: password};
			 var config = {};
			
			return $http.post('http://172.21.31.243:8000/login', data);
            
		}
		service.validate = validate;
   		return service;
    }