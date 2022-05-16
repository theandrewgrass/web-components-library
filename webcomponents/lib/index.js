/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lit"));
	else if(typeof define === 'function' && define.amd)
		define(["lit"], factory);
	else if(typeof exports === 'object')
		exports["webcomponents"] = factory(require("lit"));
	else
		root["webcomponents"] = factory(root["lit"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_lit__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "lit":
/*!**********************!*\
  !*** external "lit" ***!
  \**********************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_lit__;

/***/ }),

/***/ "./src/components/animations/ripple-animation.js":
/*!*******************************************************!*\
  !*** ./src/components/animations/ripple-animation.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styles\": () => (/* binding */ styles),\n/* harmony export */   \"RippleAnimation\": () => (/* binding */ RippleAnimation)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"lit\");\n\r\n\r\nconst styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`\r\n  :host {\r\n    --default-ripple-color: #FFFFFF;\r\n    --default-ripple-opacity: 0.8;\r\n\r\n    position: absolute;\r\n  }\r\n\r\n  .ripple {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    transform: scale(0);\r\n    animation: ripple 600ms linear;\r\n    background-color: var(--ripple-color, var(--default-ripple-color));\r\n    opacity: var(--ripple-opacity, var(--default-ripple-opacity));\r\n  }\r\n\r\n  @keyframes ripple {\r\n    to {\r\n      transform: scale(3);\r\n      opacity: 0;\r\n    }\r\n  }\r\n`;\r\n\r\nclass RippleAnimation extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {\r\n  ripple;\r\n  \r\n  constructor() {\r\n    super();\r\n  }\r\n\r\n  handleEvent(event) {\r\n    switch (event.type) {\r\n      case 'animationend':\r\n        this.handleAnimationEnd();\r\n        break;\r\n    }\r\n  }\r\n  \r\n  handleAnimationEnd() {\r\n    this.dispatchEvent(new CustomEvent('animationend')); // propagates to parent\r\n  }\r\n  \r\n  firstUpdated() {\r\n    super.firstUpdated();\r\n    this.ripple = this.shadowRoot.querySelector('span.ripple');\r\n    this.ripple.addEventListener('animationend', this);\r\n  }\r\n\r\n  disconnectedCallback() {\r\n    super.disconnectedCallback();\r\n    this.ripple.removeEventListener('animationend', this);\r\n  }\r\n\r\n  static get styles() { return [styles]; }\r\n\r\n  render() {\r\n    return lit__WEBPACK_IMPORTED_MODULE_0__.html`\r\n      <span class=\"ripple\"></span>\r\n    `;\r\n  }\r\n}\r\n\r\ncustomElements.define('ripple-animation', RippleAnimation);\n\n//# sourceURL=webpack://webcomponents/./src/components/animations/ripple-animation.js?");

/***/ }),

/***/ "./src/components/buttons/base-button.js":
/*!***********************************************!*\
  !*** ./src/components/buttons/base-button.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styles\": () => (/* binding */ styles),\n/* harmony export */   \"BaseButton\": () => (/* binding */ BaseButton)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"lit\");\n/* harmony import */ var _controllers_ripple_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ripple-controller.js */ \"./src/controllers/ripple-controller.js\");\n\r\n\r\n\r\nconst styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`\r\n  :host {\r\n    display: inline-block;\r\n    width: 100%;\r\n    \r\n    --button-font: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande';\r\n    --button-font-weight: 700;\r\n    --button-line-height: 18.58px;\r\n    --button-height: 48px;\r\n    --button-background-color: #FFFFFF;\r\n    --button-text-color: #000000;\r\n    --button-border-width: 1px;\r\n    --button-border-color: #000000;\r\n    --button-border-radius: 0;\r\n    --button-padding-vertical: 0;\r\n    --button-padding-horizontal: 16px;\r\n    --button-width: 100%;\r\n    --button-min-width: 100px;\r\n    --button-cursor: pointer;\r\n    --button-font-size: 16px;\r\n    --button-inner-gap: 10px;\r\n    --button-disabled-cursor: not-allowed;\r\n    --button-margin-vertical: 0;\r\n    --button-margin-horizontal: 0;\r\n\r\n    /* hover */\r\n    --button-hover-background-color: #CCCCCC;\r\n  }\r\n\r\n  button {\r\n    /* placement */\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: var(--button-inner-gap);\r\n    \r\n    /* font */\r\n    font-family: var(--button-font);\r\n    font-size: var(--button-font-size);\r\n    font-weight: var(--button-font-weight);\r\n    line-height: var(--button-line-height);\r\n\r\n    /* colour */\r\n    background-color: var(--button-background-color);\r\n    color: var(--button-text-color);\r\n\r\n    /* sizing */\r\n    min-width: var(--button-min-width);\r\n    width: var(--button-width);\r\n    height: var(--button-height);\r\n\r\n    /* margin and padding */\r\n    padding: var(--button-padding-vertical) var(--button-padding-horizontal);\r\n    margin: var(--button-margin-vertical) var(--button-margin-horizontal);\r\n\r\n    /* border and outline */\r\n    border: none; /* remove default border */\r\n    outline: none; /* remove default outline */\r\n    border-style: solid;\r\n    border-width: var(--button-border-width);\r\n    border-color: var(--button-border-color);\r\n    border-radius: var(--button-border-radius);\r\n    \r\n    /* misc */\r\n    cursor: var(--button-cursor);\r\n\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 100%;\r\n  }\r\n\r\n  button:disabled {\r\n    cursor: var(--button-disabled-cursor);\r\n  }\r\n\r\n  button:hover {\r\n    background-color: var(--button-hover-background-color);\r\n  }\r\n\r\n  button:focus {\r\n    background-color: var(--button-hover-background-color);\r\n  }\r\n\r\n  .button-container {\r\n    display: inline-block;\r\n    width: 100%;\r\n    outline: 2px solid transparent;\r\n    border: 2px solid transparent;\r\n  }\r\n\r\n  .button-container:focus-within {\r\n    outline-color: black;\r\n    border-color: white;\r\n  }\r\n`;\r\n\r\nclass BaseButton extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {\r\n  constructor() {\r\n    super();\r\n    this.text = \"Click Me!\";\r\n    this.disabled = false;\r\n    this.rippleController;\r\n  }\r\n  \r\n  static get properties() {\r\n    return {\r\n      text: {type: String, attribute: true},\r\n      disabled: {type: Boolean, attribute: true},\r\n      mouseDown: {type: Boolean, attribute: false},\r\n    };\r\n  }\r\n  \r\n  static get styles() { return [styles]; }\r\n  \r\n  connectedCallback() {\r\n    super.connectedCallback();\r\n    this.addEventListener('click', this);\r\n    this.addEventListener('focus', this);\r\n    this.addEventListener('mousedown', this);\r\n    this.addEventListener('mouseup', this);\r\n    this.addEventListener('animationend', this);\r\n  }\r\n  \r\n  firstUpdated() {\r\n    this.rippleController = new _controllers_ripple_controller_js__WEBPACK_IMPORTED_MODULE_1__.RippleController(this, this.shadowRoot.querySelector('button'));\r\n  }\r\n\r\n  handleEvent(event) {\r\n    switch (event.type) {\r\n      case 'click':\r\n        this.handleClick(event);\r\n        break;\r\n      case 'focus':\r\n        this.handleFocus(event);\r\n        break;\r\n      case 'mousedown':\r\n        this.mouseDown = true;\r\n        break;\r\n      case 'mouseup':\r\n        this.mouseDown = false;\r\n        break;\r\n      case 'animationend':\r\n        this.handleAnimationEnd(event);\r\n        break;\r\n    }\r\n  }\r\n  \r\n  handleClick(event) {\r\n    this.rippleController.handleClick(event);\r\n  }\r\n\r\n\r\n  handleFocus(event) {\r\n    if (this.mouseDown)\r\n      event.target.blur();\r\n  }\r\n\r\n  handleAnimationEnd(event) {\r\n    const readyForActionEvent = new CustomEvent('readyForAction', {\r\n      bubbles: true,\r\n      composed: true,\r\n      detail: {\r\n        target: this,\r\n        event: event,\r\n      },\r\n    });\r\n\r\n    this.dispatchEvent(readyForActionEvent);\r\n  }\r\n\r\n  render() {\r\n    return lit__WEBPACK_IMPORTED_MODULE_0__.html`\r\n      <div class=\"button-container\" tabindex=\"-1\">\r\n        <button type=\"button\" ?disabled=${this.disabled} tabindex=\"0\">\r\n          ${this.text}\r\n        </button>\r\n      </div>\r\n    `;\r\n  }\r\n}\r\n\r\ncustomElements.define('base-button', BaseButton);\n\n//# sourceURL=webpack://webcomponents/./src/components/buttons/base-button.js?");

/***/ }),

/***/ "./src/components/buttons/primary-button/primary-button.js":
/*!*****************************************************************!*\
  !*** ./src/components/buttons/primary-button/primary-button.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styles\": () => (/* binding */ styles),\n/* harmony export */   \"PrimaryButton\": () => (/* binding */ PrimaryButton)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"lit\");\n/* harmony import */ var _base_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-button.js */ \"./src/components/buttons/base-button.js\");\n\r\n\r\n\r\nconst styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`\r\n  :host {\r\n    --button-background-color: #BF0000;\r\n    --button-text-color: #FFFFFF;\r\n    --button-border-color: #BF0000;\r\n\r\n    --button-hover-background-color: #C41414;\r\n  }\r\n`;\r\n\r\nclass PrimaryButton extends _base_button_js__WEBPACK_IMPORTED_MODULE_1__.BaseButton {\r\n  constructor() {\r\n    super();\r\n    this.text = \"Click Me!\";\r\n  }\r\n  \r\n  static get properties() {\r\n    return {\r\n      text: {type: String, attribute: true},\r\n    };\r\n  }\r\n  \r\n  static get styles() { return [super.styles, styles]; }\r\n}\r\n\r\ncustomElements.define('primary-button', PrimaryButton);\n\n//# sourceURL=webpack://webcomponents/./src/components/buttons/primary-button/primary-button.js?");

/***/ }),

/***/ "./src/components/buttons/secondary-button/secondary-button.js":
/*!*********************************************************************!*\
  !*** ./src/components/buttons/secondary-button/secondary-button.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styles\": () => (/* binding */ styles),\n/* harmony export */   \"SecondaryButton\": () => (/* binding */ SecondaryButton)\n/* harmony export */ });\n/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ \"lit\");\n/* harmony import */ var _base_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-button.js */ \"./src/components/buttons/base-button.js\");\n\r\n\r\n\r\nconst styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`\r\n  :host {\r\n    --button-border-color: rgba(0,0,0,0.42);\r\n    --button-hover-background-color: #EAEAEA;\r\n    \r\n    --ripple-color: #000000;\r\n  }\r\n`;\r\n\r\nclass SecondaryButton extends _base_button_js__WEBPACK_IMPORTED_MODULE_1__.BaseButton {\r\n  constructor() {\r\n    super();\r\n    this.text = \"Click Me!\";\r\n  }\r\n  \r\n  static get properties() {\r\n    return {\r\n      text: {type: String, attribute: true},\r\n    };\r\n  }\r\n  \r\n  static get styles() { return [super.styles, styles]; }\r\n}\r\n\r\ncustomElements.define('secondary-button', SecondaryButton);\n\n//# sourceURL=webpack://webcomponents/./src/components/buttons/secondary-button/secondary-button.js?");

/***/ }),

/***/ "./src/controllers/ripple-controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/ripple-controller.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RippleController\": () => (/* binding */ RippleController)\n/* harmony export */ });\n/* harmony import */ var _components_animations_ripple_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/animations/ripple-animation.js */ \"./src/components/animations/ripple-animation.js\");\n\r\n\r\n/**\r\n * @class RippleController\r\n * @classdesc \r\n * A Lit Reactive Controller that allows you to create a ripple effect on a specified element when clicked.\r\n * Pairs with the ripple-animation component. All ripples are removed from the DOM when their animation ends.\r\n * @param {HTMLElement} targetElement - The element to which you wish to apply the ripple effect.\r\n */\r\nclass RippleController {\r\n  rippleElements = [];\r\n\r\n  constructor(host, targetElement) {\r\n    this.host = host;\r\n    this.targetElement = targetElement;\r\n    host.addController(this);\r\n  }\r\n\r\n  createRipple(event) {\r\n    const ripple = document.createElement('ripple-animation');\r\n    const diameter = Math.max(this.targetElement.offsetWidth, this.targetElement.offsetHeight);\r\n    const radius = diameter / 2;\r\n\r\n    ripple.style.width = ripple.style.height = `${diameter}px`;\r\n\r\n    let targetElementBounds = this.targetElement.getBoundingClientRect();\r\n    ripple.style.left = `${event.clientX - targetElementBounds.left - radius}px`;\r\n    ripple.style.top = `${event.clientY - targetElementBounds.top - radius}px`;\r\n    \r\n    const appendedRipple = this.targetElement.appendChild(ripple);\r\n    appendedRipple.addEventListener('animationend', this);\r\n\r\n    this.rippleElements.push(appendedRipple);\r\n  }\r\n\r\n  cleanupRipple(ripple) {\r\n    ripple.removeEventListener('animationend', this);\r\n    this.targetElement.removeChild(ripple);\r\n    this.rippleElements = this.rippleElements.filter(rippleElement => rippleElement !== ripple);\r\n  }\r\n  \r\n  handleEvent(event) {\r\n    switch (event.type) {\r\n      // case 'click':\r\n      //   this.handleClick(event);\r\n      //   break;\r\n      case 'animationend':\r\n        this.handleAnimationEnd(event);\r\n        break;\r\n    }\r\n  }\r\n  \r\n  handleClick(event) {\r\n    this.createRipple(event);\r\n  }\r\n\r\n  handleAnimationEnd(event) {\r\n    const redispatchedEvent = new CustomEvent('animationend', {\r\n      bubbles: true,\r\n      detail: event.detail,\r\n    });\r\n    this.host.dispatchEvent(redispatchedEvent);\r\n    this.cleanupRipple(event.target);\r\n  }\r\n    \r\n  hostConnected() {\r\n    this.targetElement.addEventListener('click', this);\r\n  }\r\n\r\n  hostDisconnected() {\r\n    this.targetElement.removeEventListener('click', this);\r\n    this.host.removeController(this);\r\n  }\r\n}\n\n//# sourceURL=webpack://webcomponents/./src/controllers/ripple-controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PrimaryButton\": () => (/* reexport safe */ _components_buttons_primary_button_primary_button_js__WEBPACK_IMPORTED_MODULE_0__.PrimaryButton),\n/* harmony export */   \"SecondaryButton\": () => (/* reexport safe */ _components_buttons_secondary_button_secondary_button_js__WEBPACK_IMPORTED_MODULE_1__.SecondaryButton)\n/* harmony export */ });\n/* harmony import */ var _components_buttons_primary_button_primary_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/buttons/primary-button/primary-button.js */ \"./src/components/buttons/primary-button/primary-button.js\");\n/* harmony import */ var _components_buttons_secondary_button_secondary_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/buttons/secondary-button/secondary-button.js */ \"./src/components/buttons/secondary-button/secondary-button.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webcomponents/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});