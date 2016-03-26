(function() {
    'use strict';

    angular
        .module('citationApp')
        .factory('DataStore', DataStore);

    DataStore.$inject = ['$http', '$q'];


    function DataStore($http, $q) {
        var services = {
            getCitations: getCitations,
            getCitationsAuthors: getCitationsAuthors,
            deleteCitation: deleteCitation,
            updateCitation: updateCitation
        };

        return services;


        // Your functions

        function getCitations() {
            var deferred = $q.defer();
            $http.get('/api/v1/citations')
              .success(function(resp, status) {
                  deferred.resolve(resp);
              })
              .error(function(error, status) {
                  deferred.reject(error);
              });
              return deferred.promise;
        }

        function getCitationsAuthors() {
            var deferred = $q.defer();
            $http.get('/api/v1/citations-authors')
              .success(function(resp, status) {
                  deferred.resolve(resp);
              })
              .error(function(error, status) {
                  deferred.reject(error);
              });
              return deferred.promise;
        }

        function deleteCitation(id) {
            var deferred = $q.defer();
            $http.delete('/api/v1/citations/'+id)
              .success(function(resp, status) {
                  deferred.resolve(resp);
              })
              .error(function(error, status) {
                  deferred.reject(error);
              });
              return deferred.promise;
        }

        function updateCitation(citationModal) {
          var deferred = $q.defer();
          console.log("12" + JSON.stringify(citationModal));
          $http.put('/api/v1/citations/'+citationModal._id, citationModal)
          .success(function(resp, status) {
                              console.log('resp01' + JSON.stringify(resp));
            deferred.resolve(resp);
                              console.log('resp02' + JSON.stringify(resp));
          })
          .error(function(error, status) {
            deferred.reject(error);
          });
          return deferred.promise;
        }
    }
})();
