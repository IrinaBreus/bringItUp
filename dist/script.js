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
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/videoPlayer */ "./src/js/modules/videoPlayer.js");


window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.page > div', '.next');
  Object(_modules_videoPlayer__WEBPACK_IMPORTED_MODULE_1__["default"])('.play', '.overlay');
});

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = (slidesSelector, btnsSelector) => {
  const slides = document.querySelectorAll(slidesSelector),
    btns = document.querySelectorAll(btnsSelector);
  let index = 0;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      plusSlide(1);
    });
    btn.parentNode.previousElementSibling.addEventListener('click', e => {
      e.preventDefault();
      index = 0;
      showSlides(index);
    });
  });
  function showSlides(n) {
    if (n < 0) {
      index = slides.length - 1;
    }
    if (n > slides.length - 1) {
      index = 0;
    }
    try {
      const hanson = document.querySelector('.hanson');
      hanson.style.opacity = '0';
      if (index == 2) {
        setTimeout(() => {
          hanson.style.opacity = '1';
          hanson.classList.add('animated', 'slideInUp');
        }, 3000);
      } else {
        // hanson.style.opacity = '0';
        hanson.classList.remove('animated', 'slideInUp');
      }
    } catch (e) {}
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
  }
  function plusSlide(n) {
    showSlides(index += n);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (slider);

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