const mongoose = require("mongoose");

const UomSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Uom", UomSchema);
