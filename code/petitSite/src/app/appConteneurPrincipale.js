/**
 * Created by djemi on 07.02.15.
 */
angular.module('appPrime',[
    'ui.router',
    'ngAnimate',
    'menus'
])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider.state('app', {
            url:'/',
            templateUrl: 'app/menus/menus-tmpl.html',
            controller: 'MainCtrl'
        });
        $urlRouterProvider.otherwise('/');
    });