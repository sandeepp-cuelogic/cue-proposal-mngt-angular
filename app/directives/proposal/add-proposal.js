angular.module('proposal')
    .directive("proposalform", proposalform);

function proposalform() {
    return {
        restrict: "E",
        scope: {
            
        },
        templateUrl: "app/directives/proposal/views/add-proposal.html"
        
    };
}
