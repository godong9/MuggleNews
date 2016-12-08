'use strict';

const express = require('express');
const router = express.Router();
const TimelineController = require('../controllers/timelines');

/**
 * @api {get} /timelines/:id Get Timeline Page
 * @apiVersion 1.0.0
 * @apiName GetTimelinePage
 * @apiGroup Timeline
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/1
 *
 * @apiParam {String} id Timeline ID
 */
router.get('/:id', TimelineController.getTimelinePage);

/**
 * @api {get} /timelines/new Get New Timeline Page
 * @apiVersion 1.0.0
 * @apiName GetNewTimelinePage
 * @apiGroup Timeline
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/timelines/new
 */
router.get('/new', TimelineController.getNewTimelinePage);

/**
 * @api {post} /timelines Post Timeline
 * @apiVersion 1.0.0
 * @apiName PostTimeline
 * @apiGroup Timeline
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/timelines
 *
 * @apiParam {String} title 제목
 * @apiParam {String} subtitle 부제목
 *
 * @apiSuccess {Object} data data
 */
router.post('/', TimelineController.postTimeline);

/**
 * @api {post} /timelines/items Post Timeline Items
 * @apiVersion 1.0.0
 * @apiName PostTimelineItems
 * @apiGroup Timeline
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/timelines/items
 *
 * @apiParam {Object[]} items 뉴스 아이템 리스트
 *
 * @apiSuccess {Object} data data
 */
router.post('/items', TimelineController.postTimelineItems);


module.exports = router;