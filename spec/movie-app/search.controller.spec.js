/**
 * Created by vagrant on 8/2/16.
 */

describe('Search Controller', function() {
    var $scope;
    var $location;
        
    beforeEach(function() {
        $location = {
            url: ''
        };
        $scope = {};
        $scope.search = function() {
            if ($scope.query) {
                $location.url = '/results?q=star%20wars';
            }
        };
    });
        
    it('redirects to the query results page for non-empty query', function() {
        $scope.query = 'star wars';
        $scope.search();
        expect($location.url).toBe('/results?q=star%20wars');
    });
    
    it('does not redirect to query results for empty query', function() {
        $scope.query = '';
        $scope.search();
        expect($location.url).toBe('');
    });
});