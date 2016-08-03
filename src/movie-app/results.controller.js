/**
 * Created by vagrant on 8/2/16.
 */

angular.module('movieApp')
    .controller('ResultsController', function($scope, $location, omdbApi) {
        var query = $location.search().q;
        omdbApi.search(query)
            .then(function(data) {
                $scope.results = data.Search;
            })
            .catch(function() {
                $scope.errorMessage = 'Something went wrong!';
            });
    });