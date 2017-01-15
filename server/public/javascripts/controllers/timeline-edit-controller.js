//timeline-edit-controller
define([
], function (
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
    self.view.bind('changeCover', function(data) {
      self.model.coverImg = data;
      self.view.redraw(self.model);
    });

  };

  return TimelineEditController;
});