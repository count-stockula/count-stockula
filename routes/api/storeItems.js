const router = require("express").Router();
const storeItemsController = require("../../controllers/storeItemsController");
//middleware
const middleware = require("../middleware");
router.use(middleware.authenticate);

// Matches with "/api/storeItems"
router.route("/")
  .get(storeItemsController.findAll)
  .post(storeItemsController.create);

// Matches with "/api/storeItems/upc"
router.route("/upc")
  .get(storeItemsController.findByUpc);  

//Matches with "/api/storeItems/upc/reduceStock"
router.route("/upc/reduceStock")
  .put(storeItemsController.reduceStock);

// Matches with "/api/storeItems/upc/addStock"
router.route("/upc/addStock")
  .put(storeItemsController.addStock);  

// Matches with "/api/storeItems/forOne/:id"
router.route("/forOne/:id")
  .get(storeItemsController.findById)
  .put(storeItemsController.update)
  .delete(storeItemsController.remove);

// Matches with "/api/storeItems/lowStock"
router.route("/lowStock")
  .get(storeItemsController.lowStock);

// Matches with "/api/storeItems/zeroStock"
router.route("/zeroStock")
  .get(storeItemsController.zeroStock);

// Matches with "/api/storeItems/noScan"
router.route("/noScan")
  .get(storeItemsController.noScan);

module.exports = router;
