// timeline-edit-view.js
define([
  '../libs/underscore/underscore',
  '../utils/http-util'
], function (
  _,
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
        if (params.cover_img) {
          self.$coverImg = $('#cover_img');
          self.$coverImg.show();
        }
        self.$newsContainer.html(self.itemTemplate.draw(params));
      },
      redrawCover: function () {
        if (params.cover_img) {
          self.$coverImg.attr('src', params.cover_img);
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
          if (e) {
            console.log(e);
          }
          self.render('redrawCover', {cover_img: data.result});
          handler(data.result);
        }
      });
    }

    if (event === 'addItem') {
      $('#add_item_btn').unbind('click').click(function() {
        let $timelineItem = $('#new_timeline_item');
        let timelineItem = {
          id: 'new' + $timelineItem.data('order'),
          title: $timelineItem.find('.item-title-input').val(),
          content: $timelineItem.find('.item-content-input').val(),
          item_order: $timelineItem.data('order'),
          preview_id: $timelineItem.find('.content-container').data('preview'),
          preview_url: $timelineItem.find('.preview-url').text(),
          preview_title: $timelineItem.find('.preview-title').text(),
          preview_content: $timelineItem.find('.preview-content').text(),
          preview_img: $timelineItem.find('.preview-img').attr('src'),
          item_date: $timelineItem.find('.datepicker').val(),
          item_time: $timelineItem.find('.item-time').val()
        };

        // console.log("addedItem: ", timelineItem);
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
          HttpUtil.postData('/previews', {preview_url: url}, function(err, data) {
            if (err) {
              return;
            }
            let preview_id = data && data.id;
            let $parentItem = $(previewInput).parents('.content-container');
            $parentItem.data('preview', preview_id);

            $parentItem.find('.preview-input-container').remove();
            $parentItem.append(self.itemTemplate.drawPreview(data));
            handler();
          });
        }
      });

      $('.input-link-checking').unbind('click').click(function() {
        let previewInput = $(this).parent().find('.item-preview-input');

        let url = $(previewInput).val();
        HttpUtil.postData('/previews', {preview_url: url}, function(err, data) {
          if (err) {
            return;
          }
          let preview_id = data && data.id;
          let $parentItem = $(previewInput).parents('.content-container');
          $parentItem.data('preview', preview_id);

          $parentItem.find('.preview-input-container').remove();
          $parentItem.append(self.itemTemplate.drawPreview(data));
          handler();
        });
      });
    }

    if (event === 'delPreview') {
      $('.preview-del-btn').unbind('click').click(function() {
        let previewView = this;
        let $parentItem = $(previewView).parents('.content-container');
        $parentItem.data('preview', null);
        $parentItem.find('.preview-view-container').remove();
        $parentItem.append(self.itemTemplate.drawPreviewInput());
        handler();
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
        let timelineItem = {
          title: $('#title_input').val(),
          subtitle: $('#subtitle_input').val(),
          items: self.getTimelineItems()
        };
        if (!timelineItem.title) {
          return alert("대제목을 입력해주세요!");
        }
        if (timelineItem.items.length === 0) {
          return alert("타임라인을 추가해주세요!");
        }
        handler(timelineItem);
      });
    }

    if (event === 'cancelTimeline') {
      $('#timeline_cancel_btn').unbind('click').click(function() {
        handler();
      });
    }
  };

  TimelineEditView.prototype.getTimelineItems = function() {
    let $items = $('#news_container > li[data-id!="empty"]');
    let items = _.map($items, function(item) {
      return {
        id: $(item).data('id'),
        item_order: $(item).data('order'),
        title: $(item).find('.item-title-input').val(),
        content: $(item).find('.item-content-input').val(),
        preview_id: $(item).find('.content-container').data('preview'),
        item_date: $(item).find('.item-date').val(),
        item_time: $(item).find('.item-time').val()
      }
    });
    return items;
  };

  return TimelineEditView;
});