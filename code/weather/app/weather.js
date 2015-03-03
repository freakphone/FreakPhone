/**
 * Created by djemi on 25.02.15.
 */
var app = angular.module('Weather', ['ui.router']);

app.factory('weatherSvc', function () {
    var svc = {};
    svc.getHourlyForecasts = function () {
        var forecasts = [];
        forecasts.push({hour: '8am', temperature: 50});
        forecasts.push({hour: '8am', temperature: 50});
        forecasts.push({hour: '8am', temperature: 50});
        forecasts.push({hour: '8am', temperature: 50});
        forecasts.push({hour: '8am', temperature: 50});
        forecasts.push({hour: '8am', temperature: 50});
        forecasts.push({hour: '8am', temperature: 50});
        return forecasts;
    };
    svc.getDailyForecasts = function () {
        var forecasts = [];
        forecasts.push({day: 'Monday', high: 75, low: 42});
        forecasts.push({day: 'Monday', high: 75, low: 42});
        forecasts.push({day: 'Monday', high: 75, low: 42});
        forecasts.push({day: 'Monday', high: 75, low: 42});
        forecasts.push({day: 'Monday', high: 75, low: 42});
        forecasts.push({day: 'Monday', high: 75, low: 42});
        return forecasts;
    };
    return svc;
});

app.controller('WeatherCtrl', function ($scope, weatherSvc) {
    $scope.hourForecasts = weatherSvc.getHourlyForecasts();
    $scope.dayForecasts = weatherSvc.getDailyForecasts();
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/daily');
    $stateProvider
        .state('hourly', {
            url: '/hourly',
            controller: 'WeatherCtrl',
            templateUrl: 'app/hourly.html'
        })
        .state('daily', {
            url: '/daily',
            controller: 'WeatherCtrl',
            templateUrl: 'app/daily.html'
        });
});
