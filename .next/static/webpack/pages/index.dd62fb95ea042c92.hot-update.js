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

/***/ "./src/components/Chatlist/ChatLIstItem.jsx":
/*!**************************************************!*\
  !*** ./src/components/Chatlist/ChatLIstItem.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/_app */ \"./src/pages/_app.jsx\");\n/* harmony import */ var _utils_CalculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/CalculateTime */ \"./src/utils/CalculateTime.js\");\n/* harmony import */ var _common_MessageStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/MessageStatus */ \"./src/components/common/MessageStatus.jsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../socket */ \"./socket.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatLIstItem(param) {\n    let { data , isContactPage =false  } = param;\n    _s();\n    const { user , currentChatUser , contactList , setMessages , messages , setContactList , setCurrentChatUser , setContactPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const updateContactListhandler = ()=>{\n        const updatedContactList = contactList === null || contactList === void 0 ? void 0 : contactList.map((contact)=>{\n            if (contact.id === data.id) {\n                return {\n                    ...contact,\n                    totalUnreadMessages: 0\n                };\n            }\n            return contact;\n        });\n        setContactList(updatedContactList);\n    };\n    const handleContactClick = ()=>{\n        if (isContactPage) {\n            setCurrentChatUser({\n                name: data.name,\n                about: data.about,\n                profilePicture: data.profilePicture,\n                email: data.email,\n                id: data.id\n            });\n            updateContactListhandler();\n            _socket__WEBPACK_IMPORTED_MODULE_6__.socket.emit(\"update-msg\", data === null || data === void 0 ? void 0 : data.id);\n        } else {\n            setCurrentChatUser(data);\n            setContactPage(false);\n            updateContactListhandler();\n            _socket__WEBPACK_IMPORTED_MODULE_6__.socket.emit(\"update-msg\", data === null || data === void 0 ? void 0 : data.id);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(messages);\n    }, [\n        messages\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex cursor-pointer items-center hover:bg-background-default-hover  \",\n        onClick: handleContactClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-w-fit px-5 pt-3 pb-1 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"lg\",\n                    image: data === null || data === void 0 ? void 0 : data.profilePicture\n                }, void 0, false, {\n                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-full flex flex-col justify-center mt-3 pr-2 w-full  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white \",\n                                    children: data.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            !isContactPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat(!data.totalUnreadMessages > 0 ? \"text-secondary\" : \" text-icon-green \", \" text-sm \"),\n                                    children: (0,_utils_CalculateTime__WEBPACK_IMPORTED_MODULE_4__.calculateTime)(data.createdAt)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex border-b border-conversation-border pb-2 pt-1 pr-2 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between w-full text-secondary \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-start gap-2 \",\n                                    children: [\n                                        isContactPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \" text-secondary line-clamp-1 text-sm \",\n                                            children: (data === null || data === void 0 ? void 0 : data.about) || \"\\xa0\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-1 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[200px] xl:max-w-[300px] \",\n                                            children: data.senderId == user.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_MessageStatus__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                messageStatus: data.messageStatus\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, this),\n                                        data.type == \"text\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \" truncate \",\n                                            children: data.message\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, this),\n                                        data.type == \"audio\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"flex gap-1 items-center \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaMicrophone, {\n                                                    className: \" text-panel-header-icon \"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \"Audio\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, this),\n                                        data.type == \"image\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"flex gap-1 items-center \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaCamera, {\n                                                    className: \" text-panel-header-icon \"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 19\n                                                }, this),\n                                                \"Image\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                data.totalUnreadMessages > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \" bg-icon-green w-[20px] h-[20px] rounded-full text-center text-sm text-black \",\n                                    children: data.totalUnreadMessages\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatLIstItem, \"474JFjjXF9HNw4IvdMlBHLB/CJw=\");\n_c = ChatLIstItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatLIstItem);\nvar _c;\n$RefreshReg$(_c, \"ChatLIstItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TElzdEl0ZW0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSDtBQUNLO0FBQ1I7QUFDbUI7QUFDRjtBQUNJO0FBQ2Y7QUFFekMsU0FBU1UsYUFBYSxLQUErQixFQUFFO1FBQWpDLEVBQUVDLEtBQUksRUFBRUMsZUFBZ0IsS0FBSyxHQUFFLEdBQS9COztJQUNwQixNQUFNLEVBQ0pDLEtBQUksRUFDSkMsZ0JBQWUsRUFDZkMsWUFBVyxFQUNYQyxZQUFXLEVBQ1hDLFNBQVEsRUFDUkMsZUFBYyxFQUNkQyxtQkFBa0IsRUFDbEJDLGVBQWMsRUFDZixHQUFHaEIsaURBQVVBLENBQUNELG1EQUFXQTtJQUUxQixNQUFNa0IsMkJBQTJCLElBQU07UUFDckMsTUFBTUMscUJBQXFCUCx3QkFBQUEseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFRLEdBQUcsQ0FBQyxDQUFDQyxVQUFZO1lBQ3ZELElBQUlBLFFBQVFDLEVBQUUsS0FBS2QsS0FBS2MsRUFBRSxFQUFFO2dCQUMxQixPQUFPO29CQUNMLEdBQUdELE9BQU87b0JBQ1ZFLHFCQUFxQjtnQkFDdkI7WUFDRixDQUFDO1lBQ0QsT0FBT0Y7UUFDVDtRQUNBTixlQUFlSTtJQUNqQjtJQUVBLE1BQU1LLHFCQUFxQixJQUFNO1FBQy9CLElBQUlmLGVBQWU7WUFDakJPLG1CQUFtQjtnQkFDakJTLE1BQU1qQixLQUFLaUIsSUFBSTtnQkFDZkMsT0FBT2xCLEtBQUtrQixLQUFLO2dCQUNqQkMsZ0JBQWdCbkIsS0FBS21CLGNBQWM7Z0JBQ25DQyxPQUFPcEIsS0FBS29CLEtBQUs7Z0JBQ2pCTixJQUFJZCxLQUFLYyxFQUFFO1lBQ2I7WUFDQUo7WUFDRlosZ0RBQVcsQ0FBQyxjQUFjRSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1jLEVBQUU7UUFDbEMsT0FBTztZQUNMTixtQkFBbUJSO1lBQ25CUyxlQUFlLEtBQUs7WUFDcEJDO1lBQ0FaLGdEQUFXLENBQUMsY0FBY0UsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNYyxFQUFFO1FBQ3BDLENBQUM7SUFDSDtJQUNBeEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkZ0MsUUFBUUMsR0FBRyxDQUFDakI7SUFDZCxHQUFHO1FBQUNBO0tBQVM7SUFFYixxQkFDRSw4REFBQ2tCO1FBQ0NDLFdBQVk7UUFDWkMsU0FBU1Y7OzBCQUVULDhEQUFDUTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2xDLHNEQUFNQTtvQkFBQ29DLE1BQUs7b0JBQUtDLE9BQU81QixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1tQixjQUFjOzs7Ozs7Ozs7OzswQkFFL0MsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDswQ0FDQyw0RUFBQ0s7b0NBQUtKLFdBQVU7OENBQWV6QixLQUFLaUIsSUFBSTs7Ozs7Ozs7Ozs7NEJBRXpDLENBQUNoQiwrQkFDQSw4REFBQ3VCO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDSTtvQ0FDQ0osV0FBVyxHQUlWLE9BSEMsQ0FBQ3pCLEtBQUtlLG1CQUFtQixHQUFHLElBQ3hCLG1CQUNBLG1CQUFtQixFQUN4Qjs4Q0FFQXJCLG1FQUFhQSxDQUFDTSxLQUFLOEIsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3JDLDhEQUFDTjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs7d0NBQ1p4Qiw4QkFDQyw4REFBQzRCOzRDQUFLSixXQUFVO3NEQUNiekIsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNa0IsS0FBSyxLQUFJOzs7OztpRUFHbEIsOERBQUNNOzRDQUFJQyxXQUFVO3NEQUNaekIsS0FBSytCLFFBQVEsSUFBSTdCLEtBQUtZLEVBQUUsa0JBQ3ZCLDhEQUFDbkIsNkRBQWFBO2dEQUFDcUMsZUFBZWhDLEtBQUtnQyxhQUFhOzs7Ozs7Ozs7O2dEQUdyRDt3Q0FDQWhDLEtBQUsyQixJQUFJLElBQUksd0JBQ1osOERBQUNFOzRDQUFLSixXQUFVO3NEQUFjekIsS0FBS2lDLE9BQU87Ozs7Ozt3Q0FFM0NqQyxLQUFLMkIsSUFBSSxJQUFJLHlCQUNaLDhEQUFDRTs0Q0FBS0osV0FBVTs7OERBQ2QsOERBQUM3Qix3REFBWUE7b0RBQUM2QixXQUFVOzs7Ozs7Z0RBQTZCOzs7Ozs7O3dDQUl4RHpCLEtBQUsyQixJQUFJLElBQUkseUJBQ1osOERBQUNFOzRDQUFLSixXQUFVOzs4REFDZCw4REFBQzVCLG9EQUFRQTtvREFBQzRCLFdBQVU7Ozs7OztnREFBNkI7Ozs7Ozs7Ozs7Ozs7Z0NBS3REekIsS0FBS2UsbUJBQW1CLEdBQUcsbUJBQzFCLDhEQUFDYztvQ0FBS0osV0FBVTs4Q0FDYnpCLEtBQUtlLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekM7R0FsSFNoQjtLQUFBQTtBQW9IVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TElzdEl0ZW0uanN4P2NmOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21tb24vQXZhdGFyXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIkAvcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVRpbWUgfSBmcm9tIFwiQC91dGlscy9DYWxjdWxhdGVUaW1lXCI7XHJcbmltcG9ydCBNZXNzYWdlU3RhdHVzIGZyb20gXCIuLi9jb21tb24vTWVzc2FnZVN0YXR1c1wiO1xyXG5pbXBvcnQgeyBGYU1pY3JvcGhvbmUsIEZhQ2FtZXJhIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IHNvY2tldCB9IGZyb20gXCIuLi8uLi8uLi9zb2NrZXRcIjtcclxuXHJcbmZ1bmN0aW9uIENoYXRMSXN0SXRlbSh7IGRhdGEsIGlzQ29udGFjdFBhZ2UgPSBmYWxzZSB9KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdXNlcixcclxuICAgIGN1cnJlbnRDaGF0VXNlcixcclxuICAgIGNvbnRhY3RMaXN0LFxyXG4gICAgc2V0TWVzc2FnZXMsXHJcbiAgICBtZXNzYWdlcyxcclxuICAgIHNldENvbnRhY3RMaXN0LFxyXG4gICAgc2V0Q3VycmVudENoYXRVc2VyLFxyXG4gICAgc2V0Q29udGFjdFBhZ2UsXHJcbiAgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICBjb25zdCB1cGRhdGVDb250YWN0TGlzdGhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkQ29udGFjdExpc3QgPSBjb250YWN0TGlzdD8ubWFwKChjb250YWN0KSA9PiB7XHJcbiAgICAgIGlmIChjb250YWN0LmlkID09PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLmNvbnRhY3QsXHJcbiAgICAgICAgICB0b3RhbFVucmVhZE1lc3NhZ2VzOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRhY3Q7XHJcbiAgICB9KTtcclxuICAgIHNldENvbnRhY3RMaXN0KHVwZGF0ZWRDb250YWN0TGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29udGFjdENsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzQ29udGFjdFBhZ2UpIHtcclxuICAgICAgc2V0Q3VycmVudENoYXRVc2VyKHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgYWJvdXQ6IGRhdGEuYWJvdXQsXHJcbiAgICAgICAgcHJvZmlsZVBpY3R1cmU6IGRhdGEucHJvZmlsZVBpY3R1cmUsXHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgICB1cGRhdGVDb250YWN0TGlzdGhhbmRsZXIoKTtcclxuICAgIHNvY2tldC5lbWl0KFwidXBkYXRlLW1zZ1wiLCBkYXRhPy5pZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyZW50Q2hhdFVzZXIoZGF0YSk7XHJcbiAgICAgIHNldENvbnRhY3RQYWdlKGZhbHNlKTtcclxuICAgICAgdXBkYXRlQ29udGFjdExpc3RoYW5kbGVyKCk7XHJcbiAgICAgIHNvY2tldC5lbWl0KFwidXBkYXRlLW1zZ1wiLCBkYXRhPy5pZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZXMpO1xyXG4gIH0sIFttZXNzYWdlc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBob3ZlcjpiZy1iYWNrZ3JvdW5kLWRlZmF1bHQtaG92ZXIgIGB9XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbnRhY3RDbGlja31cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy1maXQgcHgtNSBwdC0zIHBiLTEgXCI+XHJcbiAgICAgICAgPEF2YXRhciB0eXBlPVwibGdcIiBpbWFnZT17ZGF0YT8ucHJvZmlsZVBpY3R1cmV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtdC0zIHByLTIgdy1mdWxsICBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBcIj57ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgeyFpc0NvbnRhY3RQYWdlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICFkYXRhLnRvdGFsVW5yZWFkTWVzc2FnZXMgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiIHRleHQtaWNvbi1ncmVlbiBcIlxyXG4gICAgICAgICAgICAgICAgfSB0ZXh0LXNtIGB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NhbGN1bGF0ZVRpbWUoZGF0YS5jcmVhdGVkQXQpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItYiBib3JkZXItY29udmVyc2F0aW9uLWJvcmRlciBwYi0yIHB0LTEgcHItMiBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIHRleHQtc2Vjb25kYXJ5IFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBnYXAtMiBcIj5cclxuICAgICAgICAgICAgICB7aXNDb250YWN0UGFnZSA/IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LXNlY29uZGFyeSBsaW5lLWNsYW1wLTEgdGV4dC1zbSBcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGE/LmFib3V0IHx8IFwiXFx1MDBhMFwifVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIG1heC13LVsyMDBweF0gc206bWF4LXctWzI1MHB4XSBtZDptYXgtdy1bMzAwcHhdIGxnOm1heC13LVsyMDBweF0geGw6bWF4LXctWzMwMHB4XSBcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEuc2VuZGVySWQgPT0gdXNlci5pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VTdGF0dXMgbWVzc2FnZVN0YXR1cz17ZGF0YS5tZXNzYWdlU3RhdHVzfSAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZGF0YS50eXBlID09IFwidGV4dFwiICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0cnVuY2F0ZSBcIj57ZGF0YS5tZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtkYXRhLnR5cGUgPT0gXCJhdWRpb1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmFNaWNyb3Bob25lIGNsYXNzTmFtZT1cIiB0ZXh0LXBhbmVsLWhlYWRlci1pY29uIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIEF1ZGlvXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZGF0YS50eXBlID09IFwiaW1hZ2VcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICAgICAgPEZhQ2FtZXJhIGNsYXNzTmFtZT1cIiB0ZXh0LXBhbmVsLWhlYWRlci1pY29uIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIEltYWdlXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtkYXRhLnRvdGFsVW5yZWFkTWVzc2FnZXMgPiAwICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgYmctaWNvbi1ncmVlbiB3LVsyMHB4XSBoLVsyMHB4XSByb3VuZGVkLWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWJsYWNrIFwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEudG90YWxVbnJlYWRNZXNzYWdlc31cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0TElzdEl0ZW07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkF2YXRhciIsIlVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsImNhbGN1bGF0ZVRpbWUiLCJNZXNzYWdlU3RhdHVzIiwiRmFNaWNyb3Bob25lIiwiRmFDYW1lcmEiLCJzb2NrZXQiLCJDaGF0TElzdEl0ZW0iLCJkYXRhIiwiaXNDb250YWN0UGFnZSIsInVzZXIiLCJjdXJyZW50Q2hhdFVzZXIiLCJjb250YWN0TGlzdCIsInNldE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJzZXRDb250YWN0TGlzdCIsInNldEN1cnJlbnRDaGF0VXNlciIsInNldENvbnRhY3RQYWdlIiwidXBkYXRlQ29udGFjdExpc3RoYW5kbGVyIiwidXBkYXRlZENvbnRhY3RMaXN0IiwibWFwIiwiY29udGFjdCIsImlkIiwidG90YWxVbnJlYWRNZXNzYWdlcyIsImhhbmRsZUNvbnRhY3RDbGljayIsIm5hbWUiLCJhYm91dCIsInByb2ZpbGVQaWN0dXJlIiwiZW1haWwiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ0eXBlIiwiaW1hZ2UiLCJzcGFuIiwiY3JlYXRlZEF0Iiwic2VuZGVySWQiLCJtZXNzYWdlU3RhdHVzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ChatLIstItem.jsx\n"));

/***/ })

});