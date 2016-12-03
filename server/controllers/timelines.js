'use strict';

const async = require('async');
const log4js = require('log4js');
const logger = log4js.getLogger('controllers/timelines');
const Timeline = require('../models/timelines');
const View = require('../services/view');

const TimelineController = {
  getTimelinePage: function login(req, res) {
    logger.debug("id: ", req.params.id);
    Timeline.getItemsByTimelineId(req.params.id, function(err, items) {
      let data = {};
      if (err) {
        logger.error(err);
        return res.redirect('/page/error');
      }
      if (!items) {
        return res.status(404).send('Not Found!');
      }
      View.setCommonData(req, data);
      data.items = items;
      logger.debug("=====");
      logger.debug(items);
      // data.commentPage = 'timelines#' + timeline.id;
      data.commentPage = 'timelines#1';
      res.render('timeline', data);
    });
  }
};

module.exports = TimelineController;
