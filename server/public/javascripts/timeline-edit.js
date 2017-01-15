//timeline.js
define([
  './controllers/my-menu-controller',
  './models/timeline',
  './templates/cover-template',
  './views/timeline-edit-view',
  './controllers/timeline-edit-controller'
], function (
  MyMenuController,
  Timeline,
  CoverTemplate,
  TimelineEditView,
  TimelineEditController
) {
  'use strict';

  function TimelineEditPage() {
    this.model = new Timeline(g_timeline);
    this.template = new CoverTemplate();
    this.view = new TimelineEditView(this.template);
    this.controller = new TimelineEditController(this.model, this.view);
  }

  return new TimelineEditPage();
});