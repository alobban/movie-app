/**
 * Created by vagrant on 8/2/16.
 */

describe('Search Controller', function() {

    var $location;
    var $scope;
    var $timeout;

    beforeEach(module('movieApp'));

    beforeEach(inject(function(_$controller_, _$location_, _$timeout_) {
        $scope = {};
        $location = _$location_;
        $timeout = _$timeout_;
        _$controller_('SearchController', { $scope: $scope, $location: _$location_, $timeout: _$timeout_ });
    }));

    it('redirects to query results for non-empty query', function() {
        $scope.query = 'star wars';
        $scope.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    });

    it('does not redirect to query results for empty query', function() {
        $scope.query = '';
        $scope.search();
        expect($location.url()).toBe('');
    });

    it('redirects after 1 second of keyboard inactivity', function() {
        $scope.query = 'star wars';
        $scope.keyup();
        $timeout.flush();
        expect($timeout.verifyNoPendingTasks).not.toThrow();
        expect($location.url()).toBe('/results?q=star%20wars');
    });
    
    it('cancels timeout in keydown', function () {
        $scope.query = 'star wars';
        $scope.keyup();
        $scope.keydown();
        expect($timeout.verifyNoPendingTasks).not.toThrow();
    });
    
    it('cancels timeout on search', function () {
        $scope.query = 'star wars';
        $scope.keyup();
        $scope.search();
        expect($timeout.verifyNoPendingTasks).not.toThrow();
    });
});