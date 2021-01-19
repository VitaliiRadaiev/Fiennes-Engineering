"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

Number.isNaN = Number.isNaN || function (value) {
  return typeof value === 'number' && isNaN(value);
};

if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    'use strict';

    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }

    var str = '' + this;
    count = +count;

    if (count != count) {
      count = 0;
    }

    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }

    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }

    count = Math.floor(count);

    if (str.length == 0 || count == 0) {
      return '';
    } // Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
    // соптимизировать главную часть функции. Впрочем, большинство современных (на август
    // 2014 года) браузеров не обрабатывают строки, длиннее 1 << 28 символов, так что:


    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }

    var rpt = '';

    for (var i = 0; i < count; i++) {
      rpt += str;
    }

    return rpt;
  };
}

function get_name_browser() {
  var ua = navigator.userAgent;
  if (ua.search(/YaBrowser/) > 0) return 'Яндекс Браузер';
  if (ua.search(/rv:11.0/) > 0) return 'Internet Explorer 11';
  if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
  if (ua.search(/Edge/) > 0) return 'Edge';
  if (ua.search(/Chrome/) > 0) return 'Google Chrome';
  if (ua.search(/Firefox/) > 0) return 'Firefox';
  if (ua.search(/Opera/) > 0) return 'Opera';
  if (ua.search(/Safari/) > 0) return 'Safari';
  return 'Не определен';
}

var browser = get_name_browser();

if (browser == 'Edge' || 'Internet Explorer') {
  var videos = document.querySelectorAll('.video-block');

  if (videos.length > 0) {
    videos.forEach(function (item) {
      item.classList.add('objectFitVideoPoly');
    });
  }
} //SlideToggle


var _slideUp = function _slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
};

var _slideDown = function _slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
};

var _slideToggle = function _slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');

    if (window.getComputedStyle(target).display === 'none') {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
}; //========================================
//========================================
//Spollers


function spollerInit() {
  var spollers = document.querySelectorAll("._spoller");

  if (spollers.length > 0) {
    var _loop = function _loop(index) {
      var spoller = spollers[index];
      spoller.addEventListener("click", function (e) {
        e.preventDefault();

        if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
          return false;
        }

        if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
          return false;
        }

        if (spoller.closest('._spollers').classList.contains('_one')) {
          var curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');

          for (var i = 0; i < curent_spollers.length; i++) {
            var el = curent_spollers[i];

            if (el != spoller) {
              el.classList.remove('_active');
              el.parentElement.classList.remove('_active');

              _slideUp(el.nextElementSibling);
            }
          }
        }

        spoller.classList.toggle('_active');

        if (spoller.classList.contains('_active')) {
          spoller.parentElement.classList.add('_active');
        } else {
          spoller.parentElement.classList.remove('_active');
        }

        _slideToggle(spoller.nextElementSibling);
      });
    };

    for (var index = 0; index < spollers.length; index++) {
      _loop(index);
    }
  }
} //


$(document).ready(function () {
  // ==== Popup form handler====
  var popupLinks = document.querySelectorAll('.popup-link');
  var body = document.querySelector('body');
  var lockPadding = document.querySelectorAll('.lock-padding');
  var unlock = true;
  var timeout = 800;

  if (popupLinks.length > 0) {
    var _loop2 = function _loop2(index) {
      var popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
        var popupName = popupLink.getAttribute('href').replace('#', '');
        var curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
      });
    };

    for (var index = 0; index < popupLinks.length; index++) {
      _loop2(index);
    }
  }

  var popupCloseIcon = document.querySelectorAll('.close-popup');

  if (popupCloseIcon.length > 0) {
    var _loop3 = function _loop3(_index) {
      var el = popupCloseIcon[_index];
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    };

    for (var _index = 0; _index < popupCloseIcon.length; _index++) {
      _loop3(_index);
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      var popupActive = document.querySelector('.popup.open');

      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }

      curentPopup.classList.add('open');
      curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup_content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }

  function popupClose(popupActive) {
    var doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (unlock) {
      popupActive.classList.remove('open');

      if (doUnlock) {
        bodyUnlock();
      }
    }
  }

  function bodyLock() {
    var lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

    if (lockPadding.length > 0) {
      for (var _index2 = 0; _index2 < lockPadding.length; _index2++) {
        var el = lockPadding[_index2];
        el.style.paddingRight = lockPaddingValue;
      }
    }

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnlock() {
    setTimeout(function () {
      for (var _index3 = 0; _index3 < lockPadding.length; _index3++) {
        var el = lockPadding[_index3];
        el.style.paddingRight = '0px';
      }

      body.style.paddingRight = '0px';
      body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      var popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
    }
  }); // === Polyfill ===

  (function () {
    if (!Element.prototype.closest) {
      Element.prototype.closest = function (css) {
        var node = this;

        while (node) {
          if (node.matches(css)) return node;else node == node.parentElement;
        }

        return null;
      };
    }
  })();

  (function () {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.mozMatchesSelector;
    }
  })(); // === AND Polyfill ===;
  // === Burger Handler =====================================================================


  function burgerBtnAnimation(e) {
    $('.burger span:nth-child(1)').toggleClass('first');
    $('.burger span:nth-child(2)').toggleClass('second');
    $('.burger span:nth-child(3)').toggleClass('third');
    $('.burger span:nth-child(4)').toggleClass('fourth');
    var classNameElem = document.querySelector('.burger').dataset.activel;
    document.querySelector(".".concat(classNameElem)).classList.toggle('open');

    _slideToggle(document.querySelector(".".concat(classNameElem)));
  }

  $('.burger').click(function (e) {
    return burgerBtnAnimation(e);
  }); // === Burger Handler =====================================================================	;

  var animItems = document.querySelectorAll('._anim-items');

  if (animItems.length > 0) {
    var animOnScroll = function animOnScroll() {
      for (var _index4 = 0; _index4 < animItems.length; _index4++) {
        var animItem = animItems[_index4];
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    };

    var offset = function offset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    window.addEventListener('scroll', animOnScroll);
    setTimeout(function () {
      animOnScroll();
    }, 300);
  }

  ;

  var objectFitVideos = function objectFitVideos(t) {
    "use strict";

    function e(t) {
      for (var e = getComputedStyle(t).fontFamily, o = null, i = {}; null !== (o = l.exec(e));) {
        i[o[1]] = o[2];
      }

      return i["object-position"] ? n(i) : i;
    }

    function o(t) {
      var o = -1;
      t ? "length" in t || (t = [t]) : t = document.querySelectorAll("video");

      for (; t[++o];) {
        var n = e(t[o]);
        (n["object-fit"] || n["object-position"]) && (n["object-fit"] = n["object-fit"] || "fill", i(t[o], n));
      }
    }

    function i(t, e) {
      function o() {
        var o = t.videoWidth,
            n = t.videoHeight,
            d = o / n,
            a = r.clientWidth,
            c = r.clientHeight,
            p = a / c,
            l = 0,
            s = 0;
        i.marginLeft = i.marginTop = 0, (d < p ? "contain" === e["object-fit"] : "cover" === e["object-fit"]) ? (l = c * d, s = a / d, i.width = Math.round(l) + "px", i.height = c + "px", "left" === e["object-position-x"] ? i.marginLeft = 0 : "right" === e["object-position-x"] ? i.marginLeft = Math.round(a - l) + "px" : i.marginLeft = Math.round((a - l) / 2) + "px") : (s = a / d, i.width = a + "px", i.height = Math.round(s) + "px", "top" === e["object-position-y"] ? i.marginTop = 0 : "bottom" === e["object-position-y"] ? i.marginTop = Math.round(c - s) + "px" : i.marginTop = Math.round((c - s) / 2) + "px"), t.autoplay && t.play();
      }

      if ("fill" !== e["object-fit"]) {
        var i = t.style,
            n = window.getComputedStyle(t),
            r = document.createElement("object-fit");
        r.appendChild(t.parentNode.replaceChild(r, t));
        var d = {
          height: "100%",
          width: "100%",
          boxSizing: "content-box",
          display: "inline-block",
          overflow: "hidden"
        };
        "backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight left opacity margin position right top visibility".replace(/\w+/g, function (t) {
          d[t] = n[t];
        });

        for (var a in d) {
          r.style[a] = d[a];
        }

        i.border = i.margin = i.padding = 0, i.display = "block", i.opacity = 1, t.addEventListener("loadedmetadata", o), window.addEventListener("optimizedResize", o), t.readyState >= 1 && (t.removeEventListener("loadedmetadata", o), o());
      }
    }

    function n(t) {
      return ~t["object-position"].indexOf("left") ? t["object-position-x"] = "left" : ~t["object-position"].indexOf("right") ? t["object-position-x"] = "right" : t["object-position-x"] = "center", ~t["object-position"].indexOf("top") ? t["object-position-y"] = "top" : ~t["object-position"].indexOf("bottom") ? t["object-position-y"] = "bottom" : t["object-position-y"] = "center", t;
    }

    function r(t, e, o) {
      o = o || window;
      var i = !1,
          n = null;

      try {
        n = new CustomEvent(e);
      } catch (t) {
        n = document.createEvent("Event"), n.initEvent(e, !0, !0);
      }

      var r = function r() {
        i || (i = !0, requestAnimationFrame(function () {
          o.dispatchEvent(n), i = !1;
        }));
      };

      o.addEventListener(t, r);
    }

    var d = navigator.userAgent.indexOf("Edge/") >= 0,
        a = new Image(),
        c = "object-fit" in a.style && !d,
        p = "object-position" in a.style && !d,
        l = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;
    c && p || (o(t), r("resize", "optimizedResize"));
  };

  "undefined" != typeof module && "undefined" != typeof module.exports && (module.exports = objectFitVideos);
  ; // === Проверка, поддержка браузером формата webp ==================================================================

  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  }); // === // Проверка, поддержка браузером формата webp ==================================================================
  // === Конвертация svg картинки в svg код ==================================================================

  $('img.img-svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
      var $svg = $(data).find('svg');

      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      $svg = $svg.removeAttr('xmlns:a');

      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
      }

      $img.replaceWith($svg);
    }, 'xml');
  }); // === // Конвертация svg картинки в svg код ==================================================================
  // === COMMON ==================================================================

  function cardJournalHandler() {
    var cards = document.querySelectorAll('.card-journal');

    if (cards.length > 0) {
      cards.forEach(function (card) {
        var textBlock = card.querySelector('.card-journal__text');

        if (textBlock.innerText.length >= 200) {
          textBlock.innerText = _toConsumableArray(textBlock.innerText).slice(0, 200).join('') + '...';
        }
      });
    }
  }

  cardJournalHandler();
  ; // ==  slider ==========================================================================

  {
    var slider = document.querySelectorAll('.reviews-slider');

    if (slider.length > 0) {
      slider.forEach(function (item) {
        var paginationMode = null;
        var mySwiper = new Swiper(item.querySelector('.swiper-container'), {
          slidesPerView: 1,
          autoHeight: true,
          //loop: true,
          speed: 600,
          spaceBetween: 15,
          autoplay: {
            delay: 8000,
            disableOnInteraction: false
          },
          // scrollbar: {
          //   el: item.querySelector('.swiper-scrollbar'),
          // },
          pagination: {
            el: item.querySelector('.swiper-pagination'),
            clickable: true,
            renderBullet: function renderBullet(index, className) {
              return '<div class="' + className + '"> <span class="progress"></span> </div>';
            }
          },
          on: {
            slideChangeTransitionStart: function slideChangeTransitionStart(current) {
              var pagination = item.querySelector('.swiper-pagination');
              var lenght = pagination.children.length;

              for (var i = 0; i < lenght; i++) {
                if (i == current.activeIndex) break;
                pagination.children[i].classList.add('isShow');
              }

              for (var _i = current.activeIndex; _i < lenght; _i++) {
                pagination.children[_i].classList.remove('isShow');

                pagination.children[_i].firstElementChild.style.transform = 'scaleX(0)';
              }
            }
          }
        });
      });
    }
  } // == and  slider ==========================================================================

  ;

  function cardVideoHandler() {
    function togglePlayPause(video, btn) {
      if (video.paused) {
        video.play();
        btn.firstElementChild.className = 'icon-pause2';
      } else {
        video.pause();
        btn.firstElementChild.className = 'icon-play3';
      }
    }

    var videoBlock = document.querySelectorAll('.video-block');

    if (videoBlock.length) {
      var timerId;
      videoBlock.forEach(function (item) {
        //let videoWrap = card.querySelector('.card-video__video-wrap');
        var video = item.querySelector('.video-block__video');
        var btn = item.querySelector('.video-block__play-pause'); //let time = item.querySelector('.card-video__duration-time');
        //let btnLink = item.querySelector('.card-video__btn');

        if (video) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();
            togglePlayPause(video, btn);
          });
          video.addEventListener('ended', function () {
            video.pause();
            btn.firstElementChild.className = 'icon-play3';
          });
          video.addEventListener('mousemove', function (e) {
            if (!video.paused) {
              btn.style.opacity = '1';
              clearTimeout(timerId);
              timerId = setTimeout(function () {
                btn.style.opacity = '0';
              }, 2000);
            } else {
              btn.style.opacity = '1';
            }
          });
        }
      });
    }
  }

  cardVideoHandler();
  ; // ==  slider ==========================================================================

  {
    var _slider = document.querySelectorAll('.slider-text');

    if (_slider.length > 0) {
      _slider.forEach(function (item) {
        var mySwiper = new Swiper(item.querySelector('.slider-text__body'), {
          slidesPerView: 1,
          //loop: true,
          speed: 600,
          autoplay: {
            delay: 8000,
            disableOnInteraction: false
          },
          spaceBetween: 15,
          pagination: {
            el: item.querySelector('.swiper-pagination'),
            clickable: true,
            renderBullet: function renderBullet(index, className) {
              return '<div class="' + className + '"> <span class="progress"></span> </div>';
            }
          },
          on: {
            slideChangeTransitionStart: function slideChangeTransitionStart(current) {
              var pagination = item.querySelector('.swiper-pagination');
              var lenght = pagination.children.length;

              for (var i = 0; i < lenght; i++) {
                if (i == current.activeIndex) break;
                pagination.children[i].classList.add('isShow');
              }

              for (var _i2 = current.activeIndex; _i2 < lenght; _i2++) {
                pagination.children[_i2].classList.remove('isShow');

                pagination.children[_i2].firstElementChild.style.transform = 'scaleX(0)';
              }
            }
          }
        });
        var sliderBg = new Swiper(item.querySelector('.slider-text__bg'), {
          slidesPerView: 1,
          speed: 600,
          effect: 'fade'
        });
        mySwiper.controller.control = sliderBg;
      });
    }
  } // == and  slider ==========================================================================

  ; // === COMMON ==================================================================
  // === HEADER ==================================================================

  {
    var mobileTopBtn = document.querySelector('.header__mobile-btn');

    if (mobileTopBtn) {
      mobileTopBtn.addEventListener('click', function () {
        if (document.documentElement.clientWidth < 768) {
          this.classList.toggle('_active');

          _slideToggle(this.nextElementSibling);
        }
      });
    }
  }
  {
    var btn = document.querySelector('.header__switch-btn');
    {
      if (btn) {
        btn.addEventListener('click', function (e) {
          if (document.documentElement.clientWidth < 992) {
            if (e.target.closest('.drop-menu')) return;
            btn.classList.toggle('active');
            btn.querySelector('.drop-menu').classList.toggle('active');
          }
        });
        document.body.addEventListener('click', function (e) {
          if (document.documentElement.clientWidth < 992) {
            if (!e.target.closest('.header__switch-btn')) {
              btn.classList.remove('active');
              btn.querySelector('.drop-menu').classList.remove('active');
            }
          }
        });
      }
    }
  }
  {
    (function () {
      var navMenu = document.querySelector('.header__menu-list');

      if (navMenu) {
        var _iterator = _createForOfIteratorHelper(navMenu.children),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            var link = item.querySelector('a');
            link.addEventListener('click', function (e) {
              if (document.documentElement.clientWidth < 992) {
                console.log(this.nextElementSibling);

                if (this.nextElementSibling) {
                  if (!this.classList.contains('_active')) {
                    e.preventDefault();
                    this.classList.toggle('_active');

                    _slideToggle(this.nextElementSibling);
                  }
                }

                var _iterator2 = _createForOfIteratorHelper(navMenu.children),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var i = _step2.value;

                    var _link = i.querySelector('a');

                    if (_link == this) {
                      continue;
                    }

                    if (_link.nextElementSibling) {
                      _link.classList.remove('_active');

                      _slideUp(_link.nextElementSibling);
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    })();
  }
  ; // === // HEADER ==================================================================
  // === HOME ==================================================================
  // // == hero slider ==========================================================================
  // {
  // 	let heroSlider = document.querySelector('.hero-slider .swiper-container');
  // 	if(heroSlider) {
  // 		var mySwiper = new Swiper(heroSlider, {
  // 		slidesPerView:1,
  // 		//loop: true,
  // 		effect: 'fade',
  // 		autoplay: {
  // 		  delay: 4000,
  // 		},
  // 		speed: 1000,
  // 		// pagination: {
  // 		//     el: heroSlider.querySelector('.swiper-pagination'),
  // 		//      clickable: true,
  // 		//      type: 'progressbar',
  // 		//   },
  // 		scrollbar: {
  // 		  el: heroSlider.querySelector('.swiper-scrollbar'),
  // 		},
  // 		})
  // 	}
  // }
  // // == and hero slider ==========================================================================
  // == hero slider ==========================================================================

  {
    var heroSlider = document.querySelector('.hero-slider .swiper-container');

    if (heroSlider) {
      var _mySwiper = new Swiper(heroSlider, {
        slidesPerView: 1,
        effect: 'fade',
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        speed: 1000,
        pagination: {
          el: heroSlider.querySelector('.swiper-pagination'),
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return '<div class="' + className + '"> <span class="progress"></span> </div>';
          }
        },
        on: {
          slideChangeTransitionStart: function slideChangeTransitionStart(current) {
            var pagination = heroSlider.querySelector('.swiper-pagination');
            var lenght = pagination.children.length;

            for (var i = 0; i < lenght; i++) {
              if (i == current.activeIndex) break;
              pagination.children[i].classList.add('isShow');
            }

            for (var _i3 = current.activeIndex; _i3 < lenght; _i3++) {
              pagination.children[_i3].classList.remove('isShow');

              pagination.children[_i3].firstElementChild.style.transform = 'scaleX(0)';
            }
          }
        } // scrollbar: {
        //   el: heroSlider.querySelector('.swiper-scrollbar'),
        // },

      });
    }
  } // == and hero slider ==========================================================================
  // ==  slider ==========================================================================

  {
    var _slider2 = document.querySelectorAll('.slider');

    if (_slider2.length > 0) {
      _slider2.forEach(function (item) {
        if (item.classList.contains('text')) {
          var pagin = item.querySelector('.swiper-pagination');
          var height = item.querySelector('.slider__text').clientHeight;
          pagin.style.bottom = height + 40 + 'px';
        }

        var mySwiper = new Swiper(item.querySelector('.swiper-container'), {
          slidesPerView: 1,
          effect: 'fade',
          //loop: true,
          speed: 600,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false
          },
          spaceBetween: 15,
          pagination: {
            el: item.querySelector('.swiper-pagination'),
            clickable: true,
            renderBullet: function renderBullet(index, className) {
              return '<div class="' + className + '"> <span class="progress"></span> </div>';
            }
          },
          on: {
            slideChangeTransitionStart: function slideChangeTransitionStart(current) {
              var pagination = item.querySelector('.swiper-pagination');
              var lenght = pagination.children.length;

              for (var i = 0; i < lenght; i++) {
                if (i == current.activeIndex) break;
                pagination.children[i].classList.add('isShow');
              }

              for (var _i4 = current.activeIndex; _i4 < lenght; _i4++) {
                pagination.children[_i4].classList.remove('isShow');

                pagination.children[_i4].firstElementChild.style.transform = 'scaleX(0)';
              }
            }
          } // scrollbar: {
          //   el: item.querySelector('.swiper-scrollbar'),
          // },

        });
      });
    }
  } // == and  slider ==========================================================================
  // ==  slider-2 ==========================================================================

  {
    var _slider3 = document.querySelector('.slider-2 .swiper-container');

    if (_slider3) {
      var mySwiper = new Swiper(_slider3, {
        slidesPerView: 'auto',
        speed: 600,
        spaceBetween: 65,
        centeredSlides: true,
        scrollbar: {
          el: _slider3.querySelector('.swiper-scrollbar')
        },
        on: {
          slideChange: function slideChange() {
            console.log('test11');

            if (mySwiper) {
              console.dir(mySwiper);
            }
          }
        },
        breakpoints: {
          320: {
            spaceBetween: 15
          },
          768: {
            spaceBetween: 30
          },
          1024: {
            spaceBetween: 65
          }
        }
      });
      mySwiper.on('slideChange', function () {
        console.log('slide changed');
      });
    }
  } // == and  slider-2 ==========================================================================

  ; // === // HOME ==================================================================
  // === MARQUES ==================================================================

  {
    var menuTable = document.querySelector('.info-block__nav');

    if (menuTable) {
      document.querySelectorAll('.info-block__triggers').forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.preventDefault();
          var id = e.target.getAttribute('href').replace('#', '');
          document.querySelectorAll('.info-block__triggers').forEach(function (child) {
            child.classList.remove('active');
          });
          document.querySelectorAll('.info-block__tabs-content').forEach(function (child) {
            child.classList.remove('active');
          });
          item.classList.add('active');
          document.getElementById(id).classList.add('active');
        });
      });
    }

    var tabs = document.querySelectorAll('.info-block__tabs-content');

    if (tabs.length > 0) {
      var addColumns = function addColumns(block) {
        var arr = _toConsumableArray(block.children);

        var num = Math.ceil(arr.length / 3);
        block.classList.add('block-columns-3');

        var _loop4 = function _loop4(i) {
          var column = document.createElement('div');
          column.className = 'column';
          var innerArr = arr.slice(0, num);
          arr = arr.filter(function (item, index) {
            if (item != innerArr[index]) return item;
          });

          if (innerArr.length) {
            innerArr.forEach(function (item) {
              column.append(item);
            });
          }

          block.append(column);
        };

        for (var i = 0; i < 3; i++) {
          _loop4(i);
        }
      };

      var distributeEl = function distributeEl(block) {
        var thamb = true;
        var count = 0;

        while (thamb) {
          console.log('tick');
          var column1 = block.children[0];
          var column2 = block.children[1];
          var column3 = block.children[2];

          var findHeight = function findHeight(column) {
            var count = 0;

            var _iterator3 = _createForOfIteratorHelper(column.children),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var el = _step3.value;
                count += el.scrollHeight;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return count;
          };

          findHeight(column2);
          var arrElHeight = [findHeight(column1), findHeight(column2), findHeight(column3)];
          var maxHeight = Math.max.apply(Math, arrElHeight);
          var maxHeightIndex = arrElHeight.indexOf(maxHeight);
          var minHeight = Math.min.apply(Math, arrElHeight);
          var minHeightIndex = arrElHeight.indexOf(minHeight);

          if (maxHeight - minHeight > 200) {
            var el = block.children[maxHeightIndex].lastElementChild;
            block.children[minHeightIndex].append(el);
          } else {
            thamb = false;
          }

          count++;

          if (count >= 10) {
            thamb = false;
          }
        }
      };

      tabs.forEach(function (contetn) {
        addColumns(contetn.querySelector('.info-block__tabs-text-wrap'));
        distributeEl(contetn.querySelector('.info-block__tabs-text-wrap'));
        contetn.style.display = 'none';
      });
    }
  }
  ; // === // MARQUES ==================================================================
  // === CONTACT ==================================================================
  //Select

  var selects = document.getElementsByTagName('select');

  if (selects.length > 0) {
    selects_init();
  }

  function selects_init() {
    for (var _index5 = 0; _index5 < selects.length; _index5++) {
      var select = selects[_index5];
      select_init(select);
    } //select_callback();


    document.addEventListener('click', function (e) {
      selects_close(e);
    });
    document.addEventListener('keydown', function (e) {
      if (e.which == 27) {
        selects_close(e);
      }
    });
  }

  function selects_close(e) {
    var selects = document.querySelectorAll('.select');

    if (!e.target.closest('.select')) {
      for (var _index6 = 0; _index6 < selects.length; _index6++) {
        var select = selects[_index6];
        var select_body_options = select.querySelector('.select__options');
        select.classList.remove('_active');

        _slideUp(select_body_options, 100);
      }
    }
  }

  function select_init(select) {
    var select_parent = select.parentElement;
    var select_modifikator = select.getAttribute('class');
    var select_selected_option = select.querySelector('option:checked');
    select.setAttribute('data-default', select_selected_option.value);
    select.style.display = 'none';
    select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');
    var new_select = select.parentElement.querySelector('.select');
    new_select.appendChild(select);
    select_item(select);
  }

  function select_item(select) {
    var select_parent = select.parentElement;
    var select_items = select_parent.querySelector('.select__item');
    var select_options = select.querySelectorAll('option');
    var select_selected_option = select.querySelector('option:checked');
    var select_selected_text = select_selected_option.text;
    var select_type = select.getAttribute('data-type');

    if (select_items) {
      select_items.remove();
    }

    var select_type_content = '';

    if (select_type == 'input') {
      select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
    } else {
      select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
    }

    select_parent.insertAdjacentHTML('beforeend', '<div class="select__item">' + '<div class="select__title">' + select_type_content + '</div>' + '<div class="select__options">' + select_get_options(select_options) + '</div>' + '</div></div>');
    select_actions(select, select_parent);
  }

  function select_actions(original, select) {
    var select_item = select.querySelector('.select__item');
    var select_body_options = select.querySelector('.select__options');
    var select_options = select.querySelectorAll('.select__option');
    var select_type = original.getAttribute('data-type');
    var select_input = select.querySelector('.select__input');
    select_item.addEventListener('click', function () {
      var selects = document.querySelectorAll('.select');

      for (var _index7 = 0; _index7 < selects.length; _index7++) {
        var _select = selects[_index7];

        var _select_body_options = _select.querySelector('.select__options');

        if (_select != select_item.closest('.select')) {
          _select.classList.remove('_active');

          _slideUp(_select_body_options, 100);
        }
      }

      _slideToggle(select_body_options, 100);

      select.classList.toggle('_active');
    });

    var _loop5 = function _loop5(_index8) {
      var select_option = select_options[_index8];
      var select_option_value = select_option.getAttribute('data-value');
      var select_option_text = select_option.innerHTML;

      if (select_type == 'input') {
        select_input.addEventListener('keyup', select_search);
      } else {
        if (select_option.getAttribute('data-value') == original.value) {
          select_option.style.display = 'none';
        }
      }

      select_option.addEventListener('click', function () {
        for (var _index9 = 0; _index9 < select_options.length; _index9++) {
          var el = select_options[_index9];
          el.style.display = 'block';
        }

        if (select_type == 'input') {
          select_input.value = select_option_text;
          original.value = select_option_value;
        } else {
          select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
          original.value = select_option_value;
          select_option.style.display = 'none';
        }
      });
    };

    for (var _index8 = 0; _index8 < select_options.length; _index8++) {
      _loop5(_index8);
    }
  }

  function select_get_options(select_options) {
    if (select_options) {
      var select_options_content = '';

      for (var _index10 = 0; _index10 < select_options.length; _index10++) {
        var select_option = select_options[_index10];
        var select_option_value = select_option.value;

        if (select_option_value != '') {
          var select_option_text = select_option.text;
          select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
        }
      }

      return select_options_content;
    }
  }

  function select_search(e) {
    var select_block = e.target.closest('.select ').querySelector('.select__options');
    var select_options = e.target.closest('.select ').querySelectorAll('.select__option');
    var select_search_text = e.target.value.toUpperCase();

    for (var i = 0; i < select_options.length; i++) {
      var select_option = select_options[i];
      var select_txt_value = select_option.textContent || select_option.innerText;

      if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
        select_option.style.display = "";
      } else {
        select_option.style.display = "none";
      }
    }
  }

  function selects_update_all() {
    var selects = document.querySelectorAll('select');

    if (selects) {
      for (var _index11 = 0; _index11 < selects.length; _index11++) {
        var select = selects[_index11];
        select_item(select);
      }
    }
  }

  ; // === // CONTACT ==================================================================
  // === text-content animation ==================================================================

  {
    var block = document.querySelectorAll('.text-content');

    if (block.length > 0) {
      block.forEach(function (item) {
        var children = item.querySelector('.container_small').children;
        var delay = -0.5;

        var _iterator4 = _createForOfIteratorHelper(children),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var el = _step4.value;
            el.style.transitionDelay = (delay += 0.5) + 's';
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      });
    }
  } // === text-content animation ==================================================================

  objectFitVideos();
}); // === GOOGLE MAP ==================================================================
// ==== //  google map ===============

{
  var isMap = document.getElementById("map");

  if (isMap) {
    // let center = {
    // 	lat: 51.735394,
    // 	lng: -1.666271,
    // }
    // let markerPosition = {
    // 	lat: 51.735394,
    // 	lng: -1.666271,
    // }
    // Функция initMap которая отрисует карту на странице
    var initMap = function initMap() {
      // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
      map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: {
          lat: +global.lat,
          lng: +global.lng
        },
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 16 // Добавляем свои стили для отображения карты
        //styles: 

      }); // Создаем маркер на карте

      var marker = new google.maps.Marker({
        // Определяем позицию маркера
        position: {
          lat: +global.lat,
          lng: +global.lng
        },
        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,
        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: '',
        label: '' // Укажем свою иконку для маркера
        // icon: 'img/contact/googlMarker.svg',

      });
    };

    var map;
  }
}
; // === // GOOGLE MAP ==================================================================