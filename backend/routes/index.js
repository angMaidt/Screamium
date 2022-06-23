//pkg imports
const express = require('express');
//file imports
const apiRouter = require('./api');

//router init
const router = express.Router();

//use /api for all routes
router.use('/api', apiRouter);

//test route
router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

module.exports = router;
