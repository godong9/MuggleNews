//main.js
define([
  './libs/jquery/dist/jquery',
  './utils/http-util'
], function (
  $,
  HttpUtil
) {
  'use strict';

  function MainPage() {
    this.init();
  }

  MainPage.prototype.init = function() {
    this.bindHandlers();
  };

  MainPage.prototype.bindHandlers = function() {
    $('#send_pre_user').click(function() {
      let params = {
        email: $('#email').val()
      };
      HttpUtil.postData('/users/pre/register', params, function(data) {
        console.log("Success");
        consolt.log(data);
      });
    });
  };

  return new MainPage();
});