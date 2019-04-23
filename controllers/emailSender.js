var nodemailer = require('nodemailer');

const user = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASSWORD;

const emailSender = {
    sendEmail: function (receiveAddress, pdfFile) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: pass
            }
        });

        var mailOptions = {
            from: user,
            to: receiveAddress,
            subject: 'Your Count-Stockula Receipt',
            text: 'Thank you for your patronage. Attached is your receipt, Thank you.',
              attachments: [
                  {
                      filename: "countStockulaReceipt.pdf",
                      content: pdfFile
                  }
              ]
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

module.exports = emailSender;