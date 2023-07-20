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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/_app */ \"./src/pages/_app.jsx\");\n/* harmony import */ var _common_ContextMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ChatHeader() {\n    _s();\n    const { setMessagesSearch , currentChatUser , setVideoCall , setVoiceCall  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const [isContextMenu, setIsContextMenu] = useState(false);\n    const [contextMenuPosition, setContextMenuPosition] = useState({\n        x: 0,\n        y: 0\n    });\n    const contextMenuOptions = [\n        {\n            name: \"Exit\",\n            callback: async ()=>{\n                setShowCapture(true);\n            }\n        }\n    ];\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setIsContextMenu(true);\n        setContextMenuPosition({\n            x: e.pageX - 50,\n            y: e.pageY + 20\n        });\n    };\n    const handleVoiceCall = ()=>{\n        setVoiceCall({\n            ...currentChatUser,\n            type: \"out-going\",\n            roomId: Date.now(),\n            callType: \"voice\"\n        });\n    };\n    const handleVideoCall = ()=>{\n        setVideoCall({\n            ...currentChatUser,\n            type: \"out-going\",\n            roomId: Date.now(),\n            callType: \"video\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-6 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"sm\",\n                        image: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.profilePicture\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-primary-strong  \",\n                                children: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary text-sm \",\n                                children: \"Online/offline\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdCall, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: handleVoiceCall\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoVideocam, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: handleVideoCall\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiSearchAlt2, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \",\n                        onClick: ()=>setMessagesSearch(true)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsThreeDotsVertical, {\n                        className: \"text-panel-header-icon cursor-pointer text-xl  \"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    isContextMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ContextMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        options: contextMenuOptions,\n                        coordinates: contextMenuPosition,\n                        contextMenu: isContextMenu,\n                        setContextMenu: setIsContextMenu\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 27\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatHeader, \"eVm8NButPCagrlg3X6nhAgt3NbI=\");\n_c = ChatHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatHeader);\nvar _c;\n$RefreshReg$(_c, \"ChatHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRIZWFkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDRTtBQUNLO0FBQ0M7QUFDTztBQUNsQjtBQUNRO0FBQ0s7QUFFaEQsU0FBU1MsYUFBYTs7SUFDcEIsTUFBTSxFQUNKQyxrQkFBaUIsRUFDakJDLGdCQUFlLEVBRWZDLGFBQVksRUFFWkMsYUFBWSxFQUNiLEdBQUdQLGlEQUFVQSxDQUFDQyxtREFBV0E7SUFDMUIsTUFBTSxDQUFDTyxlQUFlQyxpQkFBaUIsR0FBR0MsU0FBUyxLQUFLO0lBQ3hELE1BQU0sQ0FBQ0MscUJBQXFCQyx1QkFBdUIsR0FBR0YsU0FBUztRQUM3REcsR0FBRztRQUNIQyxHQUFHO0lBQ0w7SUFDQSxNQUFNQyxxQkFBcUI7UUFDekI7WUFDRUMsTUFBTTtZQUNOQyxVQUFVLFVBQVk7Z0JBQ3BCQyxlQUFlLElBQUk7WUFDckI7UUFDRjtLQUNEO0lBRUQsTUFBTUMsa0JBQWtCLENBQUNDLElBQU07UUFDN0JBLEVBQUVDLGNBQWM7UUFDaEJaLGlCQUFpQixJQUFJO1FBQ3JCRyx1QkFBdUI7WUFBRUMsR0FBR08sRUFBRUUsS0FBSyxHQUFHO1lBQUlSLEdBQUdNLEVBQUVHLEtBQUssR0FBRztRQUFHO0lBQzVEO0lBRUEsTUFBTUMsa0JBQWtCLElBQU07UUFDNUJqQixhQUFhO1lBQ1gsR0FBR0YsZUFBZTtZQUNsQm9CLE1BQU07WUFDTkMsUUFBUUMsS0FBS0MsR0FBRztZQUNoQkMsVUFBVTtRQUNaO0lBQ0Y7SUFDQSxNQUFNQyxrQkFBa0IsSUFBTTtRQUM1QnhCLGFBQWE7WUFDWCxHQUFHRCxlQUFlO1lBQ2xCb0IsTUFBTTtZQUNOQyxRQUFRQyxLQUFLQyxHQUFHO1lBQ2hCQyxVQUFVO1FBQ1o7SUFDRjtJQUNBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDckMsc0RBQU1BO3dCQUFDOEIsTUFBSzt3QkFBS1EsT0FBTzVCLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCNkIsY0FBYzs7Ozs7O2tDQUN4RCw4REFBQ0g7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FBS0gsV0FBVTswQ0FBeUIzQiw0QkFBQUEsNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFpQlcsSUFBSTs7Ozs7OzBDQUM5RCw4REFBQ21CO2dDQUFLSCxXQUFVOzBDQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc5Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDcEMsa0RBQU1BO3dCQUNMb0MsV0FBVTt3QkFDVkksU0FBU1o7Ozs7OztrQ0FFWCw4REFBQzNCLHVEQUFVQTt3QkFDVG1DLFdBQVU7d0JBQ1ZJLFNBQVNOOzs7Ozs7a0NBRVgsOERBQUNoQyx3REFBWUE7d0JBQ1hrQyxXQUFVO3dCQUNWSSxTQUFTLElBQU1oQyxrQkFBa0IsSUFBSTs7Ozs7O2tDQUV2Qyw4REFBQ0wsK0RBQW1CQTt3QkFBQ2lDLFdBQVU7Ozs7OztvQkFDOUJ4QiwrQkFBaUIsOERBQUNOLDJEQUFXQTt3QkFBQ21DLFNBQVN0Qjt3QkFDeEN1QixhQUFhM0I7d0JBQ2I0QixhQUFhL0I7d0JBQ2JnQyxnQkFBZ0IvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCO0dBNUVTTjtLQUFBQTtBQThFVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRIZWFkZXIuanN4P2FiOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21tb24vQXZhdGFyXCI7XHJcbmltcG9ydCB7IE1kQ2FsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBJb1ZpZGVvY2FtIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xyXG5pbXBvcnQgeyBCaVNlYXJjaEFsdDIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcclxuaW1wb3J0IHsgQnNUaHJlZURvdHNWZXJ0aWNhbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIkAvcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSBcIi4uL2NvbW1vbi9Db250ZXh0TWVudVwiO1xyXG5cclxuZnVuY3Rpb24gQ2hhdEhlYWRlcigpIHtcclxuICBjb25zdCB7XHJcbiAgICBzZXRNZXNzYWdlc1NlYXJjaCxcclxuICAgIGN1cnJlbnRDaGF0VXNlcixcclxuXHJcbiAgICBzZXRWaWRlb0NhbGwsXHJcblxyXG4gICAgc2V0Vm9pY2VDYWxsLFxyXG4gIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbaXNDb250ZXh0TWVudSwgc2V0SXNDb250ZXh0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbnRleHRNZW51UG9zaXRpb24sIHNldENvbnRleHRNZW51UG9zaXRpb25dID0gdXNlU3RhdGUoe1xyXG4gICAgeDogMCxcclxuICAgIHk6IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgY29udGV4dE1lbnVPcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkV4aXRcIixcclxuICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRTaG93Q2FwdHVyZSh0cnVlKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc2hvd0NvbnRleHRNZW51ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzQ29udGV4dE1lbnUodHJ1ZSk7XHJcbiAgICBzZXRDb250ZXh0TWVudVBvc2l0aW9uKHsgeDogZS5wYWdlWCAtIDUwLCB5OiBlLnBhZ2VZICsgMjAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVm9pY2VDYWxsID0gKCkgPT4ge1xyXG4gICAgc2V0Vm9pY2VDYWxsKHtcclxuICAgICAgLi4uY3VycmVudENoYXRVc2VyLFxyXG4gICAgICB0eXBlOiBcIm91dC1nb2luZ1wiLFxyXG4gICAgICByb29tSWQ6IERhdGUubm93KCksXHJcbiAgICAgIGNhbGxUeXBlOiBcInZvaWNlXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVZpZGVvQ2FsbCA9ICgpID0+IHtcclxuICAgIHNldFZpZGVvQ2FsbCh7XHJcbiAgICAgIC4uLmN1cnJlbnRDaGF0VXNlcixcclxuICAgICAgdHlwZTogXCJvdXQtZ29pbmdcIixcclxuICAgICAgcm9vbUlkOiBEYXRlLm5vdygpLFxyXG4gICAgICBjYWxsVHlwZTogXCJ2aWRlb1wiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IHB4LTQgcHktMyBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYmctcGFuZWwtaGVhZGVyLWJhY2tncm91bmQgei0xMCBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNiBcIj5cclxuICAgICAgICA8QXZhdGFyIHR5cGU9XCJzbVwiIGltYWdlPXtjdXJyZW50Q2hhdFVzZXI/LnByb2ZpbGVQaWN0dXJlfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1zdHJvbmcgIFwiPntjdXJyZW50Q2hhdFVzZXI/Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgdGV4dC1zbSBcIj5PbmxpbmUvb2ZmbGluZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBcIj5cclxuICAgICAgICA8TWRDYWxsXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGwgIFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVWb2ljZUNhbGx9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW9WaWRlb2NhbVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsICBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVmlkZW9DYWxsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJpU2VhcmNoQWx0MlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsICBcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TWVzc2FnZXNTZWFyY2godHJ1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnNUaHJlZURvdHNWZXJ0aWNhbCBjbGFzc05hbWU9XCJ0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGwgIFwiIC8+XHJcbiAgICAgICAge2lzQ29udGV4dE1lbnUgJiYgPENvbnRleHRNZW51IG9wdGlvbnM9e2NvbnRleHRNZW51T3B0aW9uc31cclxuICAgICAgICBjb29yZGluYXRlcz17Y29udGV4dE1lbnVQb3NpdGlvbn1cclxuICAgICAgICBjb250ZXh0TWVudT17aXNDb250ZXh0TWVudX1cclxuICAgICAgICBzZXRDb250ZXh0TWVudT17c2V0SXNDb250ZXh0TWVudX1cclxuICAgICAgICAgLz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwiTWRDYWxsIiwiSW9WaWRlb2NhbSIsIkJpU2VhcmNoQWx0MiIsIkJzVGhyZWVEb3RzVmVydGljYWwiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJDb250ZXh0TWVudSIsIkNoYXRIZWFkZXIiLCJzZXRNZXNzYWdlc1NlYXJjaCIsImN1cnJlbnRDaGF0VXNlciIsInNldFZpZGVvQ2FsbCIsInNldFZvaWNlQ2FsbCIsImlzQ29udGV4dE1lbnUiLCJzZXRJc0NvbnRleHRNZW51IiwidXNlU3RhdGUiLCJjb250ZXh0TWVudVBvc2l0aW9uIiwic2V0Q29udGV4dE1lbnVQb3NpdGlvbiIsIngiLCJ5IiwiY29udGV4dE1lbnVPcHRpb25zIiwibmFtZSIsImNhbGxiYWNrIiwic2V0U2hvd0NhcHR1cmUiLCJzaG93Q29udGV4dE1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYWdlWCIsInBhZ2VZIiwiaGFuZGxlVm9pY2VDYWxsIiwidHlwZSIsInJvb21JZCIsIkRhdGUiLCJub3ciLCJjYWxsVHlwZSIsImhhbmRsZVZpZGVvQ2FsbCIsImRpdiIsImNsYXNzTmFtZSIsImltYWdlIiwicHJvZmlsZVBpY3R1cmUiLCJzcGFuIiwib25DbGljayIsIm9wdGlvbnMiLCJjb29yZGluYXRlcyIsImNvbnRleHRNZW51Iiwic2V0Q29udGV4dE1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatHeader.jsx\n"));

/***/ })

});