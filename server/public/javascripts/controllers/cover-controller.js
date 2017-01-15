//cover-controller.js
define([
], function (
) {
  'use strict';

  function CoverController() {
    this.init();
  }

  CoverController.prototype.init = function() {
    this.bindHandlers();
  };

  CoverController.prototype.bindHandlers = function() {
    $('#cover_change_btn').fileupload({
      dataType: 'json',
      done: function (e, data) {
        console.log(data);
      }
    });

  };

  return new CoverController();
});