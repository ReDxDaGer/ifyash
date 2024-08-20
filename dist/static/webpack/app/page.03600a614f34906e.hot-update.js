"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/experience.tsx":
/*!***********************************!*\
  !*** ./components/experience.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Experience; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-heading */ \"(app-client)/./components/section-heading.tsx\");\n/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-vertical-timeline-component */ \"(app-client)/./node_modules/react-vertical-timeline-component/dist-es6/index.js\");\n/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-vertical-timeline-component/style.min.css */ \"(app-client)/./node_modules/react-vertical-timeline-component/style.min.css\");\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/data */ \"(app-client)/./lib/data.ts\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/hooks */ \"(app-client)/./lib/hooks.ts\");\n/* harmony import */ var _context_theme_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/theme-context */ \"(app-client)/./context/theme-context.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Experience() {\n    _s();\n    const { ref } = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_6__.useSectionInView)(\"Experience\");\n    const { theme } = (0,_context_theme_context__WEBPACK_IMPORTED_MODULE_7__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"experience\",\n        ref: ref,\n        className: \"scroll-mt-28 mb-28 sm:mb-40\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_section_heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: \"My experience\"\n            }, void 0, false, {\n                fileName: \"/home/redxdager/Desktop/portfolio-website/components/experience.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__.VerticalTimeline, {\n                lineColor: \"\",\n                children: _lib_data__WEBPACK_IMPORTED_MODULE_5__.experiencesData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__.VerticalTimelineElement, {\n                            contentStyle: {\n                                background: theme === \"light\" ? \"#f3f4f6\" : \"rgba(255, 255, 255, 0.05)\",\n                                boxShadow: \"none\",\n                                border: \"1px solid rgba(0, 0, 0, 0.05)\",\n                                textAlign: \"left\",\n                                padding: \"1.3rem 2rem\"\n                            },\n                            contentArrowStyle: {\n                                borderRight: theme === \"light\" ? \"0.4rem solid #9ca3af\" : \"0.4rem solid rgba(255, 255, 255, 0.5)\"\n                            },\n                            date: item.date,\n                            dateStyle: {\n                                background: theme === \"light\" ? \"#9ca3af\" : \"rgba(255, 255, 255, 0.5)\",\n                                color: theme === \"light\" ? \"white\" : \"black\",\n                                padding: \"0.5rem\",\n                                marginLeft\n                            },\n                            icon: item.icon,\n                            iconStyle: {\n                                background: theme === \"light\" ? \"white\" : \"rgba(255, 255, 255, 0.15)\",\n                                fontSize: \"1.5rem\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-semibold capitalize\",\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"/home/redxdager/Desktop/portfolio-website/components/experience.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-normal !mt-0\",\n                                    children: item.location\n                                }, void 0, false, {\n                                    fileName: \"/home/redxdager/Desktop/portfolio-website/components/experience.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"!mt-1 !font-normal text-gray-700 dark:text-white/75\",\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/home/redxdager/Desktop/portfolio-website/components/experience.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/redxdager/Desktop/portfolio-website/components/experience.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/home/redxdager/Desktop/portfolio-website/components/experience.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/redxdager/Desktop/portfolio-website/components/experience.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/redxdager/Desktop/portfolio-website/components/experience.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Experience, \"tj4Ar3jfbAtOTjn6waVGldZ8loQ=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_6__.useSectionInView,\n        _context_theme_context__WEBPACK_IMPORTED_MODULE_7__.useTheme\n    ];\n});\n_c = Experience;\nvar _c;\n$RefreshReg$(_c, \"Experience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9leHBlcmllbmNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ3FCO0FBSUo7QUFDYztBQUNaO0FBQ0U7QUFDSTtBQUVwQyxTQUFTTzs7SUFDdEIsTUFBTSxFQUFFQyxHQUFHLEVBQUUsR0FBR0gsNERBQWdCQSxDQUFDO0lBQ2pDLE1BQU0sRUFBRUksS0FBSyxFQUFFLEdBQUdILGdFQUFRQTtJQUUxQixxQkFDRSw4REFBQ0k7UUFBUUMsSUFBRztRQUFhSCxLQUFLQTtRQUFLSSxXQUFVOzswQkFDM0MsOERBQUNYLHdEQUFjQTswQkFBQzs7Ozs7OzBCQUNoQiw4REFBQ0MsK0VBQWdCQTtnQkFBQ1csV0FBVTswQkFDekJULHNEQUFlQSxDQUFDVSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQzFCLDhEQUFDaEIsdURBQWM7a0NBQ2IsNEVBQUNHLHNGQUF1QkE7NEJBQ3RCZSxjQUFjO2dDQUNaQyxZQUNFVixVQUFVLFVBQVUsWUFBWTtnQ0FDbENXLFdBQVc7Z0NBQ1hDLFFBQVE7Z0NBQ1JDLFdBQVc7Z0NBQ1hDLFNBQVM7NEJBQ1g7NEJBQ0FDLG1CQUFtQjtnQ0FDakJDLGFBQ0VoQixVQUFVLFVBQ04seUJBQ0E7NEJBQ1I7NEJBQ0FpQixNQUFNWCxLQUFLVyxJQUFJOzRCQUNmQyxXQUFXO2dDQUNUUixZQUNFVixVQUFVLFVBQVUsWUFBWTtnQ0FDbENtQixPQUFPbkIsVUFBVSxVQUFVLFVBQVU7Z0NBQ3JDYyxTQUFTO2dDQUNUTTs0QkFDRjs0QkFDQUMsTUFBTWYsS0FBS2UsSUFBSTs0QkFDZkMsV0FBVztnQ0FDVFosWUFDRVYsVUFBVSxVQUFVLFVBQVU7Z0NBQ2hDdUIsVUFBVTs0QkFDWjs7OENBRUEsOERBQUNDO29DQUFHckIsV0FBVTs4Q0FBNEJHLEtBQUttQixLQUFLOzs7Ozs7OENBQ3BELDhEQUFDQztvQ0FBRXZCLFdBQVU7OENBQXFCRyxLQUFLcUIsUUFBUTs7Ozs7OzhDQUMvQyw4REFBQ0Q7b0NBQUV2QixXQUFVOzhDQUNWRyxLQUFLc0IsV0FBVzs7Ozs7Ozs7Ozs7O3VCQWxDRnJCOzs7Ozs7Ozs7Ozs7Ozs7O0FBMEMvQjtHQW5Ed0JUOztRQUNORix3REFBZ0JBO1FBQ2RDLDREQUFRQTs7O0tBRkpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZS50c3g/ZjllMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gXCIuL3NlY3Rpb24taGVhZGluZ1wiO1xuaW1wb3J0IHtcbiAgVmVydGljYWxUaW1lbGluZSxcbiAgVmVydGljYWxUaW1lbGluZUVsZW1lbnQsXG59IGZyb20gXCJyZWFjdC12ZXJ0aWNhbC10aW1lbGluZS1jb21wb25lbnRcIjtcbmltcG9ydCBcInJlYWN0LXZlcnRpY2FsLXRpbWVsaW5lLWNvbXBvbmVudC9zdHlsZS5taW4uY3NzXCI7XG5pbXBvcnQgeyBleHBlcmllbmNlc0RhdGEgfSBmcm9tIFwiQC9saWIvZGF0YVwiO1xuaW1wb3J0IHsgdXNlU2VjdGlvbkluVmlldyB9IGZyb20gXCJAL2xpYi9ob29rc1wiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiQC9jb250ZXh0L3RoZW1lLWNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhwZXJpZW5jZSgpIHtcbiAgY29uc3QgeyByZWYgfSA9IHVzZVNlY3Rpb25JblZpZXcoXCJFeHBlcmllbmNlXCIpO1xuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJleHBlcmllbmNlXCIgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cInNjcm9sbC1tdC0yOCBtYi0yOCBzbTptYi00MFwiPlxuICAgICAgPFNlY3Rpb25IZWFkaW5nPk15IGV4cGVyaWVuY2U8L1NlY3Rpb25IZWFkaW5nPlxuICAgICAgPFZlcnRpY2FsVGltZWxpbmUgbGluZUNvbG9yPVwiXCI+XG4gICAgICAgIHtleHBlcmllbmNlc0RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxWZXJ0aWNhbFRpbWVsaW5lRWxlbWVudFxuICAgICAgICAgICAgICBjb250ZW50U3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiI2YzZjRmNlwiIDogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXCIsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSlcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMS4zcmVtIDJyZW1cIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY29udGVudEFycm93U3R5bGU9e3tcbiAgICAgICAgICAgICAgICBib3JkZXJSaWdodDpcbiAgICAgICAgICAgICAgICAgIHRoZW1lID09PSBcImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcIjAuNHJlbSBzb2xpZCAjOWNhM2FmXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIjAuNHJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxuICAgICAgICAgICAgICBkYXRlU3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiIzljYTNhZlwiIDogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUgPT09IFwibGlnaHRcIiA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnRcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufVxuICAgICAgICAgICAgICBpY29uU3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgdGhlbWUgPT09IFwibGlnaHRcIiA/IFwid2hpdGVcIiA6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KVwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBjYXBpdGFsaXplXCI+e2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgIW10LTBcIj57aXRlbS5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiFtdC0xICFmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC13aGl0ZS83NVwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L1ZlcnRpY2FsVGltZWxpbmVFbGVtZW50PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICkpfVxuICAgICAgPC9WZXJ0aWNhbFRpbWVsaW5lPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlY3Rpb25IZWFkaW5nIiwiVmVydGljYWxUaW1lbGluZSIsIlZlcnRpY2FsVGltZWxpbmVFbGVtZW50IiwiZXhwZXJpZW5jZXNEYXRhIiwidXNlU2VjdGlvbkluVmlldyIsInVzZVRoZW1lIiwiRXhwZXJpZW5jZSIsInJlZiIsInRoZW1lIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwibGluZUNvbG9yIiwibWFwIiwiaXRlbSIsImluZGV4IiwiRnJhZ21lbnQiLCJjb250ZW50U3R5bGUiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwiYm9yZGVyIiwidGV4dEFsaWduIiwicGFkZGluZyIsImNvbnRlbnRBcnJvd1N0eWxlIiwiYm9yZGVyUmlnaHQiLCJkYXRlIiwiZGF0ZVN0eWxlIiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwiaWNvbiIsImljb25TdHlsZSIsImZvbnRTaXplIiwiaDMiLCJ0aXRsZSIsInAiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/experience.tsx\n"));

/***/ })

});