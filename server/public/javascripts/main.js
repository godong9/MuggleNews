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
      HttpUtil.postData('/users/pre/register', params, function(err, data) {
        if (err) {
          console.log("Error");
          return;
        }
        alert("등록이 완료되었습니다.");
        console.log("Success");
      });
    });
  };

  return new MainPage();
});