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
                throw 'Something went wrong!';
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