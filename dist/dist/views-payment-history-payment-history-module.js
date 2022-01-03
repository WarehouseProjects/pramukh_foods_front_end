(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-payment-history-payment-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/payment-history/payment-history.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/payment-history/payment-history.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header d-flex justify-content-between align-items-center\">Payment\n                    <div class=\"dropdown pull-right\">\n                        <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                            type=\"button\">\n                            <i class=\"fa fa-file-export mr-2\"></i>\n                            Export\n                        </button>\n                        <div id=\"myDropdown\" class=\"dropdown-content\">\n                            <a href=\"javascript:void(0)\" (click)=\"exportCsv()\"\n                                style=\"font-size: small; text-decoration: none;\">\n                                Export to XLSX\n                            </a>\n                            <!-- <a href=\"javascript:void(0)\"\n                                (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n                            <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n                        </div>\n                        <a [routerLink]=\"['/customer-user/customer-invoice']\" [queryParams]='{id: customerId}'\n                            class=\"btn btn-md btn-secondary\" type=\"button\">Back</a>\n                    </div>\n                </div>\n                <div class=\"card-body p-4\">\n                    <div class=\"customer-content\" style=\"padding:0 0 30px;\">\n                        <ul *ngIf=\"customerId\" class=\"d-flex flex-wrap\" style=\"width: 100%;\">\n                            <li class=\"d-flex\" style=\"width: 50%; white-space: nowrap;\">\n                                <strong>Customer Name : </strong>\n                                <span class=\"pl-2\">\n                                    {{paymentList?.cusotmer_detail?.customer_name}}\n                                </span>\n                            </li>\n                            <li class=\"d-flex\" style=\"width: 50%; white-space: nowrap;\">\n                                <strong>Email Address : </strong>\n                                <span class=\"pl-2\">\n                                    {{paymentList?.cusotmer_detail?.email_address}}\n                                </span>\n                            </li>\n                            <li class=\"d-flex\" style=\"width: 50%; white-space: nowrap;\">\n                                <strong>Phone No : </strong>\n                                <span class=\"pl-2\" style=\"padding-right: 220px;\">\n                                    {{paymentList?.cusotmer_detail?.phone | mask: '(000) 000-0000'}}\n                                </span>\n                            </li>\n                            <li class=\"d-flex\" style=\"width: 50%; white-space: nowrap;\">\n                                <strong>Available Credit : </strong>\n                                <span class=\"pl-2\">\n                                    {{paymentList?.cusotmer_detail?.available_credit ? (\"$\n                                    \"+(paymentList?.cusotmer_detail?.available_credit | number : '1.2-2')) : \"$ 0.00\"}}\n                                </span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"responsive-table rounded mb-4\">\n                        <form class=\"row justify-content-start align-items-center mb-0\">\n                            <!-- <div class=\"col-sm-12 mb-2\">\n                                <h4 class=\"d-block\">Filter BY :</h4>\n                            </div> -->\n                            <div class=\"col-md-3 col-sm-12\">\n                                <div class=\"form-group\">\n                                    <label>From Date</label>\n                                    <input [(ngModel)]=\"selectedFromDate\" [ngModelOptions]=\"{standalone: true}\"\n                                        type=\"text\" placeholder=\"From Date\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" class=\"form-control\" bsDatepicker>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 col-sm-12\">\n                                <div class=\"form-group\">\n                                    <label>To Date</label>\n                                    <input [(ngModel)]=\"selectedToDate\" [ngModelOptions]=\"{standalone: true}\"\n                                        type=\"text\" placeholder=\"To Date\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" class=\"form-control\" bsDatepicker>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3 col-sm-12\">\n                                <div class=\"form-group\">\n                                    <label>Payment Method</label>\n                                    <select [(ngModel)]=\"selectedPaymentMethod\" [ngModelOptions]=\"{standalone: true}\"\n                                        class=\"form-control\" name=\"Category-Name\">\n                                        <option value=\"\">All</option>\n                                        <option value=\"CASH\">Cash</option>\n                                        <option value=\"CHEQUE\">Check</option>\n                                        <!-- <option value=\"ONLINE\">Credit Card</option> -->\n                                    </select>\n                                </div>\n                            </div>\n                            <!-- <div class=\"col-md-3 col-sm-12\">\n                                <div class=\"form-group\">\n                                    <label>Search by </label>\n                                    <input [(ngModel)]=\"selectedTransactionNo\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Enter Check/Transaction or reference no#\"\n                                        type=\"text\">\n                                </div>\n                            </div> -->\n                            <div class=\"col-md-3 col-sm-12 mt-2\">\n                                <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\"\n                                    type=\"button\">Filter</button>\n                            </div>\n                        </form><br>\n                        <!-- <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n                            <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                                type=\"button\"><i class=\"fa fa-file-export mr-2\n                            \"></i>Export</button>\n                            <div id=\"myDropdown\" class=\"dropdown-content\">\n                                <a href=\"javascript:void(0)\" (click)=\"exportCsv()\">Export to CSV</a>\n                                <a href=\"javascript:void(0)\"\n                                    (click)=\"commonService.exportPDF(true, 3, 'paymentHistoryList');rerender();\">Export\n                                    to PDF</a>\n                            </div>\n                        </div> -->\n                        <perfect-scrollbar>\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                                class=\"data row-border hover table order-table border\" id=\"excel-table\">\n                                <thead>\n                                    <tr>\n                                        <th>Invoice No#</th>\n                                        <th>Invoice Date</th>\n                                        <th>Payment<br>Method</th>\n                                        <th>Check/<br>Transaction/<br>\n                                            Reference No.</th>\n                                        <th>Payment Date</th>\n                                        <th>Image</th>\n                                        <th>Amount Received</th>\n                                        <!-- <th>Available Credit</th> -->\n                                        <th>Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <ng-container *ngIf=\"customerId\">\n                                        <tr *ngFor=\"let payment of paymentList?.payment_detail;let i = index;\">\n                                            <td>{{payment.invoice_no || \"-\"}}</td>\n                                            <td>{{payment.invoice_date ? (payment.invoice_date | date: 'MM-dd-yyyy') :\n                                                \"-\"}}</td>\n                                            <td>{{payment.method || \"-\"}}</td>\n                                            <td>\n                                                {{payment.method != 'CASH'? payment.reference_no : '-'}}\n                                            </td>\n                                            <td>\n                                                <span class=\"text-success\">\n                                                    {{payment.payment_date ? (payment.payment_date| date: 'MM-dd-yyyy')\n                                                    : \"-\"}}\n                                                </span>\n                                            </td>\n                                            <td>\n                                                <span *ngIf=\"payment.method != 'CASH'\" class=\"product-image\"\n                                                    style=\"cursor: pointer;\">\n                                                    <img [src]=\"payment?.image\" (error)=\"onImgError($event)\"\n                                                        (click)=\"openModal(imagePreview, payment?.id, payment?.image)\">\n                                                </span>\n                                            </td>\n                                            <td>\n                                                {{payment.amount_recieved ? (\"$ \"+(payment.amount_recieved | number :\n                                                '1.2-2')) : \"$ 0.00\"}}\n                                            </td>\n                                            <!-- <td>\n                                                {{payment.available_credit ? (\"$ \"+(payment.available_credit | number :\n                                                '1.2-2')) : \"$ 0.00\"}}\n                                            </td> -->\n                                            <td>\n                                                <div class=\"d-flex align-items-center justify-content-center\">\n                                                    <a class=\"text-dark mx-2\" *ngIf=\"payment.method != 'CASH'\"\n                                                        href=\"javascript:void(0)\"\n                                                        (click)=\"openModal(imageEdit, payment?.id, payment?.image);\">\n                                                        <i class=\"fa fa-pencil\"></i>\n                                                    </a>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                        <tr *ngIf=\"paymentList?.payment_detail?.length == 0\">\n                                            <td colspan=\"8\" class=\"no-data-available\">No Data Found !</td>\n                                        </tr>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"!customerId\">\n                                        <tr *ngFor=\"let payment of paymentList;let i = index;\">\n                                            <td>{{payment.method || \"-\"}}</td>\n                                            <td>{{payment.reference_no || \"-\"}}</td>\n                                            <td>{{payment.payment_date ? (payment.payment_date| date: 'MM-dd-yyyy') :\n                                                \"-\"}}</td>\n                                            <td>\n                                                <span class=\"product-image\" style=\"cursor: pointer;\"\n                                                    *ngIf=\"payment.method != 'CASH'\">\n                                                    <img [src]=\"payment?.image\" (error)=\"onImgError($event)\"\n                                                        (click)=\"openModal(imagePreview, payment?.id, payment?.image)\">\n                                                </span>\n                                            </td>\n                                            <td>{{payment.amount_recieved ? (\"$ \"+payment.amount_recieved) : \"$ 0\"}}\n                                            </td>\n                                        </tr>\n                                        <tr *ngIf=\"paymentList?.length == 0\">\n                                            <td colspan=\"5\" class=\"no-data-available\">No Data Found !</td>\n                                        </tr>\n                                    </ng-container>\n                                </tbody>\n                            </table>\n                        </perfect-scrollbar>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #imagePreview>\n    <div class=\"modal-content\">\n        <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n            <img [src]=\"imageSrc\" height=\"100%\" width=\"100%\">\n        </div>\n        <div class=\"modal-footer justify-content-center\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Close</button>\n        </div>\n    </div>\n</ng-template>\n\n\n<ng-template #imageEdit>\n    <div class=\"modal-content\">\n        <form [formGroup]=\"editImage\" (ngSubmit)=\"submitImageForm()\" #formDir=\"ngForm\" novalidate>\n            <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n                <h2 class=\"font-weight-bold mb-4 text-primary\">Edit Image</h2>\n                <div class=\"row\">\n                    <div class=\"col-md-10\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-sm-5 col-form-label\" for=\"image\">Image </label>\n                            <div class=\"col-sm-7\">\n                                <div class=\"mb-3\">\n                                    <img class=\"mr-5\" src=\"{{imageSrc}}\" height=\"150\" width=\"200\"\n                                        (error)=\"onImgError($event)\">\n                                </div>\n                                <input #myPreviewInput formControlName=\"image\" (change)=\"onFileChange($event)\"\n                                    type=\"file\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submittedUrl && editImage.controls.image.invalid) || editImage.controls.image.touched\">\n                                    <!-- <div *ngIf=\"!imageSrc\" class=\"err-msg\">\n                                        Thumbnail is required.\n                                    </div>\n                                    <div *ngIf=\"editImage.controls.image.invalid\" class=\"err-msg\">\n                                        Please upload valid Image.\n                                    </div> -->\n                                    <div *ngIf=\"editImage.hasError('required','image')\" class=\"err-msg\">\n                                        Thumbnail is required.\n                                    </div>\n                                    <div *ngIf=\"!editImage.hasError('required','image') && editImage.controls.image.invalid\"\n                                        class=\"err-msg\">\n                                        Please upload valid Image.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"submit\" class=\"btn btn-primary\">Edit</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalRef.hide()\">Close</button>\n            </div>\n        </form>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "./src/app/shared/services/payment-history.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/payment-history.service.ts ***!
  \************************************************************/
/*! exports provided: PaymentHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryService", function() { return PaymentHistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var PaymentHistoryService = /** @class */ (function () {
    function PaymentHistoryService(http) {
        this.http = http;
    }
    PaymentHistoryService.prototype.paymenthistory = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/paymenthistory/listview/", data);
    };
    PaymentHistoryService.prototype.allpaymenthistory = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/paymenthistory/allpaymenthistory/", data);
    };
    PaymentHistoryService.prototype.updateCheckImage = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/update_check_img/", data);
    };
    PaymentHistoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PaymentHistoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PaymentHistoryService);
    return PaymentHistoryService;
}());



/***/ }),

/***/ "./src/app/views/payment-history/payment-history-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/payment-history/payment-history-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentHistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryRoutingModule", function() { return PaymentHistoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payment_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-history.component */ "./src/app/views/payment-history/payment-history.component.ts");




var routes = [
    {
        path: '',
        data: {
            title: 'Payment'
        },
        children: [
            {
                path: '',
                component: _payment_history_component__WEBPACK_IMPORTED_MODULE_3__["PaymentHistoryComponent"],
                data: {
                    title: 'List'
                }
            },
        ]
    }
];
var PaymentHistoryRoutingModule = /** @class */ (function () {
    function PaymentHistoryRoutingModule() {
    }
    PaymentHistoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PaymentHistoryRoutingModule);
    return PaymentHistoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/payment-history/payment-history.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/payment-history/payment-history.component.ts ***!
  \********************************************************************/
/*! exports provided: PaymentHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryComponent", function() { return PaymentHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_payment_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/payment-history.service */ "./src/app/shared/services/payment-history.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");













var PaymentHistoryComponent = /** @class */ (function () {
    function PaymentHistoryComponent(titleService, toastr, paymentHistoryService, modalService, router, route, datePipe, commonService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.paymentHistoryService = paymentHistoryService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.datePipe = datePipe;
        this.commonService = commonService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.selectedFromDate = "";
        this.selectedToDate = "";
        this.selectedPaymentMethod = "";
        this.selectedTransactionNo = "";
        this.imageSrc = '';
        this.submittedUrl = false;
        this.templateRefConfig = {
            class: "modal-dialog-centered modal-lg",
        };
    }
    PaymentHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Payment");
        this.route.queryParams.subscribe(function (param) {
            _this.customerId = param.id;
        });
        this.editImage = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"]({
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required,
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_12__["RxwebValidators"].extension({
                    extensions: ["png", "jpg", "jpeg", "emf", "jpe", "jfif", "bmp", "gif", "wmf", "dib", "tif", "tiff"]
                })
            ]),
            imageSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required])
        });
        this.getPaymentList();
    };
    PaymentHistoryComponent.prototype.getPaymentList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 100,
            order: [4, 'desc'],
            serverSide: true,
            processing: true,
            searchDelay: 1300,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page = parseInt(dataTablesParameters.start) / parseInt(dataTablesParameters.length) + 1;
                dataTablesParameters.limit = dataTablesParameters.length;
                dataTablesParameters.search_value = dataTablesParameters.search.value;
                // sorting
                dataTablesParameters.order[0].column == 0 ? dataTablesParameters.invoice_no = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("invoice_no") : ("-invoice_no") : "";
                dataTablesParameters.order[0].column == 1 ? dataTablesParameters.invoice_date = (dataTablesParameters.order[0].column == 1 && dataTablesParameters.order[0].dir == "asc") ? ("invoice_date") : ("-invoice_date") : "";
                dataTablesParameters.order[0].column == 2 ? dataTablesParameters.method = (dataTablesParameters.order[0].column == 2 && dataTablesParameters.order[0].dir == "asc") ? ("method") : ("-method") : "";
                dataTablesParameters.order[0].column == 3 ? dataTablesParameters.reference_no = (dataTablesParameters.order[0].column == 3 && dataTablesParameters.order[0].dir == "asc") ? ("reference_no") : ("-reference_no") : "";
                dataTablesParameters.order[0].column == 4 ? dataTablesParameters.payment_date = (dataTablesParameters.order[0].column == 4 && dataTablesParameters.order[0].dir == "asc") ? ("payment_date") : ("-payment_date") : "";
                dataTablesParameters.order[0].column == 6 ? dataTablesParameters.amount_recieved = (dataTablesParameters.order[0].column == 6 && dataTablesParameters.order[0].dir == "asc") ? ("amount_recieved") : ("-amount_recieved") : "";
                // dataTablesParameters.order[0].column == 7 ? dataTablesParameters.available_credit = (dataTablesParameters.order[0].column == 7 && dataTablesParameters.order[0].dir == "asc") ? ("available_credit") : ("-available_credit") : "";
                // filter
                dataTablesParameters.from_date = _this.datePipe.transform(_this.selectedFromDate, 'yyyy-MM-dd') || "";
                dataTablesParameters.to_date = _this.datePipe.transform(_this.selectedToDate, 'yyyy-MM-dd') || "";
                dataTablesParameters.payment_method = _this.selectedPaymentMethod;
                var method = _this.paymentHistoryService
                    .allpaymenthistory(dataTablesParameters);
                if (_this.customerId) {
                    dataTablesParameters.customer_id = _this.customerId;
                    _this.datatableParams = dataTablesParameters;
                    method = _this.paymentHistoryService
                        .paymenthistory(dataTablesParameters);
                }
                _this.datatableParams = dataTablesParameters;
                method.subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.paymentList = resData.data;
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: dataTablesParameters.search_value == "" ? resData.total_record : resData.filter_record,
                            data: []
                        });
                    }
                    else {
                        _this.toastr.error('', resData.message);
                    }
                }, function (err) {
                    _this.toastr.error('', err.error.message);
                });
            },
            columns: [
                { data: 'invoice_no', searchable: true, orderable: true },
                { data: 'invoice_date', searchable: true, orderable: true },
                { data: 'method', searchable: true, orderable: true },
                { data: 'reference_no', searchable: true, orderable: true },
                { data: 'payment_date', searchable: true, orderable: true },
                { data: 'image', searchable: false, orderable: false },
                { data: 'amount_recieved', searchable: true, orderable: true },
                // { data: 'available_credit', searchable: true, orderable: true }
                { name: 'action', searchable: false, orderable: false }
            ]
        };
    };
    PaymentHistoryComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    PaymentHistoryComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    PaymentHistoryComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    PaymentHistoryComponent.prototype.onImgError = function (event) {
        event.target.src = 'assets/images/placeholder.png';
    };
    PaymentHistoryComponent.prototype.exportCsv = function () {
        var _this = this;
        var method = this.paymentHistoryService
            .allpaymenthistory(this.datatableParams);
        if (this.customerId) {
            this.datatableParams.customer_id = this.customerId;
            this.datatableParams = this.datatableParams;
            method = this.paymentHistoryService
                .paymenthistory(this.datatableParams);
        }
        this.datatableParams = this.datatableParams;
        method.subscribe(function (response) {
            // this.paymentHistoryService.allpaymenthistory(this.datatableParams).subscribe(response => {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.payment_detail.map(function (x) { return ({
                    'Invoice No': x.invoice_no || "-",
                    'Invoice Date': _this.datePipe.transform(x.invoice_date, 'MM-dd-yyyy') || "-",
                    'Payment Method': x.method || "-",
                    'Check/ Transaction/ Reference no': x.reference_no || "-",
                    'Payment Date': _this.datePipe.transform(x.payment_date, 'MM-dd-yyyy') || "-",
                    'Amount Received': x.amount_recieved ? "$" + parseFloat(x.amount_recieved).toFixed(2) : "$0.00",
                }); });
                _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, 'Payment List');
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    PaymentHistoryComponent.prototype.openModal = function (template, id, imageSrc) {
        this.payment_history_id = id;
        this.imageSrc = imageSrc;
        this.modalRef = this.modalService.show(template, this.templateRefConfig);
    };
    PaymentHistoryComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            if (file) {
                this.editImage.patchValue({
                    imageSource: file
                });
                var reader = new FileReader();
                reader.onloadend = function (event) {
                    _this.imageSrc = event.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    };
    PaymentHistoryComponent.prototype.submitImageForm = function () {
        var _this = this;
        this.submittedUrl = true;
        if (this.editImage.controls.image.valid) {
            var formData = new FormData();
            formData.append("payment_history_id", this.payment_history_id);
            if (this.editImage.get('imageSource').value) {
                formData.append("check_image", this.editImage.get('imageSource').value);
            }
            this.paymentHistoryService.updateCheckImage(formData).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.editImage.reset();
                    for (var control in _this.editImage.controls) {
                        _this.editImage.controls[control].setErrors(null);
                    }
                    _this.modalRef.hide();
                    _this.submittedUrl = false;
                    // this.myPreviewInput.nativeElement.value = null;
                    _this.toastr.success('', "Image edited successfully.");
                    _this.rerender();
                }
                else {
                    _this.toastr.error('', resData.message);
                }
            });
        }
    };
    PaymentHistoryComponent.prototype.clearForm = function () {
        this.editImage.reset();
        for (var control in this.editImage.controls) {
            this.editImage.controls[control].setErrors(null);
        }
        this.myPreviewInput.nativeElement.value = "";
    };
    PaymentHistoryComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _shared_services_payment_history_service__WEBPACK_IMPORTED_MODULE_3__["PaymentHistoryService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myPreviewInput'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PaymentHistoryComponent.prototype, "myPreviewInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], PaymentHistoryComponent.prototype, "dtElement", void 0);
    PaymentHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-history',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/payment-history/payment-history.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _shared_services_payment_history_service__WEBPACK_IMPORTED_MODULE_3__["PaymentHistoryService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"]])
    ], PaymentHistoryComponent);
    return PaymentHistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/payment-history/payment-history.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/payment-history/payment-history.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryModule", function() { return PaymentHistoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _payment_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-history.component */ "./src/app/views/payment-history/payment-history.component.ts");
/* harmony import */ var _payment_history_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-history-routing.module */ "./src/app/views/payment-history/payment-history-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _shared_services_payment_history_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/payment-history.service */ "./src/app/shared/services/payment-history.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");











var maskConfig = {
    validation: false,
};
var PaymentHistoryModule = /** @class */ (function () {
    function PaymentHistoryModule() {
    }
    PaymentHistoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_payment_history_component__WEBPACK_IMPORTED_MODULE_3__["PaymentHistoryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _payment_history_routing_module__WEBPACK_IMPORTED_MODULE_4__["PaymentHistoryRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NgxMaskModule"].forRoot(maskConfig)
            ],
            providers: [
                _shared_services_payment_history_service__WEBPACK_IMPORTED_MODULE_8__["PaymentHistoryService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ]
        })
    ], PaymentHistoryModule);
    return PaymentHistoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-payment-history-payment-history-module.js.map