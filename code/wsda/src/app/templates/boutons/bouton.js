/**
 * Created by djemi on 14.02.15.
 */
angular.module('bouton', ['popup','popup01', 'popup02', 'dateTest', 'colapseToggle'])

    .config(function ($stateProvider) {
    $stateProvider
        .state('boutons', {
            url: '/',
            views: {
                'boutons@': {
                    templateUrl: 'src/app/templates/boutons/bouton-tmpl.html',
                    controller: 'BoutonCtrl as bouton'
                },
                'bouton1@boutons' :{
                    templateUrl:'src/app/views/view01-tmpl.html'
                },
                'bouton2@boutons' :{
                    templateUrl:'src/app/views/view02-tmpl.html'
                },
                'bouton3@boutons' :{
                    templateUrl:'src/app/views/view03-tmpl.html'
                },
                'popup@boutons' :{
                    templateUrl:'src/app/templates/popup/popup-temp01.html',
                    controller:'PopupCtrl'
                },
                'popup01@boutons' :{
                    templateUrl:'src/app/templates/popup/popup-temp02.html',
                    controller:'AccordionDemoCtrl'
                },
                'popup02@boutons' :{
                    templateUrl:'src/app/templates/popup/popup-temp03.html',
                    controller:'ModalDemoCtrl'
                },
                'dateTest@boutons' :{
                    templateUrl:'src/app/templates/popup/dateTest.html',
                    controller:'DatepickerDemoCtrl'
                },
                'colapseToggle@boutons' :{
                    templateUrl:'src/app/templates/popup/colapseToggle.html',
                    controller:'CollapseDemoCtrl'
                }
            }
        })
})
    .controller('BoutonCtrl', function(){
        this.bouton = 0;

        this.isSet = function(checkTab) {
            return this.bouton === checkTab;
            console.log(this.bouton);
        };

        this.setTab = function(setTab) {
            this.bouton = setTab;
            console.log(this.bouton);
        };
    })

    .controller('ModalDemoCtrl', function ($scope, $modal, $log) {

        $scope.items = ['Jan', 'Enea', 'Djemi', 'Cila']; // peut être fichier json ou db ou xml

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'popupContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    });