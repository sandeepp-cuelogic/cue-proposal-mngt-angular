'use strict';

angular.module('signupService.service', [])
    .service('signupService', ['$http','domain', signupServiceWrapper]);

function signupServiceWrapper($http, domain) {

  var service = {};
  function registerUser(data) {
      console.log(data);
      $http.post(domain + 'registration', data)
        .then(function successCallback(response) {
          console.log(response);
        }, function errorCallback(response) {
          console.log(response);
        });
  }

  service.registerUser = registerUser;

  return service;

};
