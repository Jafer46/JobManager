const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    manager: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
