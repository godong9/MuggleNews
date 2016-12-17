'use strict';

const express = require('express');
const router = express.Router();
const PreviewController = require('../controllers/previews');

/**
 * @api {post} /previews Post Preview
 * @apiVersion 1.0.0
 * @apiName PostPreview
 * @apiGroup Preview
 *
 * @apiExample {url} Example usage:
 *    http://localhost:9000/previews
 *
 * @apiParam {String} previewUrl 미리보기 저장할 URL
 *
 * @apiSuccess {Object} data data
 */
router.post('/', PreviewController.postPreview);


module.exports = router;
