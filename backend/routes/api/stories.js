//pkg imports
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
//file imports
const { Story, User } = require('../../db/models');
const { requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//TODO: Story Validators

//ROUTES
//get all stories
router.get('/', restoreUser, asyncHandler(async(req, res) => {
    //query for the stories and send them back as json
    try {
        const stories = await Story.findAll();
        // console.log(stories)
        return res.json(stories)
    } catch (e) {
        return res.json('Missing stories? Spooky...')
    }
}))
//get a single story
router.get('/:storyId(\\d+)', restoreUser, asyncHandler(async(req, res) => {
    try {
        const story = await Story.findOne({
            where: { id: req.params.storyId}
        })
        return res.json(story)
    } catch (e) {
        return res.json({message: 'that story has mysteriously disappeared'})
    }
}))

//Post new story
router.post('/', restoreUser, asyncHandler(async(req, res) => {
    try {
        const { authorId, title, body } = req.body
        const newStory = await Story.create({
            authorId,
            title,
            body
        })
        // console.log(newStory)
        return res.json(newStory)
    } catch (e) {
        return res.json({message: 'no story for you'})
        //todo: better err handling
    }
}))

//Edit an existing story
router.put('/:storyId(\\d+)', restoreUser, asyncHandler(async(req, res) => {
    try {
        const storyId = req.params.storyId
        const story = await Story.findByPk(storyId)
        // console.log(story)
        const { title, body } = req.body
        const editedStory = await story.update({ title, body })
        // console.log(editedStory.json())
        return res.json(editedStory)
    } catch (e) {
        //todo: better err handling
        return res.json({message: 'could not find that story'})
    }
}))

//Todo: Delete an existing story

module.exports = router;
