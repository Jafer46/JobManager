const mongoose = require("mongoose");

const workDoneSchema = mongoose.Schema({
  task: {
    type: mongoose.Types.ObjectId,
    ref: "Task",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  uom: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Uom",
  },
  date: {
    type: Date,
    required: true,
  },
});
