(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-leavetype-leavetype-module"],{

/***/ "./src/app/layout/masters/leavetype/leavetype-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/masters/leavetype/leavetype-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: LeavetypeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavetypeRoutingModule", function() { return LeavetypeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _leavetype_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leavetype.component */ "./src/app/layout/masters/leavetype/leavetype.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _leavetype_component__WEBPACK_IMPORTED_MODULE_2__["LeavetypeComponent"]
    }
];
var LeavetypeRoutingModule = /** @class */ (function () {
    function LeavetypeRoutingModule() {
    }
    LeavetypeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LeavetypeRoutingModule);
    return LeavetypeRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/masters/leavetype/leavetype.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/masters/leavetype/leavetype.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css\">\n<app-page-header [heading]=\"'Leaves'\" [icon]=\"'fa fa-fw fa-users'\"></app-page-header>\n\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" [(ngModel)]=\"value\" placeholder=\"Filter\">\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''; applyFilter('');\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"LeaveTypeID\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> LeaveType ID </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.LeaveTypeID}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"TypeName\">\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\">\n        Type Name </span></th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.TypeName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"IsActive\">\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef> </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button (click)=\"$event.stopPropagation(); status(element.LeaveTypeID, element.IsActive)\" mat-raised-button\n        [ngClass]=\"{'btn-info': !element.IsActive, 'btn-danger': element.IsActive}\">\n        <mat-icon *ngIf=\"!element.IsActive\">verified_user</mat-icon>\n        <mat-icon *ngIf=\"element.IsActive\">not_interested</mat-icon>\n        {{element.IsActive ? 'Deactivate' : 'Activate'}}\n      </button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row.LeaveTypeID}\"\n    (click)=\"highlight(row)\">\n  </tr>\n\n</table>\n<mat-paginator [pageSizeOptions]=\"[5,10,15]\" showFirstLastButtons></mat-paginator>\n\n<h2>{{formType}} Leave</h2>\n<form [formGroup]=\"leavetypeForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onSubmit(formDirective)\">\n  <div class=\"example-container\">\n    <mat-form-field>\n      <input matInput formControlName=\"typeName\" placeholder=\"Leave Type Name\" />\n      <!-- [(ngModel)]=\"dataSource.LocationAddress\" name=\"dataSource.LocationAddress\" -->\n      <mat-error *ngIf=\"leavetypeForm.controls['typeName'].invalid  && (leavetypeForm.controls['typeName'].dirty || leavetypeForm.controls['typeName'].touched)\">\n        Leave type name is required</mat-error>\n    </mat-form-field>\n\n    <div class=\"w-100 float-left table-info px-4 py-2 text-right\">\n      <button type=\"submit\" class=\"btn-info mat-button mr-1\" [disabled]=\"!leavetypeForm.valid\" mat-raised-button><i class=\"fa fa-save\"\n          aria-hidden=\"true\"></i><span class=\"action-btn\">{{formType}}\n          Leave Type</span></button>\n      <button type=\"button\" class=\"btn-danger mat-button\" (click)=\"formReset(formDirective);\"\n        mat-raised-button><i class=\"fa fa-times\" aria-hidden=\"true\"></i> <span class=\"action-btn\">Cancel</span></button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/layout/masters/leavetype/leavetype.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/masters/leavetype/leavetype.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.example-container {\n  height: 400px;\n  overflow: auto; }\n\n.highlight {\n  background: #bef9bb; }\n\n.table-container {\n  margin-top: 10px;\n  max-height: 300px;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/layout/masters/leavetype/leavetype.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/masters/leavetype/leavetype.component.ts ***!
  \*****************************************************************/
/*! exports provided: LeavetypeComponent, LeavetypeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavetypeComponent", function() { return LeavetypeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavetypeModel", function() { return LeavetypeModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _leavetype_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leavetype.service */ "./src/app/layout/masters/leavetype/leavetype.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/layout/masters/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LeavetypeComponent = /** @class */ (function () {
    function LeavetypeComponent(leavetypeService, dialog, snackBar, titleService) {
        this.leavetypeService = leavetypeService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.titleService = titleService;
        this.leavetypeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            typeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])
        });
        this.selectedRowIndex = -1;
        this.displayedColumns = ['TypeName', 'IsActive'];
        this.formType = "Add";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataSource);
        titleService.setTitle("LegaSys - Leave Types");
    }
    LeavetypeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    LeavetypeComponent.prototype.ngOnInit = function () {
        this.RenderDataTable();
    };
    LeavetypeComponent.prototype.onSubmit = function (formDirective) {
        var _this = this;
        var leavetype = new LeavetypeModel();
        leavetype.TypeName = this.leavetypeForm.controls['typeName'].value;
        leavetype.LeaveTypeID = this.selectedRowIndex;
        if (this.formType == "Add") {
            this.leavetypeService.createLeavetype(leavetype).subscribe(function (res) {
                if (res) {
                    _this.snackBar.open("Leave type added successfully", "Ok", {
                        duration: 2000,
                    });
                    _this.ngOnInit();
                }
            });
        }
        else {
            this.leavetypeService.updateLeavetype(leavetype).subscribe(function (res) {
                if (res) {
                    _this.snackBar.open("Leave type updated successfully", "Ok", {
                        duration: 2000,
                    });
                    _this.formType = "Add";
                    _this.ngOnInit();
                }
            });
        }
        formDirective.resetForm();
        this.leavetypeForm.reset();
    };
    LeavetypeComponent.prototype.status = function (id, isActive) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
            width: '325px',
            data: { status: isActive ? "Deactivate" : "Activate", confirm: true }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.changeStatus(id);
            }
        });
    };
    LeavetypeComponent.prototype.changeStatus = function (id) {
        var _this = this;
        this.leavetypeService.changeStatus(id).subscribe(function (res) { _this.ngOnInit(); });
    };
    LeavetypeComponent.prototype.formReset = function (formDirective) {
        formDirective.resetForm();
        this.leavetypeForm.reset();
        this.formType = "Add";
    };
    LeavetypeComponent.prototype.highlight = function (row) {
        this.selectedRowIndex = row.LeaveTypeID;
        this.formType = "Update";
        this.leavetypeForm.setValue({ typeName: row.TypeName });
    };
    LeavetypeComponent.prototype.RenderDataTable = function () {
        var _this = this;
        this.leavetypeService.getAllLeavetype()
            .subscribe(function (res) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
            _this.dataSource.data = res;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log('There was an error while retrieving data !!!' + error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], LeavetypeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], LeavetypeComponent.prototype, "sort", void 0);
    LeavetypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leavetype',
            template: __webpack_require__(/*! ./leavetype.component.html */ "./src/app/layout/masters/leavetype/leavetype.component.html"),
            styles: [__webpack_require__(/*! ./leavetype.component.scss */ "./src/app/layout/masters/leavetype/leavetype.component.scss")]
        }),
        __metadata("design:paramtypes", [_leavetype_service__WEBPACK_IMPORTED_MODULE_3__["LeavetypeService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], LeavetypeComponent);
    return LeavetypeComponent;
}());

var LeavetypeModel = /** @class */ (function () {
    function LeavetypeModel() {
    }
    return LeavetypeModel;
}());



/***/ }),

/***/ "./src/app/layout/masters/leavetype/leavetype.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/masters/leavetype/leavetype.module.ts ***!
  \**************************************************************/
/*! exports provided: LeavetypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavetypeModule", function() { return LeavetypeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/modules/page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _leavetype_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leavetype-routing.module */ "./src/app/layout/masters/leavetype/leavetype-routing.module.ts");
/* harmony import */ var _leavetype_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./leavetype.service */ "./src/app/layout/masters/leavetype/leavetype.service.ts");
/* harmony import */ var _leavetype_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./leavetype.component */ "./src/app/layout/masters/leavetype/leavetype.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var LeavetypeModule = /** @class */ (function () {
    function LeavetypeModule() {
    }
    LeavetypeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _leavetype_routing_module__WEBPACK_IMPORTED_MODULE_10__["LeavetypeRoutingModule"],
                _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_8__["PageHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
            ],
            providers: [_leavetype_service__WEBPACK_IMPORTED_MODULE_11__["LeavetypeService"]],
            declarations: [_leavetype_component__WEBPACK_IMPORTED_MODULE_12__["LeavetypeComponent"]]
        })
    ], LeavetypeModule);
    return LeavetypeModule;
}());



/***/ }),

/***/ "./src/app/layout/masters/leavetype/leavetype.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/masters/leavetype/leavetype.service.ts ***!
  \***************************************************************/
/*! exports provided: LeavetypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavetypeService", function() { return LeavetypeService; });
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





var LeavetypeService = /** @class */ (function () {
    function LeavetypeService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.baseUrl = 'http://localhost:58164/leavetype/';
    }
    LeavetypeService.prototype.getToken = function () {
        var token = this.storage.get('UserToken');
        if (token != null) {
            var bearerToken = 'Bearer ' + token.access_token;
            var newHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            newHeaders = newHeaders.append('Authorization', bearerToken);
            return newHeaders;
        }
    };
    LeavetypeService.prototype.getAllLeavetype = function () {
        return this.http.get(this.baseUrl + "getall", { headers: this.getToken() });
    };
    LeavetypeService.prototype.getAllActiveLeavetype = function () {
        return this.http.get(this.baseUrl + "getallactive", { headers: this.getToken() });
    };
    LeavetypeService.prototype.changeStatus = function (id) {
        return this.http.get(this.baseUrl + "changestatus/" + id, { headers: this.getToken() });
    };
    LeavetypeService.prototype.createLeavetype = function (leavetype) {
        return this.http.post(this.baseUrl + "create", leavetype, { headers: this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    LeavetypeService.prototype.updateLeavetype = function (leavetype) {
        return this.http.post(this.baseUrl + "update", leavetype, { headers: this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    LeavetypeService.prototype.errorHandler = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    LeavetypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Object])
    ], LeavetypeService);
    return LeavetypeService;
}());



/***/ })

}]);
//# sourceMappingURL=masters-leavetype-leavetype-module.js.map