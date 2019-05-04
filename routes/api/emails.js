const router = require("express").Router();
const emailSender = require("../../controllers/emailSender");

//middleware
const middleware = require("../middleware");
router.use(middleware.authenticate);

// Matches with "/api/emails"
router.route("/")
  .post(emailSender.sendEmail);

module.exports = router;
