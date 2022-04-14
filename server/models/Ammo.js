const { Schema, model } = require('mongoose');
const attributeEntrySchema = require('./AttributeEntry');

const ammoSchema = new Schema(
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
    attackPower: [attributeEntrySchema],
    passive: {
      type: String
    }
  }
);


const Ammo = model('Ammo', ammoSchema);

module.exports = Ammo;
