//main.js
define([
  './libs/jquery/dist/jquery'
], function (
  $
) {
  'use strict';

  function MainPage() {
    alert("Main Page");
    let a = 10;
  }

  return new MainPage();
});