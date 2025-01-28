const getModelAttribute = require("../../../utils/model.manager");
const asyncHandler = require("express-async-handler");
const Document = require("../models/document.model");
const {
  default: { UNAUTHORIZED, OK },
} = require("../../../constants/statuscode.names");

const approve = asyncHandler(async (req, res) => {
  const user = req.user;
  const { modelName, status, modelId } = req.body;
  const { model } = getModelAttribute(modelName);
  const document = await Document.find({ title: modelName });

  if (user._id !== document?.approval?.approvalBy) {
    res.status(UNAUTHORIZED);
    throw new Error("User is not authorized");
  }
  const stages = document.approval;
  const nextStatus = stages.find((stage) => stage.stage === status);
  const modelData = model.findByIdAndUpdate(
    modelId,
    { status: nextStatus },
    { new: true }
  );
  res.status(OK), json(modelData);
});

module.exports = { approve };
