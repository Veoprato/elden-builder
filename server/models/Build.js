const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const buildSchema = new Schema(
  {
    title: {
      type: String,
      required: 'You need to leave a title!',
      minlength: 1,
      maxlength: 48
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String
    },
    desc: {
      type: String
    },
    class: {
      type: Schema.Types.ObjectId,
      ref: 'Class'
    },
    keepsake: {
      type: String
    },
    level: {
      type: Number
    },
    vigor: {
      type: Number
    },
    mind: {
      type: Number
    },
    endurance: {
      type: Number
    },
    strength: {
      type: Number
    },
    dexterity: {
      type: Number
    },
    intelligence: {
      type: Number
    },
    faith: {
      type: Number
    },
    arcane: {
      type: Number
    },
    head: {
      type: Schema.Types.ObjectId,
      ref: 'Armor'
    },
    body: {
      type: Schema.Types.ObjectId,
      ref: 'Armor'
    },
    arms: {
      type: Schema.Types.ObjectId,
      ref: 'Armor'
    },
    legs: {
      type: Schema.Types.ObjectId,
      ref: 'Armor'
    },
    rh1: {
      type: Schema.Types.ObjectId,
      ref: 'Weapon'
    },
    rh2: {
      type: Schema.Types.ObjectId,
      ref: 'Weapon'
    },
    rh3: {
      type: Schema.Types.ObjectId,
      ref: 'Weapon'
    },
    lh1: {
      type: Schema.Types.ObjectId,
      ref: 'Weapon'
    },
    lh2: {
      type: Schema.Types.ObjectId,
      ref: 'Weapon'
    },
    lh3: {
      type: Schema.Types.ObjectId,
      ref: 'Weapon'
    },
    tali1: {
      type: Schema.Types.ObjectId,
      ref: 'Talisman'
    },
    tali2: {
      type: Schema.Types.ObjectId,
      ref: 'Talisman'
    },
    tali3: {
      type: Schema.Types.ObjectId,
      ref: 'Talisman'
    },
    tali4: {
      type: Schema.Types.ObjectId,
      ref: 'Talisman'
    },
    spell1: {
      type: Schema.Types.ObjectId,
      ref: 'Spell'
    },
    spell2: {
      type: Schema.Types.ObjectId,
      ref: 'Spell'
    },
    spell3: {
      type: Schema.Types.ObjectId,
      ref: 'Spell'
    },
    spell4: {
      type: Schema.Types.ObjectId,
      ref: 'Spell'
    },
    spell5: {
      type: Schema.Types.ObjectId,
      ref: 'Spell'
    },
    spell6: {
      type: Schema.Types.ObjectId,
      ref: 'Spell'
    },
    spell7: {
      type: Schema.Types.ObjectId,
      ref: 'Spell'
    },
    spell8: {
      type: Schema.Types.ObjectId,
      ref: 'Spell'
    },
    spell9: {
      type: Schema.Types.ObjectId,
      ref: 'Spell'
    },
    spell10: {
      type: Schema.Types.ObjectId,
      ref: 'Spell'
    }
  }
);


const Build = model('Build', buildSchema);

module.exports = Build;
