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
          return alert(err);
        }
        if (timeline && timeline.id) {
          self.model = data;
          self.model.id = timeline.id;
          self.model.isView = true;
          console.log('timeline: ', self.model);

          self.view.render('draw', self.model);
        }
      });
    });
  };

  return TimelineEditController;
});