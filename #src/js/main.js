var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
Number.isNaN = Number.isNaN || function(value) {
	return typeof value === 'number' && isNaN(value);
  }
  if (!String.prototype.repeat) {
	String.prototype.repeat = function(count) {
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
	  }
	  // Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
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
	}
  }

function get_name_browser(){
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
if (browser == 'Edge'||'Internet Explorer') {
	let videos = document.querySelectorAll('.video-block');
	if(videos.length>0) {
		videos.forEach(item => {
			item.classList.add('objectFitVideoPoly');
		})
	}
} 

//SlideToggle
let _slideUp = (target, duration = 500) => {
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
	window.setTimeout(() => {
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
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
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
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================

//========================================
//Spollers
function spollerInit() {
	let spollers = document.querySelectorAll("._spoller");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];

			spoller.addEventListener("click", function (e) {
				e.preventDefault();
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							el.parentElement.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');

				
				if(spoller.classList.contains('_active')) {
					spoller.parentElement.classList.add('_active');
				} else {
					spoller.parentElement.classList.remove('_active');
				}
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}

//

$(document).ready(function() {
	@@include('popup.js');
	@@include('burger.js');
	@@include('scroll-anim.js'); 
	@@include('object-fit-videos.min.js'); 

// === Проверка, поддержка браузером формата webp ==================================================================

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
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

// === // Проверка, поддержка браузером формата webp ==================================================================

// === Конвертация svg картинки в svg код ==================================================================
$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});
// === // Конвертация svg картинки в svg код ==================================================================



// === COMMON ==================================================================
@@include('#card-journal.js');
@@include('#reviews-slider.js');
@@include('#video.js');
@@include('#slider-text.js');
// === COMMON ==================================================================


// === HEADER ==================================================================
@@include('#header.js');
// === // HEADER ==================================================================


// === HOME ==================================================================
@@include('#home.js');
// === // HOME ==================================================================

// === MARQUES ==================================================================
@@include('#marques.js');
// === // MARQUES ==================================================================

// === CONTACT ==================================================================
@@include('#contact.js'); 
// === // CONTACT ==================================================================



// === text-content animation ==================================================================
{
let block = document.querySelectorAll('.text-content');
if(block.length>0){
	block.forEach(item => {
		let children = item.querySelector('.container_small').children;
		let delay = -0.5;
		for(let el of children) {
			el.style.transitionDelay = (delay += 0.5) + 's';
		}
	})
	}
}
// === text-content animation ==================================================================



objectFitVideos();
});

// === GOOGLE MAP ==================================================================
@@include('#map.js');
// === // GOOGLE MAP ==================================================================