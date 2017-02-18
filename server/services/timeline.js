'use strict';

const _ = require('underscore');
const moment = require('moment');

const TimelineService = {
  getFormattedTimelines: function setDateText(timelines) {
    let formattedTimelines = _.map(timelines || [], function(timeline) {
      timeline.date_text = moment(timeline.created_at).format("YYYY년 M월 D일");
      return timeline;
    });
    return formattedTimelines;
  }
};

module.exports = TimelineService;

