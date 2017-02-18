'use strict';

let SessionService = {
  getSessionUserId: function getSessionUserId(req) {
    return req.user && req.user.userId;
  },
  getSessionUserName: function getSessionUserName(req) {
    return req.user && req.user._json && req.user._json.name;
  }
};

module.exports = SessionService;

