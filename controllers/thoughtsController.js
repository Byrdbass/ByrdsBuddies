//require the models here
const res = require('express/lib/response');
const { Thought, User } = require('../models');

//For api/thoughts
    //post to create a new thought - MUST PUSH THE CREATED THOUGHT'S ID TO THE ASSOCIATED USER'S THOUGHTS ARRAY FIELD
    //post includes thoughtText, username, and userId
const createThought = async (req, res) => {
    try {
        const thoughtData = await Thought.create(req.body)
        const userData = await User.findOneAndUpdate(
            { username: req.body.username },
            { $addToSet: { thoughts: thoughtData._id } },
            { new:true }
        )
        .populate('thoughts')
        res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}


    //FOR API/THOUGHTS/:thoughtId/reactions
    //post to create a reaction stored in single thought's REACTIONS ARRAY FIELD
const createReaction = async (req, res) => {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body} },
            { new: true }
        )
        console.log(thoughtData)

        !thoughtData 
        ? res.status(404).json({ message: 'there is no thought with this Id, try again' })
        : res.status(200).json(err)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

    //delete to pull and remove a reaction by teh reaction's reactionId value
const deleteReaction = async (req, res) => {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            { id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.body } } },
            { new: true }
        )
        !thoughtData
        ? res.status(404).json({ message: 'there is no thought with this Id, try again' })
        : res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(err)
    }
}

//FOR API/THOUGHTS
//get all thoughts
module.exports = {
    createThought,
    createReaction,
    deleteReaction,
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

//  THE FOLLOWING ROUTE WAS REPLACED BY ASYNC AWAIT METHOD
    // createThought(req, res) {
    //     Thought.create(req.body).
    //         then((newThought) => {
    //             console.log(newThought)
    //         return User.findOneAndUpdate(
    //         { _id: req.body.userId},
    //         { $push: { thoughts: ObjectId.valueOf() } }, 
    //         { new: true } )
    //     })
    //         .then((newThought) => {
    //             return res.status(200).json(newThought)
    //         })
    //         .catch((err) => res.status(500).json(err))
            // return User.findOneAndUpdate(
            //         { _id: req.body.userId},
            //         { $set: req.body },
            //         { runValidators: true, new: true }
            //     )
            // })
            // {thoughtText: req.body.thoughtText,
            // username: req.body.username,
            // userId: req.body.userId},
            // { $push: {user.thoughts: {thoughtId: req.body.}}}

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

//THE FOLLOWING ROUTES WERE REPLACED WITH ASYNC AWAIT METHODS
    // createReaction(req, res) {
    //     Thought.findOneAndUpdate(
    //         { _id: req.params.thoughtId },
    //         { $addToSet: { reactions: req.body } },
    //         { new: true }
    //     )
    //         .then((reactionUpdate) => 
    //             !reactionUpdate
    //                 ? res.status(404).json({ message: 'there is no thought with this Id, try again' })
    //                 : res.json(reactionUpdate)
    //                 )
    //                 .catch((err) => {
    //                     console.log(err);
    //                     res.status(500).json(err)
    //                 });
    // },

    // deleteReaction(req, res) {
    //     Thought.findOneAndUpdate(
    //         { _id: req.params.thoughtId },
    //         { $pull: { reactions: req.params.reactionID}}
    //     )
    // }
}
