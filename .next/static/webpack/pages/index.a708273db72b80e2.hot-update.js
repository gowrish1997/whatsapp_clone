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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/_app */ \"./src/pages/_app.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../socket */ \"./socket.js\");\n/* harmony import */ var _Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Chat/SearchMessages */ \"./src/components/Chat/SearchMessages.jsx\");\n/* harmony import */ var _Call_VideoCall__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Call/VideoCall */ \"./src/components/Call/VideoCall.jsx\");\n/* harmony import */ var _Call_VoiceCall__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Call/VoiceCall */ \"./src/components/Call/VoiceCall.jsx\");\n/* harmony import */ var _common_IncomingVideoCall__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/IncomingVideoCall */ \"./src/components/common/IncomingVideoCall.jsx\");\n/* harmony import */ var _common_IncomingCall__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/IncomingCall */ \"./src/components/common/IncomingCall.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { user , setUser , currentChatUser , setMessages , messages , messageSearch , videoCall , voiceCall , contactList , setContactList , endCallHandler , setIncomingVoiceCall , setInComingVideoCall , setOnlineUsers , incomingVoiceCall , inComingVideoCall  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_5__.UserContext);\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const currentChatUserRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const messagesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const contactListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    currentChatUserRef.current = currentChatUser;\n    messagesRef.current = messages;\n    contactListRef.current = contactList;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_7__.firebaseAuth, async (currentUser)=>{\n        if (!currentUser) setRedirectLogin(true);\n        if (!user.name && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email)) {\n            const res = await fetch(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_8__.CHECK_USER, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email: currentUser.email\n                })\n            });\n            const { status , data  } = await res.json();\n            if (!status) {\n                router.push(\"/login\");\n            }\n            const { id , name , email , profilePicture , about  } = data;\n            setUser({\n                id: id,\n                name: name,\n                email: email,\n                profilePicture: profilePicture,\n                status: about\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.emit(\"add-user\", id);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user) {\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.emit(\"add-user\", user.id);\n        }\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!socketEvent && _socket__WEBPACK_IMPORTED_MODULE_10__.socket) {\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"msg-received\", (data)=>{\n                var _currentChatUserRef_current, _currentChatUserRef_current1;\n                if (((_currentChatUserRef_current = currentChatUserRef.current) === null || _currentChatUserRef_current === void 0 ? void 0 : _currentChatUserRef_current.id) === data.from) {\n                    setMessages((prev)=>[\n                            ...prev,\n                            data.message\n                        ]);\n                    _socket__WEBPACK_IMPORTED_MODULE_10__.socket.emit(\"update-msg\", data.from);\n                }\n                if (((_currentChatUserRef_current1 = currentChatUserRef.current) === null || _currentChatUserRef_current1 === void 0 ? void 0 : _currentChatUserRef_current1.id) !== data.from) {\n                    var _contactListRef_current;\n                    const updatedContactList = (_contactListRef_current = contactListRef.current) === null || _contactListRef_current === void 0 ? void 0 : _contactListRef_current.map((contact)=>{\n                        if (contact.id === data.from) {\n                            return {\n                                ...contact,\n                                totalUnreadMessages: contact.totalUnreadMessages + 1\n                            };\n                        }\n                        return contact;\n                    });\n                    setContactList(updatedContactList);\n                }\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"incoming-voice-call\", (param)=>{\n                let { from , roomId , callType  } = param;\n                setIncomingVoiceCall({\n                    ...from,\n                    roomId,\n                    callType\n                });\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"incoming-video-call\", (param)=>{\n                let { from , roomId , callType  } = param;\n                setInComingVideoCall({\n                    ...from,\n                    roomId,\n                    callType\n                });\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"incoming-video-call\", (param)=>{\n                let { from , roomId , callType  } = param;\n                setInComingVideoCall({\n                    ...from,\n                    roomId,\n                    callType\n                });\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"reject-voice-call\", ()=>{\n                endCallHandler();\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"reject-video-call\", ()=>{\n                endCallHandler();\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"video-call-rejected\", ()=>{\n                endCallHandler();\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"voice-call-rejected\", ()=>{\n                endCallHandler();\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"online-users\", (onlineUsers)=>{\n                setOnlineUsers(onlineUsers.onlineUsers);\n            });\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.on(\"updating-to-read\", (id)=>{\n                var _messagesRef_current;\n                const updatedMessages = (_messagesRef_current = messagesRef.current) === null || _messagesRef_current === void 0 ? void 0 : _messagesRef_current.map((message)=>{\n                    if (message.messageStatus !== \"read\") {\n                        return {\n                            ...message,\n                            messageStatus: \"read\"\n                        };\n                    }\n                    return message;\n                });\n                setMessages(updatedMessages);\n            });\n            setSocketEvent(true);\n        }\n        return ()=>{\n            _socket__WEBPACK_IMPORTED_MODULE_10__.socket.off(\"msg-received\");\n        };\n    }, [\n        _socket__WEBPACK_IMPORTED_MODULE_10__.socket\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getMessages = async ()=>{\n            const messages = await axios__WEBPACK_IMPORTED_MODULE_16__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_8__.GET_MESSAGES, \"/\").concat(user.id, \"/\").concat(currentChatUser.id));\n            setMessages(messages.data.messages);\n        };\n        if (currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.id) {\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            inComingVideoCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_IncomingVideoCall__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 169,\n                columnNumber: 29\n            }, this),\n            incomingVoiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_IncomingCall__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 170,\n                columnNumber: 29\n            }, this),\n            videoCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen max-h-full overflow-hidden \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Call_VideoCall__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 173,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 172,\n                columnNumber: 9\n            }, this),\n            voiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen w-screen max-h-full overflow-hidden \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Call_VoiceCall__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 178,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 177,\n                columnNumber: 9\n            }, this),\n            !videoCall && !voiceCall && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-screen overflow-hidden \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                        lineNumber: 183,\n                        columnNumber: 11\n                    }, this),\n                    currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: messageSearch ? \"grid grid-cols-2 \" : \"grid-cols-2 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                                lineNumber: 188,\n                                columnNumber: 15\n                            }, this),\n                            messageSearch && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_SearchMessages__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                                lineNumber: 189,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                        lineNumber: 185,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                        lineNumber: 192,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\whatsapp-chat\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 182,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"GCEUVEzRLkpGTZR6HRyIOEeNmbw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkJrQjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUN0RDtLQUFnQjtJQUVwQixxQkFDRTs7WUFDR2EsbUNBQXFCLDhEQUFDbkIsa0VBQWlCQTs7Ozs7WUFDdkNrQixtQ0FBcUIsOERBQUNqQiw2REFBWUE7Ozs7O1lBQ2xDUywyQkFDQyw4REFBQ29EO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDakUsd0RBQVNBOzs7Ozs7Ozs7O1lBR2JhLDJCQUNDLDhEQUFDbUQ7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNoRSx3REFBU0E7Ozs7Ozs7Ozs7WUFHYixDQUFDVyxhQUFhLENBQUNDLDJCQUNkLDhEQUFDbUQ7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDL0UsMERBQVFBOzs7OztvQkFDUnNCLGdDQUNDLDhEQUFDd0Q7d0JBQ0NDLFdBQVd0RCxnQkFBZ0Isc0JBQXNCLGNBQWM7OzBDQUUvRCw4REFBQ2hCLGtEQUFJQTs7Ozs7NEJBQ0pnQiwrQkFBaUIsOERBQUNaLDZEQUFjQTs7Ozs7Ozs7Ozs2Q0FHbkMsOERBQUNaLDhDQUFLQTs7Ozs0QkFDUDs7Ozs7Ozs7O0FBS1g7R0FsTFNpQjs7UUFDUVosa0RBQVNBOzs7S0FEakJZO0FBb0xULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4uanN4PzJhODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhdExpc3QgZnJvbSBcIi4vQ2hhdGxpc3QvQ2hhdExpc3RcIjtcclxuaW1wb3J0IEVtcHR5IGZyb20gXCIuL0VtcHR5XCI7XHJcbmltcG9ydCB7IGNvbm5lY3RBdXRoRW11bGF0b3IsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIkAvcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiQC91dGlscy9GaXJlYmFzZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDSEVDS19VU0VSIH0gZnJvbSBcIkAvdXRpbHMvQXBpUm91dGVzXCI7XHJcbmltcG9ydCBDaGF0IGZyb20gXCIuL0NoYXQvQ2hhdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEdFVF9NRVNTQUdFUyB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xyXG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tIFwiLi4vLi4vc29ja2V0XCI7XHJcbmltcG9ydCBTZWFyY2hNZXNzYWdlcyBmcm9tIFwiLi9DaGF0L1NlYXJjaE1lc3NhZ2VzXCI7XHJcbmltcG9ydCBWaWRlb0NhbGwgZnJvbSBcIi4vQ2FsbC9WaWRlb0NhbGxcIjtcclxuaW1wb3J0IFZvaWNlQ2FsbCBmcm9tIFwiLi9DYWxsL1ZvaWNlQ2FsbFwiO1xyXG5pbXBvcnQgSW5jb21pbmdWaWRlb0NhbGwgZnJvbSBcIi4vY29tbW9uL0luY29taW5nVmlkZW9DYWxsXCI7XHJcbmltcG9ydCBJbmNvbWluZ0NhbGwgZnJvbSBcIi4vY29tbW9uL0luY29taW5nQ2FsbFwiO1xyXG5cclxuZnVuY3Rpb24gTWFpbigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7XHJcbiAgICB1c2VyLFxyXG4gICAgc2V0VXNlcixcclxuICAgIGN1cnJlbnRDaGF0VXNlcixcclxuICAgIHNldE1lc3NhZ2VzLFxyXG4gICAgbWVzc2FnZXMsXHJcbiAgICBtZXNzYWdlU2VhcmNoLFxyXG4gICAgdmlkZW9DYWxsLFxyXG4gICAgdm9pY2VDYWxsLFxyXG4gICAgY29udGFjdExpc3QsXHJcbiAgICBzZXRDb250YWN0TGlzdCxcclxuICAgIGVuZENhbGxIYW5kbGVyLFxyXG4gICAgc2V0SW5jb21pbmdWb2ljZUNhbGwsXHJcbiAgICBzZXRJbkNvbWluZ1ZpZGVvQ2FsbCxcclxuICAgIHNldE9ubGluZVVzZXJzLFxyXG4gICAgaW5jb21pbmdWb2ljZUNhbGwsXHJcbiAgICBpbkNvbWluZ1ZpZGVvQ2FsbCxcclxuICB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW3JlZGlyZWN0TG9naW4sIHNldFJlZGlyZWN0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzb2NrZXRFdmVudCwgc2V0U29ja2V0RXZlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGN1cnJlbnRDaGF0VXNlclJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBtZXNzYWdlc1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBjb250YWN0TGlzdFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjdXJyZW50Q2hhdFVzZXJSZWYuY3VycmVudCA9IGN1cnJlbnRDaGF0VXNlcjtcclxuICBtZXNzYWdlc1JlZi5jdXJyZW50ID0gbWVzc2FnZXM7XHJcbiAgY29udGFjdExpc3RSZWYuY3VycmVudCA9IGNvbnRhY3RMaXN0O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlZGlyZWN0TG9naW4pIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gIH0sIFtyZWRpcmVjdExvZ2luXSk7XHJcblxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZChmaXJlYmFzZUF1dGgsIGFzeW5jIChjdXJyZW50VXNlcikgPT4ge1xyXG4gICAgaWYgKCFjdXJyZW50VXNlcikgc2V0UmVkaXJlY3RMb2dpbih0cnVlKTtcclxuXHJcbiAgICBpZiAoIXVzZXIubmFtZSAmJiBjdXJyZW50VXNlcj8uZW1haWwpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQ0hFQ0tfVVNFUiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgaWYgKCFzdGF0dXMpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwsIHByb2ZpbGVQaWN0dXJlLCBhYm91dCB9ID0gZGF0YTtcclxuICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgIHByb2ZpbGVQaWN0dXJlOiBwcm9maWxlUGljdHVyZSxcclxuICAgICAgICBzdGF0dXM6IGFib3V0LFxyXG4gICAgICB9KTtcclxuICAgICAgc29ja2V0LmVtaXQoXCJhZGQtdXNlclwiLCBpZCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBzb2NrZXQuZW1pdChcImFkZC11c2VyXCIsIHVzZXIuaWQpO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXNvY2tldEV2ZW50ICYmIHNvY2tldCkge1xyXG4gICAgICBzb2NrZXQub24oXCJtc2ctcmVjZWl2ZWRcIiwgKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudENoYXRVc2VyUmVmLmN1cnJlbnQ/LmlkID09PSBkYXRhLmZyb20pIHtcclxuICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgZGF0YS5tZXNzYWdlXSk7XHJcbiAgICAgICAgICBzb2NrZXQuZW1pdChcInVwZGF0ZS1tc2dcIiwgZGF0YS5mcm9tKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRDaGF0VXNlclJlZi5jdXJyZW50Py5pZCAhPT0gZGF0YS5mcm9tKSB7XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkQ29udGFjdExpc3QgPSBjb250YWN0TGlzdFJlZi5jdXJyZW50Py5tYXAoKGNvbnRhY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbnRhY3QuaWQgPT09IGRhdGEuZnJvbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jb250YWN0LFxyXG4gICAgICAgICAgICAgICAgdG90YWxVbnJlYWRNZXNzYWdlczogY29udGFjdC50b3RhbFVucmVhZE1lc3NhZ2VzICsgMSxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb250YWN0O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRDb250YWN0TGlzdCh1cGRhdGVkQ29udGFjdExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb2NrZXQub24oXCJpbmNvbWluZy12b2ljZS1jYWxsXCIsICh7IGZyb20sIHJvb21JZCwgY2FsbFR5cGUgfSkgPT4ge1xyXG4gICAgICAgIHNldEluY29taW5nVm9pY2VDYWxsKHsgLi4uZnJvbSwgcm9vbUlkLCBjYWxsVHlwZSB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzb2NrZXQub24oXCJpbmNvbWluZy12aWRlby1jYWxsXCIsICh7IGZyb20sIHJvb21JZCwgY2FsbFR5cGUgfSkgPT4ge1xyXG4gICAgICAgIHNldEluQ29taW5nVmlkZW9DYWxsKHsgLi4uZnJvbSwgcm9vbUlkLCBjYWxsVHlwZSB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNvY2tldC5vbihcImluY29taW5nLXZpZGVvLWNhbGxcIiwgKHsgZnJvbSwgcm9vbUlkLCBjYWxsVHlwZSB9KSA9PiB7XHJcbiAgICAgICAgc2V0SW5Db21pbmdWaWRlb0NhbGwoeyAuLi5mcm9tLCByb29tSWQsIGNhbGxUeXBlIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgc29ja2V0Lm9uKFwicmVqZWN0LXZvaWNlLWNhbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIGVuZENhbGxIYW5kbGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzb2NrZXQub24oXCJyZWplY3QtdmlkZW8tY2FsbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgZW5kQ2FsbEhhbmRsZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNvY2tldC5vbihcInZpZGVvLWNhbGwtcmVqZWN0ZWRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGVuZENhbGxIYW5kbGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzb2NrZXQub24oXCJ2b2ljZS1jYWxsLXJlamVjdGVkXCIsICgpID0+IHtcclxuICAgICAgICBlbmRDYWxsSGFuZGxlcigpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNvY2tldC5vbihcIm9ubGluZS11c2Vyc1wiLCAob25saW5lVXNlcnMpID0+IHtcclxuICAgICAgICBzZXRPbmxpbmVVc2VycyhvbmxpbmVVc2Vycy5vbmxpbmVVc2Vycyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc29ja2V0Lm9uKFwidXBkYXRpbmctdG8tcmVhZFwiLCAoaWQpID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkTWVzc2FnZXMgPSBtZXNzYWdlc1JlZi5jdXJyZW50Py5tYXAoKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2VTdGF0dXMgIT09IFwicmVhZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLm1lc3NhZ2UsIG1lc3NhZ2VTdGF0dXM6IFwicmVhZFwiIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0TWVzc2FnZXModXBkYXRlZE1lc3NhZ2VzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRTb2NrZXRFdmVudCh0cnVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5vZmYoXCJtc2ctcmVjZWl2ZWRcIik7XHJcbiAgICB9O1xyXG4gIH0sIFtzb2NrZXRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgJHtHRVRfTUVTU0FHRVN9LyR7dXNlci5pZH0vJHtjdXJyZW50Q2hhdFVzZXIuaWR9YFxyXG4gICAgICApO1xyXG5cclxuICAgICAgc2V0TWVzc2FnZXMobWVzc2FnZXMuZGF0YS5tZXNzYWdlcyk7XHJcbiAgICB9O1xyXG4gICAgaWYgKGN1cnJlbnRDaGF0VXNlcj8uaWQpIHtcclxuICAgICAgZ2V0TWVzc2FnZXMoKTtcclxuICAgIH1cclxuICB9LCBbY3VycmVudENoYXRVc2VyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aW5Db21pbmdWaWRlb0NhbGwgJiYgPEluY29taW5nVmlkZW9DYWxsIC8+fVxyXG4gICAgICB7aW5jb21pbmdWb2ljZUNhbGwgJiYgPEluY29taW5nQ2FsbCAvPn1cclxuICAgICAge3ZpZGVvQ2FsbCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBtYXgtaC1mdWxsIG92ZXJmbG93LWhpZGRlbiBcIj5cclxuICAgICAgICAgIDxWaWRlb0NhbGwgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge3ZvaWNlQ2FsbCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBtYXgtaC1mdWxsIG92ZXJmbG93LWhpZGRlbiBcIj5cclxuICAgICAgICAgIDxWb2ljZUNhbGwgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgeyF2aWRlb0NhbGwgJiYgIXZvaWNlQ2FsbCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1tYWluIGgtc2NyZWVuIHctc2NyZWVuIG1heC1oLXNjcmVlbiBtYXgtdy1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIFwiPlxyXG4gICAgICAgICAgPENoYXRMaXN0IC8+XHJcbiAgICAgICAgICB7Y3VycmVudENoYXRVc2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXttZXNzYWdlU2VhcmNoID8gXCJncmlkIGdyaWQtY29scy0yIFwiIDogXCJncmlkLWNvbHMtMiBcIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDaGF0IC8+XHJcbiAgICAgICAgICAgICAge21lc3NhZ2VTZWFyY2ggJiYgPFNlYXJjaE1lc3NhZ2VzIC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxFbXB0eSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiQ2hhdExpc3QiLCJFbXB0eSIsImNvbm5lY3RBdXRoRW11bGF0b3IiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJVc2VyQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJmaXJlYmFzZUF1dGgiLCJDSEVDS19VU0VSIiwiQ2hhdCIsImF4aW9zIiwiR0VUX01FU1NBR0VTIiwic29ja2V0IiwiU2VhcmNoTWVzc2FnZXMiLCJWaWRlb0NhbGwiLCJWb2ljZUNhbGwiLCJJbmNvbWluZ1ZpZGVvQ2FsbCIsIkluY29taW5nQ2FsbCIsIk1haW4iLCJyb3V0ZXIiLCJ1c2VyIiwic2V0VXNlciIsImN1cnJlbnRDaGF0VXNlciIsInNldE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJtZXNzYWdlU2VhcmNoIiwidmlkZW9DYWxsIiwidm9pY2VDYWxsIiwiY29udGFjdExpc3QiLCJzZXRDb250YWN0TGlzdCIsImVuZENhbGxIYW5kbGVyIiwic2V0SW5jb21pbmdWb2ljZUNhbGwiLCJzZXRJbkNvbWluZ1ZpZGVvQ2FsbCIsInNldE9ubGluZVVzZXJzIiwiaW5jb21pbmdWb2ljZUNhbGwiLCJpbkNvbWluZ1ZpZGVvQ2FsbCIsInJlZGlyZWN0TG9naW4iLCJzZXRSZWRpcmVjdExvZ2luIiwic29ja2V0RXZlbnQiLCJzZXRTb2NrZXRFdmVudCIsImN1cnJlbnRDaGF0VXNlclJlZiIsIm1lc3NhZ2VzUmVmIiwiY29udGFjdExpc3RSZWYiLCJjdXJyZW50IiwicHVzaCIsImN1cnJlbnRVc2VyIiwibmFtZSIsImVtYWlsIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsImlkIiwicHJvZmlsZVBpY3R1cmUiLCJhYm91dCIsImVtaXQiLCJvbiIsImZyb20iLCJwcmV2IiwibWVzc2FnZSIsInVwZGF0ZWRDb250YWN0TGlzdCIsIm1hcCIsImNvbnRhY3QiLCJ0b3RhbFVucmVhZE1lc3NhZ2VzIiwicm9vbUlkIiwiY2FsbFR5cGUiLCJvbmxpbmVVc2VycyIsInVwZGF0ZWRNZXNzYWdlcyIsIm1lc3NhZ2VTdGF0dXMiLCJvZmYiLCJnZXRNZXNzYWdlcyIsImdldCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});