const { Schema, model } = require('mongoose');
const attributeEntrySchema = require('./AttributeEntry');
const scalingEntrySchema = require('./ScalingEntry');
const weaponSchema = new Schema(
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
    attack: [attributeEntrySchema],
    defence: [attributeEntrySchema],
    scalesWith: [scalingEntrySchema],
    requiredAttributes: [attributeEntrySchema],
    category: {
      type: String
    },
    weight: {
      type: Number
    }
  }
);


const Weapon = model('Weapon', weaponSchema);

module.exports = Weapon;
