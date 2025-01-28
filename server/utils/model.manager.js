const Contact = require("../modules/user/models/contact.model");
const User = require("../modules/user/models/user.model");
const Document = require("../modules/document/models/document.model");
const Role = require("../modules/admin/models/role.model");

const getModelAttributes = (modelName) => {
  const models = {
    Contact,
    User,
    Document,
    Role,
  };

  const model = models[modelName];

  if (!model) {
    throw new Error("Model not found!");
  }

  // Iterate through the schema paths
  const attributes = Object.keys(model.schema.paths).map((key) => {
    const path = model.schema.paths[key];
    return {
      name: key,
      type: path.instance, // Type of the attribute (String, Number, etc.)
      required: path.isRequired, // If the attribute is required
      default: path.defaultValue, // Default value if defined
    };
  });

  return { modelName, attributes, model };
};

module.exports = { getModelAttributes };
