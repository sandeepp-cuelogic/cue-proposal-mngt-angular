angular.module('login.service', [])
    .factory('loginService', ['$http','configProvider','localStorageServiceWrapper', loginService]);


    function loginService($http,configProvider,localStorageServiceWrapper) {

    	var service = {};

	    service.validate = validate;
      

	    return service;
    	
        function validate(email, password){
              var data = { email: email, password: password};
              return $http.post(configProvider.appUrl+'/login', data);
        }

	}