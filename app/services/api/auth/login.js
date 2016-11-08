angular.module('login.service', [])
    .factory('loginService', ['$http','configProvider','localStorageServiceWrapper', loginService]);


    function loginService($http,configProvider,localStorageServiceWrapper) {

    	var service = {};

	    service.validate = validate;
      service.isLoggedIn = isLoggedIn;  

	    return service;
    	
        function validate(email, password){
              var data = { email: email, password: password};
              return $http.post(configProvider.appUrl+'/login', data);
        }

        function isLoggedIn(){
          var c_user = localStorageServiceWrapper.get('current_user');
          console.log(c_user);
        }
	}