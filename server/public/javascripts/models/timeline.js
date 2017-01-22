//card.js
define([
  '../libs/underscore/underscore',
  '../utils/http-util'
], function (
  _,
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

  Timeline.prototype.addItem = function(data) {
    this.items.push(data);
  };

  Timeline.prototype.changeItem = function(kind, id) {
    let self = this;
    let isEnd = false;

    _.map(self.items, function(item, idx) {
      if (!isEnd && item && (id === item.id)) {
        switch(kind) {
          case 'del':
            self.items.splice(idx, 1);
            self.reorderItem();
            break;
          case 'up':
            self.items.splice(idx - 1, 0, item);
            self.items.splice(idx + 1, 1);
            self.reorderItem();
            break;
          case 'down':
            isEnd = true;
            self.items.splice(idx + 2, 0, item);
            self.items.splice(idx, 1);
            self.reorderItem();
            break;
          default:
            break;
        }
      }
    });
  };

  Timeline.prototype.reorderItem = function() {
    let self = this;
    _.map(self.items, function(item, idx) {
      item.order = idx + 1;
    });
  };

  return Timeline;
});