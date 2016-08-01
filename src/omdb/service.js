/**
 * Created by vagrant on 8/1/16.
 */

angular.module('omdb', [])
.factory('omdbApi', function($http, $q) {
    var service = {};
    var baseUrl = 'http://www.omdbapi.com/?';
    
    service.search = function(query) {
        var deferred = $q.defer();
        $http.get(baseUrl + 't=' + encodeURIComponent(query))
            .success(function(data) {
                deferred.resolve(data);
            });
        return deferred.promise;
    };
    
    service.find = function(id) {
        var deferred = $q.defer();
        $http.get(baseUrl + 'i=' + id)
            .success(function(data) {
                deferred.resolve(data);
            });
        return deferred.promise;
    };
    
    return service;
});