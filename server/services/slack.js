'use strict';

const config = require('../config/index');
const logger = require('log4js').getLogger('service/slack');
const request = require('request');

let SlackService = {
  sendToPreUser: function getKospiStockList(data, cb) {
    const url = config.slack.preUser;
    logger.debug('data:', data);
    logger.debug('url:', url);
    request({
      url: url,
      method: 'POST',
      json: { text: '[사전등록]' + data.email + ' / ' + data.referrer }
    }, function (error, response, body) {
      if (cb) {
        logger.debug(error);
        cb(error);
      }
    });
  }
};

module.exports = SlackService;

