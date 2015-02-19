/**
 * Created by djemi on 14.02.15.
 */
angular.module('bouton', [])

    .config(function ($stateProvider) {
    $stateProvider
        .state('bouton', {
            url: '/',
            views: {
                'boutons@': {
                    controller: 'BoutonCtrl',
                    templateUrl: 'src/app/templates/boutons/bouton-tmpl.html'
                }
            }
        });
})
    .controller('BoutonCtrl', function(){
        this.bouton = 1;
        this.isSet = function(checkTab) {
            return this.bouton === checkTab;
        };

        this.setTab = function(setTab) {
            this.bouton = setTab;
        };
    });