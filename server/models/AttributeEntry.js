const { Schema } = require('mongoose');

const attributeEntrySchema = new Schema(
  {
    amount: {
      type: Number
    },
    name: {
      type: String
    }
  }
);

module.exports = attributeEntrySchema;
