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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/_app */ \"./src/pages/_app.jsx\");\n/* harmony import */ var _common_ContextMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ChatHeader() {\n    var _onlineUsers_includes;\n    _s();\n    const { setMessagesSearch , currentChatUser , setVideoCall , exitChat , onlineUsers , setVoiceCall  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const [isContextMenu, setIsContextMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [contextMenuPosition, setContextMenuPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const contextMenuOptions = [\n        {\n            name: \"Exit\",\n            callback: async ()=>{\n                exitChat();\n            }\n        }\n    ];\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setIsContextMenu(true);\n        setContextMenuPosition({\n            x: e.pageX - 50,\n            y: e.pageY + 20\n        });\n    };\n    const handleVoiceCall = ()=>{\n        setVoiceCall({\n            ...currentChatUser,\n            type: \"out-going\",\n            roomId: Date.now(),\n            callType: \"voice\"\n        });\n    };\n    const handleVideoCall = ()=>{\n        setVideoCall({\n            ...currentChatUser,\n            type: \"out-going\",\n            roomId: Date.now(),\n            callType: \"video\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-50 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-6 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"sm\",\n                        image: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.profilePicture\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-primary-strong  \",\n                                children: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary text-sm \",\n                                children: (onlineUsers === null || onlineUsers === void 0 ? void 0 : (_onlineUsers_includes = onlineUsers.includes) === null || _onlineUsers_includes === void 0 ? void 0 : _onlineUsers_includes.call(onlineUsers, currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.id)) ? \"online\" : \"offline\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdCall, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: handleVoiceCall\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoVideocam, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: handleVideoCall\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiSearchAlt2, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: ()=>setMessagesSearch(true)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsThreeDotsVertical, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        id: \"context-opener\",\n                        onClick: (e)=>showContextMenu(e)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    isContextMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ContextMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        options: contextMenuOptions,\n                        coordinates: contextMenuPosition,\n                        contextMenu: isContextMenu,\n                        setContextMenu: setIsContextMenu\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatHeader, \"1jZCygHUG4KdxFQsJyF1fgX3t+s=\");\n_c = ChatHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatHeader);\nvar _c;\n$RefreshReg$(_c, \"ChatHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRIZWFkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0Y7QUFDRTtBQUNLO0FBQ0M7QUFDTztBQUNsQjtBQUNRO0FBQ0s7QUFFaEQsU0FBU1UsYUFBYTtRQW9EVEM7O0lBbkRYLE1BQU0sRUFDSkMsa0JBQWlCLEVBQ2pCQyxnQkFBZSxFQUNmQyxhQUFZLEVBQ1pDLFNBQVEsRUFDUkosWUFBVyxFQUNYSyxhQUFZLEVBQ2IsR0FBR1QsaURBQVVBLENBQUNDLG1EQUFXQTtJQUMxQixNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHakIsK0NBQVFBLENBQUMsS0FBSztJQUN4RCxNQUFNLENBQUNrQixxQkFBcUJDLHVCQUF1QixHQUFHbkIsK0NBQVFBLENBQUM7UUFDN0RvQixHQUFHO1FBQ0hDLEdBQUc7SUFDTDtJQUNBLE1BQU1DLHFCQUFxQjtRQUN6QjtZQUNFQyxNQUFNO1lBQ05DLFVBQVUsVUFBWTtnQkFDcEJWO1lBQ0Y7UUFDRjtLQUNEO0lBRUQsTUFBTVcsa0JBQWtCLENBQUNDLElBQU07UUFDN0JBLEVBQUVDLGNBQWM7UUFDaEJWLGlCQUFpQixJQUFJO1FBQ3JCRSx1QkFBdUI7WUFBRUMsR0FBR00sRUFBRUUsS0FBSyxHQUFHO1lBQUlQLEdBQUdLLEVBQUVHLEtBQUssR0FBRztRQUFHO0lBQzVEO0lBRUEsTUFBTUMsa0JBQWtCLElBQU07UUFDNUJmLGFBQWE7WUFDWCxHQUFHSCxlQUFlO1lBQ2xCbUIsTUFBTTtZQUNOQyxRQUFRQyxLQUFLQyxHQUFHO1lBQ2hCQyxVQUFVO1FBQ1o7SUFDRjtJQUNBLE1BQU1DLGtCQUFrQixJQUFNO1FBQzVCdkIsYUFBYTtZQUNYLEdBQUdELGVBQWU7WUFDbEJtQixNQUFNO1lBQ05DLFFBQVFDLEtBQUtDLEdBQUc7WUFDaEJDLFVBQVU7UUFDWjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNyQyxzREFBTUE7d0JBQUM4QixNQUFLO3dCQUFLUSxPQUFPM0IsNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUI0QixjQUFjOzs7Ozs7a0NBQ3hELDhEQUFDSDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFLSCxXQUFVOzBDQUF5QjFCLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCVyxJQUFJOzs7Ozs7MENBQzlELDhEQUFDa0I7Z0NBQUtILFdBQVU7MENBQ2I1QixDQUFBQSx3QkFBQUEseUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLHdCQUFBQSxZQUFhZ0MsUUFBUSxjQUFyQmhDLG1DQUFBQSxLQUFBQSxJQUFBQSxzQkFBQUEsS0FBQUEsYUFBd0JFLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCK0IsRUFBRSxLQUFJLFdBQVcsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkxRSw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDcEMsa0RBQU1BO3dCQUNMb0MsV0FBVTt3QkFDVk0sU0FBU2Q7Ozs7OztrQ0FFWCw4REFBQzNCLHVEQUFVQTt3QkFDVG1DLFdBQVU7d0JBQ1ZNLFNBQVNSOzs7Ozs7a0NBRVgsOERBQUNoQyx3REFBWUE7d0JBQ1hrQyxXQUFVO3dCQUNWTSxTQUFTLElBQU1qQyxrQkFBa0IsSUFBSTs7Ozs7O2tDQUV2Qyw4REFBQ04sK0RBQW1CQTt3QkFDbEJpQyxXQUFVO3dCQUNWSyxJQUFHO3dCQUNIQyxTQUFTLENBQUNsQixJQUFNRCxnQkFBZ0JDOzs7Ozs7b0JBRWpDViwrQkFDQyw4REFBQ1IsMkRBQVdBO3dCQUNWcUMsU0FBU3ZCO3dCQUNUd0IsYUFBYTVCO3dCQUNiNkIsYUFBYS9CO3dCQUNiZ0MsZ0JBQWdCL0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QjtHQXJGU1I7S0FBQUE7QUF1RlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9DaGF0SGVhZGVyLmpzeD9hYjhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21tb24vQXZhdGFyXCI7XHJcbmltcG9ydCB7IE1kQ2FsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBJb1ZpZGVvY2FtIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xyXG5pbXBvcnQgeyBCaVNlYXJjaEFsdDIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcclxuaW1wb3J0IHsgQnNUaHJlZURvdHNWZXJ0aWNhbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIkAvcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSBcIi4uL2NvbW1vbi9Db250ZXh0TWVudVwiO1xyXG5cclxuZnVuY3Rpb24gQ2hhdEhlYWRlcigpIHtcclxuICBjb25zdCB7XHJcbiAgICBzZXRNZXNzYWdlc1NlYXJjaCxcclxuICAgIGN1cnJlbnRDaGF0VXNlcixcclxuICAgIHNldFZpZGVvQ2FsbCxcclxuICAgIGV4aXRDaGF0LFxyXG4gICAgb25saW5lVXNlcnMsXHJcbiAgICBzZXRWb2ljZUNhbGwsXHJcbiAgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IFtpc0NvbnRleHRNZW51LCBzZXRJc0NvbnRleHRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29udGV4dE1lbnVQb3NpdGlvbiwgc2V0Q29udGV4dE1lbnVQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICB4OiAwLFxyXG4gICAgeTogMCxcclxuICB9KTtcclxuICBjb25zdCBjb250ZXh0TWVudU9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRXhpdFwiLFxyXG4gICAgICBjYWxsYmFjazogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGV4aXRDaGF0KCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHNob3dDb250ZXh0TWVudSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0NvbnRleHRNZW51KHRydWUpO1xyXG4gICAgc2V0Q29udGV4dE1lbnVQb3NpdGlvbih7IHg6IGUucGFnZVggLSA1MCwgeTogZS5wYWdlWSArIDIwIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVZvaWNlQ2FsbCA9ICgpID0+IHtcclxuICAgIHNldFZvaWNlQ2FsbCh7XHJcbiAgICAgIC4uLmN1cnJlbnRDaGF0VXNlcixcclxuICAgICAgdHlwZTogXCJvdXQtZ29pbmdcIixcclxuICAgICAgcm9vbUlkOiBEYXRlLm5vdygpLFxyXG4gICAgICBjYWxsVHlwZTogXCJ2b2ljZVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVWaWRlb0NhbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRWaWRlb0NhbGwoe1xyXG4gICAgICAuLi5jdXJyZW50Q2hhdFVzZXIsXHJcbiAgICAgIHR5cGU6IFwib3V0LWdvaW5nXCIsXHJcbiAgICAgIHJvb21JZDogRGF0ZS5ub3coKSxcclxuICAgICAgY2FsbFR5cGU6IFwidmlkZW9cIixcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xNiBweC00IHB5LTMgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kIHotNTAgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTYgXCI+XHJcbiAgICAgICAgPEF2YXRhciB0eXBlPVwic21cIiBpbWFnZT17Y3VycmVudENoYXRVc2VyPy5wcm9maWxlUGljdHVyZX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnktc3Ryb25nICBcIj57Y3VycmVudENoYXRVc2VyPy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IHRleHQtc20gXCI+XHJcbiAgICAgICAgICAgIHtvbmxpbmVVc2Vycz8uaW5jbHVkZXM/LihjdXJyZW50Q2hhdFVzZXI/LmlkKSA/IFwib25saW5lXCIgOiBcIm9mZmxpbmVcIn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBcIj5cclxuICAgICAgICA8TWRDYWxsXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGwgIFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVWb2ljZUNhbGx9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW9WaWRlb2NhbVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsICBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVmlkZW9DYWxsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJpU2VhcmNoQWx0MlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsICBcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVzc2FnZXNTZWFyY2godHJ1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnNUaHJlZURvdHNWZXJ0aWNhbFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsICBcIlxyXG4gICAgICAgICAgaWQ9XCJjb250ZXh0LW9wZW5lclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2hvd0NvbnRleHRNZW51KGUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2lzQ29udGV4dE1lbnUgJiYgKFxyXG4gICAgICAgICAgPENvbnRleHRNZW51XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e2NvbnRleHRNZW51T3B0aW9uc31cclxuICAgICAgICAgICAgY29vcmRpbmF0ZXM9e2NvbnRleHRNZW51UG9zaXRpb259XHJcbiAgICAgICAgICAgIGNvbnRleHRNZW51PXtpc0NvbnRleHRNZW51fVxyXG4gICAgICAgICAgICBzZXRDb250ZXh0TWVudT17c2V0SXNDb250ZXh0TWVudX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0SGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF2YXRhciIsIk1kQ2FsbCIsIklvVmlkZW9jYW0iLCJCaVNlYXJjaEFsdDIiLCJCc1RocmVlRG90c1ZlcnRpY2FsIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiQ29udGV4dE1lbnUiLCJDaGF0SGVhZGVyIiwib25saW5lVXNlcnMiLCJzZXRNZXNzYWdlc1NlYXJjaCIsImN1cnJlbnRDaGF0VXNlciIsInNldFZpZGVvQ2FsbCIsImV4aXRDaGF0Iiwic2V0Vm9pY2VDYWxsIiwiaXNDb250ZXh0TWVudSIsInNldElzQ29udGV4dE1lbnUiLCJjb250ZXh0TWVudVBvc2l0aW9uIiwic2V0Q29udGV4dE1lbnVQb3NpdGlvbiIsIngiLCJ5IiwiY29udGV4dE1lbnVPcHRpb25zIiwibmFtZSIsImNhbGxiYWNrIiwic2hvd0NvbnRleHRNZW51IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVZvaWNlQ2FsbCIsInR5cGUiLCJyb29tSWQiLCJEYXRlIiwibm93IiwiY2FsbFR5cGUiLCJoYW5kbGVWaWRlb0NhbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWFnZSIsInByb2ZpbGVQaWN0dXJlIiwic3BhbiIsImluY2x1ZGVzIiwiaWQiLCJvbkNsaWNrIiwib3B0aW9ucyIsImNvb3JkaW5hdGVzIiwiY29udGV4dE1lbnUiLCJzZXRDb250ZXh0TWVudSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatHeader.jsx\n"));

/***/ })

});