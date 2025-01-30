const router = require("express").Router();
const exportData = require("../controllers/export.controller");

router.post("/", exportData);

module.exports = router;
