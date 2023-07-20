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

/***/ "./src/components/Chat/ChatHeader.jsx":
/*!********************************************!*\
  !*** ./src/components/Chat/ChatHeader.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/_app */ \"./src/pages/_app.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatHeader() {\n    _s();\n    const { setMessagesSearch , currentChatUser , setVideoCall , setVoiceCall  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const [isContextMenu, setIsContextMenu] = useState(false);\n    const [contextMenuPosition, setContextMenuPosition] = useState({\n        x: 0,\n        y: 0\n    });\n    const contextMenuOptions = [\n        {\n            name: \"Take photo\",\n            callback: ()=>{\n                setShowCapture(true);\n            }\n        }\n    ];\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setIsContextMenu(true);\n        setContextMenuPosition({\n            x: e.pageX - 50,\n            y: e.pageY + 20\n        });\n    };\n    const handleVoiceCall = ()=>{\n        setVoiceCall({\n            ...currentChatUser,\n            type: \"out-going\",\n            roomId: Date.now(),\n            callType: \"voice\"\n        });\n    };\n    const handleVideoCall = ()=>{\n        setVideoCall({\n            ...currentChatUser,\n            type: \"out-going\",\n            roomId: Date.now(),\n            callType: \"video\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-6 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"sm\",\n                        image: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.profilePicture\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-primary-strong  \",\n                                children: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary text-sm \",\n                                children: \"Online/offline\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdCall, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: handleVoiceCall\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoVideocam, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: handleVideoCall\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiSearchAlt2, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: ()=>setMessagesSearch(true)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsThreeDotsVertical, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatHeader, \"eVm8NButPCagrlg3X6nhAgt3NbI=\");\n_c = ChatHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatHeader);\nvar _c;\n$RefreshReg$(_c, \"ChatHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRIZWFkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDWTtBQUNFO0FBQ0s7QUFDQztBQUNPO0FBQ2xCO0FBQ1E7QUFFM0MsU0FBU1EsYUFBYTs7SUFDcEIsTUFBTSxFQUNKQyxrQkFBaUIsRUFDakJDLGdCQUFlLEVBRWZDLGFBQVksRUFFWkMsYUFBWSxFQUNiLEdBQUdOLGlEQUFVQSxDQUFDQyxtREFBV0E7SUFDMUIsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR0MsU0FBUyxLQUFLO0lBQ3hELE1BQU0sQ0FBQ0MscUJBQXFCQyx1QkFBdUIsR0FBR0YsU0FBUztRQUM3REcsR0FBRztRQUNIQyxHQUFHO0lBQ0w7SUFDQSxNQUFNQyxxQkFBcUI7UUFDekI7WUFDRUMsTUFBTTtZQUNOQyxVQUFVLElBQU07Z0JBQ2RDLGVBQWUsSUFBSTtZQUNyQjtRQUNGO0tBQ0Q7SUFFRCxNQUFNQyxrQkFBa0IsQ0FBQ0MsSUFBTTtRQUM3QkEsRUFBRUMsY0FBYztRQUNoQlosaUJBQWlCLElBQUk7UUFDckJHLHVCQUF1QjtZQUFFQyxHQUFHTyxFQUFFRSxLQUFLLEdBQUc7WUFBSVIsR0FBR00sRUFBRUcsS0FBSyxHQUFHO1FBQUc7SUFDNUQ7SUFFQSxNQUFNQyxrQkFBa0IsSUFBTTtRQUM1QmpCLGFBQWE7WUFDWCxHQUFHRixlQUFlO1lBQ2xCb0IsTUFBTTtZQUNOQyxRQUFRQyxLQUFLQyxHQUFHO1lBQ2hCQyxVQUFVO1FBQ1o7SUFDRjtJQUNBLE1BQU1DLGtCQUFrQixJQUFNO1FBQzVCeEIsYUFBYTtZQUNYLEdBQUdELGVBQWU7WUFDbEJvQixNQUFNO1lBQ05DLFFBQVFDLEtBQUtDLEdBQUc7WUFDaEJDLFVBQVU7UUFDWjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNwQyxzREFBTUE7d0JBQUM2QixNQUFLO3dCQUFLUSxPQUFPNUIsNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUI2QixjQUFjOzs7Ozs7a0NBQ3hELDhEQUFDSDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFLSCxXQUFVOzBDQUF5QjNCLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCVyxJQUFJOzs7Ozs7MENBQzlELDhEQUFDbUI7Z0NBQUtILFdBQVU7MENBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzlDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNuQyxrREFBTUE7d0JBQ0xtQyxXQUFVO3dCQUNWSSxTQUFTWjs7Ozs7O2tDQUVYLDhEQUFDMUIsdURBQVVBO3dCQUNUa0MsV0FBVTt3QkFDVkksU0FBU047Ozs7OztrQ0FFWCw4REFBQy9CLHdEQUFZQTt3QkFDWGlDLFdBQVU7d0JBQ1ZJLFNBQVMsSUFBTWhDLGtCQUFrQixJQUFJOzs7Ozs7a0NBRXZDLDhEQUFDSiwrREFBbUJBO3dCQUFDZ0MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZDO0dBdkVTN0I7S0FBQUE7QUF5RVQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9DaGF0SGVhZGVyLmpzeD9hYjhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi4vY29tbW9uL0F2YXRhclwiO1xyXG5pbXBvcnQgeyBNZENhbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHsgSW9WaWRlb2NhbSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcclxuaW1wb3J0IHsgQmlTZWFyY2hBbHQyIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcbmltcG9ydCB7IEJzVGhyZWVEb3RzVmVydGljYWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCJAL3BhZ2VzL19hcHBcIjtcclxuXHJcbmZ1bmN0aW9uIENoYXRIZWFkZXIoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgc2V0TWVzc2FnZXNTZWFyY2gsXHJcbiAgICBjdXJyZW50Q2hhdFVzZXIsXHJcblxyXG4gICAgc2V0VmlkZW9DYWxsLFxyXG5cclxuICAgIHNldFZvaWNlQ2FsbCxcclxuICB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW2lzQ29udGV4dE1lbnUsIHNldElzQ29udGV4dE1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb250ZXh0TWVudVBvc2l0aW9uLCBzZXRDb250ZXh0TWVudVBvc2l0aW9uXSA9IHVzZVN0YXRlKHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbnRleHRNZW51T3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJUYWtlIHBob3RvXCIsXHJcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0NhcHR1cmUodHJ1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHNob3dDb250ZXh0TWVudSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0NvbnRleHRNZW51KHRydWUpO1xyXG4gICAgc2V0Q29udGV4dE1lbnVQb3NpdGlvbih7IHg6IGUucGFnZVggLSA1MCwgeTogZS5wYWdlWSArIDIwIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVZvaWNlQ2FsbCA9ICgpID0+IHtcclxuICAgIHNldFZvaWNlQ2FsbCh7XHJcbiAgICAgIC4uLmN1cnJlbnRDaGF0VXNlcixcclxuICAgICAgdHlwZTogXCJvdXQtZ29pbmdcIixcclxuICAgICAgcm9vbUlkOiBEYXRlLm5vdygpLFxyXG4gICAgICBjYWxsVHlwZTogXCJ2b2ljZVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVWaWRlb0NhbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRWaWRlb0NhbGwoe1xyXG4gICAgICAuLi5jdXJyZW50Q2hhdFVzZXIsXHJcbiAgICAgIHR5cGU6IFwib3V0LWdvaW5nXCIsXHJcbiAgICAgIHJvb21JZDogRGF0ZS5ub3coKSxcclxuICAgICAgY2FsbFR5cGU6IFwidmlkZW9cIixcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xNiBweC00IHB5LTMgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kIHotMTAgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTYgXCI+XHJcbiAgICAgICAgPEF2YXRhciB0eXBlPVwic21cIiBpbWFnZT17Y3VycmVudENoYXRVc2VyPy5wcm9maWxlUGljdHVyZX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktc3Ryb25nICBcIj57Y3VycmVudENoYXRVc2VyPy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IHRleHQtc20gXCI+T25saW5lL29mZmxpbmU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgXCI+XHJcbiAgICAgICAgPE1kQ2FsbFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsICBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVm9pY2VDYWxsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElvVmlkZW9jYW1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bCAgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVZpZGVvQ2FsbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCaVNlYXJjaEFsdDJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bCAgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lc3NhZ2VzU2VhcmNoKHRydWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJzVGhyZWVEb3RzVmVydGljYWwgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsICBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIk1kQ2FsbCIsIklvVmlkZW9jYW0iLCJCaVNlYXJjaEFsdDIiLCJCc1RocmVlRG90c1ZlcnRpY2FsIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiQ2hhdEhlYWRlciIsInNldE1lc3NhZ2VzU2VhcmNoIiwiY3VycmVudENoYXRVc2VyIiwic2V0VmlkZW9DYWxsIiwic2V0Vm9pY2VDYWxsIiwiaXNDb250ZXh0TWVudSIsInNldElzQ29udGV4dE1lbnUiLCJ1c2VTdGF0ZSIsImNvbnRleHRNZW51UG9zaXRpb24iLCJzZXRDb250ZXh0TWVudVBvc2l0aW9uIiwieCIsInkiLCJjb250ZXh0TWVudU9wdGlvbnMiLCJuYW1lIiwiY2FsbGJhY2siLCJzZXRTaG93Q2FwdHVyZSIsInNob3dDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VYIiwicGFnZVkiLCJoYW5kbGVWb2ljZUNhbGwiLCJ0eXBlIiwicm9vbUlkIiwiRGF0ZSIsIm5vdyIsImNhbGxUeXBlIiwiaGFuZGxlVmlkZW9DYWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1hZ2UiLCJwcm9maWxlUGljdHVyZSIsInNwYW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatHeader.jsx\n"));

/***/ })

});