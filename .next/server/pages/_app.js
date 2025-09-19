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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// src/context/AuthContext.tsx\n\n\n// Create the context\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\n// Define the provider component\nconst AuthProvider = ({ children })=>{\n    // Initialize state to false on the server\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Use useEffect to check localStorage only after the component mounts in the browser\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthProvider.useEffect\": ()=>{\n            const storedStatus = localStorage.getItem('isLoggedIn') === 'true';\n            setIsLoggedIn(storedStatus);\n        }\n    }[\"AuthProvider.useEffect\"], []);\n    // Function to simulate a login\n    const login = ()=>{\n        setIsLoggedIn(true);\n        localStorage.setItem('isLoggedIn', 'true');\n    };\n    // Function to simulate a logout\n    const logout = ()=>{\n        setIsLoggedIn(false);\n        localStorage.removeItem('isLoggedIn');\n    };\n    const value = {\n        isLoggedIn,\n        login,\n        logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/tradex/src/context/AuthContext.tsx\",\n        lineNumber: 43,\n        columnNumber: 10\n    }, undefined);\n};\n// Custom hook to easily use the context\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === undefined) {\n        throw new Error('useAuth must be used within an AuthProvider');\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw4QkFBOEI7O0FBQ2dEO0FBUzlFLHFCQUFxQjtBQUNyQixNQUFNSyw0QkFBY0osb0RBQWFBLENBQThCSztBQUUvRCxnQ0FBZ0M7QUFDekIsTUFBTUMsZUFBd0QsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDaEYsMENBQTBDO0lBQzFDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUU3QyxxRkFBcUY7SUFDckZDLGdEQUFTQTtrQ0FBQztZQUNSLE1BQU1RLGVBQWVDLGFBQWFDLE9BQU8sQ0FBQyxrQkFBa0I7WUFDNURILGNBQWNDO1FBQ2hCO2lDQUFHLEVBQUU7SUFFTCwrQkFBK0I7SUFDL0IsTUFBTUcsUUFBUTtRQUNaSixjQUFjO1FBQ2RFLGFBQWFHLE9BQU8sQ0FBQyxjQUFjO0lBQ3JDO0lBRUEsZ0NBQWdDO0lBQ2hDLE1BQU1DLFNBQVM7UUFDYk4sY0FBYztRQUNkRSxhQUFhSyxVQUFVLENBQUM7SUFDMUI7SUFFQSxNQUFNQyxRQUFRO1FBQ1pUO1FBQ0FLO1FBQ0FFO0lBQ0Y7SUFFQSxxQkFBTyw4REFBQ1gsWUFBWWMsUUFBUTtRQUFDRCxPQUFPQTtrQkFBUVY7Ozs7OztBQUM5QyxFQUFFO0FBRUYsd0NBQXdDO0FBQ2pDLE1BQU1ZLFVBQVU7SUFDckIsTUFBTUMsVUFBVWpCLGlEQUFVQSxDQUFDQztJQUMzQixJQUFJZ0IsWUFBWWYsV0FBVztRQUN6QixNQUFNLElBQUlnQixNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvYWRtaW4vRGVza3RvcC90cmFkZXgvc3JjL2NvbnRleHQvQXV0aENvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb250ZXh0L0F1dGhDb250ZXh0LnRzeFxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIERlZmluZSB0aGUgc2hhcGUgb2YgdGhlIGNvbnRleHQgZGF0YVxuaW50ZXJmYWNlIEF1dGhDb250ZXh0VHlwZSB7XG4gIGlzTG9nZ2VkSW46IGJvb2xlYW47XG4gIGxvZ2luOiAoKSA9PiB2b2lkO1xuICBsb2dvdXQ6ICgpID0+IHZvaWQ7XG59XG5cbi8vIENyZWF0ZSB0aGUgY29udGV4dFxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuLy8gRGVmaW5lIHRoZSBwcm92aWRlciBjb21wb25lbnRcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgLy8gSW5pdGlhbGl6ZSBzdGF0ZSB0byBmYWxzZSBvbiB0aGUgc2VydmVyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBVc2UgdXNlRWZmZWN0IHRvIGNoZWNrIGxvY2FsU3RvcmFnZSBvbmx5IGFmdGVyIHRoZSBjb21wb25lbnQgbW91bnRzIGluIHRoZSBicm93c2VyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkU3RhdHVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzTG9nZ2VkSW4nKSA9PT0gJ3RydWUnO1xuICAgIHNldElzTG9nZ2VkSW4oc3RvcmVkU3RhdHVzKTtcbiAgfSwgW10pO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHNpbXVsYXRlIGEgbG9naW5cbiAgY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNMb2dnZWRJbicsICd0cnVlJyk7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gc2ltdWxhdGUgYSBsb2dvdXRcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpc0xvZ2dlZEluJyk7XG4gIH07XG5cbiAgY29uc3QgdmFsdWUgPSB7XG4gICAgaXNMb2dnZWRJbixcbiAgICBsb2dpbixcbiAgICBsb2dvdXQsXG4gIH07XG5cbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbi8vIEN1c3RvbSBob29rIHRvIGVhc2lseSB1c2UgdGhlIGNvbnRleHRcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF1dGggbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoUHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidW5kZWZpbmVkIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInN0b3JlZFN0YXR1cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dpbiIsInNldEl0ZW0iLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwidmFsdWUiLCJQcm92aWRlciIsInVzZUF1dGgiLCJjb250ZXh0IiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/context/AuthContext.tsx\n");

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