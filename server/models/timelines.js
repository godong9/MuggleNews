'use strict';

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
  updateTimeline: function saveTimeline(params, cb) {

  },
  updateTimelineItems: function updateTimelineItems(params, cb) {

  }
};

module.exports = Timeline;
