//cover-template.js
define([
  '../libs/underscore/underscore'
], function (
  _
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
      =	'<li id="{{listId}}">'
      +   '<div class="section">'
      +     '<div class="number">'
      +       '<p class="list-count">{{listCount}}</p>'
      +       '<h2><input id="item_title_input" value="{{title}}" type="text" placeholder="타이틀을 입력하세요.(필수)"></h2>'
      +       '<div class="news-date">'
      +         '<div class="data-table">'
      +           '<input type="text" id="datepicker" class="hasDatepicker" placeholder="날짜입력">'
      +         '</div>'
      +         '<div class="time-table">'
      +           '<input type="text" placeholder="시간입력">'
      +         '</div>'
      +         '<div class="btn-box">'
      +           '<a href="" class="more-vert"><img src="/images/icon-mynews@3x.png" alt=""></a>'
      +           '<div class="mynew-edit">'
      +             '<a href="" class="del-news">삭제</a>'
      +             '<a href="" class="up-news">위로</a>'
      +             '<a href="" class="down-news">아래로</a>'
      +           '</div>'
      +         '</div><!-- e//btn-box-->'
      +       '</div><!-- e//news-data-->'
      +     '</div><!--number -->'
      +     '<div class="new-conts">'
      +       '<div class="txt-area-zone">'
      +         '<textarea placeholder="요약 설명을 입력하세요.">{{content}}</textarea>'
      +       '</div>'
      +       '<div class="link-write">'
      +         '<p><input type="text" placeholder="URL입력하세요"></p>'
      +       '</div>'
      +     '</div><!--e//new-conts -->'
      +   '</div><!--e//section -->'
      +	'</li>';

    this.emptyTemplate
      =	'<li id="empty_item">'
      +   '<div class="section">'
      +     '<div class="number">'
      +       '<p class="list-count">{{listCount}}</p>'
      +       '<h2><input id="item_title_input" type="text" placeholder="타이틀을 입력하세요.(필수)"></h2>'
      +       '<div class="news-date">'
      +         '<div class="data-table">'
      +           '<input type="text" id="datepicker" class="hasDatepicker" placeholder="날짜입력">'
      +         '</div>'
      +         '<div class="time-table">'
      +           '<input type="text" placeholder="시간입력">'
      +         '</div>'
      +         '<div class="btn-box">'
      +           '<a href="" class="more-vert"><img src="/images/icon-mynews@3x.png" alt=""></a>'
      +           '<div class="mynew-edit">'
      +             '<a href="" class="del-news">삭제</a>'
      +             '<a href="" class="up-news">위로</a>'
      +             '<a href="" class="down-news">아래로</a>'
      +           '</div>'
      +         '</div><!-- e//btn-box-->'
      +       '</div><!-- e//news-data-->'
      +     '</div><!--number -->'
      +     '<div class="new-conts">'
      +       '<div class="txt-area-zone">'
      +         '<textarea placeholder="요약 설명을 입력하세요."></textarea>'
      +       '</div>'
      +       '<div class="link-write">'
      +         '<p><input type="text" placeholder="URL입력하세요"></p>'
      +       '</div>'
      +       '<div class="btn-box">'
      +         '<button type="submit" class="btn-save">추가</button>'
      +       '</div>'
      +     '</div><!--e//new-conts -->'
      +   '</div><!--e//section -->'
      +	'</li>';
  }

  ItemTemplate.prototype.draw = function (data) {
    let view = '';
    let items = data.items;
    let template = this.template;

    for (let i in items) {
      let timelineItem = items[i];
      let idx = parseInt(i) + 1;
      let itemId = 'timeline_item_' + idx;
      let itemTemplate = template;
      itemTemplate = itemTemplate.replace('{{listId}}', itemId);
      itemTemplate = itemTemplate.replace('{{listCount}}', idx);
      itemTemplate = itemTemplate.replace('{{title}}', escape(timelineItem.title) || '');
      itemTemplate = itemTemplate.replace('{{itemDate}}', escape(timelineItem.item_date_text) || '');
      itemTemplate = itemTemplate.replace('{{content}}', escape(timelineItem.content) || '');
      itemTemplate = itemTemplate.replace('{{preview_url}}', escape(timelineItem.preview_url) || '');
      itemTemplate = itemTemplate.replace('{{preview_title}}', escape(timelineItem.preview_title) || '');
      itemTemplate = itemTemplate.replace('{{preview_content}}', escape(timelineItem.preview_content) || '');

      view = view + itemTemplate;
    }

    view = view + this.emptyTemplate;

    return view;
  };

  return ItemTemplate;
});