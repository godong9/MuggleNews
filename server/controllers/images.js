'use strict';

const path = require('path');
const fs = require('fs');
const Busboy = require('busboy');
const logger = require('log4js').getLogger('controllers/images');

const FILE_UPLOAD_SIZE_LIMIT = 5 * 1024 * 1024; // 5MB 사이즈 제한

const ImageController = {
  getImage: function getImage(req, res) {
    let imageName = req.params.name;
    let imagePath = path.join(__dirname, '../upload', imageName);

    res.sendFile(imagePath);
  },
  checkFileSize: function checkFileSize(req, res, next) {
    if (parseInt(req.headers['content-length']) > FILE_UPLOAD_SIZE_LIMIT) {
      res.status(400).send('File size limit error!');
    } else {
      next();
    }
  },
  upload: function upload(req, res) {
    let busboy = new Busboy({ headers: req.headers });
    let savedFileName, saveTo;

    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
      savedFileName = new Date().getTime() + "_" + filename;
      logger.debug('savedFileName:', savedFileName);
      saveTo = path.join(__dirname, '../upload', savedFileName);
      logger.debug('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
      logger.debug("SAVE PATH:", saveTo);
      file.pipe(fs.createWriteStream(saveTo));
    });
    busboy.on('field', function (fieldname, val, fieldnameTruncated, valTruncated) {
      logger.debug('Field:' + fieldname);
    });
    busboy.on('finish', function () {
      logger.debug('End:', savedFileName);
      res.set('Content-type', 'text/html; charset=utf-8');
      res.writeHead(200, { 'Connection': 'close' });
      res.write(JSON.stringify('/images/' + savedFileName));
      res.end();
    });

    return req.pipe(busboy);
  }
};

module.exports = ImageController;
