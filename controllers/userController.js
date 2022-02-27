//require the models here
const { User, Thought } = require('../models')

//module exports object starts here
module.exports = {

//FOR API/USERS
//get all users
getUsers(req, res) {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
},

//get a single user by id and POPULATE thought and friend data
getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .select('-__v')
    .populate('thoughts', 'friends')
    .then((user) =>
    !user
    ? res.status(404).json({ message: 'No user with this ID' })
    : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},

//post a new users with username and email
createUser(req, res) {
    User.create(req.body)
    .then((user) => {
        return 
    })
},

//put to update a user by id
updateUser(req,res) {

},

//delete to remove user by id
deleteUser(req,res) {
    User.deleteOne(
        {_id: ObjectID(req.params.userId) },
        (err) => {
            if (err) {
                if (err) throw err;
                res.send("document deleted")
            }
        }
    )
},

//BONUS remove a user's associated thoughts when deleted


//FOR API/USERS/:userId/friends/:friendId
//post to add a new friend to user's friend list

//delete to remove a friend from a user's friend list
}