/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/components/notesApp.ts":
/*!***************************************!*\
  !*** ./src/ts/components/notesApp.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n//@ts-nocheck\r\nvar notesApp = function () {\r\n    var submitBtn = document.querySelector(\".js-submit\");\r\n    var notesContainer = document.querySelector(\".js-notes\");\r\n    var notesTitle = document.querySelector(\".js-title\");\r\n    var notesDescription = document.querySelector(\".js-description\");\r\n    var notes = JSON.parse(localStorage.getItem(\"notes\"));\r\n    if (notes) {\r\n        notes.forEach(function (element) {\r\n            addNotes(element);\r\n        });\r\n    }\r\n    submitBtn.addEventListener(\"click\", function (e) {\r\n        e.preventDefault();\r\n        addNotes();\r\n    });\r\n    function addNotes(note) {\r\n        var newNote = document.createElement(\"li\");\r\n        newNote.classList.add(\"js-note\");\r\n        var titleValue = notesTitle.value;\r\n        var descValue = notesDescription.value;\r\n        if (note) {\r\n            titleValue = note.notesTitle;\r\n            descValue = note.notesDescription;\r\n        }\r\n        if (titleValue) {\r\n            newNote.innerHTML = \"<h3 class=\\\"notes__item-title | js-text \\\">\" + titleValue + \"</h3>\\n                            <p class=\\\"notes__item-description | js-text\\\">\" + descValue + \"</p>\\n                            <button  class=\\\"btn notes__item-btn | js-delete\\\">Delete</button>\\n                            <button  class=\\\"btn notes__item-btn | js-edit\\\">Edit</button>\\n\\n    \";\r\n            notesContainer.appendChild(newNote);\r\n            notesTitle.value = \"\";\r\n            notesDescription.value = \"\";\r\n            updateNotes();\r\n        }\r\n        var deleteBtn = newNote.querySelector(\".js-delete\");\r\n        deleteBtn.addEventListener(\"click\", deleteNotes);\r\n        function deleteNotes() {\r\n            newNote.remove();\r\n            updateNotes();\r\n        }\r\n        var texts = newNote.querySelectorAll(\".js-text\");\r\n        var editBtn = newNote.querySelector(\".js-edit\");\r\n        editBtn.addEventListener(\"click\", editNotes);\r\n        function editNotes() {\r\n            texts.forEach(function (text) {\r\n                text.contentEditable = true;\r\n            });\r\n            updateNotes();\r\n        }\r\n    }\r\n    function updateNotes() {\r\n        var note = document.querySelectorAll(\".js-note\");\r\n        var noteArr = [];\r\n        note.forEach(function (element) {\r\n            noteArr.push({\r\n                notesTitle: element.children[0].innerText,\r\n                notesDescription: element.children[1].innerText,\r\n            });\r\n        });\r\n        localStorage.setItem(\"notes\", JSON.stringify(noteArr));\r\n    }\r\n};\r\nexports[\"default\"] = notesApp;\r\n\n\n//# sourceURL=webpack://notes-app/./src/ts/components/notesApp.ts?");

/***/ }),

/***/ "./src/ts/components/stickyHeader.ts":
/*!*******************************************!*\
  !*** ./src/ts/components/stickyHeader.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar stickyHeader = function () {\r\n    var header = document.querySelector(\".js-header\");\r\n    var prevPosY = window.scrollY;\r\n    if (window.scrollY > 10) {\r\n        header.classList.add(\"not-top\");\r\n    }\r\n    window.addEventListener(\"scroll\", function () {\r\n        var posY = window.scrollY;\r\n        if (posY < 10) {\r\n            header.classList.remove(\"not-top\");\r\n        }\r\n        else {\r\n            header.classList.add(\"not-top\");\r\n        }\r\n        if (posY < prevPosY || posY <= 0) {\r\n            header.classList.remove(\"hide\");\r\n        }\r\n        else {\r\n            header.classList.add(\"hide\");\r\n        }\r\n        prevPosY = posY;\r\n    });\r\n};\r\nexports[\"default\"] = stickyHeader;\r\n\n\n//# sourceURL=webpack://notes-app/./src/ts/components/stickyHeader.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar stickyHeader_1 = __webpack_require__(/*! ./components/stickyHeader */ \"./src/ts/components/stickyHeader.ts\");\r\nvar notesApp_1 = __webpack_require__(/*! ./components/notesApp */ \"./src/ts/components/notesApp.ts\");\r\n(0, stickyHeader_1.default)();\r\n(0, notesApp_1.default)();\r\n\n\n//# sourceURL=webpack://notes-app/./src/ts/main.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;