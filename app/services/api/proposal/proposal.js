angular.module('proposal.service', [])
    .factory('proposalService', ['$http','configProvider', proposalService]);


    function proposalService($http,configProvider) {
    	var service = {};

        service.updateAssignedUser = updateAssignedUser;

	    return service;
    	
        function updateAssignedUser(user_id,proposal_id){
            data = {id: proposal_id, assigned_to: user_id};
            return $http.put(configProvider.appUrl+'/proposal', data);
        }
	}