'use strict';

const pool = require('../db/db').pool;

let PreUser = {
  insertPreUser: function insertPreUser(params, cb) {
    let query = 'INSERT INTO pre_users (email, referrer, user_agent) VALUES (?,?,?);';
    let insertItem = [
      params.email,
      params.referrer,
      params.userAgent
    ];
    pool.query(query, insertItem, function(err) {
      cb(err);
    });
  }
};

module.exports = PreUser;
