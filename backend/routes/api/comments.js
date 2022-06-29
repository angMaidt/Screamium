//pkg imports
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
//file imports
const { Story, User, Comment } = require('../../db/models');
const { requireAuth, restoreUser } = require('../../utils/auth');

const router = express.Router();

//VALIDATORS
//userId, storyId, body
const commentValidators = [
    check('body')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a body for your comment')
      .isLength({ max: 500 })
      .withMessage('Comment cannot be more than 500 characters')
]

//ROUTES
//get all comments for a story
router.get('/:storyId', restoreUser, asyncHandler(async(req, res) => {
    try {
        const storyId = req.params.storyId
        console.log(storyId)
        const comments = await Comment.findAll({
            where: { storyId },
            include: User
        })
        res.json(comments)
    } catch (e) {
        return res.json({ message: 'Could not fetch comments' })
    }
}))

//create a comment

//edit a comment

//delete a comment


module.exports = router;
