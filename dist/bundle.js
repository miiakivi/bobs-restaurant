/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction contactTabHtml() {\r\n    let form = formHtml();\r\n    let contactInfo = addressHtml();\r\n    return '<input type=\"radio\" name=\"css-tabs\" id=\"tab-4\" class=\"tab-switch\"><label for=\"tab-4\" class=\"tab-label\">Contact us</label><div class=\"tab-content contact-tab\">' +\r\n    form + contactInfo + '<div id=\"map\"><div id=\"map-container-google-2\" class=\"z-depth-1-half map-container\"><iframe src=\"https://maps.google.com/maps?q=utsjoki&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\"' + \r\n    'style=\"border:0\" allowfullscreen></iframe></div></div></div></div> '\r\n}\r\n\r\nfunction formHtml() {\r\n    return '<div class=\"form-container\"><form action=\"action_page.php\"><label for=\"fname\">First Name</label><input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\">' + \r\n    '<label for=\"lname\">Last Name</label><input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\"><label for=\"subject\">Subject</label>' + \r\n    '<select id=\"subject\" name=\"subject\"><option value=\"reservation\">Reservation</option><option value=\"happyThoughts\">Happy thoughts</option><option value=\"somethingElse\">Something else</option>' + \r\n    '</select><label for=\"message\">Message</label><textarea id=\"message\" name=\"message\" placeholder=\"Write something..\" style=\"height:100px\"></textarea>' + \r\n    '<input type=\"submit\" value=\"Submit\"></form></div>';\r\n}\r\n\r\nfunction addressHtml() {\r\n    return '<div class=\"address\"><table class=\"tg\"><thead><tr><th class=\"tg-c3ow\" colspan=\"2\">You find us in ...</th></tr></thead><tbody><tr>' + \r\n    '<td class=\"tg-dvpl\">Address</td><td class=\"tg-dvpl\">59  Jones Street, Utsjoki village, Finland</td></tr><tr><td class=\"tg-dvpl\">Phone</td><td class=\"tg-c3ow\">817-536-1953</td>' + \r\n    '</tr><tr><td class=\"tg-dvpl\">Email</td><td class=\"tg-c3ow\">bob@bobsbistro.fi</td></tr></tbody></table>';\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactTabHtml);\n\n//# sourceURL=webpack://restaurant/./src/contactTab.js?");

/***/ }),

/***/ "./src/createTabs.js":
/*!***************************!*\
  !*** ./src/createTabs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction createTabs(txt) {\r\n    let tab = document.createElement('div');\r\n    tab.className = 'tab';\r\n    tab.innerHTML = txt;\r\n    return tab;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs); \n\n//# sourceURL=webpack://restaurant/./src/createTabs.js?");

/***/ }),

/***/ "./src/drinksTab.js":
/*!**************************!*\
  !*** ./src/drinksTab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction drinksTabHtml() {\r\n    return '<input type=\"radio\" name=\"css-tabs\" id=\"tab-3\" class=\"tab-switch\"><label for=\"tab-3\" class=\"tab-label\">Drinks</label>' + \r\n    '<div class=\"tab-content drinks-tab\"><h3>Bob\\'s Bar and in-house microbrewery is a place to enjoy drinks and a small bite in a relaxed atmosphere.</h3>' + \r\n    '<p>Ambitious to serve extraordinary wines without compromising our sustainable values, we collaborate withpassionate small producers to offer wines that are produced according to sustainable agricultural practices.' + \r\n    'We are also proud to offer our guests a changing selection of fresh and vibrant craft beers from Mamu Brewing, Bob’s own in-house microbrewery. An interesting selection of other local beers is always available too.</p>' + \r\n    '<h3>Currently on tap:</h3><h5>MAMU BREWING</h5><p>Tutti Frutti Sour (3.8%) 4.6/9.2</p><p>Blueberry Sour (3.8%) 4.6/9.2</p><p>Triple R Gose (3.5%) 4.6/9.2</p>' + \r\n    '<p>Juniper Pale Ale (4.2%) 4.5/9</p><p>Farmhouse (5.4%) 4/9</p><p>Welcome for a quick glass or a small bite with a bunch of friends. We warmly welcome walk-ins.</p></div>';\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drinksTabHtml);\n\n//# sourceURL=webpack://restaurant/./src/drinksTab.js?");

/***/ }),

/***/ "./src/foodTab.js":
/*!************************!*\
  !*** ./src/foodTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction foodTabHtml() {\r\n    return '<input type=\"radio\" name=\"css-tabs\" id=\"tab-2\" class=\"tab-switch\"> <label for=\"tab-2\" class=\"tab-label\">Food</label>' + \r\n    ' <div class=\"tab-content food-tab\"><div class=\"burger\"><h2>Bob\\'s Beautiful Burger</h2>' + \r\n    '<p>Beyond Meat™ patty, salad, tomato, onion, cheddar sauce, aioli, BBQ sauce, Myrttinen™ pickles. <br> Fries and vegan mayo</p>' + \r\n    '<h2>14.5€</h2></div><div class=\"burger-img\"><img src=\"./pics/burger.jpg\" alt=\"bob\\'s beautiful burger\"></div>' + \r\n    '<div class=\"breakfast\"><h2>Bob\\'s Best Blueberry Panccakes</h2><p>Freshly tousted toast with cinnamon, maple syrup, blueberries and banana slices '+ \r\n    '<br>+1€ vegan vanilla icecream on top</p><h2>4.5€</h2></div><div class=\"pancake-img\"><img src=\"./pics/pancake.jpg\" alt=\"fantastic french toast\"></div> </div>';\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodTabHtml);\n\n//# sourceURL=webpack://restaurant/./src/foodTab.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction createFooter() {\r\n    let content = document.getElementById('content');\r\n    let footer = document.createElement('footer');\r\n    content.appendChild(footer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n//# sourceURL=webpack://restaurant/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction createHeader() {\r\n    let content = document.getElementById('content');\r\n    let header = document.createElement('header');\r\n    header.innerHTML = '<div class=\"head-filter\"><div class=\"head-txt\"><img src=\"pics/logo.png\" alt=\"\">'+\r\n    '<h1>Bob\\'s Bistro & Bar</h1><p>Craftbeer, wine, burgers and breakfast</p><p>since 2012</p></div></div>';\r\n    content.appendChild(header);\r\n    console.log('hello');\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction homeTabHtml() {\r\n    return  '<input type=\"radio\" name=\"css-tabs\" id=\"tab-1\" checked class=\"tab-switch\">' + \r\n    '<label for=\"tab-1\" class=\"tab-label\">Home</label><div class=\"tab-content home-tab\">' + \r\n    '<h3>Bob\\'s bistro and bar is an informal and relaxed restaurant with a dining room and a bar. In the summer there is also a sunny and pleasant terrace. We also houses two private dining rooms, one of which can accommodate 16 persons and the other 10 persons.</h3>' + \r\n    '<p>We offer delicios vegan dishes from Finland as well as a modern cuisine, that favors organic quality ingredients. Our wine list offers a convenient selection of its own imported finds, at affordable prices to compliment our dishes.</p>' + \r\n    '<p>Our kitchen is open every day <br> Mon-Thur until 22.00 <br> Fri-Sat till 23 <br> Sun until 21.00 <br>' + \r\n    '<br> Lunch is served <br>  Mon-Fri 11-15. <br> Tasty home dishes, soups and salads also to go.</p>' + \r\n    ' <h2>Welcome!</h2> </div>';\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeTabHtml);\n\n//# sourceURL=webpack://restaurant/./src/homeTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper */ \"./src/wrapper.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createPage() {\r\n    (0,_header__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    (0,_wrapper__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n}\r\n\r\ncreatePage();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/wrapper.js":
/*!************************!*\
  !*** ./src/wrapper.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _createTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTabs */ \"./src/createTabs.js\");\n/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeTab */ \"./src/homeTab.js\");\n/* harmony import */ var _foodTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foodTab */ \"./src/foodTab.js\");\n/* harmony import */ var _drinksTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drinksTab */ \"./src/drinksTab.js\");\n/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactTab */ \"./src/contactTab.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet homeHtml = (0,_homeTab__WEBPACK_IMPORTED_MODULE_1__.default)();\r\nlet foodHtml = (0,_foodTab__WEBPACK_IMPORTED_MODULE_2__.default)();\r\nlet drinksHtml = (0,_drinksTab__WEBPACK_IMPORTED_MODULE_3__.default)();\r\nlet infoHtml = (0,_contactTab__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n\r\nlet homeTab = (0,_createTabs__WEBPACK_IMPORTED_MODULE_0__.default)(homeHtml);\r\nlet foodTab = (0,_createTabs__WEBPACK_IMPORTED_MODULE_0__.default)(foodHtml);\r\nlet drinksTab = (0,_createTabs__WEBPACK_IMPORTED_MODULE_0__.default)(drinksHtml);\r\nlet infoTab = (0,_createTabs__WEBPACK_IMPORTED_MODULE_0__.default)(infoHtml);\r\n\r\nfunction createWrapper() {\r\n    let content = document.getElementById('content');\r\n    let wrapper = document.createElement('div');\r\n    let tabs = document.createElement('div');\r\n    wrapper.className = 'wrapper';\r\n    tabs.className = 'tabs';\r\n\r\n    tabs.appendChild(homeTab);\r\n    tabs.appendChild(foodTab);\r\n    tabs.appendChild(drinksTab);\r\n    tabs.appendChild(infoTab);\r\n\r\n\r\n    wrapper.appendChild(tabs);\r\n    content.appendChild(wrapper);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWrapper);\n\n//# sourceURL=webpack://restaurant/./src/wrapper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;