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
          '.snowflake {\r\n  color: #fff;\r\n  font-size: 1em;\r\n  font-family: Arial, sans-serif;\r\n  text-shadow: 0 0 5px #000;\r\n}\r\n@-webkit-keyframes drop-snowflakes {\r\n  0% {\r\n    top: -10%;\r\n  }\r\n  to {\r\n    top: 100%;\r\n  }\r\n}\r\n@-webkit-keyframes move-snowflakes {\r\n  0%,\r\n  to {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n  50% {\r\n    -webkit-transform: translateX(80px);\r\n    transform: translateX(80px);\r\n  }\r\n}\r\n@keyframes drop-snowflakes {\r\n  0% {\r\n    top: -10%;\r\n  }\r\n  to {\r\n    top: 100%;\r\n  }\r\n}\r\n@keyframes move-snowflakes {\r\n  0%,\r\n  to {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n  50% {\r\n    -webkit-transform: translateX(80px);\r\n    transform: translateX(80px);\r\n  }\r\n}\r\n.snowflake {\r\n  position: fixed;\r\n  top: -10%;\r\n  z-index: 9999;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  cursor: default;\r\n  -webkit-animation-name: drop-snowflakes, move-snowflakes;\r\n  -webkit-animation-duration: 10s, 3s;\r\n  -webkit-animation-timing-function: linear, ease-in-out;\r\n  -webkit-animation-iteration-count: infinite, infinite;\r\n  -webkit-animation-play-state: running, running;\r\n  animation-name: drop-snowflakes, move-snowflakes;\r\n  animation-duration: 10s, 3s;\r\n  animation-timing-function: linear, ease-in-out;\r\n  animation-iteration-count: infinite, infinite;\r\n  animation-play-state: running, running;\r\n}\r\n.snowflake:nth-of-type(0) {\r\n  left: 1%;\r\n  -webkit-animation-delay: 0s, 0s;\r\n  animation-delay: 0s, 0s;\r\n}\r\n.snowflake:first-of-type {\r\n  left: 10%;\r\n  -webkit-animation-delay: 1s, 1s;\r\n  animation-delay: 1s, 1s;\r\n}\r\n.snowflake:nth-of-type(2) {\r\n  left: 20%;\r\n  -webkit-animation-delay: 6s, 0.5s;\r\n  animation-delay: 6s, 0.5s;\r\n}\r\n.snowflake:nth-of-type(3) {\r\n  left: 30%;\r\n  -webkit-animation-delay: 4s, 2s;\r\n  animation-delay: 4s, 2s;\r\n}\r\n.snowflake:nth-of-type(4) {\r\n  left: 40%;\r\n  -webkit-animation-delay: 2s, 2s;\r\n  animation-delay: 2s, 2s;\r\n}\r\n.snowflake:nth-of-type(5) {\r\n  left: 50%;\r\n  -webkit-animation-delay: 8s, 3s;\r\n  animation-delay: 8s, 3s;\r\n}\r\n.snowflake:nth-of-type(6) {\r\n  left: 60%;\r\n  -webkit-animation-delay: 6s, 2s;\r\n  animation-delay: 6s, 2s;\r\n}\r\n.snowflake:nth-of-type(7) {\r\n  left: 70%;\r\n  -webkit-animation-delay: 2.5s, 1s;\r\n  animation-delay: 2.5s, 1s;\r\n}\r\n.snowflake:nth-of-type(8) {\r\n  left: 80%;\r\n  -webkit-animation-delay: 1s, 0s;\r\n  animation-delay: 1s, 0s;\r\n}\r\n.snowflake:nth-of-type(9) {\r\n  left: 90%;\r\n  -webkit-animation-delay: 3s, 1.5s;\r\n  animation-delay: 3s, 1.5s;\r\n}\r\n.snowflake:nth-of-type(10) {\r\n  left: 25%;\r\n  -webkit-animation-delay: 2s, 0s;\r\n  animation-delay: 2s, 0s;\r\n}\r\n.snowflake:nth-of-type(11) {\r\n  left: 65%;\r\n  -webkit-animation-delay: 4s, 2.5s;\r\n  animation-delay: 4s, 2.5s;\r\n}\r\n';

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
