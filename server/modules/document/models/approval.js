const mongoose = require("mongoose");

const documentSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    approval: [
      {
        stage: { type: String },
        statusTo: { type: String },
        approvalBy: { type: mongoose.Types.ObjectId, ref: "User" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Document", documentSchema);
