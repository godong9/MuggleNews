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

// router.get('/test', function(req, res) {
//   Crawler.getPreviewData('http://www.naver.com', function(err, body) {
//     res.send(body);
//   });
// });

module.exports = router;
