/**
 * Created by djemi on 14.02.15.
 */
angular.module('appMain', [
    'ui.router',
    'bouton'
])
    .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            abstract: true
        });
    $urlRouterProvider.otherwise('/');
});
