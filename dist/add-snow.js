(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['snow'] = factory();
  else root['snow'] = factory();
})(this, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/
      /******/ // Flag the module as loaded
      /******/ module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // identity function for calling harmony imports with the correct context
    /******/ __webpack_require__.i = function (value) {
      return value;
    };
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter
          /******/
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = '';
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__((__webpack_require__.s = 1));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function (module, exports) {
        module.exports =
          '.snowflake {\n  color: #fff;\n  font-size: 1em;\n  font-family: Arial, sans-serif;\n  text-shadow: 0 0 5px #000;\n}\n@-webkit-keyframes drop-snowflakes {\n  0% {\n    top: -10%;\n  }\n  to {\n    top: 100%;\n  }\n}\n@-webkit-keyframes move-snowflakes {\n  0%,\n  to {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  50% {\n    -webkit-transform: translateX(80px);\n    transform: translateX(80px);\n  }\n}\n@keyframes drop-snowflakes {\n  0% {\n    top: -10%;\n  }\n  to {\n    top: 100%;\n  }\n}\n@keyframes move-snowflakes {\n  0%,\n  to {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n  50% {\n    -webkit-transform: translateX(80px);\n    transform: translateX(80px);\n  }\n}\n.snowflake {\n  position: fixed;\n  top: -10%;\n  z-index: 9999;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default;\n  -webkit-animation-name: drop-snowflakes, move-snowflakes;\n  -webkit-animation-duration: 10s, 3s;\n  -webkit-animation-timing-function: linear, ease-in-out;\n  -webkit-animation-iteration-count: infinite, infinite;\n  -webkit-animation-play-state: running, running;\n  animation-name: drop-snowflakes, move-snowflakes;\n  animation-duration: 10s, 3s;\n  animation-timing-function: linear, ease-in-out;\n  animation-iteration-count: infinite, infinite;\n  animation-play-state: running, running;\n}\n.snowflake:nth-of-type(0) {\n  left: 1%;\n  -webkit-animation-delay: 0s, 0s;\n  animation-delay: 0s, 0s;\n}\n.snowflake:first-of-type {\n  left: 10%;\n  -webkit-animation-delay: 1s, 1s;\n  animation-delay: 1s, 1s;\n}\n.snowflake:nth-of-type(2) {\n  left: 20%;\n  -webkit-animation-delay: 6s, 0.5s;\n  animation-delay: 6s, 0.5s;\n}\n.snowflake:nth-of-type(3) {\n  left: 30%;\n  -webkit-animation-delay: 4s, 2s;\n  animation-delay: 4s, 2s;\n}\n.snowflake:nth-of-type(4) {\n  left: 40%;\n  -webkit-animation-delay: 2s, 2s;\n  animation-delay: 2s, 2s;\n  font-size: 22px;\n}\n.snowflake:nth-of-type(5) {\n  left: 50%;\n  -webkit-animation-delay: 8s, 3s;\n  animation-delay: 8s, 3s;\n  font-size: 30px;\n}\n.snowflake:nth-of-type(6) {\n  left: 60%;\n  -webkit-animation-delay: 6s, 2s;\n  animation-delay: 6s, 2s;\n}\n.snowflake:nth-of-type(7) {\n  left: 70%;\n  -webkit-animation-delay: 2.5s, 1s;\n  animation-delay: 2.5s, 1s;\n  font-size: 27px;\n}\n.snowflake:nth-of-type(8) {\n  left: 80%;\n  -webkit-animation-delay: 1s, 0s;\n  animation-delay: 1s, 0s;\n}\n.snowflake:nth-of-type(9) {\n  left: 90%;\n  -webkit-animation-delay: 3s, 1.5s;\n  animation-delay: 3s, 1.5s;\n  font-size: 20px;\n}\n.snowflake:nth-of-type(10) {\n  left: 25%;\n  -webkit-animation-delay: 2s, 0s;\n  animation-delay: 2s, 0s;\n  font-size: 18px;\n}\n.snowflake:nth-of-type(11) {\n  left: 65%;\n  -webkit-animation-delay: 4s, 2.5s;\n  animation-delay: 4s, 2.5s;\n}\n.snowflake:nth-of-type(12) {\n  left: 95%;\n  -webkit-animation-delay: 13s, 3.5s;\n  animation-delay: 13s, 3.5s;\n  opacity: 0.7;\n}\n.snowflake:nth-of-type(13) {\n  left: 75%;\n  -webkit-animation-delay: 2.5s, 4.5s;\n  animation-delay: 2.5s, 4.5s;\n  opacity: 0.6;\n}\n.snowflake:nth-of-type(14) {\n  left: 14%;\n  -webkit-animation-delay: 10s, 2.5s;\n  animation-delay: 10s, 2.5s;\n  opacity: 0.4;\n  font-size: 30px;\n}\n.snowflake:nth-of-type(15) {\n  left: 7%;\n  -webkit-animation-delay: 7s, 4.5s;\n  animation-delay: 7s, 4.5s;\n  opacity: 0.9;\n}\n';

        /***/
      },
      /* 1 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        Object.defineProperty(__webpack_exports__, '__esModule', {
          value: true
        });
        /* harmony export (immutable) */ __webpack_exports__['start'] = start;
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snowflakes_css__ =
          __webpack_require__(0);
        /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snowflakes_css___default =
          __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__snowflakes_css__);

        function appendSnow() {
          document.body.innerHTML =
            document.body.innerHTML +
            '<div aria-hidden="true">\n' +
            '    <div class="snowflake">❅</div>\n' +
            '    <div class="snowflake">❆</div>\n' +
            '    <div class="snowflake">❅</div>\n' +
            '    <div class="snowflake">❆</div>\n' +
            '    <div class="snowflake">❅</div>\n' +
            '    <div class="snowflake">❆</div>\n' +
            '    <div class="snowflake">❅</div>\n' +
            '    <div class="snowflake">❆</div>\n' +
            '    <div class="snowflake">❅</div>\n' +
            '    <div class="snowflake">❆</div>\n' +
            '    <div class="snowflake">❅</div>\n' +
            '    <div class="snowflake">❆</div>\n' +
            '    <div class="snowflake">❅</div>\n' +
            '    <div class="snowflake">❆</div>\n' +
            '    <div class="snowflake">❅</div>\n' +
            '  ' +
            '<div class="snowflake">❆</div>\n' +
            '</div>';
        }

        function appendStyle() {
          document.body.innerHTML =
            document.body.innerHTML +
            '<style>' +
            __WEBPACK_IMPORTED_MODULE_0__snowflakes_css___default.a +
            '</style>';
        }

        function start() {
          appendStyle();
          appendSnow();
        }

        /***/
      }
      /******/
    ]
  );
});
