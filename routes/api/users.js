const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// createUser matches with "/api/users"
router
  .route("/")
  //.get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/forOne/:id"
router
  .route("/forOne/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// loginUser matches with "/api/users/login"
router
  .route("/login")
  .post(usersController.login);

module.exports = router;
