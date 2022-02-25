const { connect, connection } = require('mongoose');

// MUST ENTER THE NAME OF THE DB
const connectionString = 
    process.env.MONGODB_URI || 'mongodb://localhost:27017/byrdsBuddiesDb';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;