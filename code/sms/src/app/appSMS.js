/**
 * Created by djemi on 15.03.15.
 */
(function() {

    var appSMS = angular.module('appSMS', ['ui.router', 'viewSms']);

    appSMS.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '',// absolute route
                abstract: true
            });

        $urlRouterProvider.otherwise('/');
    });

})();