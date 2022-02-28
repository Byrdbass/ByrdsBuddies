//route will be PLURAL /api/thoughts
const router = require('express').Router();
//all the methods for thought controller
const {
    getThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    //do we need to add another?
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);

router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;