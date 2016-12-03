'use strict';

const async = require('async');
const log4js = require('log4js');
const logger = log4js.getLogger('controllers/timelines');
const Timeline = require('../models/timelines');
const View = require('../services/view');

const TimelineController = {
  getTimelinePage: function login(req, res) {
    Timeline.getTimelineById(req.params.id, function(err, timeline) {
      let data = {};
      if (err) {
        return res.redirect('/page/error');
      }
      if (!timeline) {
        return res.status(404).send('Not Found!');
      }
      View.setCommonData(req, data);
      res.send('timeline', data);
    });
  }
};

module.exports = TimelineController;
