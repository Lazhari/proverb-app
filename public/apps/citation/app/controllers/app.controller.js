(function() {
    'use strict';

    angular
        .module('citationApp')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', '$q', 'DataStore'];

    function AppCtrl($scope, $q, DataStore) {

        $scope.citations = [];
        $scope.authors = [];
        $scope.citationLoading = true;
        $scope.toUpdateCitation = toUpdateCitation;
        $scope.citationModal = {};
        $scope.notification = "";
        $scope.createCitation = createCitation;
        $scope.updateCitation = updateCitation;
        $scope.deleteCitation = deleteCitation;

        init();

        function init() {
            var promises = [getCitations(), getCitationsAuthors()];
            $q.all(promises).then(function() {
                console.log('The citation vies is ready');
            });
        }


        function getCitations() {
            DataStore.getCitations()
            .then(function(citations) {
                $scope.citations = citations;
                $scope.citationLoading = false;
            })
            .catch(function(err) {
                console.error(err);
            });
        }

        function getCitationsAuthors() {
            DataStore.getCitationsAuthors()
            .then(function(authors) {
                $scope.authors = authors;
            })
            .catch(function(err) {
                console.error(err);
            });
        }


        function deleteCitation(id) {
            console.log(id);
            DataStore.deleteCitation(id)
            .then(function(citation) {
                init();
            })
            .catch(function(err) {
                console.error(err);
            });
        }

        function toUpdateCitation(citationUp) {
            $scope.citationModal = citationUp;
        }

        function updateCitation(citationModal) {
            console.log("11" + JSON.stringify(citationModal));
            DataStore.updateCitation(citationModal)
            .then(function(citation) {
                console.log("Notif" + JSON.stringify(citation));
                init();
            })
            .catch(function(err) {
                console.error(err);
            });
        }

        function createCitation() {

        }
    }

})();
