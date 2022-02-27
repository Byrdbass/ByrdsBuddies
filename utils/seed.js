const connection = require('../config/connection');
const { User, Thought } = require('../models');
const emails, thoughtText, usernames, friends, reactionBodies = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected to database');
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = []
    const thoughts = []

    await User.collection.insertMany(usernames, thoughts, friends, emails);
    await Thought.collection.insertMany(reactionBodies)

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})

