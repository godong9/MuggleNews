// cover-template.js
define([
  '../libs/underscore/underscore',
  '../libs/moment/moment'
], function (
  _,
  moment
) {
  'use strict';

  let htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#x27;',
    '`': '&#x60;'
  };

  let escapeHtmlChar = function (chr) {
    return htmlEscapes[chr];
  };

  let reUnescapedHtml = /[&<>"'`]/g;
  let reHasUnescapedHtml = new RegExp(reUnescapedHtml.source);

  let escape = function (string) {
    return (string && reHasUnescapedHtml.test(string))
      ? string.replace(reUnescapedHtml, escapeHtmlChar)
      : string;
  };

  function ItemTemplate() {
    this.template
      =	'<li class="timeline-item" data-id="{{id}}" data-order="{{order}}">'
      +   '<div class="section">'
      +     '<div class="number">'
      +       '<p class="list-count">{{listCount}}</p>'
      +       '<h2><input class="item-title-input" value="{{title}}" type="text" placeholder="타이틀을 입력하세요.(필수)"></h2>'
      +       '<div class="news-date">'
      +         '<div class="data-table">'
      +           '<input type="text" class="item-date datepicker" placeholder="날짜입력" value="{{itemDate}}">'
      +         '</div>'
      +         '<div class="time-table" style="display: none;">'
      +           '<input type="text" class="item-time" placeholder="시간입력" value="{{itemTime}}">'
      +         '</div>'
      +         '<div class="btn-box">'
      +           '<a class="item-more-btn more-vert"><img src="/images/icon-mynews@3x.png" alt=""></a>'
      +           '<div class="mynew-edit more-menu">'
      +             '<a class="del-news">삭제</a>'
      +             '<a class="up-news">위로</a>'
      +             '<a class="down-news">아래로</a>'
      +           '</div>'
      +         '</div><!-- e//btn-box-->'
      +       '</div><!-- e//news-data-->'
      +     '</div><!--number -->'
      +     '<div class="new-conts content-container" data-preview="{{previewId}}">'
      +       '<div class="txt-area-zone">'
      +         '<textarea class="item-content-input" placeholder="요약 설명을 입력하세요.">{{content}}</textarea>'
      +       '</div>'
      +       '{{preview_template}}'
      +     '</div><!--e//new-conts -->'
      +   '</div><!--e//section -->'
      +	'</li>';

    this.emptyTemplate
      =	'<li id="new_timeline_item" class="timeline-item" data-id="empty" data-order="{{order}}">'
      +   '<div class="section">'
      +     '<div class="number">'
      +       '<p class="list-count">{{listCount}}</p>'
      +       '<h2><input class="item-title-input" type="text" placeholder="타이틀을 입력하세요.(필수)"></h2>'
      +       '<div class="news-date">'
      +         '<div class="data-table">'
      +           '<input type="text" class="item-date datepicker" placeholder="날짜입력">'
      +         '</div>'
      +         '<div class="time-table" style="display: none;">'
      +           '<input type="text" class="item-time" placeholder="시간입력">'
      +         '</div>'
      +       '</div><!-- e//news-data-->'
      +     '</div><!--number -->'
      +     '<div class="new-conts content-container" data-preview="">'
      +       '<div class="txt-area-zone">'
      +         '<textarea class="item-content-input" placeholder="요약 설명을 입력하세요."></textarea>'
      +       '</div>'
      +       '<div class="link-write preview-input-container">'
      +         '<p><input class="item-preview-input" type="text" placeholder="URL입력하세요">'
      +         '<button class="input-link-checking"></button></p>'
      +       '</div>'
      +     '</div><!--e//new-conts -->'
      +     '<div class="btn-box">'
      +       '<button type="submit" id="add_item_btn" class="btn-save">추가</button>'
      +     '</div>'
      +   '</div><!--e//section -->'
      +	'</li>';

    this.previewInputTemplate
      = '<div class="link-write preview-input-container">'
      +  '<p><input class="item-preview-input" type="text" placeholder="URL입력하세요">'
      +  '<button class="input-link-checking"></button></p>'
      + '</div>';

    this.previewViewTemplate
      = '<div class="preview preview-view-container">'
      +   '<div class="preview-wrap">'
      +     '<a href="{{preview_url}}" target="_blank">'
      +       '<div class="thum-img"><img class="preview-img" src="{{preview_img}}" alt="" /></div>'
      +       '<div class="title">'
      +         '<p class="preview-title">{{preview_title}}</p>'
      +       '</div>'
      +       '<div class="txt-area">'
      +         '<p class="preview-content">{{preview_content}}</p>'
      +         '<span class="preview-url" class="preview-link">{{preview_url_text}}</span>'
      +       '</div>'
      +       '<button type="submit" class="btn-del preview-del-btn"><span>삭제</span></button>'
      +     '</a>'
      +   '</div><!--e//preview-wrap -->'
      + '</div><!--e//#preview -->';
  }

  ItemTemplate.prototype.draw = function (data) {
    let view = '';
    let items = data.items;
    let template = this.template;
    let lastOrder = 1;
    console.log("items:", items);

    for (let i in items) {
      let timelineItem = items[i];
      let itemTemplate = template;
      itemTemplate = itemTemplate.replace('{{id}}', timelineItem.id || 'new' + timelineItem.item_order);
      itemTemplate = itemTemplate.replace('{{order}}', timelineItem.item_order);
      itemTemplate = itemTemplate.replace('{{listCount}}', timelineItem.item_order);
      itemTemplate = itemTemplate.replace('{{title}}', escape(timelineItem.title) || '');
      itemTemplate = itemTemplate.replace('{{itemDate}}', timelineItem.item_date ? moment(escape(timelineItem.item_date)).format('YYYY-MM-DD') : '');
      itemTemplate = itemTemplate.replace('{{itemTime}}', escape(timelineItem.item_time) || '');
      itemTemplate = itemTemplate.replace('{{content}}', escape(timelineItem.content) || '');
      itemTemplate = itemTemplate.replace('{{previewId}}', escape(timelineItem.preview_id) || '');

      if (timelineItem.preview_id) {
        itemTemplate = itemTemplate.replace('{{preview_template}}', this.previewViewTemplate);
        itemTemplate = itemTemplate.replace('{{preview_img}}', timelineItem.preview_img || '');
        itemTemplate = itemTemplate.replace('{{preview_url}}', escape(timelineItem.preview_url) || '');
        itemTemplate = itemTemplate.replace('{{preview_url_text}}', escape(timelineItem.preview_url) || '');
        itemTemplate = itemTemplate.replace('{{preview_title}}', escape(timelineItem.preview_title) || '');
        itemTemplate = itemTemplate.replace('{{preview_content}}', escape(timelineItem.preview_content) || '');
      } else {
        itemTemplate = itemTemplate.replace('{{preview_template}}', this.previewInputTemplate);
      }

      lastOrder += 1;
      view = view + itemTemplate;
    }

    let emptyTemplate = this.emptyTemplate;
    emptyTemplate = emptyTemplate.replace('{{order}}', lastOrder);
    emptyTemplate = emptyTemplate.replace('{{listCount}}', lastOrder);

    view = view + emptyTemplate;

    return view;
  };

  ItemTemplate.prototype.drawItem = function (item) {
    let view = '';
    let timelineItem = item;
    let itemTemplate = this.template;
    let lastOrder = parseInt(timelineItem.item_order) + 1;

    itemTemplate = itemTemplate.replace('{{id}}', timelineItem.id || 'new' + timelineItem.item_order);
    itemTemplate = itemTemplate.replace('{{order}}', timelineItem.item_order);
    itemTemplate = itemTemplate.replace('{{listCount}}', timelineItem.item_order);
    itemTemplate = itemTemplate.replace('{{title}}', escape(timelineItem.title) || '');
    itemTemplate = itemTemplate.replace('{{itemDate}}', timelineItem.item_date ? moment(escape(timelineItem.item_date)).format('YYYY-MM-DD') : '');
    itemTemplate = itemTemplate.replace('{{itemTime}}', escape(timelineItem.item_time) || '');
    itemTemplate = itemTemplate.replace('{{content}}', escape(timelineItem.content) || '');
    itemTemplate = itemTemplate.replace('{{previewId}}', escape(timelineItem.preview_id) || '');

    if (timelineItem.preview_id) {
      itemTemplate = itemTemplate.replace('{{preview_template}}', this.previewViewTemplate);
      itemTemplate = itemTemplate.replace('{{preview_img}}', timelineItem.preview_img || '');
      itemTemplate = itemTemplate.replace('{{preview_url}}', escape(timelineItem.preview_url) || '');
      itemTemplate = itemTemplate.replace('{{preview_url_text}}', escape(timelineItem.preview_url) || '');
      itemTemplate = itemTemplate.replace('{{preview_title}}', escape(timelineItem.preview_title) || '');
      itemTemplate = itemTemplate.replace('{{preview_content}}', escape(timelineItem.preview_content) || '');
    } else {
      itemTemplate = itemTemplate.replace('{{preview_template}}', this.previewInputTemplate);
    }

    view = view + itemTemplate;

    let emptyTemplate = this.emptyTemplate;
    emptyTemplate = emptyTemplate.replace('{{order}}', lastOrder);
    emptyTemplate = emptyTemplate.replace('{{listCount}}', lastOrder);

    view = view + emptyTemplate;

    return view;
  };

  ItemTemplate.prototype.drawPreview = function (item) {
    let view = '';
    let previewItem = item;
    let previewTemplate = this.previewViewTemplate;

    previewTemplate = previewTemplate.replace('{{preview_template}}', this.previewViewTemplate);
    previewTemplate = previewTemplate.replace('{{preview_img}}', previewItem.preview_img || '');
    previewTemplate = previewTemplate.replace('{{preview_url}}', escape(previewItem.preview_url) || '');
    previewTemplate = previewTemplate.replace('{{preview_url_text}}', escape(previewItem.preview_url) || '');
    previewTemplate = previewTemplate.replace('{{preview_title}}', escape(previewItem.title) || '');
    previewTemplate = previewTemplate.replace('{{preview_content}}', escape(previewItem.content) || '');

    view = view + previewTemplate;

    return view;
  };

  ItemTemplate.prototype.drawPreviewInput = function () {
    let view = '';
    let previewTemplate = this.previewInputTemplate;

    view = view + previewTemplate;

    return view;
  };

  return ItemTemplate;
});