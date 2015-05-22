/**
 * Created by djemi on 29.03.15.
 */
// Include the new and improved Twilio Cloud Code module,
// The express web framework, your and account config
var twilio = require('sms/lib/twilio/index'),
    express = require('express'),
    config = require('sms/config');

var app = express();
app.use(express.bodyParser());

app.get('/sms',function(request,response){
    var twiml = new twilio.TwimlResponse();
    twiml.sms('Hej care hvala na poruci ! Sta ima novo kod tebe ?');

    response.type('text/xml');
    response.send(twiml.toString());
});

app.get('/makecall', function(request, response){
    var client = new twilio.RestClient(
        config.twilio.accountSid,
        config.twilio.authToken
    );

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
});

app.listen();
