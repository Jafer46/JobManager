const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact.model");
const {
  default: { OK, CREATED },
} = require("../../../constants/statuscode.names");

//@desc get all contacts
//@route GET /api/v1/contacts
//@access admin only
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(OK).json(contacts);
});

//@desc get single contact
//@route GET /api/v1/contacts/:id
//@access admin only
const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  res.status(OK).json(contact);
});

//@desc create contact
//@route POST /api/v1/contacts
//@access admin only
const createContact = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, imageUrl } = req.body;
  const contact = await Contact.create({
    firstName,
    lastName,
    email,
    phone,
    imageUrl,
  });
  res.status(CREATED).json(contact);
});

//@desc update contact
//@route PUT /api/v1/contacts/:id
//@access admin only
const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, phone, user, imageUrl } = req.body;
  const contact = await Contact.findByIdAndUpdate(
    id,
    { firstName, lastName, email, phone, user, imageUrl },
    { new: true }
  );
  res.status(OK).json(contact);
});

//@desc delete contact
//@route DELETE /api/v1/contacts/:id
//@access admin only
const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByIdAndDelete(id);
  res.status(CREATED).json(contact);
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
