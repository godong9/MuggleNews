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
  }
};

module.exports = ViewService;

