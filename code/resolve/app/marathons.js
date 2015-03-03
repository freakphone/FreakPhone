/**
 * Created by djemi on 26.02.15.
 */
(function () {
    'use strict';

    var app = angular.module('Marathons', ['ui.router']);

    // This uses the $q service to simulate the delay of HTTP requests
    // and returning a promise.

    app.factory('marathonSvc', function ($q, $timeout) {
        var svc = {};
        svc.getMarathons = function () {
            var dfr = $q.defer();
            $timeout(function () {
                dfr.resolve([
                    {name: 'Boston Marathon', month: 'April', state: 'Massachusetts'},
                    {name: 'Chicago Marathon', month: 'October', state: 'Illinois'},
                    {name: 'New York Marathon', month: 'November', state: 'New York'},
                    {name: 'Toky Marathon', month: 'December', state: 'Japan'},
                    {name: 'Geneva Marathon', month: 'February', state: 'Swiss'},
                    {name: 'Preverenges Marathon', month: 'Juny', state: 'Swiss'}
                ]);
            }, 1000);
            return dfr.promise;
        };
        svc.getRunners = function () {
            var dfr = $q.defer();
            $timeout(function () {
                dfr.resolve([
                    {firstName: 'Ryan', lastName: 'Hall'},
                    {firstName: 'Meb', lastName: 'Keflezighi'},
                    {firstName: 'Paula', lastName: 'Radcliffe'},
                    {firstName: 'Kara', lastName: 'Goucher'},
                    {firstName: 'Kara', lastName: 'Morgan'},
                    {firstName: 'Kara', lastName: 'Zeppelin'},
                    {firstName: 'Jan', lastName: 'Schoenbaechler'}
                ]);
            }, 2000);
            return dfr.promise;
        };
        return svc;
    });

    // si execute code sans la factory fonctionne sans probleme
    app.factory('stateMonitorSvc', function ($rootScope) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                console.log('changing state from', fromState.name, 'to', toState.name);
            });
        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                console.log('changed state from', fromState.name, 'to', toState.name);
            });
        $rootScope.$on('$stateNotFound', function (unfoundState) {
            console.log('tried to change to state', unfoundState.to,
                'but that state is not known');
        });
        $rootScope.$on('$stateChangeError',
            function (event, toState, toParams, fromState, fromParams, error) {
                console.log(error, 'changing state from',
                    fromState.name, 'to', toState.name);
            });
    });

    app.controller('BadCtrl', function ($scope, marathonSvc) {
        // Must deal with the promise that is returned manually (calling then).
        marathonSvc.getMarathons().then(
            function (marathons) { $scope.marathons = marathons; },
            function (err) { alert(err); });
        marathonSvc.getRunners().then(
            function (runners) { $scope.runners = runners; },
            function (err) { alert(err); });
    });

    app.controller('GoodCtrl', function ($scope, marathons, runners) {
        $scope.marathons = marathons;
        $scope.runners = runners;
    });

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/marathons');

        $stateProvider

        .state('marathons1', {
            url: '/marathons',
            templateUrl: 'app/marathons.html',
            // With BadCtrl, table caption and headings
            // are visible before data is loaded.
            controller: 'BadCtrl'
        })

        .state('marathons', {
            url: '/marathons',
            templateUrl: 'app/marathons.html',
            // With BadCtrl, table caption and headings
            // are visible before data is loaded.
            controller: 'GoodCtrl',
            resolve: {
                // Can wait for any number of properties to be resolved.
                // Waits for promises to be resolved before
                // injecting into controller (don't need to call then).
                marathons: function (marathonSvc) {
                    return marathonSvc.getMarathons();
                },
                runners: function (marathonSvc) {
                    return marathonSvc.getRunners();
                }
            }
        });
    });
})();
