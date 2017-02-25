'use strict';

const config = require('../config/index');
const logger = require('log4js').getLogger('service/slack');
const request = require('request');

let SlackService = {
  sendToPreUser: function sendToPreUser(data, cb) {
    const url = config.slack.preUser;
    logger.debug('data:', data);
    logger.debug('url:', url);
    request({
      url: url,
      method: 'POST',
      json: { text: '[회원가입]' + data.email + ' / ' + data.userAgent }
    }, function (error) {
      if (cb) {
        logger.error(error);
        cb(error);
      }
    });
  }
};

module.exports = SlackService;

