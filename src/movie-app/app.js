/**
 * Created by vagrant on 8/2/16.
 */

angular.module('movieApp', ['ui.bootstrap', 'ngRoute', 'omdb', 'movieCore'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'movie-app/home.html',
                controller: 'HomeController'
            })
            .when('/results', {
                templateUrl: 'movie-app/results.html',
                controller: 'ResultsController'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(function($logProvider) {
        // you can configure the debug option
        $logProvider.debugEnabled(true);
    });