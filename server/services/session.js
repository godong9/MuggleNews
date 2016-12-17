'use strict';

const logger = require('log4js').getLogger('service/user');

let SessionService = {
  getSessionUserId: function getSessionUser(req) {
    return req.user && req.user._json && req.user._json.id;
  }
};

module.exports = SessionService;

