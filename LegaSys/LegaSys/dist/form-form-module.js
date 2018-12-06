(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-form-module"],{

/***/ "./src/app/layout/form/form-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/form/form-routing.module.ts ***!
  \****************************************************/
/*! exports provided: FormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRoutingModule", function() { return FormRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.component */ "./src/app/layout/form/form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"]
    }
];
var FormRoutingModule = /** @class */ (function () {
    function FormRoutingModule() {
    }
    FormRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormRoutingModule);
    return FormRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/form/form.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/form/form.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Forms'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n\r\n            <form role=\"form\">\r\n                <fieldset class=\"form-group\">\r\n                    <label>Text Input</label>\r\n                    <input class=\"form-control\">\r\n                    <p class=\"help-block\">Example block-level help text here.</p>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label>Text Input with Placeholder</label>\r\n                    <input class=\"form-control\" placeholder=\"Enter text\">\r\n                </fieldset>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Static Control</label>\r\n                    <p class=\"form-control-static\">email@example.com</p>\r\n                </div>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label for=\"exampleInputFile\">File input</label>\r\n                    <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\">\r\n                </fieldset>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label>Text area</label>\r\n                    <textarea class=\"form-control\" rows=\"3\"></textarea>\r\n                </fieldset>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Checkboxes</label>\r\n                    <div class=\"checkbox\">\r\n                        <label>\r\n                            <input type=\"checkbox\" value=\"\"> Checkbox 1\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"checkbox\">\r\n                        <label>\r\n                            <input type=\"checkbox\" value=\"\"> Checkbox 2\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"checkbox\">\r\n                        <label>\r\n                            <input type=\"checkbox\" value=\"\"> Checkbox 3\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Inline Checkboxes</label>\r\n                    <label class=\"checkbox-inline\">\r\n                        <input type=\"checkbox\">1\r\n                    </label>\r\n                    <label class=\"checkbox-inline\">\r\n                        <input type=\"checkbox\">2\r\n                    </label>\r\n                    <label class=\"checkbox-inline\">\r\n                        <input type=\"checkbox\">3\r\n                    </label>\r\n                </div>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label>Radio Buttons</label>\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\" checked=\"\"> Radio 1\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\"> Radio 2\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"option3\"> Radio 3\r\n                        </label>\r\n                    </div>\r\n                </fieldset>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label>Inline Radio Buttons</label>\r\n                    <label class=\"radio-inline\">\r\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline1\" value=\"option1\" checked=\"\">1\r\n                    </label>\r\n                    <label class=\"radio-inline\">\r\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline2\" value=\"option2\">2\r\n                    </label>\r\n                    <label class=\"radio-inline\">\r\n                        <input type=\"radio\" name=\"optionsRadiosInline\" id=\"optionsRadiosInline3\" value=\"option3\">3\r\n                    </label>\r\n                </fieldset>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Selects</label>\r\n                    <select class=\"form-control\">\r\n                        <option>1</option>\r\n                        <option>2</option>\r\n                        <option>3</option>\r\n                        <option>4</option>\r\n                        <option>5</option>\r\n                    </select>\r\n                </div>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label>Multiple Selects</label>\r\n                    <select multiple=\"\" class=\"form-control\">\r\n                        <option>1</option>\r\n                        <option>2</option>\r\n                        <option>3</option>\r\n                        <option>4</option>\r\n                        <option>5</option>\r\n                    </select>\r\n                </fieldset>\r\n\r\n                <button type=\"submit\" class=\"btn btn-secondary\">Submit Button</button>\r\n                <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\r\n\r\n            </form>\r\n\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <h4>Disabled Form States</h4>\r\n\r\n            <form role=\"form\">\r\n\r\n                <fieldset disabled=\"\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"disabledSelect\">Disabled input</label>\r\n                        <input class=\"form-control\" id=\"disabledInput\" type=\"text\" placeholder=\"Disabled input\" disabled=\"\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"disabledSelect\">Disabled select menu</label>\r\n                        <select id=\"disabledSelect\" class=\"form-control\">\r\n                            <option>Disabled select</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"checkbox\">\r\n                        <label>\r\n                            <input type=\"checkbox\"> Disabled Checkbox\r\n                        </label>\r\n                    </div>\r\n\r\n                    <button type=\"submit\" class=\"btn btn-primary\">Disabled Button</button>\r\n\r\n                </fieldset>\r\n\r\n            </form>\r\n            <br>\r\n\r\n            <h4>Form Validation</h4>\r\n\r\n            <form role=\"form\">\r\n\r\n                <div class=\"form-group has-success\">\r\n                    <label class=\"form-control-label\" for=\"inputSuccess\">Input with success</label>\r\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess\">\r\n                </div>\r\n\r\n                <div class=\"form-group has-warning\">\r\n                    <label class=\"form-control-label\" for=\"inputWarning\">Input with warning</label>\r\n                    <input type=\"text\" class=\"form-control form-control-warning\" id=\"inputWarning\">\r\n                </div>\r\n\r\n                <div class=\"form-group has-danger\">\r\n                    <label class=\"form-control-label\" for=\"inputError\">Input with danger</label>\r\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputError\">\r\n                </div>\r\n\r\n            </form>\r\n\r\n            <h4>Input Groups</h4>\r\n\r\n            <form role=\"form\">\r\n\r\n                <div class=\"form-group input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\r\n                    </div>\r\n                    <!-- <span class=\"input-group-addon\">@</span> -->\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n                </div>\r\n\r\n                <div class=\"form-group input-group\">\r\n                    <input type=\"text\" class=\"form-control\">\r\n                    <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">.00</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-eur\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Font Awesome Icon\">\r\n                </div>\r\n\r\n                <div class=\"form-group input-group\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\" id=\"basic-addon1\">$</span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\">\r\n                    <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">.00</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group input-group\">\r\n                    <input type=\"text\" class=\"form-control\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n\r\n            <p>For complete documentation, please visit <a target=\"_blank\" href=\"http://v4-alpha.getbootstrap.com/components/forms/\">Bootstrap's Form Documentation</a>.</p>\r\n\r\n        </div>\r\n    </div>\r\n    <!-- /.row -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/form/form.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/form/form.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/form/form.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/form/form.component.ts ***!
  \***********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/layout/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/layout/form/form.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/layout/form/form.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/form/form.module.ts ***!
  \********************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-routing.module */ "./src/app/layout/form/form-routing.module.ts");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.component */ "./src/app/layout/form/form.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]]
        })
    ], FormModule);
    return FormModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-form-module.js.map