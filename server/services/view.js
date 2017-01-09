'use strict';

const config = require('../config/index');
const log4js = require('log4js');
const logger = log4js.getLogger('service/view');

let ViewService = {
  setCommonData: function setCommonData(req, data) {
    if (!data) {
      data = {};
    }
    data.me = req.user && req.user._json;
    if (data.me) {
      data.me.profileUrl =
        (data.me.picture && data.me.picture.data && data.me.picture.data.url)
        || '/images/avatar@3x.png';
    }
  }
};

module.exports = ViewService;

