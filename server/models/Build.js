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
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: true
    },
    keepsake: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      required: true
    },
    vigor: {
      type: Number,
      required: true
    },
    mind: {
      type: Number,
      required: true
    },
    endurance: {
      type: Number,
      required: true
    },
    strength: {
      type: Number,
      required: true
    },
    dexterity: {
      type: Number,
      required: true
    },
    intelligence: {
      type: Number,
      required: true
    },
    faith: {
      type: Number,
      required: true
    },
    arcane: {
      type: Number,
      required: true
    },
    head: {
      type: Schema.Types.ObjectId,
      ref: 'armor'
    },
    body: {
      type: Schema.Types.ObjectId,
      ref: 'armor'
    },
    arms: {
      type: Schema.Types.ObjectId,
      ref: 'armor'
    },
    legs: {
      type: Schema.Types.ObjectId,
      ref: 'armor'
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Build = model('Build', buildSchema);

module.exports = Build;
