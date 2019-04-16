const router = require("express").Router();
const storeItemRoutes = require("./storeItems");
const storeRoutes = require("./stores");
const users = require("./users");

router.use("/storeItems", storeItemRoutes);
router.use("/stores", storeRoutes);
router.use("/users", users);

module.exports = router;
