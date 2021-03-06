'use strict';

const async = require('async');
const moment = require('moment');
const logger = require('log4js').getLogger('controllers/users');
const PreUser = require('../models/pre_users');
const User = require('../models/users');
const Slack = require('../services/slack');
const View = require('../services/view');
const Timeline = require('../models/timelines');
const TimelineService = require('../services/timeline');
const Session = require('../services/session');

const UserController = {
  getUserMyPage: function getUserMyPage(req, res) {
    let data = {};
    let currentUserId = Session.getSessionUserId(req);
    let userId = req.params.userId;
    View.setCommonData(req, data);

    async.waterfall([
      function(callback) {
        User.getUserById(userId, callback);
      },
      function(user, callback) {
        if (!user) {
          return res.status(404).send('Not Found!');
        }
        data.user = user;
        Timeline.getTimelinesByUserId(user.id, callback);
      }
    ], function (err, timelines) {
      if (err) {
        logger.error(err);
        return res.redirect('/page/error');
      }

      data.isMyPage = true;
      data.timelines = TimelineService.getFormattedTimelines(timelines || [])
      if (data.timelines[0] && data.timelines[0].user_id) {
        data.isOwner = (currentUserId === data.timelines[0].user_id);
      }
      res.render('mypage', data);
    });

  },
  facebookLoginCallback: function facebookLoginCallback(req, res) {
    let fbUser = req.user._json;
    let params = {
      fbId: fbUser.id,
      name: fbUser.name,
      email: fbUser.email || 'unknown@muggle.news',
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
        Slack.sendToPreUser({
          email: params.email,
          userAgent: req.headers['user-agent']
        });
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
    logger.info(params);
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
