angular.module('proposal.service', [])
    .factory('proposalService', ['$http','domain', proposalService]);


    function proposalService($http,domain) {
    	var service = {};

	    service.getProposalList = getProposalList;
        service.getUserList = getUserList;
        service.updateAssignedUser = updateAssignedUser;

	    return service;
    	function getProposalList(){
    		 
        return $http.get(domain+'/proposals/1');
    	}

        function getUserList(){
            return $http.get(domain+'/users');
        }

        function updateAssignedUser(user_id,proposal_id){
            data = {id: proposal_id, assigned_to: user_id};
            return $http.put(domain+'/proposal', data);
        }
	}