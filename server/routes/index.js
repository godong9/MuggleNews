'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {};
  data.me = req.user && req.user._json;
  // console.log(req.user._json);
  res.render('index', data);
});

module.exports = router;
