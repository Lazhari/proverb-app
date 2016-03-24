(function() {
    'use strict';

    angular
        .module('citationApp')
        .factory('DataStore', DataStore);

    DataStore.$inject = ['$http', '$q'];


    function DataStore($http, $q) {
        var services = {
            getCitations: getCitations,
            getCitationsAuthors: getCitationsAuthors
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
    }
})();
