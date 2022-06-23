//pkg imports
const express = require('express');
//file imports
const apiRouter = require('./api');

//router init
const router = express.Router();

//use /api for all routes
router.use('/api', apiRouter);

module.exports = router;
