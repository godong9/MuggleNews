'use strict';

const express = require('express');
const router = express.Router();
const View = require('../services/view');
const IndexController = require('../controllers/index');

/* GET home page. */
router.get('/', IndexController.indexPage);

/* GET error page. */
router.get('/page/error', function(req, res) {
  res.render('error', {
    message: 'Server error!'
  });
});

/* GET terms page. */
router.get('/terms', function(req, res) {
  let data = {};
  View.setCommonData(req, data);
  res.render('terms', data);
});

/* GET privacy page. */
router.get('/privacy', function(req, res) {
  let data = {};
  View.setCommonData(req, data);
  res.render('privacy', data);
});

module.exports = router;
