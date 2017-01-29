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
    self.view.bind('changeCover', function(cover_img) {
      self.model.setCoverImg(cover_img);
    });

    self.view.bind('addItem', function(data) {
      self.model.addItem(data);
      self.bindHandlers();
    });

    self.view.bind('addPreview', function() {
      self.bindHandlers();
    });

    self.view.bind('delPreview', function(data) {});

    self.view.bind('clickMore', function(kind, id) {
      self.model.changeItem(kind, id);

      self.view.render('draw', self.model);
      self.bindHandlers();
    });

    self.view.bind('saveTimeline', function(title, subtitle) {
      self.model.setTitle(title);
      self.model.setSubtitle(subtitle);

      self.model.create(self.model, function(err, data) {
        console.log("savedData: ", data);
      });
    });

    self.view.bind('cancelTimeline', function() {

    });
  };

  return TimelineEditController;
});