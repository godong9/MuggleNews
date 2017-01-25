'use strict';

const _ = require('underscore');
const async = require('async');
const moment = require('moment');
const log4js = require('log4js');
const logger = log4js.getLogger('controllers/timelines');
const Timeline = require('../models/timelines');
const View = require('../services/view');
const Session = require('../services/session');

const TimelineController = {
  getTimelinePage: function login(req, res) {
    logger.debug("id: ", req.params.id);

    async.waterfall([
      function(callback) {
        Timeline.increaseTimelineViewCount(req.params.id, callback);
      },
      function(callback) {
        Timeline.getItemsByTimelineId(req.params.id, callback);
      }
    ], function (err, items) {
      let i;
      let data = {};
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
        items[i].item_date_text = moment(items[i].item_date).format("YYYY년 M월 D일 HH:mm:ss");
      }
      data.items = items;
      data.commentPage = 'timelines#' + items[0].timeline_id;
      data.lastUpdatedAt = moment(items[0].timeline_updated_at).format("YYYY년 M월 D일");
      res.render('timeline', data);
    });
  },
  getTimelineEditPage: function getNewTimelinePage(req, res) {
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
        items[i].item_date_text = moment(items[i].item_date).format("YYYY년 M월 D일 HH:mm:ss");
      }
      data.items = items;
      data.timeline = items[0];
      data.lastUpdatedAt = moment(items[0].timeline_updated_at).format("YYYY년 M월 D일");
      res.render('timeline-edit', data);
    });

  },
  postTimeline: function postTimeline(req, res) {
    // let userId = Session.getSessionUserId(req);
    // if (!userId) {
    //   res.status(401).send('로그인을 해주세요!');
    //   return;
    // }
    //TODO: 테스트용
    let userId = 1;
    req.body.userId = userId;

    async.waterfall([
        function(callback) {
          Timeline.insertTimeline(req.body, callback);
        },
        function(result, callback) {
          req.body.timelineId = result;
          logger.info("req.body:", req.body);
          Timeline.insertTimelineItems(req.body, function(err) {
            callback(err, result);
          });
        }
      ], function (err, result) {
        if (err) {
          logger.error(err);
          res.status(500).send('서버 에러 발생');
          return;
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
    // let userId = Session.getSessionUserId(req);
    // if (!userId) {
    //   res.status(401).send('로그인을 해주세요!');
    //   return;
    // }
    //TODO: 테스트용
    let userId = 1;
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
        res.status(500).send('서버 에러 발생');
        return;
      }
      res.send({
        id: result,
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
        res.status(500).send('서버 에러 발생');
        return;
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
        res.status(500).send('서버 에러 발생');
        return;
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
        res.status(500).send('서버 에러 발생');
        return;
      }
      res.send({});
    });
  }
};

module.exports = TimelineController;
