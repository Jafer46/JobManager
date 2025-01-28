const asyncHandler = require("express-async-handler");
const Category = require("../models/category.model");
const {
  default: { CREATED, OK, NOT_FOUND },
} = require("../../../constants/statuscode.names");

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.status(OK).json(categories);
});

const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id);
  if (!category) {
    res.status(NOT_FOUND);
    throw new Error("Category not found");
  }
  res.status(OK).json(category);
});

const createCategory = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const category = await Category.create({
    name,
    description,
  });
  res.status(CREATED).json(category);
});

const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description, status } = req.body;
  const category = await Category.findByIdAndUpdate(
    id,
    { name, description, description },
    { new: true }
  );
  res.status(OK).json(category);
});

const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndDelete(id);
  res.status(OK).json(category);
});

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
