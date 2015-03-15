/**
 * Created by djemi on 11.03.15.
 */
(function() {

    var appSmsPopup = angular.module('smsPopup', ['ui.bootstrap']);

    appSmsPopup.controller('ModalInstanceCtrl', function ($scope, $modalInstance, number, smsText) {

        $scope.number = number;
        $scope.smsText = smsText;

        $scope.selected = {
            item: $scope.items[2]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        }
    });

})();