const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    builds: [Build]
  }

  type Build {
    _id: ID
    title: String
    createdAt: String
    updatedAt: String
    username: String
    desc: String
    class: Class
    keepsake: String
    level: Int
    vigor: Int
    mind: Int
    endurance: Int
    strength: Int
    dexterity: Int
    intelligence: Int
    faith: Int
    arcane: Int
    head: Armor
    body: Armor
    arms: Armor
    legs: Armor
    rh1: Weapon
    rh2: Weapon
    rh3: Weapon
    lh1: Weapon
    lh2: Weapon
    lh3: Weapon
    tali1: Talisman
    tali2: Talisman
    tali3: Talisman
    tali4: Talisman
    spell1: Spell
    spell2: Spell
    spell3: Spell
    spell4: Spell
    spell5: Spell
    spell6: Spell
    spell7: Spell
    spell8: Spell
    spell9: Spell
    spell10: Spell
  }

  type Class {
    _id: ID
    source_id: String
    name: String
    image: String
    description: String
    stats: ClassStats
  }

  type ClassStats {
    level: String
    vigor: String
    mind: String
    endurance: String
    strength: String
    dexterity: String
    intelligence: String
    faith: String
    arcane: String
  }

  type ScalingEntry {
    scaling: String
    name: String
  }
  
  type AttributeEntry {
    amount: Int
    name: String
  }

  type Weapon {
    _id: ID
    source_id: String
    name: String
    image: String
    description: String
    attack: [AttributeEntry]
    defense: [AttributeEntry]
    scalesWith: [ScalingEntry]
    requiredAttributes: [AttributeEntry]
    category: String
    weight: Float
  }
  
  type Armor {
    _id: ID
    source_id: String
    name: String
    image: String
    description: String
    category: String
    dmgNegation: [AttributeEntry]
    resistance: [AttributeEntry]
    weight: Float
  }
  
  type Talisman {
    _id: ID
    source_id: String
    name: String
    image: String
    description: String
    effect: String
  }
  
  type Spell {
    _id: ID
    source_id: String
    name: String
    image: String
    description: String
    type: String
    cost: Int
    slots: Int
    effects: String
    requires: [AttributeEntry]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    builds(username: String): [Build]
    build(_id: ID!): Build
    class(
      _id: ID
      source_id: String
      name: String
      description: String
      page: Int = 0
      limit: Int
      search: String
    ): [Class]
    getClass(_id: ID!): Class
    weapon(
      _id: ID
      source_id: String
      name: String
      description: String
      category: String
      weight: Float
      page: Int = 0
      limit: Int
      search: String
    ): [Weapon]
    getWeapon(_id: ID!): Weapon
    armor(
      _id: ID
      source_id: String
      name: String
      description: String
      category: String
      weight: Float
      page: Int = 0
      limit: Int
      search: String
    ): [Armor]
    getArmor(_id: ID!): Armor
    talisman(
      _id: ID
      source_id: String
      name: String
      description: String
      effect: String
      page: Int = 0
      limit: Int
      search: String
    ): [Talisman]
    getTalisman(_id: ID!): Talisman
    spell(
      _id: ID
      source_id: String
      name: String
      description: String
      type: String
      cost: Int
      slots: Int
      page: Int = 0
      limit: Int
      search: String
    ): [Spell]
    getSpell(_id: ID!): Spell
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBuild(
      title: String!
      createdAt: String
      updatedAt: String
      username: String
      desc: String
      class: ID
      keepsake: String
      level: Int
      vigor: Int
      mind: Int
      endurance: Int
      strength: Int
      dexterity: Int
      intelligence: Int
      faith: Int
      arcane: Int
      head: ID
      body: ID
      arms: ID
      legs: ID
      rh1: ID
      rh2: ID
      rh3: ID
      lh1: ID
      lh2: ID
      lh3: ID
      tali1: ID
      tali2: ID
      tali3: ID
      tali4: ID
      spell1: ID
      spell2: ID
      spell3: ID
      spell4: ID
      spell5: ID
      spell6: ID
      spell7: ID
      spell8: ID
      spell9: ID
      spell10: ID
    ): Build
    addReaction(buildId: ID!, reactionBody: String!): Build
  }
`;

module.exports = typeDefs;
