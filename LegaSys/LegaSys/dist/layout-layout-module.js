(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\r\n    <a class=\"navbar-brand\" href=\"#\">LegaSys </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\r\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\r\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'Search' | translate }}\" style=\"display:none\" >\r\n        </form>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item d-none d-xl-block\">\r\n                <a\r\n                    href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-2/archive/master.zip\"\r\n                    class=\"nav-link btn mt-1\" role=\"button\"\r\n                    style=\"padding: .375rem 1rem !important;border-color: #999;display: none\"\r\n                >\r\n                    {{ 'Download Now' | translate }}\r\n                </a>\r\n            </li> &nbsp;\r\n            <li class=\"nav-item\">\r\n                <a href=\"javascript:void(0)\" class=\"nav-link mt-1\"\r\n                    style=\"padding: 0.375rem 1rem !important; border-color: #999;display: none\"\r\n                    (click)=\"rltAndLtr()\"\r\n                >\r\n                    RTL/LTR\r\n                </a>\r\n            </li> &nbsp;\r\n            <li class=\"nav-item dropdown\" ngbDropdown style=\"display: none\">\r\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                </a>\r\n                <ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\r\n                    <li class=\"media\">\r\n                        <img class=\"d-flex align-self-center mr-3\"\r\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\"\r\n                        >\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\r\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"media\">\r\n                        <img class=\"d-flex align-self-center mr-3\"\r\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\r\n                            alt=\"Generic placeholder image\"\r\n                        >\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\r\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"media\">\r\n                        <img class=\"d-flex align-self-center mr-3\"\r\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\r\n                            alt=\"Generic placeholder image\"\r\n                        />\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\r\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r\n                            <p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" ngbDropdown style=\"display: none\">\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\r\n                </a>\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        {{ 'Pending Task' | translate }} <span class=\"badge badge-info\">6</span>\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        {{ 'In queue' | translate }} <span class=\"badge badge-info\"> 13</span>\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        {{ 'Mail' | translate }} <span class=\"badge badge-info\"> 45</span>\r\n                    </a>\r\n                    <li class=\"dropdown-divider\"></li>\r\n                    <a href=\"javascript:void(0)\" class=\"dropdown-item\">\r\n                        {{ 'View All' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" ngbDropdown style=\"display: none\">\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b>\r\n                </a>\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\r\n                        {{ 'English' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\r\n                        {{ 'French' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\r\n                        {{ 'Urdu' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\r\n                        {{ 'Spanish' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\r\n                        {{ 'Italian' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\r\n                        {{ 'Farsi' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\r\n                        {{ 'German' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('zh-CHS')\">\r\n                        {{ 'Simplified Chinese' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item text-white mt-2\">Last Login: {{lastLogin}}<span class=\"px-1\">|</span></li>\r\n            <li class=\"nav-item dropdown\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-user\"></i> {{name}} <b class=\"caret\"></b>\r\n                </a>\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\r\n                    </a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #222; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router, storage) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.storage = storage;
        this.pushRightClass = 'push-right';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.getName = function () {
        var token = this.storage.get('UserToken');
        if (token != null) {
            this.name = token.name;
            this.lastLogin = token.lastlogin;
        }
    };
    HeaderComponent.prototype.ngOnInit = function () { this.getName(); };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\r\n    <div class=\"list-group\">\r\n        <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;\r\n            <span>{{ 'Dashboard' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/client']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-users\"></i>&nbsp;\r\n            <span>{{ 'Clients' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/project']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-files-o\"></i>&nbsp;\r\n            <span>{{ 'Projects' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/tasks']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-files-o\"></i>&nbsp;\r\n            <span>{{ 'Tasks' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/resource']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-users\"></i>&nbsp;\r\n            <span>{{ 'Resources' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" style=\"display: none\">\r\n            <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;\r\n            <span>{{ 'Bootstrap Element' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" style=\"display: none\">\r\n            <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;\r\n            <span>{{ 'Bootstrap Grid' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" style=\"display: none\">\r\n            <i class=\"fa fa-th-list\"></i>&nbsp;\r\n            <span>{{ 'Component' | translate }}</span>\r\n        </a>\r\n        <div class=\"nested-menu\">\r\n            <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\r\n                <i class=\"fa fa-plus\"></i>&nbsp;\r\n                <span>{{ 'Masters' | translate }}</span>\r\n            </a>\r\n            <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\r\n                <ul class=\"submenu\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/domains']\" [routerLinkActive]=\"['router-link-active']\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Domains' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/technologies']\" [routerLinkActive]=\"['router-link-active']\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Technologies' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/shifts']\" [routerLinkActive]=\"['router-link-active']\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Shifts' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/locations']\" [routerLinkActive]=\"['router-link-active']\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Locations' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/leavetype']\" [routerLinkActive]=\"['router-link-active']\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Leaves' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/leaves']\" [routerLinkActive]=\"['router-link-active']\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Leave Status' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a [routerLink]=\"['/roles']\" [routerLinkActive]=\"['router-link-active']\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Roles' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </div>\r\n        <a [routerLink]=\"['/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" style=\"display: none\">\r\n            <i class=\"fa fa-file-o\"></i>&nbsp;\r\n            <span>{{ 'Blank Page' | translate }}</span>\r\n        </a>\r\n        <a href=\"http://www.strapui.com/\" class=\"list-group-item\" style=\"display: none\">\r\n            <i class=\"fa fa-caret-down\"></i>&nbsp;\r\n            <span>{{ 'More Themes' | translate }}</span>\r\n        </a>\r\n\r\n        <div class=\"header-fields\">\r\n            <a (click)=\"rltAndLtr()\" class=\"list-group-item\">\r\n                <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\r\n            </a>\r\n            <div class=\"nested-menu\">\r\n                <a class=\"list-group-item\" (click)=\"addExpandClass('languages')\">\r\n                    <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>\r\n                </a>\r\n                <li class=\"nested\" [class.expand]=\"showMenu === 'languages'\">\r\n                    <ul class=\"submenu\">\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\r\n                                {{ 'English' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\r\n                                {{ 'French' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\r\n                                {{ 'Urdu' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\r\n                                {{ 'Spanish' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\r\n                                {{ 'Italian' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\r\n                                {{ 'Farsi' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\r\n                                {{ 'German' | translate }}\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </div>\r\n            <div class=\"nested-menu\">\r\n                <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\r\n                    <span><i class=\"fa fa-user\"></i>&nbsp; John Smith</span>\r\n                </a>\r\n                <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\r\n                    <ul class=\"submenu\">\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <span><i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <span><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                                <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"toggle-button\" [ngClass]=\"{collapsed: collapsed}\" (click)=\"toggleCollapsed()\">\r\n        <i class=\"fa fa-fw fa-angle-double-left\"></i>&nbsp;\r\n        <span>{{ 'Collapse Sidebar' | translate }}</span>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  .nested-menu .expand ul.submenu li a {\n  text-decoration: none; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n  .toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out; }\n  .toggle-button i {\n    font-size: 23px; }\n  .toggle-button:hover {\n    background: #151515;\n    color: #fff; }\n  .collapsed {\n  width: 50px; }\n  .collapsed span {\n    display: none; }\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "collapsedEvent", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _resource_create_resource_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource/create-resource.component */ "./src/app/layout/resource/create-resource.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { ResourceDetailsComponent } from './resource/resource-details/resource-details.component';

var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'client', loadChildren: './client/client.module#ClientModule' },
            { path: 'resource', loadChildren: './resource/resource.module#ResourceModule' },
            { path: 'resource-details', loadChildren: './resource/resource-details/resource-details.module#ResourceDetailsModule' },
            { path: 'client', loadChildren: './client/client.module#ClientModule' },
            { path: 'client-details', loadChildren: './client/client-details/client-details.module#ClientDetailsModule' },
            { path: 'add-client', loadChildren: './client/addclient/addclient.module#AddclientModule' },
            { path: 'project', loadChildren: './project/project.module#ProjectModule' },
            { path: 'resource-details', loadChildren: './resource/resource-details/resource-details.module#ResourceDetailsModule' },
            { path: 'shifts', loadChildren: './masters/shifts/shifts.module#ShiftsModule' },
            { path: 'create-resource', component: _resource_create_resource_component__WEBPACK_IMPORTED_MODULE_3__["CreateResourceComponent"] },
            { path: 'locations', loadChildren: './masters/locations/locations.module#LocationsModule' },
            { path: 'roles', loadChildren: './masters/roles/roles.module#RolesModule' },
            { path: 'domains', loadChildren: './masters/domains/domains.module#DomainsModule' },
            { path: 'technologies', loadChildren: './masters/technologies/technologies.module#TechnologiesModule' },
            { path: 'leaves', loadChildren: './masters/leaves/leaves.module#LeavesModule' },
            { path: 'leavetype', loadChildren: './masters/leavetype/leavetype.module#LeavetypeModule' },
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\r\n<section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\">\r\n    <router-outlet></router-outlet>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _resource_create_resource_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resource/create-resource.component */ "./src/app/layout/resource/create-resource.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _masters_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masters/dialog/dialog.component */ "./src/app/layout/masters/dialog/dialog.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _shared__WEBPACK_IMPORTED_MODULE_11__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _resource_create_resource_component__WEBPACK_IMPORTED_MODULE_8__["CreateResourceComponent"], _masters_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"]],
            entryComponents: [_masters_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/resource/create-resource.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/resource/create-resource.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-page-header [heading]=\"'Add Resource'\" [icon]=\"'fa fa-fw fa-users'\"></app-page-header>\r\n</div>\r\n<div class=\"card mb-3\">\r\n  <div class=\"card-header bg-info text-center\">\r\n    <mat-label class=\"labeltext text-white text-uppercase \">Resource Details</mat-label>\r\n  </div>\r\n</div>\r\n<form [formGroup]=\"resourceForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onSubmit(resourceForm, formDirective)\">\r\n  <div class=\"\">\r\n    <mat-form-field hidden>\r\n      <input matInput formControlName=\"UserDetailID\">\r\n    </mat-form-field>\r\n    <div class=\" row\">\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field style=\"width:350px !important\">\r\n          <input matInput placeholder=\"Firstname\" formControlName=\"firstname\" required>\r\n          <mat-hint align=\"end\">\r\n            Maximum Length {{resourceForm.controls.firstname.value?.length}}/25\r\n          </mat-hint>\r\n          <!-- input field error -->\r\n          <mat-error *ngIf=\"resourceForm.controls.firstname.invalid\">\r\n            <span [hidden]=\"!resourceForm.controls['firstname'].errors.required\">\r\n              Firstname is required.\r\n            </span>\r\n            <span [hidden]=\"!resourceForm.controls['firstname'].errors.maxlength\">\r\n              Maximum allowed characters are 25.\r\n            </span>\r\n            <span [hidden]=\"!resourceForm.controls['firstname'].errors.pattern \">\r\n              Special characters and numbers are not allowed.\r\n            </span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field style=\"width:250px !important\">\r\n          <input matInput placeholder=\"Middlename\" formControlName=\"middlename\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field style=\"width:350px !important\">\r\n          <input matInput placeholder=\"Lastname\" formControlName=\"lastname\" required>\r\n          <mat-hint align=\"end\">\r\n            Maximum Length {{resourceForm.controls.lastname.value?.length}}/25\r\n          </mat-hint>\r\n          <mat-error *ngIf=\"resourceForm.controls.lastname.invalid\">\r\n            <span [hidden]=\"!resourceForm.controls['lastname'].errors.required\">\r\n              Lastname is required.\r\n            </span>\r\n            <span [hidden]=\"!resourceForm.controls['lastname'].errors.maxlength\">\r\n              Maximum allowed characters are 25.\r\n            </span>\r\n            <span [hidden]=\"!resourceForm.controls['lastname'].errors.pattern \">\r\n              Special characters and numbers are not allowed.\r\n            </span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field style=\"width:350px !important\">\r\n          <input matInput placeholder=\"Total Experience\" formControlName=\"totalexp\" required>\r\n          <mat-error *ngIf=\"resourceForm.controls.totalexp.invalid\">\r\n            <span [hidden]=\"!resourceForm.controls['totalexp'].errors.required\">\r\n              Total Experience is required.\r\n            </span>\r\n            <span [hidden]=\"!resourceForm.controls['totalexp'].errors.pattern\">\r\n              Only positive numbers allowed from 0-60.\r\n            </span>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field style=\"width:350px !important\">\r\n          <input matInput placeholder=\"Email\" formControlName=\"emailId\" email required>\r\n          <!-- <mat-error *ngIf=\"emailId.invalid\">{{getErrorMessage()}}</mat-error> -->\r\n          <mat-error *ngIf=\"resourceForm.controls.emailId.invalid \">\r\n            <span [hidden]=\"!resourceForm.controls['emailId'].errors.required\">\r\n              Email is required\r\n            </span>\r\n            <!-- <span [hidden]=\"resourceForm.controls['emailId'].errors.pattern\">\r\n                      Invalid Email\r\n                     </span>  -->\r\n            <mat-error *ngIf=\"resourceForm.controls['emailId'].errors.pattern \">Invalid Email</mat-error>\r\n\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field style=\"width:350px !important\">\r\n          <input matInput placeholder=\"Mobile\" formControlName=\"mobile\" type=\"number\" required>\r\n          <mat-error *ngIf=\"resourceForm.controls.mobile.invalid \">\r\n            <span [hidden]=\"!resourceForm.controls['mobile'].errors.required\">\r\n              Mobile No is required\r\n            </span>\r\n\r\n            <mat-error *ngIf=\"resourceForm.controls['mobile'].errors.pattern \">Mobile No must be 10 digit long</mat-error>\r\n          </mat-error>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field style=\"width:350px !important\">\r\n          <mat-select placeholder=\"Select Shift\" formControlName=\"Master_Shift_ID\" required>\r\n            <mat-option *ngFor=\"let option of shift \" [value]=\"option.ShiftID\">{{option.StartTimeIST\r\n              +'-'+option.EndTimeIST}}</mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"resourceForm.controls['Master_Shift_ID'].errors?.required \">Shift is required.</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field style=\"width:350px !important\">\r\n          <mat-select placeholder=\"Select Location\" formControlName=\"Master_Location_ID\" required>\r\n            <mat-option *ngFor=\"let option of location\" [value]=\"option.LocationID\">{{option.LocationAddress}}</mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"resourceForm.controls['Master_Location_ID'].errors?.required \">Location is required.</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field style=\"width:350px !important\">\r\n          <mat-select placeholder=\"Select Role\" formControlName=\"Master_Role_ID\" (selectionChange)=\"roleChanged($event.value)\"\r\n            required>\r\n            <mat-option *ngFor=\"let option of role\" [value]=\"option.UserRoleID\">{{option.RoleName}}</mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"resourceForm.controls['Master_Role_ID'].errors?.required \">Role is required.</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field style=\"width:350px !important\">\r\n          <mat-select placeholder=\"Select Reporting Head\" formControlName=\"ReportingHead_ID\" required>\r\n            <mat-option *ngFor=\"let option of rHead\" [value]=\"option.UserDetailID\">{{option.Fullname}}</mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"resourceForm.controls['ReportingHead_ID'].errors?.required \">Reporting Head is required.</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-8\">\r\n        <mat-form-field style=\"width:910px !important\">\r\n          <textarea matInput placeholder=\"Extra Remarks\" formControlName=\"remarks\"></textarea>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"w-100 float-left table-info px-4 py-2 text-right footer-height\">\r\n      <!-- <div class=\"px-2 float-right\">\r\n        <button mat-button class=\"btn btn-info\" [routerLink]=\"['/client']\"><i class=\"fa fa-backward\" aria-hidden=\"true\"></i>\r\n          Back</button>\r\n      </div> -->\r\n      <!-- <button class=\"btn btn-info\" [disabled]=\"!clientForm.valid\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i> Submit</button> -->\r\n      <button class=\"btn btn-info mat-button\" type=\"submit\" [disabled]=\"!resourceForm.valid\" mat-raised-button><i class=\"fa fa-save\"\r\n          aria-hidden=\"true\"></i> Add Resource</button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/layout/resource/create-resource.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/resource/create-resource.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 80%; }\n"

/***/ }),

/***/ "./src/app/layout/resource/create-resource.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/resource/create-resource.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateResourceComponent", function() { return CreateResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource.service */ "./src/app/layout/resource/resource.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateResourceComponent = /** @class */ (function () {
    function CreateResourceComponent(dataService, formBuilder, router, snackBar) {
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.snackBar = snackBar;
        this.isFailedMessage = false;
        this.isSuccessMessage = false;
        this.namePattern = "[A-Za-z]{1,25}";
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.totexpPattern = "^(?!0+(?:\.0+)?$)[0-5]?[0-9](?:\.\d\d?)?$";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    Object.defineProperty(CreateResourceComponent.prototype, "officialEmail", {
        get: function () {
            return this.resourceForm.get('emailId');
        },
        enumerable: true,
        configurable: true
    });
    CreateResourceComponent.prototype.ngOnInit = function () {
        this.RenderData();
        this.resourceForm = this.formBuilder.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.namePattern)]],
            middlename: [''],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.namePattern)]],
            totalexp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.totexpPattern)]],
            emailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]],
            ShiftID: [''],
            LocationID: [''],
            UserRoleID: [''],
            UserDetailID: ['0'],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.mobnumPattern)]],
            remarks: [''],
            Master_Location_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Master_Role_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Master_Shift_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ReportingHead_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CreateResourceComponent.prototype.onSubmit = function (formData, formDirective) {
        var _this = this;
        debugger;
        console.log(this.resourceForm.value);
        this.inputResource = this.resourceForm.value;
        console.log(this.inputResource);
        debugger;
        this.dataService.addResource(this.inputResource)
            .subscribe(function (result) {
            _this.globalResponse = result;
        }, function (error) {
            console.log(error);
            _this.isFailedMessage = true;
            _this.snackBar.open("Error in posting data", "Ok", {
                duration: 2000,
            });
        }, function () {
            _this.isSuccessMessage = true;
            _this.snackBar.open("Resource Added Successfully", "Ok", {
                duration: 2000,
            });
        });
        formDirective.resetForm();
        this.resourceForm.reset();
    };
    CreateResourceComponent.prototype.RenderData = function () {
        var _this = this;
        debugger;
        this.dataService.getLocation()
            .subscribe(function (data) {
            debugger;
            _this.location = data;
        });
        this.dataService.getShift()
            .subscribe(function (data) {
            debugger;
            _this.shift = data;
        });
        this.dataService.getRoles()
            .subscribe(function (data) {
            _this.role = data;
        });
    };
    CreateResourceComponent.prototype.roleChanged = function (value) {
        var _this = this;
        this.dataService.getReportingHead(value)
            .subscribe(function (data) {
            _this.rHead = data;
        });
    };
    CreateResourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-resource',
            template: __webpack_require__(/*! ./create-resource.component.html */ "./src/app/layout/resource/create-resource.component.html"),
            styles: [__webpack_require__(/*! ./create-resource.component.scss */ "./src/app/layout/resource/create-resource.component.scss")]
        }),
        __metadata("design:paramtypes", [_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], CreateResourceComponent);
    return CreateResourceComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map