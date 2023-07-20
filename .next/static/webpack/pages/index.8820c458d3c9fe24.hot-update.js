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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/_app */ \"./src/pages/_app.jsx\");\n/* harmony import */ var _common_ContextMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ChatHeader() {\n    _s();\n    const { setMessagesSearch , currentChatUser , setVideoCall , exitChat , setVoiceCall  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const [isContextMenu, setIsContextMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [contextMenuPosition, setContextMenuPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const contextMenuOptions = [\n        {\n            name: \"Exit\",\n            callback: async ()=>{\n                exitChat();\n            }\n        }\n    ];\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setIsContextMenu(true);\n        setContextMenuPosition({\n            x: e.pageX - 50,\n            y: e.pageY + 20\n        });\n    };\n    const handleVoiceCall = ()=>{\n        setVoiceCall({\n            ...currentChatUser,\n            type: \"out-going\",\n            roomId: Date.now(),\n            callType: \"voice\"\n        });\n    };\n    const handleVideoCall = ()=>{\n        setVideoCall({\n            ...currentChatUser,\n            type: \"out-going\",\n            roomId: Date.now(),\n            callType: \"video\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-6 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"sm\",\n                        image: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.profilePicture\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-primary-strong  \",\n                                children: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary text-sm \",\n                                children: \"Online/offline\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdCall, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: handleVoiceCall\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoVideocam, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: handleVideoCall\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiSearchAlt2, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: ()=>setMessagesSearch(true)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsThreeDotsVertical, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: (e)=>showContextMenu\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    isContextMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ContextMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        options: contextMenuOptions,\n                        coordinates: contextMenuPosition,\n                        contextMenu: isContextMenu,\n                        setContextMenu: setIsContextMenu\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatHeader, \"hIWQS0gQOrnWcQHS6/+aKNPGn1I=\");\n_c = ChatHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatHeader);\nvar _c;\n$RefreshReg$(_c, \"ChatHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRIZWFkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0Y7QUFDRTtBQUNLO0FBQ0M7QUFDTztBQUNsQjtBQUNRO0FBQ0s7QUFFaEQsU0FBU1UsYUFBYTs7SUFDcEIsTUFBTSxFQUNKQyxrQkFBaUIsRUFDakJDLGdCQUFlLEVBQ2ZDLGFBQVksRUFDWkMsU0FBUSxFQUNSQyxhQUFZLEVBQ2IsR0FBR1IsaURBQVVBLENBQUNDLG1EQUFXQTtJQUMxQixNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHaEIsK0NBQVFBLENBQUMsS0FBSztJQUN4RCxNQUFNLENBQUNpQixxQkFBcUJDLHVCQUF1QixHQUFHbEIsK0NBQVFBLENBQUM7UUFDN0RtQixHQUFHO1FBQ0hDLEdBQUc7SUFDTDtJQUNBLE1BQU1DLHFCQUFxQjtRQUN6QjtZQUNFQyxNQUFNO1lBQ05DLFVBQVUsVUFBWTtnQkFDcEJWO1lBQ0Y7UUFDRjtLQUNEO0lBRUQsTUFBTVcsa0JBQWtCLENBQUNDLElBQU07UUFDN0JBLEVBQUVDLGNBQWM7UUFDaEJWLGlCQUFpQixJQUFJO1FBQ3JCRSx1QkFBdUI7WUFBRUMsR0FBR00sRUFBRUUsS0FBSyxHQUFHO1lBQUlQLEdBQUdLLEVBQUVHLEtBQUssR0FBRztRQUFHO0lBQzVEO0lBRUEsTUFBTUMsa0JBQWtCLElBQU07UUFDNUJmLGFBQWE7WUFDWCxHQUFHSCxlQUFlO1lBQ2xCbUIsTUFBTTtZQUNOQyxRQUFRQyxLQUFLQyxHQUFHO1lBQ2hCQyxVQUFVO1FBQ1o7SUFDRjtJQUNBLE1BQU1DLGtCQUFrQixJQUFNO1FBQzVCdkIsYUFBYTtZQUNYLEdBQUdELGVBQWU7WUFDbEJtQixNQUFNO1lBQ05DLFFBQVFDLEtBQUtDLEdBQUc7WUFDaEJDLFVBQVU7UUFDWjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNwQyxzREFBTUE7d0JBQUM2QixNQUFLO3dCQUFLUSxPQUFPM0IsNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUI0QixjQUFjOzs7Ozs7a0NBQ3hELDhEQUFDSDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFLSCxXQUFVOzBDQUF5QjFCLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCVyxJQUFJOzs7Ozs7MENBQzlELDhEQUFDa0I7Z0NBQUtILFdBQVU7MENBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzlDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNuQyxrREFBTUE7d0JBQ0xtQyxXQUFVO3dCQUNWSSxTQUFTWjs7Ozs7O2tDQUVYLDhEQUFDMUIsdURBQVVBO3dCQUNUa0MsV0FBVTt3QkFDVkksU0FBU047Ozs7OztrQ0FFWCw4REFBQy9CLHdEQUFZQTt3QkFDWGlDLFdBQVU7d0JBQ1ZJLFNBQVMsSUFBTS9CLGtCQUFrQixJQUFJOzs7Ozs7a0NBRXZDLDhEQUFDTCwrREFBbUJBO3dCQUNsQmdDLFdBQVU7d0JBQ1ZJLFNBQVMsQ0FBQ2hCLElBQUtEOzs7Ozs7b0JBRWhCVCwrQkFDQyw4REFBQ1AsMkRBQVdBO3dCQUNWa0MsU0FBU3JCO3dCQUNUc0IsYUFBYTFCO3dCQUNiMkIsYUFBYTdCO3dCQUNiOEIsZ0JBQWdCN0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QjtHQWpGU1A7S0FBQUE7QUFtRlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9DaGF0SGVhZGVyLmpzeD9hYjhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21tb24vQXZhdGFyXCI7XHJcbmltcG9ydCB7IE1kQ2FsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBJb1ZpZGVvY2FtIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xyXG5pbXBvcnQgeyBCaVNlYXJjaEFsdDIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcclxuaW1wb3J0IHsgQnNUaHJlZURvdHNWZXJ0aWNhbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIkAvcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSBcIi4uL2NvbW1vbi9Db250ZXh0TWVudVwiO1xyXG5cclxuZnVuY3Rpb24gQ2hhdEhlYWRlcigpIHtcclxuICBjb25zdCB7XHJcbiAgICBzZXRNZXNzYWdlc1NlYXJjaCxcclxuICAgIGN1cnJlbnRDaGF0VXNlcixcclxuICAgIHNldFZpZGVvQ2FsbCxcclxuICAgIGV4aXRDaGF0LFxyXG4gICAgc2V0Vm9pY2VDYWxsLFxyXG4gIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbaXNDb250ZXh0TWVudSwgc2V0SXNDb250ZXh0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbnRleHRNZW51UG9zaXRpb24sIHNldENvbnRleHRNZW51UG9zaXRpb25dID0gdXNlU3RhdGUoe1xyXG4gICAgeDogMCxcclxuICAgIHk6IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgY29udGV4dE1lbnVPcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkV4aXRcIixcclxuICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IHtcclxuICAgICAgICBleGl0Q2hhdCgpO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBzaG93Q29udGV4dE1lbnUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNDb250ZXh0TWVudSh0cnVlKTtcclxuICAgIHNldENvbnRleHRNZW51UG9zaXRpb24oeyB4OiBlLnBhZ2VYIC0gNTAsIHk6IGUucGFnZVkgKyAyMCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVWb2ljZUNhbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRWb2ljZUNhbGwoe1xyXG4gICAgICAuLi5jdXJyZW50Q2hhdFVzZXIsXHJcbiAgICAgIHR5cGU6IFwib3V0LWdvaW5nXCIsXHJcbiAgICAgIHJvb21JZDogRGF0ZS5ub3coKSxcclxuICAgICAgY2FsbFR5cGU6IFwidm9pY2VcIixcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlVmlkZW9DYWxsID0gKCkgPT4ge1xyXG4gICAgc2V0VmlkZW9DYWxsKHtcclxuICAgICAgLi4uY3VycmVudENoYXRVc2VyLFxyXG4gICAgICB0eXBlOiBcIm91dC1nb2luZ1wiLFxyXG4gICAgICByb29tSWQ6IERhdGUubm93KCksXHJcbiAgICAgIGNhbGxUeXBlOiBcInZpZGVvXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTYgcHgtNCBweS0zIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBiZy1wYW5lbC1oZWFkZXItYmFja2dyb3VuZCB6LTEwIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC02IFwiPlxyXG4gICAgICAgIDxBdmF0YXIgdHlwZT1cInNtXCIgaW1hZ2U9e2N1cnJlbnRDaGF0VXNlcj8ucHJvZmlsZVBpY3R1cmV9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5LXN0cm9uZyAgXCI+e2N1cnJlbnRDaGF0VXNlcj8ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LXNtIFwiPk9ubGluZS9vZmZsaW5lPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IFwiPlxyXG4gICAgICAgIDxNZENhbGxcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bCAgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVZvaWNlQ2FsbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJb1ZpZGVvY2FtXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGwgIFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVWaWRlb0NhbGx9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QmlTZWFyY2hBbHQyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGwgIFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNZXNzYWdlc1NlYXJjaCh0cnVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCc1RocmVlRG90c1ZlcnRpY2FsXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGwgIFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT5zaG93Q29udGV4dE1lbnV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7aXNDb250ZXh0TWVudSAmJiAoXHJcbiAgICAgICAgICA8Q29udGV4dE1lbnVcclxuICAgICAgICAgICAgb3B0aW9ucz17Y29udGV4dE1lbnVPcHRpb25zfVxyXG4gICAgICAgICAgICBjb29yZGluYXRlcz17Y29udGV4dE1lbnVQb3NpdGlvbn1cclxuICAgICAgICAgICAgY29udGV4dE1lbnU9e2lzQ29udGV4dE1lbnV9XHJcbiAgICAgICAgICAgIHNldENvbnRleHRNZW51PXtzZXRJc0NvbnRleHRNZW51fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXZhdGFyIiwiTWRDYWxsIiwiSW9WaWRlb2NhbSIsIkJpU2VhcmNoQWx0MiIsIkJzVGhyZWVEb3RzVmVydGljYWwiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJDb250ZXh0TWVudSIsIkNoYXRIZWFkZXIiLCJzZXRNZXNzYWdlc1NlYXJjaCIsImN1cnJlbnRDaGF0VXNlciIsInNldFZpZGVvQ2FsbCIsImV4aXRDaGF0Iiwic2V0Vm9pY2VDYWxsIiwiaXNDb250ZXh0TWVudSIsInNldElzQ29udGV4dE1lbnUiLCJjb250ZXh0TWVudVBvc2l0aW9uIiwic2V0Q29udGV4dE1lbnVQb3NpdGlvbiIsIngiLCJ5IiwiY29udGV4dE1lbnVPcHRpb25zIiwibmFtZSIsImNhbGxiYWNrIiwic2hvd0NvbnRleHRNZW51IiwiZSIsInByZXZlbnREZWZhdWx0IiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVZvaWNlQ2FsbCIsInR5cGUiLCJyb29tSWQiLCJEYXRlIiwibm93IiwiY2FsbFR5cGUiLCJoYW5kbGVWaWRlb0NhbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWFnZSIsInByb2ZpbGVQaWN0dXJlIiwic3BhbiIsIm9uQ2xpY2siLCJvcHRpb25zIiwiY29vcmRpbmF0ZXMiLCJjb250ZXh0TWVudSIsInNldENvbnRleHRNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatHeader.jsx\n"));

/***/ })

});