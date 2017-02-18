'use strict';

const _ = require('underscore');
const async = require('async');
const logger = require('log4js').getLogger('controllers/timelines');
const Timeline = require('../models/timelines');
const View = require('../services/view');

const IndexController = {
  indexPage: function login(req, res) {
    Timeline.getMainTimelines(function(err, timelines) {
      let data = {};
      View.setCommonData(req, data);
      data.timelines = timelines || [];
      res.render('index', data);
    });
  }
};

module.exports = IndexController;
