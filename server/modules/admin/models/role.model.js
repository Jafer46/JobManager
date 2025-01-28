const { default: mongoose } = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  access: [
    {
      doc: { type: String, required: true },
      write: { type: Boolean, default: false },
      read: { type: Boolean, default: false },
      edit: { type: Boolean, default: false },
      delete: { type: Boolean, default: false },
      export: { type: Boolean, default: false },
    },
  ],
});

module.exports = mongoose.model("Role", roleSchema);
