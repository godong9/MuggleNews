'use strict';

const pool = require('../db/db').pool;

let User = {
  getUserByFacebookId: function getUser(fbId, cb) {
    let query = 'SELECT id FROM users WHERE fb_id=?';
    let queryItem = fbId;
    pool.query(query, queryItem, function(err, rows) {
      cb(err, rows && rows[0]);
    });
  },
  insertFacebookUser: function insertUser(params, cb) {
    let query = 'INSERT INTO users (fb_id, name, email, profile_img) VALUES (?,?,?,?);';
    let insertItem = [
      params.fbId,
      params.name,
      params.email,
      params.profileImg
    ];
    pool.query(query, insertItem, function(err) {
      cb(err);
    });
  }
};

module.exports = User;
