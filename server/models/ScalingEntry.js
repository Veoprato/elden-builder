const { Schema } = require('mongoose');

const scalingEntrySchema = new Schema(
  {
    scaling: {
      type: String
    },
    name: {
      type: String
    }
  }
);

module.exports = scalingEntrySchema;
