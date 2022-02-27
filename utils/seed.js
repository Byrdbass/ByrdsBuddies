const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThoughtText, getRandomUsername, getRandomFriends ,getRandomEmails, getRandomReactionBodies } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected to database');
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = []
    const thoughts = []

    //populating the data with 5 users
    for (let i=0; i<5; i++) {
        const thoughts = getRandomThoughtText();
        const thoughtText = getRandomThoughtText()
        const reactionBody = getRandomReactionBodies();
        const friends = getRandomFriends();
        const username = getRandomUsername();
        const email = getRandomEmails();

        users.push({
            thoughts,
            friends,
            username,
            email,
        });

        // thoughts.push ({
        //     thoughtText,
        //     username,
        //     //Do i need to create a seperate array.push for this?
        //     reactionBody,
        // });
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})

