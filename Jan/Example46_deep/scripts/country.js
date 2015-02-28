var countryApp = angular.module('countryApp', ['ui.router']);

// *** Config **************************************
countryApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/liste');
    $stateProvider
        .state('liste', {
            url: '/liste',
            templateUrl: 'partials/country-list.html',
            controller: 'CountryListCtrl'
        })

        .state('country', {
            url: '/country/:countryId',
            templateUrl: 'partials/country-detail.html',
            controller: 'CountryDetailCtrl'
        });
});

// *** Factory **************************************
countryApp.factory('countriesService', function($http) {
    var service = {};
    service.getListOfCountries = function (callback) {
        $http({
            method: 'GET',
            url: 'db/countries.json',
            cache: true
        }).success(callback);
    };
    service.getCountryDetails = function(countryId, callback) {
        $http({
            method: 'GET',
            url: 'db/country_' + countryId + '.json',
            cache: true
        }).success(callback);
    };
    return service;
});

// *** Directive ************************************
countryApp.directive('country', function() {
    return {
        scope: {
            country: '='
        },
        restrict: 'A',
        templateUrl: 'partials/country.html'
    };
});

// *** Controller **************************************
countryApp.controller('CountryListCtrl', function ($scope, countriesService){
    countriesService.getListOfCountries(function(countries) {
        $scope.countries = countries;
        $scope.sortField = 'name';
    });
});

// *** Controller **************************************
countryApp.controller('CountryDetailCtrl', function ($scope, $stateParams, countriesService) {
    countriesService.getCountryDetails($stateParams.countryId, function(country) {
        $scope.country = country;
    });
});