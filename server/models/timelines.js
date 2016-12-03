'use strict';

const pool = require('../db/db').pool;

let User = {
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
  }
};

module.exports = User;
