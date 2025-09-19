/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./src/context/AuthContext.tsx":
/*!*************************************!*\
  !*** ./src/context/AuthContext.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* reexport safe */ _AuthContextProvider__WEBPACK_IMPORTED_MODULE_0__.AuthContext),\n/* harmony export */   AuthProvider: () => (/* reexport safe */ _AuthContextProvider__WEBPACK_IMPORTED_MODULE_0__.AuthProvider)\n/* harmony export */ });\n/* harmony import */ var _AuthContextProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthContextProvider */ \"(pages-dir-node)/./src/context/AuthContextProvider.tsx\");\n// Re-export from the provider file\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBbUM7QUFDK0IiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL3RyYWRleC9zcmMvY29udGV4dC9BdXRoQ29udGV4dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUmUtZXhwb3J0IGZyb20gdGhlIHByb3ZpZGVyIGZpbGVcbmV4cG9ydCB7IEF1dGhDb250ZXh0LCBBdXRoUHJvdmlkZXIgfSBmcm9tICcuL0F1dGhDb250ZXh0UHJvdmlkZXInOyJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/context/AuthContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/context/AuthContextProvider.tsx":
/*!*********************************************!*\
  !*** ./src/context/AuthContextProvider.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Create the context\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\n// Define the provider component\nconst AuthProvider = ({ children })=>{\n    // Initialize state to false on the server\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Use useEffect to check localStorage only after the component mounts in the browser\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            const storedStatus = localStorage.getItem('isLoggedIn') === 'true';\n            setIsLoggedIn(storedStatus);\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    // Function to simulate a login\n    const login = ()=>{\n        setIsLoggedIn(true);\n        localStorage.setItem('isLoggedIn', 'true');\n    };\n    // Function to simulate a logout\n    const logout = ()=>{\n        setIsLoggedIn(false);\n        localStorage.removeItem('isLoggedIn');\n    };\n    const value = {\n        isLoggedIn,\n        login,\n        logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/tradex/src/context/AuthContextProvider.tsx\",\n        lineNumber: 42,\n        columnNumber: 10\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0UHJvdmlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFTbEUscUJBQXFCO0FBQ2QsTUFBTUksNEJBQWNILG9EQUFhQSxDQUE4QkksV0FBVztBQUVqRixnQ0FBZ0M7QUFDekIsTUFBTUMsZUFBd0QsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDaEYsMENBQTBDO0lBQzFDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUU3QyxxRkFBcUY7SUFDckZDLGdEQUFTQTtrQ0FBQztZQUNSLE1BQU1PLGVBQWVDLGFBQWFDLE9BQU8sQ0FBQyxrQkFBa0I7WUFDNURILGNBQWNDO1FBQ2hCO2lDQUFHLEVBQUU7SUFFTCwrQkFBK0I7SUFDL0IsTUFBTUcsUUFBUTtRQUNaSixjQUFjO1FBQ2RFLGFBQWFHLE9BQU8sQ0FBQyxjQUFjO0lBQ3JDO0lBRUEsZ0NBQWdDO0lBQ2hDLE1BQU1DLFNBQVM7UUFDYk4sY0FBYztRQUNkRSxhQUFhSyxVQUFVLENBQUM7SUFDMUI7SUFFQSxNQUFNQyxRQUFRO1FBQ1pUO1FBQ0FLO1FBQ0FFO0lBQ0Y7SUFFQSxxQkFBTyw4REFBQ1gsWUFBWWMsUUFBUTtRQUFDRCxPQUFPQTtrQkFBUVY7Ozs7OztBQUM5QyxFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvYWRtaW4vRGVza3RvcC90cmFkZXgvc3JjL2NvbnRleHQvQXV0aENvbnRleHRQcm92aWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbi8vIERlZmluZSB0aGUgc2hhcGUgb2YgdGhlIGNvbnRleHQgZGF0YVxuaW50ZXJmYWNlIEF1dGhDb250ZXh0VHlwZSB7XG4gIGlzTG9nZ2VkSW46IGJvb2xlYW47XG4gIGxvZ2luOiAoKSA9PiB2b2lkO1xuICBsb2dvdXQ6ICgpID0+IHZvaWQ7XG59XG5cbi8vIENyZWF0ZSB0aGUgY29udGV4dFxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoQ29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbi8vIERlZmluZSB0aGUgcHJvdmlkZXIgY29tcG9uZW50XG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIC8vIEluaXRpYWxpemUgc3RhdGUgdG8gZmFsc2Ugb24gdGhlIHNlcnZlclxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gVXNlIHVzZUVmZmVjdCB0byBjaGVjayBsb2NhbFN0b3JhZ2Ugb25seSBhZnRlciB0aGUgY29tcG9uZW50IG1vdW50cyBpbiB0aGUgYnJvd3NlclxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZFN0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0xvZ2dlZEluJykgPT09ICd0cnVlJztcbiAgICBzZXRJc0xvZ2dlZEluKHN0b3JlZFN0YXR1cyk7XG4gIH0sIFtdKTtcblxuICAvLyBGdW5jdGlvbiB0byBzaW11bGF0ZSBhIGxvZ2luXG4gIGNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzTG9nZ2VkSW4nLCAndHJ1ZScpO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHNpbXVsYXRlIGEgbG9nb3V0XG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaXNMb2dnZWRJbicpO1xuICB9O1xuXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIGlzTG9nZ2VkSW4sXG4gICAgbG9naW4sXG4gICAgbG9nb3V0LFxuICB9O1xuXG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj47XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXV0aENvbnRleHQiLCJ1bmRlZmluZWQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwic3RvcmVkU3RhdHVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ2luIiwic2V0SXRlbSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/context/AuthContextProvider.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthContext */ \"(pages-dir-node)/./src/context/AuthContext.tsx\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.css */ \"(pages-dir-node)/./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"app-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/tradex/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/admin/Desktop/tradex/src/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/tradex/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXNEO0FBQ2xDO0FBRXBCLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNILDhEQUFZQTtrQkFDWCw0RUFBQ0k7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0g7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYWRtaW4vRGVza3RvcC90cmFkZXgvc3JjL3BhZ2VzL19hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnO1xuaW1wb3J0ICcuLi9BcHAuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpdiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();