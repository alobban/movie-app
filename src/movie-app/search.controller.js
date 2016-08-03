/**
 * Created by vagrant on 8/2/16.
 */

angular.module('movieApp')
    .controller('SearchController', function($location, $scope, $timeout) {
        var timeout;
        $scope.keyup = function() {
            timeout = $timeout($scope.search, 1000);
        };
        
        $scope.keydown = function() {
            $timeout.cancel(timeout);
        };
        
        $scope.search = function() {
            $timeout.cancel(timeout);
            if ($scope.query) {
                $location.path('/results').search('q', $scope.query);
            }
        };
    });