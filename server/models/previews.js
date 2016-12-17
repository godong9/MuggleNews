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
        pool.query(query, insertItem, function(err, result) {
          callback(err, result && result.insertId);
        });
      },
      function(id, callback) {
        let query = 'SELECT * FROM previews WHERE id=?;';
        pool.query(query, id, function(err, rows) {
          callback(err, rows && rows[0]);
        });
      }
    ], function (err, result) {
      cb(err, result);
    });
  }
};

module.exports = Preview;
