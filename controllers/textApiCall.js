// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC445a1e5b0401f95fb5e55b70607fb930';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

module.exports = {
    sendTxt: function (number, body) {
        client.messages
            .create({
                body: body,
                from: '+16789031502',
                to: '+1' + number
            })
            .then(message => console.log(message.sid));
    }
}