(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-details-client-details-module"],{

/***/ "./src/app/layout/client/client-details/client-details-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/client/client-details/client-details-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ClientDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsRoutingModule", function() { return ClientDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-details.component */ "./src/app/layout/client/client-details/client-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _client_details_component__WEBPACK_IMPORTED_MODULE_2__["ClientDetailsComponent"],
    }
];
var ClientDetailsRoutingModule = /** @class */ (function () {
    function ClientDetailsRoutingModule() {
    }
    ClientDetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientDetailsRoutingModule);
    return ClientDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/client/client-details/client-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/layout/client/client-details/client-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Client Details'\" [icon]=\"'fa fa-info-circle'\"></app-page-header>\r\n<!-- <ngb-alert style=\"width:40%;\" *ngIf=\"Message\" type=\"success\" (close)=\"Message = null\">{{ successMessage }}</ngb-alert> -->\r\n<mat-tab-group class=\"client-detail \">\r\n  <mat-card *ngIf=\"isLoading\" style=\"display: flex; justify-content: center; align-items: center\">\r\n    <mat-progress-spinner color=\"primary\" mode=\"indeterminate\">\r\n    </mat-progress-spinner>\r\n  </mat-card>\r\n  <mat-tab label=\"Summary\">\r\n    <app-client-details-summary [currentClientDetails]=\"currentClientDetails\"></app-client-details-summary>\r\n  </mat-tab>\r\n  <mat-tab label=\"Personal Details\">\r\n    <app-client-details-personal-details *ngIf=\"currentClientDetails\" (onCancel)=\"onCancel($event)\"\r\n      (onClientDetailsChange)=\"updateClent($event)\" [currentClientDetails]=\"currentClientDetails\"\r\n      [currentClientDetailsBackup]=\"currentClientDetailsBackup\"></app-client-details-personal-details>\r\n  </mat-tab>\r\n  <mat-tab label=\"Co Client Details\">\r\n    <app-client-details-co-client-details *ngIf=\"currentClientDetails\" (onCancel)=\"onCancel($event)\"\r\n      (onClientDetailsChange)=\"updateClent($event)\" [currentClientDetails]=\"currentClientDetails\"\r\n      [currentClientDetailsBackup]=\"currentClientDetailsBackup\"></app-client-details-co-client-details>\r\n  </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/layout/client/client-details/client-details.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layout/client/client-details/client-details.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-tab-labels {\n  display: flex;\n  background: #17a2b8; }\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #ffffff; }\n"

/***/ }),

/***/ "./src/app/layout/client/client-details/client-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/client/client-details/client-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsComponent", function() { return ClientDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _current_clientdata_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../current-clientdata-service.service */ "./src/app/current-clientdata-service.service.ts");
/* harmony import */ var _client_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-service.service */ "./src/app/layout/client/client-service.service.ts");
/* harmony import */ var _shared_services_toster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/toster.service */ "./src/app/shared/services/toster.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientDetailsComponent = /** @class */ (function () {
    function ClientDetailsComponent(currentClientdataService, clientService, toastr, tosterService) {
        this.currentClientdataService = currentClientdataService;
        this.clientService = clientService;
        this.toastr = toastr;
        this.tosterService = tosterService;
        /*********** Created on 19-Nov-2018 By Shubham Mishra **********/
        this.Message = false;
        this.isLoading = true;
    }
    /***** This method is used for Geting details of client selecte dby user. This method is calling client service with parameter ID which is ID of
     ***** client selected by user to view *****************************************************************************************************/
    ClientDetailsComponent.prototype.GetClientsWithID = function (ID) {
        var _this = this;
        this.clientService.GetDetailsOfClientwhoseID(ID).subscribe(function (suc) {
            _this.isLoading = false;
            _this.currentClientDetails = suc;
            _this.currentClientDetailsBackup = JSON.parse(JSON.stringify(suc));
        }, function (err) {
            console.log(err);
        });
    };
    /***** This method is used for updating  details of client modified by  user. This method is calling client service with parameter model *****************************************************************************************************/
    ClientDetailsComponent.prototype.updateClent = function (client) {
        var _this = this;
        this.clientService.UpdateDetailsWithID(client).subscribe(function (suc) {
            if (suc == "Data updated successfully!") {
                _this.tosterService.showSuccess("Client Updated Succesfully");
                _this.GetClientsWithID(_this.currentClientID);
                //this.show();           
            }
            else {
                _this.tosterService.showError("Client Updation Failed");
            }
        }, function (err) {
            console.log(err);
        });
    };
    ClientDetailsComponent.prototype.onCancel = function (client) {
        this.tosterService.showInfo("cancelled");
        this.currentClientDetails = client;
    };
    ClientDetailsComponent.prototype.show = function () {
        var _this = this;
        this.Message = true;
        this.successMessage = "Client Updated Succesfully";
        setTimeout(function () { return _this.Message = false; }, 20000);
    };
    ClientDetailsComponent.prototype.ngOnInit = function () {
        this.currentClientID = sessionStorage.getItem("currentClientID");
        if (this.currentClientID != null && this.currentClientID != '') {
            this.GetClientsWithID(this.currentClientID);
        }
    };
    ClientDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-details',
            template: __webpack_require__(/*! ./client-details.component.html */ "./src/app/layout/client/client-details/client-details.component.html"),
            styles: [__webpack_require__(/*! ./client-details.component.scss */ "./src/app/layout/client/client-details/client-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_current_clientdata_service_service__WEBPACK_IMPORTED_MODULE_1__["CurrentClientdataServiceService"], _client_service_service__WEBPACK_IMPORTED_MODULE_2__["ClientServiceService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], _shared_services_toster_service__WEBPACK_IMPORTED_MODULE_3__["TosterService"]])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/client/client-details/client-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/client/client-details/client-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: ClientDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsModule", function() { return ClientDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _client_details_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-details-routing.module */ "./src/app/layout/client/client-details/client-details-routing.module.ts");
/* harmony import */ var _client_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-details.component */ "./src/app/layout/client/client-details/client-details.component.ts");
/* harmony import */ var _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/modules/page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _components_client_details_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/client-details-summary.component */ "./src/app/layout/client/components/client-details-summary.component.ts");
/* harmony import */ var _components_client_details_personal_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/client-details-personal-details.component */ "./src/app/layout/client/components/client-details-personal-details.component.ts");
/* harmony import */ var _components_client_details_co_client_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/client-details-co-client-details.component */ "./src/app/layout/client/components/client-details-co-client-details.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ClientDetailsModule = /** @class */ (function () {
    function ClientDetailsModule() {
    }
    ClientDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _client_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientDetailsRoutingModule"],
                _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"]
            ],
            declarations: [_client_details_component__WEBPACK_IMPORTED_MODULE_3__["ClientDetailsComponent"], _components_client_details_summary_component__WEBPACK_IMPORTED_MODULE_6__["ClientDetailsSummaryComponent"], _components_client_details_personal_details_component__WEBPACK_IMPORTED_MODULE_7__["ClientDetailsPersonalDetailsComponent"], _components_client_details_co_client_details_component__WEBPACK_IMPORTED_MODULE_8__["ClientDetailsCoClientDetailsComponent"]]
        })
    ], ClientDetailsModule);
    return ClientDetailsModule;
}());



/***/ }),

/***/ "./src/app/layout/client/components/client-details-co-client-details.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/client/components/client-details-co-client-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"w-100 float-left table-active py-5 px-2\" [formGroup]=\"coClientForm\" *ngIf=\"currentClientDetails\">\r\n        <div class=\"row m-0\">\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-6 float-left\">\r\n                        <mat-form-field class=\"w-100\">\r\n                                <label *ngIf=\"readOnly\"><strong>Co CLient </strong></label>\r\n                                <input [readonly]=\"readOnly\" formControlName=\"coClient\" matInput [placeholder]=\"GetPlaceHolder('coClient')\"\r\n                                        name=\"currentClientDetails.CoClient\">\r\n                                <mat-error *ngIf=\"coClientForm.controls['coClient'].invalid  && (coClientForm.controls['coClient'].dirty || coClientForm.controls['coClient'].touched)\">can\r\n                                        only contails text</mat-error>\r\n                        </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-6 float-left\">\r\n                        <mat-form-field class=\"w-100\">\r\n                                <label *ngIf=\"readOnly\"><strong>Secondary Co Client </strong></label>\r\n                                <input [readonly]=\"readOnly\" formControlName=\"coClient2\" matInput [placeholder]=\"GetPlaceHolder('coClient2')\">\r\n\r\n                                <mat-error *ngIf=\"coClientForm.controls['coClient2'].invalid  && (coClientForm.controls['coClient'].dirty || coClientForm.controls['coClient'].touched)\">can\r\n                                        only contails text</mat-error>\r\n                        </mat-form-field>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-6 float-left\">\r\n                        <mat-form-field class=\"w-100\">\r\n                                <label *ngIf=\"readOnly\"><strong>Other Co Client </strong></label>\r\n                                <input [readonly]=\"readOnly\" formControlName=\"coClient3\" matInput [placeholder]=\"GetPlaceHolder('coClient3')\">\r\n                                <mat-error *ngIf=\"coClientForm.controls['coClient3'].invalid  && (coClientForm.controls['coClient'].dirty || coClientForm.controls['coClient'].touched)\">can\r\n                                        only contails text</mat-error>\r\n                        </mat-form-field>\r\n                </div>\r\n        </div>\r\n        <div class=\"row m-0\">\r\n\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-6 float-left\">\r\n                        <mat-form-field class=\"w-100\">\r\n                                <label *ngIf=\"readOnly\"><strong>Other Co Client </strong></label>\r\n                                <input [readonly]=\"readOnly\" formControlName=\"coClient4\" matInput [placeholder]=\"GetPlaceHolder('coClient4')\">\r\n                                <mat-error *ngIf=\"coClientForm.controls['coClient4'].invalid  && (coClientForm.controls['coClient'].dirty || coClientForm.controls['coClient'].touched)\">can\r\n                                        only contails text</mat-error>\r\n                        </mat-form-field>\r\n                </div>\r\n        </div>\r\n\r\n\r\n</form>\r\n<div class=\"w-100 float-left d-block table-info px-4 py-2 table-info footer-height\">\r\n\r\n        <div class=\"px-2 float-right\" *ngIf=\"disable\">\r\n                <button mat-button class=\"btn btn-info\" (click)=\" MakeFieldEditable()\"><i class=\"fa fa-pencil-square-o\"\r\n                                aria-hidden=\"true\"></i> Edit</button>\r\n        </div>\r\n        <div class=\"px-2 float-right\" *ngIf=\"!disable\">\r\n                <button mat-button class=\"btn btn-success\" [disabled]=\"!coClientForm.valid\" (click)=\"UpdateClient()\">\r\n                        <i class=\"fa fa-save\" aria-hidden=\"true\"></i>\r\n                        Save</button>\r\n        </div>\r\n        <div class=\"px-2 float-right\" *ngIf=\"!disable\">\r\n                <button mat-button class=\"btn btn-secondary\" (click)=\"DiscardChanges()\"><i class=\"fa fa-times\"\r\n                                aria-hidden=\"true\"></i> Cancel</button>\r\n        </div>\r\n        <div class=\"px-2 float-right\">\r\n                <button mat-button class=\"btn btn-info\" [routerLink]=\"['/client']\"><i class=\"fa fa-backward\"\r\n                                aria-hidden=\"true\"></i> Back</button>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/client/components/client-details-co-client-details.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/client/components/client-details-co-client-details.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".md-input-container label {\n  color: black; }\n"

/***/ }),

/***/ "./src/app/layout/client/components/client-details-co-client-details.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/client/components/client-details-co-client-details.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ClientDetailsCoClientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsCoClientDetailsComponent", function() { return ClientDetailsCoClientDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _current_clientdata_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../current-clientdata-service.service */ "./src/app/current-clientdata-service.service.ts");
/* harmony import */ var _client_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-service.service */ "./src/app/layout/client/client-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_client_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/client.model */ "./src/app/layout/client/model/client.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientDetailsCoClientDetailsComponent = /** @class */ (function () {
    function ClientDetailsCoClientDetailsComponent(clientService, currentClientdataService, formBuilder) {
        this.clientService = clientService;
        this.currentClientdataService = currentClientdataService;
        this.formBuilder = formBuilder;
        this.onClientDetailsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //used  to emit event to parent controller 
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //used  to emit event to parent controller 
        /********************** Created By Shubham Mishra on 19-Nov-2018 **************/
        this.disable = true; //this variable is used to bind the disabled attribute of input to make input fields editable and non editable
        this.readOnly = true;
    }
    /****** This fuction is used to make the form field editable  */
    ClientDetailsCoClientDetailsComponent.prototype.MakeFieldEditable = function () {
        if (this.disable) {
            this.disable = false;
            this.readOnly = false;
        }
        else {
            this.disable = true;
            this.readOnly = true;
        }
    };
    /****** This function is used to discard changes done by user, and replace changed data with previous data */
    /*** modified on 27 Nov 2018  By Shubham Mishra *****/
    ClientDetailsCoClientDetailsComponent.prototype.DiscardChanges = function () {
        this.currentClientDetails = this.currentClientDetailsBackup;
        this.LoadCoClientForm();
        this.onCancel.emit(this.currentClientDetails);
        this.MakeFieldEditable();
    };
    /***** This function is used to update details of a client, following fucntion is emiting a event  */
    ClientDetailsCoClientDetailsComponent.prototype.UpdateClient = function () {
        this.currentClientDetails.CoClient = this.coClientForm.controls['coClient'].value;
        this.currentClientDetails.CoClient2 = this.coClientForm.controls['coClient2'].value;
        this.currentClientDetails.CoClient3 = this.coClientForm.controls['coClient3'].value;
        this.currentClientDetails.CoClient4 = this.coClientForm.controls['coClient4'].value;
        this.onClientDetailsChange.emit(this.currentClientDetails);
        this.MakeFieldEditable();
    };
    /***** Writen by Shubham  Mishra on 21 Nov 2018 ****
     * ******* This fucntion is used to create a reactive form ************/
    ClientDetailsCoClientDetailsComponent.prototype.CreateCoClientForm = function () {
        this.coClientForm = this.formBuilder.group({
            coClient: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z ]+$')],
            coClient2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z ]+$')],
            coClient3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z ]+$')],
            coClient4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z ]+$')]
        });
    };
    /******** Created on 27 nov 2018 ********/
    /******** Following method will be used to get the place holder ********/
    ClientDetailsCoClientDetailsComponent.prototype.GetPlaceHolder = function (controlName) {
        if (!this.readOnly) {
            switch (controlName) {
                case 'coClient': return "Primary Co client ";
                case 'coClient2': return "Secondary Co Client";
                case 'coClient3': return "Other Co Client ";
                case 'coClient4': return "Other Co Client ";
            }
        }
        else {
            return " ";
        }
    };
    ClientDetailsCoClientDetailsComponent.prototype.ngOnInit = function () {
        if (this.currentClientDetails) {
            this.CreateCoClientForm();
            this.LoadCoClientForm();
            this.coClientForm.markAsTouched();
        }
    };
    /********** Writen on 27 Nov 2018 **/
    ClientDetailsCoClientDetailsComponent.prototype.LoadCoClientForm = function () {
        this.coClientForm.controls['coClient'].setValue(this.currentClientDetails.CoClient);
        this.coClientForm.controls['coClient2'].setValue(this.currentClientDetails.CoClient2);
        this.coClientForm.controls['coClient3'].setValue(this.currentClientDetails.CoClient3);
        this.coClientForm.controls['coClient4'].setValue(this.currentClientDetails.CoClient4);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onClientDetailsChange'),
        __metadata("design:type", Object)
    ], ClientDetailsCoClientDetailsComponent.prototype, "onClientDetailsChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onCancel'),
        __metadata("design:type", Object)
    ], ClientDetailsCoClientDetailsComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('currentClientDetails'),
        __metadata("design:type", _model_client_model__WEBPACK_IMPORTED_MODULE_4__["Client"])
    ], ClientDetailsCoClientDetailsComponent.prototype, "currentClientDetails", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('currentClientDetailsBackup'),
        __metadata("design:type", _model_client_model__WEBPACK_IMPORTED_MODULE_4__["Client"])
    ], ClientDetailsCoClientDetailsComponent.prototype, "currentClientDetailsBackup", void 0);
    ClientDetailsCoClientDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-details-co-client-details',
            template: __webpack_require__(/*! ./client-details-co-client-details.component.html */ "./src/app/layout/client/components/client-details-co-client-details.component.html"),
            styles: [__webpack_require__(/*! ./client-details-co-client-details.component.scss */ "./src/app/layout/client/components/client-details-co-client-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_client_service_service__WEBPACK_IMPORTED_MODULE_2__["ClientServiceService"], _current_clientdata_service_service__WEBPACK_IMPORTED_MODULE_1__["CurrentClientdataServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ClientDetailsCoClientDetailsComponent);
    return ClientDetailsCoClientDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/client/components/client-details-personal-details.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/client/components/client-details-personal-details.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"w-100 float-left table-active py-5 px-2\" [formGroup]=\"personalDetailsForm\" *ngIf=\"currentClientDetails\">\r\n    <div class=\"row m-0\">\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-6 float-left\">\r\n            <mat-form-field class=\"w-100\">\r\n                    <label *ngIf=\"readOnly\"><strong>Client Name  </strong></label>\r\n                <input [readonly]=\"readOnly\" formControlName=\"clientName\" matInput [placeholder]=\"GetPlaceHolder('clientName')\">\r\n                <mat-error *ngIf=\"personalDetailsForm.controls['clientName'].invalid  && (personalDetailsForm.controls['clientName'].dirty || personalDetailsForm.controls['clientName'].touched)\">\r\n                    {{ GetErrorMessage('clientName')}}</mat-error>\r\n                 \r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-6 float-left\">\r\n            <mat-form-field class=\"w-100\">\r\n                    <label *ngIf=\"readOnly\"><strong>Client Address </strong></label>\r\n                <input [readonly]=\"readOnly\" formControlName=\"clientAddress\" matInput  [placeholder]=\"GetPlaceHolder('clientAddress')\">\r\n                    <mat-error *ngIf=\"personalDetailsForm.controls['clientAddress'].invalid  && (personalDetailsForm.controls['clientAddress'].dirty || personalDetailsForm.controls['clientAddress'].touched)\">Client address can not be empty</mat-error>\r\n                 \r\n                </mat-form-field>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-6 float-left\">\r\n                <mat-form-field class=\"w-100\">\r\n                    <label *ngIf=\"readOnly\"><strong>Country</strong></label>\r\n        <input  [readonly]=\"readOnly\" type=\"text\" matInput formControlName=\"country\" [matAutocomplete]=\"auto\" [placeholder]=\"GetPlaceHolder('country')\">\r\n        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" style=\"max-height: 200px !important\">\r\n          <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\" style=\"max-height: 200px !important\">\r\n            {{option}}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n        <mat-error *ngIf=\"personalDetailsForm.controls['country'].invalid  && (personalDetailsForm.controls['country'].dirty || personalDetailsForm.controls['country'].touched)\">Country can not be blank</mat-error>\r\n                   \r\n    </mat-form-field>\r\n    </div>\r\n        \r\n    </div>\r\n    <div class=\"row m-0\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-6 float-left\">\r\n                    <mat-form-field class=\"w-100\">\r\n                            <label *ngIf=\"readOnly\"><strong>Primary Client Email </strong></label>\r\n                        <input [readonly]=\"readOnly\" formControlName=\"clientEmail\" matInput [placeholder]=\"GetPlaceHolder('clientEmail')\"  >\r\n                        <mat-error *ngIf=\"personalDetailsForm.controls['clientEmail'].invalid  && (personalDetailsForm.controls['clientEmail'].dirty || personalDetailsForm.controls['clientEmail'].touched)\">\r\n                           {{ GetErrorMessage('clientEmail')}}</mat-error>\r\n                           \r\n                    </mat-form-field>\r\n                </div>\r\n       \r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-6 float-left\">\r\n            <mat-form-field class=\"w-100\">\r\n                    <label *ngIf=\"readOnly\"><strong>Secondary Client  Email </strong></label>\r\n                <input [readonly]=\"readOnly\" formControlName=\"clientEmail2\" matInput [placeholder]=\"GetPlaceHolder('clientEmail2')\">\r\n                <mat-error *ngIf=\"personalDetailsForm.controls['clientEmail2'].invalid  && (personalDetailsForm.controls['clientEmail2'].dirty || personalDetailsForm.controls['clientEmail2'].touched)\">Please enter valid Email</mat-error>\r\n           \r\n              \r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-6 float-left\">\r\n                <mat-form-field class=\"w-100\">\r\n                        <label *ngIf=\"readOnly\"><strong>Other Client Email </strong></label>\r\n                    <input [readonly]=\"readOnly\" formControlName=\"clientEmail3\" matInput [placeholder]=\"GetPlaceHolder('clientEmail3')\" >\r\n                    <mat-error *ngIf=\"personalDetailsForm.controls['clientEmail3'].invalid  && (personalDetailsForm.controls['clientEmail3'].dirty || personalDetailsForm.controls['clientEmail3'].touched)\">Please enter valid Email</mat-error>\r\n                   \r\n                   \r\n                </mat-form-field>\r\n            </div>\r\n         \r\n    </div>\r\n    <div class=\"row m-0\">       \r\n      \r\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-6 float-left\">\r\n                    <mat-form-field class=\"w-100\">\r\n                            <label *ngIf=\"readOnly\" ><strong>Other Client Email </strong></label>\r\n                        <input  [readonly]=\"readOnly\" formControlName=\"clientEmail4\" matInput [placeholder]=\"GetPlaceHolder('clientEmail4')\"  >\r\n                       <mat-error *ngIf=\"personalDetailsForm.controls['clientEmail4'].invalid  && (personalDetailsForm.controls['clientEmail4'].dirty || personalDetailsForm.controls['clientEmail4'].touched)\">Please enter valid Email</mat-error>\r\n                                        \r\n                    </mat-form-field>\r\n                </div>       \r\n        \r\n    </div>\r\n</form>\r\n<div class=\"w-100 float-left d-block table-info px-4 py-2 table-info footer-height\" >\r\n    <div class=\"px-2 float-right\" *ngIf=\"disable\">\r\n        <button mat-button class=\"btn btn-info\" (click)=\" MakeFieldEditable()\"><i class=\"fa fa-pencil-square-o\"\r\n                aria-hidden=\"true\"></i> Edit</button>\r\n    </div>\r\n    <div class=\"px-2 float-right\" *ngIf=\"!disable\">\r\n        <button mat-button class=\"btn btn-success\" [disabled]=\"!personalDetailsForm.valid \" (click)=\"UpdateClient()\"><i class=\"fa fa-save\" aria-hidden=\"true\"></i>\r\n            Save</button>\r\n    </div>\r\n    <div class=\"px-2 float-right\" *ngIf=\"!disable\">\r\n        <button mat-button class=\"btn btn-secondary\" (click)=\"DiscardChanges()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n            Cancel</button>\r\n    </div>\r\n    <div class=\"px-2 float-right\">\r\n            <button  mat-button class=\"btn btn-info\" [routerLink]=\"['/client']\"><i class=\"fa fa-backward\" aria-hidden=\"true\"></i> Back</button>\r\n            </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/client/components/client-details-personal-details.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/client/components/client-details-personal-details.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/layout/client/components/client-details-personal-details.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/client/components/client-details-personal-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ClientDetailsPersonalDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsPersonalDetailsComponent", function() { return ClientDetailsPersonalDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client-service.service */ "./src/app/layout/client/client-service.service.ts");
/* harmony import */ var _current_clientdata_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../current-clientdata-service.service */ "./src/app/current-clientdata-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_client_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/client.model */ "./src/app/layout/client/model/client.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientDetailsPersonalDetailsComponent = /** @class */ (function () {
    function ClientDetailsPersonalDetailsComponent(clientService, currentClientdataService, router, formBuilder) {
        this.clientService = clientService;
        this.currentClientdataService = currentClientdataService;
        this.router = router;
        this.formBuilder = formBuilder;
        /****** Created By Shubham Mishra on 19-Nov-2018 ************/
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //used  to emit event to parent controller 
        this.onClientDetailsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //used  to emit event to parent controller 
        this.disable = true; // this variable is used to bind the disabled attribute of input to make input fields editable and non editable
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'; // this regex will be used to validate email pattern
        /**** Writen on 23 Nov 2018 ***********/
        this.readOnly = true; // this variable will be used to make the form field non editable
        // following array will hold the list of country and willbe used to shown as dropdown in country field 
        this.CountryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
    }
    /****** This fuction is used to make the form field editable  */
    ClientDetailsPersonalDetailsComponent.prototype.MakeFieldEditable = function () {
        if (this.disable) {
            this.disable = false;
            this.readOnly = false;
            //this.personalDetailsForm.enable();
        }
        else {
            this.disable = true;
            this.readOnly = true;
            //this.personalDetailsForm.disable();
        }
    };
    /****** This function is used to discard changes done by user, and replace changed data with previous data */
    ClientDetailsPersonalDetailsComponent.prototype.DiscardChanges = function () {
        this.currentClientDetails = this.currentClientDetailsBackup;
        this.LoadValuesInPersonalDetailsForm();
        this.onCancel.emit(this.currentClientDetails);
        this.MakeFieldEditable();
    };
    /***** This function is used to update details of a client, following fucntion is making a call to api and sending the modal as parameter */
    ClientDetailsPersonalDetailsComponent.prototype.UpdateClient = function () {
        this.currentClientDetails.ClientName = this.personalDetailsForm.controls['clientName'].value;
        this.currentClientDetails.Address = this.personalDetailsForm.controls['clientAddress'].value;
        this.currentClientDetails.EmailID = this.personalDetailsForm.controls['clientEmail'].value;
        this.currentClientDetails.EmailID2 = this.personalDetailsForm.controls['clientEmail2'].value;
        this.currentClientDetails.EmailID3 = this.personalDetailsForm.controls['clientEmail3'].value;
        this.currentClientDetails.EmailID4 = this.personalDetailsForm.controls['clientEmail4'].value;
        this.currentClientDetails.Country = this.personalDetailsForm.controls['country'].value;
        this.onClientDetailsChange.emit(this.currentClientDetails);
        this.MakeFieldEditable();
    };
    /***** Writen by Shubham  Mishra on 21 Nov 2018 ****
     * ******* This fucntion is used to create a reactive form ************/
    ClientDetailsPersonalDetailsComponent.prototype.CreatePersonalDetailsForm = function () {
        this.personalDetailsForm = this.formBuilder.group({
            clientName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z ]+$')]],
            clientAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            clientEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]],
            clientEmail2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)],
            clientEmail3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)],
            clientEmail4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    ClientDetailsPersonalDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentClientDetails) {
            this.CreatePersonalDetailsForm();
            this.LoadValuesInPersonalDetailsForm();
            this.filteredOptions = this.personalDetailsForm.controls['country'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) { return _this._filter(value); }));
        }
    };
    /**** This function is used to filter the name of country from country List  */
    ClientDetailsPersonalDetailsComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.CountryList.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
    };
    /******** Created by SHubham Kumar Mishra on 22 nov 2018 **********
     ********* following method are used for geting validation error message dynamically **********/
    ClientDetailsPersonalDetailsComponent.prototype.GetErrorMessage = function (controlName) {
        switch (controlName) {
            case 'clientName':
                if (this.personalDetailsForm.controls['clientName'].errors.required) {
                    return "Client name can not be empty";
                }
                if (this.personalDetailsForm.controls['clientName'].errors.pattern) {
                    return "Client name can only contails text";
                }
            case 'clientEmail':
                if (this.personalDetailsForm.controls['clientEmail'].errors.required) {
                    return "Primary Email can not be empty";
                }
                if (this.personalDetailsForm.controls['clientEmail'].errors.pattern) {
                    return "Please enter valid Email";
                }
            default: return " ";
        }
    };
    /******* Created by Shubham Kumar Mishra on 22 Nov 2018 ***********
     * ******* Following method is to load the values into the form ********/
    ClientDetailsPersonalDetailsComponent.prototype.LoadValuesInPersonalDetailsForm = function () {
        this.personalDetailsForm.controls['clientName'].setValue(this.currentClientDetails.ClientName);
        this.personalDetailsForm.controls['clientAddress'].setValue(this.currentClientDetails.Address);
        if (this.currentClientDetails.EmailID != null && this.currentClientDetails.EmailID != '' && this.currentClientDetails.EmailID != undefined) {
            this.personalDetailsForm.controls['clientEmail'].setValue(this.currentClientDetails.EmailID.trim());
        }
        if (this.currentClientDetails.EmailID2 != null && this.currentClientDetails.EmailID2 != '' && this.currentClientDetails.EmailID2 != undefined) {
            this.personalDetailsForm.controls['clientEmail2'].setValue(this.currentClientDetails.EmailID2.trim());
        }
        if (this.currentClientDetails.EmailID3 != null && this.currentClientDetails.EmailID3 != '' && this.currentClientDetails.EmailID3 != undefined) {
            this.personalDetailsForm.controls['clientEmail3'].setValue(this.currentClientDetails.EmailID3.trim());
        }
        if (this.currentClientDetails.EmailID4 != null && this.currentClientDetails.EmailID4 != '' && this.currentClientDetails.EmailID4 != undefined) {
            this.personalDetailsForm.controls['clientEmail4'].setValue(this.currentClientDetails.EmailID4.trim());
        }
        this.personalDetailsForm.controls['country'].setValue(this.currentClientDetails.Country);
    };
    /****** Created on 27 Nov 2017 ************/
    /****** Following method will be used to det the placeholder for mat input  ************/
    ClientDetailsPersonalDetailsComponent.prototype.GetPlaceHolder = function (str) {
        if (!this.readOnly) {
            switch (str) {
                case 'clientName': return "Client Name ";
                case 'clientAddress': return "Client Address ";
                case 'country': return "Country ";
                case 'clientEmail': return "Primary Email  ";
                case 'clientEmail2': return "Secondary Email ";
                case 'clientEmail3': return "Other Email";
                case 'clientEmail4': return "Other Email";
                default: return " ";
            }
        }
        else {
            return " ";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onCancel'),
        __metadata("design:type", Object)
    ], ClientDetailsPersonalDetailsComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onClientDetailsChange'),
        __metadata("design:type", Object)
    ], ClientDetailsPersonalDetailsComponent.prototype, "onClientDetailsChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('currentClientDetails'),
        __metadata("design:type", _model_client_model__WEBPACK_IMPORTED_MODULE_5__["Client"])
    ], ClientDetailsPersonalDetailsComponent.prototype, "currentClientDetails", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('currentClientDetailsBackup'),
        __metadata("design:type", _model_client_model__WEBPACK_IMPORTED_MODULE_5__["Client"])
    ], ClientDetailsPersonalDetailsComponent.prototype, "currentClientDetailsBackup", void 0);
    ClientDetailsPersonalDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-details-personal-details',
            template: __webpack_require__(/*! ./client-details-personal-details.component.html */ "./src/app/layout/client/components/client-details-personal-details.component.html"),
            styles: [__webpack_require__(/*! ./client-details-personal-details.component.scss */ "./src/app/layout/client/components/client-details-personal-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_client_service_service__WEBPACK_IMPORTED_MODULE_1__["ClientServiceService"], _current_clientdata_service_service__WEBPACK_IMPORTED_MODULE_2__["CurrentClientdataServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ClientDetailsPersonalDetailsComponent);
    return ClientDetailsPersonalDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/client/components/client-details-summary.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/layout/client/components/client-details-summary.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 float-left table-active py-4 px-2\" *ngIf=\"currentClientDetails\">\r\n      <div class=\"row mx-0 my-2\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                  <div class=\"summary-lebel float-left\"><strong>Client Name :</strong></div>\r\n                  <div class=\"float-left\">{{currentClientDetails.ClientName}}</div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                  <div class=\"summary-lebel float-left\"><strong>Address:</strong></div>\r\n                  <div class=\"float-left\">{{currentClientDetails.Address}}</div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                  <div class=\"summary-lebel float-left\"><strong>Country:</strong></div>\r\n                  <div class=\"float-left\">{{currentClientDetails.Country}}</div>\r\n            </div>\r\n\r\n      </div>\r\n      <div class=\"row mx-0 my-2\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                  <div class=\"summary-lebel float-left\"><strong>Primary Email ID :</strong></div>\r\n                  <div class=\"float-left\">{{currentClientDetails.EmailID}}</div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                  <div class=\"summary-lebel float-left\"><strong>Secondry Email ID :</strong></div>\r\n                  <div class=\"float-left\">{{currentClientDetails.EmailID2}}</div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                  <div class=\"summary-lebel float-left\"><strong>Email ID Other :</strong></div>\r\n                  <div class=\"float-left\">{{currentClientDetails.EmailID2}}</div>\r\n            </div>\r\n\r\n      </div>\r\n      <div class=\"row mx-0 my-2\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                  <div class=\"summary-lebel float-left\"><strong>Email ID Other:</strong></div>\r\n                  <div class=\"float-left\">{{currentClientDetails.EmailID4}}</div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                  <div class=\"summary-lebel float-left\"><strong>Primary Co-Client :</strong></div>\r\n                  <div class=\"float-left\">{{currentClientDetails.CoClient}}</div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                  <div class=\"summary-lebel float-left\"><strong>Secondry Co-Client:</strong></div>\r\n                  <div class=\"float-left\">{{currentClientDetails.CoClient2}}</div>\r\n            </div>\r\n\r\n      </div>\r\n      <div class=\"row mx-0 my-2\">\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                  <div class=\"summary-lebel float-left\"><strong> Co-Client Other :</strong></div>\r\n                  <div class=\"float-left\">{{currentClientDetails.CoClient3}}</div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-md-4 col-sm-12 col-12 float-left\">\r\n                  <div class=\"summary-lebel float-left\"><strong>Co-Client Other :</strong></div>\r\n                  <div class=\"float-left\">{{currentClientDetails.CoClient4}}</div>\r\n            </div>\r\n      </div>\r\n</div>\r\n<div class=\"w-100 float-left d-block table-info px-4 py-2 table-info footer-height\">   \r\n</div>"

/***/ }),

/***/ "./src/app/layout/client/components/client-details-summary.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/layout/client/components/client-details-summary.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".summary-lebel {\n  width: 150px; }\n"

/***/ }),

/***/ "./src/app/layout/client/components/client-details-summary.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/client/components/client-details-summary.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClientDetailsSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsSummaryComponent", function() { return ClientDetailsSummaryComponent; });
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

var ClientDetailsSummaryComponent = /** @class */ (function () {
    function ClientDetailsSummaryComponent() {
    }
    ClientDetailsSummaryComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('currentClientDetails'),
        __metadata("design:type", Object)
    ], ClientDetailsSummaryComponent.prototype, "currentClientDetails", void 0);
    ClientDetailsSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-details-summary',
            template: __webpack_require__(/*! ./client-details-summary.component.html */ "./src/app/layout/client/components/client-details-summary.component.html"),
            styles: [__webpack_require__(/*! ./client-details-summary.component.scss */ "./src/app/layout/client/components/client-details-summary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientDetailsSummaryComponent);
    return ClientDetailsSummaryComponent;
}());



/***/ }),

/***/ "./src/app/layout/client/model/client.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/client/model/client.model.ts ***!
  \*****************************************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());



/***/ })

}]);
//# sourceMappingURL=client-client-details-client-details-module.js.map