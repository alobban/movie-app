/**
 * Created by vagrant on 8/2/16.
 */

angular.module('movieApp')
    .controller('ResultsController', function($scope, $location, omdbApi, $exceptionHandler) {
        var query = $location.search().q;
        omdbApi.search(query)
            .then(function(data) {
                $scope.results = data.Search;
            })
            .catch(function(e) {
                $exceptionHandler(e);
            })
        ;
        
        $scope.expand = function expand(index, id) {
            omdbApi.find(id)
                .then(function(data) {
                    console.log(data);
                    $scope.results[index].data = data;
                    $scope.results[index].open = true;
                })
            ;
        }
    });