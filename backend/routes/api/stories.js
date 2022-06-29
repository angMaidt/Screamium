//pkg imports
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
//file imports
const { Story, User, Comment } = require('../../db/models');
const { requireAuth, restoreUser } = require('../../utils/auth');
// const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//VALIDATORS
const storyValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a title for your story')
        .isLength({ max: 50 })
        .withMessage('Title must be less than 50 characters'),
    check('body')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a body for your story'),
    check('imageUrl')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an image for your story')
        .matches(/\.(jpg|jpeg|png|gif|svg)$/)
        .withMessage('URL must end with .jpg, .jpeg, .png, .gif, or .svg')
];

//ROUTES
//get all stories
router.get('/', restoreUser, asyncHandler(async(req, res) => {
    //query for the stories and send them back as json
    try {
        const stories = await Story.findAll({
            include: [User, Comment],
            order: [
                ['createdAt', 'DESC'],
            ]
        });
        return res.json(stories)
    } catch (e) {
        return res.json({ message: 'Missing stories? Spooky...' })
    }
}))

//Post new story
router.post('/', restoreUser, requireAuth, storyValidators, asyncHandler(async(req, res) => {
    try {
        const { authorId, title, body, imageUrl } = req.body

        const validatorErrors = validationResult(req)

        if (validatorErrors.isEmpty()) {
            const newStory = await Story.create({
                authorId,
                title,
                body,
                imageUrl
            })
            return res.json(newStory)
        } else {
            const errors = validatorErrors.array().map(err => err.msg)

            return res.json({title: 'Validation Failed', errors })
        }
    } catch (e) {
        return res.json({ message: 'no story for you' })
    }
}))

//Edit an existing story
router.put('/:storyId(\\d+)', restoreUser, requireAuth, storyValidators, asyncHandler(async(req, res) => {
    try {
        const storyId = req.params.storyId
        const story = await Story.findByPk(storyId)
        const { title, body, imageUrl } = req.body

        const validatorErrors = validationResult(req)

        if (validatorErrors.isEmpty()) {
            const editedStory = await story.update({ title, body, imageUrl })

            return res.json(editedStory)
        } else {
            const errors = validatorErrors.array().map(err => err.msg)

            return res.json({title: 'Validation Failed', errors })
        }
    } catch (e) {
        return res.json({ message: 'could not find that story' })
    }
}))

//Delete an existing story
router.delete('/:storyId(\\d+)', restoreUser, asyncHandler(async(req, res) => {
    try {
        const storyId = req.params.storyId
        const story = await Story.findByPk(storyId)
        if (story) {
            await story.destroy();
            return res.json({ message: 'story destroyed' })
        }
    } catch (e) {
        return res.json({ message: 'could not destroy' })
    }
}))

module.exports = router;
