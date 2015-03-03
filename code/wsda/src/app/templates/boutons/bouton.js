/**
 * Created by djemi on 14.02.15.
 */
angular.module('bouton', ['ui.bootstrap', 'popup01', 'popup02'])

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
                'popup01@boutons' :{
                    templateUrl:'src/app/templates/popup/popup-temp02.html',
                    controller:'AccordionDemoCtrl'
                },
                'popup02@boutons' :{
                    templateUrl:'src/app/templates/popup/popup-temp03.html',
                    controller:'ModalDemoCtrl'
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

    .controller('PopupCtrl',
    [   '$scope',
        '$location',
        '$routeParams',
        '$timeout',
        'config',
        'dataService',
        'modalService',
        function ($scope, $location, $routeParams, $timeout, config,
                  dataService, modalService) {

            $scope.deleteCustomer = function () {

                var custName = $scope.customer.firstName + ' ' + $scope.customer.lastName;

                var modalOptions = {
                    closeButtonText: 'Cancel',
                    actionButtonText: 'Delete Customer',
                    headerText: 'Delete ' + custName + '?',
                    bodyText: 'Are you sure you want to delete this customer?'
                };

                modalService.showModal({}, modalOptions).then(function (result) {
                    dataService.deleteCustomer($scope.customer.id).then(function () {
                        $location.path('/customers');
                    }, processError);
                });
            }
        }])

    .controller('ModalDemoCtrl', function ($scope, $modal, $log) {

        $scope.items = ['Jan', 'Enea', 'Djemi']; // peut être fichier json ou db ou xml

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