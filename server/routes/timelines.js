'use strict';

const express = require('express');
const router = express.Router();
const TimelineController = require('../controllers/timelines');

/**
 * @api {get} /timelines/html/list Get Timeline Item List
 * @apiVersion 1.0.0
 * @apiName GetTimelineItemList
 * @apiGroup Timeline
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/timelines/html/list
 *
 * @apiParam {String} [orderby] 정렬기준(latest, view)
 * @apiParam {Number} [limit] 가져올 개수
 * @apiParam {Number} [offset] 오프셋
 */
router.get('/html/list', TimelineController.getTimelineHtmlList);

/**
 * @api {get} /timelines/:id Get Timeline Page
 * @apiVersion 1.0.0
 * @apiName GetTimelinePage
 * @apiGroup Timeline
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/timelines/1
 *
 * @apiParam {String} id Timeline ID
 */
router.get('/:id', TimelineController.getTimelinePage);

/**
 * @api {get} /timelines/edit/:id Get Timeline Edit Page
 * @apiVersion 1.0.0
 * @apiName GetTimelineEditPage
 * @apiGroup Timeline
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/timelines/edit/1
 */
router.get('/edit/:id', TimelineController.getTimelineEditPage);

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
 * @apiParam {Object[]} items 타임라인 아이템 리스트
 *
 * @apiSuccess {Object} data data
 * @apiSuccess {String} data.id 생성된 timeline id
 */
router.post('/', TimelineController.postTimeline);

/**
 * @api {put} /timelines Put Timeline
 * @apiVersion 1.0.0
 * @apiName putTimeline
 * @apiGroup Timeline
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/timelines
 *
 * @apiParam {Number} id timeline ID
 * @apiParam {String} title 제목
 * @apiParam {String} subtitle 부제목
 * @apiParam {String} coverImg 커버이미지
 * @apiParam {Object[]} items 타임라인 아이템 리스트
 *
 * @apiSuccess {Object} data data
 * @apiSuccess {String} data.id 수정된 timeline id
 */
router.put('/', TimelineController.putTimeline);

router.delete('/:id', TimelineController.deleteTimeline);

/**
 * @api {post} /timelines/item Post Timeline Item
 * @apiVersion 1.0.0
 * @apiName PostTimelineItem
 * @apiGroup Timeline
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/timelines/item
 *
 * @apiParam {String} title 제목
 * @apiParam {Number} timelineId 타임라인 ID
 * @apiParam {Number} order 순서
 * @apiParam {String} [content] 내용
 * @apiParam {Number} [previewId] 프리뷰 ID
 * @apiParam {Date} [itemDate] 날짜/시간
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
 * @apiParam {Number} id 아이템 id
 * @apiParam {String} title 제목
 * @apiParam {Number} timelineId 타임라인 ID
 * @apiParam {String} content 내용
 * @apiParam {Number} previewId 프리뷰 ID
 * @apiParam {Date} itemDate 날짜/시간
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
 * @apiParam {Number} beforeOrder 변경전 order
 * @apiParam {Number} nextOrder 변경후 order
 *
 * @apiSuccess {Object} data data
 */
router.put('/orders', TimelineController.putTimelineOrders);

module.exports = router;