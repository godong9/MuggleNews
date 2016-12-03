'use strict';

const _ = require('underscore');
const async = require('async');
const moment = require('moment');
const log4js = require('log4js');
const logger = log4js.getLogger('controllers/timelines');
const Timeline = require('../models/timelines');
const View = require('../services/view');

const TimelineController = {
  getTimelinePage: function login(req, res) {
    logger.debug("id: ", req.params.id);
    Timeline.getItemsByTimelineId(req.params.id, function(err, items) {
      let i;
      let data = {};
      if (err) {
        logger.error(err);
        return res.redirect('/page/error');
      }
      if (!items) {
        return res.status(404).send('Not Found!');
      }
      View.setCommonData(req, data);
      for (i=0; i<items.length; i++) {
        items[i].item_date_text = moment(items[i].item_date).format("YYYY년 M월 D일 HH:mm:ss");
      }
      data.items = items;
      data.commentPage = 'timelines#' + items[0].timeline_id;
      data.lastUpdatedAt = moment(items[0].timeline_updated_at).format("YYYY년 M월 D일");
      res.render('timeline', data);
    });
  }
};

module.exports = TimelineController;
