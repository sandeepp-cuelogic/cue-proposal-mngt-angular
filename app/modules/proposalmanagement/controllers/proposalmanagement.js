(function() {

    'use strict';

    angular
        .module('proposalmanagement')
        .controller('proposalmanagementController', ['$scope', '$state',  dashboardController]);

    function dashboardController($scope, $state) {
        $scope.userList = function() {
            //calling API and get user list
          //  $scope.getUsers = dashboardService.getUserList().userDetails;
            $scope.subTabMenus = [{
                'tabMenu': 'All',
                'action': 'dashboard'
            }, {
                'tabMenu': 'Proposals',
                'action': 'proposals'
            }]
        }
    }

})();
