/**
 * Created by djemi on 14.02.15.
 */
angular.module('bouton', ['ui.bootstrap', 'popup01'])

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

    .controller('AccordionDemoCtrl', function ($scope) {
        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    });