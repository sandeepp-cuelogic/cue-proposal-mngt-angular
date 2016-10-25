angular.module('proposal.service', [])
    .factory('proposalService', ['$http', proposalService]);


    function proposalService($http) {
    	var service = {};

	    service.getProposalList = getProposalList;
        service.getUserList = getUserList;
        service.updateAssignedUser = updateAssignedUser;

	    return service;
    	function getProposalList(){
    		 
        return $http.get('http://172.21.31.243:8000/proposals/1');
    	}

        function getUserList(){
            return $http.get('http://172.21.31.243:8000/users');
        }

        function updateAssignedUser(user_id,proposal_id){
            data = {id: proposal_id, assigned_to: user_id};
            return $http.put('http://172.21.31.243:8000/proposal', data);
        }
	}