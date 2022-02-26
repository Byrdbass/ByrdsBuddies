//require the Schema & model from mongoose which comes from connection.js and package.json
//require the friend Schema - DO WE NEED A MODEL FOR FRIEND??  DO WE NEED A MODEL FOR REACTIONS -no should be in thoughts model
//require the thoughts schema
const { Schema, model } = require('mongoose');
const validator = require('validator');


//START CONST HERE WITH new Schema
const userSchema = new Schema(
    {
        //need thoughts array
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        //need friends arrray
        friends: [friendSchema],
        //_id?
        //username
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        //email
        //EMAIL MUST BE VALIDATED
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email',
                isAsync: false
            }
        }
        //friendcount virtual
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//create constant for User model with two properties name of route user and userSchema
const User = model('user', userSchema);

//is this how i trim the username?
User.aggregate(
    {
        $trim: {
            input: '$username'
        }
    }
)

//module exports User model
module.exports = User;