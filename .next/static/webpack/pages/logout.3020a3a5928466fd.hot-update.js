"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/logout",{

/***/ "./src/pages/logout.jsx":
/*!******************************!*\
  !*** ./src/pages/logout.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app */ \"./src/pages/_app.jsx\");\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../socket */ \"./socket.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction logout() {\n    _s();\n    const { setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setUser(undefined);\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signOut)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_6__.firebaseAuth);\n        router(\"/login\");\n    }, [\n        _socket__WEBPACK_IMPORTED_MODULE_3__.socket\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"logout\"\n    }, void 0, false, {\n        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\pages\\\\logout.jsx\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, this);\n}\n_s(logout, \"KNdM9GFx8Qkbm0kTRXEVf5KKnGI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (logout);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9nb3V0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ047QUFDRTtBQUNDO0FBQ0U7QUFDQTtBQUNjO0FBRXRELFNBQVNRLFNBQVM7O0lBRWhCLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdQLGlEQUFVQSxDQUFDQyw2Q0FBV0E7SUFDMUMsTUFBTU8sU0FBU0wsc0RBQVNBO0lBQ3hCSixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RRLFFBQVFFO1FBQ1JMLHNEQUFPQSxDQUFDQywrREFBWUE7UUFDcEJHLE9BQU87SUFDVCxHQUFHO1FBQUNOLDJDQUFNQTtLQUFDO0lBQ1gscUJBQU8sOERBQUNRO2tCQUFJOzs7Ozs7QUFDZDtHQVZTSjs7UUFHUUgsa0RBQVNBOzs7QUFTMUIsK0RBQWVHLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ291dC5qc3g/NjkwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi9fYXBwXCI7XHJcbmltcG9ydCB7IHNvY2tldCB9IGZyb20gXCIuLi8uLi9zb2NrZXRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiQC91dGlscy9GaXJlYmFzZUNvbmZpZ1wiO1xyXG5cclxuZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gXHJcbiAgY29uc3QgeyBzZXRVc2VyIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VXNlcih1bmRlZmluZWQpO1xyXG4gICAgc2lnbk91dChmaXJlYmFzZUF1dGgpO1xyXG4gICAgcm91dGVyKFwiL2xvZ2luXCIpXHJcbiAgfSwgW3NvY2tldF0pO1xyXG4gIHJldHVybiA8ZGl2PmxvZ291dDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nb3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJzb2NrZXQiLCJ1c2VSb3V0ZXIiLCJzaWduT3V0IiwiZmlyZWJhc2VBdXRoIiwibG9nb3V0Iiwic2V0VXNlciIsInJvdXRlciIsInVuZGVmaW5lZCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/logout.jsx\n"));

/***/ })

});