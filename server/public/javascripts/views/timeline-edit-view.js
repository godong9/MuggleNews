//timeline-edit-view.js
define([
], function (
) {
  'use strict';

  function TimelineEditView(coverTemplate, itemTemplate) {
    this.coverTemplate = coverTemplate;
    this.itemTemplate = itemTemplate;
  }

  TimelineEditView.prototype.render = function(viewCmd, params) {
    let self = this;
    self.$coverContainer = $('#cover_container');
    self.$newsContainer = $('#news_container');
    self.$coverImg = $('#cover_img');
    self.$edit_deam = $('#edit_deam');

    let viewCommands = {
      draw: function () {
        self.$coverContainer.html(self.coverTemplate.draw(params));
        if (params.isNew) {
          self.$edit_deam.show();
        }
        if (params.coverImg) {
          self.$coverImg = $('#cover_img');
          self.$coverImg.show();
        }

        self.$newsContainer.html(self.itemTemplate.draw(params));
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