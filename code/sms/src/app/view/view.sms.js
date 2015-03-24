/**
 * Created by djemi on 15.03.15.
 */
(function() {

   var viewSMS = angular.module('viewSms', ['smsPopup']);

    viewSMS.config(function ($stateProvider) {
        $stateProvider
            .state('boutons', {
                url: '/',
                views: {
                    'boutons@': {
                        templateUrl: 'src/app/view/view.sms.templ.html'
                    },
                    'sendSms@boutons' :{
                        templateUrl:'src/app/popup/popup.sms.tmpl.html',
                        controller:'ModalCtrl'
                    }
                }
            })
    })

    viewSMS.controller('ModalCtrl', function ($scope, $modal, $log) {


        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'popupContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return '';
                    }
                }
            });

            modalInstance.result.then(function () {
                $log.info('Modal at: ' + new Date());
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    });

})();

