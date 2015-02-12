/**
 * Created by djemi on 07.02.15.
 */
angular.module('appPrime',[
    'ui.router',
    'ngAnimate',
    'menus'
])
    .config(function($stateProvider){
        $stateProvider.state('app', {
            url:'/',
            templateUrl: 'app/menus/menus-tmpl.html',
            controller: 'MainCtrl'
        });
    })
    .controller('MainCtrl', function ($scope) {
        $scope.categories = '';
    });