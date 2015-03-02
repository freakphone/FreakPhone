/**
 * Created by djemi on 26.02.15.
 */
(function () {
    'use strict';

    var app = angular.module('SiblingViews', ['ui.router']);

    app.controller('SiblingCtrl', function ($scope) {

        $scope.changeColor = function (colorName) {
            console.log('changeColor :' + colorName);
            $('section').css('color', colorName);
        };

        $scope.changeFontSize = function (size) {
            console.log('changeFontSize :' + size);
            $('section').css('font-size', size);
        };
    });

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/first');

        $stateProvider

            .state('first', {
            url: '/first',
                views: {
                header: {
                    templateUrl: 'app/header1.html'
                },
                nav: {
                    controller: 'SiblingCtrl',
                    templateUrl: 'app/nav1.html'
                },
                body: {
                    templateUrl: 'app/body1.html'
                },
                footer: {
                    templateUrl: 'app/footer1.html'
                }
            }
        })

        .state('second', {
            url: '/second',
            views: {
                header: {
                    templateUrl: 'app/header2.html'
                },
                nav: {
                    controller: 'SiblingCtrl',
                    templateUrl: 'app/nav2.html'
                },
                body: {
                    templateUrl: 'app/body2.html'
                },
                footer: {
                    templateUrl: 'app/footer2.html'
                }
            }
        });
    });
})();
