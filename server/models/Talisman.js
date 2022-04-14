const { Schema, model } = require('mongoose');

const talismanSchema = new Schema(
  {
    source_id: {
      type: String
    },
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    effect: {
      type: String,
    }
  }
);


const Talisman = model('Talisman', talismanSchema);

module.exports = Talisman;
