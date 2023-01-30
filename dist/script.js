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
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "./src/js/modules/slider/slider-mini.js");




window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_2__["default"]({
    container: '.page',
    btns: '.next'
  });
  slider.render();
  const showupSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_3__["default"]({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  });
  showupSlider.init();
  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_3__["default"]({
    container: '.modules__content-slider',
    prev: '.modules__info .slick-prev',
    next: '.modules__info .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  modulesSlider.init();
  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_3__["default"]({
    container: '.feed__slider-container',
    prev: '.feed .slick-prev',
    next: '.feed .slick-next',
    activeClass: 'feed__item-active'
  });
  feedSlider.init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_0__["default"]('.officerold', '.officernew', '.officer__card-item').init();
  const player = new _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__["default"]('.showup .play', '.overlay');
  player.play();
});

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(oldOfficer, newOfficer, items) {
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    this.oldItems = this.oldOfficer.querySelectorAll(items);
    this.newItems = this.newOfficer.querySelectorAll(items);
    this.oldCounter = 0;
    this.newCounter = 0;
  }
  hideItems(items) {
    items.forEach((item, i) => {
      if (i !== items.length - 1) {
        item.classList.add('animated', 'fadeInDown');
        item.style.display = 'none';
      }
      ;
    });
  }
  bringItems(container, items, counter) {
    container.lastElementChild.addEventListener('click', () => {
      items[counter].style.display = '';
      counter++;
      if (counter == items.length - 1) {
        items[counter].remove();
      }
      ;
    });
  }
  init() {
    this.hideItems(this.oldItems);
    this.hideItems(this.newItems);
    this.bringItems(this.oldOfficer, this.oldItems, this.oldCounter);
    this.bringItems(this.newOfficer, this.newItems, this.newCounter);
  }
}

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
  }
  bindTrigger() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex';
        } else {
          const path = btn.dataset.url;
          this.create(path);
        }
      });
    });
  }
  bindClose() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
      // this.player.previousVideo();
    });
  }

  create(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: url
    });
    this.overlay.style.display = 'flex';
  }
  play() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.bindTrigger();
    this.bindClose();
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(btns) {
    super(btns);
  }
  showSlides(n) {
    if (n > [...this.slides].length - 1) {
      this.index = 0;
    }
    if (n < 0) {
      this.index = [...this.slides].length - 1;
    }
    [...this.slides].forEach(slide => slide.style.display = 'none');
    [...this.slides][this.index].style.display = '';
  }
  plusSlide(n) {
    this.showSlides(this.index += n);
  }
  render() {
    try {
      this.hanson = document.querySelector('.hanson');
      this.hanson.style.opacity = '0';
    } catch (e) {}
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.plusSlide(1);
        try {
          if (this.index === 2) {
            setTimeout(() => {
              this.hanson.style.opacity = '1';
              this.hanson.classList.add('animated', 'slideInUp');
            }, 3000);
          } else {
            this.hanson.style.opacity = '0';
            this.hanson.classList.remove('animated', 'slideInUp');
          }
        } catch (e) {}
      });
      btn.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.index = 0;
        this.showSlides(this.index);
      });
    });
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderMini; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class SliderMini extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(container, next, prev, activeClass, autoplay, animate) {
    super(container, next, prev, activeClass, autoplay, animate);
    this.timer;
  }
  autoplaySlide() {
    const play = setInterval(() => this.nextSlide(), 5000);
    this.container.addEventListener('mouseleave', () => {
      this.autoplaySlide();
    });
    this.container.addEventListener('mouseenter', () => {
      clearInterval(play);
    });
    this.next.parentNode.addEventListener('mouseleave', () => {
      this.autoplaySlide();
    });
    this.next.parentNode.addEventListener('mouseenter', () => {
      clearInterval(play);
    });
  }
  decorizeSlides() {
    [...this.slides].forEach(slide => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
      ;
    });
    this.slides[0].classList.add(this.activeClass);
    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }
  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.decorizeSlides();
  }
  bindTriggers() {
    this.next.addEventListener('click', () => {
      this.nextSlide();
    });
    this.prev.addEventListener('click', () => {
      const active = this.slides[this.slides.length - 1];
      this.container.insertBefore(active, this.slides[0]);
      this.decorizeSlides();
    });
  }
  init() {
    this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
    this.bindTriggers();
    this.decorizeSlides();
    if (this.autoplay) {
      this.autoplaySlide();
    }
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor() {
    let {
      container = null,
      btns = null,
      next = null,
      prev = null,
      activeClass = '',
      animate,
      autoplay
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.container = document.querySelector(container);
    this.slides = this.container.children;
    this.btns = document.querySelectorAll(btns);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.index = 0;
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map