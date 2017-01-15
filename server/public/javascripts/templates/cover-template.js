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
      +		  '<h1><input type="text" placeholder="대제목을 입력하세요."></h1>'
      + 		'<p class="h1_desc"><input type="text" placeholder="소제목을 입력하세요."></p>'
      +	  	'<div class="cover-edit">'
      +		    '<div class="btn-cover-edit">'
      + 		    '<input id="cover_change_btn" type="file" name="files[]" data-url="/images/upload">'
      + 		    '<span class="">커버이미지 변경</span>'
      +	  	  '</div>'
      +	    '</div>'
      +	    '<div class="btn-box">'
      + 	    '<button type="reset" class="btn-cancle">취소</button>'
      + 	    '<button type="submit" class="btn-save">저장</button>'
      +	    '</div>'
      +	  '</div>'
      +	'</div>';

    this.editTemplate
      =	'<div class="bg">'
      +		'<img id="cover_img" src="{{coverImg}}" alt="">'
      +	'</div>'
      +	'<div class="inner-box">'
      +	  '<div class="news-cover">'
      +		  '<h1><input type="text" value="{{title}}" placeholder="대제목을 입력하세요."></h1>'
      + 		'<p class="h1_desc"><input type="text" value="{{subtitle}}" placeholder="소제목을 입력하세요."></p>'
      +	  	'<div class="cover-edit">'
      +		    '<div class="btn-cover-edit">'
      + 		    '<input id="cover_change_btn" type="file" name="files[]" data-url="/images/upload">'
      + 		    '<span class="">커버이미지 변경</span>'
      +	  	  '</div>'
      +	    '</div>'
      +	    '<div class="btn-box">'
      + 	    '<button type="reset" class="btn-cancle">취소</button>'
      + 	    '<button type="submit" class="btn-save">저장</button>'
      +	    '</div>'
      +	  '</div>'
      +	'</div>';
  }

  CoverTemplate.prototype.draw = function (data) {
    let view = '';
    let template = this.editTemplate;

    template = template.replace('{{coverImg}}', data.coverImg || '');
    template = template.replace('{{title}}', escape(data.title) || '');
    template = template.replace('{{subtitle}}', escape(data.subtitle) || '');

    view = view + template;

    return view;
  };

  return CoverTemplate;
});