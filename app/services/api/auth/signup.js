'use strict';

angular.module('signupService.service', [])
    .service('signupService', signupServiceWrapper);

function signupServiceWrapper($http) {

  var service = {};

  function registerUser(data) {
      console.log(data);
      $http.post('http://172.21.31.243:8000/registration', data)
        .then(function successCallback(response) {
          console.log(response);
          // this callback will be called asynchronously
          // when the response is available
        }, function errorCallback(response) {
          console.log(response);
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
  }

  service.registerUser = registerUser;

  return service;

};
