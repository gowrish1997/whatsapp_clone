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

/***/ "./src/components/Chatlist/ChatListHeader.jsx":
/*!****************************************************!*\
  !*** ./src/components/Chatlist/ChatListHeader.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/_app */ \"./src/pages/_app.jsx\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ChatListHeader() {\n    _s();\n    const userInfo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    const { user , newUser , contactPage , setContactPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    const handleAllContaPage = ()=>{\n        setContactPage(!contactPage);\n    };\n    const [isContextMenu, setIsContextMenu] = useState(false);\n    const [contextMenuPosition, setContextMenuPosition] = useState({\n        x: 0,\n        y: 0\n    });\n    const contextMenuOptions = [\n        {\n            name: \"Exit\",\n            callback: async ()=>{\n                exitChat();\n            }\n        }\n    ];\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setIsContextMenu(true);\n        setContextMenuPosition({\n            x: e.pageX - 50,\n            y: e.pageY + 20\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-16 px-4 py-3 flex justify-between items-center  \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" cursor-pointer \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    type: \"sm\",\n                    image: user.profilePicture\n                }, void 0, false, {\n                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatListHeader.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatListHeader.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex gap-6  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFillChatLeftTextFill, {\n                        className: \" text-panel-header-icon cursor-pointer text-xl \",\n                        title: \"New Chat\",\n                        onClick: handleAllContaPage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatListHeader.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsThreeDotsVertical, {\n                                className: \" text-panel-header-icon cursor-pointer text-xl \",\n                                title: \"Menu\",\n                                onClick: (e)=>showContextMenu(e),\n                                id: \"context-opener\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatListHeader.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            isContextMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContextMenu, {\n                                options: contextMenuOptions,\n                                coordinates: contextMenuPosition,\n                                contextMenu: isContextMenu,\n                                setContextMenu: setIsContextMenu\n                            }, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatListHeader.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatListHeader.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatListHeader.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatListHeader, \"b5n/LQFlB24adP3sv+pQuNPvtyo=\");\n_c = ChatListHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatListHeader);\nvar _c;\n$RefreshReg$(_c, \"ChatListHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TGlzdEhlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0s7QUFDTztBQUNLO0FBQ1I7QUFDMEM7QUFFN0UsU0FBU08saUJBQWlCOztJQUN4QixNQUFNQyxXQUFXSixpREFBVUEsQ0FBQ0QsbURBQVdBO0lBQ3ZDLE1BQU0sRUFBRU0sS0FBSSxFQUFFQyxRQUFPLEVBQUVDLFlBQVcsRUFBRUMsZUFBYyxFQUFFLEdBQ2xEUixpREFBVUEsQ0FBQ0QsbURBQVdBO0lBQ3hCLE1BQU1VLHFCQUFxQixJQUFNO1FBQy9CRCxlQUFlLENBQUNEO0lBQ2xCO0lBQ0EsTUFBTSxDQUFDRyxlQUFlQyxpQkFBaUIsR0FBR0MsU0FBUyxLQUFLO0lBQ3hELE1BQU0sQ0FBQ0MscUJBQXFCQyx1QkFBdUIsR0FBR0YsU0FBUztRQUM3REcsR0FBRztRQUNIQyxHQUFHO0lBQ0w7SUFDQSxNQUFNQyxxQkFBcUI7UUFDekI7WUFDRUMsTUFBTTtZQUNOQyxVQUFVLFVBQVk7Z0JBQ3BCQztZQUNGO1FBQ0Y7S0FDRDtJQUVELE1BQU1DLGtCQUFrQixDQUFDQyxJQUFNO1FBQzdCQSxFQUFFQyxjQUFjO1FBQ2hCWixpQkFBaUIsSUFBSTtRQUNyQkcsdUJBQXVCO1lBQUVDLEdBQUdPLEVBQUVFLEtBQUssR0FBRztZQUFJUixHQUFHTSxFQUFFRyxLQUFLLEdBQUc7UUFBRztJQUM1RDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM3QixzREFBTUE7b0JBQUM4QixNQUFLO29CQUFLQyxPQUFPeEIsS0FBS3lCLGNBQWM7Ozs7Ozs7Ozs7OzBCQUU5Qyw4REFBQ0o7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDMUIsa0VBQXNCQTt3QkFDckIwQixXQUFVO3dCQUNWSSxPQUFNO3dCQUNOQyxTQUFTdkI7Ozs7OztrQ0FFWDs7MENBQ0UsOERBQUNQLCtEQUFtQkE7Z0NBQ2xCeUIsV0FBVTtnQ0FDVkksT0FBTTtnQ0FDTkMsU0FBUyxDQUFDVixJQUFNRCxnQkFBZ0JDO2dDQUNoQ1csSUFBRzs7Ozs7OzRCQUVKdkIsK0JBQ0MsOERBQUN3QjtnQ0FDQ0MsU0FBU2xCO2dDQUNUbUIsYUFBYXZCO2dDQUNid0IsYUFBYTNCO2dDQUNiNEIsZ0JBQWdCM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzlCO0dBekRTUjtLQUFBQTtBQTJEVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TGlzdEhlYWRlci5qc3g/MjA0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21tb24vQXZhdGFyXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIkAvcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJzRmlsbENoYXRMZWZ0VGV4dEZpbGwsIEJzVGhyZWVEb3RzVmVydGljYWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbmZ1bmN0aW9uIENoYXRMaXN0SGVhZGVyKCkge1xyXG4gIGNvbnN0IHVzZXJJbmZvID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgeyB1c2VyLCBuZXdVc2VyLCBjb250YWN0UGFnZSwgc2V0Q29udGFjdFBhZ2UgfSA9XHJcbiAgICB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBoYW5kbGVBbGxDb250YVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBzZXRDb250YWN0UGFnZSghY29udGFjdFBhZ2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW2lzQ29udGV4dE1lbnUsIHNldElzQ29udGV4dE1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb250ZXh0TWVudVBvc2l0aW9uLCBzZXRDb250ZXh0TWVudVBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbnRleHRNZW51T3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJFeGl0XCIsXHJcbiAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZXhpdENoYXQoKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc2hvd0NvbnRleHRNZW51ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzQ29udGV4dE1lbnUodHJ1ZSk7XHJcbiAgICBzZXRDb250ZXh0TWVudVBvc2l0aW9uKHsgeDogZS5wYWdlWCAtIDUwLCB5OiBlLnBhZ2VZICsgMjAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xNiBweC00IHB5LTMgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyICBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgXCI+XHJcbiAgICAgICAgPEF2YXRhciB0eXBlPVwic21cIiBpbWFnZT17dXNlci5wcm9maWxlUGljdHVyZX0+PC9BdmF0YXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGdhcC02ICBcIj5cclxuICAgICAgICA8QnNGaWxsQ2hhdExlZnRUZXh0RmlsbFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBcIlxyXG4gICAgICAgICAgdGl0bGU9XCJOZXcgQ2hhdFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBbGxDb250YVBhZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEJzVGhyZWVEb3RzVmVydGljYWxcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIk1lbnVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2hvd0NvbnRleHRNZW51KGUpfVxyXG4gICAgICAgICAgICBpZD1cImNvbnRleHQtb3BlbmVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aXNDb250ZXh0TWVudSAmJiAoXHJcbiAgICAgICAgICAgIDxDb250ZXh0TWVudVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2NvbnRleHRNZW51T3B0aW9uc31cclxuICAgICAgICAgICAgICBjb29yZGluYXRlcz17Y29udGV4dE1lbnVQb3NpdGlvbn1cclxuICAgICAgICAgICAgICBjb250ZXh0TWVudT17aXNDb250ZXh0TWVudX1cclxuICAgICAgICAgICAgICBzZXRDb250ZXh0TWVudT17c2V0SXNDb250ZXh0TWVudX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdExpc3RIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiQXZhdGFyIiwiVXNlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQnNGaWxsQ2hhdExlZnRUZXh0RmlsbCIsIkJzVGhyZWVEb3RzVmVydGljYWwiLCJDaGF0TGlzdEhlYWRlciIsInVzZXJJbmZvIiwidXNlciIsIm5ld1VzZXIiLCJjb250YWN0UGFnZSIsInNldENvbnRhY3RQYWdlIiwiaGFuZGxlQWxsQ29udGFQYWdlIiwiaXNDb250ZXh0TWVudSIsInNldElzQ29udGV4dE1lbnUiLCJ1c2VTdGF0ZSIsImNvbnRleHRNZW51UG9zaXRpb24iLCJzZXRDb250ZXh0TWVudVBvc2l0aW9uIiwieCIsInkiLCJjb250ZXh0TWVudU9wdGlvbnMiLCJuYW1lIiwiY2FsbGJhY2siLCJleGl0Q2hhdCIsInNob3dDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VYIiwicGFnZVkiLCJkaXYiLCJjbGFzc05hbWUiLCJ0eXBlIiwiaW1hZ2UiLCJwcm9maWxlUGljdHVyZSIsInRpdGxlIiwib25DbGljayIsImlkIiwiQ29udGV4dE1lbnUiLCJvcHRpb25zIiwiY29vcmRpbmF0ZXMiLCJjb250ZXh0TWVudSIsInNldENvbnRleHRNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ChatListHeader.jsx\n"));

/***/ })

});