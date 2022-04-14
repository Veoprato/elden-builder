const { Schema, model } = require('mongoose');
const attributeEntrySchema = require('./AttributeEntry');

const armorSchema = new Schema(
  {
    source_id: {
      type: String
    },
    name: {
      type: String
    },
    image: {
      type: String
    },
    description: {
      type: String
    },
    category: {
      type: String
    },
    dmgNegation: [attributeEntrySchema],
    resistance: [attributeEntrySchema],
    weight: {
      type: Number
    }
  }
);


const Armor = model('Armor', armorSchema);

module.exports = Armor;
