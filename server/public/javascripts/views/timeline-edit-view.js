//timeline-edit-view.js
define([
], function (
) {
  'use strict';

  function TimelineEditView(template) {
    this.template = template;
  }

  TimelineEditView.prototype.render = function(viewCmd, params) {
    let self = this;
    self.$coverContainer = $('#cover_container');
    self.$coverImg = $('#cover_img');

    let viewCommands = {
      draw: function () {
        self.$coverContainer.html(self.template.draw(params));
        if (params.coverImg) {
          self.$coverImg = $('#cover_img');
          self.$coverImg.show();
        }
      },
      redrawCover: function () {
        if (params.coverImg) {
          self.$coverImg.attr('src', params.coverImg);
          self.$coverImg.show();
        }
      }
    };

    viewCommands[viewCmd]();
  };

  TimelineEditView.prototype.bind = function(event, handler) {
    let self = this;
    self.$coverContainer = $('#cover_container');
    self.$coverImg = $('#cover_img');
    self.$titleInput = $('#title_input');
    self.$subtitleInput = $('#subtitle_input');

    if (event === 'changeCover') {
      $('#cover_change_btn').fileupload({
        dataType: 'json',
        done: function (e, data) {
          self.render('redrawCover', {coverImg: data.result});
          handler();
        }
      });
    }

    if (event === 'cancelCover') {
      $('#cancel_cover_btn').unbind('click').click(function() {
        handler();
      });
    }

    if (event === 'saveCover') {
      $('#save_cover_btn').unbind('click').click(function() {
        handler({
          coverImg: self.$coverImg.attr('src'),
          title: self.$titleInput.val(),
          subtitle: self.$subtitleInput.val()
        });
      });
    }
  };

  return TimelineEditView;
});