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

      self.bindHandlers();
    });

    self.view.bind('addPreview', function(data) {});

    self.view.bind('delPreview', function(data) {});

    self.view.bind('clickMore', function(kind, id) {
      self.model.changeItem(kind, id);

      console.log("model: ", self.model);
      self.view.render('draw', self.model);
      self.bindHandlers();
    });
  };

  return TimelineEditController;
});