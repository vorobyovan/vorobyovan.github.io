(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas id=\"WebGL-Output\"></canvas>\r\n<!--<button></button>-->\r\n<!--<div class=\"light-position-settings\">-->\r\n<!--  <div class=\"flex-display\">-->\r\n<!--    <button class=\"small-button\" (click)=\"lightFurther()\">•</button>-->\r\n<!--    <button class=\"small-button\" (click)=\"lightUp()\">↑</button>-->\r\n<!--    <button class=\"small-button\" (click)=\"lightNearer()\">●</button>-->\r\n<!--  </div>-->\r\n<!--  <div class=\"flex-display\">-->\r\n<!--    <button class=\"small-button\" (click)=\"lightCircleLeft()\">←</button>-->\r\n<!--    <button class=\"small-button\" (click)=\"lightDown()\">↓</button>-->\r\n<!--    <button class=\"small-button\" (click)=\"rightCircleLeft()\">→</button>-->\r\n<!--  </div>-->\r\n<!--  <div class=\"flex-display\">-->\r\n<!--    <span class=\"centered white-text\">LIGHT</span>-->\r\n<!--  </div>-->\r\n<!--</div>-->\r\n<!--<div class=\"camera-view-settings\">-->\r\n<!--  <div class=\"flex-display\">-->\r\n<!--    <button class=\"basic-button\" (click)=\"switchCameraOnAxes()\">ground</button>-->\r\n<!--    <button class=\"basic-button\" (click)=\"switchCameraOnObject()\">object</button>-->\r\n<!--  </div>-->\r\n<!--  <div class=\"flex-display\">-->\r\n<!--    <span class=\"centered white-text\">CAMERA</span>-->\r\n<!--  </div>-->\r\n<!--</div>-->\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".color {\n  color: #2C2316;\n}\n.centered {\n  margin: auto;\n}\n.white-text {\n  color: #c7c5c1;\n}\n.flex-display {\n  display: flex;\n}\n.container {\n  position: absolute;\n  background: #404040;\n  border: 1px solid #333333;\n}\n.light-position-settings {\n  position: absolute;\n  background: #404040;\n  border: 1px solid #333333;\n  right: 0;\n  top: 0;\n}\n.camera-view-settings {\n  position: absolute;\n  background: #404040;\n  border: 1px solid #333333;\n  left: 0;\n  top: 0;\n}\n.button {\n  font-size: 1.3em;\n  outline: none;\n}\n.small-button {\n  font-size: 1.3em;\n  outline: none;\n  width: 2em;\n  height: 2em;\n}\n.basic-button {\n  font-size: 1.3em;\n  outline: none;\n  padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTjovd29ya3NwYWNlcy93ZWJzdG9ybS13b3Jrc3BhY2UvbmlrdS1uaWt1L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7QUNBRjtBREdBO0VBQ0UsY0FBQTtBQ0RGO0FESUE7RUFDRSxhQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0hGO0FETUE7RUFMRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFLQSxRQUFBO0VBQ0EsTUFBQTtBQ0ZGO0FES0E7RUFYRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFXQSxPQUFBO0VBQ0EsTUFBQTtBQ0RGO0FESUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNGRjtBREtBO0VBSkUsZ0JBQUE7RUFDQSxhQUFBO0VBS0EsVUFBQTtFQUNBLFdBQUE7QUNGRjtBREtBO0VBVkUsZ0JBQUE7RUFDQSxhQUFBO0VBV0EsWUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcbiAgY29sb3I6ICMyQzIzMTY7XG59XG5cbi5jZW50ZXJlZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLndoaXRlLXRleHQge1xuICBjb2xvcjogI2M3YzVjMTtcbn1cblxuLmZsZXgtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICM0MDQwNDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG59XG5cbi5saWdodC1wb3NpdGlvbi1zZXR0aW5ncyB7XG4gIC5jb250YWluZXI7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5jYW1lcmEtdmlldy1zZXR0aW5ncyB7XG4gIC5jb250YWluZXI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zbWFsbC1idXR0b24ge1xuICAuYnV0dG9uO1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbn1cblxuLmJhc2ljLWJ1dHRvbiB7XG4gIC5idXR0b247XG4gIHBhZGRpbmc6IDVweDtcbn1cbiIsIi5jb2xvciB7XG4gIGNvbG9yOiAjMkMyMzE2O1xufVxuLmNlbnRlcmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLndoaXRlLXRleHQge1xuICBjb2xvcjogI2M3YzVjMTtcbn1cbi5mbGV4LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzQwNDA0MDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcbn1cbi5saWdodC1wb3NpdGlvbi1zZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzQwNDA0MDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5jYW1lcmEtdmlldy1zZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzQwNDA0MDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc21hbGwtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG59XG4uYmFzaWMtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ball */ "./src/app/ball.ts");





let AppComponent = class AppComponent {
    constructor() {
        // используемые переменные
        this.currentAngle = -Math.PI / 2;
        this.currentMaxAngle = Math.PI / 2;
        this.deltaX = 0;
        this.currentV = 0;
        this.aDelta = 0;
        this.Vcoef = 0.00098 / 4;
        this.bool = true;
        // конец
        this.colors = [
            "brown",
            "bisque",
            "blueviolet",
            "darkorange",
            "darkolivegreen",
            "firebrick",
            "red",
            "orange",
            "yellow",
            "green",
            "blue"
        ];
    }
    groundInit() {
        const circleGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["CircleGeometry"](window.innerWidth);
        const circleMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x838581 });
        this.ground = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](circleGeometry, circleMaterial);
        this.ground.rotation.x = -0.5 * Math.PI;
        this.ground.position.x = 0;
        this.ground.position.y = -5;
        this.ground.position.z = 0;
        this.ground.castShadow = true;
        this.ground.receiveShadow = true;
        this.scene.add(this.ground);
    }
    lightInit() {
        this.light = new three__WEBPACK_IMPORTED_MODULE_2__["PointLight"](0xADA9A1, 1.7, Infinity);
        this.light.position.set(0, 100, 0);
        // this.light.receiveShadow = true;
        this.light.castShadow = true;
        this.scene.add(this.light);
    }
    orbitControlsInit() {
        this.orbitControls.target = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-50, 0, 0);
        this.orbitControls.maxPolarAngle = Math.PI / 2;
        this.orbitControls.update();
    }
    resizeRendererToDisplaySize() {
        const canvas = this.renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            this.renderer.setSize(width, height, false);
        }
        return needResize;
    }
    init() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        // this.scene.fog = new Fog(0xCBCBCB, 200, 700);
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xCBCBCB);
        this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](45, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.x = -50;
        this.camera.position.y = 70;
        this.camera.position.z = 200;
        this.axes = new three__WEBPACK_IMPORTED_MODULE_2__["AxesHelper"](1000);
        // this.scene.add(this.axes);
        this.webGLOutput = document.getElementById("WebGL-Output");
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({ canvas: this.webGLOutput });
        this.renderer.shadowMap.enabled = true;
        this.renderer.setClearColor(0xEEEEEE);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.orbitControls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__["OrbitControls"](this.camera, this.renderer.domElement);
    }
    animate() {
        if (this.resizeRendererToDisplaySize()) {
            const canvas = this.renderer.domElement;
            this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this.camera.updateProjectionMatrix();
        }
        // движение шарика
        const ball = this.scene.getObjectByName("ball");
        ball.position.x = -50 - 45 * Math.sin(this.currentAngle);
        ball.position.y = 50 - 45 * Math.cos(this.currentAngle);
        this.currentAngle += this.aDelta;
        this.currentV += Math.sign(this.currentAngle) * Math.sqrt(Math.pow(-9.81 * 1.1, 2) + Math.pow(0.1 * 9.81 * Math.cos(this.currentAngle), 2));
        this.deltaX += Math.abs(this.aDelta);
        ball.rotateZ(this.aDelta * 10);
        this.aDelta -= Math.sign(this.currentAngle) * this.Vcoef;
        if (Math.abs(this.currentAngle) <= this.currentMaxAngle) {
            this.bool = true;
        }
        if (this.bool) {
            if (Math.abs(this.currentAngle) >= this.currentMaxAngle) {
                this.aDelta = 0;
                // this.aDelta = -this.aDelta;
                this.currentMaxAngle *= 0.9;
                this.Vcoef *= 0.8;
                this.bool = false;
            }
        }
        // конец
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
    randomInteger(min, max) {
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    createBall(startSpeed, startAngle, horizontalAngle, startPosition, speedRecoveryCoefficient) {
        const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["SphereGeometry"](this.ballRadius, 50, 50);
        const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: this.colors[5] });
        const sphere = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](sphereGeometry, sphereMaterial);
        sphere.name = `ball`;
        this.ballsIDCounter += 1;
        sphere.castShadow = true;
        const ball = new _ball__WEBPACK_IMPORTED_MODULE_4__["Ball"](this.ballsIDCounter, this.ballRadius, startSpeed, startAngle, startPosition, speedRecoveryCoefficient, this.controls.airResistance, sphere, this.scene, horizontalAngle, { length: this.controls.wallLength, height: 2, width: this.controls.wallDepth });
        this.scene.add(sphere);
        this.balls.push(ball);
        setTimeout(() => {
            this.balls.splice(this.balls.indexOf(ball), 1);
            this.scene.remove(sphere);
        }, this.controls.ballGeneratingSpeed);
    }
    start() {
        this.createBall(this.controls.startSpeed, this.controls.startAngle, this.controls.horizontalAngle, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 20, 0), this.controls.speedRecoveryCoefficient);
    }
    ngOnInit() {
        this.currentMaxAngle *= 0.9;
        this.init();
        this.lightInit();
        this.orbitControlsInit();
        this.balls = [];
        this.ballsIDCounter = 0;
        this.ballRadius = 5;
        this.controls = {
            startPosition: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, this.ballRadius, 0),
            startAngle: 30,
            horizontalAngle: 0,
            startSpeed: 30,
            speedRecoveryCoefficient: 1,
            airResistance: 0,
            timeline: 0,
            wallDepth: 30,
            wallLength: 25,
            wallFar: 180,
            ballGeneratingSpeed: 6 * 1000,
        };
        this.wallControls = {
            aboveGround: 0,
            wallFar: 40,
            vertAngle: 90,
            horizAngle: 0,
            LRPosition: 0,
        };
        // const startGeometry = new CircleGeometry(5, 50);
        // const startMaterial = new MeshStandardMaterial({color: 0x1E1E1E});
        // const startPoint = new Mesh(startGeometry, startMaterial);
        // startPoint.name = `startPoint`;
        // startPoint.receiveShadow = true;
        // startPoint.rotateX(-Math.PI / 2);
        // startPoint.position.y = -4.9;
        // this.scene.add(startPoint);
        // шарик
        const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["SphereGeometry"](this.ballRadius, 50, 50);
        const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({ color: 0xFFFFFF, vertexColors: true });
        const sphere = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](sphereGeometry, sphereMaterial);
        for (let i = 0; i < sphereGeometry.faces.length; i += 3) {
            sphereGeometry.faces[i].color.setRGB(0, 0, 0);
        }
        sphere.name = `ball`;
        sphere.position.set(-50, -50, 0);
        this.scene.add(sphere);
        // конец
        const zhelobGeomtry = new three__WEBPACK_IMPORTED_MODULE_2__["CylinderGeometry"](50, 50, 50, 50, 50, true, Math.PI / 2, Math.PI);
        const zhelobMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshStandardMaterial"]({ color: this.colors[6], wireframe: true });
        const zhelob = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](zhelobGeomtry, zhelobMaterial);
        zhelob.rotateX(-Math.PI / 2);
        zhelob.position.y = 50;
        zhelob.position.x = -50;
        this.scene.add(zhelob);
        // this.start();
        // setInterval(() => {
        //   this.balls.forEach((ball) => {
        //     ball.collision(new Vector3(wall.position.x - 2, wall.position.y - this.controls.wallLength, wall.position.z - this.controls.wallDepth),
        //       new Vector3(wall.position.x + 2, wall.position.y + this.controls.wallLength, wall.position.z + this.controls.wallDepth));
        //     ball.animate();
        //   });
        // }, 100);
        this.renderer.render(this.scene, this.camera);
        this.animate();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/ball.ts":
/*!*************************!*\
  !*** ./src/app/ball.ts ***!
  \*************************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return Ball; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


class Ball {
    constructor(id, radius, startSpeed, startAngle, startPosition, speedRecoveryCoefficient, airResistance, object3D, scene, horizontalAngle, plane) {
        this.degToRad = Math.PI / 180;
        this.step = 0.1;
        this.weight = 100;
        this.id = id;
        this.radius = radius;
        this.startSpeed = startSpeed;
        this.startAngle = startAngle;
        this.startPosition = startPosition;
        this.speedRecoveryCoefficient = speedRecoveryCoefficient;
        this.airResistance = airResistance;
        this.object3D = object3D;
        this.scene = scene;
        this.horizontalAngle = horizontalAngle;
        this.timeline = 0;
        this.plane = plane;
        this.object3D.position.set(this.startPosition.x, this.startPosition.y, this.startPosition.z);
        const pointGeometry = new three__WEBPACK_IMPORTED_MODULE_1__["SphereGeometry"](3, 50);
        const pointMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ color: 0xFFFFFF });
        this.point = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](pointGeometry, pointMaterial);
        // this.scene.add(this.point);
        this.rayCaster = new three__WEBPACK_IMPORTED_MODULE_1__["Raycaster"]();
    }
    animate() {
        this.onGround = this.object3D.position.y < 0;
        if (!this.onGround) {
            this.move();
            return;
        }
        this.startSpeed *= this.speedRecoveryCoefficient;
        if (this.startSpeed > 0 && this.startSpeed < 5 && this.speedRecoveryCoefficient !== 1) {
            this.startSpeed -= this.startSpeed * this.speedRecoveryCoefficient;
        }
        this.startAngle = this.startAngle > 0 ? this.startAngle : -this.startAngle;
        this.object3D.position.set(this.object3D.position.x, this.object3D.position.y + Math.abs(0 - this.object3D.position.y), this.object3D.position.z);
        this.move();
    }
    getPlane() {
        const wall = this.scene.getObjectByName(`wall`);
        const currentVertAngle = wall.rotation.z;
        const currentHorizAngle = wall.rotation.y;
        const point_0 = wall.position;
        const point_1 = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](wall.position.x + this.plane.length * Math.cos(currentVertAngle) * Math.cos(currentHorizAngle), wall.position.y + this.plane.length * Math.sin(currentVertAngle), wall.position.z - this.plane.length * Math.cos(currentVertAngle) * Math.sin(currentHorizAngle));
        const point_2 = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](wall.position.x - this.plane.width * Math.cos(Math.PI / 2 - currentHorizAngle), wall.position.y, wall.position.z - this.plane.width * Math.sin(Math.PI / 2 - currentHorizAngle));
        const xK = (point_1.y - point_0.y) * (point_2.z - point_0.z) - (point_2.y - point_0.y) * (point_1.z - point_0.z);
        const yK = (point_1.x - point_0.x) * (point_2.z - point_0.z) - (point_2.x - point_0.x) * (point_1.z - point_0.z);
        const zK = (point_1.x - point_0.x) * (point_2.y - point_0.y) - (point_2.x - point_0.x) * (point_1.y - point_0.y);
        const D = (-point_0.x) * xK + (-point_0.y) * yK + (-point_0.z) * zK;
        return { xK: xK, yK: yK, zK: zK, D: D };
    }
    // checkCollision(leftBorder: Vector3, rightBorder: Vector3): boolean {
    //   const onX = this.object3D.position.x >= leftBorder.x - this.radius && this.object3D.position.x <= rightBorder.x;
    //   const onY = this.object3D.position.y >= leftBorder.y && this.object3D.position.y <= rightBorder.y;
    //   const onZ = this.object3D.position.z >= leftBorder.z - this.radius && this.object3D.position.z <= rightBorder.z;
    //   return onX && onY && onZ;
    // }
    checkCollision2() {
        const wall = this.scene.getObjectByName(`wall`);
        const points = [
            // this.currentPos(),
            this.object3D.position,
            new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](this.object3D.position.x + this.radius, this.object3D.position.y, this.object3D.position.z),
            // new Vector3(this.object3D.position.x - this.radius, this.object3D.position.y, this.object3D.position.z),
            // new Vector3(this.object3D.position.x, this.object3D.position.y + this.radius, this.object3D.position.z),
            new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](this.object3D.position.x, this.object3D.position.y - this.radius, this.object3D.position.z),
        ];
        const currentVertAngle = wall.rotation.z;
        const currentHorizAngle = wall.rotation.y;
        const leftX = wall.position.x - this.plane.height - Math.abs(this.plane.length * Math.cos(currentVertAngle) * Math.cos(currentHorizAngle))
            - Math.abs(this.plane.width * Math.cos(currentVertAngle) * Math.sin(currentHorizAngle));
        const rightX = wall.position.x + this.plane.height + Math.abs(this.plane.length * Math.cos(currentVertAngle) * Math.cos(currentHorizAngle))
            + Math.abs(this.plane.width * Math.cos(currentVertAngle) * Math.sin(currentHorizAngle));
        const leftY = wall.position.y - this.plane.height - Math.abs(this.plane.length * Math.sin(currentVertAngle));
        const rightY = wall.position.y + this.plane.height + Math.abs(this.plane.length * Math.sin(currentVertAngle));
        const leftZ = wall.position.z - Math.abs(this.plane.width * Math.cos(currentHorizAngle))
            - Math.abs(this.plane.length * Math.sin(currentHorizAngle));
        const rightZ = wall.position.z + Math.abs(this.plane.width * Math.cos(currentHorizAngle))
            + Math.abs(this.plane.length * Math.sin(currentHorizAngle));
        const result = this.getPlane();
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < points.length; i += 1) {
            const onX = points[i].x >= leftX && points[i].x <= rightX;
            const onY = points[i].y >= leftY && points[i].y <= rightY;
            const onZ = points[i].z >= leftZ && points[i].z <= rightZ;
            const distanceToPlane = Math.abs(result.xK * points[i].x + result.yK * points[i].y + result.zK * points[i].z + result.D)
                / Math.sqrt(Math.pow(result.xK, 2) + Math.pow(result.yK, 2) + Math.pow(result.zK, 2));
            if (onX && onY && onZ && Math.abs(Math.floor(distanceToPlane)) === 0) {
                return true;
            }
        }
        return false;
    }
    currentPos() {
        return new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](this.object3D.position.x + this.radius * Math.cos(this.startAngle * this.degToRad) * Math.cos(this.horizontalAngle * this.degToRad), this.object3D.position.y + this.radius * Math.sin(this.startAngle * this.degToRad), this.object3D.position.z + this.radius * Math.cos(this.startAngle * this.degToRad) * Math.sin(this.horizontalAngle * this.degToRad));
    }
    collision() {
        if (this.checkCollision2()) {
            this.startSpeed *= this.speedRecoveryCoefficient;
            this.horizontalAngle = -2 * this.scene.getObjectByName(`wall`).rotation.y / this.degToRad + this.horizontalAngle;
            if (Math.abs(this.horizontalAngle) >= 90) {
                this.horizontalAngle = Math.sign(this.horizontalAngle) * (180 - Math.abs(this.horizontalAngle));
                this.startAngle = 180 % this.startAngle;
            }
            this.object3D.position.set(this.object3D.position.x - 0.2, this.object3D.position.y - 0.2, this.object3D.position.z - 0.2);
            this.startAngle = 2 * this.scene.getObjectByName(`wall`).rotation.z / this.degToRad - this.startAngle;
            this.move();
        }
    }
    newPosition() {
        return new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](this.object3D.position.x + this.startSpeed * Math.cos(this.startAngle * this.degToRad) * Math.cos(this.horizontalAngle * this.degToRad) * this.step
            - (this.airResistance / this.weight * this.startSpeed * this.startSpeed * Math.cos(this.startAngle * this.degToRad) * Math.cos(this.horizontalAngle * this.degToRad) / 2) * Math.pow(this.step, 2), this.object3D.position.y + this.startSpeed * Math.sin(this.startAngle * this.degToRad) * this.step
            - (9.81 + this.airResistance / this.weight * this.startSpeed * this.startSpeed * Math.sin(this.startAngle * this.degToRad) / 2) * Math.pow(this.step, 2), this.object3D.position.z + this.startSpeed * Math.cos(this.startAngle * this.degToRad) * Math.sin(this.horizontalAngle * this.degToRad) * this.step
            - (this.airResistance / this.weight * this.startSpeed * this.startSpeed * Math.cos(this.startAngle * this.degToRad) * Math.sin(this.horizontalAngle * this.degToRad) / 2) * Math.pow(this.step, 2));
    }
    newAngle(nextPosition) {
        const deltaXp = nextPosition.x - this.object3D.position.x;
        const deltaY = nextPosition.y - this.object3D.position.y;
        const deltaZ = nextPosition.z - this.object3D.position.z;
        const deltaX = Math.sign(deltaXp) * Math.sqrt(Math.pow(deltaXp, 2) + Math.pow(deltaZ, 2));
        return Math.sign(deltaX) < 0 ? Math.sign(deltaY) * (Math.PI - Math.atan(Math.abs(deltaY / deltaX))) : Math.sign(deltaY) * Math.atan(Math.abs(deltaY / deltaX));
    }
    newSpeed() {
        const newVx = this.startSpeed * Math.cos(this.startAngle * this.degToRad) * Math.cos(this.horizontalAngle * this.degToRad)
            - this.airResistance / this.weight * this.startSpeed * this.startSpeed * Math.cos(this.startAngle * this.degToRad) * Math.cos(this.horizontalAngle * this.degToRad) * this.step;
        const newVy = this.startSpeed * Math.sin(this.startAngle * this.degToRad)
            - (9.81 + this.airResistance / this.weight * this.startSpeed * this.startSpeed * Math.sin(this.startAngle * this.degToRad)) * this.step;
        const newVz = this.startSpeed * Math.cos(this.startAngle * this.degToRad) * Math.sin(this.horizontalAngle * this.degToRad)
            - this.airResistance / this.weight * this.startSpeed * this.startSpeed * Math.cos(this.startAngle * this.degToRad) * Math.sin(this.horizontalAngle * this.degToRad) * this.step;
        return Math.sqrt(Math.pow(newVx, 2) + Math.pow(newVy, 2) + Math.pow(newVz, 2));
    }
    move() {
        const newPos = this.newPosition();
        this.startAngle = this.newAngle(newPos) / this.degToRad;
        this.startSpeed = this.newSpeed();
        this.object3D.position.set(newPos.x, newPos.y, newPos.z);
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! N:\workspaces\webstorm-workspace\niku-niku\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map