const router = require("express").Router();
const {
  getRoles,
  getRole,
  createRole,
  updateRole,
  deleteRole,
} = require("../controllers/role.controller");

router.route("/").get(getRoles).post(createRole);
router.route("/:id").get(getRole).put(updateRole).delete(deleteRole);

module.exports = router;
