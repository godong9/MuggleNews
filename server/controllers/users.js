'use strict';

const async = require('async');
const log4js = require('log4js');
const logger = log4js.getLogger('controllers/users');
const PreUser = require('../models/pre_users');
const User = require('../models/users');
const Slack = require('../services/slack');
const View = require('../services/view');

const UserController = {
  getUserMyPage: function getUserMyPage(req, res) {
    let data = {};
    View.setCommonData(req, data);
    res.render('mypage', data);
  },
  facebookLoginCallback: function facebookLoginCallback(req, res) {
    let fbUser = req.user._json;
    let params = {
      fbId: fbUser.id,
      name: fbUser.name,
      email: fbUser.email,
      profileImg: fbUser.picture && fbUser.picture.data && fbUser.picture.data.url
    };

    async.waterfall([
      function(callback) {
        User.getUserByFacebookId(params.fbId, callback);
      },
      function(user, callback) {
        if (user) {
          return callback();
        }
        User.insertFacebookUser(params, callback);
      }
    ], function (err) {
      if (err) {
        logger.error(err);
        return res.redirect('/page/error');
      }
      res.redirect('/');
    });
  },
  logout: function logout(req, res) {
    req.logout();
    res.redirect('/');
  },
  insertPreUser: function login(req, res) {
    if (!req.body.email) {
      res.status(500).send('이메일을 입력해주세요!');
      return;
    }
    let params = {
      email: req.body.email,
      referrer: req.headers.referer,
      userAgent: req.headers['user-agent']
    };
    logger.debug(params);
    Slack.sendToPreUser(params);
    PreUser.insertPreUser(params, function(err) {
      if (err) {
        logger.error(err);
      }
      res.send({});
    });
  }
};

module.exports = UserController;
