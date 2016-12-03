'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {};
  data.me = req.user && req.user._json;
  // console.log(req.user._json);
  res.render('index', data);
});

module.exports = router;
