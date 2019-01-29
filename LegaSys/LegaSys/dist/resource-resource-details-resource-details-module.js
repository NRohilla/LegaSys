(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource-resource-details-resource-details-module"],{

/***/ "./src/app/layout/resource/components/resource.backgrounddetails.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.backgrounddetails.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: white\">\r\n    <label>Experienced </label>\r\n    <mat-form-field style=\"margin-left: 100px\" >\r\n    <mat-select [(ngModel)]=\"selected\" (ngModelChange)=\"onChange($event)\" [disabled]='isExp'>\r\n      <mat-option value=\"false\">No</mat-option>\r\n      <mat-option value=\"true\">Yes</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div style=\"background-color: white\">\r\n    <label>Current Experience: {{currentExp}} </label>\r\n    <br><br>\r\n</div>\r\n<div style=\"background-color: white\">\r\n  <label>Total Experience </label>\r\n  <br><br>\r\n</div>\r\n \r\n <div *ngIf=\"showExp\">\r\n\r\n<mat-table [dataSource]=\"backgroundDetails\" matSort class=\"example-container mat-elevation-z8 resource-grid\">\r\n\r\n    <ng-container matColumnDef=\"CompanyName\">\r\n        <mat-header-cell  mat-header-cell *matHeaderCellDef mat-sort-header> Company Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.CompanyName}} </mat-cell>>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Designation\">\r\n        <mat-header-cell  mat-header-cell *matHeaderCellDef mat-sort-header>Designation </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.Designation}} </mat-cell>>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"JoiningDate\">\r\n        <mat-header-cell  mat-header-cell *matHeaderCellDef mat-sort-header>Joining Date </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.JoiningDate| date}} </mat-cell>>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"LeavingDate\">\r\n        <mat-header-cell  mat-header-cell *matHeaderCellDef mat-sort-header>Leaving Date </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.LeavingDate| date}} </mat-cell>>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Duration\">\r\n        <mat-header-cell  mat-header-cell *matHeaderCellDef mat-sort-header>Duration </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{calcExperience(element.JoiningDate, element.LeavingDate)}}  </mat-cell>>\r\n    </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    <!-- <mat-footer-row *matFooterRowDef>\r\n       \r\n    </mat-footer-row > -->\r\n\r\n  </mat-table>\r\n\r\n\r\n\r\n\r\n<mat-accordion>\r\n    <mat-expansion-panel >\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title style=\"font-size: smaller;color: steelblue\">\r\n         Click to add item\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <!-- Type your name and age -->\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n  \r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Company Name\" [(ngModel)]=\"value1\">\r\n      </mat-form-field>\r\n  \r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Designation\" [(ngModel)]=\"value2\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n          <input matInput placeholder=\"JoiningDate\" type=\"date\" [(ngModel)]=\"value3\">\r\n        </mat-form-field>\r\n    \r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Leaving Date\" type=\"date\" [(ngModel)]=\"value4\">\r\n        </mat-form-field>\r\n        <button class=\"btn btn-info\" (click)=\"addExperience()\">Add Experience</button>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n  \r\n\r\n</div>\r\n <!-- <label>Experience in VE</label>\r\n  <div class=\"row\">\r\n      \r\n    <input type=\"text\" placeholder=\"Company Name\" class=\"form-control col-md-3\"/>\r\n    <input type=\"text\" placeholder=\"Designation\" class=\"form-control col-md-3\"/>\r\n    <input type=\"date\"  class=\"form-control col-md-3\"/>\r\n    <input type=\"date\"  class=\"form-control col-md-3\"/>\r\n  </div> -->\r\n\r\n  <div style=\" background: #bee5eb; padding: 10px;\" >\r\n      <!-- <div *ngIf=\"isDisabled\" class=\"float-right\"> -->\r\n          <button type=\"button\" mat-button class=\"btn btn-info\" (click)=\"edit()\"  ><i class=\"fa fa-pencil-square-o\"\r\n                  ></i> Edit</button>\r\n      <!-- </div> -->\r\n      <div *ngIf=\"!disable\" class=\"float-right ml-2\">\r\n          <button mat-button class=\"btn btn-success\"  (click)=\"onSubmit()\"><i\r\n                  class=\"fa fa-save\" aria-hidden=\"true\"></i> Update</button>\r\n      </div>\r\n      <div *ngIf=\"!disable\" class=\"float-right ml-2\">\r\n          <button mat-button class=\"btn btn-secondary\" (click)=\"Cancel()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n              Cancel</button>\r\n      </div>\r\n</div>\r\n\r\n \r\n\r\n"

/***/ }),

/***/ "./src/app/layout/resource/components/resource.backgrounddetails.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.backgrounddetails.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/resource/components/resource.backgrounddetails.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.backgrounddetails.component.ts ***!
  \************************************************************************************/
/*! exports provided: ResourceBackgrounddetailsComponent, UserBackgrnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceBackgrounddetailsComponent", function() { return ResourceBackgrounddetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBackgrnd", function() { return UserBackgrnd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource.service */ "./src/app/layout/resource/resource.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourceBackgrounddetailsComponent = /** @class */ (function () {
    function ResourceBackgrounddetailsComponent(dataService) {
        this.dataService = dataService;
        this.value1 = '';
        this.value2 = '';
        this.value3 = null;
        this.value4 = null;
        this.value5 = '';
        this.showExp = false;
        this.selected = 'false';
        this.isExp = true;
        this.exp = [];
        this.displayedColumns = ['CompanyName', 'Designation', 'JoiningDate', 'LeavingDate', 'Duration'];
    }
    ResourceBackgrounddetailsComponent.prototype.edit = function () {
        this.isExp = false;
    };
    ResourceBackgrounddetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.dataService.getResourceById(+localStorage.getItem('element')).subscribe(function (res) {
            debugger;
            _this.dataSource = res;
            console.log(_this.dataSource);
            //this.currentExp=this.dataSource.DateOfJoining-Date.now()
            _this.currentExp = _this.calcExperience(localStorage.getItem("DateOfJoining"), new Date());
            if (_this.dataSource.IsExperienced) {
                _this.selected = 'true';
                _this.dataService.getBackGroundDetails(+localStorage.getItem('element')).subscribe(function (res) {
                    debugger;
                    _this.showExp = true;
                    _this.backgroundDetails = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
                    _this.backgroundDetails = res;
                    var startDate = _this.backgroundDetails[0].JoiningDate;
                    var endDate = _this.backgroundDetails[0].LeavingDate;
                    var exp = _this.calcExperience(startDate, endDate);
                    console.log(exp);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.selected = 'false';
            }
        }, function (err) {
            console.log(err);
        });
        // this.dataService.getBackGroundDetails(+localStorage.getItem('element')).subscribe(
        //   res => {     
        //     debugger; 
        // this.dataSource=new MatTableDataSource<UserBackgrnd>();           
        // this.dataSource=res; 
        // var startDate=  this.dataSource[0].JoiningDate;
        // var endDate=this.dataSource[0].LeavingDate;
        // var exp=this.calcExperience(startDate,endDate);
        //console.log(exp);
        //     },
        //     err => {
        //       console.log(err);
        //     }
        //   );
        // }
    };
    ResourceBackgrounddetailsComponent.prototype.onChange = function ($event) {
        debugger;
        if ($event == "true") {
            this.showExp = true;
        }
        else {
            this.showExp = false;
        }
    };
    ResourceBackgrounddetailsComponent.prototype.addExperience = function () {
        this.exp.push({ CompanyName: this.value1, Designation: this.value2, JoiningDate: this.value3, LeavingDate: this.value4, Duration: this.value5 });
        //this.dataSource=new MatTableDataSource(this.exp);
    };
    ResourceBackgrounddetailsComponent.prototype.calcExperience = function (sDate, eDate) {
        var startDate = new Date(sDate);
        var endDate = new Date(eDate);
        var Year = Math.round(endDate.getFullYear() - startDate.getFullYear()) + " Years ";
        var month = Math.round(endDate.getMonth() - startDate.getMonth()) + " Months ";
        var days = Math.round(endDate.getDate() - startDate.getDate()) + " Days ";
        return Year + ' ' + month + ' ' + days;
    };
    ResourceBackgrounddetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-background',
            template: __webpack_require__(/*! ./resource.backgrounddetails.component.html */ "./src/app/layout/resource/components/resource.backgrounddetails.component.html"),
            styles: [__webpack_require__(/*! ./resource.backgrounddetails.component.scss */ "./src/app/layout/resource/components/resource.backgrounddetails.component.scss")]
        }),
        __metadata("design:paramtypes", [_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
    ], ResourceBackgrounddetailsComponent);
    return ResourceBackgrounddetailsComponent;
}());

var UserBackgrnd = /** @class */ (function () {
    function UserBackgrnd() {
    }
    return UserBackgrnd;
}());



/***/ }),

/***/ "./src/app/layout/resource/components/resource.personaldetails.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.personaldetails.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.error-hint {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/layout/resource/components/resource.personaldetails.html":
/*!**************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.personaldetails.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<div class=\"example-container\">\r\n    <form [formGroup]=\"personalDetailsForm\" *ngIf=\"resoursedetails\">\r\n\r\n        <div style=\"padding:0 15px;\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field style=\"width:350px !important\">\r\n                        <input formControlName=\"Firstname\" type=\"text\" matInput placeholder=\"First Name\" [(ngModel)]=\"resoursedetails.Firstname\"\r\n                            name=\"resoursedetails.Firstname\">\r\n                        <mat-error *ngIf=\"personalDetailsForm.controls['Firstname'].invalid  && (personalDetailsForm.controls['Firstname'].dirty || personalDetailsForm.controls['Firstname'].touched)\">First\r\n                            Name Should\r\n                            be in Alphabet.</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field style=\"width:350px !important\">\r\n                        <input matInput placeholder=\"Middle Name \" [(ngModel)]=\"resoursedetails.Middlename\" name=\"resoursedetails.Middlename\"\r\n                            formControlName=\"Middlename\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field style=\"width:350px !important\">\r\n                        <input formControlName=\"Lastname\" matInput placeholder=\"Last Name \" [(ngModel)]=\"resoursedetails.Lastname\"\r\n                            name=\"resoursedetails.Lastname\">\r\n                        <mat-error *ngIf=\"personalDetailsForm.controls['Lastname'].invalid  && (personalDetailsForm.controls['Lastname'].dirty || personalDetailsForm.controls['Lastname'].touched)\">Last\r\n                            Name Should be in Alphabet.</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n\r\n                    <mat-form-field style=\"width:350px !important\">\r\n                        <input formControlName=\"TotalExp\" type=\"number\" min=\"0\" max=\"60\" matInput min=\"0\" max=\"60\"\r\n                            placeholder=\"Total Experience\" [(ngModel)]=\"resoursedetails.TotalExp\" name=\"resoursedetails.TotalExp\">\r\n                        <mat-error *ngIf=\"personalDetailsForm.controls['TotalExp'].invalid  && (personalDetailsForm.controls['TotalExp'].dirty || personalDetailsForm.controls['TotalExp'].touched)\">Only\r\n                            Only positive numbers allowed from 0-60</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field style=\"width:350px !important\">\r\n                        <input formControlName=\"EmailId\" matInput placeholder=\"Email ID\" [(ngModel)]=\"resoursedetails.EmailId\"\r\n                            name=\"resoursedetails.EmailId\" email>\r\n                        <mat-error *ngIf=\"personalDetailsForm.controls['EmailId'].invalid  && (personalDetailsForm.controls['EmailId'].dirty || personalDetailsForm.controls['EmailId'].touched)\">\r\n                            Enter Valid Email ID</mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field style=\"width:350px !important\">\r\n                        <input matInput placeholder=\"Mobile\" formControlName=\"mobile\" [(ngModel)]=\"resoursedetails.MobileNumber\"\r\n                            name=\"resoursedetails.MobileNumber\" type=\"number\" required>\r\n                        <mat-error *ngIf=\"personalDetailsForm.controls['mobile'].invalid && (personalDetailsForm.controls['mobile'].dirty || personalDetailsForm.controls['mobile'].touched)\">\r\n                            Enter a valid Mobile Number </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field style=\"width:350px !important\">\r\n                        <mat-select placeholder=\"Shift\" [(ngModel)]=\"resoursedetails.Master_Shift_ID\" name=\"resoursedetails.Master_Shift_ID\"\r\n                            formControlName=\"Master_Shift_ID\">\r\n\r\n                            <mat-option *ngFor=\"let Shift of getAllShift\" [value]=\"Shift.ShiftID\">\r\n                                {{Shift.StartTimeIST +'-'+ Shift.EndTimeIST }}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field style=\"width:350px !important\">\r\n                        <mat-select placeholder=\"Location Address\" [(ngModel)]=\"resoursedetails.Master_Location_ID\"\r\n                            name=\"resoursedetails.Master_Location_ID\" formControlName=\"Master_Location_ID\">\r\n                            <mat-option *ngFor=\"let location of getLocation\" [value]=\"location.LocationID\">\r\n                                {{location.LocationAddress}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field style=\"width:350px !important\">\r\n                        <mat-select formControlName=\"Master_Role_ID\" (selectionChange)=\"roleChanged($event.value)\"\r\n                            placeholder=\"Role\" [(ngModel)]=\"resoursedetails.Master_Role_ID\" name=\"resoursedetails.Master_Role_ID\">\r\n                            <mat-option *ngFor=\"let Role of getAllRole\" [value]=\"Role.UserRoleID\">\r\n                                {{Role.RoleName}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <mat-form-field style=\"width:350px !important\">\r\n                        <mat-select placeholder=\"Reporting Head\" [(ngModel)]=\"resoursedetails.ReportingHead_ID\" name=\"resoursedetails.ReportingHead_ID\"\r\n                            formControlName=\"UserDetailID\">\r\n                            <mat-option *ngFor=\"let reportinghead of getReportingHead\" [value]=\"reportinghead.UserDetailID\">\r\n                                {{reportinghead.Fullname}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <mat-form-field style=\"width:910px !important\">\r\n                        <textarea matInput placeholder=\"Remarks\" [(ngModel)]=\"resoursedetails.Remarks\" name=\"resoursedetails.Remarks\"\r\n                            formControlName=\"Remarks\"></textarea>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n    <div style=\" background: #bee5eb; padding: 10px;\">\r\n        <div *ngIf=\"disable\" class=\"float-right\">\r\n            <button mat-button class=\"btn btn-info\" (click)=\" MakeFieldEditable()\"><i class=\"fa fa-pencil-square-o\"\r\n                    aria-hidden=\"true\"></i> Edit</button>\r\n        </div>\r\n        <div *ngIf=\"!disable\" class=\"float-right ml-2\">\r\n            <button mat-button class=\"btn btn-success\" [disabled]=\"personalDetailsForm.invalid\" (click)=\"onSubmit()\"><i\r\n                    class=\"fa fa-save\" aria-hidden=\"true\"></i> Update</button>\r\n        </div>\r\n        <div *ngIf=\"!disable\" class=\"float-right ml-2\">\r\n            <button mat-button class=\"btn btn-secondary\" (click)=\"Cancel()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>"

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
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource.service */ "./src/app/layout/resource/resource.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
    function ResourcePersonaldetailsComponent(snackBar, resourceService, router, formBuilder, titleService) {
        this.snackBar = snackBar;
        this.resourceService = resourceService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.titleService = titleService;
        this.disable = true;
        this.namePattern = "[A-Za-z]{1,25}";
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.totexpPattern = "^(?!0+(?:\.0+)?$)[0-5]?[0-9](?:\.\d\d?)?$";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        titleService.setTitle("LegaSys - Resource Details");
        this.personalDetailsForm = this.formBuilder.group({
            Firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.namePattern)]],
            Lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.namePattern)]],
            Middlename: ['', ''],
            EmailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.emailPattern)],
            TotalExp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.totexpPattern)]],
            Master_Role_ID: [this.getAllRole, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Master_Shift_ID: [this.getAllShift, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Master_Location_ID: [this.getLocation, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            UserDetailID: [this.getReportingHead, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Remarks: ['', ''],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.mobnumPattern)]]
        });
    }
    ResourcePersonaldetailsComponent.prototype.roleChanged = function (value) {
        var _this = this;
        this.resourceService.getReportingHead(value)
            .subscribe(function (data) {
            _this.getReportingHead = data;
        });
    };
    ResourcePersonaldetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceService.getRole().subscribe(function (suc) {
            _this.getAllRole = suc;
        }, function (err) {
            console.log(err);
        });
        this.resourceService.getShift().subscribe(function (suc) {
            _this.getAllShift = suc;
        }, function (err) {
            console.log(err);
        });
        this.resourceService.getLocation().subscribe(function (suc) {
            _this.getLocation = suc;
        }, function (err) {
            console.log(err);
        });
        this.GetId();
        this.personalDetailsForm.disable();
    };
    ResourcePersonaldetailsComponent.prototype.GetId = function () {
        var _this = this;
        this.resourceService.getResourceById(+localStorage.getItem('element')).subscribe(function (suc) {
            _this.resoursedetails = suc;
            _this.currentResourceDetailsCancel = JSON.parse(JSON.stringify(suc));
            localStorage.setItem("DateOfJoining", _this.resoursedetails.Master_Role_ID);
            _this.resourceService.getReportingHead(_this.resoursedetails.Master_Role_ID).subscribe(function (res) {
                _this.getReportingHead = res;
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    ResourcePersonaldetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.resourceService.updateResource(this.resoursedetails).subscribe(function (suc) {
            if (suc) {
                _this.resoursedetails = suc;
                _this.snackBar.open("Resource details updated successfully", "Ok", {
                    duration: 2000,
                });
            }
            _this.GetId();
            _this.MakeFieldEditable();
        }, function (err) {
            console.log(err);
        });
    };
    ResourcePersonaldetailsComponent.prototype.MakeFieldEditable = function () {
        if (this.disable) {
            this.disable = false;
            this.personalDetailsForm.enable();
        }
        else {
            this.disable = true;
            this.personalDetailsForm.disable();
        }
    };
    ResourcePersonaldetailsComponent.prototype.Cancel = function () {
        this.currentResourceDetails = this.currentResourceDetailsCancel;
        this.MakeFieldEditable();
    };
    ResourcePersonaldetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-personal',
            template: __webpack_require__(/*! ./resource.personaldetails.html */ "./src/app/layout/resource/components/resource.personaldetails.html"),
            styles: [__webpack_require__(/*! ./resource.personaldetails.component.scss */ "./src/app/layout/resource/components/resource.personaldetails.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], ResourcePersonaldetailsComponent);
    return ResourcePersonaldetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/resource/components/resource.summary.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.summary.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/layout/resource/components/resource.summary.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/resource/components/resource.summary.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<div *ngIf=\"resoursedetails\" style=\" padding: 0 15px;   overflow: hidden;\">\r\n      <div class=\"row\">\r\n            <div class=\"col-md-2 \"><strong class=\" \"> Name :</strong></div>\r\n            <div class=\"col-md-2\"> {{ resoursedetails.Firstname }} {{resoursedetails.Middlename }}\r\n                  {{resoursedetails.Lastname}}</div>\r\n            <div class=\"col-md-2 \"><strong class=\" \">TotalExp:</strong></div>\r\n            <div class=\"col-md-2\">{{resoursedetails.TotalExp}}</div>\r\n      </div><br><br>\r\n      <div class=\"row\">\r\n            <div class=\"col-md-2 \"><strong class=\" \">EmailId:</strong></div>\r\n            <div class=\"col-md-2\">{{resoursedetails.EmailId}}</div>\r\n            <div class=\"col-md-2 \"><strong class=\" \">Location Address:</strong></div>\r\n            <div class=\"col-sm-2\">{{resoursedetails.LocationAddress}}</div>\r\n      </div><br><br>\r\n      <div class=\"row\">\r\n            <div class=\"col-md-2\"><strong class=\" \">Remarks :</strong></div>\r\n            <div class=\"col-md-2\">{{resoursedetails.Remarks}}</div>\r\n            <div class=\"col-md-2 \"><strong class=\" \">Shift :</strong></div>\r\n            <div class=\"col-sm-2\">{{resoursedetails.Shift}}</div>\r\n      </div><br><br>\r\n      <div class=\"row\">\r\n            <div class=\"col-md-2\"><strong class=\" \">Reporting Head:</strong></div>\r\n            <div class=\"col-md-2\">{{resoursedetails.ReportingHead}}</div>\r\n\r\n      </div>\r\n</div>\r\n<div style=\" background: #bee5eb; padding: 26px;\"></div>"

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
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource.service */ "./src/app/layout/resource/resource.service.ts");
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
    function ResourceSummaryComponent(resourceService) {
        this.resourceService = resourceService;
    }
    ResourceSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.resourceService.getResourceById(+localStorage.getItem('element')).subscribe(function (suc) {
            _this.resoursedetails = suc;
        }, function (err) {
            console.log(err);
        });
    };
    ResourceSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-summary',
            template: __webpack_require__(/*! ./resource.summary.html */ "./src/app/layout/resource/components/resource.summary.html"),
            styles: [__webpack_require__(/*! ./resource.summary.component.scss */ "./src/app/layout/resource/components/resource.summary.component.scss")]
        }),
        __metadata("design:paramtypes", [_resource_service__WEBPACK_IMPORTED_MODULE_1__["ResourceService"]])
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

module.exports = "<app-page-header [heading]=\"'Resource Details'\" [icon]=\"'fa fa-info-circle'\"></app-page-header>\r\n<mat-tab-group>\r\n  <mat-tab label=\"Summary\">\r\n    <app-resource-summary> </app-resource-summary>\r\n  </mat-tab>\r\n  <mat-tab label=\"Personal\">\r\n    <app-resource-personal></app-resource-personal>\r\n  </mat-tab>\r\n  <mat-tab label=\"Background\">\r\n    <app-resource-background></app-resource-background>\r\n  </mat-tab>\r\n  <mat-tab label=\"Qualification\"></mat-tab>\r\n  <mat-tab label=\"Allocation\"></mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/layout/resource/resource-details/resource-details.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/resource/resource-details/resource-details.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .mat-tab-header {\n  background: #17a2b8; }\n\n/deep/ .mat-tab-label {\n  color: #ffffff;\n  opacity: 1; }\n\n/deep/ .mat-tab-body {\n  background: #eee; }\n"

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
/* harmony import */ var _components_resource_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/resource.summary */ "./src/app/layout/resource/components/resource.summary.ts");
/* harmony import */ var _components_resource_personaldetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/resource.personaldetails */ "./src/app/layout/resource/components/resource.personaldetails.ts");
/* harmony import */ var _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../shared/modules/page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_resource_backgrounddetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/resource.backgrounddetails.component */ "./src/app/layout/resource/components/resource.backgrounddetails.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { FormsModule } from '@angular/forms';




var ResourceDetailsModule = /** @class */ (function () {
    function ResourceDetailsModule() {
    }
    ResourceDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _resource_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["ResourceDetailsRoutingModule"], _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"]
            ],
            declarations: [_resource_details_component__WEBPACK_IMPORTED_MODULE_2__["ResourceDetailsComponent"], _components_resource_summary__WEBPACK_IMPORTED_MODULE_4__["ResourceSummaryComponent"], _components_resource_personaldetails__WEBPACK_IMPORTED_MODULE_5__["ResourcePersonaldetailsComponent"], _components_resource_backgrounddetails_component__WEBPACK_IMPORTED_MODULE_11__["ResourceBackgrounddetailsComponent"]]
        })
    ], ResourceDetailsModule);
    return ResourceDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=resource-resource-details-resource-details-module.js.map