(function() {

    'use strict';

    angular
        .module('proposalmanagement')
        .controller('proposalmanagementController', ['$scope', '$state', '$stateParams',  dashboardController]);

    function dashboardController($scope, $state, $stateParams) {
        $scope.proposal = {};
        if($stateParams.Id) {
          $scope.setTitle = 'Edit user';
          $scope.empData = employeeService.getEmpList($stateParams.Id);
        }else{
          $scope.setTitle = 'Add user';
        }
    }

})();
