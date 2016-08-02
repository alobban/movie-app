/**
 * Created by vagrant on 8/2/16.
 */

angular.module('movieApp', [])
    .controller('SearchController', function($scope, $location) {
        $scope.search = function() {
            if ($scope.query) {
                $location.path('/results').search('q', $scope.query);
            }
        };
    });