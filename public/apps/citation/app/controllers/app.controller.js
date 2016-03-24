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

        $scope.createCitation = createCitation;

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


        function createCitation() {

        }
    }

})();
