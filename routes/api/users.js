const router = require("express").Router();
const usersController = require("../../controllers/usersController");

//middleware
const middleware = require("../middleware");
router.use(middleware.authenticate);

// Matches with "/api/users/forOne/:id"
router
  .route("/authenticate")
  .get(usersController.authenticate);

// Matches with "/api/users/forOne/:id"
router
  .route("/forOne/:id")
  //.get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// loginUser matches with "/api/users/signout"
router
  .route("/signout")
  .post(usersController.signout);

module.exports = router;
