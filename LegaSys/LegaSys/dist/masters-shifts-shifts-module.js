(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-shifts-shifts-module"],{

/***/ "./src/app/layout/masters/shifts/shifts-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/masters/shifts/shifts-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ShiftsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftsRoutingModule", function() { return ShiftsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shifts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shifts.component */ "./src/app/layout/masters/shifts/shifts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _shifts_component__WEBPACK_IMPORTED_MODULE_2__["ShiftsComponent"]
    }
];
var ShiftsRoutingModule = /** @class */ (function () {
    function ShiftsRoutingModule() {
    }
    ShiftsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ShiftsRoutingModule);
    return ShiftsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/masters/shifts/shifts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/masters/shifts/shifts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css\">\r\n<app-page-header [heading]=\"'Shifts'\" [icon]=\"'fa fa-fw fa-users'\"></app-page-header>\r\n\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" [(ngModel)]=\"value\" placeholder=\"Filter\">\r\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''; applyFilter('');\">\r\n    <mat-icon>close</mat-icon>\r\n  </button>\r\n</mat-form-field>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"ShiftID\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Shift ID </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.ShiftID}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"WeekOff1\">\r\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\"> Week\r\n        Off 1 </span></th>\r\n    <td mat-cell *matCellDef=\"let element\" style=\"display:disabled\"> {{element.WeekOff1}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"WeekOff2\">\r\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\"> Week\r\n        Off 2 </span></th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.WeekOff2}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"WeekOff3\">\r\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\"> Week\r\n        Off 3 </span></th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.WeekOff3}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"StartTimeIST\">\r\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\">\r\n        Start Time IST </span></th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.StartTimeIST}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"EndTimeIST\">\r\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\"> End\r\n        Time IST </span></th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.EndTimeIST}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"IsActive\">\r\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef> </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button (click)=\"$event.stopPropagation(); status(element.ShiftID, element.IsActive)\" mat-raised-button [ngClass]=\"{'btn-info': !element.IsActive, 'btn-danger': element.IsActive}\">\r\n        <mat-icon *ngIf=\"!element.IsActive\">verified_user</mat-icon>\r\n        <mat-icon *ngIf=\"element.IsActive\">not_interested</mat-icon>\r\n        {{element.IsActive ? 'Deactivate' : 'Activate'}}\r\n      </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row.ShiftID}\"\r\n    (click)=\"highlight(row)\">\r\n  </tr>\r\n\r\n</table>\r\n<mat-paginator [pageSizeOptions]=\"[5,10,15]\" showFirstLastButtons></mat-paginator>\r\n\r\n<h2>{{formType}} Shift</h2>\r\n<form [formGroup]=\"shiftForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onSubmit(shiftForm, formDirective)\">\r\n  <div class=\"example-container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-3\">\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Select Week Off 1\" formControlName=\"weekOff1\">\r\n            <mat-option *ngFor=\"let week of weekList \" [value]=\"week\">{{week}}</mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"shiftForm.get('weekOff1').invalid\">{{getErrorMessage('weekOff1')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-xl-3\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Select Week Off 2\" formControlName=\"weekOff2\">\r\n            <mat-option *ngFor=\"let week of weekList \" [value]=\"week\">{{week}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <mat-form-field style=\"display:none\">\r\n        <mat-select placeholder=\"Select Week Off 3\" formControlName=\"weekOff3\">\r\n          <mat-option *ngFor=\"let week of weekList \" [value]=\"week\">{{week}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div class=\"col-xl-3\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Start Time IST\" formControlName=\"startTimeIST\">\r\n            <mat-option *ngFor=\"let time of timeList \" [value]=\"time\">{{time}}</mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"shiftForm.get('startTimeIST').invalid\">{{getErrorMessage('startTimeIST')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-xl-3\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"End Time IST\" formControlName=\"endTimeIST\">\r\n            <mat-option *ngFor=\"let time of timeList \" [value]=\"time\">{{time}}</mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"shiftForm.get('endTimeIST').invalid\">{{getErrorMessage('endTimeIST')}}</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"w-100 float-left table-info px-4 py-2 text-right\">\r\n      <button type=\"submit\" class=\"btn-info mat-button mr-1\" [disabled]=\"!shiftForm.valid\" mat-raised-button><i class=\"fa fa-save\"\r\n          aria-hidden=\"true\"></i><span class=\"action-btn\">{{formType}}\r\n          Shift</span></button>\r\n      <button type=\"button\" class=\"btn-danger mat-button\" (click)=\"formReset(formDirective);\"\r\n        mat-raised-button><i class=\"fa fa-times\" aria-hidden=\"true\"></i> <span class=\"action-btn\">Cancel</span></button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/layout/masters/shifts/shifts.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/masters/shifts/shifts.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.example-container {\n  height: 400px;\n  overflow: auto; }\n\n.highlight {\n  background: #bef9bb; }\n\n.table-container {\n  margin-top: 10px;\n  max-height: 300px;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/layout/masters/shifts/shifts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/masters/shifts/shifts.component.ts ***!
  \***********************************************************/
/*! exports provided: ShiftsComponent, Shift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftsComponent", function() { return ShiftsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shift", function() { return Shift; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shifts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shifts.service */ "./src/app/layout/masters/shifts/shifts.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/layout/masters/dialog/dialog.component.ts");
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






var ShiftsComponent = /** @class */ (function () {
    function ShiftsComponent(shiftsService, dialog, snackBar, titleService) {
        this.shiftsService = shiftsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.titleService = titleService;
        this.shiftForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            weekOff1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            weekOff2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            weekOff3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            startTimeIST: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            endTimeIST: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.selectedRowIndex = -1;
        this.dataSource = [];
        this.displayedColumns = ['WeekOff1', 'WeekOff2', 'StartTimeIST', 'EndTimeIST', 'IsActive'];
        this.weekList = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];
        this.timeList = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
        this.formType = "Add";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.dataSource);
        titleService.setTitle("LegaSys - Shifts");
    }
    ShiftsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ShiftsComponent.prototype.getErrorMessage = function (fieldName) {
        switch (fieldName) {
            case "weekOff1": {
                return this.shiftForm.get('weekOff1').hasError('required') ? 'Please select a Week Off.' : '';
            }
            case "startTimeIST": {
                return this.shiftForm.get('startTimeIST').hasError('required') ? 'Please select a start time.' : '';
            }
            case "endTimeIST": {
                return this.shiftForm.get('endTimeIST').hasError('required') ? 'Please select an end time.' : '';
            }
        }
    };
    ShiftsComponent.prototype.onSubmit = function (formData, formDirective) {
        var _this = this;
        var shift = new Shift();
        shift.WeekOff1 = this.shiftForm.controls['weekOff1'].value;
        shift.WeekOff2 = this.shiftForm.controls['weekOff2'].value;
        shift.WeekOff3 = this.shiftForm.controls['weekOff3'].value;
        shift.StartTimeIST = this.shiftForm.controls['startTimeIST'].value;
        shift.EndTimeIST = this.shiftForm.controls['endTimeIST'].value;
        shift.ShiftID = this.selectedRowIndex;
        var start = shift.StartTimeIST.replace(':', '');
        var end = shift.EndTimeIST.replace(':', '');
        if (+end - (+start) == 900) {
            if (this.formType == "Add") {
                this.shiftsService.createShift(shift).subscribe(function (res) {
                    if (res) {
                        _this.snackBar.open("Shift added successfully", "Ok", {
                            duration: 2000,
                        });
                        _this.ngOnInit();
                    }
                });
            }
            else {
                this.shiftsService.updateShift(shift).subscribe(function (res) {
                    if (res) {
                        _this.snackBar.open("Shift updated successfully", "Ok", {
                            duration: 2000,
                        });
                        _this.formType = "Add";
                        _this.ngOnInit();
                    }
                });
            }
            formDirective.resetForm();
            this.shiftForm.reset();
        }
        else {
            this.snackBar.open("Error: Shift must be 9 hours working", "Ok", {
                duration: 2000,
            });
        }
    };
    ShiftsComponent.prototype.ngOnInit = function () {
        this.RenderDataTable();
    };
    ShiftsComponent.prototype.status = function (id, isActive) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
            width: '325px',
            data: { status: isActive ? "Deactivate" : "Activate", confirm: true }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.changeStatus(id);
            }
        });
    };
    ShiftsComponent.prototype.changeStatus = function (id) {
        var _this = this;
        this.shiftsService.changeStatus(id).subscribe(function (res) { _this.ngOnInit(); });
    };
    ShiftsComponent.prototype.formReset = function (formDirective) {
        formDirective.resetForm();
        this.shiftForm.reset();
        this.formType = "Add";
    };
    ShiftsComponent.prototype.highlight = function (row) {
        this.selectedRowIndex = row.ShiftID;
        this.formType = "Update";
        this.shiftForm.setValue({ weekOff1: row.WeekOff1, weekOff2: row.WeekOff2, weekOff3: row.WeekOff3, startTimeIST: row.StartTimeIST, endTimeIST: row.EndTimeIST });
        //this.shiftForm.patchValue({ weekOff1: row.WeekOff1 });
    };
    ShiftsComponent.prototype.RenderDataTable = function () {
        var _this = this;
        this.shiftsService.getAllShifts()
            .subscribe(function (res) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
            _this.dataSource.data = res;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log('There was an error while retrieving data !!!' + error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ShiftsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ShiftsComponent.prototype, "sort", void 0);
    ShiftsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shifts',
            template: __webpack_require__(/*! ./shifts.component.html */ "./src/app/layout/masters/shifts/shifts.component.html"),
            styles: [__webpack_require__(/*! ./shifts.component.scss */ "./src/app/layout/masters/shifts/shifts.component.scss")]
        }),
        __metadata("design:paramtypes", [_shifts_service__WEBPACK_IMPORTED_MODULE_2__["ShiftsService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], ShiftsComponent);
    return ShiftsComponent;
}());

var Shift = /** @class */ (function () {
    function Shift() {
    }
    return Shift;
}());



/***/ }),

/***/ "./src/app/layout/masters/shifts/shifts.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/masters/shifts/shifts.module.ts ***!
  \********************************************************/
/*! exports provided: ShiftsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftsModule", function() { return ShiftsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shifts_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shifts-routing.module */ "./src/app/layout/masters/shifts/shifts-routing.module.ts");
/* harmony import */ var _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony import */ var _shifts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shifts.component */ "./src/app/layout/masters/shifts/shifts.component.ts");
/* harmony import */ var _shifts_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shifts.service */ "./src/app/layout/masters/shifts/shifts.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ShiftsModule = /** @class */ (function () {
    function ShiftsModule() {
    }
    ShiftsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _shifts_routing_module__WEBPACK_IMPORTED_MODULE_8__["ShiftsRoutingModule"],
                _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_9__["PageHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
            ],
            providers: [_shifts_service__WEBPACK_IMPORTED_MODULE_11__["ShiftsService"]],
            declarations: [_shifts_component__WEBPACK_IMPORTED_MODULE_10__["ShiftsComponent"]]
        })
    ], ShiftsModule);
    return ShiftsModule;
}());



/***/ }),

/***/ "./src/app/layout/masters/shifts/shifts.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/masters/shifts/shifts.service.ts ***!
  \*********************************************************/
/*! exports provided: ShiftsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftsService", function() { return ShiftsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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





var ShiftsService = /** @class */ (function () {
    function ShiftsService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.baseUrl = 'http://localhost:58164/shift/';
    }
    ShiftsService.prototype.getToken = function () {
        var token = this.storage.get('UserToken');
        if (token != null) {
            var bearerToken = 'Bearer ' + token.access_token;
            var newHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            newHeaders = newHeaders.append('Authorization', bearerToken);
            return newHeaders;
        }
    };
    ShiftsService.prototype.getAllShifts = function () {
        return this.http.get(this.baseUrl + "getall", { headers: this.getToken() });
    };
    ShiftsService.prototype.changeStatus = function (id) {
        return this.http.get(this.baseUrl + "changestatus/" + id, { headers: this.getToken() });
    };
    ShiftsService.prototype.createShift = function (shift) {
        return this.http.post(this.baseUrl + "create", shift, { headers: this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    ShiftsService.prototype.updateShift = function (shift) {
        return this.http.post(this.baseUrl + "update", shift, { headers: this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    ShiftsService.prototype.errorHandler = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    ShiftsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Object])
    ], ShiftsService);
    return ShiftsService;
}());



/***/ })

}]);
//# sourceMappingURL=masters-shifts-shifts-module.js.map