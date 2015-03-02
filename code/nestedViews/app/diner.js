/**
 * Created by djemi on 26.02.15.
 */
(function () {
    'use strict';
    var app = angular.module('Diner', ['ui.router']);
    app.controller('DinerCtrl', function ($scope) {
        $scope.name = 'Volkmann';
    });

    app.controller('MealCtrl', function ($scope, $rootScope, $state, $timeout) {
        // This demonstrate changing state from code.
        // It changes to the "lunch" state after two seconds.
        // To use it, specify this as the controller for one or more of the states.
        $timeout(function () {
            $state.go('lunch');
        }, 2000);
    });

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dinner');
        $stateProvider
            .state('breakfast', {
                url: '/breakfast',
                templateUrl: 'app/breakfast.html'
            })
            .state('breakfast.omelette', {
                url: '/omelette',
                templateUrl: 'app/breakfast.omelette.html'
    })
        .state('lunch', {
            url: '/lunch',
            templateUrl: 'app/lunch.html'
        })
        .state('lunch.pizza', {
            url: '/pizza',
            templateUrl: 'app/lunch.pizza.html'
        })
        .state('dinner', {
            url: '/dinner',
            templateUrl: 'app/dinner.html'
        })
        .state('dinner.pizza', {
            url: '/pizza',
            templateUrl: 'app/dinner.pizza.html'
        })
        .state('dinner.spaghetti', {
            url: '/spaghetti',
            templateUrl: 'app/dinner.spaghetti.html'
        });
    });
})();
