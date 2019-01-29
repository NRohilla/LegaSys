(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-locations-locations-module"],{

/***/ "./src/app/layout/masters/locations/locations-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/masters/locations/locations-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: LocationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsRoutingModule", function() { return LocationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _locations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locations.component */ "./src/app/layout/masters/locations/locations.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _locations_component__WEBPACK_IMPORTED_MODULE_2__["LocationsComponent"]
    }
];
var LocationsRoutingModule = /** @class */ (function () {
    function LocationsRoutingModule() {
    }
    LocationsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LocationsRoutingModule);
    return LocationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/masters/locations/locations.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/masters/locations/locations.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css\">\n<app-page-header [heading]=\"'Locations'\" [icon]=\"'fa fa-fw fa-users'\"></app-page-header>\n\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" [(ngModel)]=\"value\" placeholder=\"Filter\">\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''; applyFilter('');\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"LocationID\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Location ID </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.LocationID}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"LocationAddress\">\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\">\n        Location Address </span></th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.LocationAddress}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"IsActive\">\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef> </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button (click)=\"$event.stopPropagation(); status(element.LocationID, element.IsActive)\" mat-raised-button\n        [ngClass]=\"{'btn-info': !element.IsActive, 'btn-danger': element.IsActive}\">\n        <mat-icon *ngIf=\"!element.IsActive\">verified_user</mat-icon>\n        <mat-icon *ngIf=\"element.IsActive\">not_interested</mat-icon>\n        {{element.IsActive ? 'Deactivate' : 'Activate'}}\n      </button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row.LocationID}\"\n    (click)=\"highlight(row)\">\n  </tr>\n\n</table>\n<mat-paginator [pageSizeOptions]=\"[5,10,15]\" showFirstLastButtons></mat-paginator>\n\n<h2>{{formType}} Location</h2>\n<form [formGroup]=\"locationForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onSubmit(locationForm, formDirective)\">\n  <div class=\"example-container\">\n    <mat-form-field>\n      <input matInput formControlName=\"locationAddress\" placeholder=\"Location Address\" />\n      <!-- [(ngModel)]=\"dataSource.LocationAddress\" name=\"dataSource.LocationAddress\" -->\n      <mat-error *ngIf=\"locationForm.controls['locationAddress'].invalid  && (locationForm.controls['locationAddress'].dirty || locationForm.controls['locationAddress'].touched)\">\n        Location is required</mat-error>\n    </mat-form-field>\n\n    <div class=\"w-100 float-left table-info px-4 py-2 text-right\">\n      <button type=\"submit\" class=\"btn-info mat-button mr-1\" [disabled]=\"!locationForm.valid\" mat-raised-button><i\n          class=\"fa fa-save\" aria-hidden=\"true\"></i><span class=\"action-btn\">{{formType}}\n          Location</span></button>\n      <button type=\"button\" class=\"btn-danger mat-button\" (click)=\"formReset(formDirective);\"\n        mat-raised-button><i class=\"fa fa-times\" aria-hidden=\"true\"></i> <span class=\"action-btn\">Cancel</span></button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/layout/masters/locations/locations.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/masters/locations/locations.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.example-container {\n  height: 400px;\n  overflow: auto; }\n\n.highlight {\n  background: #bef9bb; }\n\n.table-container {\n  margin-top: 10px;\n  max-height: 300px;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/layout/masters/locations/locations.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/masters/locations/locations.component.ts ***!
  \*****************************************************************/
/*! exports provided: LocationsComponent, LocationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationModel", function() { return LocationModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _locations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locations.service */ "./src/app/layout/masters/locations/locations.service.ts");
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






var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(locationsService, dialog, snackBar, titleService) {
        this.locationsService = locationsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.titleService = titleService;
        this.locationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            locationAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)])
        });
        this.selectedRowIndex = -1;
        this.displayedColumns = ['LocationAddress', 'IsActive'];
        this.formType = "Add";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataSource);
        titleService.setTitle("LegaSys - Locations");
    }
    LocationsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    LocationsComponent.prototype.ngOnInit = function () {
        this.RenderDataTable();
    };
    LocationsComponent.prototype.onSubmit = function (formData, formDirective) {
        var _this = this;
        var location = new LocationModel();
        location.LocationAddress = this.locationForm.controls['locationAddress'].value;
        location.LocationID = this.selectedRowIndex;
        if (this.formType == "Add") {
            this.locationsService.createLocation(location).subscribe(function (res) {
                if (res) {
                    _this.snackBar.open("Location added successfully", "Ok", {
                        duration: 2000,
                    });
                    _this.ngOnInit();
                }
            });
        }
        else {
            this.locationsService.updateLocation(location).subscribe(function (res) {
                if (res) {
                    _this.snackBar.open("Location updated successfully", "Ok", {
                        duration: 2000,
                    });
                    _this.formType = "Add";
                    _this.ngOnInit();
                }
            });
        }
        formDirective.resetForm();
        this.locationForm.reset();
    };
    LocationsComponent.prototype.status = function (id, isActive) {
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
    LocationsComponent.prototype.changeStatus = function (id) {
        var _this = this;
        this.locationsService.changeStatus(id).subscribe(function (res) { _this.ngOnInit(); });
    };
    LocationsComponent.prototype.formReset = function (formDirective) {
        formDirective.resetForm();
        this.locationForm.reset();
        this.formType = "Add";
    };
    LocationsComponent.prototype.highlight = function (row) {
        this.selectedRowIndex = row.LocationID;
        this.formType = "Update";
        this.locationForm.setValue({ locationAddress: row.LocationAddress });
    };
    LocationsComponent.prototype.RenderDataTable = function () {
        var _this = this;
        this.locationsService.getAllLocations()
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
    ], LocationsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], LocationsComponent.prototype, "sort", void 0);
    LocationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.component.html */ "./src/app/layout/masters/locations/locations.component.html"),
            styles: [__webpack_require__(/*! ./locations.component.scss */ "./src/app/layout/masters/locations/locations.component.scss")]
        }),
        __metadata("design:paramtypes", [_locations_service__WEBPACK_IMPORTED_MODULE_3__["LocationsService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], LocationsComponent);
    return LocationsComponent;
}());

var LocationModel = /** @class */ (function () {
    function LocationModel() {
    }
    return LocationModel;
}());



/***/ }),

/***/ "./src/app/layout/masters/locations/locations.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/masters/locations/locations.module.ts ***!
  \**************************************************************/
/*! exports provided: LocationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsModule", function() { return LocationsModule; });
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
/* harmony import */ var _locations_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locations-routing.module */ "./src/app/layout/masters/locations/locations-routing.module.ts");
/* harmony import */ var _locations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locations.component */ "./src/app/layout/masters/locations/locations.component.ts");
/* harmony import */ var _locations_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./locations.service */ "./src/app/layout/masters/locations/locations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var LocationsModule = /** @class */ (function () {
    function LocationsModule() {
    }
    LocationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _locations_routing_module__WEBPACK_IMPORTED_MODULE_10__["LocationsRoutingModule"],
                _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_8__["PageHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
            ],
            providers: [_locations_service__WEBPACK_IMPORTED_MODULE_12__["LocationsService"]],
            declarations: [_locations_component__WEBPACK_IMPORTED_MODULE_11__["LocationsComponent"]]
        })
    ], LocationsModule);
    return LocationsModule;
}());



/***/ }),

/***/ "./src/app/layout/masters/locations/locations.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/masters/locations/locations.service.ts ***!
  \***************************************************************/
/*! exports provided: LocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return LocationsService; });
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





var LocationsService = /** @class */ (function () {
    function LocationsService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.baseUrl = 'http://localhost:58164/location/';
    }
    LocationsService.prototype.getToken = function () {
        var token = this.storage.get('UserToken');
        if (token != null) {
            var bearerToken = 'Bearer ' + token.access_token;
            var newHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            newHeaders = newHeaders.append('Authorization', bearerToken);
            return newHeaders;
        }
    };
    LocationsService.prototype.getAllLocations = function () {
        return this.http.get(this.baseUrl + "getall", { headers: this.getToken() });
    };
    LocationsService.prototype.changeStatus = function (id) {
        return this.http.get(this.baseUrl + "changestatus/" + id, { headers: this.getToken() });
    };
    LocationsService.prototype.createLocation = function (location) {
        return this.http.post(this.baseUrl + "create", location, { headers: this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    LocationsService.prototype.updateLocation = function (location) {
        return this.http.post(this.baseUrl + "update", location, { headers: this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    LocationsService.prototype.errorHandler = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    LocationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Object])
    ], LocationsService);
    return LocationsService;
}());



/***/ })

}]);
//# sourceMappingURL=masters-locations-locations-module.js.map