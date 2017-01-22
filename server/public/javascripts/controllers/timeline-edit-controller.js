//timeline-edit-controller
define([
  '../libs/underscore/underscore'
], function (
  _
) {
  'use strict';

  function TimelineEditController(model, view) {
    let self = this;
    self.model = model;
    self.view = view;

    self.view.render('draw', self.model);
    self.bindHandlers();
  }

  TimelineEditController.prototype.bindHandlers = function() {
    let self = this;
    self.view.bind('changeCover', function() {});

    self.view.bind('addItem', function(data) {
      self.model.addItem(data);
    });
  };

  return TimelineEditController;
});