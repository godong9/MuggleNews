//timeline.js
define([
  './models/timeline',
  './views/timeline-view',
  './controllers/timeline-controller',
  './controllers/my-menu-controller'
], function (
  Timeline,
  TimelineView,
  TimelineController,
  MyMenuController
) {
  'use strict';

  function TimelineEditPage() {
    this.model = new Timeline();
    this.view = new TimelineView();
    this.controller = new TimelineController(this.model, this.view);
  }

  return new TimelineEditPage();
});