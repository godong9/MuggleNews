'use strict';

const pool = require('../db/db').pool;

let User = {
  getTimelineById: function getUser(id, cb) {
    let query = 'SELECT * FROM users WHERE id=?';
    let queryItem = id;
    pool.query(query, queryItem, function(err, rows) {
      cb(err, rows && rows[0]);
    });
  }
};

module.exports = User;
