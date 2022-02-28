//require the models here
const res = require('express/lib/response');
const { Thought, User } = require('../models');

//FOR API/THOUGHTS
//get all thoughts
module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    //get a single thought by Id
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    //post to create a new thought - MUST PUSH THE CREATED THOUGHT'S ID TO THE ASSOCIATED USER'S THOUGHTS ARRAY FIELD
    //post includes thoughtText, username, and userId
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                res.status(200).json(thought)
            })
            .catch((err) => res.status(500).json(err))
            //     return User.findOneAndUpdate(
            //         { _id: req.body.userId},
            //         { $set: req.body },
            //         { runValidators: true, new: true }
            //     )
            // })
            // {thoughtText: req.body.thoughtText,
            // username: req.body.username,
            // userId: req.body.userId},
            // { $push: {user.thoughts: {thoughtId: req.body.}}}
    },

    //put to update a thought by it's id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true }
        )
            .then((updatedThought) =>
                !updatedThought
                    ? res.status(404).json({ message: 'there is no Thought with this Id' })
                    : res.json(updatedThought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },

    //delete to remove a thought by id
    deleteThought(req, res) {
        Thought.deleteOne(
            { _id: req.params.thoughtId })
            .then(thoughtDeleted => {
                !thoughtDeleted
                    ? res.status(404).json({ message: 'there is no thought with this Id' })
                    : res.json(thoughtDeleted)
            })
    }

    //FOR API/THOUGHTS/:thoughtId/reactions
    //post to create a reaction stored in single thought's REACTIONS ARRAY FIELD

    //delete to pull and remove a reaction by teh reaction's reactionId value
}
