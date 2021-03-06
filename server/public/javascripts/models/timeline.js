// timeline.js
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
    this.cover_img = timeline.timeline_cover_img;
    this.view_count = timeline.timeline_view_count;
    this.user_name = timeline.user_name;
    this.createdAt = params.lastUpdatedAt;
    this.items = params.items;
  }

  Timeline.prototype.create = function(data, callback) {
    // console.log('savedModel: ', data);
    HttpUtil.postData('/timelines', data, callback);
  };

  Timeline.prototype.update = function(data, callback) {
    // console.log('updatedModel: ', data);
    HttpUtil.putData('/timelines', data, callback);
  };

  Timeline.prototype.setCoverImg = function(coverImg) {
    this.cover_img = coverImg;
  };

  Timeline.prototype.setTitle = function(title) {
    this.title = title;
  };

  Timeline.prototype.setSubtitle = function(subtitle) {
    this.subtitle = subtitle;
  };

  Timeline.prototype.addItem = function(data) {
    this.items.push(data);
  };

  Timeline.prototype.setItems = function(data) {
    this.items = data;
  };

  Timeline.prototype.changeItem = function(kind, id) {
    let self = this;
    let isEnd = false;
    console.log(kind + '/' + id);

    _.map(self.items, function(item, idx) {
      console.log(item);
      if (!isEnd && item && (id === item.id)) {
        switch(kind) {
          case 'del': // 아이템 삭제
            self.items.splice(idx, 1);
            self.reorderItem();
            break;
          case 'up': // 순서 위로
            self.items.splice(idx - 1, 0, item);
            self.items.splice(idx + 1, 1);
            self.reorderItem();
            break;
          case 'down': // 순서 아래로
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
      item.item_order = idx + 1;
    });
  };

  return Timeline;
});