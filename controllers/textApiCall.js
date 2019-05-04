// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = {
    sendTxt: function (itemObj, qty) {
        const number = "+1" + itemObj.storeId.phone;
        const body = "There is only " + qty + " of " + itemObj.name + " left in stock. Please check Count-Stockula dashboard."

        client.messages
            .create({
                body: body,
                from: '+16789031502',
                to: number
            })
            .then(message => console.log(message.sid))
            .catch(err => console.log(err));
    }
};