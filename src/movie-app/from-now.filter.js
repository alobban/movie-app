/**
 * Created by vagrant on 8/4/16.
 */

angular.module('movieApp')
    .filter('fromNow', function fromNowFilter() {
        return function(value, baseDate) {
            if (!value) { throw 'date value cannot be undefined'; }
            
            var date = value;
            
            if (typeof(value) === 'string') {
                date = new Date(date);
            }
            
            if (isNaN(date.getTime())) {
                return value;
            }
            
            var YEAR_IN_MS = 60 * 60 * 24 * 365;
            var now = baseDate || new Date();
            var dateDiff = (now.getTime() - date.getTime()) / 1000;
            var tzDiff = (now.getTimezoneOffset() - date.getTimezoneOffset()) * 60;
            var diffInMs = dateDiff + tzDiff;
            
            var yearsDiff = Math.floor(diffInMs / YEAR_IN_MS);
            return yearsDiff + ' years ago';
        };
    });