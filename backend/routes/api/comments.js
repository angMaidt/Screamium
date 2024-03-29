//pkg imports
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
//file imports
const { User, Comment } = require('../../db/models');
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
router.get('/:storyId(\\d+)', restoreUser, asyncHandler(async(req, res) => {
    try {
        const storyId = req.params.storyId
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
router.post('/:storyId(\\d+)', restoreUser, requireAuth, commentValidators, asyncHandler(async(req, res) => {
    try {
        const { userId, storyId, body } = req.body

        const validatorErrors = validationResult(req)

        if (validatorErrors.isEmpty()) {
            const comment = await Comment.create({
                userId,
                storyId,
                body
            })

            const newComment = await Comment.findOne({
                where: { id: comment.id },
                include: User
            })

            return res.json(newComment)
        } else {
            const errors = validatorErrors.array().map(err => err.msg)
            return res.json({ error: 'Validation Failed', errors })
        }
    } catch (e) {
        return res.json({ message: 'Unable to make comment at this time' })
    }
}))

//edit a comment
router.put('/:commentId(\\d+)', restoreUser, requireAuth, commentValidators, asyncHandler(async(req, res) => {
    try {
        const commentId = req.params.commentId
        const originalComment = await Comment.findByPk(commentId)
        const { userId, storyId, body } = req.body

        const validatorErrors = validationResult(req)

        if (validatorErrors.isEmpty()) {
            await originalComment.update({ userId, storyId, body })

            const editedComment = await Comment.findOne({
                where: { id: originalComment.id },
                include: User
            })

            return res.json(editedComment)
        } else {
            const errors = validatorErrors.array().map(err => err.msg)
            return res.json({ error: 'Validation failed', errors })
        }
    } catch (e) {
        return res.json({ message: 'Could not edit comment at this time' })
    }
}))

//delete a comment
router.delete('/:commentId(\\d+)', restoreUser, requireAuth, asyncHandler(async(req, res) => {
    try {
        const commentId = req.params.commentId
        const comment = await Comment.findByPk(commentId)

        if (comment) {
            await comment.destroy();
            return res.json(comment.id)
        }
    } catch (e) {
        return res.json({ message: 'Could not destroy comment' })
    }
}))

module.exports = router;
