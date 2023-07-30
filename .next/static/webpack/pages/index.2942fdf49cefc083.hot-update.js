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

/***/ "./src/components/Main.jsx":
/*!*********************************!*\
  !*** ./src/components/Main.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/_app */ \"./src/pages/_app.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../socket */ \"./socket.js\");\n/* harmony import */ var _Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Chat/SearchMessages */ \"./src/components/Chat/SearchMessages.jsx\");\n/* harmony import */ var _Call_VideoCall__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Call/VideoCall */ \"./src/components/Call/VideoCall.jsx\");\n/* harmony import */ var _Call_VoiceCall__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Call/VoiceCall */ \"./src/components/Call/VoiceCall.jsx\");\n/* harmony import */ var _common_IncomingVideoCall__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/IncomingVideoCall */ \"./src/components/common/IncomingVideoCall.jsx\");\n/* harmony import */ var _common_IncomingCall__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/IncomingCall */ \"./src/components/common/IncomingCall.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { user , setUser , currentChatUser , setMessages , messages , messageSearch , videoCall , voiceCall , contactList , setContactList , endCallHandler , setIncomingVoiceCall , setInComingVideoCall , setOnlineUsers , incomingVoiceCall , inComingVideoCall  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_5__.UserContext);\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const currentChatUserRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const messagesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const contactListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    currentChatUserRef.current = currentChatUser;\n    messagesRef.current = messages;\n    contactListRef.current = contactList;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_7__.firebaseAuth, async (currentUser)=>{\n        if (!currentUser) setRedirectLogin(true);\n        if (!user.name && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email)) {\n            const res = await fetch(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_8__.CHECK_USER, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: currentUser.email\n                })\n            });\n            const { status , data  } = await res.json();\n            console.log(status, data);\n            if (status) {\n                router.push(\"/login\");\n            }\n            const { id , name , email , profilePicture , about  } = data;\n            setUser({\n                id: id,\n                name: name,\n                email: email,\n                profilePicture: profilePicture,\n                status: about\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.emit(\"add-user\", id);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user) {\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.emit(\"add-user\", user.id);\n        }\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!socketEvent && _socket__WEBPACK_IMPORTED_MODULE_10__.socket) {\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"msg-received\", (data)=>{\n                var _currentChatUserRef_current, _currentChatUserRef_current1;\n                if (((_currentChatUserRef_current = currentChatUserRef.current) === null || _currentChatUserRef_current === void 0 ? void 0 : _currentChatUserRef_current.id) === data.from) {\n                    setMessages((prev)=>[\n                            ...prev,\n                            data.message\n                        ]);\n                    _socket__WEBPACK_IMPORTED_MODULE_10__.socket.emit(\"update-msg\", data.from);\n                }\n                if (((_currentChatUserRef_current1 = currentChatUserRef.current) === null || _currentChatUserRef_current1 === void 0 ? void 0 : _currentChatUserRef_current1.id) !== data.from) {\n                    var _contactListRef_current;\n                    const updatedContactList = (_contactListRef_current = contactListRef.current) === null || _contactListRef_current === void 0 ? void 0 : _contactListRef_current.map((contact)=>{\n                        if (contact.id === data.from) {\n                            return {\n                                ...contact,\n                                totalUnreadMessages: contact.totalUnreadMessages + 1\n                            };\n                        }\n                        return contact;\n                    });\n                    setContactList(updatedContactList);\n                }\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"incoming-voice-call\", (param)=>{\n                let { from , roomId , callType  } = param;\n                setIncomingVoiceCall({\n                    ...from,\n                    roomId,\n                    callType\n                });\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"incoming-video-call\", (param)=>{\n                let { from , roomId , callType  } = param;\n                setInComingVideoCall({\n                    ...from,\n                    roomId,\n                    callType\n                });\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"incoming-video-call\", (param)=>{\n                let { from , roomId , callType  } = param;\n                setInComingVideoCall({\n                    ...from,\n                    roomId,\n                    callType\n                });\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"reject-voice-call\", ()=>{\n                endCallHandler();\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"reject-video-call\", ()=>{\n                endCallHandler();\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"video-call-rejected\", ()=>{\n                endCallHandler();\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"voice-call-rejected\", ()=>{\n                endCallHandler();\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"online-users\", (onlineUsers)=>{\n                setOnlineUsers(onlineUsers.onlineUsers);\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"updating-to-read\", (id)=>{\n                var _messagesRef_current;\n                const updatedMessages = (_messagesRef_current = messagesRef.current) === null || _messagesRef_current === void 0 ? void 0 : _messagesRef_current.map((message)=>{\n                    if (message.messageStatus !== \"read\") {\n                        return {\n                            ...message,\n                            messageStatus: \"read\"\n                        };\n                    }\n                    return message;\n                });\n                setMessages(updatedMessages);\n            });\n            setSocketEvent(true);\n        }\n        return ()=>{\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.off(\"msg-received\");\n        };\n    }, [\n        _socket__WEBPACK_IMPORTED_MODULE_10__.socket\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getMessages = async ()=>{\n            const messages = await axios__WEBPACK_IMPORTED_MODULE_16__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_8__.GET_MESSAGES, \"/\").concat(user.id, \"/\").concat(currentChatUser.id));\n            setMessages(messages.data.messages);\n        };\n        if (currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            inComingVideoCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_IncomingVideoCall__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 169,\n                columnNumber: 29\n            }, this),\n            incomingVoiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_IncomingCall__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 170,\n                columnNumber: 29\n            }, this),\n            videoCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen max-h-full overflow-hidden \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Call_VideoCall__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 173,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 172,\n                columnNumber: 9\n            }, this),\n            voiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen max-h-full overflow-hidden \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Call_VoiceCall__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 178,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 177,\n                columnNumber: 9\n            }, this),\n            !videoCall && !voiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-screen overflow-hidden \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                        lineNumber: 183,\n                        columnNumber: 11\n                    }, this),\n                    currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: messageSearch ? \"grid grid-cols-2 \" : \"grid-cols-2 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                                lineNumber: 188,\n                                columnNumber: 15\n                            }, this),\n                            messageSearch && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                                lineNumber: 189,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                        lineNumber: 185,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                        lineNumber: 192,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 182,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"GCEUVEzRLkpGTZR6HRyIOEeNmbw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsZ0JBQWlCc0MsRUFBRSxFQUFFO1lBQ3ZCa0I7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDeEQ7S0FBZ0I7SUFFcEIscUJBQ0U7O1lBQ0dhLG1DQUFxQiw4REFBQ25CLGtFQUFpQkE7Ozs7O1lBQ3ZDa0IsbUNBQXFCLDhEQUFDakIsNkRBQVlBOzs7OztZQUNsQ1MsMkJBQ0MsOERBQUNzRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ25FLHdEQUFTQTs7Ozs7Ozs7OztZQUdiYSwyQkFDQyw4REFBQ3FEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDbEUsd0RBQVNBOzs7Ozs7Ozs7O1lBR2IsQ0FBQ1csYUFBYSxDQUFDQywyQkFDZCw4REFBQ3FEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2pGLDBEQUFRQTs7Ozs7b0JBQ1JzQixnQ0FDQyw4REFBQzBEO3dCQUNDQyxXQUFXeEQsZ0JBQWdCLHNCQUFzQixjQUFjOzswQ0FFL0QsOERBQUNoQixrREFBSUE7Ozs7OzRCQUNKZ0IsK0JBQWlCLDhEQUFDWiw2REFBY0E7Ozs7Ozs7Ozs7NkNBR25DLDhEQUFDWiw4Q0FBS0E7Ozs7NEJBQ1A7Ozs7Ozs7OztBQUtYO0dBbExTaUI7O1FBQ1FaLGtEQUFTQTs7O0tBRGpCWTtBQW9MVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeD8yYTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXRMaXN0IGZyb20gXCIuL0NoYXRsaXN0L0NoYXRMaXN0XCI7XHJcbmltcG9ydCBFbXB0eSBmcm9tIFwiLi9FbXB0eVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0QXV0aEVtdWxhdG9yLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCJAL3BhZ2VzL19hcHBcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcclxuaW1wb3J0IHsgQ0hFQ0tfVVNFUiB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi9DaGF0L0NoYXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBHRVRfTUVTU0FHRVMgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSBcIi4uLy4uL3NvY2tldFwiO1xyXG5pbXBvcnQgU2VhcmNoTWVzc2FnZXMgZnJvbSBcIi4vQ2hhdC9TZWFyY2hNZXNzYWdlc1wiO1xyXG5pbXBvcnQgVmlkZW9DYWxsIGZyb20gXCIuL0NhbGwvVmlkZW9DYWxsXCI7XHJcbmltcG9ydCBWb2ljZUNhbGwgZnJvbSBcIi4vQ2FsbC9Wb2ljZUNhbGxcIjtcclxuaW1wb3J0IEluY29taW5nVmlkZW9DYWxsIGZyb20gXCIuL2NvbW1vbi9JbmNvbWluZ1ZpZGVvQ2FsbFwiO1xyXG5pbXBvcnQgSW5jb21pbmdDYWxsIGZyb20gXCIuL2NvbW1vbi9JbmNvbWluZ0NhbGxcIjtcclxuXHJcbmZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgdXNlcixcclxuICAgIHNldFVzZXIsXHJcbiAgICBjdXJyZW50Q2hhdFVzZXIsXHJcbiAgICBzZXRNZXNzYWdlcyxcclxuICAgIG1lc3NhZ2VzLFxyXG4gICAgbWVzc2FnZVNlYXJjaCxcclxuICAgIHZpZGVvQ2FsbCxcclxuICAgIHZvaWNlQ2FsbCxcclxuICAgIGNvbnRhY3RMaXN0LFxyXG4gICAgc2V0Q29udGFjdExpc3QsXHJcbiAgICBlbmRDYWxsSGFuZGxlcixcclxuICAgIHNldEluY29taW5nVm9pY2VDYWxsLFxyXG4gICAgc2V0SW5Db21pbmdWaWRlb0NhbGwsXHJcbiAgICBzZXRPbmxpbmVVc2VycyxcclxuICAgIGluY29taW5nVm9pY2VDYWxsLFxyXG4gICAgaW5Db21pbmdWaWRlb0NhbGwsXHJcbiAgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IFtyZWRpcmVjdExvZ2luLCBzZXRSZWRpcmVjdExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc29ja2V0RXZlbnQsIHNldFNvY2tldEV2ZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjdXJyZW50Q2hhdFVzZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbWVzc2FnZXNSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgY29udGFjdExpc3RSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY3VycmVudENoYXRVc2VyUmVmLmN1cnJlbnQgPSBjdXJyZW50Q2hhdFVzZXI7XHJcbiAgbWVzc2FnZXNSZWYuY3VycmVudCA9IG1lc3NhZ2VzO1xyXG4gIGNvbnRhY3RMaXN0UmVmLmN1cnJlbnQgPSBjb250YWN0TGlzdDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZWRpcmVjdExvZ2luKSByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICB9LCBbcmVkaXJlY3RMb2dpbl0pO1xyXG5cclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoZmlyZWJhc2VBdXRoLCBhc3luYyAoY3VycmVudFVzZXIpID0+IHtcclxuICAgIGlmICghY3VycmVudFVzZXIpIHNldFJlZGlyZWN0TG9naW4odHJ1ZSk7XHJcblxyXG4gICAgaWYgKCF1c2VyLm5hbWUgJiYgY3VycmVudFVzZXI/LmVtYWlsKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKENIRUNLX1VTRVIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbDogY3VycmVudFVzZXIuZW1haWwgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuY29uc29sZS5sb2coc3RhdHVzLCBkYXRhKVxyXG4gICAgICBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIGVtYWlsLCBwcm9maWxlUGljdHVyZSwgYWJvdXQgfSA9IGRhdGE7XHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICBwcm9maWxlUGljdHVyZTogcHJvZmlsZVBpY3R1cmUsXHJcbiAgICAgICAgc3RhdHVzOiBhYm91dCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNvY2tldC5lbWl0KFwiYWRkLXVzZXJcIiwgaWQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgc29ja2V0LmVtaXQoXCJhZGQtdXNlclwiLCB1c2VyLmlkKTtcclxuICAgIH1cclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzb2NrZXRFdmVudCAmJiBzb2NrZXQpIHtcclxuICAgICAgc29ja2V0Lm9uKFwibXNnLXJlY2VpdmVkXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRDaGF0VXNlclJlZi5jdXJyZW50Py5pZCA9PT0gZGF0YS5mcm9tKSB7XHJcbiAgICAgICAgICBzZXRNZXNzYWdlcygocHJldikgPT4gWy4uLnByZXYsIGRhdGEubWVzc2FnZV0pO1xyXG4gICAgICAgICAgc29ja2V0LmVtaXQoXCJ1cGRhdGUtbXNnXCIsIGRhdGEuZnJvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50Q2hhdFVzZXJSZWYuY3VycmVudD8uaWQgIT09IGRhdGEuZnJvbSkge1xyXG4gICAgICAgICAgY29uc3QgdXBkYXRlZENvbnRhY3RMaXN0ID0gY29udGFjdExpc3RSZWYuY3VycmVudD8ubWFwKChjb250YWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb250YWN0LmlkID09PSBkYXRhLmZyb20pIHtcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY29udGFjdCxcclxuICAgICAgICAgICAgICAgIHRvdGFsVW5yZWFkTWVzc2FnZXM6IGNvbnRhY3QudG90YWxVbnJlYWRNZXNzYWdlcyArIDEsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29udGFjdDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0Q29udGFjdExpc3QodXBkYXRlZENvbnRhY3RMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc29ja2V0Lm9uKFwiaW5jb21pbmctdm9pY2UtY2FsbFwiLCAoeyBmcm9tLCByb29tSWQsIGNhbGxUeXBlIH0pID0+IHtcclxuICAgICAgICBzZXRJbmNvbWluZ1ZvaWNlQ2FsbCh7IC4uLmZyb20sIHJvb21JZCwgY2FsbFR5cGUgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc29ja2V0Lm9uKFwiaW5jb21pbmctdmlkZW8tY2FsbFwiLCAoeyBmcm9tLCByb29tSWQsIGNhbGxUeXBlIH0pID0+IHtcclxuICAgICAgICBzZXRJbkNvbWluZ1ZpZGVvQ2FsbCh7IC4uLmZyb20sIHJvb21JZCwgY2FsbFR5cGUgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzb2NrZXQub24oXCJpbmNvbWluZy12aWRlby1jYWxsXCIsICh7IGZyb20sIHJvb21JZCwgY2FsbFR5cGUgfSkgPT4ge1xyXG4gICAgICAgIHNldEluQ29taW5nVmlkZW9DYWxsKHsgLi4uZnJvbSwgcm9vbUlkLCBjYWxsVHlwZSB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNvY2tldC5vbihcInJlamVjdC12b2ljZS1jYWxsXCIsICgpID0+IHtcclxuICAgICAgICBlbmRDYWxsSGFuZGxlcigpO1xyXG4gICAgICB9KTtcclxuICAgICAgc29ja2V0Lm9uKFwicmVqZWN0LXZpZGVvLWNhbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIGVuZENhbGxIYW5kbGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzb2NrZXQub24oXCJ2aWRlby1jYWxsLXJlamVjdGVkXCIsICgpID0+IHtcclxuICAgICAgICBlbmRDYWxsSGFuZGxlcigpO1xyXG4gICAgICB9KTtcclxuICAgICAgc29ja2V0Lm9uKFwidm9pY2UtY2FsbC1yZWplY3RlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgZW5kQ2FsbEhhbmRsZXIoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb2NrZXQub24oXCJvbmxpbmUtdXNlcnNcIiwgKG9ubGluZVVzZXJzKSA9PiB7XHJcbiAgICAgICAgc2V0T25saW5lVXNlcnMob25saW5lVXNlcnMub25saW5lVXNlcnMpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5vbihcInVwZGF0aW5nLXRvLXJlYWRcIiwgKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZE1lc3NhZ2VzID0gbWVzc2FnZXNSZWYuY3VycmVudD8ubWFwKChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZS5tZXNzYWdlU3RhdHVzICE9PSBcInJlYWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5tZXNzYWdlLCBtZXNzYWdlU3RhdHVzOiBcInJlYWRcIiB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldE1lc3NhZ2VzKHVwZGF0ZWRNZXNzYWdlcyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0U29ja2V0RXZlbnQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQub2ZmKFwibXNnLXJlY2VpdmVkXCIpO1xyXG4gICAgfTtcclxuICB9LCBbc29ja2V0XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgbWVzc2FnZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgYCR7R0VUX01FU1NBR0VTfS8ke3VzZXIuaWR9LyR7Y3VycmVudENoYXRVc2VyLmlkfWBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldE1lc3NhZ2VzKG1lc3NhZ2VzLmRhdGEubWVzc2FnZXMpO1xyXG4gICAgfTtcclxuICAgIGlmIChjdXJyZW50Q2hhdFVzZXI/LmlkKSB7XHJcbiAgICAgIGdldE1lc3NhZ2VzKCk7XHJcbiAgICB9XHJcbiAgfSwgW2N1cnJlbnRDaGF0VXNlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2luQ29taW5nVmlkZW9DYWxsICYmIDxJbmNvbWluZ1ZpZGVvQ2FsbCAvPn1cclxuICAgICAge2luY29taW5nVm9pY2VDYWxsICYmIDxJbmNvbWluZ0NhbGwgLz59XHJcbiAgICAgIHt2aWRlb0NhbGwgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtZnVsbCBvdmVyZmxvdy1oaWRkZW4gXCI+XHJcbiAgICAgICAgICA8VmlkZW9DYWxsIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHt2b2ljZUNhbGwgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gbWF4LWgtZnVsbCBvdmVyZmxvdy1oaWRkZW4gXCI+XHJcbiAgICAgICAgICA8Vm9pY2VDYWxsIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHshdmlkZW9DYWxsICYmICF2b2ljZUNhbGwgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtbWFpbiBoLXNjcmVlbiB3LXNjcmVlbiBtYXgtaC1zY3JlZW4gbWF4LXctc2NyZWVuIG92ZXJmbG93LWhpZGRlbiBcIj5cclxuICAgICAgICAgIDxDaGF0TGlzdCAvPlxyXG4gICAgICAgICAge2N1cnJlbnRDaGF0VXNlciA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17bWVzc2FnZVNlYXJjaCA/IFwiZ3JpZCBncmlkLWNvbHMtMiBcIiA6IFwiZ3JpZC1jb2xzLTIgXCJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2hhdCAvPlxyXG4gICAgICAgICAgICAgIHttZXNzYWdlU2VhcmNoICYmIDxTZWFyY2hNZXNzYWdlcyAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8RW1wdHkgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkNoYXRMaXN0IiwiRW1wdHkiLCJjb25uZWN0QXV0aEVtdWxhdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiVXNlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiZmlyZWJhc2VBdXRoIiwiQ0hFQ0tfVVNFUiIsIkNoYXQiLCJheGlvcyIsIkdFVF9NRVNTQUdFUyIsInNvY2tldCIsIlNlYXJjaE1lc3NhZ2VzIiwiVmlkZW9DYWxsIiwiVm9pY2VDYWxsIiwiSW5jb21pbmdWaWRlb0NhbGwiLCJJbmNvbWluZ0NhbGwiLCJNYWluIiwicm91dGVyIiwidXNlciIsInNldFVzZXIiLCJjdXJyZW50Q2hhdFVzZXIiLCJzZXRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwibWVzc2FnZVNlYXJjaCIsInZpZGVvQ2FsbCIsInZvaWNlQ2FsbCIsImNvbnRhY3RMaXN0Iiwic2V0Q29udGFjdExpc3QiLCJlbmRDYWxsSGFuZGxlciIsInNldEluY29taW5nVm9pY2VDYWxsIiwic2V0SW5Db21pbmdWaWRlb0NhbGwiLCJzZXRPbmxpbmVVc2VycyIsImluY29taW5nVm9pY2VDYWxsIiwiaW5Db21pbmdWaWRlb0NhbGwiLCJyZWRpcmVjdExvZ2luIiwic2V0UmVkaXJlY3RMb2dpbiIsInNvY2tldEV2ZW50Iiwic2V0U29ja2V0RXZlbnQiLCJjdXJyZW50Q2hhdFVzZXJSZWYiLCJtZXNzYWdlc1JlZiIsImNvbnRhY3RMaXN0UmVmIiwiY3VycmVudCIsInB1c2giLCJjdXJyZW50VXNlciIsIm5hbWUiLCJlbWFpbCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaWQiLCJwcm9maWxlUGljdHVyZSIsImFib3V0IiwiZW1pdCIsIm9uIiwiZnJvbSIsInByZXYiLCJtZXNzYWdlIiwidXBkYXRlZENvbnRhY3RMaXN0IiwibWFwIiwiY29udGFjdCIsInRvdGFsVW5yZWFkTWVzc2FnZXMiLCJyb29tSWQiLCJjYWxsVHlwZSIsIm9ubGluZVVzZXJzIiwidXBkYXRlZE1lc3NhZ2VzIiwibWVzc2FnZVN0YXR1cyIsIm9mZiIsImdldE1lc3NhZ2VzIiwiZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});