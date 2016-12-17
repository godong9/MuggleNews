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
router.get('/edit', TimelineController.getNewTimelinePage);

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
 * @apiParam {String} coverImg 커버이미지
 *
 * @apiSuccess {Object} data data
 * @apiSuccess {String} data.id 생성된 timeline id
 */
router.post('/', TimelineController.postTimeline);

/**
 * @api {post} /timelines/item Post Timeline Item
 * @apiVersion 1.0.0
 * @apiName PostTimelineItem
 * @apiGroup Timeline
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/timelines/item
 *
 * @apiParam {Object} item 뉴스 아이템
 * @apiParam {String} item.title 제목
 * @apiParam {Number} item.timelineId 타임라인 ID
 * @apiParam {Number} item.order 순서
 * @apiParam {String} [item.content] 내용
 * @apiParam {Number} [item.previewId] 프리뷰 ID
 * @apiParam {Date} [item.itemDate] 날짜/시간
 *
 * @apiSuccess {Object} data data
 */
router.post('/item', TimelineController.postTimelineItem);

/**
 * @api {put} /timelines/item Put Timeline Item
 * @apiVersion 1.0.0
 * @apiName PutTimelineItem
 * @apiGroup Timeline
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/timelines/item
 *
 * @apiParam {Object} item 뉴스 아이템
 * @apiParam {Number} item.id 아이템 id
 * @apiParam {String} item.title 제목
 * @apiParam {Number} item.timelineId 타임라인 ID
 * @apiParam {String} item.content 내용
 * @apiParam {Number} item.previewId 프리뷰 ID
 * @apiParam {Date} item.itemDate 날짜/시간
 *
 * @apiSuccess {Object} data data
 */
router.put('/item', TimelineController.putTimelineItem);

/**
 * @api {put} /timelines/orders Put Timeline Orders
 * @apiVersion 1.0.0
 * @apiName PutTimelineOrders
 * @apiGroup Timeline
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/timelines/orders
 *
 * @apiParam {Number} item.beforeOrder 변경전 order
 * @apiParam {Number} item.nextOrder 변경후 order
 *
 * @apiSuccess {Object} data data
 */
router.put('/orders', TimelineController.putTimelineOrders);


module.exports = router;