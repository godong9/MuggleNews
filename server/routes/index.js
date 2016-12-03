'use strict';

const express = require('express');
const router = express.Router();
const View = require('../services/view');

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {};
  View.setCommonData(req, data);
  // console.log(req.user._json);
  res.render('index', data);
});

module.exports = router;
