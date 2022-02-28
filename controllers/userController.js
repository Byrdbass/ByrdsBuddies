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
                res.status(200).json(user)
            })
            .catch((err) => res.status(500).json(err))
    },

    //put to update a user by id
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((updatedUser) =>
                !updatedUser
                    ? res.status(404).json({ message: 'there is no user with this Id' })
                    : res.json(updatedUser)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },

    //delete to remove user by id
    deleteUser(req, res) {
        User.findOneAndDelete(
            { _id: req.params.userId })
            .then(userDeleted => {
                !userDeleted
                    ? res.status(404).json({ message: 'there is no user with this Id' })
                    : res.json(userDeleted)
            })
    },

    //BONUS remove a user's associated thoughts when deleted


    //FOR API/USERS/:userId/friends/:friendId
    //post to add a new friend to user's friend list
    // DO WE USE $PULL FOR THIS CONTROLLER? no try $push
    newFriend(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId }, 
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((addFriend) =>
            !addFriend
                ? res.status(404).json({ message: 'unable to add new friend, check user Id'})
                : res.json(addFriend)
            )
            .catch((err) => res.status(500).json(err));
    },

    //delete to remove a friend from a user's friend list
    //NOT WORKING!
    deleteFriend(req,res) {
        User.findOneAndDelete(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId  } },
            { runValidators: true, new: true }
        )
            .then((removeFriend) =>
            !removeFriend
                ? res.status(404).json({ message: 'unable to delete friend, check user Id'})
                : res.json(removeFriend)
            )
            .catch((err) => res.status(500).json(err));
    }
}