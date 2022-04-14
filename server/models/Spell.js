const { Schema, model } = require('mongoose');
const attributeEntrySchema = require('./AttributeEntry');

const spellSchema = new Schema(
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
    type: {
      type: String
    },
    cost: {
      type: Number
    },
    slots: {
      type: Number
    },
    effects: {
      type: String
    },
    requires: [attributeEntrySchema]
  }
);


const Spell = model('Spell', spellSchema);

module.exports = Spell;
