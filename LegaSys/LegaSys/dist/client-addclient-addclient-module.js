(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-addclient-addclient-module"],{

/***/ "./src/app/layout/client/addclient/addclient-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/client/addclient/addclient-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddclientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddclientRoutingModule", function() { return AddclientRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addclient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addclient.component */ "./src/app/layout/client/addclient/addclient.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _addclient_component__WEBPACK_IMPORTED_MODULE_2__["AddclientComponent"]
    }
];
var AddclientRoutingModule = /** @class */ (function () {
    function AddclientRoutingModule() {
    }
    AddclientRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AddclientRoutingModule);
    return AddclientRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/client/addclient/addclient.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/client/addclient/addclient.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-page-header [heading]=\"'Add New Client '\" [icon]=\"'fa fa-plus'\"></app-page-header>\r\n</div>\r\n<!-- <ngb-alert style=\"width:40%;\" *ngIf=\"Message\" type=\"success\" (close)=\"Message = null\">{{ successMessage }}</ngb-alert> -->\r\n<div class=\"card mb-3\">\r\n    <div class=\"card-header bg-info\">\r\n        <mat-label class=\"labeltext text-white\">Client Info </mat-label>\r\n    </div>\r\n    <form [formGroup]=\"clientForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n        <div class=\"w-100 table-active py-3 px-2 float-left\">\r\n            <div class=\"w-100 float-left\">\r\n                <!-- <form role=\"form\"> -->\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Client Name\" formControlName=\"ClientName\" name=\"ClientName\" id=\"ClientName\">\r\n                        <mat-error *ngIf=\"clientForm.controls['ClientName'].invalid\">{{GetClientNameErrorMessage()}}</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Address\" formControlName=\"Address\" name=\"Address\" id=\"CoClient\">\r\n                        <mat-error *ngIf=\"clientForm.controls['Address'].invalid\">Client Address Can Not Be Empty</mat-error>\r\n                        <!-- <textarea matInput placeholder=\"Address\" formControlName=\"Address\" name=\"Address\" id=\"Address\"></textarea> -->\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input [readonly]=\"readOnly\" type=\"text\" matInput formControlName=\"Country\" [matAutocomplete]=\"auto\"\r\n                            placeholder=\"Country\">\r\n                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" style=\"max-height: 200px !important\">\r\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\" style=\"max-height: 200px !important\">\r\n                                {{option}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                        <mat-error *ngIf=\"clientForm.controls['Country'].invalid\">Country can not be Empty</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n\r\n            </div>\r\n            <div class=\"w-100 float-left\">\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Primary Email\" formControlName=\"EmailID\" name=\"EmailID\" id=\"EmailID\">\r\n                        <mat-error *ngIf=\"clientForm.controls['EmailID'].invalid\">{{GetEmailErrorMessage()}}</mat-error>\r\n\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Secondary Email\" formControlName=\"EmailID2\" name=\"EmailID2\" id=\"EmailID2\">\r\n                        <mat-error *ngIf=\"clientForm.controls['EmailID2'].invalid\">Enter Valid Email ID</mat-error>\r\n\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Other Email\" formControlName=\"EmailID3\" name=\"EmailID3\" id=\"EmailID3\">\r\n                        <mat-error *ngIf=\"clientForm.controls['EmailID3'].invalid\">Enter Valid Email ID</mat-error>\r\n\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"w-100 float-left\">\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Primary Co Client\" formControlName=\"CoClient\" name=\"CoClient\" id=\"CoClient\">\r\n                        <mat-error *ngIf=\"clientForm.controls['CoClient'].invalid\">{{GetPrimaryCoClientErrorMessage()}}</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Secondary Co Client\" formControlName=\"CoClient2\" name=\"CoClient2\"\r\n                            id=\"CoClient2\">\r\n                        <mat-error *ngIf=\"clientForm.controls['CoClient2'].invalid\">Can only contain text</mat-error>\r\n\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-12 float-left\">\r\n                    <mat-form-field class=\"w-100\">\r\n                        <input matInput placeholder=\"Other Co Client\" formControlName=\"CoClient3\" name=\"CoClient3\" id=\"CoClient3\">\r\n                        <mat-error *ngIf=\"clientForm.controls['CoClient3'].invalid\">Can only contain text</mat-error>\r\n\r\n                    </mat-form-field>\r\n                </div>\r\n                <!-- </form> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"w-100 float-left table-info px-4 py-2 text-right footer-height\">\r\n            <div class=\"px-2 float-right\">\r\n                <button mat-button class=\"btn btn-info\" [routerLink]=\"['/client']\"><i class=\"fa fa-backward\"\r\n                        aria-hidden=\"true\"></i> Back</button>\r\n            </div>\r\n\r\n            <button class=\"btn btn-success\" [disabled]=\"!clientForm.valid\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\r\n                Submit</button>\r\n\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/client/addclient/addclient.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/client/addclient/addclient.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputfield {\n  width: 60%; }\n\n.labeltext {\n  margin-left: 40%; }\n"

/***/ }),

/***/ "./src/app/layout/client/addclient/addclient.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/client/addclient/addclient.component.ts ***!
  \****************************************************************/
/*! exports provided: AddclientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddclientComponent", function() { return AddclientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client-service.service */ "./src/app/layout/client/client-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_toster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/toster.service */ "./src/app/shared/services/toster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddclientComponent = /** @class */ (function () {
    function AddclientComponent(formBuilder, clientservice, router, tosterService) {
        this.formBuilder = formBuilder;
        this.clientservice = clientservice;
        this.router = router;
        this.tosterService = tosterService;
        this.Message = false;
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'; // this regex will be used to validate email pattern
        this.CountryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
    }
    AddclientComponent.prototype.GetEmailErrorMessage = function () {
        if (this.clientForm.controls['EmailID'].errors.required) {
            return "Primary Email can not be empty";
        }
        if (this.clientForm.controls['EmailID'].errors.pattern) {
            return "Please enter valid Email";
        }
    };
    AddclientComponent.prototype.GetClientNameErrorMessage = function () {
        if (this.clientForm.controls['ClientName'].errors.required) {
            return "Client name can not be empty";
        }
        if (this.clientForm.controls['ClientName'].errors.pattern) {
            return "Client name can only contails text";
        }
    };
    AddclientComponent.prototype.GetPrimaryCoClientErrorMessage = function () {
        if (this.clientForm.controls['CoClient'].errors.required) {
            return "Primary CoClient name can not be empty";
        }
        if (this.clientForm.controls['CoClient'].errors.pattern) {
            return "can only contails text";
        }
    };
    AddclientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientForm = this.formBuilder.group({
            ClientName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')]],
            Country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            CoClient: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')]],
            CoClient2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')],
            CoClient3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]+$')],
            EmailID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]],
            EmailID2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)],
            EmailID3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]
        });
        this.filteredOptions = this.clientForm.controls['Country'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._filter(value); }));
    };
    AddclientComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.CountryList.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
    };
    AddclientComponent.prototype.show = function () {
        var _this = this;
        this.Message = true;
        this.successMessage = "Client Added Succesfully";
        setTimeout(function () { return _this.Message = false; }, 1500);
    };
    AddclientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.clientservice.AddClientDetails(this.clientForm.value)
            .subscribe(function (suc) {
            if (suc > 0) {
                //   this.show();
                _this.tosterService.showSuccess("Client Added Successfully");
            }
            else {
                alert("Client could not been Added ");
            }
        }, function (err) {
            alert("Client could not been Added ");
        });
    };
    AddclientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addclient',
            template: __webpack_require__(/*! ./addclient.component.html */ "./src/app/layout/client/addclient/addclient.component.html"),
            styles: [__webpack_require__(/*! ./addclient.component.scss */ "./src/app/layout/client/addclient/addclient.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _client_service_service__WEBPACK_IMPORTED_MODULE_1__["ClientServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_toster_service__WEBPACK_IMPORTED_MODULE_5__["TosterService"]])
    ], AddclientComponent);
    return AddclientComponent;
}());



/***/ }),

/***/ "./src/app/layout/client/addclient/addclient.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/client/addclient/addclient.module.ts ***!
  \*************************************************************/
/*! exports provided: AddclientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddclientModule", function() { return AddclientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _addclient_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addclient-routing.module */ "./src/app/layout/client/addclient/addclient-routing.module.ts");
/* harmony import */ var _addclient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addclient.component */ "./src/app/layout/client/addclient/addclient.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client-service.service */ "./src/app/layout/client/client-service.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AddclientModule = /** @class */ (function () {
    function AddclientModule() {
    }
    AddclientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _addclient_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddclientRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"].forRoot()
            ],
            providers: [_client_service_service__WEBPACK_IMPORTED_MODULE_7__["ClientServiceService"]],
            declarations: [_addclient_component__WEBPACK_IMPORTED_MODULE_3__["AddclientComponent"]]
        })
    ], AddclientModule);
    return AddclientModule;
}());



/***/ })

}]);
//# sourceMappingURL=client-addclient-addclient-module.js.map