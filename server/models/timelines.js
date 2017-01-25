'use strict';

const _ = require('underscore');
const async = require('async');
const pool = require('../db/db').pool;

let Timeline = {
  getItemsByTimelineId: function getUser(id, cb) {
    let query =
        'SELECT ' +
          'items.*, ' +
          'previews.title AS preview_title, ' +
          'previews.content AS preview_content, ' +
          'previews.preview_img AS preview_img, ' +
          'previews.preview_url AS preview_url, ' +
          'timelines.title AS timeline_title, ' +
          'timelines.subtitle AS timeline_subtitle, ' +
          'timelines.view_count AS timeline_view_count, ' +
          'timelines.updated_at AS timeline_updated_at, ' +
          'timelines.cover_img AS timeline_cover_img, ' +
          'users.name AS user_name, ' +
          'users.profile_img AS user_profile_img ' +
        'FROM items ' +
        'LEFT JOIN previews ON items.preview_id = previews.id ' +
        'INNER JOIN timelines ON items.timeline_id = timelines.id ' +
        'INNER JOIN users ON timelines.user_id = users.id ' +
        'WHERE timelines.id=?;';
    pool.query(query, id, function(err, rows) {
      cb(err, rows);
    });
  },
  increaseTimelineViewCount: function increaseTimelineViewCount(id, cb) {
    let query =
        'UPDATE ' +
          'timelines ' +
          'SET view_count = view_count + 1 ' +
          'WHERE id = ?';
    pool.query(query, id, function(err) {
      cb(err);
    });
  },
  insertTimeline: function insertTimeline(params, cb) {
    let query = 'INSERT INTO timelines (title, subtitle, cover_img, user_id) VALUES (?,?,?,?);';
    let insertItem = [
      params.title,
      params.subtitle,
      params.coverImg,
      params.userId
    ];
    pool.query(query, insertItem, function(err, result) {
      cb(err, result && result.insertId);
    });
  },
  updateTimeline: function updateTimeline(params, cb) {
    let query =
      'UPDATE ' +
        'timelines ' +
      'SET title = ?, ' +
        'subtitle = ?, ' +
        'cover_img = ? ' +
      'WHERE id = ? AND user_id = ?;';
    let insertItem = [
      params.title,
      params.subtitle,
      params.coverImg,
      params.id,
      params.userId
    ];
    pool.query(query, insertItem, function(err, result) {
      cb(err, result && result.insertId);
    });
  },
  insertTimelineItem: function insertTimelineItem(params, cb) {
    let query = '' +
      'INSERT INTO items ' +
      '(title, content, timeline_id, preview_id, item_order, item_date) ' +
      'VALUES (?,?,?,?,?,?);';
    let insertItem = [
      params.title,
      params.content,
      params.timelineId,
      params.previewId,
      params.itemOrder,
      params.itemDate
    ];
    pool.query(query, insertItem, function(err, result) {
      cb(err, result && result.insertId);
    });
  },
  insertTimelineItems: function insertTimelineItems(params, cb) {
    let self = this;
    let items = _.map(params.items, function(item) {
      item.timelineId = params.timelineId;
      return item;
    });

    async.each(items, self.insertTimelineItem, function(err){
      cb(err);
    });
  },
  updateTimelineItem: function updateTimelineItem(params, cb) {
    let query = '' +
      'UPDATE ' +
        'items ' +
      'SET title = ?, ' +
        'content = ?, ' +
        'preview_id = ?, ' +
        'item_date = ?, ' +
        'item_order = ? ' +
      'WHERE id = ?;';
    let updateItem = [
      params.title,
      params.content,
      params.previewId,
      params.itemDate,
      params.itemOrder,
      params.id
    ];
    pool.query(query, updateItem, function(err) {
      cb(err);
    });
  },
  updateTimelineItems: function updateTimelineItems(params, cb) {
    let self = this;
    let items = params.items;

    async.each(items, self.updateTimelineItem, function(err){
      cb(err);
    });
  },
  changeTimelineOrders: function changeTimelineOrders(params, cb) {
    async.waterfall([
      function(callback) {
        let query = 'UPDATE items SET item_order = ? WHERE id = ? AND user_id = ?;';
        let updateItem = [
          params.beforeOrder,
          params.nextOrder,
          params.userId
        ];
        pool.query(query, updateItem, function(err) {
          callback(err);
        });
      },
      function(callback) {
        let query = 'UPDATE items SET item_order = ? WHERE id = ? AND user_id = ?;';
        let updateItem = [
          params.nextOrder,
          params.beforeOrder,
          params.userId
        ];
        pool.query(query, updateItem, function(err) {
          callback(err);
        });
      },
    ], function (err) {
      cb(err);
    });
  }
};

module.exports = Timeline;
