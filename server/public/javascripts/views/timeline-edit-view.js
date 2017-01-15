//timeline-edit-view.js
define([
], function (
) {
  'use strict';

  function TimelineEditView(template) {
    this.template = template;

    this.$coverContainer = $('#cover_container');
    this.$coverImg = $('#cover_img');
    this.a = 10;
  }

  TimelineEditView.prototype.render = function(viewCmd, params) {
    var self = this;
    var viewCommands = {
      draw: function () {
        self.$coverContainer.html(self.template.draw(params));

      }
    };

    viewCommands[viewCmd]();
  };

  TimelineEditView.prototype.redraw = function(model) {
    var self = this;
    self.$coverImg = $('#cover_img');

    if (model.coverImg) {
      self.$coverImg.attr('src', model.coverImg);
      self.$coverImg.show();
    }
  };

  TimelineEditView.prototype.bind = function(event, handler) {
    var self = this;
    if (event === 'changeCover') {
      $('#cover_change_btn').fileupload({
        dataType: 'json',
        done: function (e, data) {
          handler(data.result);
        }
      });
    }
  };

  return TimelineEditView;
});