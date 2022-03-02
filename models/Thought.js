//require schema and model from mongoose
//require User schema
//require Reaction schema??
const { Schema, model } = require('mongoose');
const userSchema = require('./User')
const { format_date } = require('../utils/helper')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: dateFormat => format_date(dateFormat),
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    },
)

const thoughtSchema = new Schema(
    {
        //_id -automatically created?
        //thoughtText
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
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
            reactionSchema
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

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;