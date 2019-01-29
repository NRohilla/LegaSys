(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masters-domains-domains-module"],{

/***/ "./src/app/layout/masters/domains/domains-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/masters/domains/domains-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DomainsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainsRoutingModule", function() { return DomainsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _domains_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domains.component */ "./src/app/layout/masters/domains/domains.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _domains_component__WEBPACK_IMPORTED_MODULE_2__["DomainsComponent"]
    }
];
var DomainsRoutingModule = /** @class */ (function () {
    function DomainsRoutingModule() {
    }
    DomainsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DomainsRoutingModule);
    return DomainsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/masters/domains/domains.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/masters/domains/domains.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css\">\n<app-page-header [heading]=\"'Domains'\" [icon]=\"'fa fa-fw fa-users'\"></app-page-header>\n\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" [(ngModel)]=\"value\" placeholder=\"Filter\">\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''; applyFilter('');\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"TechDomainID\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> TechDomain ID </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.TechDomainID}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"DomainName\">\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\">\n        Domain Name </span></th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.DomainName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"IsActive\">\n    <th mat-header-cell class=\"bg-info\" *matHeaderCellDef> </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button (click)=\"$event.stopPropagation(); status(element.TechDomainID, element.IsActive)\" mat-raised-button\n        [ngClass]=\"{'btn-info': !element.IsActive, 'btn-danger': element.IsActive}\">\n        <mat-icon *ngIf=\"!element.IsActive\">verified_user</mat-icon>\n        <mat-icon *ngIf=\"element.IsActive\">not_interested</mat-icon>\n        {{element.IsActive ? 'Deactivate' : 'Activate'}}\n      </button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row.TechDomainID}\"\n    (click)=\"highlight(row)\">\n  </tr>\n\n</table>\n<mat-paginator [pageSizeOptions]=\"[5,10,15]\" showFirstLastButtons></mat-paginator>\n\n<h2>{{formType}} Domain</h2>\n<form [formGroup]=\"domainForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onSubmit(domainForm, formDirective)\">\n  <div class=\"example-container\">\n    <mat-form-field>\n      <input matInput formControlName=\"domainName\" placeholder=\"Domain Name\" />\n      <!-- [(ngModel)]=\"dataSource.LocationAddress\" name=\"dataSource.LocationAddress\" -->\n      <mat-error *ngIf=\"domainForm.controls['domainName'].invalid  && (domainForm.controls['domainName'].dirty || domainForm.controls['domainName'].touched)\">\n        Domain name is required</mat-error>\n    </mat-form-field>\n\n    <div class=\"w-100 float-left table-info px-4 py-2 text-right\">\n      <button type=\"submit\" class=\"btn-info mat-button mr-1\" [disabled]=\"!domainForm.valid\" mat-raised-button><i class=\"fa fa-save\"\n          aria-hidden=\"true\"></i><span class=\"action-btn\">{{formType}}\n          Domain</span></button>\n      <button type=\"button\" class=\"btn-danger mat-button\" (click)=\"formReset(formDirective);\"\n        mat-raised-button><i class=\"fa fa-times\" aria-hidden=\"true\"></i> <span class=\"action-btn\">Cancel</span></button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/layout/masters/domains/domains.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/masters/domains/domains.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.example-container {\n  height: 400px;\n  overflow: auto; }\n\n.highlight {\n  background: #bef9bb; }\n\n.table-container {\n  margin-top: 10px;\n  max-height: 300px;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/layout/masters/domains/domains.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/masters/domains/domains.component.ts ***!
  \*************************************************************/
/*! exports provided: DomainsComponent, DomainModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainsComponent", function() { return DomainsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainModel", function() { return DomainModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/layout/masters/dialog/dialog.component.ts");
/* harmony import */ var _domains_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domains.service */ "./src/app/layout/masters/domains/domains.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DomainsComponent = /** @class */ (function () {
    function DomainsComponent(domainsService, dialog, snackBar, titleService) {
        this.domainsService = domainsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.titleService = titleService;
        this.domainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            domainName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)])
        });
        this.selectedRowIndex = -1;
        this.displayedColumns = ['DomainName', 'IsActive'];
        this.formType = "Add";
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataSource);
        titleService.setTitle("LegaSys - Domains");
    }
    DomainsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    DomainsComponent.prototype.ngOnInit = function () {
        this.RenderDataTable();
    };
    DomainsComponent.prototype.onSubmit = function (formData, formDirective) {
        var _this = this;
        var domain = new DomainModel();
        domain.DomainName = this.domainForm.controls['domainName'].value;
        domain.TechDomainID = this.selectedRowIndex;
        if (this.formType == "Add") {
            this.domainsService.createDomain(domain).subscribe(function (res) {
                if (res) {
                    _this.snackBar.open("Domain added successfully", "Ok", {
                        duration: 2000,
                    });
                    _this.ngOnInit();
                }
            });
        }
        else {
            this.domainsService.updateDomain(domain).subscribe(function (res) {
                if (res) {
                    _this.snackBar.open("Domain updated successfully", "Ok", {
                        duration: 2000,
                    });
                    _this.formType = "Add";
                    _this.ngOnInit();
                }
            });
        }
        formDirective.resetForm();
        this.domainForm.reset();
    };
    DomainsComponent.prototype.status = function (id, isActive) {
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
    DomainsComponent.prototype.changeStatus = function (id) {
        var _this = this;
        this.domainsService.changeStatus(id).subscribe(function (res) { _this.ngOnInit(); });
    };
    DomainsComponent.prototype.formReset = function (formDirective) {
        formDirective.resetForm();
        this.domainForm.reset();
        this.formType = "Add";
    };
    DomainsComponent.prototype.highlight = function (row) {
        this.selectedRowIndex = row.TechDomainID;
        this.formType = "Update";
        this.domainForm.setValue({ domainName: row.DomainName });
    };
    DomainsComponent.prototype.RenderDataTable = function () {
        var _this = this;
        this.domainsService.getAllDomains()
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
    ], DomainsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DomainsComponent.prototype, "sort", void 0);
    DomainsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-domains',
            template: __webpack_require__(/*! ./domains.component.html */ "./src/app/layout/masters/domains/domains.component.html"),
            styles: [__webpack_require__(/*! ./domains.component.scss */ "./src/app/layout/masters/domains/domains.component.scss")]
        }),
        __metadata("design:paramtypes", [_domains_service__WEBPACK_IMPORTED_MODULE_5__["DomainsService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], DomainsComponent);
    return DomainsComponent;
}());

var DomainModel = /** @class */ (function () {
    function DomainModel() {
    }
    return DomainModel;
}());



/***/ }),

/***/ "./src/app/layout/masters/domains/domains.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/masters/domains/domains.module.ts ***!
  \**********************************************************/
/*! exports provided: DomainsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainsModule", function() { return DomainsModule; });
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
/* harmony import */ var _domains_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./domains.service */ "./src/app/layout/masters/domains/domains.service.ts");
/* harmony import */ var _domains_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./domains.component */ "./src/app/layout/masters/domains/domains.component.ts");
/* harmony import */ var _domains_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./domains-routing.module */ "./src/app/layout/masters/domains/domains-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DomainsModule = /** @class */ (function () {
    function DomainsModule() {
    }
    DomainsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _domains_routing_module__WEBPACK_IMPORTED_MODULE_12__["DomainsRoutingModule"],
                _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_8__["PageHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
            ],
            providers: [_domains_service__WEBPACK_IMPORTED_MODULE_10__["DomainsService"]],
            declarations: [_domains_component__WEBPACK_IMPORTED_MODULE_11__["DomainsComponent"]]
        })
    ], DomainsModule);
    return DomainsModule;
}());



/***/ })

}]);
//# sourceMappingURL=masters-domains-domains-module.js.map