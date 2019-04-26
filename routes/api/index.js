const router = require("express").Router();
const storeItemRoutes = require("./storeItems");
const storeRoutes = require("./stores");
const userRoutes = require("./users");
const emails = require("./emails");

router.use("/storeItems", storeItemRoutes);
router.use("/stores", storeRoutes);
router.use("/users", userRoutes);
router.use("/emails", emails);

module.exports = router;
