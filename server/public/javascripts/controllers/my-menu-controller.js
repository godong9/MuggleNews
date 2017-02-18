//my-menu-controller.js
define([
  '../libs/jquery/dist/jquery'
], function (
  $
) {
  'use strict';

  function MyMenuController() {
    this.init();
  }

  MyMenuController.prototype.init = function() {
    this.bindHandlers();
  };

  MyMenuController.prototype.bindHandlers = function() {
    $('#my_menu_open_btn').click(function() {
      $('#my_menu_container').show();
    });

    $('#my_menu_close_btn').click(function() {
      $('#my_menu_container').hide();
    });

    $(document).ready(function() {
      var header = $('.header'); // 헤더 변수 캐싱
      $(window).on('scroll', function() { // 스크롤 이벤트 발생
        var top = $(this).scrollTop();                // 투명도 초기화: 0

        // 스크롤이 발생되면
        if (top > 100) { // 스크롤 값 0이 넘어설 경우
          header.addClass('middle');  // middle 클래스 header 앨리먼트에 추가
        } else {
          header.removeClass('middle'); // 스크롤 값이 다시 0으로 바뀔 경우 middle 클래스 제거
        }
      });
    });
  };

  return new MyMenuController();
});