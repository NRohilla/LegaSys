(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource-resource-details-resource-details-module"],{

/***/ "./src/app/layout/resource/components/resource.communicationdetails.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.communicationdetails.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"w-100 float-left\">\r\n    <div class=\"section_box pb-0 pl-0 pr-0\">\r\n        <div class=\"box_title\">Communication Details</div>\r\n        <div class=\"tab-content clearfix ml-0\">\r\n            <div class=\"w-100 float-left\">\r\n                <div class=\"tab-pane pt-3\" *ngFor=\"let _ApplicantCommunicationDetail of _ApplicantCommunicationDetails;\">\r\n                    <div class=\"row m-0\">\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                            <div class=\"field_set\">\r\n                                <div class=\"field_label\">Adress type:</div>\r\n                                <div class=\"field_info\">\r\n                                    <p>{{_ApplicantCommunicationDetail._AddressTypeMaster.Type}}</p>\r\n                                </div>\r\n                            </div>                            \r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\" *ngIf=\"!_EditCommunicationDetails\">\r\n                            <div class=\"field_set\">\r\n                                <div class=\"field_label\">Address</div>\r\n                                <div class=\"field_info\">\r\n                                    <p>{{_ApplicantCommunicationDetail.AddressLine1}} {{_ApplicantCommunicationDetail.AddressLine2}} {{_ApplicantCommunicationDetail.AddressLine3}}</p>                                    \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row m-0\" *ngIf=\"_EditCommunicationDetails\">\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                            <div class=\"field_info\">\r\n                                <mat-form-field class=\"example-full-width\">\r\n                                    <input matInput placeholder=\"Address Line 1\" value=\"{{_ApplicantCommunicationDetail.AddressLine1}}\" [(ngModel)]=\"_ApplicantCommunicationDetail.AddressLine1\" #AddressLine1>\r\n                                </mat-form-field>                                \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Address Line 2\" value=\"{{_ApplicantCommunicationDetail.AddressLine2}}\" [(ngModel)]=\"_ApplicantCommunicationDetail.AddressLine2\" #AddressLine2>\r\n                            </mat-form-field>                            \r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <input matInput placeholder=\"Address Line 3\" value=\"{{_ApplicantCommunicationDetail.AddressLine3}}\" [(ngModel)]=\"_ApplicantCommunicationDetail.AddressLine3\" #AddressLine3>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 btn-bottom pr-4 pl-4\">\r\n            <div class=\"w-100 float-left text-right\">\r\n                <input type=\"button\" value=\"&#xf0c7; Save\" (click)=\"UpdateCommunicationDetails()\" *ngIf=\"_EditCommunicationDetails\" class=\"btn btn-success\" />\r\n                <input type=\"button\" value=\"&#xf00d; Cancel\" (click)=\"EditCommunicationDetails()\" *ngIf=\"_EditCommunicationDetails\" class=\"btn btn-secondary\" />\r\n                <input type=\"button\" value=\"&#xf040; Edit\" (click)=\"EditCommunicationDetails()\" *ngIf=\"!_EditCommunicationDetails\" class=\"btn btn-info\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<h1>sandy</h1>"

/***/ }),

/***/ "./src/app/layout/resource/components/resource.communicationdetails.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.communicationdetails.ts ***!
  \*****************************************************************************/
/*! exports provided: ResourceCommunicationdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceCommunicationdetailsComponent", function() { return ResourceCommunicationdetailsComponent; });
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

var ResourceCommunicationdetailsComponent = /** @class */ (function () {
    function ResourceCommunicationdetailsComponent() {
    }
    ResourceCommunicationdetailsComponent.prototype.ngOnInit = function () {
    };
    ResourceCommunicationdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-communication',
            template: __webpack_require__(/*! ./resource.communicationdetails.html */ "./src/app/layout/resource/components/resource.communicationdetails.html")
        }),
        __metadata("design:paramtypes", [])
    ], ResourceCommunicationdetailsComponent);
    return ResourceCommunicationdetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/resource/components/resource.employmentdetails.html":
/*!****************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.employmentdetails.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"w-100 float-left\">\r\n    <div class=\"section_box pb-0 pl-0 pr-0\" *ngFor=\"let _ApplicantEmployementDetail of _ApplicantEmployementDetails;\">\r\n        <div class=\"box_title\">Employment Details</div>\r\n        <div class=\"tab-content clearfix ml-0\">\r\n            <div class=\"w-100 float-left\">\r\n                <div class=\"tab-pane pt-3\">\r\n                    <div class=\"row m-0\">\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                            <div class=\"field_set\">\r\n                                <div class=\"field_label\">Employer</div>\r\n                                <div class=\"field_info\">\r\n                                    <p *ngIf=\"!_EditEmployementDetails\">{{_ApplicantEmployementDetail.EmployerName}}</p>\r\n                                    <mat-form-field class=\"example-full-width\" *ngIf=\"_EditEmployementDetails\">\r\n                                        <input matInput placeholder=\"Employer\" value=\"{{_ApplicantEmployementDetail.EmployerName}}\" [(ngModel)]=\"_ApplicantEmployementDetail.EmployerName\" #EmployerName>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                            <div class=\"field_set\">\r\n                                <div class=\"field_label\">Source Of Income</div>\r\n                                <div class=\"field_info\">\r\n                                    <p *ngIf=\"!_EditEmployementDetails\">{{_ApplicantEmployementDetail.SourceOfIncome}}</p>\r\n                                    <mat-form-field class=\"example-full-width\" *ngIf=\"_EditEmployementDetails\">\r\n                                        <input matInput placeholder=\"Source Of Income\" value=\"{{_ApplicantEmployementDetail.SourceOfIncome}}\" [(ngModel)]=\"_ApplicantEmployementDetail.SourceOfIncome\" #SourceOfIncome>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                            <div class=\"field_set\">\r\n                                <div class=\"field_label\">Income</div>\r\n                                <div class=\"field_info\">\r\n                                    <p *ngIf=\"!_EditEmployementDetails\">{{_ApplicantEmployementDetail.Income}}</p>\r\n                                    <mat-form-field class=\"example-full-width\" *ngIf=\"_EditEmployementDetails\">\r\n                                        <input matInput placeholder=\"Income\" value=\"{{_ApplicantEmployementDetail.Income}}\" [(ngModel)]=\"_ApplicantEmployementDetail.Income\" #Income>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row m-0 btn-bottom pr-4 pl-4\">\r\n            <div class=\"w-100 float-left text-right\">\r\n                <input type=\"button\" value=\"&#xf0c7; Save\" (click)=\"UpdateEmployementDetails()\" *ngIf=\"_EditEmployementDetails\" class=\"btn btn-lg btn-success\" />\r\n                <input type=\"button\" value=\"&#xf00d; Cancel\" (click)=\"EditEmployementDetails()\" *ngIf=\"_EditEmployementDetails\" class=\"btn btn-lg btn-secondary\" />\r\n                <input type=\"button\" value=\"&#xf040; Edit\" (click)=\"EditEmployementDetails()\" *ngIf=\"!_EditEmployementDetails\" class=\"btn btn-lg btn-info\" />\r\n            </div>\r\n        </div>\r\n    </div>    \r\n</div> -->\r\n\r\n<h1>sandy</h1>"

/***/ }),

/***/ "./src/app/layout/resource/components/resource.employmentdetails.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.employmentdetails.ts ***!
  \**************************************************************************/
/*! exports provided: ResourceEmploymentdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceEmploymentdetailsComponent", function() { return ResourceEmploymentdetailsComponent; });
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

var ResourceEmploymentdetailsComponent = /** @class */ (function () {
    function ResourceEmploymentdetailsComponent() {
    }
    ResourceEmploymentdetailsComponent.prototype.ngOnInit = function () {
    };
    ResourceEmploymentdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-employment',
            template: __webpack_require__(/*! ./resource.employmentdetails.html */ "./src/app/layout/resource/components/resource.employmentdetails.html")
        }),
        __metadata("design:paramtypes", [])
    ], ResourceEmploymentdetailsComponent);
    return ResourceEmploymentdetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/resource/components/resource.personaldetails.html":
/*!**************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.personaldetails.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form >\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <mat-form-field  >\r\n                   <input matInput placeholder=\"Name \" >\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <mat-form-field >\r\n                   <input matInput placeholder=\"Address \" >\r\n            </mat-form-field>\r\n        </div>\r\n  </div>\r\n  <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <mat-form-field >\r\n                   <input matInput placeholder=\"Email 1 \"  >\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <mat-form-field >\r\n                   <input matInput placeholder=\"Email 2\" >\r\n            </mat-form-field>\r\n        </div>\r\n  </div>\r\n  <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n          <mat-form-field >\r\n                 <input matInput placeholder=\"Email 3 \"  >\r\n          </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n          <mat-form-field >\r\n                 <input matInput placeholder=\"Email 4\" >\r\n          </mat-form-field>\r\n      </div>\r\n</div> \r\n  </form>"

/***/ }),

/***/ "./src/app/layout/resource/components/resource.personaldetails.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.personaldetails.ts ***!
  \************************************************************************/
/*! exports provided: ResourcePersonaldetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcePersonaldetailsComponent", function() { return ResourcePersonaldetailsComponent; });
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

var ResourcePersonaldetailsComponent = /** @class */ (function () {
    function ResourcePersonaldetailsComponent() {
    }
    ResourcePersonaldetailsComponent.prototype.ngOnInit = function () {
    };
    ResourcePersonaldetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-personal',
            template: __webpack_require__(/*! ./resource.personaldetails.html */ "./src/app/layout/resource/components/resource.personaldetails.html")
        }),
        __metadata("design:paramtypes", [])
    ], ResourcePersonaldetailsComponent);
    return ResourcePersonaldetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/resource/components/resource.qualificationdetails.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.qualificationdetails.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row m-0\">\r\n    <div class=\"w-100 float-left\">\r\n        <div class=\"section_box pb-0 pl-0 pr-0\">\r\n            <div class=\"box_title\">Qualification Details</div>\r\n            <div class=\"tab-content clearfix ml-0\">\r\n                <div class=\"w-100 float-left\">\r\n                    <div class=\"tab-pane pt-3\" *ngFor=\"let _ApplicantQualificationDetail of _ApplicantQualificationDetails;\">\r\n                        <div class=\"row m-0\">\r\n                            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                                <div class=\"field_set\">\r\n                                    <div class=\"field_label\">Course</div>\r\n                                    <div class=\"field_info\">\r\n                                        <p *ngIf=\"!_EditCommunicationDetails\">{{_ApplicantQualificationDetail.CourseName}}</p>\r\n                                        <mat-form-field class=\"example-full-width\" *ngIf=\"_EditCommunicationDetails\">\r\n                                            <input matInput placeholder=\"Course name\" value=\"{{_ApplicantQualificationDetail.CourseName}}\" [(ngModel)]=\"_ApplicantQualificationDetail.CourseName\" #CourseName>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                                <div class=\"field_set\">\r\n                                    <div class=\"field_label\">Passing Year</div>\r\n                                    <div class=\"field_info\">\r\n                                        <p *ngIf=\"!_EditCommunicationDetails\">{{_ApplicantQualificationDetail.PassingYear}}</p>\r\n                                        <mat-form-field class=\"example-full-width\" *ngIf=\"_EditCommunicationDetails\">\r\n                                            <input matInput placeholder=\"Passing year\" value=\"{{_ApplicantQualificationDetail.PassingYear}}\" [(ngModel)]=\"_ApplicantQualificationDetail.PassingYear\" #PassingYear>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                                <div class=\"field_set\">\r\n                                    <div class=\"field_label\">University Name</div>\r\n                                    <div class=\"field_info\">\r\n                                        <p *ngIf=\"!_EditCommunicationDetails\">{{_ApplicantQualificationDetail.UniversityName}}</p>\r\n                                        <mat-form-field class=\"example-full-width\" *ngIf=\"_EditCommunicationDetails\">\r\n                                            <input matInput placeholder=\"University\" value=\"{{_ApplicantQualificationDetail.UniversityName}}\" [(ngModel)]=\"_ApplicantQualificationDetail.UniversityName\" #UniversityName>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row m-0\">\r\n                            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                                <div class=\"field_set\">\r\n                                    <div class=\"field_label\">Qualifications</div>\r\n                                    <div class=\"field_info\">\r\n                                        <p *ngIf=\"!_EditCommunicationDetails\">{{_ApplicantQualificationDetail._QualificationTypeMaster.Qualifications}}</p>\r\n                                        <mat-form-field class=\"example-full-width\" *ngIf=\"_EditCommunicationDetails\">\r\n                                            <input matInput placeholder=\"Qualification\" value=\"{{_ApplicantQualificationDetail._QualificationTypeMaster.Qualifications}}\" [(ngModel)]=\"_ApplicantQualificationDetail._QualificationTypeMaster.Qualifications\" #_QualificationTypeMaster.Qualifications>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>                    \r\n                </div>\r\n            </div>\r\n            <div class=\"row m-0 btn-bottom pr-4 pl-4\">\r\n                <div class=\"w-100 float-left text-right\">\r\n                    <input type=\"button\" value=\"&#xf0c7; Save\" (click)=\"UpdateCommunicationDetails()\" *ngIf=\"_EditCommunicationDetails\" class=\"btn btn-success\" />\r\n                    <input type=\"button\" value=\"&#xf00d; Cancel\" (click)=\"EditCommunicationDetails()\" *ngIf=\"_EditCommunicationDetails\" class=\"btn btn-secondary\" />\r\n                    <input type=\"button\" value=\"&#xf040; Edit\" (click)=\"EditCommunicationDetails()\" *ngIf=\"!_EditCommunicationDetails\" class=\"btn btn-info\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n<p>sandy</p>\r\n<h1>sandy</h1>"

/***/ }),

/***/ "./src/app/layout/resource/components/resource.qualificationdetails.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.qualificationdetails.ts ***!
  \*****************************************************************************/
/*! exports provided: ResourceQualificationdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceQualificationdetailsComponent", function() { return ResourceQualificationdetailsComponent; });
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

var ResourceQualificationdetailsComponent = /** @class */ (function () {
    function ResourceQualificationdetailsComponent() {
    }
    ResourceQualificationdetailsComponent.prototype.ngOnInit = function () {
    };
    ResourceQualificationdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-qualification',
            template: __webpack_require__(/*! ./resource.qualificationdetails.html */ "./src/app/layout/resource/components/resource.qualificationdetails.html")
        }),
        __metadata("design:paramtypes", [])
    ], ResourceQualificationdetailsComponent);
    return ResourceQualificationdetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/resource/components/resource.summary.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.summary.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-2\"><strong>First Name :</strong></div>\r\n    <div class=\"col-md-2\"> {{currentClientDetails.ClientName}}</div>\r\n    <div class=\"col-md-2\"><strong>Middle Name :</strong></div>\r\n    <div class=\"col-md-2\">{{currentClientDetails.Address}}</div>\r\n  </div><br><br>\r\n  <div class=\"row\">\r\n        <div class=\"col-md-2\"><strong>Last Name:</strong></div>\r\n        <div class=\"col-md-2\"> {{currentClientDetails.EmailID}}</div>\r\n        <div class=\"col-md-2\"><strong>TotalExp:</strong></div>\r\n        <div class=\"col-md-2\">{{currentClientDetails.EmailID2}}</div>\r\n        \r\n      </div><br><br>\r\n      <div class=\"row\">\r\n            <div class=\"col-md-2\"><strong>EmailId:</strong></div>\r\n            <div class=\"col-md-2\">{{currentClientDetails.EmailID3}}</div>\r\n            <div class=\"col-md-2\"><strong>Location Address:</strong></div>\r\n            <div class=\"col-sm-2\">{{currentClientDetails.EmailID4}}</div>\r\n      </div><br><br>\r\n      <div class=\"row\">\r\n            <div class=\"col-md-2\"><strong>Remarks :</strong></div>\r\n            <div class=\"col-md-2\">{{currentClientDetails.CoClient}}</div>\r\n            <div class=\"col-md-2\"><strong>Shift :</strong></div>\r\n            <div class=\"col-sm-2\">{{currentClientDetails.CoClient2}}</div>\r\n      </div><br><br>\r\n      <div class=\"row\">\r\n            <div class=\"col-md-2\"><strong>Reporting Head:</strong></div>\r\n            <div class=\"col-md-2\">{{currentClientDetails.CoClient3}}</div>\r\n            <!-- <div class=\"col-md-2\"><strong>CoClient 4 :</strong></div>\r\n            <div class=\"col-md-2\">{{currentClientDetails.CoClient4}}</div> -->\r\n      </div><br><br>"

/***/ }),

/***/ "./src/app/layout/resource/components/resource.summary.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.summary.ts ***!
  \****************************************************************/
/*! exports provided: ResourceSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceSummaryComponent", function() { return ResourceSummaryComponent; });
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

var ResourceSummaryComponent = /** @class */ (function () {
    function ResourceSummaryComponent() {
    }
    ResourceSummaryComponent.prototype.ngOnInit = function () {
    };
    ResourceSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-summary',
            template: __webpack_require__(/*! ./resource.summary.html */ "./src/app/layout/resource/components/resource.summary.html")
        }),
        __metadata("design:paramtypes", [])
    ], ResourceSummaryComponent);
    return ResourceSummaryComponent;
}());



/***/ }),

/***/ "./src/app/layout/resource/resource-details/resource-details-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/resource/resource-details/resource-details-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ResourceDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDetailsRoutingModule", function() { return ResourceDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resource_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource-details.component */ "./src/app/layout/resource/resource-details/resource-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _resource_details_component__WEBPACK_IMPORTED_MODULE_2__["ResourceDetailsComponent"]
    }
];
var ResourceDetailsRoutingModule = /** @class */ (function () {
    function ResourceDetailsRoutingModule() {
    }
    ResourceDetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ResourceDetailsRoutingModule);
    return ResourceDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/resource/resource-details/resource-details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/resource/resource-details/resource-details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Resource Details'\" [icon]=\"'fa fa-info-circle'\"></app-page-header>\r\n<mat-tab-group>\r\n  <mat-tab label=\"summary\"> <app-resource-summary> </app-resource-summary>></mat-tab>\r\n  <mat-tab label=\"personal\"> <app-resource-personal></app-resource-personal>> </mat-tab>\r\n  <mat-tab label=\"qualification\"><app-resource-qualification></app-resource-qualification> </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/layout/resource/resource-details/resource-details.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/resource/resource-details/resource-details.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/resource/resource-details/resource-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/resource/resource-details/resource-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResourceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDetailsComponent", function() { return ResourceDetailsComponent; });
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

var ResourceDetailsComponent = /** @class */ (function () {
    function ResourceDetailsComponent() {
    }
    ResourceDetailsComponent.prototype.ngOnInit = function () {
    };
    ResourceDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-details',
            template: __webpack_require__(/*! ./resource-details.component.html */ "./src/app/layout/resource/resource-details/resource-details.component.html"),
            styles: [__webpack_require__(/*! ./resource-details.component.scss */ "./src/app/layout/resource/resource-details/resource-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourceDetailsComponent);
    return ResourceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/resource/resource-details/resource-details.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/resource/resource-details/resource-details.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ResourceDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDetailsModule", function() { return ResourceDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resource_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource-details.component */ "./src/app/layout/resource/resource-details/resource-details.component.ts");
/* harmony import */ var _resource_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource-details-routing.module */ "./src/app/layout/resource/resource-details/resource-details-routing.module.ts");
/* harmony import */ var _components_resource_communicationdetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/resource.communicationdetails */ "./src/app/layout/resource/components/resource.communicationdetails.ts");
/* harmony import */ var _components_resource_employmentdetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/resource.employmentdetails */ "./src/app/layout/resource/components/resource.employmentdetails.ts");
/* harmony import */ var _components_resource_summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/resource.summary */ "./src/app/layout/resource/components/resource.summary.ts");
/* harmony import */ var _components_resource_personaldetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/resource.personaldetails */ "./src/app/layout/resource/components/resource.personaldetails.ts");
/* harmony import */ var _components_resource_qualificationdetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/resource.qualificationdetails */ "./src/app/layout/resource/components/resource.qualificationdetails.ts");
/* harmony import */ var _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../shared/modules/page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ResourceDetailsModule = /** @class */ (function () {
    function ResourceDetailsModule() {
    }
    ResourceDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _resource_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResourceDetailsRoutingModule"], _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_9__["PageHeaderModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"]
            ],
            declarations: [_resource_details_component__WEBPACK_IMPORTED_MODULE_2__["ResourceDetailsComponent"], _components_resource_employmentdetails__WEBPACK_IMPORTED_MODULE_5__["ResourceEmploymentdetailsComponent"], _components_resource_communicationdetails__WEBPACK_IMPORTED_MODULE_4__["ResourceCommunicationdetailsComponent"], _components_resource_summary__WEBPACK_IMPORTED_MODULE_6__["ResourceSummaryComponent"], _components_resource_personaldetails__WEBPACK_IMPORTED_MODULE_7__["ResourcePersonaldetailsComponent"], _components_resource_qualificationdetails__WEBPACK_IMPORTED_MODULE_8__["ResourceQualificationdetailsComponent"]]
        })
    ], ResourceDetailsModule);
    return ResourceDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=resource-resource-details-resource-details-module.js.map