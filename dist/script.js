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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_mainSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/mainSlider */ "./src/js/modules/slider/mainSlider.js");
/* harmony import */ var _modules_slider_miniSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/miniSlider */ "./src/js/modules/slider/miniSlider.js");
/* harmony import */ var _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/videoPlayer */ "./src/js/modules/videoPlayer.js");



window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_slider_mainSlider__WEBPACK_IMPORTED_MODULE_0__["default"])('.page > div', '.next');
  Object(_modules_slider_miniSlider__WEBPACK_IMPORTED_MODULE_1__["default"])({
    containerSelect: '.showup__content-slider',
    nextSelect: '.showup__next',
    prevSelect: '.showup__prev',
    activeClass: 'card-active',
    animate: true
  });
  Object(_modules_slider_miniSlider__WEBPACK_IMPORTED_MODULE_1__["default"])({
    containerSelect: '.modules__content-slider',
    nextSelect: '.modules__info-btns .slick-next',
    prevSelect: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  Object(_modules_slider_miniSlider__WEBPACK_IMPORTED_MODULE_1__["default"])({
    containerSelect: '.feed__slider',
    nextSelect: '.feed__slider .slick-next',
    prevSelect: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active'
  });
  Object(_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_2__["default"])('.play', '.overlay');
});

/***/ }),

/***/ "./src/js/modules/slider/mainSlider.js":
/*!*********************************************!*\
  !*** ./src/js/modules/slider/mainSlider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mainSlider = function (slidesSelector) {
  let nextSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let prev = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const slides = document.querySelectorAll(slidesSelector),
    next = document.querySelectorAll(nextSelector);
  let index = 0;
  next.forEach(btn => {
    btn.addEventListener('click', () => {
      moveSlides(1);
    });
    btn.parentElement.previousElementSibling.addEventListener('click', e => {
      e.preventDefault();
      index = 0;
      slides[0].style.display = 'flex';
    });
  });
  function showSlides(n) {
    if (n == 0) {
      index = slides.length - 1;
    }
    ;
    if (n == slides.length - 1) {
      index = 0;
    }
    ;
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'flex';
    try {
      const hanson = document.querySelector('.hanson');
      hanson.style.opacity = '0';
      if (index === 2) {
        setTimeout(() => {
          hanson.classList.add('animated', 'slideInUp');
          hanson.style.opacity = '1';
        }, 3000);
      } else {
        hanson.style.opacity = '0';
        hanson.classList.remove('slideInUp');
      }
    } catch (e) {}
  }
  function moveSlides(n) {
    showSlides(index += n);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (mainSlider);

/***/ }),

/***/ "./src/js/modules/slider/miniSlider.js":
/*!*********************************************!*\
  !*** ./src/js/modules/slider/miniSlider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const miniSlider = function () {
  let {
    containerSelect = null,
    nextSelect = null,
    prevSelect = null,
    activeClass = null,
    animate = false,
    autoplay = false
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const container = document.querySelector(containerSelect),
    slides = container.children,
    next = document.querySelector(nextSelect),
    prev = document.querySelector(prevSelect);
  container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;
    `;
  decorizeSlider();
  if (autoplay) {
    autoplaySlider();
  }
  next.addEventListener('click', () => {
    nextSlides();
  });
  prev.addEventListener('click', () => {
    const active = slides[slides.length - 1];
    container.insertBefore(active, slides[0]);
    decorizeSlider();
  });
  function decorizeSlider() {
    for (let slide of slides) {
      slide.classList.remove(activeClass);
      if (animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    }
    if (slides[0].tagName !== 'BUTTON') {
      slides[0].classList.add(activeClass);
    }
    if (animate) {
      slides[0].querySelector('.card__title').style.opacity = '1';
      slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
    78;
  }
  ;
  function nextSlides() {
    if (slides[1].tagName == "BUTTON" && slides[2].tagName == "BUTTON") {
      container.appendChild(slides[0]); // Slide
      container.appendChild(slides[1]); // Btn
      container.appendChild(slides[2]); // Btn
      decorizeSlider();
    } else if (slides[1].tagName == "BUTTON") {
      container.appendChild(slides[0]); // Slide
      container.appendChild(slides[1]); // Btn
      decorizeSlider();
    } else {
      container.appendChild(slides[0]);
      decorizeSlider();
    }
  }
  function autoplaySlider() {
    const play = setInterval(() => nextSlides(), 5000);
    container.addEventListener('mouseenter', () => {
      clearInterval(play);
    });
    container.addEventListener('mouseleave', () => {
      autoplaySlider();
    });
    next.parentNode.addEventListener('mouseenter', () => {
      clearInterval(play);
    });
    next.parentNode.addEventListener('mouseleave', () => {
      autoplaySlider();
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (miniSlider);

/***/ }),

/***/ "./src/js/modules/videoPlayer.js":
/*!***************************************!*\
  !*** ./src/js/modules/videoPlayer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const videoPlayer = (triggers, overlaySelector) => {
  const btns = document.querySelectorAll(triggers),
    overlay = document.querySelector(overlaySelector),
    close = overlay.querySelector('.close');
  let player;
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  function onYouTubeIframeAPIReady(url) {
    player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: url
    });
    overlay.style.display = 'flex';
  }
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (document.querySelector('iframe#frame')) {
        overlay.style.display = 'flex';
      } else {
        const path = btn.dataset.url;
        onYouTubeIframeAPIReady(path);
      }
    });
  });
  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    player.stopVideo();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (videoPlayer);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map