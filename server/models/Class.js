const { Schema, model } = require('mongoose');

const classSchema = new Schema(
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
    stats: {
      "level": Number,
      "vigor": Number,
      "mind": Number,
      "endurance": Number,
      "strength": Number,
      "dexterity": Number,
      "intelligence": Number,
      "faith": Number,
      "arcane": Number
    }
  }
);


const Class = model('Class', classSchema);

module.exports = Class;
