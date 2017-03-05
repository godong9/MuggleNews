// index-controller.js
define([
  '../libs/jquery/dist/jquery',
  '../utils/http-util'
], function (
  $,
  HttpUtil
) {
  'use strict';

  const NEWS_PER_PAGE = 9;

  function IndexController() {
    let self = this;
    self.orderby = 'view';
    self.offset = 0;
    self.isEnd = false;
    self.$mainNewsContainer = $('#main_news_container');
    self.init();
  }

  IndexController.prototype.init = function() {
    this.bindHandlers();
  };

  IndexController.prototype.bindHandlers = function() {
    let self = this;
    $('#main_order_by_btn > li').unbind('click').click(function() {
      $('#main_order_by_btn').children().removeClass('active');
      $(this).addClass('active');
      self.orderby = $(this).data('orderby');
      self.offset = 0;
      let params = {
        orderby: self.orderby,
        offset: self.offset
      };

      self.$mainNewsContainer.empty();
      self.getNewsList(self.getParams());
    });

    $('#main_more_btn').unbind('click').click(function() {
      if (self.isEnd) {
        return;
      }
      self.offset += NEWS_PER_PAGE;
      self.getNewsList(self.getParams());
    });
  };

  IndexController.prototype.getParams = function() {
    let self = this;
    let params = {
      orderby: self.orderby,
      offset: self.offset
    };
    return params;
  };

  IndexController.prototype.getNewsList = function(params) {
    let self = this;
    HttpUtil.getData('/timelines/html/list', params, function(err, data) {
      if (!data) {
        self.isEnd = true;
        return;
      }
      self.$mainNewsContainer.append(data);
    });
  };

  return IndexController;
});