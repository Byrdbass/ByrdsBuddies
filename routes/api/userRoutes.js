//route will be PLURAL /api/users
const router = require('express').Router();
// all the methods for routes in the controllers folder
const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    //need to add remove a user associated thoughts
    //add post to add a new friend to user's friend list
    newFriend,
    //add delete to remove a friend from a user's friend list
    deleteFriend,
} = require('../../controllers/userController');

// route api/users
router.route('/')
    .get(getUsers)
    .post(createUser) //DO WE NEED TO ADD ANOTHER?

// route api/users/:userId

router
    .route('/:userId')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);

// DO WE NEED TO ADD ANOTHER?

router.route('/:userId/friends/:friendId')
    .post(newFriend)
    .delete(deleteFriend);

module.exports = router;