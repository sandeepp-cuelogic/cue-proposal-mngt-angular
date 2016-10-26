'use strict';

angular.module('signupService.service', [])
    .service('signupService', ['$http', signupServiceWrapper]);

function signupServiceWrapper($http) {

  var service = {};
  function registerUser(data) {
      //console.log(data);
    return  $http.post('http://172.21.31.243:8000/registration', data);
  }

  service.registerUser = registerUser;

  return service;

};
