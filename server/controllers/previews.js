'use strict';

const logger = require('log4js').getLogger('controllers/timelines');
const Preview = require('../models/previews');
const Crawler = require('../services/crawler');

const PreviewController = {
  postPreview: function login(req, res) {
    let previewUrl = req.body.preview_url;
    if (!previewUrl) {
      res.status(400).send('잘못된 URL을 입력하였습니다.');
      return;
    }
    if (!previewUrl.startsWith('http') && !previewUrl.startsWith('https')) {
      previewUrl = 'http://' + previewUrl;
    }
    Crawler.getPreviewData(previewUrl, function(err, body) {
      logger.debug(body);
      if (!body) {
        return res.status(500).send('잘못된 URL입니다!');
      }
      Preview.insertPreview(body, function(err, result) {
        if (err) {
          logger.error(err);
          return res.status(500).send('서버 에러 발생');
        }
        res.send(result);
      });
    });
  }
};

module.exports = PreviewController;
