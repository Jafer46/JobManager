const mongoose = require("mongoose");

const taskBudgetSchema = mongoose.Schema({
  task: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  type: {},
  quantity: {
    type: Number,
    required: true,
  },
  uom: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: "Uom",
  },
  unitPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("TaskBudget", taskBudgetSchema);
