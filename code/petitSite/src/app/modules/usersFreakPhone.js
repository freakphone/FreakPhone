/**
 * Created by djemi on 02.02.15.
 */
(function() {
    var app = angular.module("login", []);

    app.directive("loginPage", function() {
        return {
            restrict: 'E',
            templateUrl: "app/Directives/login-tmpl.html"
        }
    })
})();



