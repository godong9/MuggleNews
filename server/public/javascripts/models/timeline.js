//card.js
define([
  '../utils/http-util'
], function (
  HttpUtil
) {
  'use strict';

  /**
   * Timeline Model
   *
   * @constructor
   */
  function Timeline(params) {
    let timeline = params.timeline;

    this.isNew = params.isNew;
    this.isEdit = params.isEdit;

    this.id = timeline.id;
    this.title = timeline.timeline_title;
    this.subtitle = timeline.timeline_subtitle;
    this.coverImg = timeline.timeline_cover_img;
    this.viewCount = timeline.timeline_view_count;
    this.userName = timeline.user_name;
    this.createdAt = params.lastUpdatedAt;
    this.items = params.items;
  }

  Timeline.prototype.create = function(data, callback) {
    let newTimeline = {
      title: data.title,
      subtitle: data.subtitle,
      coverImg: data.coverImg
    };

    HttpUtil.postData('/timelines', newTimeline, callback);
  };

  return Timeline;
});