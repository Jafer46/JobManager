const asyncHandler = require("express-async-handler");

const Role = require("../models/role");

const getRoles = asyncHandler(async (req, res) => {
  const roles = await Role.find();
  res.status(200).json(roles);
});

const getRole = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const role = await Role.findById(id);
  res.status(200).json(role);
});

const createRole = asyncHandler(async (req, res) => {
  const { name, description, access } = req.body;
  const role = await Role.create({ name, description, access });
  res.status(201).json(role);
});

const updateRole = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description, access } = req.body;
  const role = await Role.findByIdAndUpdate(
    id,
    { name, description, access },
    { new: true }
  );
  res.status(200).json(role);
});

const deleteRole = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const role = await Role.findByIdAndDelete(id);
  res.status(200).json(role);
});

module.exports = { getRoles, getRole, updateRole, deleteRole, createRole };
