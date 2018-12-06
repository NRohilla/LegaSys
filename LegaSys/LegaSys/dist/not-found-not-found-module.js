(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["not-found-not-found-module"],{

/***/ "./src/app/not-found/not-found-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/not-found/not-found-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundRoutingModule", function() { return NotFoundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }
];
var NotFoundRoutingModule = /** @class */ (function () {
    function NotFoundRoutingModule() {
    }
    NotFoundRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NotFoundRoutingModule);
    return NotFoundRoutingModule;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<meta charset=\"utf-8\">\r\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\r\n\r\n<title>404 HTML Tempalte by Colorlib</title>\r\n\r\n<!-- Google font -->\r\n<link href=\"https://fonts.googleapis.com/css?family=Montserrat:400,700,900\" rel=\"stylesheet\">\r\n\r\n<!-- Custom stlylesheet -->\r\n<!-- <link type=\"text/css\" rel=\"stylesheet\" href=\"css/style.css\" /> -->\r\n<style>\r\n  * {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  body {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n\r\n  #notfound {\r\n    position: relative;\r\n    height: 100vh;\r\n  }\r\n\r\n  #notfound .notfound {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n  }\r\n\r\n  .notfound {\r\n    max-width: 410px;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n\r\n  .notfound .notfound-404 {\r\n    height: 280px;\r\n    position: relative;\r\n    z-index: -1;\r\n  }\r\n\r\n  .notfound .notfound-404 h1 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 230px;\r\n    margin: 0px;\r\n    font-weight: 900;\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n    -ms-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n    background: url('../../assets/images/bg.jpg') no-repeat;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-size: cover;\r\n    background-position: center;\r\n  }\r\n\r\n\r\n  .notfound h2 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: #000;\r\n    font-size: 24px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .notfound p {\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: #000;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    margin-bottom: 20px;\r\n    margin-top: 0px;\r\n  }\r\n\r\n  .notfound a {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    background: #0046d5;\r\n    display: inline-block;\r\n    padding: 15px 30px;\r\n    border-radius: 40px;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    -webkit-box-shadow: 0px 4px 15px -5px #0046d5;\r\n    box-shadow: 0px 4px 15px -5px #0046d5;\r\n  }\r\n\r\n\r\n  @media only screen and (max-width: 767px) {\r\n    .notfound .notfound-404 {\r\n      height: 142px;\r\n    }\r\n\r\n    .notfound .notfound-404 h1 {\r\n      font-size: 112px;\r\n    }\r\n  }\r\n</style>\r\n<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->\r\n<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->\r\n<!--[if lt IE 9]>\r\n\t\t  <script src=\"https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js\"></script>\r\n\t\t  <script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>\r\n\t\t<![endif]-->\r\n\r\n\r\n<div id=\"notfound\">\r\n  <div class=\"notfound\">\r\n    <div class=\"notfound-404\">\r\n      <h1>Oops!</h1>\r\n    </div>\r\n    <h2>404 - Page not found</h2>\r\n    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>\r\n    <a href=\"http://localhost:4200\">Go To Homepage</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.module.ts":
/*!***********************************************!*\
  !*** ./src/app/not-found/not-found.module.ts ***!
  \***********************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found-routing.module */ "./src/app/not-found/not-found-routing.module.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _not_found_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotFoundRoutingModule"]
            ],
            declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]]
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ })

}]);
//# sourceMappingURL=not-found-not-found-module.js.map