/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./owl.carousel */ "./resources/js/owl.carousel.js");

__webpack_require__(/*! ./easing */ "./resources/js/easing.js");

__webpack_require__(/*! ./parallax.min */ "./resources/js/parallax.min.js");

__webpack_require__(/*! ./jquery.colorbox-min */ "./resources/js/jquery.colorbox-min.js");

__webpack_require__(/*! ./custom */ "./resources/js/custom.js");

/***/ }),

/***/ "./resources/js/custom.js":
/*!********************************!*\
  !*** ./resources/js/custom.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Gallery
6. Init Testimonials Slider
7. Init Lightbox


******************************/
$(document).ready(function () {
  "use strict";
  /* 
  
  1. Vars and Inits
  
  */

  var header = $('.header');
  var menuActive = false;
  var menu = $('.menu');
  var burger = $('.burger_container');
  setHeader();
  $(window).on('resize', function () {
    setHeader();
  });
  $(document).on('scroll', function () {
    setHeader();
  });
  initHomeSlider();
  initMenu();
  initGallery();
  initTestSlider();
  initLightbox();
  /* 
  
  2. Set Header
  
  */

  function setHeader() {
    if ($(window).scrollTop() > 100) {
      header.addClass('scrolled');
    } else {
      header.removeClass('scrolled');
    }
  }
  /* 
  
  3. Init Menu
  
  */


  function initMenu() {
    if ($('.menu').length) {
      var menu = $('.menu');

      if ($('.burger_container').length) {
        burger.on('click', function () {
          if (menuActive) {
            closeMenu();
          } else {
            openMenu();
            $(document).one('click', function cls(e) {
              if ($(e.target).hasClass('menu_mm')) {
                $(document).one('click', cls);
              } else {
                closeMenu();
              }
            });
          }
        });
      }
    }
  }

  function openMenu() {
    menu.addClass('active');
    menuActive = true;
  }

  function closeMenu() {
    menu.removeClass('active');
    menuActive = false;
  }
  /* 
  
  4. Init Home Slider
  
  */


  function initHomeSlider() {
    if ($('.home_slider').length) {
      var homeSlider = $('.home_slider');
      homeSlider.owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        nav: false,
        smartSpeed: 1200
      }); // Custom Navigation

      if ($('.home_slider_next').length) {
        var next = $('.home_slider_next');
        next.on('click', function () {
          homeSlider.trigger('next.owl.carousel');
        });
      }
      /* Custom dots events */


      if ($('.home_slider_custom_dot').length) {
        $('.home_slider_custom_dot').on('click', function (ev) {
          var dot = $(ev.target);
          $('.home_slider_custom_dot').removeClass('active');
          dot.addClass('active');
          homeSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
        });
      }
      /* Change active class for dots when slide changes by nav or touch */


      homeSlider.on('changed.owl.carousel', function (event) {
        $('.home_slider_custom_dot').removeClass('active');
        $('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
      });
    }
  }
  /* 
  
  5. Init Gallery
  
  */


  function initGallery() {
    if ($('.gallery_slider').length) {
      var gallerySlider = $('.gallery_slider');
      gallerySlider.owlCarousel({
        items: 6,
        loop: true,
        margin: 22,
        autoplay: true,
        nav: false,
        dots: false,
        responsive: {
          0: {
            margin: 7,
            items: 3
          },
          575: {
            margin: 7,
            items: 6
          },
          991: {
            margin: 22,
            items: 6
          }
        }
      });
    }
  }
  /* 
  
  6. Init Testimonials Slider
  
  */


  function initTestSlider() {
    if ($('.test_slider').length) {
      var testSlider = $('.test_slider');
      testSlider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 1200,
        nav: false,
        dots: false
      });
    }
  }
  /*
  
  7. Init Lightbox
  
  */


  function initLightbox() {
    if ($('.gallery_item').length) {
      $('.colorbox').colorbox({
        rel: 'colorbox',
        photo: true,
        maxWidth: '95%',
        maxHeight: '95%'
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/easing.js":
/*!********************************!*\
  !*** ./resources/js/easing.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  swing: function swing(x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function easeInQuad(x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function easeOutQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * (--t * (t - 2) - 1) + b;
  },
  easeInCubic: function easeInCubic(x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function easeOutCubic(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function easeInQuart(x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function easeOutQuart(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function easeInQuint(x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function easeOutQuint(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function easeInSine(x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function easeOutSine(x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function easeInOutSine(x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function easeInExpo(x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function easeOutExpo(x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function easeInCirc(x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function easeOutCirc(x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function easeInElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;

    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);

    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function easeOutElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;

    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);

    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (.3 * 1.5);

    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);

    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  },
  easeInBack: function easeInBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function easeOutBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function easeInBounce(x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function easeOutBounce(x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    }
  },
  easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
    if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  }
});
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/***/ }),

/***/ "./resources/js/jquery.colorbox-min.js":
/*!*********************************************!*\
  !*** ./resources/js/jquery.colorbox-min.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function (t, e, i) {
  function n(i, n, o) {
    var r = e.createElement(i);
    return n && (r.id = Z + n), o && (r.style.cssText = o), t(r);
  }

  function o() {
    return i.innerHeight ? i.innerHeight : t(i).height();
  }

  function r(e, i) {
    i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function (e) {
      var n;
      return void 0 === this.cache[e] && (n = t(this.el).attr("data-cbox-" + e), void 0 !== n ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== X[e] && (this.cache[e] = X[e])), this.cache[e];
    }, this.get = function (e) {
      var i = this.value(e);
      return t.isFunction(i) ? i.call(this.el, this) : i;
    };
  }

  function h(t) {
    var e = W.length,
        i = (A + t) % e;
    return 0 > i ? e + i : i;
  }

  function a(t, e) {
    return Math.round((/%/.test(t) ? ("x" === e ? E.width() : o()) / 100 : 1) * parseInt(t, 10));
  }

  function s(t, e) {
    return t.get("photo") || t.get("photoRegex").test(e);
  }

  function l(t, e) {
    return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e;
  }

  function d(t) {
    "contains" in x[0] && !x[0].contains(t.target) && t.target !== v[0] && (t.stopPropagation(), x.focus());
  }

  function c(t) {
    c.str !== t && (x.add(v).removeClass(c.str).addClass(t), c.str = t);
  }

  function g(e) {
    A = 0, e && e !== !1 && "nofollow" !== e ? (W = t("." + te).filter(function () {
      var i = t.data(this, Y),
          n = new r(this, i);
      return n.get("rel") === e;
    }), A = W.index(_.el), -1 === A && (W = W.add(_.el), A = W.length - 1)) : W = t(_.el);
  }

  function u(i) {
    t(e).trigger(i), ae.triggerHandler(i);
  }

  function f(i) {
    var o;

    if (!G) {
      if (o = t(i).data(Y), _ = new r(i, o), g(_.get("rel")), !U) {
        U = $ = !0, c(_.get("className")), x.css({
          visibility: "hidden",
          display: "block",
          opacity: ""
        }), I = n(se, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), b.css({
          width: "",
          height: ""
        }).append(I), j = T.height() + k.height() + b.outerHeight(!0) - b.height(), D = C.width() + H.width() + b.outerWidth(!0) - b.width(), N = I.outerHeight(!0), z = I.outerWidth(!0);

        var h = a(_.get("initialWidth"), "x"),
            s = a(_.get("initialHeight"), "y"),
            l = _.get("maxWidth"),
            f = _.get("maxHeight");

        _.w = Math.max((l !== !1 ? Math.min(h, a(l, "x")) : h) - z - D, 0), _.h = Math.max((f !== !1 ? Math.min(s, a(f, "y")) : s) - N - j, 0), I.css({
          width: "",
          height: _.h
        }), J.position(), u(ee), _.get("onOpen"), O.add(F).hide(), x.focus(), _.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", d, !0), ae.one(re, function () {
          e.removeEventListener("focus", d, !0);
        })), _.get("returnFocus") && ae.one(re, function () {
          t(_.el).focus();
        });
      }

      var p = parseFloat(_.get("opacity"));
      v.css({
        opacity: p === p ? p : "",
        cursor: _.get("overlayClose") ? "pointer" : "",
        visibility: "visible"
      }).show(), _.get("closeButton") ? B.html(_.get("close")).appendTo(b) : B.appendTo("<div/>"), w();
    }
  }

  function p() {
    x || (V = !1, E = t(i), x = n(se).attr({
      id: Y,
      "class": t.support.opacity === !1 ? Z + "IE" : "",
      role: "dialog",
      tabindex: "-1"
    }).hide(), v = n(se, "Overlay").hide(), L = t([n(se, "LoadingOverlay")[0], n(se, "LoadingGraphic")[0]]), y = n(se, "Wrapper"), b = n(se, "Content").append(F = n(se, "Title"), R = n(se, "Current"), P = t('<button type="button"/>').attr({
      id: Z + "Previous"
    }), K = t('<button type="button"/>').attr({
      id: Z + "Next"
    }), S = t('<button type="button"/>').attr({
      id: Z + "Slideshow"
    }), L), B = t('<button type="button"/>').attr({
      id: Z + "Close"
    }), y.append(n(se).append(n(se, "TopLeft"), T = n(se, "TopCenter"), n(se, "TopRight")), n(se, !1, "clear:left").append(C = n(se, "MiddleLeft"), b, H = n(se, "MiddleRight")), n(se, !1, "clear:left").append(n(se, "BottomLeft"), k = n(se, "BottomCenter"), n(se, "BottomRight"))).find("div div").css({
      "float": "left"
    }), M = n(se, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), O = K.add(P).add(R).add(S)), e.body && !x.parent().length && t(e.body).append(v, x.append(y, M));
  }

  function m() {
    function i(t) {
      t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), f(this));
    }

    return x ? (V || (V = !0, K.click(function () {
      J.next();
    }), P.click(function () {
      J.prev();
    }), B.click(function () {
      J.close();
    }), v.click(function () {
      _.get("overlayClose") && J.close();
    }), t(e).bind("keydown." + Z, function (t) {
      var e = t.keyCode;
      U && _.get("escKey") && 27 === e && (t.preventDefault(), J.close()), U && _.get("arrowKey") && W[1] && !t.altKey && (37 === e ? (t.preventDefault(), P.click()) : 39 === e && (t.preventDefault(), K.click()));
    }), t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + te, i) : t("." + te).live("click." + Z, i)), !0) : !1;
  }

  function w() {
    var e,
        o,
        r,
        h = J.prep,
        d = ++le;

    if ($ = !0, q = !1, u(he), u(ie), _.get("onLoad"), _.h = _.get("height") ? a(_.get("height"), "y") - N - j : _.get("innerHeight") && a(_.get("innerHeight"), "y"), _.w = _.get("width") ? a(_.get("width"), "x") - z - D : _.get("innerWidth") && a(_.get("innerWidth"), "x"), _.mw = _.w, _.mh = _.h, _.get("maxWidth") && (_.mw = a(_.get("maxWidth"), "x") - z - D, _.mw = _.w && _.w < _.mw ? _.w : _.mw), _.get("maxHeight") && (_.mh = a(_.get("maxHeight"), "y") - N - j, _.mh = _.h && _.h < _.mh ? _.h : _.mh), e = _.get("href"), Q = setTimeout(function () {
      L.show();
    }, 100), _.get("inline")) {
      var c = t(e).eq(0);
      r = t("<div>").hide().insertBefore(c), ae.one(he, function () {
        r.replaceWith(c);
      }), h(c);
    } else _.get("iframe") ? h(" ") : _.get("html") ? h(_.get("html")) : s(_, e) ? (e = l(_, e), q = _.get("createImg"), t(q).addClass(Z + "Photo").bind("error." + Z, function () {
      h(n(se, "Error").html(_.get("imgError")));
    }).one("load", function () {
      d === le && setTimeout(function () {
        var e;
        _.get("retinaImage") && i.devicePixelRatio > 1 && (q.height = q.height / i.devicePixelRatio, q.width = q.width / i.devicePixelRatio), _.get("scalePhotos") && (o = function o() {
          q.height -= q.height * e, q.width -= q.width * e;
        }, _.mw && q.width > _.mw && (e = (q.width - _.mw) / q.width, o()), _.mh && q.height > _.mh && (e = (q.height - _.mh) / q.height, o())), _.h && (q.style.marginTop = Math.max(_.mh - q.height, 0) / 2 + "px"), W[1] && (_.get("loop") || W[A + 1]) && (q.style.cursor = "pointer", t(q).bind("click." + Z, function () {
          J.next();
        })), q.style.width = q.width + "px", q.style.height = q.height + "px", h(q);
      }, 1);
    }), q.src = e) : e && M.load(e, _.get("data"), function (e, i) {
      d === le && h("error" === i ? n(se, "Error").html(_.get("xhrError")) : t(this).contents());
    });
  }

  var v,
      x,
      y,
      b,
      T,
      C,
      H,
      k,
      W,
      E,
      I,
      M,
      L,
      F,
      R,
      S,
      K,
      P,
      B,
      O,
      _,
      j,
      D,
      N,
      z,
      A,
      q,
      U,
      $,
      G,
      Q,
      J,
      V,
      X = {
    html: !1,
    photo: !1,
    iframe: !1,
    inline: !1,
    transition: "elastic",
    speed: 300,
    fadeOut: 300,
    width: !1,
    initialWidth: "600",
    innerWidth: !1,
    maxWidth: !1,
    height: !1,
    initialHeight: "450",
    innerHeight: !1,
    maxHeight: !1,
    scalePhotos: !0,
    scrolling: !0,
    opacity: .9,
    preloading: !0,
    className: !1,
    overlayClose: !0,
    escKey: !0,
    arrowKey: !0,
    top: !1,
    bottom: !1,
    left: !1,
    right: !1,
    fixed: !1,
    data: void 0,
    closeButton: !0,
    fastIframe: !0,
    open: !1,
    reposition: !0,
    loop: !0,
    slideshow: !1,
    slideshowAuto: !0,
    slideshowSpeed: 2500,
    slideshowStart: "start slideshow",
    slideshowStop: "stop slideshow",
    photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
    retinaImage: !1,
    retinaUrl: !1,
    retinaSuffix: "@2x.$1",
    current: "image {current} of {total}",
    previous: "previous",
    next: "next",
    close: "close",
    xhrError: "This content failed to load.",
    imgError: "This image failed to load.",
    returnFocus: !0,
    trapFocus: !0,
    onOpen: !1,
    onLoad: !1,
    onComplete: !1,
    onCleanup: !1,
    onClosed: !1,
    rel: function rel() {
      return this.rel;
    },
    href: function href() {
      return t(this).attr("href");
    },
    title: function title() {
      return this.title;
    },
    createImg: function createImg() {
      var e = new Image(),
          i = t(this).data("cbox-img-attrs");
      return "object" == _typeof(i) && t.each(i, function (t, i) {
        e[t] = i;
      }), e;
    },
    createIframe: function createIframe() {
      var i = e.createElement("iframe"),
          n = t(this).data("cbox-iframe-attrs");
      return "object" == _typeof(n) && t.each(n, function (t, e) {
        i[t] = e;
      }), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = new Date().getTime(), i.allowFullscreen = !0, i;
    }
  },
      Y = "colorbox",
      Z = "cbox",
      te = Z + "Element",
      ee = Z + "_open",
      ie = Z + "_load",
      ne = Z + "_complete",
      oe = Z + "_cleanup",
      re = Z + "_closed",
      he = Z + "_purge",
      ae = t("<a/>"),
      se = "div",
      le = 0,
      de = {},
      ce = function () {
    function t() {
      clearTimeout(h);
    }

    function e() {
      (_.get("loop") || W[A + 1]) && (t(), h = setTimeout(J.next, _.get("slideshowSpeed")));
    }

    function i() {
      S.html(_.get("slideshowStop")).unbind(s).one(s, n), ae.bind(ne, e).bind(ie, t), x.removeClass(a + "off").addClass(a + "on");
    }

    function n() {
      t(), ae.unbind(ne, e).unbind(ie, t), S.html(_.get("slideshowStart")).unbind(s).one(s, function () {
        J.next(), i();
      }), x.removeClass(a + "on").addClass(a + "off");
    }

    function o() {
      r = !1, S.hide(), t(), ae.unbind(ne, e).unbind(ie, t), x.removeClass(a + "off " + a + "on");
    }

    var r,
        h,
        a = Z + "Slideshow_",
        s = "click." + Z;
    return function () {
      r ? _.get("slideshow") || (ae.unbind(oe, o), o()) : _.get("slideshow") && W[1] && (r = !0, ae.one(oe, o), _.get("slideshowAuto") ? i() : n(), S.show());
    };
  }();

  t[Y] || (t(p), J = t.fn[Y] = t[Y] = function (e, i) {
    var n,
        o = this;
    return e = e || {}, t.isFunction(o) && (o = t("<a/>"), e.open = !0), o[0] ? (p(), m() && (i && (e.onComplete = i), o.each(function () {
      var i = t.data(this, Y) || {};
      t.data(this, Y, t.extend(i, e));
    }).addClass(te), n = new r(o[0], e), n.get("open") && f(o[0])), o) : o;
  }, J.position = function (e, i) {
    function n() {
      T[0].style.width = k[0].style.width = b[0].style.width = parseInt(x[0].style.width, 10) - D + "px", b[0].style.height = C[0].style.height = H[0].style.height = parseInt(x[0].style.height, 10) - j + "px";
    }

    var r,
        h,
        s,
        l = 0,
        d = 0,
        c = x.offset();

    if (E.unbind("resize." + Z), x.css({
      top: -9e4,
      left: -9e4
    }), h = E.scrollTop(), s = E.scrollLeft(), _.get("fixed") ? (c.top -= h, c.left -= s, x.css({
      position: "fixed"
    })) : (l = h, d = s, x.css({
      position: "absolute"
    })), d += _.get("right") !== !1 ? Math.max(E.width() - _.w - z - D - a(_.get("right"), "x"), 0) : _.get("left") !== !1 ? a(_.get("left"), "x") : Math.round(Math.max(E.width() - _.w - z - D, 0) / 2), l += _.get("bottom") !== !1 ? Math.max(o() - _.h - N - j - a(_.get("bottom"), "y"), 0) : _.get("top") !== !1 ? a(_.get("top"), "y") : Math.round(Math.max(o() - _.h - N - j, 0) / 2), x.css({
      top: c.top,
      left: c.left,
      visibility: "visible"
    }), y[0].style.width = y[0].style.height = "9999px", r = {
      width: _.w + z + D,
      height: _.h + N + j,
      top: l,
      left: d
    }, e) {
      var g = 0;
      t.each(r, function (t) {
        return r[t] !== de[t] ? (g = e, void 0) : void 0;
      }), e = g;
    }

    de = r, e || x.css(r), x.dequeue().animate(r, {
      duration: e || 0,
      complete: function complete() {
        n(), $ = !1, y[0].style.width = _.w + z + D + "px", y[0].style.height = _.h + N + j + "px", _.get("reposition") && setTimeout(function () {
          E.bind("resize." + Z, J.position);
        }, 1), t.isFunction(i) && i();
      },
      step: n
    });
  }, J.resize = function (t) {
    var e;
    U && (t = t || {}, t.width && (_.w = a(t.width, "x") - z - D), t.innerWidth && (_.w = a(t.innerWidth, "x")), I.css({
      width: _.w
    }), t.height && (_.h = a(t.height, "y") - N - j), t.innerHeight && (_.h = a(t.innerHeight, "y")), t.innerHeight || t.height || (e = I.scrollTop(), I.css({
      height: "auto"
    }), _.h = I.height()), I.css({
      height: _.h
    }), e && I.scrollTop(e), J.position("none" === _.get("transition") ? 0 : _.get("speed")));
  }, J.prep = function (i) {
    function o() {
      return _.w = _.w || I.width(), _.w = _.mw && _.mw < _.w ? _.mw : _.w, _.w;
    }

    function a() {
      return _.h = _.h || I.height(), _.h = _.mh && _.mh < _.h ? _.mh : _.h, _.h;
    }

    if (U) {
      var d,
          g = "none" === _.get("transition") ? 0 : _.get("speed");
      I.remove(), I = n(se, "LoadedContent").append(i), I.hide().appendTo(M.show()).css({
        width: o(),
        overflow: _.get("scrolling") ? "auto" : "hidden"
      }).css({
        height: a()
      }).prependTo(b), M.hide(), t(q).css({
        "float": "none"
      }), c(_.get("className")), d = function d() {
        function i() {
          t.support.opacity === !1 && x[0].style.removeAttribute("filter");
        }

        var n,
            o,
            a = W.length;
        U && (o = function o() {
          clearTimeout(Q), L.hide(), u(ne), _.get("onComplete");
        }, F.html(_.get("title")).show(), I.show(), a > 1 ? ("string" == typeof _.get("current") && R.html(_.get("current").replace("{current}", A + 1).replace("{total}", a)).show(), K[_.get("loop") || a - 1 > A ? "show" : "hide"]().html(_.get("next")), P[_.get("loop") || A ? "show" : "hide"]().html(_.get("previous")), ce(), _.get("preloading") && t.each([h(-1), h(1)], function () {
          var i,
              n = W[this],
              o = new r(n, t.data(n, Y)),
              h = o.get("href");
          h && s(o, h) && (h = l(o, h), i = e.createElement("img"), i.src = h);
        })) : O.hide(), _.get("iframe") ? (n = _.get("createIframe"), _.get("scrolling") || (n.scrolling = "no"), t(n).attr({
          src: _.get("href"),
          "class": Z + "Iframe"
        }).one("load", o).appendTo(I), ae.one(he, function () {
          n.src = "//about:blank";
        }), _.get("fastIframe") && t(n).trigger("load")) : o(), "fade" === _.get("transition") ? x.fadeTo(g, 1, i) : i());
      }, "fade" === _.get("transition") ? x.fadeTo(g, 0, function () {
        J.position(0, d);
      }) : J.position(g, d);
    }
  }, J.next = function () {
    !$ && W[1] && (_.get("loop") || W[A + 1]) && (A = h(1), f(W[A]));
  }, J.prev = function () {
    !$ && W[1] && (_.get("loop") || A) && (A = h(-1), f(W[A]));
  }, J.close = function () {
    U && !G && (G = !0, U = !1, u(oe), _.get("onCleanup"), E.unbind("." + Z), v.fadeTo(_.get("fadeOut") || 0, 0), x.stop().fadeTo(_.get("fadeOut") || 0, 0, function () {
      x.hide(), v.hide(), u(he), I.remove(), setTimeout(function () {
        G = !1, u(re), _.get("onClosed");
      }, 1);
    }));
  }, J.remove = function () {
    x && (x.stop(), t[Y].close(), x.stop(!1, !0).remove(), v.remove(), G = !1, x = null, t("." + te).removeData(Y).removeClass(te), t(e).unbind("click." + Z).unbind("keydown." + Z));
  }, J.element = function () {
    return t(_.el);
  }, J.settings = X);
})(jQuery, document, window);

/***/ }),

/***/ "./resources/js/owl.carousel.js":
/*!**************************************!*\
  !*** ./resources/js/owl.carousel.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */

/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;

(function ($, window, document, undefined) {
  /**
   * Creates a carousel.
   * @class The Owl Carousel.
   * @public
   * @param {HTMLElement|jQuery} element - The element to create the carousel for.
   * @param {Object} [options] - The options
   */
  function Owl(element, options) {
    /**
     * Current settings for the carousel.
     * @public
     */
    this.settings = null;
    /**
     * Current options set by the caller including defaults.
     * @public
     */

    this.options = $.extend({}, Owl.Defaults, options);
    /**
     * Plugin element.
     * @public
     */

    this.$element = $(element);
    /**
     * Proxied event handlers.
     * @protected
     */

    this._handlers = {};
    /**
     * References to the running plugins of this carousel.
     * @protected
     */

    this._plugins = {};
    /**
     * Currently suppressed events to prevent them from beeing retriggered.
     * @protected
     */

    this._supress = {};
    /**
     * Absolute current position.
     * @protected
     */

    this._current = null;
    /**
     * Animation speed in milliseconds.
     * @protected
     */

    this._speed = null;
    /**
     * Coordinates of all items in pixel.
     * @todo The name of this member is missleading.
     * @protected
     */

    this._coordinates = [];
    /**
     * Current breakpoint.
     * @todo Real media queries would be nice.
     * @protected
     */

    this._breakpoint = null;
    /**
     * Current width of the plugin element.
     */

    this._width = null;
    /**
     * All real items.
     * @protected
     */

    this._items = [];
    /**
     * All cloned items.
     * @protected
     */

    this._clones = [];
    /**
     * Merge values of all items.
     * @todo Maybe this could be part of a plugin.
     * @protected
     */

    this._mergers = [];
    /**
     * Widths of all items.
     */

    this._widths = [];
    /**
     * Invalidated parts within the update process.
     * @protected
     */

    this._invalidated = {};
    /**
     * Ordered list of workers for the update process.
     * @protected
     */

    this._pipe = [];
    /**
     * Current state information for the drag operation.
     * @todo #261
     * @protected
     */

    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    };
    /**
     * Current state information and their tags.
     * @type {Object}
     * @protected
     */

    this._states = {
      current: {},
      tags: {
        'initializing': ['busy'],
        'animating': ['busy'],
        'dragging': ['interacting']
      }
    };
    $.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
      this._handlers[handler] = $.proxy(this[handler], this);
    }, this));
    $.each(Owl.Plugins, $.proxy(function (key, plugin) {
      this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
    }, this));
    $.each(Owl.Workers, $.proxy(function (priority, worker) {
      this._pipe.push({
        'filter': worker.filter,
        'run': $.proxy(worker.run, this)
      });
    }, this));
    this.setup();
    this.initialize();
  }
  /**
   * Default options for the carousel.
   * @public
   */


  Owl.Defaults = {
    items: 3,
    loop: false,
    center: false,
    rewind: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,
    margin: 0,
    stagePadding: 0,
    merge: false,
    mergeFit: true,
    autoWidth: false,
    startPosition: 0,
    rtl: false,
    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    fallbackEasing: 'swing',
    info: false,
    nestedItemSelector: false,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab'
  };
  /**
   * Enumeration for width.
   * @public
   * @readonly
   * @enum {String}
   */

  Owl.Width = {
    Default: 'default',
    Inner: 'inner',
    Outer: 'outer'
  };
  /**
   * Enumeration for types.
   * @public
   * @readonly
   * @enum {String}
   */

  Owl.Type = {
    Event: 'event',
    State: 'state'
  };
  /**
   * Contains all registered plugins.
   * @public
   */

  Owl.Plugins = {};
  /**
   * List of workers involved in the update process.
   */

  Owl.Workers = [{
    filter: ['width', 'settings'],
    run: function run() {
      this._width = this.$element.width();
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function run(cache) {
      cache.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ['items', 'settings'],
    run: function run() {
      this.$stage.children('.cloned').remove();
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function run(cache) {
      var margin = this.settings.margin || '',
          grid = !this.settings.autoWidth,
          rtl = this.settings.rtl,
          css = {
        'width': 'auto',
        'margin-left': rtl ? margin : '',
        'margin-right': rtl ? '' : margin
      };
      !grid && this.$stage.children().css(css);
      cache.css = css;
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function run(cache) {
      var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          merge = null,
          iterator = this._items.length,
          grid = !this.settings.autoWidth,
          widths = [];
      cache.items = {
        merge: false,
        width: width
      };

      while (iterator--) {
        merge = this._mergers[iterator];
        merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
        cache.items.merge = merge > 1 || cache.items.merge;
        widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
      }

      this._widths = widths;
    }
  }, {
    filter: ['items', 'settings'],
    run: function run() {
      var clones = [],
          items = this._items,
          settings = this.settings,
          // TODO: Should be computed from number of min width items in stage
      view = Math.max(settings.items * 2, 4),
          size = Math.ceil(items.length / 2) * 2,
          repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
          append = '',
          prepend = '';
      repeat /= 2;

      while (repeat--) {
        // Switch to only using appended clones
        clones.push(this.normalize(clones.length / 2, true));
        append = append + items[clones[clones.length - 1]][0].outerHTML;
        clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
        prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
      }

      this._clones = clones;
      $(append).addClass('cloned').appendTo(this.$stage);
      $(prepend).addClass('cloned').prependTo(this.$stage);
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function run() {
      var rtl = this.settings.rtl ? 1 : -1,
          size = this._clones.length + this._items.length,
          iterator = -1,
          previous = 0,
          current = 0,
          coordinates = [];

      while (++iterator < size) {
        previous = coordinates[iterator - 1] || 0;
        current = this._widths[this.relative(iterator)] + this.settings.margin;
        coordinates.push(previous + current * rtl);
      }

      this._coordinates = coordinates;
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function run() {
      var padding = this.settings.stagePadding,
          coordinates = this._coordinates,
          css = {
        'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
        'padding-left': padding || '',
        'padding-right': padding || ''
      };
      this.$stage.css(css);
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function run(cache) {
      var iterator = this._coordinates.length,
          grid = !this.settings.autoWidth,
          items = this.$stage.children();

      if (grid && cache.items.merge) {
        while (iterator--) {
          cache.css.width = this._widths[this.relative(iterator)];
          items.eq(iterator).css(cache.css);
        }
      } else if (grid) {
        cache.css.width = cache.items.width;
        items.css(cache.css);
      }
    }
  }, {
    filter: ['items'],
    run: function run() {
      this._coordinates.length < 1 && this.$stage.removeAttr('style');
    }
  }, {
    filter: ['width', 'items', 'settings'],
    run: function run(cache) {
      cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
      cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
      this.reset(cache.current);
    }
  }, {
    filter: ['position'],
    run: function run() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ['width', 'position', 'items', 'settings'],
    run: function run() {
      var rtl = this.settings.rtl ? 1 : -1,
          padding = this.settings.stagePadding * 2,
          begin = this.coordinates(this.current()) + padding,
          end = begin + this.width() * rtl,
          inner,
          outer,
          matches = [],
          i,
          n;

      for (i = 0, n = this._coordinates.length; i < n; i++) {
        inner = this._coordinates[i - 1] || 0;
        outer = Math.abs(this._coordinates[i]) + padding * rtl;

        if (this.op(inner, '<=', begin) && this.op(inner, '>', end) || this.op(outer, '<', begin) && this.op(outer, '>', end)) {
          matches.push(i);
        }
      }

      this.$stage.children('.active').removeClass('active');
      this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

      if (this.settings.center) {
        this.$stage.children('.center').removeClass('center');
        this.$stage.children().eq(this.current()).addClass('center');
      }
    }
  }];
  /**
   * Initializes the carousel.
   * @protected
   */

  Owl.prototype.initialize = function () {
    this.enter('initializing');
    this.trigger('initialize');
    this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

    if (this.settings.autoWidth && !this.is('pre-loading')) {
      var imgs, nestedSelector, width;
      imgs = this.$element.find('img');
      nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
      width = this.$element.children(nestedSelector).width();

      if (imgs.length && width <= 0) {
        this.preloadAutoWidthImages(imgs);
      }
    }

    this.$element.addClass(this.options.loadingClass); // create stage

    this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'); // append stage

    this.$element.append(this.$stage.parent()); // append content

    this.replace(this.$element.children().not(this.$stage.parent())); // check visibility

    if (this.$element.is(':visible')) {
      // update view
      this.refresh();
    } else {
      // invalidate width
      this.invalidate('width');
    }

    this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass); // register event handlers

    this.registerEventHandlers();
    this.leave('initializing');
    this.trigger('initialized');
  };
  /**
   * Setups the current settings.
   * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
   * @todo Support for media queries by using `matchMedia` would be nice.
   * @public
   */


  Owl.prototype.setup = function () {
    var viewport = this.viewport(),
        overwrites = this.options.responsive,
        match = -1,
        settings = null;

    if (!overwrites) {
      settings = $.extend({}, this.options);
    } else {
      $.each(overwrites, function (breakpoint) {
        if (breakpoint <= viewport && breakpoint > match) {
          match = Number(breakpoint);
        }
      });
      settings = $.extend({}, this.options, overwrites[match]);

      if (typeof settings.stagePadding === 'function') {
        settings.stagePadding = settings.stagePadding();
      }

      delete settings.responsive; // responsive class

      if (settings.responsiveClass) {
        this.$element.attr('class', this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match));
      }
    }

    this.trigger('change', {
      property: {
        name: 'settings',
        value: settings
      }
    });
    this._breakpoint = match;
    this.settings = settings;
    this.invalidate('settings');
    this.trigger('changed', {
      property: {
        name: 'settings',
        value: this.settings
      }
    });
  };
  /**
   * Updates option logic if necessery.
   * @protected
   */


  Owl.prototype.optionsLogic = function () {
    if (this.settings.autoWidth) {
      this.settings.stagePadding = false;
      this.settings.merge = false;
    }
  };
  /**
   * Prepares an item before add.
   * @todo Rename event parameter `content` to `item`.
   * @protected
   * @returns {jQuery|HTMLElement} - The item container.
   */


  Owl.prototype.prepare = function (item) {
    var event = this.trigger('prepare', {
      content: item
    });

    if (!event.data) {
      event.data = $('<' + this.settings.itemElement + '/>').addClass(this.options.itemClass).append(item);
    }

    this.trigger('prepared', {
      content: event.data
    });
    return event.data;
  };
  /**
   * Updates the view.
   * @public
   */


  Owl.prototype.update = function () {
    var i = 0,
        n = this._pipe.length,
        filter = $.proxy(function (p) {
      return this[p];
    }, this._invalidated),
        cache = {};

    while (i < n) {
      if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
        this._pipe[i].run(cache);
      }

      i++;
    }

    this._invalidated = {};
    !this.is('valid') && this.enter('valid');
  };
  /**
   * Gets the width of the view.
   * @public
   * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
   * @returns {Number} - The width of the view in pixel.
   */


  Owl.prototype.width = function (dimension) {
    dimension = dimension || Owl.Width.Default;

    switch (dimension) {
      case Owl.Width.Inner:
      case Owl.Width.Outer:
        return this._width;

      default:
        return this._width - this.settings.stagePadding * 2 + this.settings.margin;
    }
  };
  /**
   * Refreshes the carousel primarily for adaptive purposes.
   * @public
   */


  Owl.prototype.refresh = function () {
    this.enter('refreshing');
    this.trigger('refresh');
    this.setup();
    this.optionsLogic();
    this.$element.addClass(this.options.refreshClass);
    this.update();
    this.$element.removeClass(this.options.refreshClass);
    this.leave('refreshing');
    this.trigger('refreshed');
  };
  /**
   * Checks window `resize` event.
   * @protected
   */


  Owl.prototype.onThrottledResize = function () {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  };
  /**
   * Checks window `resize` event.
   * @protected
   */


  Owl.prototype.onResize = function () {
    if (!this._items.length) {
      return false;
    }

    if (this._width === this.$element.width()) {
      return false;
    }

    if (!this.$element.is(':visible')) {
      return false;
    }

    this.enter('resizing');

    if (this.trigger('resize').isDefaultPrevented()) {
      this.leave('resizing');
      return false;
    }

    this.invalidate('width');
    this.refresh();
    this.leave('resizing');
    this.trigger('resized');
  };
  /**
   * Registers event handlers.
   * @todo Check `msPointerEnabled`
   * @todo #261
   * @protected
   */


  Owl.prototype.registerEventHandlers = function () {
    if ($.support.transition) {
      this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
    }

    if (this.settings.responsive !== false) {
      this.on(window, 'resize', this._handlers.onThrottledResize);
    }

    if (this.settings.mouseDrag) {
      this.$element.addClass(this.options.dragClass);
      this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
      this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
        return false;
      });
    }

    if (this.settings.touchDrag) {
      this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
      this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
    }
  };
  /**
   * Handles `touchstart` and `mousedown` events.
   * @todo Horizontal swipe threshold as option
   * @todo #261
   * @protected
   * @param {Event} event - The event arguments.
   */


  Owl.prototype.onDragStart = function (event) {
    var stage = null;

    if (event.which === 3) {
      return;
    }

    if ($.support.transform) {
      stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
      stage = {
        x: stage[stage.length === 16 ? 12 : 4],
        y: stage[stage.length === 16 ? 13 : 5]
      };
    } else {
      stage = this.$stage.position();
      stage = {
        x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
        y: stage.top
      };
    }

    if (this.is('animating')) {
      $.support.transform ? this.animate(stage.x) : this.$stage.stop();
      this.invalidate('position');
    }

    this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
    this.speed(0);
    this._drag.time = new Date().getTime();
    this._drag.target = $(event.target);
    this._drag.stage.start = stage;
    this._drag.stage.current = stage;
    this._drag.pointer = this.pointer(event);
    $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
    $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {
      var delta = this.difference(this._drag.pointer, this.pointer(event));
      $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

      if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
        return;
      }

      event.preventDefault();
      this.enter('dragging');
      this.trigger('drag');
    }, this));
  };
  /**
   * Handles the `touchmove` and `mousemove` events.
   * @todo #261
   * @protected
   * @param {Event} event - The event arguments.
   */


  Owl.prototype.onDragMove = function (event) {
    var minimum = null,
        maximum = null,
        pull = null,
        delta = this.difference(this._drag.pointer, this.pointer(event)),
        stage = this.difference(this._drag.stage.start, delta);

    if (!this.is('dragging')) {
      return;
    }

    event.preventDefault();

    if (this.settings.loop) {
      minimum = this.coordinates(this.minimum());
      maximum = this.coordinates(this.maximum() + 1) - minimum;
      stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
    } else {
      minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
      maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
      pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
      stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    }

    this._drag.stage.current = stage;
    this.animate(stage.x);
  };
  /**
   * Handles the `touchend` and `mouseup` events.
   * @todo #261
   * @todo Threshold for click event
   * @protected
   * @param {Event} event - The event arguments.
   */


  Owl.prototype.onDragEnd = function (event) {
    var delta = this.difference(this._drag.pointer, this.pointer(event)),
        stage = this._drag.stage.current,
        direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
    $(document).off('.owl.core');
    this.$element.removeClass(this.options.grabClass);

    if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
      this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
      this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
      this.invalidate('position');
      this.update();
      this._drag.direction = direction;

      if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
        this._drag.target.one('click.owl.core', function () {
          return false;
        });
      }
    }

    if (!this.is('dragging')) {
      return;
    }

    this.leave('dragging');
    this.trigger('dragged');
  };
  /**
   * Gets absolute position of the closest item for a coordinate.
   * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
   * @protected
   * @param {Number} coordinate - The coordinate in pixel.
   * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
   * @return {Number} - The absolute position of the closest item.
   */


  Owl.prototype.closest = function (coordinate, direction) {
    var position = -1,
        pull = 30,
        width = this.width(),
        coordinates = this.coordinates();

    if (!this.settings.freeDrag) {
      // check closest item
      $.each(coordinates, $.proxy(function (index, value) {
        // on a left pull, check on current index
        if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
          position = index; // on a right pull, check on previous index
          // to do so, subtract width from value and set position = index + 1
        } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
          position = index + 1;
        } else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
          position = direction === 'left' ? index + 1 : index;
        }

        return position === -1;
      }, this));
    }

    if (!this.settings.loop) {
      // non loop boundries
      if (this.op(coordinate, '>', coordinates[this.minimum()])) {
        position = coordinate = this.minimum();
      } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
        position = coordinate = this.maximum();
      }
    }

    return position;
  };
  /**
   * Animates the stage.
   * @todo #270
   * @public
   * @param {Number} coordinate - The coordinate in pixels.
   */


  Owl.prototype.animate = function (coordinate) {
    var animate = this.speed() > 0;
    this.is('animating') && this.onTransitionEnd();

    if (animate) {
      this.enter('animating');
      this.trigger('translate');
    }

    if ($.support.transform3d && $.support.transition) {
      this.$stage.css({
        transform: 'translate3d(' + coordinate + 'px,0px,0px)',
        transition: this.speed() / 1000 + 's'
      });
    } else if (animate) {
      this.$stage.animate({
        left: coordinate + 'px'
      }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
    } else {
      this.$stage.css({
        left: coordinate + 'px'
      });
    }
  };
  /**
   * Checks whether the carousel is in a specific state or not.
   * @param {String} state - The state to check.
   * @returns {Boolean} - The flag which indicates if the carousel is busy.
   */


  Owl.prototype.is = function (state) {
    return this._states.current[state] && this._states.current[state] > 0;
  };
  /**
   * Sets the absolute position of the current item.
   * @public
   * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
   * @returns {Number} - The absolute position of the current item.
   */


  Owl.prototype.current = function (position) {
    if (position === undefined) {
      return this._current;
    }

    if (this._items.length === 0) {
      return undefined;
    }

    position = this.normalize(position);

    if (this._current !== position) {
      var event = this.trigger('change', {
        property: {
          name: 'position',
          value: position
        }
      });

      if (event.data !== undefined) {
        position = this.normalize(event.data);
      }

      this._current = position;
      this.invalidate('position');
      this.trigger('changed', {
        property: {
          name: 'position',
          value: this._current
        }
      });
    }

    return this._current;
  };
  /**
   * Invalidates the given part of the update routine.
   * @param {String} [part] - The part to invalidate.
   * @returns {Array.<String>} - The invalidated parts.
   */


  Owl.prototype.invalidate = function (part) {
    if ($.type(part) === 'string') {
      this._invalidated[part] = true;
      this.is('valid') && this.leave('valid');
    }

    return $.map(this._invalidated, function (v, i) {
      return i;
    });
  };
  /**
   * Resets the absolute position of the current item.
   * @public
   * @param {Number} position - The absolute position of the new item.
   */


  Owl.prototype.reset = function (position) {
    position = this.normalize(position);

    if (position === undefined) {
      return;
    }

    this._speed = 0;
    this._current = position;
    this.suppress(['translate', 'translated']);
    this.animate(this.coordinates(position));
    this.release(['translate', 'translated']);
  };
  /**
   * Normalizes an absolute or a relative position of an item.
   * @public
   * @param {Number} position - The absolute or relative position to normalize.
   * @param {Boolean} [relative=false] - Whether the given position is relative or not.
   * @returns {Number} - The normalized position.
   */


  Owl.prototype.normalize = function (position, relative) {
    var n = this._items.length,
        m = relative ? 0 : this._clones.length;

    if (!this.isNumeric(position) || n < 1) {
      position = undefined;
    } else if (position < 0 || position >= n + m) {
      position = ((position - m / 2) % n + n) % n + m / 2;
    }

    return position;
  };
  /**
   * Converts an absolute position of an item into a relative one.
   * @public
   * @param {Number} position - The absolute position to convert.
   * @returns {Number} - The converted position.
   */


  Owl.prototype.relative = function (position) {
    position -= this._clones.length / 2;
    return this.normalize(position, true);
  };
  /**
   * Gets the maximum position for the current item.
   * @public
   * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
   * @returns {Number}
   */


  Owl.prototype.maximum = function (relative) {
    var settings = this.settings,
        maximum = this._coordinates.length,
        iterator,
        reciprocalItemsWidth,
        elementWidth;

    if (settings.loop) {
      maximum = this._clones.length / 2 + this._items.length - 1;
    } else if (settings.autoWidth || settings.merge) {
      iterator = this._items.length;
      reciprocalItemsWidth = this._items[--iterator].width();
      elementWidth = this.$element.width();

      while (iterator--) {
        reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;

        if (reciprocalItemsWidth > elementWidth) {
          break;
        }
      }

      maximum = iterator + 1;
    } else if (settings.center) {
      maximum = this._items.length - 1;
    } else {
      maximum = this._items.length - settings.items;
    }

    if (relative) {
      maximum -= this._clones.length / 2;
    }

    return Math.max(maximum, 0);
  };
  /**
   * Gets the minimum position for the current item.
   * @public
   * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
   * @returns {Number}
   */


  Owl.prototype.minimum = function (relative) {
    return relative ? 0 : this._clones.length / 2;
  };
  /**
   * Gets an item at the specified relative position.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
   */


  Owl.prototype.items = function (position) {
    if (position === undefined) {
      return this._items.slice();
    }

    position = this.normalize(position, true);
    return this._items[position];
  };
  /**
   * Gets an item at the specified relative position.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
   */


  Owl.prototype.mergers = function (position) {
    if (position === undefined) {
      return this._mergers.slice();
    }

    position = this.normalize(position, true);
    return this._mergers[position];
  };
  /**
   * Gets the absolute positions of clones for an item.
   * @public
   * @param {Number} [position] - The relative position of the item.
   * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
   */


  Owl.prototype.clones = function (position) {
    var odd = this._clones.length / 2,
        even = odd + this._items.length,
        map = function map(index) {
      return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
    };

    if (position === undefined) {
      return $.map(this._clones, function (v, i) {
        return map(i);
      });
    }

    return $.map(this._clones, function (v, i) {
      return v === position ? map(i) : null;
    });
  };
  /**
   * Sets the current animation speed.
   * @public
   * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
   * @returns {Number} - The current animation speed in milliseconds.
   */


  Owl.prototype.speed = function (speed) {
    if (speed !== undefined) {
      this._speed = speed;
    }

    return this._speed;
  };
  /**
   * Gets the coordinate of an item.
   * @todo The name of this method is missleanding.
   * @public
   * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
   * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
   */


  Owl.prototype.coordinates = function (position) {
    var multiplier = 1,
        newPosition = position - 1,
        coordinate;

    if (position === undefined) {
      return $.map(this._coordinates, $.proxy(function (coordinate, index) {
        return this.coordinates(index);
      }, this));
    }

    if (this.settings.center) {
      if (this.settings.rtl) {
        multiplier = -1;
        newPosition = position + 1;
      }

      coordinate = this._coordinates[position];
      coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
    } else {
      coordinate = this._coordinates[newPosition] || 0;
    }

    coordinate = Math.ceil(coordinate);
    return coordinate;
  };
  /**
   * Calculates the speed for a translation.
   * @protected
   * @param {Number} from - The absolute position of the start item.
   * @param {Number} to - The absolute position of the target item.
   * @param {Number} [factor=undefined] - The time factor in milliseconds.
   * @returns {Number} - The time in milliseconds for the translation.
   */


  Owl.prototype.duration = function (from, to, factor) {
    if (factor === 0) {
      return 0;
    }

    return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
  };
  /**
   * Slides to the specified item.
   * @public
   * @param {Number} position - The position of the item.
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */


  Owl.prototype.to = function (position, speed) {
    var current = this.current(),
        revert = null,
        distance = position - this.relative(current),
        direction = (distance > 0) - (distance < 0),
        items = this._items.length,
        minimum = this.minimum(),
        maximum = this.maximum();

    if (this.settings.loop) {
      if (!this.settings.rewind && Math.abs(distance) > items / 2) {
        distance += direction * -1 * items;
      }

      position = current + distance;
      revert = ((position - minimum) % items + items) % items + minimum;

      if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
        current = revert - distance;
        position = revert;
        this.reset(current);
      }
    } else if (this.settings.rewind) {
      maximum += 1;
      position = (position % maximum + maximum) % maximum;
    } else {
      position = Math.max(minimum, Math.min(maximum, position));
    }

    this.speed(this.duration(current, position, speed));
    this.current(position);

    if (this.$element.is(':visible')) {
      this.update();
    }
  };
  /**
   * Slides to the next item.
   * @public
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */


  Owl.prototype.next = function (speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) + 1, speed);
  };
  /**
   * Slides to the previous item.
   * @public
   * @param {Number} [speed] - The time in milliseconds for the transition.
   */


  Owl.prototype.prev = function (speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) - 1, speed);
  };
  /**
   * Handles the end of an animation.
   * @protected
   * @param {Event} event - The event arguments.
   */


  Owl.prototype.onTransitionEnd = function (event) {
    // if css2 animation then event object is undefined
    if (event !== undefined) {
      event.stopPropagation(); // Catch only owl-stage transitionEnd event

      if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
        return false;
      }
    }

    this.leave('animating');
    this.trigger('translated');
  };
  /**
   * Gets viewport width.
   * @protected
   * @return {Number} - The width in pixel.
   */


  Owl.prototype.viewport = function () {
    var width;

    if (this.options.responsiveBaseElement !== window) {
      width = $(this.options.responsiveBaseElement).width();
    } else if (window.innerWidth) {
      width = window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientWidth) {
      width = document.documentElement.clientWidth;
    } else {
      console.warn('Can not detect viewport width.');
    }

    return width;
  };
  /**
   * Replaces the current content.
   * @public
   * @param {HTMLElement|jQuery|String} content - The new content.
   */


  Owl.prototype.replace = function (content) {
    this.$stage.empty();
    this._items = [];

    if (content) {
      content = content instanceof jQuery ? content : $(content);
    }

    if (this.settings.nestedItemSelector) {
      content = content.find('.' + this.settings.nestedItemSelector);
    }

    content.filter(function () {
      return this.nodeType === 1;
    }).each($.proxy(function (index, item) {
      item = this.prepare(item);
      this.$stage.append(item);

      this._items.push(item);

      this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    }, this));
    this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
    this.invalidate('items');
  };
  /**
   * Adds an item.
   * @todo Use `item` instead of `content` for the event arguments.
   * @public
   * @param {HTMLElement|jQuery|String} content - The item content to add.
   * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
   */


  Owl.prototype.add = function (content, position) {
    var current = this.relative(this._current);
    position = position === undefined ? this._items.length : this.normalize(position, true);
    content = content instanceof jQuery ? content : $(content);
    this.trigger('add', {
      content: content,
      position: position
    });
    content = this.prepare(content);

    if (this._items.length === 0 || position === this._items.length) {
      this._items.length === 0 && this.$stage.append(content);
      this._items.length !== 0 && this._items[position - 1].after(content);

      this._items.push(content);

      this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    } else {
      this._items[position].before(content);

      this._items.splice(position, 0, content);

      this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    }

    this._items[current] && this.reset(this._items[current].index());
    this.invalidate('items');
    this.trigger('added', {
      content: content,
      position: position
    });
  };
  /**
   * Removes an item by its position.
   * @todo Use `item` instead of `content` for the event arguments.
   * @public
   * @param {Number} position - The relative position of the item to remove.
   */


  Owl.prototype.remove = function (position) {
    position = this.normalize(position, true);

    if (position === undefined) {
      return;
    }

    this.trigger('remove', {
      content: this._items[position],
      position: position
    });

    this._items[position].remove();

    this._items.splice(position, 1);

    this._mergers.splice(position, 1);

    this.invalidate('items');
    this.trigger('removed', {
      content: null,
      position: position
    });
  };
  /**
   * Preloads images with auto width.
   * @todo Replace by a more generic approach
   * @protected
   */


  Owl.prototype.preloadAutoWidthImages = function (images) {
    images.each($.proxy(function (i, element) {
      this.enter('pre-loading');
      element = $(element);
      $(new Image()).one('load', $.proxy(function (e) {
        element.attr('src', e.target.src);
        element.css('opacity', 1);
        this.leave('pre-loading');
        !this.is('pre-loading') && !this.is('initializing') && this.refresh();
      }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
    }, this));
  };
  /**
   * Destroys the carousel.
   * @public
   */


  Owl.prototype.destroy = function () {
    this.$element.off('.owl.core');
    this.$stage.off('.owl.core');
    $(document).off('.owl.core');

    if (this.settings.responsive !== false) {
      window.clearTimeout(this.resizeTimer);
      this.off(window, 'resize', this._handlers.onThrottledResize);
    }

    for (var i in this._plugins) {
      this._plugins[i].destroy();
    }

    this.$stage.children('.cloned').remove();
    this.$stage.unwrap();
    this.$stage.children().contents().unwrap();
    this.$stage.children().unwrap();
    this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), '')).removeData('owl.carousel');
  };
  /**
   * Operators to calculate right-to-left and left-to-right.
   * @protected
   * @param {Number} [a] - The left side operand.
   * @param {String} [o] - The operator.
   * @param {Number} [b] - The right side operand.
   */


  Owl.prototype.op = function (a, o, b) {
    var rtl = this.settings.rtl;

    switch (o) {
      case '<':
        return rtl ? a > b : a < b;

      case '>':
        return rtl ? a < b : a > b;

      case '>=':
        return rtl ? a <= b : a >= b;

      case '<=':
        return rtl ? a >= b : a <= b;

      default:
        break;
    }
  };
  /**
   * Attaches to an internal event.
   * @protected
   * @param {HTMLElement} element - The event source.
   * @param {String} event - The event name.
   * @param {Function} listener - The event handler to attach.
   * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
   */


  Owl.prototype.on = function (element, event, listener, capture) {
    if (element.addEventListener) {
      element.addEventListener(event, listener, capture);
    } else if (element.attachEvent) {
      element.attachEvent('on' + event, listener);
    }
  };
  /**
   * Detaches from an internal event.
   * @protected
   * @param {HTMLElement} element - The event source.
   * @param {String} event - The event name.
   * @param {Function} listener - The attached event handler to detach.
   * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
   */


  Owl.prototype.off = function (element, event, listener, capture) {
    if (element.removeEventListener) {
      element.removeEventListener(event, listener, capture);
    } else if (element.detachEvent) {
      element.detachEvent('on' + event, listener);
    }
  };
  /**
   * Triggers a public event.
   * @todo Remove `status`, `relatedTarget` should be used instead.
   * @protected
   * @param {String} name - The event name.
   * @param {*} [data=null] - The event data.
   * @param {String} [namespace=carousel] - The event namespace.
   * @param {String} [state] - The state which is associated with the event.
   * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
   * @returns {Event} - The event arguments.
   */


  Owl.prototype.trigger = function (name, data, namespace, state, enter) {
    var status = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    },
        handler = $.camelCase($.grep(['on', name, namespace], function (v) {
      return v;
    }).join('-').toLowerCase()),
        event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({
      relatedTarget: this
    }, status, data));

    if (!this._supress[name]) {
      $.each(this._plugins, function (name, plugin) {
        if (plugin.onTrigger) {
          plugin.onTrigger(event);
        }
      });
      this.register({
        type: Owl.Type.Event,
        name: name
      });
      this.$element.trigger(event);

      if (this.settings && typeof this.settings[handler] === 'function') {
        this.settings[handler].call(this, event);
      }
    }

    return event;
  };
  /**
   * Enters a state.
   * @param name - The state name.
   */


  Owl.prototype.enter = function (name) {
    $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
      if (this._states.current[name] === undefined) {
        this._states.current[name] = 0;
      }

      this._states.current[name]++;
    }, this));
  };
  /**
   * Leaves a state.
   * @param name - The state name.
   */


  Owl.prototype.leave = function (name) {
    $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
      this._states.current[name]--;
    }, this));
  };
  /**
   * Registers an event or state.
   * @public
   * @param {Object} object - The event or state to register.
   */


  Owl.prototype.register = function (object) {
    if (object.type === Owl.Type.Event) {
      if (!$.event.special[object.name]) {
        $.event.special[object.name] = {};
      }

      if (!$.event.special[object.name].owl) {
        var _default = $.event.special[object.name]._default;

        $.event.special[object.name]._default = function (e) {
          if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
            return _default.apply(this, arguments);
          }

          return e.namespace && e.namespace.indexOf('owl') > -1;
        };

        $.event.special[object.name].owl = true;
      }
    } else if (object.type === Owl.Type.State) {
      if (!this._states.tags[object.name]) {
        this._states.tags[object.name] = object.tags;
      } else {
        this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
      }

      this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
        return $.inArray(tag, this._states.tags[object.name]) === i;
      }, this));
    }
  };
  /**
   * Suppresses events.
   * @protected
   * @param {Array.<String>} events - The events to suppress.
   */


  Owl.prototype.suppress = function (events) {
    $.each(events, $.proxy(function (index, event) {
      this._supress[event] = true;
    }, this));
  };
  /**
   * Releases suppressed events.
   * @protected
   * @param {Array.<String>} events - The events to release.
   */


  Owl.prototype.release = function (events) {
    $.each(events, $.proxy(function (index, event) {
      delete this._supress[event];
    }, this));
  };
  /**
   * Gets unified pointer coordinates from event.
   * @todo #261
   * @protected
   * @param {Event} - The `mousedown` or `touchstart` event.
   * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
   */


  Owl.prototype.pointer = function (event) {
    var result = {
      x: null,
      y: null
    };
    event = event.originalEvent || event || window.event;
    event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;

    if (event.pageX) {
      result.x = event.pageX;
      result.y = event.pageY;
    } else {
      result.x = event.clientX;
      result.y = event.clientY;
    }

    return result;
  };
  /**
   * Determines if the input is a Number or something that can be coerced to a Number
   * @protected
   * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
   * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
   */


  Owl.prototype.isNumeric = function (number) {
    return !isNaN(parseFloat(number));
  };
  /**
   * Gets the difference of two vectors.
   * @todo #261
   * @protected
   * @param {Object} - The first vector.
   * @param {Object} - The second vector.
   * @returns {Object} - The difference.
   */


  Owl.prototype.difference = function (first, second) {
    return {
      x: first.x - second.x,
      y: first.y - second.y
    };
  };
  /**
   * The jQuery Plugin for the Owl Carousel
   * @todo Navigation plugin `next` and `prev`
   * @public
   */


  $.fn.owlCarousel = function (option) {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var $this = $(this),
          data = $this.data('owl.carousel');

      if (!data) {
        data = new Owl(this, _typeof(option) == 'object' && option);
        $this.data('owl.carousel', data);
        $.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function (i, event) {
          data.register({
            type: Owl.Type.Event,
            name: event
          });
          data.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {
            if (e.namespace && e.relatedTarget !== this) {
              this.suppress([event]);
              data[event].apply(this, [].slice.call(arguments, 1));
              this.release([event]);
            }
          }, data));
        });
      }

      if (typeof option == 'string' && option.charAt(0) !== '_') {
        data[option].apply(data, args);
      }
    });
  };
  /**
   * The constructor for the jQuery Plugin
   * @public
   */


  $.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);
/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */


;

(function ($, window, document, undefined) {
  /**
   * Creates the auto refresh plugin.
   * @class The Auto Refresh Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var AutoRefresh = function AutoRefresh(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;
    /**
     * Refresh interval.
     * @protected
     * @type {number}
     */

    this._interval = null;
    /**
     * Whether the element is currently visible or not.
     * @protected
     * @type {Boolean}
     */

    this._visible = null;
    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */

    this._handlers = {
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoRefresh) {
          this.watch();
        }
      }, this)
    }; // set default options

    this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options); // register event handlers

    this._core.$element.on(this._handlers);
  };
  /**
   * Default options.
   * @public
   */


  AutoRefresh.Defaults = {
    autoRefresh: true,
    autoRefreshInterval: 500
  };
  /**
   * Watches the element.
   */

  AutoRefresh.prototype.watch = function () {
    if (this._interval) {
      return;
    }

    this._visible = this._core.$element.is(':visible');
    this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
  };
  /**
   * Refreshes the element.
   */


  AutoRefresh.prototype.refresh = function () {
    if (this._core.$element.is(':visible') === this._visible) {
      return;
    }

    this._visible = !this._visible;

    this._core.$element.toggleClass('owl-hidden', !this._visible);

    this._visible && this._core.invalidate('width') && this._core.refresh();
  };
  /**
   * Destroys the plugin.
   */


  AutoRefresh.prototype.destroy = function () {
    var handler, property;
    window.clearInterval(this._interval);

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }

    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);
/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */


;

(function ($, window, document, undefined) {
  /**
   * Creates the lazy plugin.
   * @class The Lazy Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Lazy = function Lazy(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;
    /**
     * Already loaded items.
     * @protected
     * @type {Array.<jQuery>}
     */

    this._loaded = [];
    /**
     * Event handlers.
     * @protected
     * @type {Object}
     */

    this._handlers = {
      'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function (e) {
        if (!e.namespace) {
          return;
        }

        if (!this._core.settings || !this._core.settings.lazyLoad) {
          return;
        }

        if (e.property && e.property.name == 'position' || e.type == 'initialized') {
          var settings = this._core.settings,
              n = settings.center && Math.ceil(settings.items / 2) || settings.items,
              i = settings.center && n * -1 || 0,
              position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
              clones = this._core.clones().length,
              load = $.proxy(function (i, v) {
            this.load(v);
          }, this);

          while (i++ < n) {
            this.load(clones / 2 + this._core.relative(position));
            clones && $.each(this._core.clones(this._core.relative(position)), load);
            position++;
          }
        }
      }, this)
    }; // set the default options

    this._core.options = $.extend({}, Lazy.Defaults, this._core.options); // register event handler

    this._core.$element.on(this._handlers);
  };
  /**
   * Default options.
   * @public
   */


  Lazy.Defaults = {
    lazyLoad: false
  };
  /**
   * Loads all resources of an item at the specified position.
   * @param {Number} position - The absolute position of the item.
   * @protected
   */

  Lazy.prototype.load = function (position) {
    var $item = this._core.$stage.children().eq(position),
        $elements = $item && $item.find('.owl-lazy');

    if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
      return;
    }

    $elements.each($.proxy(function (index, element) {
      var $element = $(element),
          image,
          url = window.devicePixelRatio > 1 && $element.attr('data-src-retina') || $element.attr('data-src');

      this._core.trigger('load', {
        element: $element,
        url: url
      }, 'lazy');

      if ($element.is('img')) {
        $element.one('load.owl.lazy', $.proxy(function () {
          $element.css('opacity', 1);

          this._core.trigger('loaded', {
            element: $element,
            url: url
          }, 'lazy');
        }, this)).attr('src', url);
      } else {
        image = new Image();
        image.onload = $.proxy(function () {
          $element.css({
            'background-image': 'url("' + url + '")',
            'opacity': '1'
          });

          this._core.trigger('loaded', {
            element: $element,
            url: url
          }, 'lazy');
        }, this);
        image.src = url;
      }
    }, this));

    this._loaded.push($item.get(0));
  };
  /**
   * Destroys the plugin.
   * @public
   */


  Lazy.prototype.destroy = function () {
    var handler, property;

    for (handler in this.handlers) {
      this._core.$element.off(handler, this.handlers[handler]);
    }

    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);
/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */


;

(function ($, window, document, undefined) {
  /**
   * Creates the auto height plugin.
   * @class The Auto Height Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var AutoHeight = function AutoHeight(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;
    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */

    this._handlers = {
      'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoHeight) {
          this.update();
        }
      }, this),
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position') {
          this.update();
        }
      }, this),
      'loaded.owl.lazy': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
          this.update();
        }
      }, this)
    }; // set default options

    this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options); // register event handlers

    this._core.$element.on(this._handlers);
  };
  /**
   * Default options.
   * @public
   */


  AutoHeight.Defaults = {
    autoHeight: false,
    autoHeightClass: 'owl-height'
  };
  /**
   * Updates the view.
   */

  AutoHeight.prototype.update = function () {
    var start = this._core._current,
        end = start + this._core.settings.items,
        visible = this._core.$stage.children().toArray().slice(start, end),
        heights = [],
        maxheight = 0;

    $.each(visible, function (index, item) {
      heights.push($(item).height());
    });
    maxheight = Math.max.apply(null, heights);

    this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
  };

  AutoHeight.prototype.destroy = function () {
    var handler, property;

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }

    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);
/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */


;

(function ($, window, document, undefined) {
  /**
   * Creates the video plugin.
   * @class The Video Plugin
   * @param {Owl} carousel - The Owl Carousel
   */
  var Video = function Video(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;
    /**
     * Cache all video URLs.
     * @protected
     * @type {Object}
     */

    this._videos = {};
    /**
     * Current playing item.
     * @protected
     * @type {jQuery}
     */

    this._playing = null;
    /**
     * All event handlers.
     * @todo The cloned content removale is too late
     * @protected
     * @type {Object}
     */

    this._handlers = {
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace) {
          this._core.register({
            type: 'state',
            name: 'playing',
            tags: ['interacting']
          });
        }
      }, this),
      'resize.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
          e.preventDefault();
        }
      }, this),
      'refreshed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.is('resizing')) {
          this._core.$stage.find('.cloned .owl-video-frame').remove();
        }
      }, this),
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name === 'position' && this._playing) {
          this.stop();
        }
      }, this),
      'prepared.owl.carousel': $.proxy(function (e) {
        if (!e.namespace) {
          return;
        }

        var $element = $(e.content).find('.owl-video');

        if ($element.length) {
          $element.css('display', 'none');
          this.fetch($element, $(e.content));
        }
      }, this)
    }; // set default options

    this._core.options = $.extend({}, Video.Defaults, this._core.options); // register event handlers

    this._core.$element.on(this._handlers);

    this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
      this.play(e);
    }, this));
  };
  /**
   * Default options.
   * @public
   */


  Video.Defaults = {
    video: false,
    videoHeight: false,
    videoWidth: false
  };
  /**
   * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
   * @protected
   * @param {jQuery} target - The target containing the video data.
   * @param {jQuery} item - The item containing the video.
   */

  Video.prototype.fetch = function (target, item) {
    var type = function () {
      if (target.attr('data-vimeo-id')) {
        return 'vimeo';
      } else if (target.attr('data-vzaar-id')) {
        return 'vzaar';
      } else {
        return 'youtube';
      }
    }(),
        id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
        width = target.attr('data-width') || this._core.settings.videoWidth,
        height = target.attr('data-height') || this._core.settings.videoHeight,
        url = target.attr('href');

    if (url) {
      /*
      		Parses the id's out of the following urls (and probably more):
      		https://www.youtube.com/watch?v=:id
      		https://youtu.be/:id
      		https://vimeo.com/:id
      		https://vimeo.com/channels/:channel/:id
      		https://vimeo.com/groups/:group/videos/:id
      		https://app.vzaar.com/videos/:id
      			Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
      */
      id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

      if (id[3].indexOf('youtu') > -1) {
        type = 'youtube';
      } else if (id[3].indexOf('vimeo') > -1) {
        type = 'vimeo';
      } else if (id[3].indexOf('vzaar') > -1) {
        type = 'vzaar';
      } else {
        throw new Error('Video URL not supported.');
      }

      id = id[6];
    } else {
      throw new Error('Missing video URL.');
    }

    this._videos[url] = {
      type: type,
      id: id,
      width: width,
      height: height
    };
    item.attr('data-video', url);
    this.thumbnail(target, this._videos[url]);
  };
  /**
   * Creates video thumbnail.
   * @protected
   * @param {jQuery} target - The target containing the video data.
   * @param {Object} info - The video info object.
   * @see `fetch`
   */


  Video.prototype.thumbnail = function (target, video) {
    var tnLink,
        icon,
        path,
        dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
        customTn = target.find('img'),
        srcType = 'src',
        lazyClass = '',
        settings = this._core.settings,
        create = function create(path) {
      icon = '<div class="owl-video-play-icon"></div>';

      if (settings.lazyLoad) {
        tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
      } else {
        tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
      }

      target.after(tnLink);
      target.after(icon);
    }; // wrap video content into owl-video-wrapper div


    target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

    if (this._core.settings.lazyLoad) {
      srcType = 'data-src';
      lazyClass = 'owl-lazy';
    } // custom thumbnail


    if (customTn.length) {
      create(customTn.attr(srcType));
      customTn.remove();
      return false;
    }

    if (video.type === 'youtube') {
      path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
      create(path);
    } else if (video.type === 'vimeo') {
      $.ajax({
        type: 'GET',
        url: '//vimeo.com/api/v2/video/' + video.id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function success(data) {
          path = data[0].thumbnail_large;
          create(path);
        }
      });
    } else if (video.type === 'vzaar') {
      $.ajax({
        type: 'GET',
        url: '//vzaar.com/api/videos/' + video.id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function success(data) {
          path = data.framegrab_url;
          create(path);
        }
      });
    }
  };
  /**
   * Stops the current video.
   * @public
   */


  Video.prototype.stop = function () {
    this._core.trigger('stop', null, 'video');

    this._playing.find('.owl-video-frame').remove();

    this._playing.removeClass('owl-video-playing');

    this._playing = null;

    this._core.leave('playing');

    this._core.trigger('stopped', null, 'video');
  };
  /**
   * Starts the current video.
   * @public
   * @param {Event} event - The event arguments.
   */


  Video.prototype.play = function (event) {
    var target = $(event.target),
        item = target.closest('.' + this._core.settings.itemClass),
        video = this._videos[item.attr('data-video')],
        width = video.width || '100%',
        height = video.height || this._core.$stage.height(),
        html;

    if (this._playing) {
      return;
    }

    this._core.enter('playing');

    this._core.trigger('play', null, 'video');

    item = this._core.items(this._core.relative(item.index()));

    this._core.reset(item.index());

    if (video.type === 'youtube') {
      html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
    } else if (video.type === 'vimeo') {
      html = '<iframe src="//player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    } else if (video.type === 'vzaar') {
      html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' + 'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
    }

    $('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));
    this._playing = item.addClass('owl-video-playing');
  };
  /**
   * Checks whether an video is currently in full screen mode or not.
   * @todo Bad style because looks like a readonly method but changes members.
   * @protected
   * @returns {Boolean}
   */


  Video.prototype.isInFullScreen = function () {
    var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    return element && $(element).parent().hasClass('owl-video-frame');
  };
  /**
   * Destroys the plugin.
   */


  Video.prototype.destroy = function () {
    var handler, property;

    this._core.$element.off('click.owl.video');

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }

    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);
/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */


;

(function ($, window, document, undefined) {
  /**
   * Creates the animate plugin.
   * @class The Navigation Plugin
   * @param {Owl} scope - The Owl Carousel
   */
  var Animate = function Animate(scope) {
    this.core = scope;
    this.core.options = $.extend({}, Animate.Defaults, this.core.options);
    this.swapping = true;
    this.previous = undefined;
    this.next = undefined;
    this.handlers = {
      'change.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name == 'position') {
          this.previous = this.core.current();
          this.next = e.property.value;
        }
      }, this),
      'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
        if (e.namespace) {
          this.swapping = e.type == 'translated';
        }
      }, this),
      'translate.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
          this.swap();
        }
      }, this)
    };
    this.core.$element.on(this.handlers);
  };
  /**
   * Default options.
   * @public
   */


  Animate.Defaults = {
    animateOut: false,
    animateIn: false
  };
  /**
   * Toggles the animation classes whenever an translations starts.
   * @protected
   * @returns {Boolean|undefined}
   */

  Animate.prototype.swap = function () {
    if (this.core.settings.items !== 1) {
      return;
    }

    if (!$.support.animation || !$.support.transition) {
      return;
    }

    this.core.speed(0);
    var left,
        clear = $.proxy(this.clear, this),
        previous = this.core.$stage.children().eq(this.previous),
        next = this.core.$stage.children().eq(this.next),
        incoming = this.core.settings.animateIn,
        outgoing = this.core.settings.animateOut;

    if (this.core.current() === this.previous) {
      return;
    }

    if (outgoing) {
      left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
      previous.one($.support.animation.end, clear).css({
        'left': left + 'px'
      }).addClass('animated owl-animated-out').addClass(outgoing);
    }

    if (incoming) {
      next.one($.support.animation.end, clear).addClass('animated owl-animated-in').addClass(incoming);
    }
  };

  Animate.prototype.clear = function (e) {
    $(e.target).css({
      'left': ''
    }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
    this.core.onTransitionEnd();
  };
  /**
   * Destroys the plugin.
   * @public
   */


  Animate.prototype.destroy = function () {
    var handler, property;

    for (handler in this.handlers) {
      this.core.$element.off(handler, this.handlers[handler]);
    }

    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);
/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */


;

(function ($, window, document, undefined) {
  /**
   * Creates the autoplay plugin.
   * @class The Autoplay Plugin
   * @param {Owl} scope - The Owl Carousel
   */
  var Autoplay = function Autoplay(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;
    /**
     * The autoplay timeout.
     * @type {Timeout}
     */

    this._timeout = null;
    /**
     * Indicates whenever the autoplay is paused.
     * @type {Boolean}
     */

    this._paused = false;
    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */

    this._handlers = {
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name === 'settings') {
          if (this._core.settings.autoplay) {
            this.play();
          } else {
            this.stop();
          }
        } else if (e.namespace && e.property.name === 'position') {
          //console.log('play?', e);
          if (this._core.settings.autoplay) {
            this._setAutoPlayInterval();
          }
        }
      }, this),
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.autoplay) {
          this.play();
        }
      }, this),
      'play.owl.autoplay': $.proxy(function (e, t, s) {
        if (e.namespace) {
          this.play(t, s);
        }
      }, this),
      'stop.owl.autoplay': $.proxy(function (e) {
        if (e.namespace) {
          this.stop();
        }
      }, this),
      'mouseover.owl.autoplay': $.proxy(function () {
        if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
          this.pause();
        }
      }, this),
      'mouseleave.owl.autoplay': $.proxy(function () {
        if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
          this.play();
        }
      }, this),
      'touchstart.owl.core': $.proxy(function () {
        if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
          this.pause();
        }
      }, this),
      'touchend.owl.core': $.proxy(function () {
        if (this._core.settings.autoplayHoverPause) {
          this.play();
        }
      }, this)
    }; // register event handlers

    this._core.$element.on(this._handlers); // set default options


    this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
  };
  /**
   * Default options.
   * @public
   */


  Autoplay.Defaults = {
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplaySpeed: false
  };
  /**
   * Starts the autoplay.
   * @public
   * @param {Number} [timeout] - The interval before the next animation starts.
   * @param {Number} [speed] - The animation speed for the animations.
   */

  Autoplay.prototype.play = function (timeout, speed) {
    this._paused = false;

    if (this._core.is('rotating')) {
      return;
    }

    this._core.enter('rotating');

    this._setAutoPlayInterval();
  };
  /**
   * Gets a new timeout
   * @private
   * @param {Number} [timeout] - The interval before the next animation starts.
   * @param {Number} [speed] - The animation speed for the animations.
   * @return {Timeout}
   */


  Autoplay.prototype._getNextTimeout = function (timeout, speed) {
    if (this._timeout) {
      window.clearTimeout(this._timeout);
    }

    return window.setTimeout($.proxy(function () {
      if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
        return;
      }

      this._core.next(speed || this._core.settings.autoplaySpeed);
    }, this), timeout || this._core.settings.autoplayTimeout);
  };
  /**
   * Sets autoplay in motion.
   * @private
   */


  Autoplay.prototype._setAutoPlayInterval = function () {
    this._timeout = this._getNextTimeout();
  };
  /**
   * Stops the autoplay.
   * @public
   */


  Autoplay.prototype.stop = function () {
    if (!this._core.is('rotating')) {
      return;
    }

    window.clearTimeout(this._timeout);

    this._core.leave('rotating');
  };
  /**
   * Stops the autoplay.
   * @public
   */


  Autoplay.prototype.pause = function () {
    if (!this._core.is('rotating')) {
      return;
    }

    this._paused = true;
  };
  /**
   * Destroys the plugin.
   */


  Autoplay.prototype.destroy = function () {
    var handler, property;
    this.stop();

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }

    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);
/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */


;

(function ($, window, document, undefined) {
  'use strict';
  /**
   * Creates the navigation plugin.
   * @class The Navigation Plugin
   * @param {Owl} carousel - The Owl Carousel.
   */

  var Navigation = function Navigation(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;
    /**
     * Indicates whether the plugin is initialized or not.
     * @protected
     * @type {Boolean}
     */

    this._initialized = false;
    /**
     * The current paging indexes.
     * @protected
     * @type {Array}
     */

    this._pages = [];
    /**
     * All DOM elements of the user interface.
     * @protected
     * @type {Object}
     */

    this._controls = {};
    /**
     * Markup for an indicator.
     * @protected
     * @type {Array.<String>}
     */

    this._templates = [];
    /**
     * The carousel element.
     * @type {jQuery}
     */

    this.$element = this._core.$element;
    /**
     * Overridden methods of the carousel.
     * @protected
     * @type {Object}
     */

    this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    };
    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */

    this._handlers = {
      'prepared.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
        }
      }, this),
      'added.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.splice(e.position, 0, this._templates.pop());
        }
      }, this),
      'remove.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.dotsData) {
          this._templates.splice(e.position, 1);
        }
      }, this),
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name == 'position') {
          this.draw();
        }
      }, this),
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace && !this._initialized) {
          this._core.trigger('initialize', null, 'navigation');

          this.initialize();
          this.update();
          this.draw();
          this._initialized = true;

          this._core.trigger('initialized', null, 'navigation');
        }
      }, this),
      'refreshed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._initialized) {
          this._core.trigger('refresh', null, 'navigation');

          this.update();
          this.draw();

          this._core.trigger('refreshed', null, 'navigation');
        }
      }, this)
    }; // set default options

    this._core.options = $.extend({}, Navigation.Defaults, this._core.options); // register event handlers

    this.$element.on(this._handlers);
  };
  /**
   * Default options.
   * @public
   * @todo Rename `slideBy` to `navBy`
   */


  Navigation.Defaults = {
    nav: false,
    navText: ['prev', 'next'],
    navSpeed: false,
    navElement: 'div',
    navContainer: false,
    navContainerClass: 'owl-nav',
    navClass: ['owl-prev', 'owl-next'],
    slideBy: 1,
    dotClass: 'owl-dot',
    dotsClass: 'owl-dots',
    dots: true,
    dotsEach: false,
    dotsData: false,
    dotsSpeed: false,
    dotsContainer: false
  };
  /**
   * Initializes the layout of the plugin and extends the carousel.
   * @protected
   */

  Navigation.prototype.initialize = function () {
    var override,
        settings = this._core.settings; // create DOM structure for relative navigation

    this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
    this._controls.$previous = $('<' + settings.navElement + '>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click', $.proxy(function (e) {
      this.prev(settings.navSpeed);
    }, this));
    this._controls.$next = $('<' + settings.navElement + '>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click', $.proxy(function (e) {
      this.next(settings.navSpeed);
    }, this)); // create DOM structure for absolute navigation

    if (!settings.dotsData) {
      this._templates = [$('<div>').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')];
    }

    this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

    this._controls.$absolute.on('click', 'div', $.proxy(function (e) {
      var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();
      e.preventDefault();
      this.to(index, settings.dotsSpeed);
    }, this)); // override public methods of the carousel


    for (override in this._overrides) {
      this._core[override] = $.proxy(this[override], this);
    }
  };
  /**
   * Destroys the plugin.
   * @protected
   */


  Navigation.prototype.destroy = function () {
    var handler, control, property, override;

    for (handler in this._handlers) {
      this.$element.off(handler, this._handlers[handler]);
    }

    for (control in this._controls) {
      this._controls[control].remove();
    }

    for (override in this.overides) {
      this._core[override] = this._overrides[override];
    }

    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };
  /**
   * Updates the internal state.
   * @protected
   */


  Navigation.prototype.update = function () {
    var i,
        j,
        k,
        lower = this._core.clones().length / 2,
        upper = lower + this._core.items().length,
        maximum = this._core.maximum(true),
        settings = this._core.settings,
        size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;

    if (settings.slideBy !== 'page') {
      settings.slideBy = Math.min(settings.slideBy, settings.items);
    }

    if (settings.dots || settings.slideBy == 'page') {
      this._pages = [];

      for (i = lower, j = 0, k = 0; i < upper; i++) {
        if (j >= size || j === 0) {
          this._pages.push({
            start: Math.min(maximum, i - lower),
            end: i - lower + size - 1
          });

          if (Math.min(maximum, i - lower) === maximum) {
            break;
          }

          j = 0, ++k;
        }

        j += this._core.mergers(this._core.relative(i));
      }
    }
  };
  /**
   * Draws the user interface.
   * @todo The option `dotsData` wont work.
   * @protected
   */


  Navigation.prototype.draw = function () {
    var difference,
        settings = this._core.settings,
        disabled = this._core.items().length <= settings.items,
        index = this._core.relative(this._core.current()),
        loop = settings.loop || settings.rewind;

    this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

    if (settings.nav) {
      this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));

      this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
    }

    this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

    if (settings.dots) {
      difference = this._pages.length - this._controls.$absolute.children().length;

      if (settings.dotsData && difference !== 0) {
        this._controls.$absolute.html(this._templates.join(''));
      } else if (difference > 0) {
        this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
      } else if (difference < 0) {
        this._controls.$absolute.children().slice(difference).remove();
      }

      this._controls.$absolute.find('.active').removeClass('active');

      this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
    }
  };
  /**
   * Extends event data.
   * @protected
   * @param {Event} event - The event object which gets thrown.
   */


  Navigation.prototype.onTrigger = function (event) {
    var settings = this._core.settings;
    event.page = {
      index: $.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
    };
  };
  /**
   * Gets the current page position of the carousel.
   * @protected
   * @returns {Number}
   */


  Navigation.prototype.current = function () {
    var current = this._core.relative(this._core.current());

    return $.grep(this._pages, $.proxy(function (page, index) {
      return page.start <= current && page.end >= current;
    }, this)).pop();
  };
  /**
   * Gets the current succesor/predecessor position.
   * @protected
   * @returns {Number}
   */


  Navigation.prototype.getPosition = function (successor) {
    var position,
        length,
        settings = this._core.settings;

    if (settings.slideBy == 'page') {
      position = $.inArray(this.current(), this._pages);
      length = this._pages.length;
      successor ? ++position : --position;
      position = this._pages[(position % length + length) % length].start;
    } else {
      position = this._core.relative(this._core.current());
      length = this._core.items().length;
      successor ? position += settings.slideBy : position -= settings.slideBy;
    }

    return position;
  };
  /**
   * Slides to the next item or page.
   * @public
   * @param {Number} [speed=false] - The time in milliseconds for the transition.
   */


  Navigation.prototype.next = function (speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
  };
  /**
   * Slides to the previous item or page.
   * @public
   * @param {Number} [speed=false] - The time in milliseconds for the transition.
   */


  Navigation.prototype.prev = function (speed) {
    $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
  };
  /**
   * Slides to the specified item or page.
   * @public
   * @param {Number} position - The position of the item or page.
   * @param {Number} [speed] - The time in milliseconds for the transition.
   * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
   */


  Navigation.prototype.to = function (position, speed, standard) {
    var length;

    if (!standard && this._pages.length) {
      length = this._pages.length;
      $.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
    } else {
      $.proxy(this._overrides.to, this._core)(position, speed);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);
/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */


;

(function ($, window, document, undefined) {
  'use strict';
  /**
   * Creates the hash plugin.
   * @class The Hash Plugin
   * @param {Owl} carousel - The Owl Carousel
   */

  var Hash = function Hash(carousel) {
    /**
     * Reference to the core.
     * @protected
     * @type {Owl}
     */
    this._core = carousel;
    /**
     * Hash index for the items.
     * @protected
     * @type {Object}
     */

    this._hashes = {};
    /**
     * The carousel element.
     * @type {jQuery}
     */

    this.$element = this._core.$element;
    /**
     * All event handlers.
     * @protected
     * @type {Object}
     */

    this._handlers = {
      'initialized.owl.carousel': $.proxy(function (e) {
        if (e.namespace && this._core.settings.startPosition === 'URLHash') {
          $(window).trigger('hashchange.owl.navigation');
        }
      }, this),
      'prepared.owl.carousel': $.proxy(function (e) {
        if (e.namespace) {
          var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

          if (!hash) {
            return;
          }

          this._hashes[hash] = e.content;
        }
      }, this),
      'changed.owl.carousel': $.proxy(function (e) {
        if (e.namespace && e.property.name === 'position') {
          var current = this._core.items(this._core.relative(this._core.current())),
              hash = $.map(this._hashes, function (item, hash) {
            return item === current ? hash : null;
          }).join();

          if (!hash || window.location.hash.slice(1) === hash) {
            return;
          }

          window.location.hash = hash;
        }
      }, this)
    }; // set default options

    this._core.options = $.extend({}, Hash.Defaults, this._core.options); // register the event handlers

    this.$element.on(this._handlers); // register event listener for hash navigation

    $(window).on('hashchange.owl.navigation', $.proxy(function (e) {
      var hash = window.location.hash.substring(1),
          items = this._core.$stage.children(),
          position = this._hashes[hash] && items.index(this._hashes[hash]);

      if (position === undefined || position === this._core.current()) {
        return;
      }

      this._core.to(this._core.relative(position), false, true);
    }, this));
  };
  /**
   * Default options.
   * @public
   */


  Hash.Defaults = {
    URLhashListener: false
  };
  /**
   * Destroys the plugin.
   * @public
   */

  Hash.prototype.destroy = function () {
    var handler, property;
    $(window).off('hashchange.owl.navigation');

    for (handler in this._handlers) {
      this._core.$element.off(handler, this._handlers[handler]);
    }

    for (property in Object.getOwnPropertyNames(this)) {
      typeof this[property] != 'function' && (this[property] = null);
    }
  };

  $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);
/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */


;

(function ($, window, document, undefined) {
  var style = $('<support>').get(0).style,
      prefixes = 'Webkit Moz O ms'.split(' '),
      events = {
    transition: {
      end: {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd',
        transition: 'transitionend'
      }
    },
    animation: {
      end: {
        WebkitAnimation: 'webkitAnimationEnd',
        MozAnimation: 'animationend',
        OAnimation: 'oAnimationEnd',
        animation: 'animationend'
      }
    }
  },
      tests = {
    csstransforms: function csstransforms() {
      return !!test('transform');
    },
    csstransforms3d: function csstransforms3d() {
      return !!test('perspective');
    },
    csstransitions: function csstransitions() {
      return !!test('transition');
    },
    cssanimations: function cssanimations() {
      return !!test('animation');
    }
  };

  function test(property, prefixed) {
    var result = false,
        upper = property.charAt(0).toUpperCase() + property.slice(1);
    $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {
      if (style[property] !== undefined) {
        result = prefixed ? property : true;
        return false;
      }
    });
    return result;
  }

  function prefixed(property) {
    return test(property, true);
  }

  if (tests.csstransitions()) {
    /* jshint -W053 */
    $.support.transition = new String(prefixed('transition'));
    $.support.transition.end = events.transition.end[$.support.transition];
  }

  if (tests.cssanimations()) {
    /* jshint -W053 */
    $.support.animation = new String(prefixed('animation'));
    $.support.animation.end = events.animation.end[$.support.animation];
  }

  if (tests.csstransforms()) {
    /* jshint -W053 */
    $.support.transform = new String(prefixed('transform'));
    $.support.transform3d = tests.csstransforms3d();
  }
})(window.Zepto || window.jQuery, window, document);

/***/ }),

/***/ "./resources/js/parallax.min.js":
/*!**************************************!*\
  !*** ./resources/js/parallax.min.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function (t, i, e, s) {
  function o(i, e) {
    var h = this;
    "object" == _typeof(e) && (delete e.refresh, delete e.render, t.extend(this, e)), this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
    var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
    if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), "top" != r[0] && "bottom" != r[0] && "left" != r[1] && "right" != r[1] || (r = [r[1], r[0]]), this.positionX !== s && (r[0] = this.positionX.toLowerCase()), this.positionY !== s && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
      backgroundImage: 'url("' + this.imageSrc + '")',
      backgroundSize: "cover",
      backgroundPosition: this.position
    }), this;
    if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
      backgroundImage: 'url("' + this.imageSrc + '")',
      backgroundSize: "cover",
      backgroundPosition: this.position
    }), this;
    this.$mirror = t("<div />").prependTo(this.mirrorContainer);
    var a = this.$element.find(">.parallax-slider"),
        n = !1;
    0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), n = !0), this.$mirror.addClass("parallax-mirror").css({
      visibility: "hidden",
      zIndex: this.zIndex,
      position: "fixed",
      top: 0,
      left: 0,
      overflow: "hidden"
    }), this.$slider.addClass("parallax-slider").one("load", function () {
      h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender();
    }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load");
  }

  !function () {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s) {
      i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"];
    }

    i.requestAnimationFrame || (i.requestAnimationFrame = function (e) {
      var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - t)),
          h = i.setTimeout(function () {
        e(s + o);
      }, o);
      return t = s + o, h;
    }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (t) {
      clearTimeout(t);
    });
  }(), t.extend(o.prototype, {
    speed: .2,
    bleed: 0,
    zIndex: -100,
    iosFix: !0,
    androidFix: !0,
    position: "center",
    overScrollFix: !1,
    mirrorContainer: "body",
    refresh: function refresh() {
      this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
      var t,
          i = o.winHeight,
          e = o.docHeight,
          s = Math.min(this.boxOffsetTop, e - i),
          h = Math.max(this.boxOffsetTop + this.boxHeight - i, 0),
          r = this.boxHeight + (s - h) * (1 - this.speed) | 0,
          a = (this.boxOffsetTop - s) * (1 - this.speed) | 0;
      r * this.aspectRatio >= this.boxWidth ? (this.imageWidth = r * this.aspectRatio | 0, this.imageHeight = r, this.offsetBaseTop = a, t = this.imageWidth - this.boxWidth, "left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -t : isNaN(this.positionX) ? this.offsetLeft = -t / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -t)) : (this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0, t = this.imageHeight - r, "top" == this.positionY ? this.offsetBaseTop = a : "bottom" == this.positionY ? this.offsetBaseTop = a - t : isNaN(this.positionY) ? this.offsetBaseTop = a - t / 2 | 0 : this.offsetBaseTop = a + Math.max(this.positionY, -t));
    },
    render: function render() {
      var t = o.scrollTop,
          i = o.scrollLeft,
          e = this.overScrollFix ? o.overScroll : 0,
          s = t + o.winHeight;
      this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
        transform: "translate3d(" + this.mirrorLeft + "px, " + (this.mirrorTop - e) + "px, 0px)",
        visibility: this.visibility,
        height: this.boxHeight,
        width: this.boxWidth
      }), this.$slider.css({
        transform: "translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)",
        position: "absolute",
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: "none"
      });
    }
  }), t.extend(o, {
    scrollTop: 0,
    scrollLeft: 0,
    winHeight: 0,
    winWidth: 0,
    docHeight: 1 << 30,
    docWidth: 1 << 30,
    sliders: [],
    isReady: !1,
    isFresh: !1,
    isBusy: !1,
    setup: function setup() {
      function s() {
        if (p == i.pageYOffset) return i.requestAnimationFrame(s), !1;
        p = i.pageYOffset, h.render(), i.requestAnimationFrame(s);
      }

      if (!this.isReady) {
        var h = this,
            r = t(e),
            a = t(i),
            n = function n() {
          o.winHeight = a.height(), o.winWidth = a.width(), o.docHeight = r.height(), o.docWidth = r.width();
        },
            l = function l() {
          var t = a.scrollTop(),
              i = o.docHeight - o.winHeight,
              e = o.docWidth - o.winWidth;
          o.scrollTop = Math.max(0, Math.min(i, t)), o.scrollLeft = Math.max(0, Math.min(e, a.scrollLeft())), o.overScroll = Math.max(t - i, Math.min(t, 0));
        };

        a.on("resize.px.parallax load.px.parallax", function () {
          n(), h.refresh(), o.isFresh = !1, o.requestRender();
        }).on("scroll.px.parallax load.px.parallax", function () {
          l(), o.requestRender();
        }), n(), l(), this.isReady = !0;
        var p = -1;
        s();
      }
    },
    configure: function configure(i) {
      "object" == _typeof(i) && (delete i.refresh, delete i.render, t.extend(this.prototype, i));
    },
    refresh: function refresh() {
      t.each(this.sliders, function () {
        this.refresh();
      }), this.isFresh = !0;
    },
    render: function render() {
      this.isFresh || this.refresh(), t.each(this.sliders, function () {
        this.render();
      });
    },
    requestRender: function requestRender() {
      var t = this;
      t.render(), t.isBusy = !1;
    },
    destroy: function destroy(e) {
      var s,
          h = t(e).data("px.parallax");

      for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1) {
        this.sliders[s] == h && this.sliders.splice(s, 1);
      }

      t(e).data("px.parallax", !1), 0 === this.sliders.length && (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1);
    }
  });
  var h = t.fn.parallax;
  t.fn.parallax = function (s) {
    return this.each(function () {
      var h = t(this),
          r = "object" == _typeof(s) && s;
      this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") ? "object" == _typeof(s) && t.extend(h.data("px.parallax"), r) : (r = t.extend({}, h.data(), r), h.data("px.parallax", new o(this, r))), "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]());
    });
  }, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function () {
    return t.fn.parallax = h, this;
  }, t(function () {
    t('[data-parallax="scroll"]').parallax();
  });
}(jQuery, window, document);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\hamzaMall\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\hamzaMall\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });