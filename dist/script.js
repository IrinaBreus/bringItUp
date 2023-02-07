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
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_showInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showInfo */ "./src/js/modules/showInfo.js");
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "./src/js/modules/slider/slider-mini.js");






window.addEventListener('DOMContentLoaded', () => {
  new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_4__["default"]({
    slides: '.page > div',
    next: '.page .next'
  }).render();
  new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_4__["default"]({
    slides: '.moduleapp > div',
    next: '.moduleapp .next',
    prev: '.moduleapp .prev'
  }).render();
  new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_5__["default"]({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true
  }).init();
  new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_5__["default"]({
    container: '.modules__content-slider',
    prev: '.modules__info .slick-prev',
    next: '.modules__info .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  }).init();
  new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_5__["default"]({
    container: '.feed__slider-container',
    prev: '.feed .slick-prev',
    next: '.feed .slick-next',
    activeClass: 'feed__item-active'
  }).init();
  new _modules_difference__WEBPACK_IMPORTED_MODULE_0__["default"]('.officerold', '.officernew', '.officer__card-item').init();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.showup .play', '.overlay').play();
  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.module__video-item .play', '.overlay').play();
  new _modules_form__WEBPACK_IMPORTED_MODULE_1__["default"]('form').init();
  new _modules_showInfo__WEBPACK_IMPORTED_MODULE_3__["default"]('.plus').init();
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
    try {
      this.oldOfficer = document.querySelector(oldOfficer);
      this.newOfficer = document.querySelector(newOfficer);
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItems = this.newOfficer.querySelectorAll(items);
      this.oldCounter = 0;
      this.newCounter = 0;
    } catch (e) {}
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
    try {
      this.hideItems(this.oldItems);
      this.hideItems(this.newItems);
      this.bringItems(this.oldOfficer, this.oldItems, this.oldCounter);
      this.bringItems(this.newOfficer, this.newItems, this.newCounter);
    } catch (e) {}
  }
}

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Мы скоро с Вами свяжемся',
      failure: 'Что-то пошло не так...'
    };
    this.path = 'assets/question.php';
  }
  async postData(url, data) {
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  }
  mask() {
    let setCursorPosition = (pos, elem) => {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
      elem.addEventListener('click', () => {
        elem.selectionStart = elem.selectionEnd = elem.value.length;
      });
    };
    function createMask(event) {
      let matrix = '+1 (___) ___-____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');
      if (def.length >= val.length) {
        val = def;
      }
      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });
      if (event.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }
    let inputs = document.querySelectorAll('[name="phone"]');
    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      // input.addEventListener('click', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
  }
  checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');
    mailInputs.forEach(input => {
      input.addEventListener('keypress', function (e) {
        if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
          e.preventDefault();
        }
      });
    });
  }
  init() {
    this.checkMailInputs();
    this.mask();
    this.forms.forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        let statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: gray;
                `;
        form.parentNode.append(statusMessage);
        statusMessage.textContent = this.message.loading;
        const formData = new FormData(form);
        this.postData(this.path, formData).then(res => {
          console.log(res);
          statusMessage.textContent = this.message.success;
        }).catch(() => statusMessage.textContent = this.message.failure).finally(() => {
          setTimeout(() => {
            form.reset();
            statusMessage.remove();
          }, 3000);
        });
      });
    });
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
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }
  bindTrigger() {
    this.btns.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest('.module__video-item').nextElementSibling;
        if (i % 2 == 0) {
          blockedElem.setAttribute('data-disabled', 'true');
        }
      } catch (e) {}
      btn.addEventListener('click', () => {
        if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
          this.activeBtn = btn;
          if (document.querySelector('iframe#frame')) {
            this.overlay.style.display = 'flex';
            if (this.path !== btn.dataset.url) {
              this.path = btn.dataset.url;
              this.player.loadVideoById({
                videoId: this.path
              });
            }
          } else {
            this.path = btn.dataset.url;
            this.createPlayer(this.path);
          }
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

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: url,
      events: {
        'onStateChange': this.onPlayerStateChange
      }
    });
    this.overlay.style.display = 'flex';
  }
  onPlayerStateChange(state) {
    try {
      const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling,
        playBtn = this.activeBtn.querySelector('svg').cloneNode(true),
        circle = blockedElem.querySelector('.play__circle'),
        text = blockedElem.querySelector('.play__text');
      if (state.data === 0) {
        if (circle.classList.contains('closed')) circle.classList.remove('closed');
        blockedElem.querySelector('svg').remove();
        circle.appendChild(playBtn);
        text.textContent = 'play video';
        text.classList.remove('attention');
        blockedElem.style.cssText = `
					opacity: 1;
					filter: none;
				`;
        blockedElem.setAttribute('data-disabled', 'false');
      }
    } catch (e) {}
  }
  play() {
    if (this.btns.length > 0) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindTrigger();
      this.bindClose();
    }
  }
}

/***/ }),

/***/ "./src/js/modules/showInfo.js":
/*!************************************!*\
  !*** ./src/js/modules/showInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showInfo; });
class showInfo {
  constructor(triggers) {
    try {
      this.btns = document.querySelectorAll(triggers);
    } catch (e) {}
  }
  init() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        try {
          const msg = btn.parentElement.nextElementSibling;
          const svgPath = btn.querySelectorAll('svg path');
          if (msg.style.display === 'block') {
            msg.style.display = 'none';
            svgPath[0].style.display = '';
          } else {
            msg.style.display = 'block';
            svgPath[0].style.display = 'none';
          }
        } catch (e) {}
      });
    });
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
class MainSlider {
  constructor() {
    let {
      slides = null,
      next = null,
      prev = null
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    this.slides = document.querySelectorAll(slides);
    this.next = document.querySelectorAll(next);
    this.prev = document.querySelectorAll(prev);
    this.index = 0;
  }
  showSlides(n) {
    if (n > this.slides.length - 1) {
      this.index = 0;
    }
    if (n < 0) {
      this.index = this.slides.length - 1;
    }
    this.slides.forEach(slide => slide.style.display = 'none');
    this.slides[this.index].style.display = '';
  }
  plusSlide(n) {
    this.showSlides(this.index += n);
  }
  render() {
    this.next.forEach(btn => {
      btn.addEventListener('click', () => {
        this.plusSlide(1);
        try {
          this.hanson = document.querySelector('.hanson');
          this.hanson.style.opacity = '0';
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
    this.prev.forEach(btn => {
      btn.addEventListener('click', () => {
        this.plusSlide(-1);
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
class SliderMini {
  constructor() {
    let {
      container = null,
      next = null,
      prev = null,
      activeClass = '',
      autoplay = false,
      animate = false
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.container = document.querySelector(container);
    try {
      this.slides = this.container.children;
    } catch (e) {}
    ;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.autoplay = autoplay;
    this.animate = animate;
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
    try {
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
    } catch (error) {}
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map