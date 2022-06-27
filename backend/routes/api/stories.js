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

//TODO: Post new story

//Todo: Edit an existing story

//Todo: Delete an existing story

module.exports = router;
