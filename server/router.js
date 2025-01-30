const router = require("express").Router();

router.use("/user", require("./modules/user/routes/user.route"));
//router.use("/admin", require("./modules/admin/routes/admin.route"));
router.use("/role", require("./modules/admin/routes/role.route"));

module.exports = router;
