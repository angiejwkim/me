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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [showHovercard, setShowHovercard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [randomNumber, setRandomNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [hovercardPosition, setHovercardPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const text = document.querySelector('.circleText p');\n        text.innerHTML = text.innerText.split('').map((char, i)=>'<span style=\"transform:rotate('.concat(i * 7, 'deg)\">').concat(char, \"</span>\")).join('');\n    }, []);\n    const handleMouseEnter = (e)=>{\n        setRandomNumber(Math.floor(Math.random() * 10) + 1);\n        setShowHovercard(true);\n        updateHovercardPosition(e);\n    };\n    const handleMouseMove = (e)=>{\n        if (showHovercard) {\n            updateHovercardPosition(e);\n        }\n    };\n    const handleMouseLeave = ()=>{\n        setShowHovercard(false);\n    };\n    const updateHovercardPosition = (e)=>{\n        const rect = e.currentTarget.getBoundingClientRect();\n        const x = e.clientX - rect.left;\n        const y = e.clientY - rect.top;\n        console.log(\"Updating position: x=\".concat(x, \", y=\").concat(y));\n        setHovercardPosition({\n            x,\n            y\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"circle\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header\",\n                    onMouseEnter: handleMouseEnter,\n                    onMouseMove: handleMouseMove,\n                    onMouseLeave: handleMouseLeave,\n                    children: [\n                        \"angie kim\",\n                        showHovercard && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hovercard\",\n                            style: {\n                                left: \"\".concat(hovercardPosition.x, \"px\"),\n                                top: \"\".concat(hovercardPosition.y, \"px\")\n                            },\n                            children: randomNumber\n                        }, void 0, false, {\n                            fileName: \"/Users/angie/code/me/app/page.js\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/angie/code/me/app/page.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"circleText\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"is on the way\"\n                    }, void 0, false, {\n                        fileName: \"/Users/angie/code/me/app/page.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/angie/code/me/app/page.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/angie/code/me/app/page.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/angie/code/me/app/page.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"yfR/AP6iaCS5QNydhFJt409CHLk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVtRDtBQUVwQyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDSSxjQUFjQyxnQkFBZ0IsR0FBR0wsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDTSxtQkFBbUJDLHFCQUFxQixHQUFHUCwrQ0FBUUEsQ0FBQztRQUN6RFEsR0FBRztRQUNIQyxHQUFHO0lBQ0w7SUFFQVYsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxPQUFPQyxTQUFTQyxhQUFhLENBQUM7UUFDcENGLEtBQUtHLFNBQVMsR0FBR0gsS0FBS0ksU0FBUyxDQUM1QkMsS0FBSyxDQUFDLElBQ05DLEdBQUcsQ0FDRixDQUFDQyxNQUFNQyxJQUNMLGlDQUErQ0QsT0FBZEMsSUFBSSxHQUFFLFVBQWEsT0FBTEQsTUFBSyxZQUV2REUsSUFBSSxDQUFDO0lBQ1YsR0FBRyxFQUFFO0lBRUwsTUFBTUMsbUJBQW1CLENBQUNDO1FBQ3hCaEIsZ0JBQWdCaUIsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUssTUFBTTtRQUNqRHJCLGlCQUFpQjtRQUNqQnNCLHdCQUF3Qko7SUFDMUI7SUFFQSxNQUFNSyxrQkFBa0IsQ0FBQ0w7UUFDdkIsSUFBSW5CLGVBQWU7WUFDakJ1Qix3QkFBd0JKO1FBQzFCO0lBQ0Y7SUFFQSxNQUFNTSxtQkFBbUI7UUFDdkJ4QixpQkFBaUI7SUFDbkI7SUFFQSxNQUFNc0IsMEJBQTBCLENBQUNKO1FBQy9CLE1BQU1PLE9BQU9QLEVBQUVRLGFBQWEsQ0FBQ0MscUJBQXFCO1FBQ2xELE1BQU10QixJQUFJYSxFQUFFVSxPQUFPLEdBQUdILEtBQUtJLElBQUk7UUFDL0IsTUFBTXZCLElBQUlZLEVBQUVZLE9BQU8sR0FBR0wsS0FBS00sR0FBRztRQUM5QkMsUUFBUUMsR0FBRyxDQUFDLHdCQUFnQzNCLE9BQVJELEdBQUUsUUFBUSxPQUFGQztRQUM1Q0YscUJBQXFCO1lBQUVDO1lBQUdDO1FBQUU7SUFDOUI7SUFFQSxxQkFDRSw4REFBQzRCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFDQ0MsV0FBVTtvQkFDVkMsY0FBY25CO29CQUNkb0IsYUFBYWQ7b0JBQ2JlLGNBQWNkOzt3QkFDZjt3QkFFRXpCLCtCQUNDLDhEQUFDbUM7NEJBQ0NDLFdBQVU7NEJBQ1ZJLE9BQU87Z0NBQ0xWLE1BQU0sR0FBdUIsT0FBcEIxQixrQkFBa0JFLENBQUMsRUFBQztnQ0FDN0IwQixLQUFLLEdBQXVCLE9BQXBCNUIsa0JBQWtCRyxDQUFDLEVBQUM7NEJBQzlCO3NDQUVDTDs7Ozs7Ozs7Ozs7OzhCQUlQLDhEQUFDaUM7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNLO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2I7R0F2RXdCMUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2hvd0hvdmVyY2FyZCwgc2V0U2hvd0hvdmVyY2FyZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyYW5kb21OdW1iZXIsIHNldFJhbmRvbU51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2hvdmVyY2FyZFBvc2l0aW9uLCBzZXRIb3ZlcmNhcmRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2lyY2xlVGV4dCBwJyk7XG4gICAgdGV4dC5pbm5lckhUTUwgPSB0ZXh0LmlubmVyVGV4dFxuICAgICAgLnNwbGl0KCcnKVxuICAgICAgLm1hcChcbiAgICAgICAgKGNoYXIsIGkpID0+XG4gICAgICAgICAgYDxzcGFuIHN0eWxlPVwidHJhbnNmb3JtOnJvdGF0ZSgke2kgKiA3fWRlZylcIj4ke2NoYXJ9PC9zcGFuPmBcbiAgICAgIClcbiAgICAgIC5qb2luKCcnKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoZSkgPT4ge1xuICAgIHNldFJhbmRvbU51bWJlcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxKTtcbiAgICBzZXRTaG93SG92ZXJjYXJkKHRydWUpO1xuICAgIHVwZGF0ZUhvdmVyY2FyZFBvc2l0aW9uKGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgaWYgKHNob3dIb3ZlcmNhcmQpIHtcbiAgICAgIHVwZGF0ZUhvdmVyY2FyZFBvc2l0aW9uKGUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHNldFNob3dIb3ZlcmNhcmQoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUhvdmVyY2FyZFBvc2l0aW9uID0gKGUpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgIGNvbnNvbGUubG9nKGBVcGRhdGluZyBwb3NpdGlvbjogeD0ke3h9LCB5PSR7eX1gKTtcbiAgICBzZXRIb3ZlcmNhcmRQb3NpdGlvbih7IHgsIHkgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlclwiXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICA+XG4gICAgICAgICAgYW5naWUga2ltXG4gICAgICAgICAge3Nob3dIb3ZlcmNhcmQgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcmNhcmRcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGxlZnQ6IGAke2hvdmVyY2FyZFBvc2l0aW9uLnh9cHhgLFxuICAgICAgICAgICAgICAgIHRvcDogYCR7aG92ZXJjYXJkUG9zaXRpb24ueX1weGAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtyYW5kb21OdW1iZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVUZXh0XCI+XG4gICAgICAgICAgPHA+aXMgb24gdGhlIHdheTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInNob3dIb3ZlcmNhcmQiLCJzZXRTaG93SG92ZXJjYXJkIiwicmFuZG9tTnVtYmVyIiwic2V0UmFuZG9tTnVtYmVyIiwiaG92ZXJjYXJkUG9zaXRpb24iLCJzZXRIb3ZlcmNhcmRQb3NpdGlvbiIsIngiLCJ5IiwidGV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImlubmVyVGV4dCIsInNwbGl0IiwibWFwIiwiY2hhciIsImkiLCJqb2luIiwiaGFuZGxlTW91c2VFbnRlciIsImUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ1cGRhdGVIb3ZlcmNhcmRQb3NpdGlvbiIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU1vdXNlTGVhdmUiLCJyZWN0IiwiY3VycmVudFRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VMZWF2ZSIsInN0eWxlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});