'use strict';

const _ = require('underscore');
const async = require('async');
const moment = require('moment');
const logger = require('log4js').getLogger('controllers/timelines');
const Timeline = require('../models/timelines');
const View = require('../services/view');
const Session = require('../services/session');

const TimelineController = {
  getTimelinePage: function login(req, res) {
    let userId = Session.getSessionUserId(req);
    let timelineId = req.params.id;
    async.waterfall([
      function(callback) {
        Timeline.increaseTimelineViewCount(timelineId, callback);
      },
      function(callback) {
        Timeline.getItemsByTimelineId(timelineId, callback);
      }
    ], function (err, items) {
      let i;
      let data = {};
      if (err) {
        logger.error(err);
        return res.redirect('/page/error');
      }
      if (!items || items.length === 0) {
        logger.debug(items);
        return res.status(404).send('Not Found!');
      }
      View.setCommonData(req, data);
      for (i=0; i<items.length; i++) {
        if (items[i].preview_title && !items[i].preview_img) {
          items[i].preview_img = '/images/no_image.png';
        }
        if (items[i].item_date) {
          items[i].item_date_text = moment(items[i].item_date).format("YYYY년 M월 D일");
        }
        if (items[i].item_time) {
          items[i].item_date_text += " " + items[i].item_time;
        }
      }
      data.items = items;
      data.timeline = _.extend({}, items[0]);
      data.timeline.id = timelineId;
      data.commentPage = 'timelines#' + items[0].timeline_id;
      data.lastUpdatedAt = moment(items[0].timeline_updated_at).format("YYYY년 M월 D일");
      data.isOwner = (userId === data.timeline.user_id);
      res.render('timeline', data);
    });
  },
  getTimelineEditPage: function getNewTimelinePage(req, res) {
    let userId = Session.getSessionUserId(req);
    if (!userId) {
      res.status(401).send('로그인을 해주세요!');
      return;
    }
    let editId = req.params.id;
    logger.debug("id: ", editId);
    if (!editId || editId === 'new') {
      let data = {};
      data.isNew = true;
      data.items = [];
      data.lastUpdatedAt = '0000-00-00';
      data.timeline = {};
      View.setCommonData(req, data);
      res.render('timeline-edit', data);
      return;
    }

    async.waterfall([
      function(callback) {
        Timeline.getItemsByTimelineId(editId, callback);
      }
    ], function (err, items) {
      let i;
      let data = {};
      data.isNew = false;

      if (err) {
        logger.error(err);
        return res.redirect('/page/error');
      }
      if (!items || items.length === 0) {
        return res.status(404).send('Not Found!');
      }
      View.setCommonData(req, data);
      for (i=0; i<items.length; i++) {
        if (items[i].preview_title && !items[i].preview_img) {
          items[i].preview_img = '/images/no_image.png';
        }
      }

      data.items = items;
      data.timeline = _.extend({}, items[0]);
      data.timeline.id = editId;
      data.lastUpdatedAt = moment(items[0].timeline_updated_at).format("YYYY년 M월 D일");
      data.isOwner = (userId === data.timeline.user_id);
      if (!data.isOwner) {
        res.status(401).send('권한이 없습니다!');
        return;
      }
      res.render('timeline-edit', data);
    });

  },
  postTimeline: function postTimeline(req, res) {
    let userId = Session.getSessionUserId(req);
    if (!userId) {
      res.status(401).send('로그인을 해주세요!');
      return;
    }
    req.body.userId = userId;
    if (!req.body.title) {
      logger.error('Empty title!');
      return res.redirect('/page/error');
    }
    logger.info('[postTimeline] req.body:', req.body);
    async.waterfall([
        function(callback) {
          Timeline.insertTimeline(req.body, callback);
        },
        function(result, callback) {
          req.body.timeline_id = result;
          Timeline.insertTimelineItems(req.body, function(err) {
            callback(err, result);
          });
        }
      ], function (err, result) {
        if (err) {
          logger.error(err);
          return res.redirect('/page/error');
        }
        res.send({
          id: result,
          userName: Session.getSessionUserName(req),
          viewCount: 0,
          createdAt: moment().format("YYYY년 M월 D일")
        });
      });
  },
  putTimeline: function putTimeline(req, res) {
    let userId = Session.getSessionUserId(req);
    if (!userId) {
      res.status(401).send('로그인을 해주세요!');
      return;
    }
    let timelineId = req.body.id;
    req.body.userId = userId;

    async.waterfall([
      function(callback) {
        Timeline.updateTimeline(req.body, callback);
      },
      function(result, callback) {
        Timeline.updateTimelineItems(req.body, function(err) {
          callback(err, result);
        });
      }
    ], function (err, result) {
      if (err) {
        logger.error(err);
        return res.redirect('/page/error');
      }
      logger.debug(result);
      res.send({
        id: timelineId,
        userName: Session.getSessionUserName(req),
        viewCount: 0,
        createdAt: moment().format("YYYY년 M월 D일")
      });
    });
  },
  postTimelineItem: function postTimelineItem(req, res) {
    let userId = Session.getSessionUserId(req);
    if (!userId) {
      res.status(401).send('로그인을 해주세요!');
      return;
    }
    req.body.userId = userId;
    Timeline.insertTimelineItem(req.body, function(err, result) {
      if (err) {
        logger.error(err);
        return res.redirect('/page/error');
      }
      res.send({ id: result });
    });
  },
  putTimelineItem: function putTimelineItem(req, res) {
    let userId = Session.getSessionUserId(req);
    if (!userId) {
      res.status(401).send('로그인을 해주세요!');
      return;
    }
    req.body.userId = userId;
    Timeline.updateTimelineItem(req.body, function(err) {
      if (err) {
        logger.error(err);
        return res.redirect('/page/error');
      }
      res.send({ id: req.body.id });
    });
  },
  putTimelineOrders: function putTimelineOrders(req, res) {
    let userId = Session.getSessionUserId(req);
    if (!userId) {
      res.status(401).send('로그인을 해주세요!');
      return;
    }
    req.body.userId = userId;
    Timeline.changeTimelineOrders(req.body, function(err) {
      if (err) {
        logger.error(err);
        return res.redirect('/page/error');
      }
      res.send({});
    });
  },
  deleteTimeline: function deleteTimeline(req, res) {
    let userId = Session.getSessionUserId(req);
    if (!userId) {
      res.status(401).send('로그인을 해주세요!');
      return;
    }
    let params = {
      id: req.params.id,
      userId: userId
    };
    Timeline.deleteTimelineById(params, function(err) {
      if (err) {
        logger.error(err);
        return res.redirect('/page/error');
      }
      res.send({});
    });
  }
};

module.exports = TimelineController;
