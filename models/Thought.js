//require schema and model from mongoose
//require User schema
//require Reaction schema??
const { Schema, model } = require('mongoose');
const userSchema = require('./User')

const thoughtSchema = new Schema(
    {
//_id -automatically created?
//thoughtText
        thoughtText: {
                type: String,
                required: true,
                min_length: 1,
                max_length: 280,
            },
//created at - NEEDS GETTER METHOD WITH CURRENT TIMESTAMP
//Date
//set default value to current timestamp
//use a getter method to format the timestamp on query
        createdAt: {
            type: Date,
            default: Date.now,
        },
//username
//string
//required
        username: {
            type: String,
            required: true,
        },
//REACTIONS ARRAY
//reaction count - VIRTUAL AS LENGTH OF REACTIONS ARRAY
        reactions: [
            {
                reactionId: {
                    type: ObjectId,
                    default: new ObjectId,
                },
                reactionBody: {
                    type: String,
                    required: true,
                    max_length: 280,
                }
            }
        ]

//need to use:
//reactionId 
//with mongoose objectId data type
//default value is set to a new objectID

//reactionBody
//string
//required
//280 char max
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    },
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;