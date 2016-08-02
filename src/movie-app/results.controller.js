/**
 * Created by vagrant on 8/2/16.
 */

angular.module('movieApp')
    .controller('ResultsController', function($scope, $location) {
        $scope.results = [];
        $scope.results.push({ data: { Title: 'Star Wars: Episode IV - A New Hope' }});
        $scope.results.push({ data: { Title: 'Star Wars: Episode V - The Empire Strikes Back' }});
        $scope.results.push({ data: { Title: 'Star Wars: Episode VI - Return of the Jedi' }});
    });