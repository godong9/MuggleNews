'use strict';

const _ = require('underscore');
const moment = require('moment');
const Timeline = require('../models/timelines');
const View = require('../services/view');

const IndexController = {
  indexPage: function login(req, res) {
    Timeline.getMainTimelines(function(err, timelines) {
      let data = {};
      View.setCommonData(req, data);
      data.timelines = _.map(timelines || [], function(timeline) {
        timeline.date_text = moment(timeline.created_at).format("YYYY년 M월 D일");
        return timeline;
      });
      res.render('index', data);
    });
  }
};

module.exports = IndexController;
