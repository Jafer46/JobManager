const router = require("express").Router();
const {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} = require("../controllers/contact.controller");

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
