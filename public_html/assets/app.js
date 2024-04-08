/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
/* harmony import */ var _multi_item_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi-item-carousel */ "./src/js/multi-item-carousel.js");
/* harmony import */ var _panoramico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panoramico */ "./src/js/panoramico.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ "./src/js/slider.js");




var menu = new _menu__WEBPACK_IMPORTED_MODULE_0__.Menu();
menu.init();
var multiItemCarousel = new _multi_item_carousel__WEBPACK_IMPORTED_MODULE_1__.MultiItemCarousel();
var panoramico = new _panoramico__WEBPACK_IMPORTED_MODULE_2__.Panoramico();
var slider = new _slider__WEBPACK_IMPORTED_MODULE_3__.Slider();
function getAnchor() {
  var currentUrl = document.URL,
    urlParts = currentUrl.split('#');
  return urlParts.length > 1 ? urlParts[1] : null;
}
var loadPannellum = function loadPannellum() {
  var script = document.createElement('script');
  script.onload = function () {
    console.log('script loaded!');
  };
  script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
  document.head.append(script);
};
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Entre Lomas");
  setTimeout(function () {
    slider.initSlider();
    multiItemCarousel.initMultiItemCarousel();
    loadPannellum();
    setTimeout(function () {
      panoramico.init();
      var anchor = getAnchor();
      console.log({
        anchor: anchor
      });
      window.location.replace('#' + anchor);
    }, 500);
  }, 500);
});

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ Menu)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//menu_button

var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);
    _defineProperty(this, "menus", document.querySelectorAll('.menu-button'));
    _defineProperty(this, "modalNav", document.getElementById('modal-nav'));
    _defineProperty(this, "modalNavLi", document.querySelectorAll('#modal-nav li'));
    _defineProperty(this, "toggleMenu", function (menu) {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        this.modalNav.classList.remove('active');
        this.enableScroll();
      } else {
        menu.classList.add('active');
        this.modalNav.classList.add('active');
        this.disableScroll();
      }
    });
  }
  _createClass(Menu, [{
    key: "init",
    value: function init() {
      var _this = this;
      this.menus.forEach(function (menu) {
        menu.addEventListener('click', function () {
          _this.toggleMenu(menu);
        }, false);
      });
      this.modalNavLi.forEach(function (li) {
        li.addEventListener('click', function () {
          var current = document.querySelector('#modal-nav .active');
          current === null || current === void 0 || current.classList.remove('active');
          li.classList.add('active');
          if (window.innerWidth < 1000) {
            _this.toggleMenu(_this.menus[0]);
          }
        });
      });
    }
  }, {
    key: "disableScroll",
    value: function disableScroll() {
      // Get the current page scroll position
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    }
  }, {
    key: "enableScroll",
    value: function enableScroll() {
      window.onscroll = function () {};
    }
  }, {
    key: "firstToUpper",
    value: function firstToUpper(str) {
      return str.charAt(0).toUpperCase() + str.substring(1, str.length);
    }
  }]);
  return Menu;
}();

/***/ }),

/***/ "./src/js/multi-item-carousel.js":
/*!***************************************!*\
  !*** ./src/js/multi-item-carousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiItemCarousel: () => (/* binding */ MultiItemCarousel)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var MultiItemCarousel = /*#__PURE__*/function () {
  function MultiItemCarousel() {
    _classCallCheck(this, MultiItemCarousel);
    _defineProperty(this, "intervals", {});
  }

  //TODO: enable swipe
  _createClass(MultiItemCarousel, [{
    key: "initMultiItemCarousel",
    value: function initMultiItemCarousel() {
      var carousels = document.getElementsByClassName('multi-item-carousel');
      for (var i = 0; i < carousels.length; i++) {
        this.initCarousel(carousels[i]);
      }
    }
  }, {
    key: "setCarouselInterval",
    value: function setCarouselInterval(carousel, intervalTime) {
      var _this = this;
      var carouselId = carousel.dataset.carouselId;
      if (this.intervals[carouselId]) {
        clearInterval(this.intervals[carouselId]);
      }
      var interval = setInterval(function () {
        if (!_this.changeItemsPosition('next', carousel)) {
          carousel.querySelector('.mic-indicator').click();
        }
      }, intervalTime);
      this.intervals[carouselId] = interval;
    }
  }, {
    key: "initCarousel",
    value: function initCarousel(carousel) {
      var _this = this;
      carousel.dataset.carouselId = Date.now().toString();
      var mics = carousel.querySelectorAll('.mic-arrow');
      mics.forEach(function (mic) {
        mic.onclick = function (e) {
          _this.changeItemsPosition(mic.dataset.step, carousel);
        };
      });
      var intervalTime = carousel.dataset.interval;
      var micIndicators = carousel.querySelectorAll('.mic-indicator');
      micIndicators.forEach(function (micIndicator) {
        micIndicator.onclick = function (e) {
          if (intervalTime) {
            _this.setCarouselInterval(carousel, intervalTime);
          }
          var idx = micIndicator.dataset.idx;
          var scrollWrapper = carousel.querySelector('.mic-scroll-wrapper');
          var width = scrollWrapper.clientWidth + _this.getWidthAjust();
          console.log({
            width: width,
            scrollWrapper: scrollWrapper,
            left: width * idx
          });
          carousel.querySelector('.mic-indicator.active').classList.remove('active');
          micIndicator.classList.add('active');
          scrollWrapper.scroll({
            left: width * idx,
            behavior: 'smooth'
          });
          carousel.dataset.currentPosition = idx;
        };
      });
      if (intervalTime) {
        this.setCarouselInterval(carousel, intervalTime);
      }
    }
  }, {
    key: "getWidthAjust",
    value: function getWidthAjust() {
      if (window.screen.width > 900) {
        return 0;
      }
      if (window.screen.width > 600) {
        console.log(0);
        return 0;
      }
      return 0;
    }
  }, {
    key: "changeItemsPosition",
    value: function changeItemsPosition(step, carousel) {
      //reset el interval
      var intervalTime = carousel.dataset.interval;
      if (intervalTime) {
        this.setCarouselInterval(carousel, intervalTime);
      }
      var scrollWrapper = carousel.querySelector('.mic-scroll-wrapper');
      var pages = Array.from(carousel.querySelectorAll('.mic-indicator')).filter(function (s) {
        return window.getComputedStyle(s).getPropertyValue('display') != 'none';
      }).length;
      var width = scrollWrapper.clientWidth + this.getWidthAjust();
      var currentPosition = carousel.dataset.currentPosition;
      var nextPosition = currentPosition < pages - 1 ? parseInt(currentPosition) + 1 : currentPosition;
      var prevPosition = currentPosition > 0 ? parseInt(currentPosition) - 1 : currentPosition;
      if (step == 'next') {
        if (currentPosition == nextPosition) {
          return false;
        }
        scrollWrapper.scroll({
          left: width * nextPosition,
          behavior: 'smooth'
        });
        carousel.dataset.currentPosition = nextPosition;
      } else {
        if (currentPosition == prevPosition) {
          return false;
        }
        scrollWrapper.scroll({
          left: width * prevPosition,
          behavior: 'smooth'
        });
        carousel.dataset.currentPosition = prevPosition;
      }

      //cambiar active en indicator

      var idx = carousel.dataset.currentPosition;
      if (idx < 9 && idx >= 0) {
        var indicator = carousel.querySelector('.mic-indicator.active');
        indicator.classList.remove('active');
        var indicatorsActive = carousel.querySelectorAll('.mic-indicator');
        indicatorsActive.forEach(function (indicatorActive) {
          if (indicatorActive.dataset.idx == idx) indicatorActive.classList.add('active');
        });
      }
      return true;
    }
  }]);
  return MultiItemCarousel;
}();

/***/ }),

/***/ "./src/js/panoramico.js":
/*!******************************!*\
  !*** ./src/js/panoramico.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Panoramico: () => (/* binding */ Panoramico)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Panoramico = /*#__PURE__*/function () {
  function Panoramico() {
    var _this3 = this;
    _classCallCheck(this, Panoramico);
    _defineProperty(this, "viewer", void 0);
    _defineProperty(this, "hotSpots", []);
    _defineProperty(this, "getJson", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name) {
        var lotes;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              lotes = [];
              _context.next = 3;
              return fetch("./js/".concat(name, ".json")).then(function (response) {
                return response.json();
              }).then(function (data) {
                return lotes = data;
              })["catch"](function (error) {
                return console.log(error);
              });
            case 3:
              return _context.abrupt("return", lotes);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _defineProperty(this, "init", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _document$querySelect,
        _this2 = this,
        _document$querySelect2;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            this.createViewer();

            //Iniciar Buttons
            (_document$querySelect = document.querySelector('#panorama #details .cerrar')) === null || _document$querySelect === void 0 || _document$querySelect.addEventListener('click', function (e) {
              _this2.cerrarDetails();
            });
            (_document$querySelect2 = document.querySelector('#panorama #details .contactar')) === null || _document$querySelect2 === void 0 || _document$querySelect2.addEventListener('click', function (e) {
              _this2.irAContacto();
            });

            //TODO: 
            this.viewer;
            console.log('panoramico asd');
            document.addEventListener('click', function (event) {
              var target = event.target;
              // If the clicked element doesn't have the right selector, bail
              if (!target.matches('.hotspot-lote')) return;

              // Don't follow the link
              event.preventDefault();
              var haveActive = target.classList.contains('active');
              var elementos = document.getElementsByClassName('hotspot-lote');
              Array.from(elementos).forEach(function (elemento) {
                elemento.classList.remove('active');
              });

              // Log the clicked element in the console
              target.classList.toggle('active');
            }, false);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    })));
    _defineProperty(this, "cerrarDetails", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            console.log('cerrar details');
            document.querySelector('#panorama #details').classList.remove('active');
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    })));
    _defineProperty(this, "irAContacto", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            console.log('ir a contacto');
            window.location.href = ("" + window.location).replace(/#[A-Za-z0-9_]*$/, '') + "#contacto";
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    })));
    _defineProperty(this, "createViewer", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var _this, params, lotes, lugares;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _this = _this3;
            params = _this3.getViewerParams();
            _context5.next = 4;
            return _this3.getJson('propiedades');
          case 4:
            lotes = _context5.sent;
            _context5.next = 7;
            return _this3.getJson('lugares');
          case 7:
            lugares = _context5.sent;
            document.getElementById("panorama").style.height = params.height + "px";

            /*  this.viewer = pannellum.viewer('panorama', {
               "sceneId":"main",
               "autoLoad": true,
               "type": "equirectangular",
               "panorama": "/images/pano_l.webp",
               "pitch": params.pitch,
               "yaw": params.yaw,
               "hfov": params.hfov,
               "hotSpots": this.generateHotspot([...lotes, ...lugares])
             }) */

            _this3.viewer = pannellum.viewer('panorama', {
              "type": "multires",
              "autoLoad": true,
              "hotSpots": _this3.generateHotspot([].concat(_toConsumableArray(lotes), _toConsumableArray(lugares))),
              "pitch": params.pitch,
              "yaw": params.yaw,
              "hfov": params.hfov,
              "multiRes": {
                "basePath": "/images/pano",
                "path": "/%l/%s%y_%x",
                "fallbackPath": "/fallback/%s",
                "extension": "webp",
                "tileResolution": 512,
                "maxLevel": 4,
                "cubeResolution": 2600
              }
            });

            //Print cords
            _this3.viewer.on('mousedown', function (e) {
              var cords = _this.viewer.mouseEventToCoords(e);
              console.log(cords);
            });

            /* setTimeout(() => {
              this.changeScene(this.viewer,'/images/pano_xl.webp',params, lotes, lugares )
            }, 10000); */
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    })));
    _defineProperty(this, "generateDisableMouseHotSpot", function () {
      return {
        pitch: 0,
        yaw: 0,
        cssClass: 'disableMouseHotSpot active'
      };
    });
  }
  _createClass(Panoramico, [{
    key: "generateHotspot",
    value: function generateHotspot(points) {
      var _this4 = this;
      var response = [];
      points.filter(function (point) {
        return point.visible;
      }).forEach(function (point) {
        console.log(point);
        if (point.isLugar) {
          response.push(_this4.generateLugarHostpost(point));
        } else if (point.isPlano) {
          //response.push(this.addPlano(point))
        } else {
          //generar Hostpo
          response.push(_this4.generateAHotspot(point));
        }
      });
      response.push(this.generateDisableMouseHotSpot());
      return response;
    }
  }, {
    key: "changeScene",
    value: function changeScene(viewer, image_path, params, lotes, lugares) {
      viewer.addScene('newScene', {
        "type": "equirectangular",
        "panorama": image_path,
        "pitch": params.pitch,
        "yaw": params.yaw,
        "hfov": params.hfov,
        "hotSpots": this.generateHotspot([].concat(_toConsumableArray(lotes), _toConsumableArray(lugares)))
      });
    }
  }, {
    key: "getViewerParams",
    value: function getViewerParams() {
      var params = {
        /* pitch : -67.49588568441906,
        yaw : 115.70633233176454, */
        pitch: -79,
        yaw: 80,
        hfov: 200,
        height: window.innerHeight - 100
      };
      if (window.innerWidth < window.innerHeight) {
        params.pitch = -69.53726010556991;
        params.yaw = 46.76916574997824;
      }
      if (window.innerWidth <= 768) {
        params.hfov = 80;
      } else if (window.innerWidth <= 375) {
        params.pitch = -71.03763260297659;
        params.yaw = 46.76916574997824;
        params.hfov = 74;
      }
      return params;
    }
  }, {
    key: "generateDetailHotSpot",
    value: function generateDetailHotSpot() {
      return {
        pitch: 0,
        yaw: 0,
        cssClass: 'detailMouseHotSpot active'
      };
    }
  }, {
    key: "generateLugarHostpost",
    value: function generateLugarHostpost(lugar) {
      return {
        "pitch": lugar.pitch,
        "yaw": lugar.yaw,
        "cssClass": "hotspot-lugar",
        "createTooltipArgs": lugar,
        "createTooltipFunc": function createTooltipFunc(hotSpotDiv, lugar) {
          var clearHeight = (Math.floor(lugar.nombre.length / 12) + 1) * 55;
          hotSpotDiv.innerHTML = "<div>\n      <span>".concat(lugar.nombre, "</span>\n      <div class=\"line\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"clear\" style=\"height:").concat(clearHeight, "px;\"></div>\n</div>\n      ");
        }
      };
    }
  }, {
    key: "addPlano",
    value: function addPlano(plano) {
      return {};
      console.log('addPlano', plano);
      return {
        "pitch": plano.pitch,
        "yaw": plano.yaw,
        "cssClass": "hotspot-plano",
        "createTooltipArgs": plano,
        "createTooltipFunc": function createTooltipFunc(hotSpotDiv, plano) {
          //let clearHeight = (Math.floor(lugar.nombre.length / 12) + 1) * 55
          hotSpotDiv.innerHTML = "<div>\n  <span>plano</span>\n  <img src=\"/images/plano.webp\">\n</div>\n      ";
        }
      };
    }
  }, {
    key: "generateAHotspot",
    value: function generateAHotspot(lote) {
      var _this5 = this;
      return {
        "pitch": lote.pitch,
        "yaw": lote.yaw,
        "cssClass": "hotspot-lote " + lote.estado.toLowerCase(),
        "createTooltipFunc": function createTooltipFunc(hotSpotDiv, lote) {
          hotSpotDiv.innerHTML = lote.numero;
          var h3 = document.createElement('h3');
          h3.innerHTML = lote.estado;

          /* let h5 = document.createElement('h5')
          h5.innerHTML = "Ver ficha" */

          var innerDiv = document.createElement('div');
          innerDiv.classList.add('hotspot-tooltip');
          innerDiv.appendChild(h3);
          //innerDiv.appendChild(h5)

          hotSpotDiv.appendChild(innerDiv);
          hotSpotDiv.addEventListener('click', function (e) {
            _this5.showDetails(lote);
          });
        },
        "createTooltipArgs": lote
      };
    }
  }, {
    key: "showDetails",
    value: function showDetails(lote) {
      console.log({
        lote: lote
      });
      var content = document.querySelector('#panorama #details .content');
      var innerDiv = document.createElement('div');
      var txt = "\n  <h6>Lote ".concat(lote.numero, "</h6>\n\n  Estado: ").concat(lote.estado, "<br>\n  Superficie: ").concat(parseInt(lote.mts).toLocaleString('es-CL'), " m2<br>\n\n  Tipo: ").concat(lote.tipo, "<br>\n");
      if (parseInt(lote.uf)) {
        txt = txt + "Valor: ".concat(parseInt(lote.uf).toLocaleString('es-CL'), " UF<br>");
      }
      content.innerHTML = txt;
      document.querySelector('#panorama #details').classList.add('active');
    }
  }]);
  return Panoramico;
}();

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slider: () => (/* binding */ Slider)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Slider = /*#__PURE__*/function () {
  function Slider() {
    _classCallCheck(this, Slider);
    _defineProperty(this, "sliderWraps", null);
  }
  _createClass(Slider, [{
    key: "initSlider",
    value: function initSlider() {
      this.sliderWraps = document.querySelectorAll('.slider-wrap');

      // Iterate over each slider-wrap element
      this.sliderWraps.forEach(function (sliderWrap) {
        var sliderInner = sliderWrap.querySelector('.slider-inner');
        var slides = sliderInner.querySelectorAll('.slide');
        var previousNav = sliderWrap.querySelector('.previous');
        var nextNav = sliderWrap.querySelector('.next');
        var currentSlide = 0;

        // Function to show the current slide
        function showSlide(index) {
          // Remove the "active" class from all slides
          slides.forEach(function (slide) {
            slide.classList.remove('active');
          });

          // Add the "active" class to the current slide
          slides[index].classList.add('active');
        }

        // Function to navigate to the previous slide
        function goToPreviousSlide() {
          currentSlide--;
          if (currentSlide < 0) {
            currentSlide = slides.length - 1;
          }
          showSlide(currentSlide);
        }

        // Function to navigate to the next slide
        function goToNextSlide() {
          currentSlide++;
          if (currentSlide >= slides.length) {
            currentSlide = 0;
          }
          showSlide(currentSlide);
        }

        // Show the initial slide
        showSlide(currentSlide);
        setInterval(function () {
          goToNextSlide();
        }, 5000);

        // Attach event listeners to navigation buttons
        /* previousNav.addEventListener('click', goToPreviousSlide)
        nextNav.addEventListener('click', goToNextSlide) */
      });
    }
  }]);
  return Slider;
}();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/app": 0,
/******/ 			"assets/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkentrelomas_cl"] = self["webpackChunkentrelomas_cl"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/app"], () => (__webpack_require__("./src/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map