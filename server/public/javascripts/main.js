// main.js
define([
  './controllers/my-menu-controller',
  './controllers/index-controller'
], function (
  MyMenuController,
  IndexController
) {
  'use strict';

  function MainPage() {
    this.controller = new IndexController();
  }

  return new MainPage();
});