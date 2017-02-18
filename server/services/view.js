'use strict';

const config = require('../config/index');

let ViewService = {
  setCommonData: function setCommonData(req, data) {
    if (!data) {
      data = {};
    }
    data.me = req.user && req.user._json;
    if (data.me) {
      data.me.userId = req.user.userId;
      data.me.profileUrl =
        (data.me.picture && data.me.picture.data && data.me.picture.data.url)
        || '/images/avatar@3x.png';
    }
  }
};

module.exports = ViewService;

