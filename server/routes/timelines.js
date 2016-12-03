'use strict';

const express = require('express');
const router = express.Router();
const TimelineController = require('../controllers/timelines');

/**
 * @api {get} /timelines/:id Get Timeline Page
 * @apiName GetTimelinePage
 * @apiGroup Timeline
 *
 * @apiParam {String} id Timeline ID
 */
router.get('/:id', TimelineController.getTimelinePage);

module.exports = router;
