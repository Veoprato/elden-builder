const { AuthenticationError } = require('apollo-server-express');
const { User, Build, Armor, Weapon, Talisman, Spell } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('builds');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('builds');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
      .select('-__v -password')
        .populate('builds');
    },
    builds: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Build.find(params).sort({ createdAt: -1 })
        .populate('class')
        .populate('head')
        .populate('body')
        .populate('arms')
        .populate('legs')
        .populate('rh1')
        .populate('rh2')
        .populate('rh3')
        .populate('lh1')
        .populate('lh2')
        .populate('lh3')
        .populate('tali1')
        .populate('tali2')
        .populate('tali3')
        .populate('tali4')
        .populate('spell1')
        .populate('spell2')
        .populate('spell3')
        .populate('spell4')
        .populate('spell5')
        .populate('spell6')
        .populate('spell7')
        .populate('spell8')
        .populate('spell9')
        .populate('spell10');
    },
    build: async (parent, { _id }) => {
      return Build.findOne({ _id });
    },
    weapon: async () => {
      return Weapon.find()
        .select('-__v')
    }
  },
  
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addBuild: async (parent, args, context) => {
      if (context.user) {
        const build = await Build.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { builds: build._id } },
          { new: true }
        );

        return build;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReaction: async (parent, { thoughtId, reactionBody }, context) => {
      if (context.user) {
        const updatedThought = await Build.findOneAndUpdate(
          { _id: thoughtId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
