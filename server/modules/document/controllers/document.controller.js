const asyncHandler = require("express-async-handler");
const Document = require("../models/document.model");
const {
  default: { OK, CREATED },
} = require("../../../constants/statuscode.names");

//@desc get all accounts
//@route
//@access restricted
const getDocuments = asyncHandler(async (req, res) => {
  const documents = await Document.find();
  res.status(OK).json(documents);
});

const getDocument = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const document = await Document.findById(id);
  res.status(OK).json(document);
});

const createDocument = asyncHandler(async (req, res) => {
  const { title, description, approval } = req.body;
  const document = await Document.create({ title, description, approval });
  res.status(CREATED).json(document);
});

const updateDocument = asyncHandler(async (req, res) => {
  const { id, title, description, approval } = req.body;
  const document = await Document.findByIdAndUpdate(
    id,
    { title, description, approval },
    { new: true }
  );
  res.status(OK).json(document);
});

const deleteDocument = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const document = await Document.findByIdAndDelete(id);
  res.status(OK).json(document);
});

module.exports = { getDocuments, getDocument, createDocument, deleteDocument };
