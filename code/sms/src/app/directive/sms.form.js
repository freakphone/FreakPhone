/**
 * Created by djemi on 14.03.15.
 */
(function() {

    var appSmsForm = angular.module('smsSend', ['ui.bootstrap']);

    appSmsForm.controller('SmsCtrl', function () {

        this.titre = "Send SMS to a Friend";

        this.sendSms = function () {

            if(this.phoneNumber != '' && this.textSms != ''){
                console.log(this.phoneNumber);
                console.log(this.textSms);
            }else{

            }
        }
    });

})();
