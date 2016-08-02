/**
 * Created by vagrant on 8/2/16.
 */

describe('MovieCore', function() {
    
    var PopularMovies;
    var $httpBackend;
    
    beforeEach(module('movieCore'));
    
    beforeEach(inject(function(_PopularMovies_, _$httpBackend_) {
        PopularMovies = _PopularMovies_;
        $httpBackend = _$httpBackend_;
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
    });
    
    it('creates popular movie', function() {
        
        // var expectedData = function(data) {
        //     return angular.fromJson(data).movieId === 'tt0076759';
        // };
        // var expectedData =  '{"movieId":"tt0076759","description":"Great movie!"}';
        var expectedData = /{"movieId":"tt0076759","description":".*"}/;
        
        $httpBackend.expectPOST(/./, expectedData)
            .respond(201);
        
        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'Great movie!'
        });
        
        popularMovie.$save();
        
        expect($httpBackend.flush).not.toThrow();
    });
    
    it('gets popular movie by id', function() {
        $httpBackend.expectGET('popular/tt0076759')
            .respond(200);
        
        PopularMovies.get({ movieId: 'tt0076759' });

        expect($httpBackend.flush).not.toThrow();
    });
    
    it('updates popular movie', function() {
        $httpBackend.expectPUT('popular')
            .respond(200);
        
        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'Great movie!'
        });
        popularMovie.$update();

        expect($httpBackend.flush).not.toThrow();
    });
    
    it('authenticates requests', function() {
        // '{"authToken": "teddybear","Accept": "application/json, text/plain, */*"}'
        var expectedHeaders = function(headers) {
            return angular.fromJson(headers).authToken === 'teddybear';
        };
        
        $httpBackend.expectGET('popular/tt0076759', expectedHeaders)
            .respond(200);
        
        PopularMovies.get({ movieId: 'tt0076759' });
        
        $httpBackend.flush(1);
    });
});