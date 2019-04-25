const router = require("express").Router();
const storeItemRoutes = require("./storeItems");
const storeRoutes = require("./stores");
const userRoutes = require("./users");

router.use("/storeItems", storeItemRoutes);
router.use("/stores", storeRoutes);
router.use("/users", userRoutes);

module.exports = router;
