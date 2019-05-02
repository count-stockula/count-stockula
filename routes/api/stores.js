const router = require("express").Router();
const storesController = require("../../controllers/storesController");
//middleware
const middleware = require("../middleware");
router.use(middleware.authenticate);

// Matches with "/api/stores"
router.route("/")
  .get(storesController.findAll)
  .post(storesController.create);

// Matches with "/api/stores/:id"
router.route("/:id")
  .get(storesController.findById)
  .put(storesController.update)
  .delete(storesController.remove);

module.exports = router;
