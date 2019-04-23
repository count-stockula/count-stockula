const router = require("express").Router();
const emailSender = require("../../controllers/emailSender");

// Matches with "/api/emails"
router.route("/")
  .post(emailSender.sendEmail);

module.exports = router;
