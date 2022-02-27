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
    },

    //post to create a new thought - MUST PUSH THE CREATED THOUGHT'S ID TO THE ASSOCIATED USER'S THOUGHTS ARRAY FIELD
    //post includes thoughtText, username, and userId
    createThought(req, res) {
        Thought.create(
            
        )
    },

    //put to update a thought by it's id
    updateThought(req, res) {
        Thought.findOneAndUpdate(

        )
    },

    //delete to remove a thought by id
    deleteThought(req, res) {
        Thought.deleteOne(

        )
    }



    //FOR API/THOUGHTS/:thoughtId/reactions
    //post to create a reaction stored in single thought's REACTIONS ARRAY FIELD

    //delete to pull and remove a reaction by teh reaction's reactionId value
}
