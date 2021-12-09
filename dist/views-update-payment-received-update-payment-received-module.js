(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-update-payment-received-update-payment-received-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/update-payment-received/update-payment-received.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/update-payment-received/update-payment-received.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header d-flex justify-content-between align-items-center\">Payment Method\n                    <div class=\"pull-right\">\n                        <a (click)=\"goPreviousUrl()\" class=\"btn btn-md btn-secondary\" type=\"button\">Back</a>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"addPaymentMethodForm\" (ngSubmit)=\"uncheckAll();\" #formDir=\"ngForm\" novalidate\n                        class=\"customer-content sales-content payment-received-content\">\n                        <ul class=\"d-flex\">\n                            <li>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">Payment Method</label>\n                                    <select (change)=\"changeMode()\" [(ngModel)]=\"selectedMode\" formControlName=\"mode\"\n                                        class=\"form-control\">\n                                        <option value=\"CASH\">Cash</option>\n                                        <option value=\"CHECK\">Check</option>\n                                    </select>\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.mode.invalid) || addPaymentMethodForm.controls.mode.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','mode')\" class=\"err-msg\">\n                                            Payment mode is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <li *ngIf=\"selectedMode == 'CHECK'\">\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">{{selectedMode == 'CHECK' ? \"Check No\" :\n                                        \"Transaction No\"}}</label>\n                                    <input formControlName=\"cheque_no\" class=\"form-control\" id=\"name\" type=\"text\"\n                                        placeholder=\"Enter {{selectedMode == 'CHECK' ? 'Check No' : 'Transaction No'}}\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.cheque_no.invalid) || addPaymentMethodForm.controls.cheque_no.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','cheque_no')\"\n                                            class=\"err-msg\">{{selectedMode == 'CHECK' ? \"Check no\" : \"Transaction\n                                            no\"}} is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <!-- <li>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">Bank Name :</label>\n                                    <input formControlName=\"bank_name\" class=\"form-control\" id=\"name\" type=\"text\"\n                                        placeholder=\"Enter Bank Name\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.bank_name.invalid) || addPaymentMethodForm.controls.bank_name.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','bank_name')\"\n                                            class=\"err-msg\">Bank name is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li> -->\n                            <li>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">Amount Received</label>\n                                    <input [(ngModel)]=\"ammountReceivedValue\" (change)=\"onAmountChange();\"\n                                        formControlName=\"ammount_received\" class=\"form-control quantity\" id=\"name\"\n                                        type=\"number\" placeholder=\"Enter Amount Received\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.ammount_received.invalid) || addPaymentMethodForm.controls.ammount_received.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','ammount_received')\"\n                                            class=\"err-msg\">Amount received is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <li *ngIf=\"selectedMode == 'CHECK'\">\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">Image</label>\n                                    <input (change)=\"onImageFileChange($event)\" formControlName=\"image\"\n                                        class=\"form-control\" id=\"name\" type=\"file\" placeholder=\"Enter Bank Name\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.image.invalid) || addPaymentMethodForm.controls.image.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.controls.image.invalid\" class=\"err-msg\">\n                                            Please Select Valid Image.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"d-flex align-items-end w-auto\">\n                                <div class=\"form-group\">\n                                    <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Submit</button>\n                                </div>\n                            </li>\n                        </ul>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <form class=\"card\">\n                <div class=\"card-header d-flex justify-content-between align-items-center\">Outstanding Order\n                    <div class=\"dropdown pull-right\">\n                        <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                            type=\"button\">\n                            <i class=\"fa fa-file-export mr-2\"></i>\n                            Export\n                        </button>\n                        <div id=\"myDropdown\" class=\"dropdown-content\">\n                            <a href=\"javascript:void(0)\" (click)=\"exportCsv()\"\n                                style=\"font-size: small; text-decoration: none;\">\n                                Export to XLSX\n                            </a>\n                        </div>\n                        <button *ngIf=\"showClearPaymentButton\" class=\"btn btn-md btn-dark\" type=\"button\"\n                            (click)=\"submitAddPaymentMethodForm()\">Clear\n                            Payment</button>\n                    </div>\n                </div>\n                <div class=\"card-body p-4\">\n                    <div class=\"d-flex flex-wrap justify-content-end align-items-start mb-0\">\n                        <!-- <div class=\"form-group\">\n                            <button class=\"btn btn-md btn-primary\" type=\"button\" (click)=\"addmodal.show()\"><i class=\"fa fa-plus mr-2\n                        \"></i>Add Payment</button>\n                        </div> -->\n                        <!-- <div *ngIf=\"showPaymentMessage\" class=\"row\">\n                            <div class=\"col-sm-12 py-3 text-center\">\n                                <button class=\"btn btn-md btn-dark mr-3\" type=\"button\" (click)=\"submitPayment()\">Clear\n                                    Payment</button>\n                            </div>\n                        </div> -->\n                    </div>\n                    <perfect-scrollbar>\n                        <div class=\"responsive-table rounded mb-4\">\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" datatable\n                                class=\"data row-border hover table order-table border\">\n                                <thead>\n                                    <tr>\n                                        <th>Select</th>\n                                        <th>Order Date</th>\n                                        <th>Invoice No#</th>\n                                        <th>Invoice Date</th>\n                                        <th>Payment Due<br>Date</th>\n                                        <th>Order Amount</th>\n                                        <th>Payment<br>Amount<br>Received</th>\n                                        <th>Open<br>Balance</th>\n                                        <th>Payment</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let order of orderList;let i = index;\">\n                                        <td>\n                                            <div class=\"custom-control custom-checkbox\">\n                                                <input type=\"checkbox\" class=\"custom-control-input\"\n                                                    (click)=\"order.checked=!order.checked; calculateAmountReceived(order.checked, order.open_balance*1, i)\"\n                                                    [id]=\"'checkbox' + order.id\" [checked]=\"order.checked\"\n                                                    [disabled]=\"order.disabled\">\n                                                <label class=\"custom-control-label\"\n                                                    [for]=\"'checkbox' + order.id\"></label>\n                                            </div>\n                                        </td>\n                                        <td>{{order.created_at ? (order.created_at | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                                        <td>{{order.invoice_no || \"-\"}}</td>\n                                        <td>{{order.invoice_date ? (order.invoice_date | date: 'MM-dd-yyyy') : \"-\"}}\n                                        </td>\n                                        <td>{{order.due_date ? (order.due_date | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                                        <td>\n                                            {{order.amount ? (\"$\"+(order.amount | number : '1.2-2')) : \"$0.00\"}}\n                                        </td>\n                                        <td>\n                                            {{order.amount_recieved ? (\"$\"+(order.amount_recieved | number : '1.2-2')) :\n                                            \"$0.00\"}}\n                                        </td>\n                                        <td>\n                                            {{order.open_balance ? (\"$\"+(order.open_balance | number : '1.2-2')) :\n                                            \"$0.00\"}}\n                                        </td>\n                                        <td>\n                                            <!-- <input style=\"width: 90px;\" class=\"form-control quantity\" #paymentValue\n                                                type=\"number\" [value]=\"order?.payment\"\n                                                (change)=\"changePaymentValue(paymentValue.value,order, i)\"\n                                                (keyup)=\"paymentValue.value > order.remaining_amount ? paymentValue.value = order.remaining_amount : paymentValue.value\"> -->\n                                            <!-- <input style=\"width: 90px;\" class=\"form-control quantity\" type=\"number\"\n                                                [value]=\"order?.payment\"> -->\n                                            {{order.payment ? (\"$\"+(order.payment | number : '1.2-2')) : \"$0.00\"}}\n                                        </td>\n\n                                    </tr>\n                                    <tr *ngIf=\"orderList?.length == 0\">\n                                        <td colspan=\"7\" class=\"no-data-available\">No Data Found !</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </perfect-scrollbar>\n                    <div class=\"calcuted-data\">\n                        <ul class=\"w-100\">\n                            <!-- <li>\n                                <strong>Amount to Apply </strong>\n                                <span>{{\"$ \"+(amountToApply | number : '1.2-2')}}</span>\n                            </li> -->\n                            <li class=\"w-auto pull-left\" *ngIf=\"showPaymentMessage\">\n                                <strong>{{amountRecievedMessage}}</strong>\n                                <span>${{calculatedReceivedAmount | number : '1.2-2'}}</span>\n                            </li>\n                            <li class=\"w-auto text-right pull-right\">\n                                <strong>Outstanding Amount</strong>\n                                <span>{{\"$ \"+(orderData?.total_remaining_amount | number :\n                                    '1.2-2')}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div bsModal #addmodal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-md modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n                <h2 class=\"font-weight-bold mb-4 text-primary\">Outstanding Order</h2>\n                <form class=\"d-inline-block w-100 text-left\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Payment:</label>\n                                <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Payment\">\n                            </div>\n                        </div>\n                        <div class=\"modal-footer justify-content-start flex-wrap w-100 pb-0\">\n                            <button type=\"button\" class=\"btn btn-dark mr-3\">ADD</button>\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"editmodal.hide()\">Cancel</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div bsModal #editmodal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-md modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n                <h2 class=\"font-weight-bold mb-4 text-primary\">Outstanding Order</h2>\n                <form class=\"d-inline-block w-100 text-left\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Payment:</label>\n                                <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Payment\">\n                            </div>\n                        </div>\n                        <div class=\"modal-footer justify-content-start flex-wrap w-100 pb-0\">\n                            <button type=\"button\" class=\"btn btn-dark mr-3\">Edit</button>\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"editmodal.hide()\">Cancel</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- delete modal -->\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n                <h2 class=\"font-weight-bold mb-4 text-primary\">Delete</h2>\n                <p class=\"mb-0\">Are You Sure You Want To Delete ?</p>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-danger\">Delete</button>\n            </div>\n        </div><!-- /.modal-content -->\n    </div>\n</div><!-- /.modal -->");

/***/ }),

/***/ "./src/app/views/update-payment-received/update-payment-received-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/update-payment-received/update-payment-received-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: UpdatePaymentReceivedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePaymentReceivedRoutingModule", function() { return UpdatePaymentReceivedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _update_payment_received_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-payment-received.component */ "./src/app/views/update-payment-received/update-payment-received.component.ts");




var routes = [
    {
        path: '',
        data: {
            title: 'Update Payment Received'
        },
        children: [
            {
                path: '',
                component: _update_payment_received_component__WEBPACK_IMPORTED_MODULE_3__["UpdatePaymentReceivedComponent"],
                data: {
                    title: 'List'
                }
            },
        ]
    }
];
var UpdatePaymentReceivedRoutingModule = /** @class */ (function () {
    function UpdatePaymentReceivedRoutingModule() {
    }
    UpdatePaymentReceivedRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UpdatePaymentReceivedRoutingModule);
    return UpdatePaymentReceivedRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/update-payment-received/update-payment-received.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/update-payment-received/update-payment-received.component.ts ***!
  \************************************************************************************/
/*! exports provided: UpdatePaymentReceivedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePaymentReceivedComponent", function() { return UpdatePaymentReceivedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_payment_received_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/payment-received.service */ "./src/app/shared/services/payment-received.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");













var UpdatePaymentReceivedComponent = /** @class */ (function () {
    function UpdatePaymentReceivedComponent(titleService, location, toastr, paymentReceivedService, router, commonService, route, datePipe) {
        this.titleService = titleService;
        this.location = location;
        this.toastr = toastr;
        this.paymentReceivedService = paymentReceivedService;
        this.router = router;
        this.commonService = commonService;
        this.route = route;
        this.datePipe = datePipe;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.payment_date = '';
        this.submittedPaymentReceived = false;
        this.submittedMethodReceived = false;
        this.disableCheckboxes = false;
        this.imageUrl = "";
        this.selectedMode = "CASH";
        this.ammountReceivedValue = null;
        this.amountRecievedMessage = "";
        this.showPaymentMessage = false;
        this.showClearPaymentButton = false;
        this.tickedAmount = 0;
        this.amountToApply = 0;
        this.allPaymentData = [];
        this.stage1PaymentData = [];
        this.firstStep = 0;
    }
    UpdatePaymentReceivedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Update Payement Received");
        this.route.queryParams.subscribe(function (param) {
            _this.customerId = param.id;
            _this.payment_date = param.payment_date;
        });
        this.addPaymentReceivedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            customer_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
            ]),
            payment_due_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
            ])
        });
        this.addPaymentMethodForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
            ]),
            cheque_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            //Validators.required
            ]),
            bank_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
            //Validators.required
            ]),
            ammount_received: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
            ]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].extension({
                    extensions: ["png", "jpg", "jpeg", "emf", "jpe", "jfif", "bmp", "gif", "wmf", "dib", "tif", "tiff", 'pdf']
                })
            ]),
            imageSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('')
        });
        this.getPaymentInfo();
        this.getOrderList();
    };
    UpdatePaymentReceivedComponent.prototype.getOrderList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 100,
            order: [1, 'asc'],
            serverSide: true,
            processing: true,
            searchDelay: 1300,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page = parseInt(dataTablesParameters.start) / parseInt(dataTablesParameters.length) + 1;
                dataTablesParameters.limit = dataTablesParameters.length;
                dataTablesParameters.customer_id = _this.customerId;
                dataTablesParameters.created_at = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("created_at") : ("-created_at");
                dataTablesParameters.invoice_no = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("invoice_no") : ("-invoice_no");
                dataTablesParameters.due_date = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("due_date") : ("-due_date");
                dataTablesParameters.amount = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("amount") : ("-amount");
                dataTablesParameters.amount_recieved = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("amount_recieved") : ("-amount_recieved");
                dataTablesParameters.remaining_amount = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("remaining_amount") : ("-remaining_amount");
                dataTablesParameters.open_balance = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("open_balance") : ("-open_balance");
                dataTablesParameters.for_payment = "0";
                dataTablesParameters.search_params = dataTablesParameters.search.value;
                _this.datatableParams = dataTablesParameters;
                _this.paymentReceivedService
                    .displayorder(dataTablesParameters)
                    .subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.orderList = resData.data.allorder;
                        _this.showPaymentMessage = false;
                        _this.orderData = resData.data;
                        // this.calculateAmount(resData.total_record);
                        if (_this.ammountReceivedValue > 0) {
                            var leftAmountReceived = _this.ammountReceivedValue;
                            _this.amountToApply = 0;
                            _this.stage1PaymentData = [];
                            _this.orderList.forEach(function (element) {
                                if (leftAmountReceived > 0) {
                                    // if(leftAmountReceived < element.open_balance){
                                    //   element.payment = element.open_balance - leftAmountReceived;
                                    //   leftAmountReceived = element.open_balance - leftAmountReceived;
                                    // }else{
                                    if (leftAmountReceived > element.open_balance) {
                                        element.payment = leftAmountReceived - element.open_balance;
                                        leftAmountReceived = leftAmountReceived - element.open_balance;
                                    }
                                    else {
                                        element.payment = 0;
                                    }
                                    if (element.payment > element.open_balance) {
                                        element.payment = element.open_balance;
                                    }
                                    if (element.payment != 0) {
                                        setTimeout(function () {
                                            _this.stage1PaymentData.push({
                                                id: element.id,
                                                open_balance: element.open_balance,
                                                payment: parseFloat(element.payment)
                                            });
                                        }, 500);
                                    }
                                    _this.amountToApply = Number(element.payment) + _this.amountToApply;
                                }
                            });
                        }
                        else {
                            _this.orderList.forEach(function (element) {
                                element.payment = 0;
                            });
                        }
                        _this.orderList.forEach(function (element) {
                            element.checked = false;
                            element.disabled = true;
                        });
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: dataTablesParameters.search_params == "" ? resData.total_record : resData.filter_record,
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
                { name: 'checkbox', searchable: false, orderable: false },
                { data: 'created_at', searchable: true, orderable: true },
                { data: 'invoice_no', searchable: true, orderable: true },
                { data: 'invoice_date', searchable: true, orderable: true },
                { data: 'due_date', searchable: true, orderable: false },
                { data: 'amount', searchable: true, orderable: false },
                // { data: 'status', searchable: true, orderable: false },
                // { data: 'verfication_status', searchable: true, orderable: false },
                { data: 'amount_recieved', searchable: true, orderable: true },
                { data: 'open_balance', searchable: true, orderable: true },
                { data: 'remaining_amount', searchable: true, orderable: false },
            ]
        };
    };
    UpdatePaymentReceivedComponent.prototype.calculateAmount = function (totalRecord) {
        var _this = this;
        var parms = {
            customer_id: this.customerId,
            for_payment: '0',
            limit: totalRecord
        };
        this.paymentReceivedService.displayorder(parms).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                resData.data.allorder.forEach(function (element) {
                    //this.amountToApply = this.amountToApply + element.remaining_amount;
                    //this.ammountReceivedValue = this.amountToApply;
                });
                _this.allorderData = resData.data.allorder;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    UpdatePaymentReceivedComponent.prototype.submitAmountReceived = function () {
        var _this = this;
        if (this.amountToApply < this.ammountReceivedValue) {
            this.allorderData.forEach(function (element, index) {
                _this.allorderData[index].remaining_amount = 0;
            });
            this.orderList.forEach(function (element, index) {
                _this.orderList[index].remaining_amount = 0;
            });
            this.amountToApply = 0;
        }
    };
    UpdatePaymentReceivedComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    UpdatePaymentReceivedComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    UpdatePaymentReceivedComponent.prototype.onImageFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            if (file) {
                this.addPaymentMethodForm.patchValue({
                    imageSource: file
                });
                var reader = new FileReader();
                reader.onloadend = function (event) {
                    _this.imageUrl = event.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    };
    UpdatePaymentReceivedComponent.prototype.getPaymentInfo = function () {
        var _this = this;
        this.paymentReceivedService.getCustomer(this.customerId).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.addPaymentReceivedForm.patchValue({
                    customer_name: resData.data.full_name,
                    email: resData.data.email,
                    phone: resData.data.phone
                });
                _this.addPaymentReceivedForm.patchValue({
                    payment_due_date: new Date(_this.payment_date)
                });
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    UpdatePaymentReceivedComponent.prototype.submitAddPaymentReceivedForm = function () {
        var _this = this;
        this.submittedPaymentReceived = true;
        var formData = new FormData();
        formData.append("customer_id", this.customerId);
        formData.append("payment_date", this.datePipe.transform(this.addPaymentReceivedForm.controls.payment_due_date.value, 'yyyy-MM-dd'));
        if (this.addPaymentReceivedForm.valid) {
            this.paymentReceivedService.paymentreceived(formData).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.paymentData = resData.data;
                    _this.addPaymentMethodForm.patchValue({
                        mode: _this.paymentData.method,
                        cheque_no: _this.paymentData.reference_no,
                        ammount_received: _this.paymentData.amount_recieved
                    });
                    _this.submitAmountReceived();
                }
                else {
                    _this.toastr.error('', resData.message);
                }
            }, function (err) {
                _this.toastr.error('', err.error.message);
            });
        }
    };
    UpdatePaymentReceivedComponent.prototype.submitAddPaymentMethodForm = function () {
        var _this = this;
        this.submittedMethodReceived = true;
        if (this.addPaymentMethodForm.controls.ammount_received.value > 0) {
            // this.rerender();
            var formData = new FormData();
            // formData.append("amount_received", this.addPaymentMethodForm.controls.ammount_received.value);
            formData.append("payment_method", this.addPaymentMethodForm.controls.mode.value);
            if (this.addPaymentMethodForm.controls.cheque_no.value) {
                formData.append("cheque_no", this.addPaymentMethodForm.controls.cheque_no.value);
            }
            if (this.addPaymentMethodForm.get('imageSource').value) {
                formData.append("image", this.addPaymentMethodForm.get('imageSource').value);
            }
            formData.append("customer_id", this.customerId);
            var paymentData = [];
            for (var i = 0; i < this.orderList.length; i++) {
                if (this.orderList[i].payment != 0) {
                    if (this.orderList[i].payment_status == "over") {
                        paymentData.push({
                            invoice_id: this.orderList[i].id, open_balance: parseFloat(this.orderList[i].open_balance), payment_amount: this.orderList[i].payment + this.calculatedReceivedAmount, payment_status: this.orderList[i].payment_status
                        });
                    }
                    else {
                        paymentData.push({
                            invoice_id: this.orderList[i].id, open_balance: parseFloat(this.orderList[i].open_balance), payment_amount: this.orderList[i].payment, payment_status: this.orderList[i].payment_status
                        });
                    }
                }
            }
            setTimeout(function () {
                formData.append("paymentData", JSON.stringify(paymentData));
                if (_this.addPaymentMethodForm.valid) {
                    _this.paymentReceivedService.update_payment_history(formData).subscribe(function (response) {
                        var resData = JSON.parse(JSON.stringify(response));
                        if (resData.status_code == 200) {
                            _this.toastr.success('', "Payment details updated successfully!");
                            _this.rerender();
                            _this.selectedMode = 'CASH';
                            _this.submittedMethodReceived = false;
                            _this.addPaymentMethodForm.controls.ammount_received.markAsUntouched();
                            _this.addPaymentMethodForm.patchValue({ ammount_received: '' });
                            _this.showPaymentMessage = false;
                            _this.showClearPaymentButton = false;
                            _this.calculatedReceivedAmount = 0;
                            _this.tickedAmount = 0;
                        }
                        else {
                            _this.toastr.error('', resData.message);
                        }
                    }, function (err) {
                        _this.toastr.error('', err.error.message);
                    });
                }
            }, 1000);
        }
    };
    UpdatePaymentReceivedComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.showPaymentMessage = false;
            _this.dtTrigger.next();
        });
    };
    UpdatePaymentReceivedComponent.prototype.changePaymentValue = function (paymentValue, orderData, i) {
        // this.allorderData.forEach(element => {
        //   if (element.id == orderData.id) {
        //     let index = this.allorderData.findIndex(x => x.id === orderData.id);
        //     this.allorderData[index].remaining_amount = Number(paymentValue);
        //     this.amountToApply = this.amountToApply + Number(paymentValue);
        //   }
        // });
        var _this = this;
        this.amountToApply = 0;
        this.ammountReceivedValue = 0;
        this.allPaymentData.push({
            "orderId": orderData.id,
            "payment": Number(paymentValue)
        });
        var amount = [];
        $("table tbody tr").each(function () {
            var currentRow = $(this);
            var col1_value = currentRow.find("td:eq(6) input").val();
            amount.push(col1_value);
        });
        amount.splice(-1, 1);
        amount.forEach(function (element) {
            _this.amountToApply = _this.amountToApply + Number(element);
        });
        this.ammountReceivedValue = this.amountToApply;
    };
    UpdatePaymentReceivedComponent.prototype.changeMode = function () {
        if (this.selectedMode == 'CASH') {
            this.addPaymentMethodForm.get('cheque_no').clearValidators();
            this.addPaymentMethodForm.get('cheque_no').updateValueAndValidity();
            // this.addPaymentMethodForm.get('image').clearValidators();
            // this.addPaymentMethodForm.get('image').updateValueAndValidity();
        }
        else {
            this.addPaymentMethodForm.get('cheque_no').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);
            this.addPaymentMethodForm.get('cheque_no').updateValueAndValidity();
            // this.addPaymentMethodForm.controls["image"].setValidators([Validators.required]);
            // this.addPaymentMethodForm.get('image').setValidators([Validators.required]);
            // this.addPaymentMethodForm.get('image').updateValueAndValidity();
        }
    };
    UpdatePaymentReceivedComponent.prototype.submitPayment = function () {
        var _this = this;
        // var array = [];
        // this.allorderData.forEach(element => {
        //   array.push({
        //     "orderId": element.id,
        //     "payment": element.remaining_amount
        //   });
        // });
        if (this.allPaymentData.length != 0) {
            this.paymentReceivedService.clear_payment(this.allPaymentData).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.toastr.success('', resData.message);
                    _this.amountToApply = 0;
                    _this.rerender();
                }
                else {
                    _this.toastr.error('', resData.message);
                }
            }, function (err) {
                _this.toastr.error('', err.error.message);
            });
        }
    };
    UpdatePaymentReceivedComponent.prototype.calculateAmountReceived = function (checked, amount, index) {
        this.showClearPaymentButton = this.orderList.some(function (e) {
            return e.checked;
        });
        if (checked && this.ammountReceivedValue != null) {
            this.showPaymentMessage = true;
            this.tickedAmount += amount;
            if (this.ammountReceivedValue - this.tickedAmount < 0) {
                if (this.orderList[index].invoice_no) {
                    this.amountRecievedMessage = "Under Payment for Invoice No# " + this.orderList[index].invoice_no;
                }
                else {
                    this.amountRecievedMessage = "Under Payment for Invoice No#";
                }
                this.calculatedReceivedAmount = (this.ammountReceivedValue - this.tickedAmount) * -1;
                this.orderList[index].payment_status = "under";
                for (var i = 0; i < this.orderList.length; i++) {
                    if (this.orderList[i].id != this.orderList[index].id && this.orderList[i].payment != 0) {
                        // if (this.orderList[i].payment != this.orderList[index].payment && this.orderList[i].payment != 0) {
                        this.orderList[i].payment_status = "completed";
                    }
                }
                if (amount - (this.ammountReceivedValue - this.tickedAmount) * -1 < 0) {
                    for (var i = 0; i < this.orderList.length; i++) {
                        if (!this.orderList[i].checked) {
                            this.orderList[i].disabled = true;
                        }
                    }
                    this.orderList[index].payment = 0;
                }
                else {
                    for (var i = 0; i < this.orderList.length; i++) {
                        this.orderList[i].disabled = false;
                    }
                    this.orderList[index].payment = (amount - (this.ammountReceivedValue - this.tickedAmount) * -1);
                    for (var i = 0; i < this.orderList.length; i++) {
                        if (!this.orderList[i].checked) {
                            this.orderList[i].disabled = true;
                        }
                    }
                }
            }
            else if (this.ammountReceivedValue - this.tickedAmount == 0) {
                this.showPaymentMessage = false;
                this.orderList[index].payment = amount;
                // this.orderList[index].payment_status = "completed";
                for (var i = 0; i < this.orderList.length; i++) {
                    if (!this.orderList[i].checked) {
                        this.orderList[i].disabled = true;
                    }
                    if (this.orderList[i].payment != 0) {
                        this.orderList[i].payment_status = "completed";
                    }
                }
            }
            else {
                if (this.orderList[index].invoice_no) {
                    this.amountRecievedMessage = "Over Payment for Invoice No# " + this.orderList[index].invoice_no;
                }
                else {
                    this.amountRecievedMessage = "Over Payment for Invoice No#";
                }
                this.calculatedReceivedAmount = (this.ammountReceivedValue - this.tickedAmount);
                // this.orderList[index].payment = this.ammountReceivedValue - this.tickedAmount;
                // for (let i = 0; i < this.orderList.length; i++) {
                //   if (this.orderList[i].id != this.orderList[index].id && this.orderList[i].payment != 0) {
                //     this.orderList[i].payment = this.orderList[index].open_balance;
                //   }
                // }
                this.orderList[index].payment = amount;
                this.orderList[index].payment_status = "over";
                for (var i = 0; i < this.orderList.length; i++) {
                    if (this.orderList[i].id != this.orderList[index].id && this.orderList[i].payment != 0) {
                        // if (this.orderList[i].payment != this.orderList[index].payment && this.orderList[i].payment != 0) {
                        this.orderList[i].payment_status = "completed";
                    }
                }
            }
        }
        else {
            this.orderList[index].payment = 0;
            this.tickedAmount -= amount;
            var lastCheckedIndex = null;
            for (var i = 0; i < this.orderList.length; i++) {
                if (this.orderList[i].checked) {
                    lastCheckedIndex = i;
                }
            }
            if (lastCheckedIndex == null) {
                this.showPaymentMessage = false;
            }
            else {
                this.showPaymentMessage = true;
            }
            if (this.ammountReceivedValue - this.tickedAmount < 0) {
                if (this.orderList[index].invoice_no) {
                    this.amountRecievedMessage = "Under Payment for Invoice No# " + this.orderList[lastCheckedIndex].invoice_no;
                }
                else {
                    this.amountRecievedMessage = "Under Payment for Invoice No#";
                }
                // this.amountRecievedMessage = "Under Payment for Invoice No# " + (lastCheckedIndex + 1);
                this.calculatedReceivedAmount = (this.ammountReceivedValue - this.tickedAmount) * -1;
                this.orderList[index].payment_status = "under";
                for (var i = 0; i < this.orderList.length; i++) {
                    if (this.orderList[i].payment != this.orderList[index].payment && this.orderList[i].payment != 0) {
                        this.orderList[i].payment_status = "completed";
                    }
                }
            }
            else if (this.ammountReceivedValue - this.tickedAmount == 0) {
                this.showPaymentMessage = false;
                for (var i = 0; i < this.orderList.length; i++) {
                    if (!this.orderList[i].checked) {
                        this.orderList[i].disabled = true;
                    }
                    // if (this.orderList[i].payment != 0) {
                    //   this.orderList[i].payment_status = "completed";
                    // }
                }
            }
            else {
                if (this.orderList[index].invoice_no) {
                    if (lastCheckedIndex != null) {
                        this.amountRecievedMessage = "Over Payment for Invoice No# " + this.orderList[lastCheckedIndex].invoice_no;
                    }
                }
                else {
                    this.amountRecievedMessage = "Over Payment for Invoice No#";
                }
                this.calculatedReceivedAmount = (this.ammountReceivedValue - this.tickedAmount);
                this.orderList[index].payment_status = "over";
                for (var i = 0; i < this.orderList.length; i++) {
                    if (this.orderList[i].payment != this.orderList[index].payment && this.orderList[i].payment != 0) {
                        this.orderList[i].payment_status = "completed";
                    }
                }
            }
            for (var i = 0; i < this.orderList.length; i++) {
                this.orderList[i].disabled = false;
            }
        }
    };
    UpdatePaymentReceivedComponent.prototype.uncheckAll = function () {
        if (this.addPaymentMethodForm.valid) {
            this.toastr.success("", "Now select invoices for clearance!");
            this.showPaymentMessage = false;
            this.showClearPaymentButton = false;
            this.calculatedReceivedAmount = 0;
            this.tickedAmount = 0;
            for (var i = 0; i < this.orderList.length; i++) {
                this.orderList[i].checked = false;
                this.orderList[i].disabled = false;
                this.orderList[i].payment = 0;
            }
        }
        else {
            this.toastr.error("", "Please Fill All Fields!");
        }
    };
    UpdatePaymentReceivedComponent.prototype.onAmountChange = function () {
        this.showPaymentMessage = false;
        this.showClearPaymentButton = false;
        this.calculatedReceivedAmount = 0;
        this.tickedAmount = 0;
        for (var i = 0; i < this.orderList.length; i++) {
            this.orderList[i].checked = false;
            this.orderList[i].disabled = true;
            this.orderList[i].payment = 0;
        }
    };
    UpdatePaymentReceivedComponent.prototype.goPreviousUrl = function () {
        this.location.back();
    };
    UpdatePaymentReceivedComponent.prototype.exportCsv = function () {
        var _this = this;
        this.paymentReceivedService.displayorder(this.datatableParams).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.allorder.map(function (x) { return ({
                    "Order Date": _this.datePipe.transform(x.created_at, 'MM-dd-yyyy') || "-",
                    "Invoice No#": x.invoice_no || "-",
                    "Payment Due Date": _this.datePipe.transform(x.due_date, 'MM-dd-yyyy') || "-",
                    "Order Amount": x.amount ? "$" + parseFloat(x.amount).toFixed(2) : "$0.00",
                    "Payment Amount Received": x.amount_recieved ? "$" + parseFloat(x.amount_recieved).toFixed(2) : "$0.00",
                    "Open Balance": x.open_balance ? "$" + parseFloat(x.open_balance).toFixed(2) : "$0.00"
                }); });
                _this.commonService.exportCsv(resData.data.allorder, onlyNameAndSymbolArr, 'paymentRecievedList');
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    UpdatePaymentReceivedComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _shared_services_payment_received_service__WEBPACK_IMPORTED_MODULE_5__["PaymentReceivedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addmodal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], UpdatePaymentReceivedComponent.prototype, "addmodal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editmodal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], UpdatePaymentReceivedComponent.prototype, "editmodal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTableDirective"])
    ], UpdatePaymentReceivedComponent.prototype, "dtElement", void 0);
    UpdatePaymentReceivedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-payment-received',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update-payment-received.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/update-payment-received/update-payment-received.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_services_payment_received_service__WEBPACK_IMPORTED_MODULE_5__["PaymentReceivedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]])
    ], UpdatePaymentReceivedComponent);
    return UpdatePaymentReceivedComponent;
}());



/***/ }),

/***/ "./src/app/views/update-payment-received/update-payment-received.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/update-payment-received/update-payment-received.module.ts ***!
  \*********************************************************************************/
/*! exports provided: UpdatePaymentReceivedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePaymentReceivedModule", function() { return UpdatePaymentReceivedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _update_payment_received_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-payment-received.component */ "./src/app/views/update-payment-received/update-payment-received.component.ts");
/* harmony import */ var _update_payment_received_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-payment-received-routing.module */ "./src/app/views/update-payment-received/update-payment-received-routing.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _shared_services_payment_received_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/payment-received.service */ "./src/app/shared/services/payment-received.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");












var UpdatePaymentReceivedModule = /** @class */ (function () {
    function UpdatePaymentReceivedModule() {
    }
    UpdatePaymentReceivedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_update_payment_received_component__WEBPACK_IMPORTED_MODULE_3__["UpdatePaymentReceivedComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _update_payment_received_routing_module__WEBPACK_IMPORTED_MODULE_4__["UpdatePaymentReceivedRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_11__["RxReactiveFormsModule"]
            ],
            providers: [
                _shared_services_payment_received_service__WEBPACK_IMPORTED_MODULE_9__["PaymentReceivedService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ]
        })
    ], UpdatePaymentReceivedModule);
    return UpdatePaymentReceivedModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-update-payment-received-update-payment-received-module.js.map