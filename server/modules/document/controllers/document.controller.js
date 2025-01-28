const asyncHandler = require("express-async-handler");
const Document = require("../models/document.model");
const {
  default: { OK, CREATED },
} = require("../../../constants/statuscode.names");

//@desc get all document
//@route GET /api/v1/document
//@access admin only
const getDocuments = asyncHandler(async (req, res) => {
  const documents = await Document.find();
  res.status(OK).json(documents);
});

//@desc get single document
//@route GET /api/v1/document/:id
//@access admin only
const getDocument = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const document = await Document.findById(id);
  res.status(OK).json(document);
});

//@desc create document
//@route POST /api/v1/document
//@access admin only
const createDocument = asyncHandler(async (req, res) => {
  const { title, description, approval } = req.body;
  const document = await Document.create({ title, description, approval });
  res.status(CREATED).json(document);
});

//@desc update document
//@route PUT /api/v1/document/:id
//@access admin only
const updateDocument = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, approval } = req.body;
  const document = await Document.findByIdAndUpdate(
    id,
    { title, description, approval },
    { new: true }
  );
  res.status(OK).json(document);
});

//@desc delete document
//@route DELETE /api/v1/document/:id
//@access admin only
const deleteDocument = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const document = await Document.findByIdAndDelete(id);
  res.status(OK).json(document);
});

module.exports = {
  getDocuments,
  getDocument,
  createDocument,
  updateDocument,
  deleteDocument,
};
