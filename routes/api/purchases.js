const router = require("express").Router();
const purchaseController = require("../../controllers/purchasesController");

router.route("/")
  .post(purchaseController.create);

  module.exports = router;