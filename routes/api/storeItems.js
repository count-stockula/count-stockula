const router = require("express").Router();
const storeItemsController = require("../../controllers/storeItemsController");

// Matches with "/api/storeItems"
router.route("/")
  .get(storeItemsController.findAll)
  .post(storeItemsController.create);

// Matches with "/api/storeItems/:id"
router
  .route("/:id")
  .get(storeItemsController.findById)
  .put(storeItemsController.update)
  .delete(storeItemsController.remove);

//Matches with "/api/storeItems/reduceOne/:id"
router
  .route("/reduceOne/:id")
  .put(storeItemsController.reduceByOne);

module.exports = router;
