const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const storesController = require("../../controllers/storesController");

// Matches with "/api/login/stores"
router
  .route("/stores")
  .get(storesController.findAll)
  .post(storesController.create);

// createUser matches with "/api/login/create"
router
  .route("/create") // default for signup and/or create
  //.get(usersController.findAll)
  .post(usersController.create);

  // loginUser matches with "/api/login/signup"
router
  .route("/signup")
  .post(usersController.signup);

// loginUser matches with "/api/login/login"
router
  .route("/login")
  .post(usersController.login);

// loginUser matches with "/api/login/authenticate"
router
  .route("/authenticate")
  .post(usersController.authenticate);

module.exports = router;
