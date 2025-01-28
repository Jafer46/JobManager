const router = require("express").Router();
const {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} = require("../controllers/category.controller");

router.route("/").get(getCategories).post(createCategory);
router
  .router("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);
