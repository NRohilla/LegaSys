(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-roles-roles-module"],{

/***/ "./src/app/layout/masters/roles/roles-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/masters/roles/roles-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: RolesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesRoutingModule", function() { return RolesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles.component */ "./src/app/layout/masters/roles/roles.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _roles_component__WEBPACK_IMPORTED_MODULE_2__["RolesComponent"]
    }
];
var RolesRoutingModule = /** @class */ (function () {
    function RolesRoutingModule() {
    }
    RolesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RolesRoutingModule);
    return RolesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/masters/roles/roles.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/masters/roles/roles.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css\">\n<app-page-header [heading]=\"'Roles'\" [icon]=\"'fa fa-fw fa-users'\"></app-page-header>\n\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" [(ngModel)]=\"value\" placeholder=\"Filter\">\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''; applyFilter('');\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"UserRoleID\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> UserRole ID </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.UserRoleID}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"Role\">\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\"> Role\n        Name </span></th>\n    <td mat-cell *matCellDef=\"let element\" style=\"display:disabled\"> {{element.RoleName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"Description\">\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\">\n        Description </span></th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.Description}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"IsActive\">\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef> </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button (click)=\"$event.stopPropagation(); status(element.UserRoleID, element.IsActive)\" mat-raised-button\n        [ngClass]=\"{'btn-info': !element.IsActive, 'btn-danger': element.IsActive}\">\n        <mat-icon *ngIf=\"!element.IsActive\">verified_user</mat-icon>\n        <mat-icon *ngIf=\"element.IsActive\">not_interested</mat-icon>\n        {{element.IsActive ? 'Deactivate' : 'Activate'}}\n      </button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row.UserRoleID}\"\n    (click)=\"highlight(row)\">\n  </tr>\n\n</table>\n<mat-paginator [pageSizeOptions]=\"[5,10,15]\" showFirstLastButtons></mat-paginator>\n\n<h2>{{formType}} Role</h2>\n<form [formGroup]=\"roleForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onSubmit(roleForm, formDirective)\">\n  <div class=\"example-container\">\n    <div class=\"row\">\n      <div class=\"col-xl-6\">\n        <mat-form-field>\n          <input matInput formControlName=\"role\" placeholder=\"Role Name\" />\n          <mat-error *ngIf=\"roleForm.controls['role'].invalid  && (roleForm.controls['role'].dirty || roleForm.controls['role'].touched)\">\n            Role Name is required</mat-error>\n        </mat-form-field>\n\n      </div>\n      <div class=\"col-xl-6\">\n        <mat-form-field>\n          <input matInput formControlName=\"description\" placeholder=\"Description\" />\n          <mat-error *ngIf=\"roleForm.controls['description'].invalid  && (roleForm.controls['description'].dirty || roleForm.controls['description'].touched)\">\n            Maximum characters allowed 100</mat-error>\n        </mat-form-field>\n\n      </div>\n    </div>\n    <div class=\"w-100 float-left table-info px-4 py-2 text-right\">\n      <button type=\"submit\" class=\"btn-info mat-button mr-1\" [disabled]=\"!roleForm.valid\" mat-raised-button><i class=\"fa fa-save\"\n          aria-hidden=\"true\"></i><span class=\"action-btn\">{{formType}}\n          Role</span></button>\n      <button type=\"button\" class=\"btn-danger mat-button\" (click)=\"formReset(formDirective);\"\n        mat-raised-button><i class=\"fa fa-times\" aria-hidden=\"true\"></i> <span class=\"action-btn\">Cancel</span></button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/layout/masters/roles/roles.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/masters/roles/roles.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.example-container {\n  height: 400px;\n  overflow: auto; }\n\n.highlight {\n  background: #bef9bb; }\n\n.table-container {\n  margin-top: 10px;\n  max-height: 300px;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/layout/masters/roles/roles.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/masters/roles/roles.component.ts ***!
  \*********************************************************/
/*! exports provided: RolesComponent, RoleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModel", function() { return RoleModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/layout/masters/dialog/dialog.component.ts");
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles.service */ "./src/app/layout/masters/roles/roles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RolesComponent = /** @class */ (function () {
    function RolesComponent(rolesService, dialog, snackBar, titleService) {
        this.rolesService = rolesService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.titleService = titleService;
        this.roleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]),
        });
        this.selectedRowIndex = -1;
        this.dataSource = [];
        this.displayedColumns = ['Role', 'Description', 'IsActive'];
        this.formType = "Add";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataSource);
        titleService.setTitle("LegaSys - Roles");
    }
    RolesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    RolesComponent.prototype.ngOnInit = function () {
        this.RenderDataTable();
    };
    RolesComponent.prototype.RenderDataTable = function () {
        var _this = this;
        this.rolesService.getAllRoles()
            .subscribe(function (res) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
            _this.dataSource.data = res;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log('There was an error while retrieving data !!!' + error);
        });
    };
    RolesComponent.prototype.status = function (id, isActive) {
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
    RolesComponent.prototype.changeStatus = function (id) {
        var _this = this;
        this.rolesService.changeStatus(id).subscribe(function (res) { _this.ngOnInit(); });
    };
    RolesComponent.prototype.formReset = function (formData, formDirective) {
        formDirective.resetForm();
        this.roleForm.reset();
        this.formType = "Add";
    };
    RolesComponent.prototype.highlight = function (row) {
        this.selectedRowIndex = row.UserRoleID;
        this.formType = "Update";
        this.roleForm.setValue({ role: row.RoleName, description: row.Description });
    };
    RolesComponent.prototype.onSubmit = function (formDirective) {
        var _this = this;
        var role = new RoleModel();
        role.RoleName = this.roleForm.controls['role'].value;
        role.Description = this.roleForm.controls['description'].value;
        role.UserRoleID = this.selectedRowIndex;
        if (this.formType == "Add") {
            this.rolesService.createRole(role).subscribe(function (res) {
                if (res) {
                    _this.snackBar.open("Role added successfully", "Ok", {
                        duration: 2000,
                    });
                    _this.ngOnInit();
                }
            });
        }
        else {
            this.rolesService.updateRole(role).subscribe(function (res) {
                if (res) {
                    _this.snackBar.open("Role updated successfully", "Ok", {
                        duration: 2000,
                    });
                    _this.formType = "Add";
                    _this.ngOnInit();
                }
            });
        }
        formDirective.resetForm();
        this.roleForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], RolesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], RolesComponent.prototype, "sort", void 0);
    RolesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roles',
            template: __webpack_require__(/*! ./roles.component.html */ "./src/app/layout/masters/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ./roles.component.scss */ "./src/app/layout/masters/roles/roles.component.scss")]
        }),
        __metadata("design:paramtypes", [_roles_service__WEBPACK_IMPORTED_MODULE_5__["RolesService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], RolesComponent);
    return RolesComponent;
}());

var RoleModel = /** @class */ (function () {
    function RoleModel() {
    }
    return RoleModel;
}());



/***/ }),

/***/ "./src/app/layout/masters/roles/roles.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/masters/roles/roles.module.ts ***!
  \******************************************************/
/*! exports provided: RolesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModule", function() { return RolesModule; });
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
/* harmony import */ var _roles_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./roles-routing.module */ "./src/app/layout/masters/roles/roles-routing.module.ts");
/* harmony import */ var _roles_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./roles.component */ "./src/app/layout/masters/roles/roles.component.ts");
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./roles.service */ "./src/app/layout/masters/roles/roles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var RolesModule = /** @class */ (function () {
    function RolesModule() {
    }
    RolesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _roles_routing_module__WEBPACK_IMPORTED_MODULE_10__["RolesRoutingModule"],
                _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_8__["PageHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
            ],
            providers: [_roles_service__WEBPACK_IMPORTED_MODULE_12__["RolesService"]],
            declarations: [_roles_component__WEBPACK_IMPORTED_MODULE_11__["RolesComponent"]]
        })
    ], RolesModule);
    return RolesModule;
}());



/***/ }),

/***/ "./src/app/layout/masters/roles/roles.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/masters/roles/roles.service.ts ***!
  \*******************************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
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





var RolesService = /** @class */ (function () {
    function RolesService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.baseUrl = 'http://localhost:58164/role/';
    }
    RolesService.prototype.getToken = function () {
        var token = this.storage.get('UserToken');
        if (token != null) {
            var bearerToken = 'Bearer ' + token.access_token;
            var newHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            newHeaders = newHeaders.append('Authorization', bearerToken);
            return newHeaders;
        }
    };
    RolesService.prototype.getAllRoles = function () {
        return this.http.get(this.baseUrl + "getall", { headers: this.getToken() });
    };
    RolesService.prototype.changeStatus = function (id) {
        return this.http.get(this.baseUrl + "changestatus/" + id, { headers: this.getToken() });
    };
    RolesService.prototype.createRole = function (role) {
        return this.http.post(this.baseUrl + "create", role, { headers: this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RolesService.prototype.updateRole = function (role) {
        return this.http.post(this.baseUrl + "update", role, { headers: this.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandler));
    };
    RolesService.prototype.errorHandler = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    RolesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Object])
    ], RolesService);
    return RolesService;
}());



/***/ })

}]);
//# sourceMappingURL=masters-roles-roles-module.js.map