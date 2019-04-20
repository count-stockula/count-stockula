// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
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