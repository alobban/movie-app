/**
 * Created by vagrant on 8/4/16.
 */

describe('From Now Filter', function() {
    var fromNow;
    
    beforeEach(module('movieApp'));
    
    beforeEach(inject(function(_$filter_) {
        fromNow = _$filter_('fromNow');
    }));
    
    it('returns throw error from unidefined', function() {
        expect(fromNow).toThrow('date value cannot be undefined');
    });
    
    it('returns same value for invalid date', function() {
        expect(fromNow('foo')).toBe('foo');
    });
    
    it('returns value of years ago for date object', function() {
        var value = new angular.mock.TzDate(0, '2013-07-01T00:00:00.000Z');
        var baseDate = new angular.mock.TzDate(0, '2015-08-01T21:00:00.000Z');
        expect(fromNow(value, baseDate)).toBe('2 years ago');
    });
});