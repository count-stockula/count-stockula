const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// createUser matches with "/api/users"
router
  .route("/")
  .get(usersController.findAll)
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

// loginUser matches with "/api/users/login"
router
  .route("/authenticate")
  .post(usersController.authenticate);

// loginUser matches with "/api/users/login"
router
  .route("/signout")
  .post(usersController.signout);

module.exports = router;
