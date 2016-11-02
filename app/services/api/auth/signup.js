'use strict';

angular.module('signupService.service', [])
    .service('signupService', ['$http', 'configProvider', signupServiceWrapper]);

function signupServiceWrapper($http, configProvider) {

  var service = {};
  service.registerUser = registerUser;
  return service;
  
  function registerUser(data) {
    return $http.post(configProvider.appUrl+'/registration', data);
  }


};
