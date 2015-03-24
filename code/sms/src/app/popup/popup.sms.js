/**
 * Created by djemi on 11.03.15.
 */
(function() {

    var appSmsPopup = angular.module('smsPopup', ['ui.bootstrap']);

    appSmsPopup.controller('ModalInstanceCtrl', function ($scope, $http, $modalInstance, $log) {

        $scope.send = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        }

        $scope.titre = "Send SMS to a Friend";

        $scope.sendSms = function () {

            if($scope.phoneNumber != '' && $scope.textSms != ''){
                $log.info($scope.phoneNumber);
                $log.info($scope.textSms);

                // remplacer require utilisé par Node.js, voir remplacer par $http ?
                var twilio = require('sms/lib/twilio/index'),
                    config = require('sms/config');

                var client = new twilio.RestClient(
                    config.twilio.accountSid,
                    config.twilio.authToken
                );

                $http.get('',function(request, response){
                        client.listSms({
                            to:'+14846964711'
                        }, function(err, data){
                            data.smsMessages.forEach(function(message){
                                // display one log parse all sms
                                console.log(message.body);
                                // plays musique
                                //client.makeCall({
                                //	to:message.from,
                                //	from:'+14846964711',
                                //	url:'http://demo.kevinwhinnery.com/zelda.php'
                                //});
                            });
                            response.send('Cao decki sve je OK');
                        });
                    }
                );
            }else{
                $log.info('erreur');
            }
        }
    });

})();