(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource-resource-module"],{

/***/ "./src/app/layout/resource/resource-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/resource/resource-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ResourceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceRoutingModule", function() { return ResourceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resource_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource.component */ "./src/app/layout/resource/resource.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { CreateResourceComponent } from './create-resource.component';
var routes = [
    {
        path: '', component: _resource_component__WEBPACK_IMPORTED_MODULE_2__["ResourceComponent"]
    }
];
var ResourceRoutingModule = /** @class */ (function () {
    function ResourceRoutingModule() {
    }
    ResourceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ResourceRoutingModule);
    return ResourceRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/resource/resource.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/resource/resource.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css\">\r\n<div>\r\n    <app-page-header [heading]=\"'Resources'\" [style]=\"'background-color:lightgrey'\" [icon]=\"'fa fa-fw fa-users'\"></app-page-header>\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" [(ngModel)]=\"value\" placeholder=\"Filter\">\r\n        <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''; applyFilter('');\">\r\n            <mat-icon>close</mat-icon>\r\n        </button>\r\n    </mat-form-field>\r\n    <!-- <div>\r\n        <button type=\"button\" [routerLink]=\"['/create-resource']\" class=\"btn btn-info\" style=\"margin-bottom: 1%;\">Create\r\n            Resource</button>\r\n    </div> -->\r\n</div>\r\n\r\n<mat-table [dataSource]=\"dataSource\" matSort class=\"example-container mat-elevation-z8 resource-grid\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"UserDetailID\">\r\n        <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header> <span class=\"text-white text-uppercase\">Resource\r\n                ID</span> </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.UserDetailID}} </mat-cell>>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"FullName\">\r\n        <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\">Name</span>\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.Firstname+ ' '+element.Middlename+' '+element.Lastname}}\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- TotalExp Column -->\r\n    <ng-container matColumnDef=\"TotalExp\">\r\n        <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\">Total\r\n                Exp</span> </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.TotalExp}} </mat-cell>\r\n    </ng-container>\r\n    <!-- EmailId Column -->\r\n    <ng-container matColumnDef=\"EmailId\">\r\n        <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\">Email</span>\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.EmailId}} </mat-cell>\r\n    </ng-container>\r\n    <!-- Shift Column -->\r\n    <ng-container matColumnDef=\"Shift\">\r\n        <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\">Shift</span>\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.Shift}} </mat-cell>\r\n    </ng-container>\r\n    <!-- Location Column -->\r\n    <ng-container matColumnDef=\"Location_ID\">\r\n        <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\">Location</span>\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.LocationAddress}} </mat-cell>\r\n    </ng-container>\r\n    <!-- ReportingHead Column -->\r\n    <ng-container matColumnDef=\"ReportingHead_ID\">\r\n        <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header><span class=\"text-white text-uppercase\">Reporting\r\n                Head</span> </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.ReportingHead}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Action\">\r\n        <mat-header-cell *matHeaderCellDef class=\"bg-info\"> </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\">\r\n\r\n            <button mat-button (click)=\"ViewResourceDetails(element.UserDetailID)\" class=\"btn btn-info mx-1\"><i class=\"fa fa-pencil-square-o\"\r\n                    aria-hidden=\"true\"></i> <span class=\"action-btn\">View</span></button>\r\n            <button mat-button (click)=\"DeleteResource(element.UserDetailID)\" class=\"btn btn-danger mx-1\"><i class=\"fa fa-trash-o\"\r\n                    aria-hidden=\"true\"></i> <span class=\"action-btn\">Delete</span></button>\r\n        </mat-cell>\r\n    </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n<mat-paginator [pageSizeOptions]=\"[5,10,15]\" showFirstLastButtons></mat-paginator>\r\n\r\n<div class=\"w-100 float-left table-info px-4 py-2 text-right\">\r\n    <!-- This button will be used to add resource into the database-->\r\n\r\n    <button mat-button class=\"btn btn-info\" [routerLink]=\"['/create-resource']\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n        Add Resource</button>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/resource/resource.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/resource/resource.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\ntable {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 16px;\n  width: 100%;\n  margin-top: 20px; }\n\nth.mat-sort-header-sorted {\n  color: #ffffff; }\n\n.resource-grid .mat-cell, .resource-grid .mat-footer-cell, .resource-grid .mat-header-cell {\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/layout/resource/resource.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/resource/resource.component.ts ***!
  \*******************************************************/
/*! exports provided: ResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceComponent", function() { return ResourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource.service */ "./src/app/layout/resource/resource.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _masters_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../masters/dialog/dialog.component */ "./src/app/layout/masters/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResourceComponent = /** @class */ (function () {
    function ResourceComponent(dataService, dialog, router, snackBar, titleService) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.router = router;
        this.snackBar = snackBar;
        this.titleService = titleService;
        this.dataSource = [];
        this.displayedColumns = ['FullName', 'TotalExp', 'EmailId', 'Shift', 'Location_ID', 'ReportingHead_ID', 'Action'];
        titleService.setTitle("LegaSys - Resources");
    }
    ResourceComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ResourceComponent.prototype.ViewResourceDetails = function (element) {
        localStorage.setItem('element', element);
        this.router.navigate(['/resource-details']);
    };
    ResourceComponent.prototype.DeleteResource = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_masters_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
            width: '325px',
            data: { status: "delete", confirm: true }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dataService.deleteResource(id).subscribe(function (res) {
                    if (res) {
                        _this.snackBar.open("User deleted successfully", "Ok", {
                            duration: 2000,
                        });
                        _this.ngOnInit();
                    }
                });
            }
        });
    };
    ResourceComponent.prototype.ngOnInit = function () {
        this.RenderDataTable();
    };
    ResourceComponent.prototype.RenderDataTable = function () {
        var _this = this;
        debugger;
        this.dataService.getResource()
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
    ], ResourceComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ResourceComponent.prototype, "sort", void 0);
    ResourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource',
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/layout/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.scss */ "./src/app/layout/resource/resource.component.scss")]
        }),
        __metadata("design:paramtypes", [_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], ResourceComponent);
    return ResourceComponent;
}());



/***/ }),

/***/ "./src/app/layout/resource/resource.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/resource/resource.module.ts ***!
  \****************************************************/
/*! exports provided: ResourceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceModule", function() { return ResourceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resource_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource-routing.module */ "./src/app/layout/resource/resource-routing.module.ts");
/* harmony import */ var _resource_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource.component */ "./src/app/layout/resource/resource.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resource.service */ "./src/app/layout/resource/resource.service.ts");
/* harmony import */ var _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/modules/page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ResourceModule = /** @class */ (function () {
    function ResourceModule() {
    }
    ResourceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _resource_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResourceRoutingModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_11__["PageHeaderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"]
            ],
            providers: [_resource_service__WEBPACK_IMPORTED_MODULE_10__["ResourceService"]],
            declarations: [_resource_component__WEBPACK_IMPORTED_MODULE_3__["ResourceComponent"]],
        })
    ], ResourceModule);
    return ResourceModule;
}());



/***/ })

}]);
//# sourceMappingURL=resource-resource-module.js.map