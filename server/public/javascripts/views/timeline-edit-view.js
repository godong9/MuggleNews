//timeline-edit-view.js
define([
  '../utils/http-util'
], function (
  HttpUtil
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

    let viewCommands = {
      draw: function () {
        self.$coverContainer.html(self.coverTemplate.draw(params));
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
    self.$newsContainer = $('#news_container');
    self.$coverImg = $('#cover_img');
    self.$titleInput = $('#title_input');
    self.$subtitleInput = $('#subtitle_input');

    $('.datepicker').datepicker({
      dateFormat: "yy-mm-dd"
    });

    if (event === 'changeCover') {
      $('#cover_change_btn').fileupload({
        dataType: 'json',
        done: function (e, data) {
          self.render('redrawCover', {coverImg: data.result});
          handler(data.result);
        }
      });
    }

    if (event === 'addItem') {
      $('#add_item_btn').unbind('click').click(function() {
        let $timelineItem = $('#new_timeline_item');
        let timelineItem = {
          title: $timelineItem.find('.item-title-input').val(),
          content: $timelineItem.find('.item-content-input').val(),
          itemOrder: $timelineItem.data('order'),
          previewId: $timelineItem.find('.content-container').data('preview'),
          itemDate: $timelineItem.find('.datepicker').val(),
          itemTime: $timelineItem.find('.item-time').val()
        };
        console.log("addedItem: ", timelineItem);
        if (!timelineItem.title) {
          alert('제목을 입력해주세요!');
          return;
        }
        $timelineItem.remove();
        self.$newsContainer.append(self.itemTemplate.drawItem(timelineItem));
        handler(timelineItem)
      });
    }

    if (event === 'addPreview') {
      $('.item-preview-input').unbind('keydown').keydown(function(event) {
        let previewInput = this;

        if (event.which === 13) {
          let url = $(previewInput).val();
          HttpUtil.postData('/previews', {previewUrl: url}, function(err, data) {
            let previewId = data && data.id;
            let $parentItem = $(previewInput).parents('.content-container');
            $parentItem.data('preview', previewId);

            $parentItem.find('.preview-input-container').remove();
            $parentItem.append(self.itemTemplate.drawPreview(data));
            handler();
          });
        }
      });
    }

    if (event === 'delPreview') {
      $('.preview-del-btn').unbind('click').click(function() {
        let previewView = this;
        let $parentItem = $(previewView).parents('.content-container');

        $parentItem.find('.preview-view-container').remove();
        $parentItem.append(self.itemTemplate.drawPreviewInput());
        return false;
      });
    }

    if (event === 'clickMore') {
      $('.item-more-btn').unbind('click').click(function() {
        let $parentItem = $(this).parents('.btn-box');
        $parentItem.find('.more-menu').toggle();
      });

      $('.del-news').unbind('click').click(function() {
        let $parentItem = $(this).parents('.timeline-item');
        handler('del', $parentItem.data('id'));
      });

      $('.up-news').unbind('click').click(function() {
        let $parentItem = $(this).parents('.timeline-item');
        handler('up', $parentItem.data('id'));
      });

      $('.down-news').unbind('click').click(function() {
        let $parentItem = $(this).parents('.timeline-item');
        handler('down', $parentItem.data('id'));
      });
    }

    if (event === 'saveTimeline') {
      $('#timeline_save_btn').unbind('click').click(function() {
        handler($('#title_input').val(), $('#subtitle_input').val());
      });
    }

    if (event === 'cancelTimeline') {
      $('#timeline_cancel_btn').unbind('click').click(function() {
        handler();
      });
    }
  };

  return TimelineEditView;
});