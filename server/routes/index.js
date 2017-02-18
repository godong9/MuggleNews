'use strict';

const express = require('express');
const router = express.Router();
const View = require('../services/view');

// const Crawler = require('../services/crawler');

/* GET home page. */
router.get('/', function(req, res) {
  let data = {};
  View.setCommonData(req, data);
  res.render('index', data);
});

router.get('/page/error', function(req, res) {
  res.render('error', {
    message: 'Server error!'
  });
});

router.get('/terms', function(req, res) {
  let data = {};
  View.setCommonData(req, data);
  res.render('terms', data);
});

router.get('/privacy', function(req, res) {
  let data = {};
  View.setCommonData(req, data);
  res.render('privacy', data);
});

// router.get('/test', function(req, res) {
//   Crawler.getPreviewData('http://www.naver.com', function(err, body) {
//     res.send(body);
//   });
// });

module.exports = router;
