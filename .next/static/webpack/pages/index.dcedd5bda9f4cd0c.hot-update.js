"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/common/ContextMenu.jsx":
/*!***********************************************!*\
  !*** ./src/components/common/ContextMenu.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ContextMenu(param) {\n    let { options , coordinates , contextMenu , setContextMenu  } = param;\n    _s();\n    const contextMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const hadleOutsideClick = (e)=>{\n            if (e.target.id === \"context-opener\") return;\n            if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {\n                setContextMenu(false);\n            }\n        };\n        document.addEventListener(\"click\", hadleOutsideClick);\n        return ()=>{\n            document.removeEventListener(\"click\", hadleOutsideClick);\n        };\n    });\n    const handleClick = (e, callback)=>{\n        e.stopPropagation();\n        setContextMenu(false);\n        callback();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-dropdown-background fixed py-2 z-50 shadow-xl rounded-[6px] \",\n        ref: contextMenuRef,\n        style: {\n            top: coordinates.y,\n            left: coordinates.x\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"\",\n            children: options.map((param)=>/*#__PURE__*/ {\n                let { name , callback  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"px-5 py-2 cursor-pointer hover:bg-background-default-hover \",\n                    onClick: (e)=>handleClick(e, callback),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white \",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this)\n                }, name, false, {\n                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(ContextMenu, \"b9EuBvd+7o9sFh+8hxUUM+gDocw=\");\n_c = ContextMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextMenu);\nvar _c;\n$RefreshReg$(_c, \"ContextMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29udGV4dE1lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFFakQsU0FBU0csWUFBWSxLQUFxRCxFQUFFO1FBQXZELEVBQUVDLFFBQU8sRUFBRUMsWUFBVyxFQUFFQyxZQUFXLEVBQUVDLGVBQWMsRUFBRSxHQUFyRDs7SUFDbkIsTUFBTUMsaUJBQWlCTiw2Q0FBTUEsQ0FBQyxJQUFJO0lBRWxDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVEsb0JBQW9CLENBQUNDLElBQU07WUFDL0IsSUFBSUEsRUFBRUMsTUFBTSxDQUFDQyxFQUFFLEtBQUssa0JBQWtCO1lBRXRDLElBQ0VKLGVBQWVLLE9BQU8sSUFDdEIsQ0FBQ0wsZUFBZUssT0FBTyxDQUFDQyxRQUFRLENBQUNKLEVBQUVDLE1BQU0sR0FDekM7Z0JBQ0FKLGVBQWUsS0FBSztZQUN0QixDQUFDO1FBQ0g7UUFDQVEsU0FBU0MsZ0JBQWdCLENBQUMsU0FBU1A7UUFDbkMsT0FBTyxJQUFNO1lBQ1hNLFNBQVNFLG1CQUFtQixDQUFDLFNBQVNSO1FBQ3hDO0lBQ0Y7SUFFQSxNQUFNUyxjQUFjLENBQUNSLEdBQUdTLFdBQWE7UUFDbkNULEVBQUVVLGVBQWU7UUFDakJiLGVBQWUsS0FBSztRQUNwQlk7SUFDRjtJQUNBLHFCQUNFLDhEQUFDRTtRQUNDQyxXQUFZO1FBQ1pDLEtBQUtmO1FBQ0xnQixPQUFPO1lBQUVDLEtBQUtwQixZQUFZcUIsQ0FBQztZQUFFQyxNQUFNdEIsWUFBWXVCLENBQUM7UUFBQztrQkFFakQsNEVBQUNDO1lBQUdQLFdBQVU7c0JBQ1hsQixRQUFRMEIsR0FBRyxDQUFDLHVCQUNYO29CQURZLEVBQUVDLEtBQUksRUFBRVosU0FBUSxFQUFFO3VCQUM5Qiw4REFBQ2E7b0JBQ0NWLFdBQVU7b0JBRVZXLFNBQVMsQ0FBQ3ZCLElBQU1RLFlBQVlSLEdBQUdTOzhCQUUvQiw0RUFBQ2U7d0JBQUtaLFdBQVU7a0NBQWVTOzs7Ozs7bUJBSDFCQTs7Ozs7WUFJSDs7Ozs7Ozs7Ozs7QUFLZDtHQTVDUzVCO0tBQUFBO0FBOENULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db250ZXh0TWVudS5qc3g/NjMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIENvbnRleHRNZW51KHsgb3B0aW9ucywgY29vcmRpbmF0ZXMsIGNvbnRleHRNZW51LCBzZXRDb250ZXh0TWVudSB9KSB7XHJcbiAgY29uc3QgY29udGV4dE1lbnVSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYWRsZU91dHNpZGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJjb250ZXh0LW9wZW5lclwiKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgY29udGV4dE1lbnVSZWYuY3VycmVudCAmJlxyXG4gICAgICAgICFjb250ZXh0TWVudVJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KVxyXG4gICAgICApIHtcclxuICAgICAgICBzZXRDb250ZXh0TWVudShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFkbGVPdXRzaWRlQ2xpY2spO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhZGxlT3V0c2lkZUNsaWNrKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgc2V0Q29udGV4dE1lbnUoZmFsc2UpO1xyXG4gICAgY2FsbGJhY2soKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCBiZy1kcm9wZG93bi1iYWNrZ3JvdW5kIGZpeGVkIHB5LTIgei01MCBzaGFkb3cteGwgcm91bmRlZC1bNnB4XSBgfVxyXG4gICAgICByZWY9e2NvbnRleHRNZW51UmVmfVxyXG4gICAgICBzdHlsZT17eyB0b3A6IGNvb3JkaW5hdGVzLnksIGxlZnQ6IGNvb3JkaW5hdGVzLnggfX1cclxuICAgID5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIHtvcHRpb25zLm1hcCgoeyBuYW1lLCBjYWxsYmFjayB9KSA9PiAoXHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNSBweS0yIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWJhY2tncm91bmQtZGVmYXVsdC1ob3ZlciBcIlxyXG4gICAgICAgICAgICBrZXk9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBjYWxsYmFjayl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgXCI+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRleHRNZW51O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDb250ZXh0TWVudSIsIm9wdGlvbnMiLCJjb29yZGluYXRlcyIsImNvbnRleHRNZW51Iiwic2V0Q29udGV4dE1lbnUiLCJjb250ZXh0TWVudVJlZiIsImhhZGxlT3V0c2lkZUNsaWNrIiwiZSIsInRhcmdldCIsImlkIiwiY3VycmVudCIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwiY2FsbGJhY2siLCJzdG9wUHJvcGFnYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJzdHlsZSIsInRvcCIsInkiLCJsZWZ0IiwieCIsInVsIiwibWFwIiwibmFtZSIsImxpIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/common/ContextMenu.jsx\n"));

/***/ })

});