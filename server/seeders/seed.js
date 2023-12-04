const db = require('../config/connection');
const { Member } = require('../models');
const cleanDB = require('./cleanDB');
const memberSeeds = require('./memberSeeds.json');

db.once('open', async () => {
  try {
    await cleanDB('Member', 'members')
    await Member.create(memberSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});