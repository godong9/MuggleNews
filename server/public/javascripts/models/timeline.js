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
    this.isNew = params.isNew;
    this.id = params.id;
    this.title = params.title;
    this.subtitle = params.subtitle;
    this.coverImg = params.coverImg;
    this.viewCount = params.viewCount;
    this.userName = params.userName;
    this.createdAt = params.createdAt;
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