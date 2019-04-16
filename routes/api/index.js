const router = require("express").Router();
const storeItemRoutes = require("./storeItems");

router.use("/storeItems", storeItemRoutes);

module.exports = router;
