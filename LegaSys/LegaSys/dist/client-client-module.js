(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-module"],{

/***/ "./src/app/layout/client/client-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/client/client-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.component */ "./src/app/layout/client/client.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _client_component__WEBPACK_IMPORTED_MODULE_2__["ClientComponent"]
    }
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/client/client-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/client/client-service.service.ts ***!
  \*********************************************************/
/*! exports provided: ClientServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientServiceService", function() { return ClientServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientServiceService = /** @class */ (function () {
    function ClientServiceService(http) {
        this.http = http;
    }
    ClientServiceService.prototype.GetClientDetails = function () {
        return this.http.get('http://localhost:58164/api/Client/');
    };
    ClientServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientServiceService);
    return ClientServiceService;
}());



/***/ }),

/***/ "./src/app/layout/client/client.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/client/client.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-page-header [heading]=\"'Clients'\" [icon]=\"'fa fa-user'\"></app-page-header>\r\n\r\n<div>\r\n  <!-- This button will be used to add client into the database-->\r\n   <button mat-flat-button color=\"primary\">Add Client</button>\r\n \r\n  \r\n  <!-- This function is for filter the grid -->\r\n   <mat-form-field>\r\n     <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Clients\">\r\n   </mat-form-field>\r\n   <table mat-table [dataSource]=\"clientDetails\" class=\"mat-elevation-z8 \"  >\r\n \r\n     <!--- Note that these columns can be defined in any order.\r\n           The actual rendered columns are set as a property on the row definition\" -->\r\n   \r\n     <!-- client name column -->\r\n     <ng-container matColumnDef=\"ClientName\">\r\n       <th mat-header-cell *matHeaderCellDef> Client Name </th>\r\n       <td mat-cell *matCellDef=\"let element\"> {{element.ClientName}} </td>\r\n     </ng-container>\r\n   \r\n     <!-- client email Column -->\r\n     <ng-container matColumnDef=\"Email\">\r\n       <th mat-header-cell *matHeaderCellDef>Email </th>\r\n       <td mat-cell *matCellDef=\"let element\"> {{element.EmailID}} </td>\r\n     </ng-container>\r\n   \r\n     <!--client address Column -->\r\n     <ng-container matColumnDef=\"Address\">\r\n       <th mat-header-cell *matHeaderCellDef>Address </th>\r\n       <td mat-cell *matCellDef=\"let element\"> {{element.Address}} </td>\r\n     </ng-container>\r\n   \r\n     <!-- client country Column -->\r\n     <ng-container matColumnDef=\"Country\">\r\n       <th mat-header-cell *matHeaderCellDef> Country </th>\r\n       <td mat-cell *matCellDef=\"let element\"> {{element.Country}} </td>\r\n     </ng-container>\r\n     <!-- co client  Column -->\r\n     <ng-container matColumnDef=\"CoClient\">\r\n         <th mat-header-cell *matHeaderCellDef> Co Client </th>\r\n         <td mat-cell *matCellDef=\"let element\"> {{element.CoClient}} </td>\r\n       </ng-container>\r\n     <!--Action  Column, will contains button for View,Edit and Delete -->\r\n       <ng-container matColumnDef=\"action\">\r\n         <th mat-header-cell *matHeaderCellDef> Action </th>\r\n         <td mat-cell *matCellDef=\"let element\">\r\n             <button mat-button>View Details</button>\r\n             <button mat-button>Delete</button>\r\n         </td>\r\n       </ng-container>\r\n      \r\n     <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n     <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n   </table>\r\n   <!-- this code is for pagignator -->\r\n   <mat-paginator [pageSizeOptions]=\"[2, 3, 5]\" showFirstLastButtons></mat-paginator>\r\n \r\n \r\n     \r\n "

/***/ }),

/***/ "./src/app/layout/client/client.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/client/client.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 16px;\n  width: 100%;\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/layout/client/client.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/client/client.component.ts ***!
  \***************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _client_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-service.service */ "./src/app/layout/client/client-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientComponent = /** @class */ (function () {
    function ClientComponent(modalService, clientService) {
        this.modalService = modalService;
        this.clientService = clientService;
        // Created By VE team on 05 Nov 2018 
        this.clientDetails = []; // This array will hold the all client details
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.clientDetails);
        this.displayedColumns = ['ClientName', 'Email', 'Address', 'Country', 'CoClient', 'action']; // This is an aaray for Header in Grid displaying client details
    }
    // this fuction is used for sorting the grid
    ClientComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Following fuction will execute and call to client service to get all client from database
        debugger;
        this.clientService.GetClientDetails().subscribe(function (suc) {
            console.log(suc);
            _this.clientDetails = suc;
            console.log(_this.clientDetails);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ClientComponent.prototype, "paginator", void 0);
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/layout/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.scss */ "./src/app/layout/client/client.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _client_service_service__WEBPACK_IMPORTED_MODULE_4__["ClientServiceService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/layout/client/client.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/client/client.module.ts ***!
  \************************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/layout/client/client-routing.module.ts");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.component */ "./src/app/layout/client/client.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _client_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client-service.service */ "./src/app/layout/client/client-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _client_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClientRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _shared__WEBPACK_IMPORTED_MODULE_2__["PageHeaderModule"]
            ],
            providers: [_client_service_service__WEBPACK_IMPORTED_MODULE_11__["ClientServiceService"]],
            declarations: [_client_component__WEBPACK_IMPORTED_MODULE_4__["ClientComponent"]]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ })

}]);
//# sourceMappingURL=client-client-module.js.map