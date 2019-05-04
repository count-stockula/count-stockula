const router = require("express").Router();
const purchaseController = require("../../controllers/purchasesController");

router.route("/")
  .post(purchaseController.create);

  router.route("/StoreSales")
  .get(purchaseController.getStoreSales);

  module.exports = router;