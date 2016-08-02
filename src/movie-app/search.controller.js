/**
 * Created by vagrant on 8/2/16.
 */

angular.module('movieApp')
    .controller('SearchController', function($location) {
        var vm = this;
        vm.search = function() {
            if (vm.query) {
                $location.path('/results').search('q', vm.query);
            }
        };
    });