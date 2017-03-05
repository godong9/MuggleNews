'use strict';

const Timeline = require('../models/timelines');
const TimelineService = require('../services/timeline');
const View = require('../services/view');

const IndexController = {
  indexPage: function login(req, res) {
    Timeline.getMainTimelines({ orderby: 'view_count' }, function(err, timelines) {
      let data = {};

      View.setCommonData(req, data);
      data.timelines = TimelineService.getFormattedTimelines(timelines || [])
      res.render('index', data);
    });
  }
};

module.exports = IndexController;
