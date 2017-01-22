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

    if (event === 'changeCover') {
      $('#cover_change_btn').fileupload({
        dataType: 'json',
        done: function (e, data) {
          self.render('redrawCover', {coverImg: data.result});
          handler();
        }
      });
    }

    if (event === 'addItem') {
      $('#add_item_btn').unbind('click').click(function() {
        let $timelineItem = $('#new_timeline_item');
        let timelineItem = {
          order: $timelineItem.data('order'),
          title: $timelineItem.find('.item-title-input').val(),
          content: $timelineItem.find('.item-content-input').val(),
          preview_id: $timelineItem.find('.content-container').data('preview')
        };
        // TODO: 프리뷰 데이터도 넣어야함!
        console.log(timelineItem);
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

            $parentItem.find('.link-write').remove();
            $parentItem.append(self.itemTemplate.drawPreview(data));

            handler(data);
          });
        }
      });
    }

    if (event === 'delPreview') {

    }
  };

  return TimelineEditView;
});