angular.module('proposal.service', [])
    .factory('proposalService', ['$http','configProvider', proposalService]);


    function proposalService($http,configProvider) {
    	var service = {};

        service.updateAssignedUser = updateAssignedUser;

        service.fetchProposals = fetchProposals;
        service.deActiveProposal = deActiveProposal;
        service.getUser = getUser;
        service.getClient = getClient;
        service.addProposal = addProposal;
        service.getProposalDetails = getProposalDetails;
        service.updateProposal = updateProposal;
        

	    return service;

        function updateAssignedUser(user_id,proposal_id){
            data = {proposal_id: proposal_id, assigned_to: user_id};
            return $http.post(configProvider.appUrl+'/proposal_assign', data);
        }

        function fetchProposals(page_no,qstring){
            var url = configProvider.appUrl+'/proposals/1?page='+page_no;
            if(qstring != undefined){
                url += '&s='+qstring;
            }
            return $http.get(url);
        }

        function deActiveProposal(proposal_id){
            data = {proposal_id: proposal_id, status: 0};
            return $http.post(configProvider.appUrl+'/proposal_change_status', data);
        }

        function getUser(){
            return $http({method: 'GET', url: configProvider.appUrl+'/users'});
        }

        function getClient(){
            return $http({method: 'GET', url: configProvider.appUrl+'/clients'});
        }

        function addProposal(data){
            return $http.post(configProvider.appUrl+'/proposal', data);
        }

        function getProposalDetails(proposalId){
          return $http.get(configProvider.appUrl + '/proposal/' + proposalId);
        }

        function updateProposal(data){
            return $http.put(configProvider.appUrl + '/proposal', data);
        }
        
	}
