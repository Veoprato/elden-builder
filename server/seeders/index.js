const faker = require('faker');
const seedArmor = require('./armor-seeds');
const seedAmmo = require('./ammo-seeds');
const seedWeapon = require('./weapon-seeds');
const seedTalisman = require('./talisman-seeds');
const seedSpell = require('./spell-seeds');
const seedClass = require('./class-seeds');

const db = require('../config/connection');
const { User, Armor, Ammo, Weapon, Talisman, Spell, Class } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
  await Class.deleteMany({});
  await Armor.deleteMany({});
  await Weapon.deleteMany({});
  await Ammo.deleteMany({});
  await Talisman.deleteMany({});
  await Spell.deleteMany({});
  await seedClass();
  await seedArmor();
  await seedAmmo();
  await seedWeapon();
  await seedTalisman();
  await seedSpell();
  

  const userData = [];
  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }
  
  await User.collection.insertMany(userData);
  


  console.log('all done!');
  process.exit(0);
});
