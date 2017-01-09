//my-menu-controller.js
define([
  '../libs/jquery/dist/jquery'
], function (
  $
) {
  'use strict';

  function MyMenuController() {
    this.init();
  }

  MyMenuController.prototype.init = function() {
    this.bindHandlers();
  };

  MyMenuController.prototype.bindHandlers = function() {
    $('#my_menu_open_btn').click(function() {
      $('#my_menu_container').show();
    });

    $('#my_menu_close_btn').click(function() {
      $('#my_menu_container').hide();
    });
  };

  return new MyMenuController();
});