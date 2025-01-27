const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact.model");
const {
  default: { OK, CREATED },
} = require("../../../constants/statuscode.names");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(OK).json(contacts);
});

const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  res.status(OK).json(contact);
});

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
