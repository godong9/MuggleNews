const config = require('../config/index');
const log4js = require('log4js');
const logger = log4js.getLogger('service/slack');
const request = require('request');

let SlackService = {
  sendToPreUser: function getKospiStockList(data, cb) {
    const url = config.slack.preUser;
    logger.debug('data:', data);
    logger.debug('url:', url);
    request({
      url: url,
      method: 'POST',
      json: { text: data.email }
    }, function (error, response, body) {
      if (cb) {
        logger.debug(error);
        cb(error);
      }
    });
  }
};

module.exports = SlackService;

