const mongoose = require("mongoose");

const materialUsedSchema = mongoose.Schema({
  workDone: {
    type: mongoose.Types.ObjectId,
    ref: "WorkDone",
    required: true,
  },
  material: {
    type: mongoose.Types.ObjectId,
    ref: "Material",
  },
});
