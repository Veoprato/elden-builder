import { gql } from '@apollo/client';

export const GET_CLASSES = gql`
{
  getAllClass {
    _id
    name
    image
    description
    stats {
      level
      vigor
      mind
      endurance
      strength
      dexterity
      intelligence
      faith
      arcane
    }
  }
}
`;
export const GET_BUILDS = gql`
{
  getAllBuilds {
    _id
    title
    createdAt
    updatedAt
    username
    desc
    class {
      _id
      source_id
      name
      image
      description
      stats {
        level
        vigor
        mind
        endurance
        strength
        dexterity
        intelligence
        faith
        arcane
      }
    }
    keepsake
    level
    vigor
    mind
    endurance
    strength
    dexterity
    intelligence
    faith
    arcane
    head {
      _id
      source_id
      name
      image
      description
      category
      dmgNegation {
        amount
        name
      }
      resistance {
        amount
        name
      }
      weight
    }
    body {
      _id
      source_id
      name
      image
      description
      category
      weight
    }
    arms {
      _id
      source_id
      name
      image
      description
      category
      weight
    }
    legs {
      _id
      source_id
      name
      image
      description
      category
      weight
    }
    rh1 {
      _id
      source_id
      name
      image
      description
      attack {
        amount
        name
      }
      defence {
        amount
        name
      }
      scalesWith {
        scaling
        name
      }
      requiredAttributes {
        amount
        name
      }
      category
      weight
    }
    rh2 {
      _id
      source_id
      name
      image
      description
      category
      weight
    }
    rh3 {
      _id
      source_id
      name
      image
      description
      category
      weight
    }
    lh1 {
      _id
      source_id
      name
      image
      description
      category
      weight
    }
    lh2 {
      _id
      source_id
      name
      image
      description
      category
      weight
    }
    lh3 {
      _id
      source_id
      name
      image
      description
      category
      weight
    }
    arrow1 {
      _id
      source_id
      name
      image
      description
      type
      attackPower {
        amount
        name
      }
      passive
    }
    arrow2 {
      _id
      source_id
      name
      image
      description
      type
      passive
    }
    bolt1 {
      _id
      source_id
      name
      image
      description
      type
      passive
    }
    bolt2 {
      _id
      source_id
      name
      image
      description
      type
      passive
    }
    tali1 {
      _id
      source_id
      name
      image
      description
      effect
    }
    tali2 {
      _id
      source_id
      name
      image
      description
      effect
    }
    tali3 {
      _id
      source_id
      name
      image
      description
      effect
    }
    tali4 {
      _id
      source_id
      name
      image
      description
      effect
    }
    spell1 {
      _id
      source_id
      name
      image
      description
      type
      cost
      slots
      effects
      requires {
        amount
        name
      }
    }
    spell2 {
      _id
      source_id
      name
      image
      description
      type
      cost
      slots
      effects
    }
    spell3 {
      _id
      source_id
      name
      image
      description
      type
      cost
      slots
      effects
    }
    spell4 {
      _id
      source_id
      name
      image
      description
      type
      cost
      slots
      effects
    }
    spell5 {
      _id
      source_id
      name
      image
      description
      type
      cost
      slots
      effects
    }
    spell6 {
      _id
      source_id
      name
      image
      description
      type
      cost
      slots
      effects
    }
    spell7 {
      _id
      source_id
      name
      image
      description
      type
      cost
      slots
      effects
    }
    spell8 {
      _id
      source_id
      name
      image
      description
      type
      cost
      slots
      effects
    }
    spell9 {
      _id
      source_id
      name
      image
      description
      type
      cost
      slots
      effects
    }
    spell10 {
      _id
      source_id
      name
      image
      description
      type
      cost
      slots
      effects
    }
  }
}
`;