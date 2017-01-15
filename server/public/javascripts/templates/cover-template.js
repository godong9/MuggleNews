//cover-template.js
define([
], function (
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

  function CoverTemplate() {
    this.viewTemplate
      =	'<div class="bg">'
      +		'<img id="cover_img" src="{{coverImg}}" alt="">'
      +	'</div>'
      +	'<div class="inner-box">'
      +	  '<div class="news-cover">'
      +		  '<h1>{{title}}</h1>'
      + 		'<p class="h1_desc">{{subtitle}}</p>'
      + 		'<div class="last-edit">'
      + 		  '<p><span class="user-name">by. {{userName}}</span><span>|</span><span>2016년 1월 1일</span></p>'
      +	    '</div>'
      +	    '<div class="view-count">'
      +	      '<span>{{viewCount}}</span>명이 봤습니다.'
      +	    '</div>'
      +	  '</div>'
      +	'</div>';

    this.editTemplate
      =	'<div class="bg">'
      +		'<img id="cover_img" src="{{coverImg}}" alt="">'
      +	'</div>'
      +	'<div class="inner-box">'
      +	  '<div class="news-cover">'
      +		  '<h1><input id="title_input" type="text" value="{{title}}" placeholder="대제목을 입력하세요."></h1>'
      + 		'<p class="h1_desc"><input id="subtitle_input" type="text" value="{{subtitle}}" placeholder="소제목을 입력하세요."></p>'
      +	  	'<div class="cover-edit">'
      +		    '<div class="btn-cover-edit">'
      + 		    '<input id="cover_change_btn" type="file" name="files[]" data-url="/images/upload">'
      + 		    '<span class="">커버이미지 변경</span>'
      +	  	  '</div>'
      +	    '</div>'
      +	    '<div class="btn-box">'
      + 	    '<button id="cancel_cover_btn" type="reset" class="btn-cancle">취소</button>'
      + 	    '<button id="save_cover_btn" type="submit" class="btn-save">저장</button>'
      +	    '</div>'
      +	  '</div>'
      +	'</div>';
  }

  CoverTemplate.prototype.draw = function (data) {
    let view = '';
    let template;

    if (data.isNew) {
      template = this.editTemplate;
    }
    if (data.isView) {
      template = this.viewTemplate;
    }

    template = template.replace('{{coverImg}}', data.coverImg || '');
    template = template.replace('{{title}}', escape(data.title) || '');
    template = template.replace('{{subtitle}}', escape(data.subtitle) || '');
    template = template.replace('{{userName}}', escape(data.userName) || '');
    template = template.replace('{{viewCount}}', escape(data.viewCount) || '');

    view = view + template;

    return view;
  };

  return CoverTemplate;
});