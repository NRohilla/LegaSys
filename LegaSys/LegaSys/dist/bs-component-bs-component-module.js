(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bs-component-bs-component-module"],{

/***/ "./src/app/layout/bs-component/bs-component-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: BsComponentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsComponentRoutingModule", function() { return BsComponentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bs_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs-component.component */ "./src/app/layout/bs-component/bs-component.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _bs_component_component__WEBPACK_IMPORTED_MODULE_2__["BsComponentComponent"]
    }
];
var BsComponentRoutingModule = /** @class */ (function () {
    function BsComponentRoutingModule() {
    }
    BsComponentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BsComponentRoutingModule);
    return BsComponentRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/bs-component.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-page-header [heading]=\"'Bootstrap Component'\" [icon]=\"'fa-th-list'\"></app-page-header>\r\n    <app-modal></app-modal>\r\n    <app-alert></app-alert>\r\n    <app-buttons></app-buttons>\r\n    <app-collapse></app-collapse>\r\n    <app-date-picker></app-date-picker>\r\n    <app-dropdown></app-dropdown>\r\n    <app-pagination></app-pagination>\r\n    <app-pop-over></app-pop-over>\r\n    <app-progressbar></app-progressbar>\r\n    <app-tabs></app-tabs>\r\n    <app-tooltip></app-tooltip>\r\n    <app-timepicker></app-timepicker>\r\n    <app-rating></app-rating>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/bs-component.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/bs-component.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component.component.ts ***!
  \***************************************************************/
/*! exports provided: BsComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsComponentComponent", function() { return BsComponentComponent; });
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

var BsComponentComponent = /** @class */ (function () {
    function BsComponentComponent() {
    }
    BsComponentComponent.prototype.ngOnInit = function () { };
    BsComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bs-component',
            template: __webpack_require__(/*! ./bs-component.component.html */ "./src/app/layout/bs-component/bs-component.component.html"),
            styles: [__webpack_require__(/*! ./bs-component.component.scss */ "./src/app/layout/bs-component/bs-component.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BsComponentComponent);
    return BsComponentComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/bs-component.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/bs-component/bs-component.module.ts ***!
  \************************************************************/
/*! exports provided: BsComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsComponentModule", function() { return BsComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bs_component_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bs-component-routing.module */ "./src/app/layout/bs-component/bs-component-routing.module.ts");
/* harmony import */ var _bs_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bs-component.component */ "./src/app/layout/bs-component/bs-component.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/layout/bs-component/components/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BsComponentModule = /** @class */ (function () {
    function BsComponentModule() {
    }
    BsComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _bs_component_routing_module__WEBPACK_IMPORTED_MODULE_4__["BsComponentRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _shared__WEBPACK_IMPORTED_MODULE_7__["PageHeaderModule"]
            ],
            declarations: [
                _bs_component_component__WEBPACK_IMPORTED_MODULE_5__["BsComponentComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["ButtonsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["CollapseComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["DatePickerComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["DropdownComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["PopOverComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["ProgressbarComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["TooltipComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["TimepickerComponent"]
            ]
        })
    ], BsComponentModule);
    return BsComponentModule;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/alert/alert.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/alert/alert.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">Buttons</div>\r\n            <div class=\"card-body\">\r\n                <p *ngFor=\"let alert of alerts\">\r\n                    <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/alert/alert.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/alert/alert.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/components/alert/alert.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/alert/alert.component.ts ***!
  \*************************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
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

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        });
    }
    AlertComponent.prototype.ngOnInit = function () { };
    AlertComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/layout/bs-component/components/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/layout/bs-component/components/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/buttons/buttons.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/buttons/buttons.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                Radio Button group (<strong>Using ngModel</strong>)\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"btn-group btn-group-toggle mb-3\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"model\">\r\n                    <label ngbButtonLabel class=\"btn-primary\">\r\n                        <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n                    </label>\r\n                    <label ngbButtonLabel class=\"btn-primary\">\r\n                        <input ngbButton type=\"radio\" value=\"middle\"> Middle\r\n                    </label>\r\n                    <label ngbButtonLabel class=\"btn-primary\">\r\n                        <input ngbButton type=\"radio\" [value]=\"false\"> Right\r\n                    </label>\r\n                </div>\r\n                <div class=\"alert alert-info mb-0\">\r\n                    <strong>Selected Value: </strong>{{model}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                Radio Button group (<strong>Ractive Forms</strong>)\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form [formGroup]=\"radioGroupForm\" class=\"mb-3\">\r\n                    <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\r\n                        <label ngbButtonLabel class=\"btn-primary\">\r\n                            <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n                        </label>\r\n                        <label ngbButtonLabel class=\"btn-primary\">\r\n                            <input ngbButton type=\"radio\" value=\"middle\"> Middle\r\n                        </label>\r\n                        <label ngbButtonLabel class=\"btn-primary\">\r\n                            <input ngbButton type=\"radio\" [value]=\"false\"> Right\r\n                        </label>\r\n                    </div>\r\n                </form>\r\n                <div class=\"alert alert-info mb-0\">\r\n                    <strong>Selected Value: </strong>{{radioGroupForm.value.model}}\r\n                </div>\r\n                <!-- <form [formGroup]=\"radioGroupForm\">\r\n                    <div ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\r\n                        <label class=\"btn btn-primary\">\r\n                            <input type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n                        </label>\r\n                        <label class=\"btn btn-primary\">\r\n                            <input type=\"radio\" value=\"middle\"> Middle\r\n                        </label>\r\n                        <label class=\"btn btn-primary\">\r\n                            <input type=\"radio\" [value]=\"false\"> Right\r\n                        </label>\r\n                    </div>\r\n                </form> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/buttons/buttons.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/buttons/buttons.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/components/buttons/buttons.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/buttons/buttons.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.model = 1;
    }
    ButtonsComponent.prototype.ngOnInit = function () {
        this.radioGroupForm = this.formBuilder.group({
            model: 'middle'
        });
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/layout/bs-component/components/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/layout/bs-component/components/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/collapse/collapse.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/collapse/collapse.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">Collapse</div>\r\n            <div class=\"card-body\">\r\n                <p>\r\n                    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\"\r\n                        [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n                        Toggle\r\n                    </button>\r\n                </p>\r\n                <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\">\r\n                            You can collapse this card by clicking Toggle\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/collapse/collapse.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/collapse/collapse.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/components/collapse/collapse.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/collapse/collapse.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseComponent", function() { return CollapseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CollapseComponent = /** @class */ (function () {
    function CollapseComponent() {
        this.isCollapsed = false;
    }
    CollapseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collapse',
            template: __webpack_require__(/*! ./collapse.component.html */ "./src/app/layout/bs-component/components/collapse/collapse.component.html"),
            styles: [__webpack_require__(/*! ./collapse.component.scss */ "./src/app/layout/bs-component/components/collapse/collapse.component.scss")]
        })
    ], CollapseComponent);
    return CollapseComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/date-picker/date-picker.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/date-picker/date-picker.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">Date Picker</div>\r\n            <div class=\"card-body\">\r\n                <form class=\"form-inline mb-3\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group datepicker-input\">\r\n                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                                name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                            <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\r\n                                <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\r\n                                <span class=\"fa fa-calendar\"></span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <div class=\"alert alert-info mb-0\">\r\n                    <strong>Model: </strong> {{ model | json }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/date-picker/date-picker.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/date-picker/date-picker.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .datepicker-input .custom-select {\n  width: 50%; }\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/date-picker/date-picker.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/date-picker/date-picker.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
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

var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent() {
    }
    DatePickerComponent.prototype.ngOnInit = function () {
    };
    DatePickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-date-picker',
            template: __webpack_require__(/*! ./date-picker.component.html */ "./src/app/layout/bs-component/components/date-picker/date-picker.component.html"),
            styles: [__webpack_require__(/*! ./date-picker.component.scss */ "./src/app/layout/bs-component/components/date-picker/date-picker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DatePickerComponent);
    return DatePickerComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/dropdown/dropdown.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/dropdown/dropdown.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">Dropdown</div>\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div ngbDropdown class=\"d-inline-block dropdown\">\r\n                    <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Toggle dropdown</button>\r\n                    <div ngbDropdownMenu>\r\n                        <button class=\"dropdown-item\">Action</button>\r\n                        <button class=\"dropdown-item\">Another Action</button>\r\n                        <button class=\"dropdown-item\">Something else is here</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col text-right\">\r\n                <div ngbDropdown placement=\"top-right\" class=\"d-inline-block dropdown\">\r\n                    <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Toggle dropup</button>\r\n                    <div ngbDropdownMenu>\r\n                        <button class=\"dropdown-item\">Action</button>\r\n                        <button class=\"dropdown-item\">Another Action</button>\r\n                        <button class=\"dropdown-item\">Something else is here</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n        <p class=\"mb-2\">You can easily control dropdowns programmatically using the exported dropdown instance.</p>\r\n        <div class=\"d-inline-block dropdown\" ngbDropdown #myDrop=\"ngbDropdown\">\r\n            <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Toggle dropdown</button>\r\n            <div ngbDropdownMenu>\r\n                <button class=\"dropdown-item\">Action</button>\r\n                <button class=\"dropdown-item\">Another Action</button>\r\n                <button class=\"dropdown-item\">Something else is here</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"d-inline-block dropdown\" ngbDropdown #myDrop=\"ngbDropdown\">\r\n            <button class=\"btn btn-outline-success\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\r\n        </div>\r\n        <div class=\"d-inline-block dropdown\" ngbDropdown #myDrop=\"ngbDropdown\">\r\n            <button class=\"btn btn-outline-danger\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/dropdown/dropdown.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/dropdown/dropdown.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/components/dropdown/dropdown.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/dropdown/dropdown.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
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

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    DropdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/layout/bs-component/components/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/layout/bs-component/components/dropdown/dropdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/bs-component/components/index.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsComponent, AlertComponent, ModalComponent, CollapseComponent, DatePickerComponent, DropdownComponent, PaginationComponent, PopOverComponent, ProgressbarComponent, TabsComponent, RatingComponent, TooltipComponent, TimepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/layout/bs-component/components/buttons/buttons.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__["ButtonsComponent"]; });

/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/layout/bs-component/components/alert/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]; });

/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/layout/bs-component/components/modal/modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]; });

/* harmony import */ var _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collapse/collapse.component */ "./src/app/layout/bs-component/components/collapse/collapse.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseComponent", function() { return _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_3__["CollapseComponent"]; });

/* harmony import */ var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-picker/date-picker.component */ "./src/app/layout/bs-component/components/date-picker/date-picker.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerComponent"]; });

/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./src/app/layout/bs-component/components/dropdown/dropdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DropdownComponent"]; });

/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/layout/bs-component/components/pagination/pagination.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"]; });

/* harmony import */ var _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pop-over/pop-over.component */ "./src/app/layout/bs-component/components/pop-over/pop-over.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopOverComponent", function() { return _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_7__["PopOverComponent"]; });

/* harmony import */ var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progressbar/progressbar.component */ "./src/app/layout/bs-component/components/progressbar/progressbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_8__["ProgressbarComponent"]; });

/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/layout/bs-component/components/tabs/tabs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"]; });

/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/layout/bs-component/components/rating/rating.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return _rating_rating_component__WEBPACK_IMPORTED_MODULE_10__["RatingComponent"]; });

/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/layout/bs-component/components/tooltip/tooltip.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__["TooltipComponent"]; });

/* harmony import */ var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timepicker/timepicker.component */ "./src/app/layout/bs-component/components/timepicker/timepicker.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_12__["TimepickerComponent"]; });
















/***/ }),

/***/ "./src/app/layout/bs-component/components/modal/modal.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/modal/modal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">Modal</div>\r\n            <!-- Large modal -->\r\n            <div class=\"card-body\">\r\n                <button class=\"btn btn-primary\" (click)=\"open(content)\">Large modal</button>\r\n                <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Modal title</h4>\r\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <p>One fine body&hellip;</p>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n                    </div>\r\n                </ng-template>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/modal/modal.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/modal/modal.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/components/modal/modal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/modal/modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/layout/bs-component/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/layout/bs-component/components/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/pagination/pagination.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pagination/pagination.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mt-3\">\r\n            <div class=\"card-header\">Basic Pagination</div>\r\n            <div class=\"card-body\">\r\n                <div class=\"text-uppercase text-muted fs-12\">Default pagination</div>\r\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"defaultPagination\"></ngb-pagination>\r\n                <div class=\"text-uppercase text-muted fs-12\">directionLinks = false</div>\r\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"defaultPagination\" [directionLinks]=\"false\"></ngb-pagination>\r\n                <div class=\"text-uppercase text-muted fs-12\">boundaryLinks = true</div>\r\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"defaultPagination\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                <div class=\"alert alert-info\">\r\n                    <b>Current page: </b>{{defaultPagination}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mt-3\">\r\n            <div class=\"card-header\">Advanced Pagination</div>\r\n            <div class=\"card-body\">\r\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = false</div>\r\n                <ngb-pagination [collectionSize]=\"120\" [(page)]=\"advancedPagination\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = true</div>\r\n                <ngb-pagination [collectionSize]=\"120\" [(page)]=\"advancedPagination\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = true, ellipses = false</div>\r\n                <ngb-pagination [collectionSize]=\"120\" [(page)]=\"advancedPagination\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n                <div class=\"alert alert-info\">\r\n                    <b>Current page: </b>{{advancedPagination}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mt-3\">\r\n            <div class=\"card-header\">Pagination size</div>\r\n            <div class=\"card-body\">\r\n                <ngb-pagination [collectionSize]=\"50\" [(page)]=\"paginationSize\" size=\"lg\"></ngb-pagination>\r\n                <ngb-pagination [collectionSize]=\"50\" [(page)]=\"paginationSize\"></ngb-pagination>\r\n                <ngb-pagination [collectionSize]=\"50\" [(page)]=\"paginationSize\" size=\"sm\"></ngb-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mt-3\">\r\n            <div class=\"card-header\">Disabled pagination</div>\r\n            <div class=\"card-body\">\r\n                <p>Pagination control can be disabled:</p>\r\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"disabledPagination\" [disabled]='isDisabled'></ngb-pagination>\r\n                <hr>\r\n                <button class=\"btn btn-outline-primary\" (click)=\"toggleDisabled()\">\r\n                    Toggle disabled\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/pagination/pagination.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pagination/pagination.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/components/pagination/pagination.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pagination/pagination.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
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

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.defaultPagination = 1;
        this.advancedPagination = 1;
        this.paginationSize = 1;
        this.disabledPagination = 1;
        this.isDisabled = true;
    }
    PaginationComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/layout/bs-component/components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/layout/bs-component/components/pagination/pagination.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/pop-over/pop-over.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pop-over/pop-over.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n    <div class=\"card-header\">\r\n        Pop over\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\"\r\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">\r\n          Popover on top\r\n        </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"right\"\r\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\r\n          Popover on right\r\n        </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"bottom\"\r\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\r\n          Popover on bottom\r\n        </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"left\"\r\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">\r\n          Popover on left\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/pop-over/pop-over.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pop-over/pop-over.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/components/pop-over/pop-over.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/pop-over/pop-over.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PopOverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopOverComponent", function() { return PopOverComponent; });
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

var PopOverComponent = /** @class */ (function () {
    function PopOverComponent() {
    }
    PopOverComponent.prototype.ngOnInit = function () {
    };
    PopOverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pop-over',
            template: __webpack_require__(/*! ./pop-over.component.html */ "./src/app/layout/bs-component/components/pop-over/pop-over.component.html"),
            styles: [__webpack_require__(/*! ./pop-over.component.scss */ "./src/app/layout/bs-component/components/pop-over/pop-over.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopOverComponent);
    return PopOverComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/progressbar/progressbar.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/progressbar/progressbar.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n    <div class=\"card-header\">Progressbar</div>\r\n    <div class=\"card-body\">\r\n        <p><ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar></p>\r\n        <p><ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\r\n        <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar></p>\r\n        <p><ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar></p>\r\n        <p><ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar></p>\r\n        <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar></p>\r\n        <p class=\"mb-0\"><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar></p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/progressbar/progressbar.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/progressbar/progressbar.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/components/progressbar/progressbar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/progressbar/progressbar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProgressbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
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

var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent() {
    }
    ProgressbarComponent.prototype.ngOnInit = function () {
    };
    ProgressbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progressbar',
            template: __webpack_require__(/*! ./progressbar.component.html */ "./src/app/layout/bs-component/components/progressbar/progressbar.component.html"),
            styles: [__webpack_require__(/*! ./progressbar.component.scss */ "./src/app/layout/bs-component/components/progressbar/progressbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/rating/rating.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/rating/rating.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        Rating (<strong>Basic demo</strong>)\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\r\n      <hr>\r\n      <pre>Rate: <b>{{currentRate}}</b></pre>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/rating/rating.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/rating/rating.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/components/rating/rating.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/rating/rating.component.ts ***!
  \***************************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
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

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.currentRate = 8;
    }
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/layout/bs-component/components/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/layout/bs-component/components/rating/rating.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/tabs/tabs.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tabs/tabs.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Tabset</div>\r\n            <div class=\"card-body\">\r\n                <ngb-tabset>\r\n                    <ngb-tab title=\"Simple\">\r\n                        <ng-template ngbTabContent>\r\n                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab>\r\n                        <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                        <ng-template ngbTabContent>\r\n                            <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                            craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                            cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                            yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                            shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                            sint qui sapiente accusamus tattooed echo park.</p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                        <ng-template ngbTabContent>\r\n                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                </ngb-tabset>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Pills</div>\r\n            <div class=\"card-body\">\r\n                <ngb-tabset type=\"pills\">\r\n                    <ngb-tab title=\"Simple\">\r\n                        <ng-template ngbTabContent>\r\n                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab>\r\n                        <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n                        <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\r\n                            <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\r\n                            craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\r\n                            cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\r\n                            yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\r\n                            shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\r\n                            sint qui sapiente accusamus tattooed echo park.</p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                        <ng-template ngbTabContent>\r\n                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n                            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n                            dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n                            iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                </ngb-tabset>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/tabs/tabs.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tabs/tabs.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/components/tabs/tabs.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tabs/tabs.component.ts ***!
  \***********************************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
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

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/layout/bs-component/components/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/layout/bs-component/components/tabs/tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/timepicker/timepicker.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/timepicker/timepicker.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Timepicker (<b>Default</b>)</div>\r\n            <div class=\"card-body\">\r\n                <ngb-timepicker [(ngModel)]=\"defaultTime\"></ngb-timepicker>\r\n                <div class=\"alert alert-info\">\r\n                    <b>Selected time: </b>{{defaultTime | json}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Timepicker (<b>Default</b>)</div>\r\n            <div class=\"card-body\">\r\n                <ngb-timepicker [(ngModel)]=\"meridianTime\" [meridian]=\"meridian\"></ngb-timepicker>\r\n                <button class=\"btn btn-sm btn-outline-{{meridian ? 'success' : 'danger'}}\" (click)=\"toggleMeridian()\">\r\n                    Meridian - {{meridian ? \"ON\" : \"OFF\"}}\r\n                </button>\r\n                <div class=\"alert alert-info mt-3 mb-0\">\r\n                    <b>Selected time: </b>{{meridianTime | json}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Timepicker (<b>Seconds</b>)</div>\r\n            <div class=\"card-body\">\r\n                <ngb-timepicker [(ngModel)]=\"SecondsTime\" [seconds]=\"seconds\"></ngb-timepicker>\r\n                <button class=\"btn btn-sm btn-outline-{{seconds ? 'success' : 'danger'}}\" (click)=\"toggleSeconds()\">\r\n                    Seconds - {{seconds ? \"ON\" : \"OFF\"}}\r\n                </button>\r\n                <div class=\"alert alert-info mt-3 mb-0\">\r\n                    <b>Selected time: </b>{{SecondsTime | json}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-6 mt-3\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">Timepicker (<b>Custom Step</b>)</div>\r\n            <div class=\"card-body\">\r\n                <ngb-timepicker [(ngModel)]=\"customTime\" [seconds]=\"true\"\r\n                [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                        <label for=\"changeHourStep\">Hour Step</label>\r\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"hourStep\" />\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <label for=\"changeMinuteStep\">Minute Step</label>\r\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"minuteStep\" />\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <label for=\"changeSecondStep\">Second Step</label>\r\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"secondStep\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"alert alert-info mt-3 mb-0\">\r\n                    <b>Selected time: </b>{{customTime | json}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/timepicker/timepicker.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/timepicker/timepicker.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/components/timepicker/timepicker.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/timepicker/timepicker.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TimepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return TimepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent() {
        this.defaultTime = { hour: 13, minute: 30 };
        this.meridianTime = { hour: 13, minute: 30 };
        this.meridian = true;
        this.SecondsTime = { hour: 13, minute: 30, second: 30 };
        this.seconds = true;
        this.customTime = { hour: 13, minute: 30, second: 0 };
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
    }
    TimepickerComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    TimepickerComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    TimepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timepicker',
            template: __webpack_require__(/*! ./timepicker.component.html */ "./src/app/layout/bs-component/components/timepicker/timepicker.component.html"),
            styles: [__webpack_require__(/*! ./timepicker.component.scss */ "./src/app/layout/bs-component/components/timepicker/timepicker.component.scss")]
        })
    ], TimepickerComponent);
    return TimepickerComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-component/components/tooltip/tooltip.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tooltip/tooltip.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        Tooltip\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\n          Tooltip on top\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\n          Tooltip on right\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\n          Tooltip on bottom\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\n          Tooltip on left\r\n        </button>\r\n        <ng-template #StaticTipContent><em>Tooltip</em> <u>with</u> <b>HTML</b></ng-template>\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-html=\"true\" [ngbTooltip]=\"StaticTipContent\">\r\n          Tooltip with HTML\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/bs-component/components/tooltip/tooltip.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tooltip/tooltip.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-component/components/tooltip/tooltip.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/bs-component/components/tooltip/tooltip.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
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

var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./src/app/layout/bs-component/components/tooltip/tooltip.component.html"),
            styles: [__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/layout/bs-component/components/tooltip/tooltip.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ })

}]);
//# sourceMappingURL=bs-component-bs-component-module.js.map