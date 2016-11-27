const log4js = require('log4js');
const logger = log4js.getLogger('controllers/users');
const PreUser = require('../models/pre_users');
const Slack = require('../services/slack');

const UserController = {
  insertPreUser: function login(req, res) {
    let params = {
      email: req.body.email,
      referrer: req.headers.referer,
      userAgent: req.headers['user-agent']
    };
    logger.debug(params);
    Slack.sendToPreUser(params);
    PreUser.insertPreUser(params, function(err) {
      if (err) {
        logger.error(err);
      }
      res.send({});
    });
  }
};

module.exports = UserController;
