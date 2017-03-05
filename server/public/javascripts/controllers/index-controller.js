// index-controller.js
define([
  '../libs/jquery/dist/jquery',
  '../utils/http-util'
], function (
  $,
  HttpUtil
) {
  'use strict';

  function IndexController() {
    let self = this;
    self.init();
  }

  IndexController.prototype.init = function() {
    this.bindHandlers();
  };

  IndexController.prototype.bindHandlers = function() {

    $('#main_order_by_btn > li').unbind('click').click(function() {
      console.log($(this).data('orderby'));
    });
  };



  return IndexController;
});