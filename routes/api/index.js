const router = require("express").Router();
const storeItemRoutes = require("./storeItems");
const storeRoutes = require("./stores");
const userRoutes = require("./users");
const emails = require("./emails");
const purchases = require("./purchases");

router.use("/storeItems", storeItemRoutes);
router.use("/stores", storeRoutes);
router.use("/users", userRoutes);
router.use("/emails", emails);
router.use("/purchases", purchases);

module.exports = router;
