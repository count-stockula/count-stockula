var nodemailer = require('nodemailer');

const user = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASSWORD;

const emailSender = {
    sendEmail: function (req, res) {
        const receiveAddress = req.body.receiveAddress;
        const pdfFile = req.body.pdfFile;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: pass
            }
        });

        const mailOptions = {
            from: user,
            to: receiveAddress,
            subject: 'Your Count-Stockula Receipt',
            text: 'Thank you for your patronage. Attached is your receipt, Thank you.',
              attachments: [
                  {
                      filename: "countStockulaReceipt.pdf",
                      content: pdfFile,
                      encoding: "base64"
                  }
              ]
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.status(400).json(error);
            } else {
                res.json('Email sent');
            }
        });
    }
}

module.exports = emailSender;