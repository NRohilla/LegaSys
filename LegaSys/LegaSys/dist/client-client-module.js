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

/***/ "./src/app/layout/client/client.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/client/client.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Clients'\" [icon]=\"'fa fa-users'\"></app-page-header>\r\n\r\n</div>\r\n <!-- This button will be used to add client into the database-->\r\n <!-- <ngb-alert style=\"width:40%;\" *ngIf=\"Message\" type=\"success\" (close)=\"Message = null\">{{ successMessage }}</ngb-alert> -->\r\n\r\n \r\n <!-- This function is for filter the grid -->\r\n  <div >\r\n  <mat-table [dataSource]=\"clientDetails\" matSort class=\"table-active\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n  \r\n    <!-- client name column -->\r\n    <ng-container matColumnDef=\"ClientName\">\r\n      <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header> <span class=\"text-white font-14\">Client Name</span> </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.ClientName}} </mat-cell>\r\n    </ng-container>\r\n  \r\n    <!-- client email Column -->\r\n    <ng-container matColumnDef=\"Email\">\r\n      <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header><span class=\"text-white font-14\">Email</span> </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.EmailID}} </mat-cell>\r\n    </ng-container>\r\n  \r\n    <!--client address Column -->\r\n    <ng-container matColumnDef=\"Address\">\r\n      <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header><span class=\"text-white font-14\">Address</span> </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.Address}} </mat-cell>\r\n    </ng-container>\r\n  \r\n    <!-- client country Column -->\r\n    <ng-container matColumnDef=\"Country\">\r\n      <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header> <span class=\"text-white font-14\">Country</span> </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.Country}} </mat-cell>\r\n    </ng-container>\r\n    <!-- co client  Column -->\r\n    <ng-container matColumnDef=\"CoClient\">\r\n        <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header>  <span class=\"text-white font-14\">Co Client</span> </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.CoClient}} </mat-cell>\r\n      </ng-container>\r\n    <!--Action  Column, will contains button for View,Edit and Delete -->\r\n      <ng-container matColumnDef=\"action\">\r\n        <mat-header-cell class=\"bg-info\" mat-header-cell *matHeaderCellDef mat-sort-header> </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\" class=\"text-right\">\r\n          <!-- [routerLink]=\"['/client-details'] -->\r\n            <button mat-button (click)=\"ViewClientDetails(element.ClientDetailID)\"  class=\"btn btn-info mx-1\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> View</button>\r\n          \r\n            <button mat-button (click)= \"openDialog(element.ClientDetailID)\" class=\"btn btn-danger mx-1\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Delete</button>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row >\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n  <mat-card *ngIf=\"isLoading\" style=\"display: flex; justify-content: center; align-items: center\">\r\n    <mat-progress-spinner \r\n      color=\"primary\" \r\n      mode=\"indeterminate\">\r\n    </mat-progress-spinner>\r\n  </mat-card>\r\n  \r\n  <!-- this code is for pagignator -->\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons class=\"table-active\"></mat-paginator>\r\n\r\n</div>\r\n\r\n<div class=\"w-100 float-left table-info px-4 py-2 text-right footer-height\" >\r\n  <!-- This button will be used to add client into the database-->\r\n\r\n  <button  mat-button class=\"btn btn-info\" [routerLink]=\"['/add-client']\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add Client</button>\r\n</div>\r\n\r\n\r\n    \r\n"

/***/ }),

/***/ "./src/app/layout/client/client.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/client/client.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 16px;\n  width: 100%;\n  margin-top: 20px; }\n\nth.mat-sort-header-sorted {\n  color: #ffffff; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _current_clientdata_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../current-clientdata-service.service */ "./src/app/current-clientdata-service.service.ts");
/* harmony import */ var _deleteDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deleteDialog */ "./src/app/layout/client/deleteDialog.ts");
/* harmony import */ var _shared_services_toster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/toster.service */ "./src/app/shared/services/toster.service.ts");
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
    function ClientComponent(dialog, modalService, clientService, router, currentClientdataService, tosterService) {
        this.dialog = dialog;
        this.modalService = modalService;
        this.clientService = clientService;
        this.router = router;
        this.currentClientdataService = currentClientdataService;
        this.tosterService = tosterService;
        // This is an array for Header in Grid displaying client details
        this.displayedColumns = ['ClientName', 'Email', 'Address', 'Country', 'CoClient', 'action'];
        this.clientDetails = []; // This array will hold the all client details
        this.Message = false;
        this.isLoading = true; // this varibale will be used to display progressive spinner
    }
    /*********** Writen By Shubham Mishra on 8 nov 2018 following method is used for geting selected client id from fornt end and
     *********** it to a property in created in a service and redirecting user to a client details page   */
    ClientComponent.prototype.ViewClientDetails = function (element) {
        //this.currentClientdataService.currentClientID = element;
        sessionStorage.setItem("currentClientID", element);
        this.router.navigate(['/client-details']);
    };
    /*********** Writen By Shubham Mishra on 6 nov 2018 following method is used to gell all  client details from database   */
    ClientComponent.prototype.GetAllClients = function () {
        var _this = this;
        this.clientService.GetClientDetails().subscribe(function (suc) {
            _this.isLoading = false;
            _this.clientDetails = suc;
            _this.clientDetails = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.clientDetails);
            _this.clientDetails.paginator = _this.paginator;
            _this.clientDetails.sort = _this.sort;
        }, function (err) {
            console.log(err);
        });
    };
    /*********** Writen By Shubham Mishra on 8 nov 2018 following method is used for deleteing a perticular client   */
    ClientComponent.prototype.DeleteClientWithID = function (ID) {
        var _this = this;
        this.clientService.DeleteClient(ID).subscribe(function (suc) {
            if (suc == "Data deleted successfully!") {
                _this.tosterService.showSuccess("Client Delete successfully");
                //this.show();
                _this.GetAllClients();
            }
            else {
                _this.tosterService.showError("Client Deletion Failed");
            }
        }, function (err) {
            console.log(err);
        });
    };
    ClientComponent.prototype.show = function () {
        var _this = this;
        this.Message = true;
        this.successMessage = "Client Deleted Succesfully";
        setTimeout(function () { return _this.Message = false; }, 2500);
    };
    /******* Created on 27 Nov 2018 By Vaibhav ******/
    ClientComponent.prototype.openDialog = function (dailogID) {
        var _this = this;
        sessionStorage.setItem("currentClientdailogID", dailogID);
        var dialogRef = this.dialog.open(_deleteDialog__WEBPACK_IMPORTED_MODULE_7__["DeleteDialog"], {
            width: '370px',
            data: { confirm: true }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result)
                _this.DeleteClientWithID(dailogID);
        });
    };
    ClientComponent.prototype.ngOnInit = function () {
        // Following fuction will execute and call to client service to get all client from database
        this.GetAllClients();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ClientComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ClientComponent.prototype, "sort", void 0);
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/layout/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.scss */ "./src/app/layout/client/client.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _client_service_service__WEBPACK_IMPORTED_MODULE_4__["ClientServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _current_clientdata_service_service__WEBPACK_IMPORTED_MODULE_6__["CurrentClientdataServiceService"], _shared_services_toster_service__WEBPACK_IMPORTED_MODULE_8__["TosterService"]])
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
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/layout/client/client-routing.module.ts");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.component */ "./src/app/layout/client/client.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _client_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-service.service */ "./src/app/layout/client/client-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _deleteDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./deleteDialog */ "./src/app/layout/client/deleteDialog.ts");
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
                _client_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_9__["PageHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]
            ],
            providers: [_client_service_service__WEBPACK_IMPORTED_MODULE_7__["ClientServiceService"]],
            entryComponents: [_deleteDialog__WEBPACK_IMPORTED_MODULE_12__["DeleteDialog"]],
            declarations: [_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"], _deleteDialog__WEBPACK_IMPORTED_MODULE_12__["DeleteDialog"]]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/layout/client/deleteDialog.html":
/*!*************************************************!*\
  !*** ./src/app/layout/client/deleteDialog.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content >\r\n       <strong style=\"font-size:16px \"><p *ngIf=\"currentClientDetails\"> Are you sure, you want to Delete {{currentClientDetails.ClientName}}</p></strong>\r\n      </div>\r\n      <div mat-dialog-actions>\r\n          <div style=\"margin-left:118px;\">\r\n        <button mat-raised-button class=\"btn btn-secondary mx-1\" (click)=\"onNoClick()\"> Cancel</button>\r\n        <button mat-raised-button class=\"btn btn-info mx-1\" [mat-dialog-close]=\"data.confirm\" cdkFocusInitial style=\"margin-left:28px \"> Yes</button>\r\n       \r\n      </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/layout/client/deleteDialog.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/client/deleteDialog.ts ***!
  \***********************************************/
/*! exports provided: DeleteDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialog", function() { return DeleteDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _client_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-service.service */ "./src/app/layout/client/client-service.service.ts");
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



var DeleteDialog = /** @class */ (function () {
    function DeleteDialog(dialogRef, dialog, clientService, data) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.clientService = clientService;
        this.data = data;
    }
    DeleteDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteDialog.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        // Following fuction will execute and call to client service to get all client from database
        this.clientService.GetDetailsOfClientwhoseID(sessionStorage.getItem("currentClientdailogID")).subscribe(function (suc) {
            _this.currentClientDetails = suc;
            _this.currentClientDetails.ClientName;
        }, function (err) {
            console.log(err);
        });
    };
    DeleteDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deleteDialog',
            template: __webpack_require__(/*! ./deleteDialog.html */ "./src/app/layout/client/deleteDialog.html"),
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _client_service_service__WEBPACK_IMPORTED_MODULE_2__["ClientServiceService"], Object])
    ], DeleteDialog);
    return DeleteDialog;
}());



/***/ })

}]);
//# sourceMappingURL=client-client-module.js.map