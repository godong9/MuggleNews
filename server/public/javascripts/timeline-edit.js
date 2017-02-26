// timeline.js
define([
  './controllers/my-menu-controller',
  './models/timeline',
  './templates/cover-template',
  './templates/item-template',
  './views/timeline-edit-view',
  './controllers/timeline-edit-controller'
], function (
  MyMenuController,
  Timeline,
  CoverTemplate,
  ItemTemplate,
  TimelineEditView,
  TimelineEditController
) {
  'use strict';

  function TimelineEditPage() {
    this.model = new Timeline(g_timeline);
    this.coverTemplate = new CoverTemplate();
    this.itemTemplate = new ItemTemplate();
    this.view = new TimelineEditView(this.coverTemplate, this.itemTemplate);
    this.controller = new TimelineEditController(this.model, this.view);
  }

  return new TimelineEditPage();
});