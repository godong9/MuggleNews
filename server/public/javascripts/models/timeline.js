//card.js
define([
], function (
) {
  'use strict';

  /**
   * Timeline Model
   *
   * @constructor
   */
  function Timeline(params) {
    this.title = params.title;
    this.subtitle = params.subtitle;
    this.coverImg = params.coverImg;
  }

  return Timeline;
});