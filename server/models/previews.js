'use strict';

const async = require('async');
const pool = require('../db/db').pool;

let Preview = {
  insertPreview: function insertPreview(params, cb) {
    async.waterfall([
      function(callback) {
        let query = 'INSERT INTO previews (title, content, preview_url, preview_img) VALUES (?,?,?,?);';
        let insertItem = [
          params.title,
          params.content,
          params.preview_url,
          params.preview_img
        ];
        pool.query(query, insertItem, function(err) {
          callback(err);
        });
      },
      function(callback) {
        let query = 'SELECT * FROM previews WHERE preview_url=? ORDER BY created_at DESC LIMIT 1;';
        let queryItem = params.preview_url;
        pool.query(query, queryItem, function(err, rows) {
          callback(err, rows && rows[0]);
        });
      }
    ], function (err, result) {
      cb(err, result);
    });
  }
};

module.exports = Preview;
