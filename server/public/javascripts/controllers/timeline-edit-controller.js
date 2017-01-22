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

    self.view.bind('cancelCover', function() {
      if (self.model.isNew) {
        //TODO: 마이 페이지로 이동
        alert("My 페이지로 이동");
      } else {
        self.view.render('draw', self.model);
      }
    });

    self.view.bind('saveCover', function(data) {
      self.model.create(data, function(err, timeline) {
        if (err) {
          return;
        }
        if (timeline && timeline.id) {
          self.model = _.extend(self.model, data, timeline);
          self.model.isView = true;

          self.view.render('draw', self.model);
        }
      });
    });

    self.view.bind('addItem', function(data) {

    });
  };

  return TimelineEditController;
});