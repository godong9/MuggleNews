'use strict';

const request = require('request');
const Iconv  = require('iconv').Iconv;
const cheerio = require('cheerio');
const URL = require('url');

let CrawlerService = {
  getPreviewData: function getData(url, cb) {
    let self = this;
    let options = {
      headers: {
        "user-agent": "facebookexternalhit/1.1;mugglenews-scrap/1.0;"
      },
      encoding: null
    };
    request.get(url, options, function (error, response, body) {
      let contentType = response.headers['content-type'] || "";
      let charSet = self.getCharset(contentType);
      body = self.convert({charSet:charSet,content:body});
      cb(null, self.getPreviewDataFromHtml(url, body));
    });
  },
  getCharset: function getCharset(metaTag) {
    if (!metaTag) {
      return "utf-8";
    }
    let items = metaTag.split(';');
    for(let i=0; i< items.length ; i++) {
      let item = items[i];
      if(item.indexOf('charset') > -1) {
        let encoding = item.split('=')[1] || 'utf-8';
        if(encoding && encoding.toUpperCase().indexOf('MS949') > -1) {
          encoding = 'cp949';
        }
        if(encoding && encoding.toUpperCase().indexOf('KS_C_5601-1987') > -1) {
          encoding = 'cp949';
        }
        if(encoding && encoding.toUpperCase().indexOf('SHIFT_JIS') > -1) {
          encoding = 'cp932';
        }
        return encoding.toLowerCase();
      }
    }
    return 'utf-8';
  },
  convert: function convert(params) {
    let charSet = params.charSet;
    let content = params.content;
    if(charSet.toLowerCase() !== 'utf-8') {
      try {
        let iconv = new Iconv(charSet, 'UTF-8');
        content = iconv.convert(content);
      }catch (e) {
        // ignore error
        this.logger.warn('Convert Error:', e);
      }
    }
    return content;
  },
  getPreviewDataFromHtml: function getPreviewDataFromHtml(url, html) {
    if(!url || !html) {
      return null;
    }
    let $ = cheerio.load(html);
    let contentTypeMetaTag = $('meta[http-equiv="Content-Type"]').attr('content') || $('meta[http-equiv="CONTENT-TYPE"]' ).attr('content') || $('meta[http-equiv="content-type"]').attr('content');
    let charSet = this.getCharset(contentTypeMetaTag);
    $ = cheerio.load(this.convert({charSet:charSet,content:html}));

    let title = $('meta[property="og:title"]').attr('content') || $('title').text();
    let image = $('meta[property="og:image"]').attr('content');
    if(!image) {
      let img = $('body img')[0];
      if(img) {
        image = $(img).attr('src');
      }
    }

    if(image && image.indexOf('http')  === -1) {
      image = URL.resolve(url,image);
    }

    let description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content');
    if (!description && !title) {
      title = URL.parse(url).host;
    }
    return {
      title: title,
      content: description || "",
      preview_url: url,
      preview_img: image || ""
    };
  }
};

module.exports = CrawlerService;
