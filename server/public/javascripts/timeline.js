//timeline.js
define([
  './models/timeline',
  './views/timeline-view',
  './controllers/timeline-controller'
], function (
  Timeline,
  TimelineView,
  TimelineController
) {
  'use strict';

  function TimelinePage() {
    this.model = new Timeline();
    this.view = new TimelineView();
    this.controller = new TimelineController(this.model, this.view);
  }

  return new TimelinePage();
});