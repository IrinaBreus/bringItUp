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
/* harmony import */ var _modules_download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/download */ "./src/js/modules/download.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_showInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showInfo */ "./src/js/modules/showInfo.js");
/* harmony import */ var _modules_slider_mainSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider/mainSlider */ "./src/js/modules/slider/mainSlider.js");
/* harmony import */ var _modules_slider_miniSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider/miniSlider */ "./src/js/modules/slider/miniSlider.js");
/* harmony import */ var _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/videoPlayer */ "./src/js/modules/videoPlayer.js");







window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_slider_mainSlider__WEBPACK_IMPORTED_MODULE_4__["default"])('.page > div', '.page .next');
  Object(_modules_slider_mainSlider__WEBPACK_IMPORTED_MODULE_4__["default"])('.moduleapp > div', '.moduleapp .next', '.moduleapp .prev');
  Object(_modules_slider_miniSlider__WEBPACK_IMPORTED_MODULE_5__["default"])({
    containerSelect: '.showup__content-slider',
    nextSelect: '.showup__next',
    prevSelect: '.showup__prev',
    activeClass: 'card-active',
    animate: true
  });
  Object(_modules_slider_miniSlider__WEBPACK_IMPORTED_MODULE_5__["default"])({
    containerSelect: '.modules__content-slider',
    nextSelect: '.modules__info-btns .slick-next',
    prevSelect: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    animate: true,
    autoplay: true
  });
  Object(_modules_slider_miniSlider__WEBPACK_IMPORTED_MODULE_5__["default"])({
    containerSelect: '.feed__slider',
    nextSelect: '.feed__slider .slick-next',
    prevSelect: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active'
  });
  Object(_modules_difference__WEBPACK_IMPORTED_MODULE_0__["default"])('.officerold');
  Object(_modules_difference__WEBPACK_IMPORTED_MODULE_0__["default"])('.officernew');
  Object(_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_6__["default"])('.showup .play', '.overlay');
  Object(_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_6__["default"])('.module__video-item .play', '.overlay');
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_showInfo__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_download__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = () => {
  const txtInputs = document.querySelectorAll('[name="email"]');
  txtInputs.forEach(input => {
    input.addEventListener('keypress', e => {
      if (e.key.match(/[^a-z 0-9 @ \.]/ig, '')) {
        e.preventDefault();
      }
    });
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[а-яё]/ig, '');
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const difference = parentSelector => {
  const parent = document.querySelector(parentSelector);
  try {
    const title = parent.firstElementChild,
      trigger = parent.lastElementChild,
      blocks = [...parent.children];
    let index = 1;
    blocks.forEach(item => {
      item.style.display = 'none';
      item.classList.add('animated', 'fadeInDown');
      title.style.display = '';
      trigger.style.display = '';
    });
    trigger.addEventListener('click', () => {
      blocks[index].style.display = '';
      index++;
      if (index === blocks.length - 1) {
        trigger.remove();
      }
      ;
    });
  } catch (error) {}
};
/* harmony default export */ __webpack_exports__["default"] = (difference);

/***/ }),

/***/ "./src/js/modules/download.js":
/*!************************************!*\
  !*** ./src/js/modules/download.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const download = () => {
  const btns = document.querySelectorAll('.download'),
    path = 'assets/img/mainbg.jpg';
  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      downloadElem(path);
    });
  });
  function downloadElem(path) {
    const link = document.createElement('a');
    link.href = path;
    link.setAttribute('download', 'nice_picture');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (download);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mask */ "./src/js/modules/mask.js");
/* harmony import */ var _checkTextInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkTextInputs */ "./src/js/modules/checkTextInputs.js");


const form = () => {
  const forms = document.querySelectorAll('form');
  Object(_mask__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_checkTextInputs__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const message = {
    loading: 'Loading',
    success: "Thank you! We'll call you soon",
    failure: 'Ooops....'
  };
  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  };
  forms.forEach(f => {
    // 
    // const btn = f.querySelector('.btn'),
    //       inputs = f.querySelectorAll('input'),
    //       name = f.querySelector('[name="name"]'),
    //       mail = f.querySelector('[name="email"]');

    // btn.setAttribute('disabled', true);

    // inputs.forEach(input => {
    //     input.addEventListener('input', () => {
    //         if (name.value !== '' && mail !== '') {
    //             btn.removeAttribute('disabled');
    //         }
    //     });
    // })

    f.addEventListener('submit', e => {
      e.preventDefault();
      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.style.cssText = `
                margin-top: 10px;
                margin-left: 15px;
                color: gray;
            `;
      f.append(statusMessage);
      statusMessage.textContent = message.loading;
      const formData = new FormData(f);
      postData('assets/question.php', formData).then(res => {
        statusMessage.textContent = message.success;
        console.log(res);
      }).catch(() => statusMessage.textContent = message.failure).finally(() => {
        setTimeout(() => {
          statusMessage.remove();
          f.reset();
        }, 3000);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = () => {
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
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/showInfo.js":
/*!************************************!*\
  !*** ./src/js/modules/showInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const showInfo = () => {
  try {
    const btns = document.querySelectorAll('.plus');
    btns.forEach(btn => {
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
  } catch (e) {}
};
/* harmony default export */ __webpack_exports__["default"] = (showInfo);

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
  let prevSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const slides = document.querySelectorAll(slidesSelector),
    next = document.querySelectorAll(nextSelector),
    prev = document.querySelectorAll(prevSelector);
  let index = 1;
  next.forEach(btn => {
    btn.addEventListener('click', () => {
      moveSlides(1);
    });
    btn.parentElement.previousElementSibling.addEventListener('click', e => {
      e.preventDefault();
      index = 1;
      slides[index - 1].style.display = 'flex';
    });
  });
  prev.forEach(btn => {
    btn.addEventListener('click', () => {
      moveSlides(-1);
    });
  });
  function showSlides(n) {
    if (n < 1) {
      index = slides.length;
    }
    ;
    if (n > slides.length) {
      index = 1;
    }
    ;
    slides.forEach(slide => slide.style.display = 'none');
    slides[index - 1].style.display = 'flex';
    try {
      const hanson = document.querySelector('.hanson');
      hanson.style.opacity = '0';
      if (index === 3) {
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
    next = document.querySelector(nextSelect),
    prev = document.querySelector(prevSelect);
  try {
    const slides = container.children;
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
      ;
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
  } catch (error) {}
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
  let player, path, activeBtn;
  if (btns.length > 0) {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    openPlayer();
    closePlayer();
  }
  function createPlayer(url) {
    player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: url,
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
    overlay.style.display = 'flex';
  }
  function onPlayerStateChange(state) {
    try {
      const blockedElem = activeBtn.closest('.module__video-item').nextElementSibling,
        playBtn = activeBtn.querySelector('svg').cloneNode(true),
        circle = blockedElem.querySelector('.play__circle'),
        text = blockedElem.querySelector('.play__text');
      if (state.data === 0) {
        if (circle.classList.contains('closed')) {
          circle.classList.remove('closed');
          circle.querySelector('svg').remove();
          circle.appendChild(playBtn);
          text.textContent = 'play video';
          text.classList.remove('attention');
          blockedElem.style.cssText = `
					opacity: 1;
					filter: none;
					`;
          blockedElem.setAttribute('data-disabled', 'false');
        }
      }
    } catch (e) {}
  }
  ;
  function openPlayer() {
    btns.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest('.module__video-item').nextElementSibling;
        if (i % 2 == 0) {
          blockedElem.setAttribute('data-disabled', 'true');
        }
      } catch (e) {}
      ;
      btn.addEventListener('click', () => {
        if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
          activeBtn = btn;
          if (document.querySelector('iframe#frame')) {
            overlay.style.display = 'flex';
            if (path !== btn.dataset.url) {
              path = btn.dataset.url;
              player.loadVideoById({
                videoId: path
              });
            }
          } else {
            path = btn.dataset.url;
            createPlayer(path);
          }
        }
      });
    });
  }
  function closePlayer() {
    close.addEventListener('click', () => {
      overlay.style.display = 'none';
      player.stopVideo();
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (videoPlayer);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map