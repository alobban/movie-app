/**
 * Created by vagrant on 8/2/16.
 */

describe('Search Controller', function() {
    var $vm;
    var $location;
    var $controller;
    
    beforeEach(angular.mock.module('movieApp'));
        
    beforeEach(inject(function(_$controller_, _$location_) {
        $controller = _$controller_;
        $location = _$location_;
    }));
        
    it('redirects to the query results page for non-empty query', function() {
        $vm = $controller('SearchController', { $location: $location }, { query: 'star wars' });
        $vm.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    });
    
    it('does not redirect to query results for empty query', function() {
        $vm = $controller('SearchController', { $location: $location }, { query: '' });
        $vm.search();
        expect($location.url()).toBe('');
    });
});