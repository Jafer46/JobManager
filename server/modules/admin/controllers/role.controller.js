const asyncHandler = require("express-async-handler");
const Role = require("../models/role.model");

//@desc get all roles
//@route GET /api/v1/roles
//@access admin only
const getRoles = asyncHandler(async (req, res) => {
  const roles = await Role.find();
  res.status(200).json(roles);
});

//@desc get single role
//@route GET /api/v1/roles/:id
//@access admin only
const getRole = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const role = await Role.findById(id);
  res.status(200).json(role);
});

//@desc create role
//@route POST /api/v1/roles
//@access admin only
const createRole = asyncHandler(async (req, res) => {
  const { name, description, access } = req.body;
  const role = await Role.create({ name, description, access });
  res.status(201).json(role);
});

//@desc update role
//@route PUT /api/v1/roles/:id
//@access admin only
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

//@desc delete role
//@route DELETE /api/v1/roles/:id
//@access admin only
const deleteRole = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const role = await Role.findByIdAndDelete(id);
  res.status(200).json(role);
});

module.exports = { getRoles, getRole, updateRole, deleteRole, createRole };
