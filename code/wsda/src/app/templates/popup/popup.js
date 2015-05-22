/**
 * Created by djemi on 28.02.15.
 */
angular.module('popup',['ui.bootstrap'])

    .service("modalService", ['$modal',
    function ($modal) {

        var modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: 'src/app/templates/popup/popup-temp01.html'
        };


        console.log('modalService');

        var modalOptions = {
            closeButtonText: 'Close',
            actionButtonText: 'OK',
            headerText: 'Proceed?',
            bodyText: 'Perform this action?'
        };

        this.showModal = function (customModalDefaults, customModalOptions) {
            if (!customModalDefaults) customModalDefaults = {};
            customModalDefaults.backdrop = 'static';
            console.log('showModal');
            return this.show(customModalDefaults, customModalOptions);
        };

        this.show = function (customModalDefaults, customModalOptions) {
            //Create temp objects to work with since we're in a singleton service
            var tempModalDefaults = {};
            var tempModalOptions = {};

            //Map angular-ui modal custom defaults to modal defaults defined in service
            angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

            //Map modal.html $scope custom properties to defaults defined in service
            angular.extend(tempModalOptions, modalOptions, customModalOptions);

            console.log('show');

            if (!tempModalDefaults.controller) {
                tempModalDefaults.controller = function ($scope, $modalInstance) {
                    $scope.modalOptions = tempModalOptions;
                    $scope.modalOptions.ok = function (result) {
                        $modalInstance.close(result);
                    };
                    $scope.modalOptions.close = function (result) {
                        $modalInstance.dismiss('cancel');
                    };
                }
            }

            return $modal.open(tempModalDefaults).result;
        };

    }])

    .controller('PopupCtrl',
    [   '$scope',
        '$location',
        '$timeout',
        'modalService',
        function ($scope, $location, $timeout,
                  modalService) {

            console.log('PopupCtrl');
            $scope.deleteCustomer = function () {
                var firstName = 'Toto';
                var lastName = 'Lolo';
                var custName = firstName + ' ' + lastName;

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
        }]);