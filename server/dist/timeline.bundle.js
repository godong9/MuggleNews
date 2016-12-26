/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	//timeline.js
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (Timeline, TimelineView, TimelineController) {
	  'use strict';
	
	  function TimelinePage() {
	    this.model = new Timeline();
	    this.view = new TimelineView();
	    this.controller = new TimelineController(this.model, this.view);
	  }
	
	  return new TimelinePage();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	//card.js
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  'use strict';
	
	  /**
	   * Timeline Model
	   *
	   * @constructor
	   */
	
	  function Timeline(params) {}
	
	  return Timeline;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	//timeline-view.js
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  'use strict';
	
	  function TimelineView() {}
	
	  return TimelineView;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	//timeline-controller.js
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  'use strict';
	
	  function TimelineController(model, view) {
	    var self = this;
	    self.model = model;
	    self.view = view;
	  }
	
	  return TimelineController;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmM5MjYxZmY4MTA3M2Q4MTEwZTY/ZmQ0NCIsIndlYnBhY2s6Ly8vLi90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvdGltZWxpbmUtdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9jb250cm9sbGVycy90aW1lbGluZS1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lIiwiVGltZWxpbmVWaWV3IiwiVGltZWxpbmVDb250cm9sbGVyIiwiVGltZWxpbmVQYWdlIiwibW9kZWwiLCJ2aWV3IiwiY29udHJvbGxlciIsInBhcmFtcyIsInNlbGYiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFDQSxrQ0FBTyxDQUNMLHNCQURLLEVBRUwsc0JBRkssRUFHTCxzQkFISyxDQUFQLGtDQUlHLFVBQ0RBLFFBREMsRUFFREMsWUFGQyxFQUdEQyxrQkFIQyxFQUlEO0FBQ0E7O0FBRUEsWUFBU0MsWUFBVCxHQUF3QjtBQUN0QixVQUFLQyxLQUFMLEdBQWEsSUFBSUosUUFBSixFQUFiO0FBQ0EsVUFBS0ssSUFBTCxHQUFZLElBQUlKLFlBQUosRUFBWjtBQUNBLFVBQUtLLFVBQUwsR0FBa0IsSUFBSUosa0JBQUosQ0FBdUIsS0FBS0UsS0FBNUIsRUFBbUMsS0FBS0MsSUFBeEMsQ0FBbEI7QUFDRDs7QUFFRCxVQUFPLElBQUlGLFlBQUosRUFBUDtBQUNELEVBbEJELGdKOzs7Ozs7Ozs7O0FDREE7QUFDQSxrQ0FBTyxFQUFQLGtDQUNHLFlBQ0Q7QUFDQTs7QUFFQTs7Ozs7O0FBS0EsWUFBU0gsUUFBVCxDQUFrQk8sTUFBbEIsRUFBMEIsQ0FFekI7O0FBRUQsVUFBT1AsUUFBUDtBQUNELEVBZkQsZ0o7Ozs7Ozs7O0FDREE7QUFDQSxrQ0FBTyxFQUFQLGtDQUNHLFlBQ0Q7QUFDQTs7QUFFQSxZQUFTQyxZQUFULEdBQXdCLENBRXZCOztBQUVELFVBQU9BLFlBQVA7QUFDRCxFQVZELGdKOzs7Ozs7OztBQ0RBO0FBQ0Esa0NBQU8sRUFBUCxrQ0FDRyxZQUNEO0FBQ0E7O0FBRUEsWUFBU0Msa0JBQVQsQ0FBNEJFLEtBQTVCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUN2QyxTQUFJRyxPQUFPLElBQVg7QUFDQUEsVUFBS0osS0FBTCxHQUFhQSxLQUFiO0FBQ0FJLFVBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNEOztBQUVELFVBQU9ILGtCQUFQO0FBQ0QsRUFaRCxnSiIsImZpbGUiOiIuL2Rpc3QvdGltZWxpbmUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmM5MjYxZmY4MTA3M2Q4MTEwZTYiLCIvL3RpbWVsaW5lLmpzXG5kZWZpbmUoW1xuICAnLi9tb2RlbHMvdGltZWxpbmUnLFxuICAnLi92aWV3cy90aW1lbGluZS12aWV3JyxcbiAgJy4vY29udHJvbGxlcnMvdGltZWxpbmUtY29udHJvbGxlcidcbl0sIGZ1bmN0aW9uIChcbiAgVGltZWxpbmUsXG4gIFRpbWVsaW5lVmlldyxcbiAgVGltZWxpbmVDb250cm9sbGVyXG4pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIFRpbWVsaW5lUGFnZSgpIHtcbiAgICB0aGlzLm1vZGVsID0gbmV3IFRpbWVsaW5lKCk7XG4gICAgdGhpcy52aWV3ID0gbmV3IFRpbWVsaW5lVmlldygpO1xuICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBUaW1lbGluZUNvbnRyb2xsZXIodGhpcy5tb2RlbCwgdGhpcy52aWV3KTtcbiAgfVxuXG4gIHJldHVybiBuZXcgVGltZWxpbmVQYWdlKCk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90aW1lbGluZS5qcyIsIi8vY2FyZC5qc1xuZGVmaW5lKFtcbl0sIGZ1bmN0aW9uIChcbikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIFRpbWVsaW5lIE1vZGVsXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gVGltZWxpbmUocGFyYW1zKSB7XG5cbiAgfVxuXG4gIHJldHVybiBUaW1lbGluZTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21vZGVscy90aW1lbGluZS5qcyIsIi8vdGltZWxpbmUtdmlldy5qc1xuZGVmaW5lKFtcbl0sIGZ1bmN0aW9uIChcbikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gVGltZWxpbmVWaWV3KCkge1xuXG4gIH1cblxuICByZXR1cm4gVGltZWxpbmVWaWV3O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmlld3MvdGltZWxpbmUtdmlldy5qcyIsIi8vdGltZWxpbmUtY29udHJvbGxlci5qc1xuZGVmaW5lKFtcbl0sIGZ1bmN0aW9uIChcbikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gVGltZWxpbmVDb250cm9sbGVyKG1vZGVsLCB2aWV3KSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHNlbGYubW9kZWwgPSBtb2RlbDtcbiAgICBzZWxmLnZpZXcgPSB2aWV3O1xuICB9XG5cbiAgcmV0dXJuIFRpbWVsaW5lQ29udHJvbGxlcjtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRyb2xsZXJzL3RpbWVsaW5lLWNvbnRyb2xsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9