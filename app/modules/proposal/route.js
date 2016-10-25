(function() {
    'use strict';

    angular
        .module('proposal')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base.proposal', {
                url: '/proposal',
                views: {
                    'content': {
                        templateUrl: 'app/modules/proposal/views/proposal.html',
                        controller: 'proposalController'
                    }
                }
            });
    }

})();