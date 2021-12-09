(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-sales-management-sales-management-module"],{

/***/ "./node_modules/ngx-print/fesm5/ngx-print.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-print/fesm5/ngx-print.js ***!
  \***************************************************/
/*! exports provided: NgxPrintDirective, NgxPrintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintDirective", function() { return NgxPrintDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintModule", function() { return NgxPrintModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPrintDirective = /** @class */ (function () {
    function NgxPrintDirective() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
         *
         * \@memberof NgxPrintDirective
         */
        this.printDelay = 0;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    Object.defineProperty(NgxPrintDirective.prototype, "printStyle", {
        /**
         *
         *
         * @memberof NgxPrintDirective
         */
        set: /**
         *
         *
         * \@memberof NgxPrintDirective
         * @param {?} values
         * @return {?}
         */
        function (values) {
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
                }
            }
            this.returnStyleValues();
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     *
     * @returns the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    NgxPrintDirective.prototype.returnStyleValues = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    function () {
        return "<style> " + this._printStyle.join(' ').replace(/,/g, ';') + " </style>";
    };
    Object.defineProperty(NgxPrintDirective.prototype, "styleSheetFile", {
        /**
         * @memberof NgxPrintDirective
         * @param cssList
         */
        set: /**
         * \@memberof NgxPrintDirective
         * @param {?} cssList
         * @return {?}
         */
        function (cssList) {
            var e_1, _a;
            /** @type {?} */
            var linkTagFn = (/**
             * @param {?} cssFileName
             * @return {?}
             */
            function (cssFileName) {
                return "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssFileName + "\">";
            });
            if (cssList.indexOf(',') !== -1) {
                /** @type {?} */
                var valueArr = cssList.split(',');
                try {
                    for (var valueArr_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(valueArr), valueArr_1_1 = valueArr_1.next(); !valueArr_1_1.done; valueArr_1_1 = valueArr_1.next()) {
                        var val = valueArr_1_1.value;
                        this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (valueArr_1_1 && !valueArr_1_1.done && (_a = valueArr_1.return)) _a.call(valueArr_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this._styleSheetFile = linkTagFn(cssList);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @returns string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    NgxPrintDirective.prototype.returnStyleSheetLinkTags = /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    function () {
        return this._styleSheetFile;
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    NgxPrintDirective.prototype.getElementTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        /** @type {?} */
        var html = [];
        /** @type {?} */
        var elements = document.getElementsByTagName(tag);
        for (var index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    };
    /**
     *
     * @param data the html element collection to save defaults to
     *
     */
    /**
     *
     * @private
     * @param {?} data the html element collection to save defaults to
     *
     * @return {?}
     */
    NgxPrintDirective.prototype.getFormData = /**
     *
     * @private
     * @param {?} data the html element collection to save defaults to
     *
     * @return {?}
     */
    function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].defaultValue = data[i].value;
            if (data[i].checked) {
                data[i].defaultChecked = true;
            }
        }
    };
    /**
     * @returns html section to be printed along with some associated inputs
     *
     */
    /**
     * @private
     * @return {?} html section to be printed along with some associated inputs
     *
     */
    NgxPrintDirective.prototype.getHtmlContents = /**
     * @private
     * @return {?} html section to be printed along with some associated inputs
     *
     */
    function () {
        /** @type {?} */
        var printContents = document.getElementById(this.printSectionId);
        /** @type {?} */
        var innards = printContents.getElementsByTagName('input');
        this.getFormData(innards);
        /** @type {?} */
        var txt = printContents.getElementsByTagName('textarea');
        this.getFormData(txt);
        return printContents.innerHTML;
    };
    /**
     *
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    NgxPrintDirective.prototype.print = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    function () {
        /** @type {?} */
        var printContents;
        /** @type {?} */
        var popupWin;
        /** @type {?} */
        var styles = '';
        /** @type {?} */
        var links = '';
        /** @type {?} */
        var baseTag = this.getElementTag('base');
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = this.getHtmlContents();
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>" + (this.printTitle ? this.printTitle : "") + "</title>\n          " + baseTag + "\n          " + this.returnStyleValues() + "\n          " + this.returnStyleSheetLinkTags() + "\n          " + styles + "\n          " + links + "\n        </head>\n        <body>\n          " + printContents + "\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              setTimeout(function() {\n                closeWindow(window.print());\n              }, " + this.printDelay + ");\n            }\n            function closeWindow(){\n                window.close();\n            }\n            window.addEventListener('load', triggerPrint, false);\n          </script>\n        </body>\n      </html>");
        popupWin.document.close();
    };
    NgxPrintDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "button[ngxPrint]"
                },] }
    ];
    NgxPrintDirective.propDecorators = {
        printSectionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        printTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        useExistingCss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        printDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        printStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        styleSheetFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        print: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
    };
    return NgxPrintDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPrintModule = /** @class */ (function () {
    function NgxPrintModule() {
    }
    NgxPrintModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [NgxPrintDirective],
                    imports: [],
                    exports: [NgxPrintDirective]
                },] }
    ];
    return NgxPrintModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-print.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/sales-management/order-invoice/order-invoice.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/sales-management/order-invoice/order-invoice.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\" style=\"display: none;\" id=\"print-section\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <!-- <div class=\"card-header\">{{orderData?.status}} Status Order</div> -->\n        <!-- <div class=\"card-header\">Order Details</div> -->\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Order Details <div\n            class=\"pull-right\">\n            <a [routerLink]=\"['/sales-management']\"\n              [queryParams]='{vs: selectedVerificationStatus, os: selectedOrderStatus, sn: selectedStoreName, ps: selectedPaymentStatus, fdd: selectedFromDueDate, tdd: selectedToDueDate, fd: selectedFromDate, td: selectedToDate, limit: this.tableLimit, firstTime: true, search: salesSearchValue}'\n              class=\"btn btn-md btn-secondary\" type=\"button\">Back</a>\n          </div>\n        </div>\n        <div class=\"card-body p-4\">\n          <!-- <div class=\"d-flex flex-wrap justify-content-between align-items-start mb-0\">\n                        <div class=\"form-group w-100 text-right\">\n                            <button class=\"btn btn-md btn-primary\">Print Invoice</button>\n                        </div>\n                    </div> -->\n          <div class=\"customer-content sales-content\">\n            <ul class=\"d-flex flex-wrap\">\n              <li>\n                <strong>Invoice No</strong>\n                <span>{{orderData?.invoice_no}}</span>\n              </li>\n              <li>\n                <strong>Customer Name</strong>\n                <span>{{orderData?.customer_name}}</span>\n              </li>\n              <li>\n                <strong>Billing Address</strong>\n                <span>{{orderData?.billing_address}}</span>\n              </li>\n              <li>\n                <strong>Shipping Address</strong>\n                <span>{{orderData?.shipping_address}}</span>\n              </li>\n              <li>\n                <strong>Order Date</strong>\n                <span>{{orderData?.order_date ? (orderData?.order_date | date: 'yyyy/MM/dd') :\n                  \"\"}}</span>\n              </li>\n              <li>\n                <strong>Order Status</strong>\n                <span>{{orderData?.order_status}}</span>\n              </li>\n              <li>\n                <strong>Payment Due Date</strong>\n                <span>{{orderData?.due_date ? (orderData?.due_date | date: 'yyyy/MM/dd') : \"\"}}</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"responsive-table rounded mb-4\">\n            <perfect-scrollbar>\n              <table class=\"data row-border hover table order-table border\">\n                <thead>\n                  <tr>\n                    <th>Product Name</th>\n                    <th>Quantity</th>\n                    <th>Sales Rate</th>\n                    <th>Order Amount</th>\n                    <th>Discount</th>\n                    <th>Final Order Amount </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let product of productList;let i = index;\">\n                    <td>{{product.product_name || \"-\"}}</td>\n                    <td>{{product.quantity || \"-\"}}</td>\n                    <td>{{product.sales_rate ? (\"$\"+(product.sales_rate | number : '1.2-2')) : \"-\"}}</td>\n                    <td>{{product.order_price ? (\"$\"+(product.order_price | number : '1.2-2')) : \"-\"}}</td>\n                    <td>{{product.discount || \"-\"}}</td>\n                    <td>{{product.final_order_amount ? (\"$\"+(product.final_order_amount | number : '1.2-2')) : \"-\"}}\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"productList?.length == 0\">\n                    <td colspan=\"6\" class=\"no-data-available\">No Data Found !</td>\n                  </tr>\n                </tbody>\n              </table>\n            </perfect-scrollbar>\n            <div class=\"calcuted-data\">\n              <ul class=\"justify-content-end\">\n                <li>\n                  <strong>Sub Total</strong>\n                  <span>{{orderData?.sub_total ? (\"$ \"+orderData?.sub_total) : \"$ 0\"}}</span>\n                </li>\n                <li>\n                  <strong>Total</strong>\n                  <span>{{orderData?.total ? (\"$ \"+orderData?.total) : \"$ 0\"}}</span>\n                </li>\n                <li>\n                  <strong>Amount Received</strong>\n                  <span>{{orderData?.amount_received ? (\"$ \"+orderData?.amount_received) : \"$\n                    0\"}}</span>\n                </li>\n                <li>\n                  <strong>Amount Due</strong>\n                  <span>{{orderData?.amount_due ? (\"$ \"+orderData?.amount_due) : \"$ 0\"}}</span>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <form class=\"card\" [formGroup]=\"addForm\" (ngSubmit)=\"submitAddForm()\" #formDir=\"ngForm\" novalidate>\n        <!-- <div class=\"card-header\"> -->\n        <!-- {{orderData?.order_status ? ((orderData?.order_status | titlecase) + \" Status Order\") : \"Completed\n                    Status Order\"}} -->\n        <!-- Order Details -->\n        <!-- </div> -->\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Order Details:\n          {{addForm.controls.po_number.value}} - {{storeName}}\n          <div class=\"pull-right\">\n            <!-- <button *ngIf=\"verified_product == 0\" (click)=\"printDeliveryReceipt()\" type=\"button\" class=\"btn btn-md btn-primary\">\n              Print Delvery Receipt\n            </button> -->\n            <button *ngIf=\"verified_product == 0\" (click)=\"printPage()\" type=\"button\" class=\"btn btn-md btn-primary\">\n              Print Invoice\n            </button>\n            <button (click)=\"printPoPage()\" type=\"button\" class=\"btn btn-md btn-primary\">\n              Print PO\n            </button>\n            <!-- [routerLink]=\"['/sales-management/update-payment-received']\" -->\n            <button type=\"button\" [routerLink]=\"['/update-payment-received']\"\n              [queryParams]='{id: customerId,payment_date: orderData?.due_date}' class=\"btn btn-md btn-success\">\n              Receive Payment\n            </button>\n            <a *ngIf=\"!fromProductOrder\" [routerLink]=\"['/sales-management']\"\n              [queryParams]='{vs: selectedVerificationStatus, os: selectedOrderStatus, sn: selectedStoreName, ps: selectedPaymentStatus, fdd: selectedFromDueDate, tdd: selectedToDueDate, fd: selectedFromDate, td: selectedToDate, limit: this.tableLimit, firstTime: true, search: salesSearchValue}'\n              class=\"btn btn-md btn-secondary\" type=\"button\">Back</a>\n            <a *ngIf=\"fromProductOrder\" (click)=\"goPreviousUrl();\" class=\"btn btn-md btn-secondary\"\n              type=\"button\">Back</a>\n          </div>\n        </div>\n        <div class=\"card-body px-4 py-0\">\n          <div class=\"customer-content sales-content\">\n            <div class=\"d-flex flex-wrap justify-content-between align-items-start mb-0\">\n              <div class=\"form-group w-100 text-right\">\n                <!-- <button [printStyle]=\"{h1 : {'color': 'red'}, h2 : {'border': 'solid 1px'}}\" printSectionId=\"print-section\" ngxPrint type=\"button\" class=\"btn btn-md btn-primary\">Print Invoice</button> -->\n                <!-- <button [routerLink]=\"['/sales-management/status-order']\"\n                                    [queryParams]='{id: orderId,print: 1}' type=\"button\"\n                                    class=\"btn btn-md btn-primary\">Print Invoice</button> -->\n                <!-- <button *ngIf=\"verified_product == 0\" (click)=\"printPage()\" type=\"button\"\n                                    class=\"btn btn-md btn-primary\">\n                                    Print Invoice\n                                </button>\n                                <button (click)=\"printPoPage()\" type=\"button\" class=\"btn btn-md btn-primary\">\n                                    Print PO\n                                </button> -->\n                <!-- [routerLink]=\"['/sales-management/update-payment-received']\" -->\n                <!-- <button type=\"button\" [routerLink]=\"['/update-payment-received']\"\n                                    [queryParams]='{id: customerId,payment_date: orderData?.due_date}'\n                                    class=\"btn btn-md btn-success\">\n                                    Receive Payment\n                                </button> -->\n\n              </div>\n              <!-- <div class=\"form-group w-100 text-right\">\n                                <button type=\"button\" [routerLink]=\"['/sales-management/update-payment-received']\"\n                                    [queryParams]='{id: customerId,payment_date: orderData?.due_date}'\n                                    class=\"btn btn-md btn-success\">Receive Payment</button>\n                            </div> -->\n            </div>\n            <ul class=\"d-flex flex-wrap\">\n              <li>\n                <div class=\"form-group\">\n                  <label for=\"name\" class=\"w-100\">Invoice No. :</label>\n                  <input formControlName=\"invoice_no\" class=\"form-control\" type=\"text\" placeholder=\"Enter Invoice No\"\n                    readonly>\n                  <div style=\"font-size: 15px;\" class=\"error\"\n                    *ngIf=\"(submitted && addForm.controls.invoice_no.invalid) || addForm.controls.invoice_no.touched\">\n                    <div *ngIf=\"addForm.hasError('required','invoice_no')\" class=\"err-msg\">Invoice\n                      number is required.\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"form-group\">\n                  <label for=\"name\" class=\"w-100\">Payment Status :</label>\n                  <input formControlName=\"payment_status\" class=\"form-control\" type=\"text\"\n                    placeholder=\"Enter Payment Status\" readonly>\n                  <div style=\"font-size: 15px;\" class=\"error\"\n                    *ngIf=\"(submitted && addForm.controls.payment_status.invalid) || addForm.controls.payment_status.touched\">\n                    <div *ngIf=\"addForm.hasError('required','payment_status')\" class=\"err-msg\">\n                      Payment Status is required.\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"form-group\">\n                  <label for=\"name\" class=\"w-100\">Customer Name :</label>\n                  <input formControlName=\"customer_name\" class=\"form-control\" type=\"text\"\n                    placeholder=\"Enter Customer Name\" readonly>\n                  <div style=\"font-size: 15px;\" class=\"error\"\n                    *ngIf=\"(submitted && addForm.controls.customer_name.invalid) || addForm.controls.customer_name.touched\">\n                    <div *ngIf=\"addForm.hasError('required','customer_name')\" class=\"err-msg\">\n                      Customer name is required.\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"form-group\">\n                  <label for=\"name\" class=\"w-100\">Billing Address :</label>\n                  <input formControlName=\"billing_address\" class=\"form-control\" type=\"text\"\n                    placeholder=\"Enter Billing Address\" readonly>\n                  <div style=\"font-size: 15px;\" class=\"error\"\n                    *ngIf=\"(submitted && addForm.controls.billing_address.invalid) || addForm.controls.billing_address.touched\">\n                    <div *ngIf=\"addForm.hasError('required','billing_address')\" class=\"err-msg\">\n                      Billing address is required.\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"form-group\">\n                  <label for=\"name\" class=\"w-100\">Shipping Address :</label>\n                  <input formControlName=\"shiping_address\" class=\"form-control\" type=\"text\"\n                    placeholder=\"Enter Shipping Address\" readonly>\n                  <div style=\"font-size: 15px;\" class=\"error\"\n                    *ngIf=\"(submitted && addForm.controls.shiping_address.invalid) || addForm.controls.shiping_address.touched\">\n                    <div *ngIf=\"addForm.hasError('required','shiping_address')\" class=\"err-msg\">\n                      Shipping address is required.\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"form-group\">\n                  <label for=\"name\" class=\"w-100\">Order Date :</label>\n                  <input formControlName=\"order_date\" class=\"form-control\" readonly value=\"09/09/20\" type=\"text\"\n                    placeholder=\"Enter Order Date\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n                  <div style=\"font-size: 15px;\" class=\"error\"\n                    *ngIf=\"(submitted && addForm.controls.order_date.invalid) || addForm.controls.order_date.touched\">\n                    <div *ngIf=\"addForm.hasError('required','order_date')\" class=\"err-msg\">Order\n                      date is required.\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"form-group\">\n                  <label for=\"name\" class=\"w-100\">Order Status :</label>\n                  <input formControlName=\"order_status\" class=\"form-control\" readonly value=\"open\" type=\"text\"\n                    placeholder=\"Enter Order Status\">\n                  <div style=\"font-size: 15px;\" class=\"error\"\n                    *ngIf=\"(submitted && addForm.controls.order_status.invalid) || addForm.controls.order_status.touched\">\n                    <div *ngIf=\"addForm.hasError('required','order_status')\" class=\"err-msg\">Order\n                      status is required.\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"form-group\">\n                  <label for=\"name\" class=\"w-100\">Payment Due Date :</label>\n                  <input formControlName=\"payment_due_date\" type=\"text\" placeholder=\"Payment Due Date\"\n                    class=\"form-control\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker readonly>\n                  <div style=\"font-size: 15px;\" class=\"error\"\n                    *ngIf=\"(submitted && addForm.controls.payment_due_date.invalid) || addForm.controls.payment_due_date.touched\">\n                    <div *ngIf=\"addForm.hasError('required','payment_due_date')\" class=\"err-msg\">\n                      Payment due date is required.\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"form-group\">\n                  <label for=\"name\" class=\"w-100\">Delivery Date :</label>\n                  <input formControlName=\"payment_delivery_date\" type=\"text\" placeholder=\"Delivery Date\"\n                    class=\"form-control\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n                  <div style=\"font-size: 15px;\" class=\"error\"\n                    *ngIf=\"(submitted && addForm.controls.payment_delivery_date.invalid) || addForm.controls.payment_delivery_date.touched\">\n                    <div *ngIf=\"addForm.hasError('required','payment_delivery_date')\" class=\"err-msg\">\n                      Delivery date is required.\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <!-- <li>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">PO No. :</label>\n                                    <input formControlName=\"po_number\" class=\"form-control\" type=\"text\"\n                                        placeholder=\"Enter PO No.\" readonly>\n                                    <div style=\"font-size: 15px;\" class=\"error\"\n                                        *ngIf=\"(submitted && addForm.controls.po_number.invalid) || addForm.controls.po_number.touched\">\n                                        <div *ngIf=\"addForm.hasError('required','po_number')\" class=\"err-msg\">PO\n                                            number is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li> -->\n            </ul>\n          </div>\n          <!-- <div *ngIf=\"orderData?.order_status == 'OPEN'\" -->\n          <div class=\"d-flex flex-wrap justify-content-end align-items-start mb-0\">\n            <div class=\"form-group mr-2\" *ngIf=\"addForm.controls.invoice_no.value && orderData?.amount_due\">\n              <button class=\"btn btn-md btn-primary\" type=\"button\"\n                (click)=\"applyCreditModal.show(); dtTrigger1.next();\">\n                <i class=\"fa fa-plus mr-2\"></i>\n                Apply Credit\n              </button>\n            </div>\n            <div class=\"form-group\" *ngIf=\"addForm.controls.payment_status.value != 'FULL'\">\n              <button class=\"btn btn-md btn-primary\" type=\"button\"\n                (click)=\"resetaddProductForm();getVendorData(); addmodal.show();\">\n                <i class=\"fa fa-plus mr-2\"></i>\n                Add New Product\n              </button>\n            </div>\n            <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n              <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\"><i\n                  class=\"fa fa-file-export mr-2\n                            \"></i>Export</button>\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a>\n                <!-- <a href=\"javascript:void(0)\" (click)=\"commonService.exportPDF(true, 11, 'orderList');rerender();\">Export to PDF</a> -->\n                <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n              </div>\n            </div>\n          </div>\n          <perfect-scrollbar>\n            <div class=\"responsive-table rounded mb-4\">\n              <table datatable [dtOptions]=\"dtOptions[0]\" [dtTrigger]=\"dtTrigger0\"\n                class=\"data row-border hover table order-table border\">\n                <thead>\n                  <tr>\n                    <!-- <th>Id</th> -->\n                    <th>Product Name</th>\n                    <th>Item <br> Number</th>\n                    <th>Category Name</th>\n                    <th>Quantity</th>\n                    <th>Price</th>\n                    <th>Discount</th>\n                    <th>Net Price</th>\n                    <!-- <th>Sales Rate</th> -->\n                    <th>Order <br> Amount</th>\n                    <!-- <th>Final Order <br> Amount </th> -->\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let product of productList;let i = index;\">\n                    <td style=\"white-space: nowrap;\">\n                      {{product.order_product_name ? product.order_product_name : product.product_name || \"-\"}}\n                    </td>\n                    <td>{{product.item_no || \"-\"}}</td>\n                    <td>{{product.category_name || \"-\"}}</td>\n                    <td>{{product.quantity ? (product.quantity | number : '1.2-2') : \"0.00\"}}</td>\n                    <td>{{product.order_price ? (\"$\"+(product.order_price | number : '1.2-2')) :\n                      \"-\"}}\n                    </td>\n                    <td>{{product.discount ? (\"$\"+(product.discount | number : '1.2-2')) : \"$0.00\"}}\n                    <td>{{product.order_net_price ? (\"$\"+(product.order_net_price | number :\n                      '1.2-2')) : \"$0.00\"}}\n                    </td>\n                    <!-- <td>{{product.sales_rate ? (\"$\"+product.sales_rate) : \"-\"}}</td> -->\n                    <td>{{product.final_order_amount ? (\"$\"+(product.final_order_amount | number :\n                      '1.2-2')) :\n                      \"$0.00\"}}</td>\n                    <!-- <td>{{product.final_order_amount ? (\"$\"+(product.final_order_amount | number :\n                                            '1.2-2')) : \"$0.00\"}}</td> -->\n                    <td>\n                      <div class=\"d-flex align-items-center justify-content-center\"\n                        *ngIf=\"addForm.controls.payment_status.value != 'FULL'\">\n                        <a class=\"text-dark mx-2\" href=\"javascript:void(0)\"\n                          (click)=\"openEditModel(product,product.order_quantity_id);\"><i class=\"fa fa-pencil\"></i></a>\n                        <!-- <a *ngIf=\"!isDelivered\" class=\"text-dark mx-2\" href=\"javascript:void(0)\"\n                                                    (click)=\"openEditModel(product,product.order_quantity_id);\"><i\n                                                        class=\"fa fa-pencil\"></i></a> -->\n                        <a class=\"text-danger mx-2\" href=\"javascript:void(0)\"\n                          (click)=\"deleteModal.show();changeId(product?.order_quantity_id);\"><i\n                            class=\"far fa-trash-alt\"></i></a>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"productList?.length == 0\">\n                    <td colspan=\"8\" class=\"no-data-available\">No Data Found !</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </perfect-scrollbar>\n          <div class=\"calcuted-data\">\n            <ul class=\"justify-content-end\">\n              <li>\n                <strong>Sub Total</strong>\n                <span>\n                  {{orderData?.sub_total ? (\"$ \"+(orderData?.sub_total | number : '1.2-2')) : \"$\n                  0.00\"}}\n                </span>\n              </li>\n              <li *ngIf=\"orderData?.applied_credit != 0 && orderData?.applied_credit != null\">\n                <strong>Credit Applied</strong>\n                <span>\n                  {{orderData?.applied_credit ? (\"$ \"+(orderData?.applied_credit | number :\n                  '1.2-2')) : \"$ 0.00\"}}\n                </span>\n              </li>\n              <li *ngIf=\"orderData?.applied_credit != 0 && orderData?.applied_credit != null\">\n                <strong>Credit Memo No.</strong>\n                <span>\n                  <span *ngFor=\"let no of orderData?.creditmemo_list; let isLast=last\">\n                    {{no}}{{isLast ? '' : ', '}}\n                  </span>\n                </span>\n              </li>\n              <li>\n                <strong>Total</strong>\n                <span>\n                  {{orderData?.total ? (\"$ \"+(orderData?.total | number : '1.2-2')) : \"$\n                  0.00\"}}\n                </span>\n              </li>\n              <li>\n                <strong>Amount Received</strong>\n                <span>{{orderData?.amount_received ? (\"$ \"+(orderData?.amount_received | number :\n                  '1.2-2')) : \"$ 0.00\"}}</span>\n              </li>\n              <li>\n                <strong>Amount Due</strong>\n                <span>{{orderData?.amount_due ? (\"$ \"+(orderData?.amount_due | number : '1.2-2')) : \"$\n                  0.00\"}}</span>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12 py-3 text-center\">\n            <!-- <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\"\n                            *ngIf=\"orderData?.order_status == 'OPEN'\">Save</button> -->\n            <!-- <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Save</button>\n                        <button class=\"btn btn-md btn-secondary\" type=\"button\" [routerLink]=\"['/sales-management']\"\n                            [queryParams]='{vs: selectedVerificationStatus, os: selectedOrderStatus, sn: selectedStoreName, ps: selectedPaymentStatus, fdd: selectedFromDueDate, tdd: selectedToDueDate, fd: selectedFromDate, td: selectedToDate, limit: this.tableLimit, firstTime: true, search: salesSearchValue}'>Cancel</button> -->\n            <a *ngIf=\"!fromProductOrder\" [routerLink]=\"['/sales-management']\"\n              [queryParams]='{vs: selectedVerificationStatus, os: selectedOrderStatus, sn: selectedStoreName, ps: selectedPaymentStatus, fdd: selectedFromDueDate, tdd: selectedToDueDate, fd: selectedFromDate, td: selectedToDate, limit: this.tableLimit, firstTime: true, search: salesSearchValue}'\n              class=\"btn btn-md btn-secondary\" type=\"button\">Back</a>\n            <a *ngIf=\"fromProductOrder\" (click)=\"goPreviousUrl();\" class=\"btn btn-md btn-secondary\"\n              type=\"button\">Back</a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div bsModal #addmodal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-md modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n        <h2 class=\"font-weight-bold mb-4 text-primary\">Add Product</h2>\n        <form class=\"d-inline-block w-100 text-left\" [formGroup]=\"addProductForm\" (ngSubmit)=\"submitAddProductForm()\"\n          #formDir=\"ngForm\" novalidate>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Select Product Category:</label>\n                <select (change)=\"changeVendor()\" [(ngModel)]=\"selectedCategory\" formControlName=\"product_category\"\n                  class=\"form-control\">\n                  <option value=\"\" disabled selected>Select Product Category</option>\n                  <option *ngFor=\"let category of categoryData\" [value]=\"category.id\">\n                    {{category.name}}</option>\n                </select>\n                <div class=\"error\"\n                  *ngIf=\"(addProductSubmitted && addProductForm.controls.product_category.invalid) || addProductForm.controls.product_category.touched\">\n                  <div *ngIf=\"addProductForm.hasError('required','product_category')\" class=\"err-msg\">\n                    Product category is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Select Vendor:</label>\n                <select (change)=\"changeVendor()\" [(ngModel)]=\"selectedVendor\" formControlName=\"vendor\"\n                  class=\"form-control\">\n                  <!-- <option value=\"\" disabled selected>Select Vendor</option> -->\n                  <option *ngFor=\"let vendor of vendorData; let i=index\" [selected]=\"i==0\" [value]=\"vendor.id\">\n                    {{vendor.name}}</option>\n                </select>\n                <div class=\"error\"\n                  *ngIf=\"(addProductSubmitted && addProductForm.controls.vendor.invalid) || addProductForm.controls.vendor.touched\">\n                  <div *ngIf=\"addProductForm.hasError('required','vendor')\" class=\"err-msg\">\n                    Vendor is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Product Name:</label>\n                <select (change)=\"changeProduct()\" [(ngModel)]=\"selectedProduct\" formControlName=\"product_name\"\n                  class=\"form-control\">\n                  <option value=\"\" disabled selected>Select Product</option>\n                  <option *ngFor=\"let product of productDropdownData\" [value]=\"product.product_id\">\n                    {{product.product_name}}</option>\n                </select>\n                <div class=\"error\"\n                  *ngIf=\"(addProductSubmitted && addProductForm.controls.product_name.invalid) || addProductForm.controls.product_name.touched\">\n                  <div *ngIf=\"addProductForm.hasError('required','product_name')\" class=\"err-msg\">\n                    Product name is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Packsize:</label>\n                                <select (change)=\"selectPackSize(1);changeOrderAmount(2);\"\n                                    [(ngModel)]=\"selectedPacksize\" formControlName=\"packsize_id\" class=\"form-control\">\n                                    <option value=\"\" disabled selected>Select Packsize</option>\n                                    <option *ngFor=\"let packSize of packSizeData\" [value]=\"packSize.id\">\n                                        {{packSize.pack_size}}</option>\n                                </select>\n                                <div class=\"error\"\n                                    *ngIf=\"(addProductSubmitted && addProductForm.controls.packsize_id.invalid) || addProductForm.controls.packsize_id.touched\">\n                                    <div *ngIf=\"addProductForm.hasError('required','packsize_id')\" class=\"err-msg\">\n                                        Packsize is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Quantity:</label>\n                <!-- <select [(ngModel)]=\"selectedQuantity\" formControlName=\"quantity\" class=\"form-control\">\n                                    <option value=\"\" disabled selected>Select Quantity</option>\n                                    <option value=\"out_of_stock\">Out of Stock</option>\n                                    <option value=\"low_stock\">Low Stock</option>\n                                </select> -->\n                <input (keyup)=\"selectPackSize(1);changeOrderAmount(1);\"\n                  (change)=\"selectPackSize(1);changeOrderAmount(1);\" formControlName=\"quantity\" class=\"form-control\"\n                  type=\"number\" placeholder=\"Enter Quantity\">\n                <div class=\"error\"\n                  *ngIf=\"(addProductSubmitted && addProductForm.controls.quantity.invalid) || addProductForm.controls.quantity.touched\">\n                  <div *ngIf=\"addProductForm.hasError('required','quantity')\" class=\"err-msg\">Quantity\n                    is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Sales Rate:</label>\n                                <input formControlName=\"sales_rate\" class=\"form-control\"   type=\"text\" placeholder=\"Enter Sales Rate\">\n                                <div class=\"error\"\n                                      *ngIf=\"(addProductSubmitted && addProductForm.controls.sales_rate.invalid) || addProductForm.controls.sales_rate.touched\">\n                                      <div *ngIf=\"addProductForm.hasError('required','sales_rate')\" class=\"err-msg\">Sales rate is required.\n                                      </div>\n                                    </div>\n                            </div>\n                        </div> -->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Price:</label>\n                <!-- (keyup)=\"changeOrderAmount(1);chnageValue(1);\" -->\n                <input disabled [(ngModel)]=\"prise\" formControlName=\"price\" class=\"form-control\" type=\"number\"\n                  placeholder=\"Enter Price\">\n                <div class=\"error\"\n                  *ngIf=\"(addProductSubmitted && addProductForm.controls.price.invalid) || addProductForm.controls.price.touched\">\n                  <div *ngIf=\"addProductForm.hasError('required','price')\" class=\"err-msg\">\n                    Price is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Discount:</label>\n                <!-- (change)=\"changeDiscount()\"  -->\n                <input (keyup)=\"changeOrderAmount(1);\" formControlName=\"discount\" class=\"form-control\" type=\"number\"\n                  placeholder=\"Discount\">\n                <div class=\"error\"\n                  *ngIf=\"(addProductSubmitted && addProductForm.controls.discount.invalid) || addProductForm.controls.discount.touched\">\n                  <div *ngIf=\"addProductForm.hasError('required','discount')\" class=\"err-msg\">Discount\n                    is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Final Amount :</label>\n                <input (keyup)=\"changeOrderAmount(1);\" [(ngModel)]=\"finalAmount\" formControlName=\"final_amount\"\n                  class=\"form-control\" type=\"number\" placeholder=\"Enter Final Amount\">\n                <div class=\"error\"\n                  *ngIf=\"(addProductSubmitted && addProductForm.controls.final_amount.invalid) || addProductForm.controls.final_amount.touched\">\n                  <div *ngIf=\"addProductForm.hasError('required','final_amount')\" class=\"err-msg\">\n                    Final amount is required.\n                  </div>\n                </div>\n                <div\n                  *ngIf=\"!addProductForm.hasError('required','final_amount') && minThreeSoldLimitError == '0' && threeSoldLimit != '0'\"\n                  class=\"err-msg\">\n                  {{threeSoldLimit}}\n                </div>\n                <div\n                  *ngIf=\"!addProductForm.hasError('required','final_amount') && threeSoldLimit == '0' && minThreeSoldLimitError != '0'\"\n                  class=\"err-msg\">\n                  {{minThreeSoldLimitError}}\n                </div>\n              </div>\n            </div>\n            <div class=\"modal-footer justify-content-start flex-wrap w-100 pb-0\">\n              <button type=\"submit\" class=\"btn btn-dark mr-3\">ADD</button>\n              <button type=\"button\" class=\"btn btn-secondary\"\n                (click)=\"addmodal.hide();resetaddProductForm();\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #editmodal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-md modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n        <h2 class=\"font-weight-bold mb-4 text-primary\">Edit Product</h2>\n        <form class=\"d-inline-block w-100 text-left\" [formGroup]=\"editProductForm\" (ngSubmit)=\"submitEditProductForm()\"\n          #formDir=\"ngForm\" novalidate>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Select Product Category:</label>\n                <select [(ngModel)]=\"selectedCategory\" formControlName=\"product_category\" class=\"form-control\">\n                  <option value=\"\" disabled selected>Select Product Category</option>\n                  <option *ngFor=\"let category of categoryData\" [value]=\"category.id\">\n                    {{category.name}}</option>\n                </select>\n                <div class=\"error\"\n                  *ngIf=\"(editProductSubmitted && editProductForm.controls.product_category.invalid) || editProductForm.controls.product_category.touched\">\n                  <div *ngIf=\"editProductForm.hasError('required','product_category')\" class=\"err-msg\">Product category\n                    is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Select Vendor:</label>\n                <select (change)=\"changeVendor()\" [(ngModel)]=\"selectedVendor\" formControlName=\"vendor\"\n                  class=\"form-control\">\n                  <option value=\"\" disabled selected>Select Vendor</option>\n                  <option *ngFor=\"let vendor of vendorData\" [value]=\"vendor.id\">\n                    {{vendor.name}}</option>\n                </select>\n                <div class=\"error\"\n                  *ngIf=\"(editProductSubmitted && editProductForm.controls.vendor.invalid) || editProductForm.controls.vendor.touched\">\n                  <div *ngIf=\"editProductForm.hasError('required','vendor')\" class=\"err-msg\">\n                    Vendor is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Product Name:</label>\n                <!-- <select (change)=\"changeProduct()\" [(ngModel)]=\"selectedProduct\"\n                                    formControlName=\"product_name\" class=\"form-control\">\n                                    <option value=\"\" disabled selected>Select Product</option>\n                                    <option *ngFor=\"let product of productDropdownData\" [value]=\"product.product_id\">\n                                        {{product.product_name}}</option>\n                                </select> -->\n                <input formControlName=\"product_name\" class=\"form-control\" type=\"text\" placeholder=\"Enter Product Name\">\n                <div class=\"error\"\n                  *ngIf=\"(editProductSubmitted && editProductForm.controls.product_name.invalid) || editProductForm.controls.product_name.touched\">\n                  <div *ngIf=\"editProductForm.hasError('required','product_name')\" class=\"err-msg\">\n                    Product name is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Packsize:</label>\n                                <select (change)=\"selectPackSize(2);changeOrderAmount(2);\" [(ngModel)]=\"selectedPacksize\"\n                                    formControlName=\"packsize_id\" class=\"form-control\">\n                                    <option value=\"\" disabled selected>Select Packsize</option>\n                                    <option *ngFor=\"let packSize of packSizeData\" [value]=\"packSize.id\">\n                                        {{packSize.pack_size}}</option>\n                                </select>\n                                <div class=\"error\"\n                                    *ngIf=\"(editProductSubmitted && editProductForm.controls.packsize_id.invalid) || editProductForm.controls.packsize_id.touched\">\n                                    <div *ngIf=\"editProductForm.hasError('required','packsize_id')\" class=\"err-msg\">\n                                        Packsize is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Quantity:</label>\n                <!-- <select [(ngModel)]=\"selectedQuantity\" formControlName=\"quantity\" class=\"form-control\">\n                                    <option value=\"\" disabled selected>Select Quantity</option>\n                                    <option value=\"out_of_stock\">Out of Stock</option>\n                                    <option value=\"low_stock\">Low Stock</option>\n                                </select> -->\n                <input (keyup)=\"changeOrderAmount(2);\" (change)=\"changeOrderAmount(2);\" formControlName=\"quantity\"\n                  class=\"form-control\" type=\"number\" placeholder=\"Enter Quantity\">\n                <div class=\"error\"\n                  *ngIf=\"(editProductSubmitted && editProductForm.controls.quantity.invalid) || editProductForm.controls.quantity.touched\">\n                  <div *ngIf=\"editProductForm.hasError('required','quantity')\" class=\"err-msg\">\n                    Quantity is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Price:</label>\n                <!-- (keyup)=\"changeOrderAmount(2);chnageValue(2)\" -->\n                <input [(ngModel)]=\"orderAmount\" (keyup)=\"changeOrderAmount(2)\" formControlName=\"order_amount\"\n                  class=\"form-control\" type=\"text\" placeholder=\"Enter Price\">\n                <div class=\"error\"\n                  *ngIf=\"(editProductSubmitted && editProductForm.controls.order_amount.invalid) || editProductForm.controls.order_amount.touched\">\n                  <div *ngIf=\"editProductForm.hasError('required','order_amount')\" class=\"err-msg\">\n                    Price is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Discount:</label>\n                <input (keyup)=\"changeOrderAmount(2)\" formControlName=\"discount\" class=\"form-control\" type=\"number\"\n                  placeholder=\"Discount\"\n                  oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\">\n                <div class=\"error\"\n                  *ngIf=\"(editProductSubmitted && editProductForm.controls.discount.invalid) || editProductForm.controls.discount.touched\">\n                  <div *ngIf=\"editProductForm.hasError('required','discount')\" class=\"err-msg\">\n                    Discount is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Final Amount :</label>\n                <input disabled [(ngModel)]=\"finalAmount\" formControlName=\"final_amount\" class=\"form-control\"\n                  type=\"text\" placeholder=\"Final Amount\">\n                <div class=\"error\"\n                  *ngIf=\"(editProductSubmitted && editProductForm.controls.final_amount.invalid) || editProductForm.controls.final_amount.touched\">\n                  <div *ngIf=\"editProductForm.hasError('required','final_amount')\" class=\"err-msg\">\n                    Final amount is required.\n                  </div>\n                </div>\n                <div\n                  *ngIf=\"!editProductForm.hasError('required','final_amount') && minThreeSoldLimitError == '0' && threeSoldLimit != '0'\"\n                  class=\"err-msg\">\n                  {{threeSoldLimit}}\n                </div>\n                <div\n                  *ngIf=\"!editProductForm.hasError('required','final_amount') && threeSoldLimit == '0' && minThreeSoldLimitError != '0'\"\n                  class=\"err-msg\">\n                  {{minThreeSoldLimitError}}\n                </div>\n              </div>\n            </div>\n            <div class=\"modal-footer justify-content-start flex-wrap w-100 pb-0\">\n              <button type=\"submit\" class=\"btn btn-dark mr-3\">Edit</button>\n              <button type=\"button\" class=\"btn btn-secondary\"\n                (click)=\"editmodal.hide();editProductForm.reset();\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n        <h2 class=\"font-weight-bold mb-4 text-primary\">Delete</h2>\n        <p class=\"mb-0\">Are You Sure You Want To Delete ?</p>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">Cancel</button>\n        <button (click)=\"deleteProduct()\" type=\"button\" class=\"btn btn-danger\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div bsModal #applyCreditModal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"Delete\" aria-hidden=\"true\" [config]=\"{backdrop: 'static',  keyboard: false}\">\n  <div class=\"modal-dialog modal-xl modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n        <h2 class=\"font-weight-bold mb-4 text-primary\">Credit</h2>\n        <perfect-scrollbar>\n          <div class=\"responsive-table rounded mb-4\">\n            <table style=\"width: 100%;\" datatable [dtOptions]=\"dtOptions[1]\" [dtTrigger]=\"dtTrigger1\"\n              class=\"data row-border hover table order-table border\" id=\"excel-table\">\n              <thead>\n                <tr>\n                  <th>Select</th>\n                  <th>Credit Memo No#</th>\n                  <th>Credit Memo Date</th>\n                  <th>Invoice No#</th>\n                  <th>Available Credit</th>\n                  <!-- <th>Credit Applied Invoice No#</th> -->\n                  <th>Store Name</th>\n                  <th>Amount to Apply</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let creditMemoDetails of creditMemoList;let i = index;\">\n                  <td>\n                    <div class=\"custom-control custom-checkbox\">\n                      <input type=\"checkbox\" class=\"custom-control-input\"\n                        (click)=\"creditMemoDetails.checked = !creditMemoDetails.checked; creditMemoDetails.checked ? (creditMemoDetails.amountToApply = creditMemoDetails. updated_credit_amount) : (creditMemoDetails.amountToApply = null);\"\n                        [id]=\"'checkbox' + creditMemoDetails.id\" [checked]=\"creditMemoDetails.checked\">\n                      <label class=\"custom-control-label\" [for]=\"'checkbox' + creditMemoDetails.id\"></label>\n                    </div>\n                  </td>\n                  <td>{{creditMemoDetails.cm_no || \"-\"}}</td>\n                  <td style=\"width: 10px;\">\n                    {{creditMemoDetails.created_at ? (creditMemoDetails.created_at | date:\n                    'MM-dd-yyyy') : \"-\"}}\n                  </td>\n                  <td style=\"text-align: center;\">\n                    {{creditMemoDetails.invoice_no || \"-\"}}\n                  </td>\n                  <td>\n                    {{creditMemoDetails.updated_credit_amount ? \"$\" + (creditMemoDetails.\n                    updated_credit_amount |\n                    number:\"1.2-2\") :\n                    \"$0.00\"}}\n                  </td>\n                  <!-- <td>{{creditMemoDetails.credit_applied_invoice_no || \"-\"}}</td> -->\n                  <td style=\"white-space: nowrap;\">\n                    {{creditMemoDetails.store_name || \"-\"}}\n                  </td>\n                  <td>\n                    <input style=\"width: 90px;\" class=\"form-control quantity\" type=\"number\" #amountToApply\n                      [value]=\"creditMemoDetails.amountToApply\"\n                      (change)=\"changePaymentValue(amountToApply.value, creditMemoDetails.id)\"\n                      (keyup)=\"amountToApply.value > creditMemoDetails. updated_credit_amount ? amountToApply.value = creditMemoDetails. updated_credit_amount : amountToApply.value; amountToApply.value != '' ? creditMemoDetails.checked = true : creditMemoDetails.checked = false\">\n                  </td>\n                </tr>\n                <tr *ngIf=\"creditMemoList?.length == 0\">\n                  <td colspan=\"8\" class=\"no-data-available\">No Data Found !</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </perfect-scrollbar>\n        <div class=\"modal-footer justify-content-center\">\n          <button (click)=\"submitAmountToApply()\" type=\"button\" class=\"btn btn-primary\">Apply</button>\n          <button type=\"button\" class=\"btn btn-secondary\"\n            (click)=\"applyCreditModal.hide(); rerenderCreditMemo();\">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/sales-management/sales-management.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/sales-management/sales-management.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <!-- <div class=\"card-header\">Sales Management</div> -->\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Sales Management\n          <div class=\"d-flex flex-wrap justify-content-end align-items-center\">\n            <div class=\"dropdown pull-right\">\n              <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\">\n                <i class=\"fa fa-file-export mr-2\"></i>\n                Export\n              </button>\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\"\n                  style=\"font-size: small; text-decoration: none;\">\n                  Export to XLSX\n                </a>\n                <!-- <a href=\"javascript:void(0)\"\n                                (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n                <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body p-4\">\n          <ul class=\"row custom-box\">\n            <li>\n              <div class=\"card text-white bg-orange\" style=\"min-height: 161px;\">\n                <div class=\"card-body pb-0\">\n                  <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\n                  </button>\n                  <div class=\"text-value\">Amount to be received</div>\n                  <div *ngIf=\"!selectedFromDate && !selectedToDate && !selectedFromDueDate && !selectedToDueDate\">\n                    till {{dashboardCommonData?.date}}</div>\n                  <h3 style=\"margin-top: 20px;\">{{dashboardData?.remaining_amount ? (\"$\n                    \"+(dashboardData?.remaining_amount | number : '1.2-2')) : \"$0.00\"}}</h3>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"card text-white bg-orange\" style=\"min-height: 161px;\">\n                <div class=\"card-body pb-0\">\n                  <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\n                  </button>\n                  <div class=\"text-value\">Amount Received</div>\n                  <div *ngIf=\"!selectedFromDate && !selectedToDate && !selectedFromDueDate && !selectedToDueDate\">\n                    till {{dashboardCommonData?.date}}</div>\n                  <h3 style=\"margin-top: 20px;\">{{dashboardData?.amount_recieved ? (\"$\n                    \"+(dashboardData?.amount_recieved | number : '1.2-2')) : \"$0.00\"}}</h3>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"card text-white bg-orange\" style=\"min-height: 161px;\">\n                <div class=\"card-body pb-0\">\n                  <div class=\"btn-group float-right\">\n                    <button type=\"button\" class=\"btn btn-transparent p-0\">\n                    </button>\n                  </div>\n                  <div class=\"text-value\">Total Amount of Orders </div>\n                  <div *ngIf=\"!selectedFromDate && !selectedToDate && !selectedFromDueDate && !selectedToDueDate\">\n                    till {{dashboardCommonData?.date}}</div>\n                  <h3 style=\"margin-top: 20px;\">{{dashboardData?.total_amount ? (\"$\n                    \"+(dashboardData?.total_amount | number : '1.2-2')) : \"$0.00\"}}</h3>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"card text-white bg-orange\" style=\"min-height: 161px;\">\n                <div class=\"card-body pb-0\">\n                  <div class=\"btn-group float-right\">\n                    <button type=\"button\" class=\"btn btn-transparent p-0\">\n                    </button>\n                  </div>\n                  <div class=\"text-value\" style=\"margin-bottom: 22px;\">Open Orders </div>\n                  <h3 style=\"margin-top: 62px;\">{{dashboardData?.open_order}}</h3>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"card text-white bg-orange\" style=\"min-height: 161px;\">\n                <div class=\"card-body pb-0\">\n                  <div class=\"btn-group float-right\">\n                    <button type=\"button\" class=\"btn btn-transparent p-0\">\n                    </button>\n                  </div>\n                  <div class=\"text-value\" style=\"margin-bottom: 22px;\">Completed Orders</div>\n                  <h3 style=\"margin-top: 37px;\">{{dashboardData?.completed_orders}}</h3>\n                </div>\n              </div>\n            </li>\n          </ul>\n          <div class=\"responsive-table rounded mb-4\">\n            <form class=\"row justify-content-start align-items-center mb-3\">\n              <div class=\"col-sm-12 mb-2\">\n                <h4 class=\"d-block\">Filter BY :</h4>\n                <div class=\"btn-group float-right\">\n                  <button (click)=\"rerender()\" class=\"btn btn-md btn-dark\" style=\"margin-top: -40px;\"\n                    type=\"button\">Filter</button>\n                </div>\n              </div>\n              <div class=\"col-md-3 col-sm-12\">\n                <div class=\"form-group\">\n                  <label>From Date</label>\n                  <input [(ngModel)]=\"selectedFromDate\" [ngModelOptions]=\"{standalone: true}\" type=\"text\"\n                    placeholder=\"From Date\" class=\"form-control\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n                </div>\n              </div>\n              <div class=\"col-md-3 col-sm-12\">\n                <div class=\"form-group\">\n                  <label>To Date</label>\n                  <input [(ngModel)]=\"selectedToDate\" [ngModelOptions]=\"{standalone: true}\" type=\"text\"\n                    placeholder=\"To Date\" class=\"form-control\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n                </div>\n              </div>\n              <!-- <div class=\"col-md-3 col-sm-12\">\n                                <div class=\"form-group\">\n                                    <label>Payment Method</label>\n                                    <select [(ngModel)]=\"selectedMode\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                                        <option value=\"CASH\">Cash</option>\n                                        <option value=\"CHEQUE\">Check</option>\n                                        <option value=\"ONLINE\">Online</option>\n                                    </select>\n                                </div>\n                            </div> -->\n              <!-- <div class=\"col-md-3 col-sm-12\">\n                                <div class=\"form-group\">\n                                    <label>Search by </label>\n                                    <input class=\"form-control\" placeholder=\"Enter Check/Transaction or reference no#\"\n                                        type=\"text\">\n                                </div>\n                            </div> -->\n              <div class=\"col-md-3 col-sm-12\">\n                <div class=\"form-group\">\n                  <label>From Due Date </label>\n                  <input [(ngModel)]=\"selectedFromDueDate\" [ngModelOptions]=\"{standalone: true}\" type=\"text\"\n                    placeholder=\"From Due Date\" class=\"form-control\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n                </div>\n              </div>\n              <div class=\"col-md-3 col-sm-12\">\n                <div class=\"form-group\">\n                  <label>To Due Date </label>\n                  <input [(ngModel)]=\"selectedToDueDate\" [ngModelOptions]=\"{standalone: true}\" type=\"text\"\n                    placeholder=\"To Due Date\" class=\"form-control\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n                </div>\n              </div>\n              <div class=\"col-md-3 col-sm-12\">\n                <div class=\"form-group\">\n                  <label>Payment Status</label>\n                  <select [(ngModel)]=\"selectedPaymentStatus\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\"\n                    name=\"Category-Name\">\n                    <option value=\"\">All</option>\n                    <option value=\"FULL\">Paid (Cleared)</option>\n                    <option value=\"NOT_PAID\">Not Paid</option>\n                    <option value=\"PARTIAL\">Partially Paid</option>\n                  </select>\n                </div>\n              </div>\n              <!-- <div class=\"col-md-3 col-sm-12\">\n                                <div class=\"form-group\">\n                                    <label>Customer Name </label>\n                                    <input [(ngModel)]=\"selectedCustomerName\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Enter Customer Name \" type=\"text\">\n                                </div>\n                            </div> -->\n              <div class=\"col-md-3 col-sm-12\">\n                <div class=\"form-group\">\n                  <label>Store Name </label>\n                  <input [(ngModel)]=\"selectedStoreName\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\"\n                    placeholder=\"Enter Store Name \" type=\"text\">\n                </div>\n              </div>\n              <div class=\"col-md-3 col-sm-12\">\n                <div class=\"form-group\">\n                  <label>Order Status </label>\n                  <select [(ngModel)]=\"selectedOrderStatus\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\"\n                    name=\"Category-Name\">\n                    <option value=\"\">All</option>\n                    <option value=\"OPEN\">Open</option>\n                    <option value=\"IN_PROCESS\">In Process</option>\n                    <option value=\"COMPLETED\">Completed</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-md-3 col-sm-12\">\n                <div class=\"form-group\">\n                  <label>Verification Status</label>\n                  <select [(ngModel)]=\"selectedVerificationStatus\" [ngModelOptions]=\"{standalone: true}\"\n                    class=\"form-control\" name=\"Category-Name\">\n                    <option value=\"\">All</option>\n                    <option value=1>Verified</option>\n                    <option value=0>Not Verified</option>\n                  </select>\n                </div>\n              </div>\n              <!-- <div class=\"col-sm-3\">\n                                <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\" style=\"margin-top: 12px;\"\n                                    type=\"button\">Filter</button>\n                            </div> -->\n            </form>\n            <!-- <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;margin-top: -50px;\">\n                            <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                                type=\"button\"><i class=\"fa fa-file-export mr-2\n                            \"></i>Export</button>\n                            <div id=\"myDropdown\" class=\"dropdown-content\">\n                                <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a> -->\n            <!-- <a href=\"javascript:void(0)\" (click)=\"commonService.exportPDF(true, 11, 'orderList');rerender();\">Export to PDF</a> -->\n            <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n            <!-- </div>\n                        </div> -->\n            <perfect-scrollbar>\n              <table style=\"width: 100%;\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                class=\"data row-border hover table order-table border\" id=\"excel-table\">\n                <thead>\n                  <tr>\n                    <th>Order<br>Date</th>\n                    <th>Invoice<br>No</th>\n                    <th>PO No</th>\n                    <!-- <th>Customer Name</th> -->\n                    <th>Store Name</th>\n                    <th>Payment<br>Due Date</th>\n                    <th>Order<br>Amount</th>\n                    <th>Order<br>Status</th>\n                    <!-- <th>Order <br> Verification</th> -->\n                    <th>Order <br>Amount <br> Received</th>\n                    <th>Open <br> Balance</th>\n                    <th>Profit</th>\n                    <th>Profit<br> Percentage</th>\n                    <th>Payment <br> Status</th>\n                    <th>Salesman</th>\n                    <th id=\"last-header\">Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let sales of salesList;let i = index;\">\n                    <td style=\"width: 10px;\">\n                      <a [routerLink]=\"['/sales-management/order-invoice']\"\n                        [queryParams]='{id: sales?.id, customer_id: sales?.customer, verified: sales?.verfication_status, paymentStatus:sales?.payment_status, isDelivered: sales?.delivered_status, vs: selectedVerificationStatus, os: selectedOrderStatus, sn: selectedStoreName, ps: selectedPaymentStatus, fdd: selectedFromDueDate, tdd: selectedToDueDate, fd: selectedFromDate, td: selectedToDate, limit: tableLimit, search: searchValue}'\n                        class=\"anchor-tag\">\n                        {{sales.created_at ? (sales.created_at | date: 'MM-dd-yyyy') : \"-\"}}\n                      </a>\n                    </td>\n                    <td style=\"text-align: center;\">\n                      <a [routerLink]=\"['/sales-management/order-invoice']\"\n                        [queryParams]='{id: sales?.id, customer_id: sales?.customer, verified: sales?.verfication_status, paymentStatus:sales?.payment_status, isDelivered: sales?.delivered_status, vs: selectedVerificationStatus, os: selectedOrderStatus, sn: selectedStoreName, ps: selectedPaymentStatus, fdd: selectedFromDueDate, tdd: selectedToDueDate, fd: selectedFromDate, td: selectedToDate, limit: tableLimit, search: searchValue}'\n                        class=\"text-primary mx-2\">\n                        {{sales.invoice_no || \"-\"}}\n                      </a>\n                    </td>\n                    <td>\n                      <a [routerLink]=\"['/sales-management/order-invoice']\"\n                        [queryParams]='{id: sales?.id, customer_id: sales?.customer, verified: sales?.verfication_status, paymentStatus:sales?.payment_status, isDelivered: sales?.delivered_status, vs: selectedVerificationStatus, os: selectedOrderStatus, sn: selectedStoreName, ps: selectedPaymentStatus, fdd: selectedFromDueDate, tdd: selectedToDueDate, fd: selectedFromDate, td: selectedToDate, limit: tableLimit, search: searchValue}'\n                        class=\"text-primary mx-2\">\n                        {{sales.po_num || \"-\"}}\n                      </a>\n                    </td>\n                    <td style=\"white-space: nowrap;\">\n                      <a [routerLink]=\"['/sales-management/order-invoice']\"\n                        [queryParams]='{id: sales?.id, customer_id: sales?.customer, verified: sales?.verfication_status, paymentStatus:sales?.payment_status, isDelivered: sales?.delivered_status, vs: selectedVerificationStatus, os: selectedOrderStatus, sn: selectedStoreName, ps: selectedPaymentStatus, fdd: selectedFromDueDate, tdd: selectedToDueDate, fd: selectedFromDate, td: selectedToDate, limit: tableLimit, search: searchValue}'\n                        class=\"anchor-tag\">\n                        {{sales.store_name || \"-\"}}\n                      </a>\n                    </td>\n                    <td>{{sales.due_date ? (sales.due_date | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                    <td>{{sales.amount ? (\"$\"+(sales.amount | number : '1.2-2')) : \"$0.00\"}}</td>\n                    <td>\n                      <span *ngIf=\"sales.status == 'OPEN' || sales.status == 'IN_PROCESS'\">\n                        {{sales.status}}\n                      </span>\n                      <span *ngIf=\"sales.status == 'COMPLETED' && !sales.delivered_status\">\n                        {{sales.status}}<br>\n                        <span class=\"text-success\" [ngClass]=\"{'text-danger': !sales.verfication_status}\">\n                          {{sales.verfication_status ? \"Verified\" : \"Not Verified\"}}\n                        </span>\n                      </span>\n                      <span *ngIf=\"sales.status == 'COMPLETED' && sales.delivered_status\">\n                        {{sales.status}}<br>\n                        <span class=\"text-success\" [ngClass]=\"{'text-danger': !sales.verfication_status}\">\n                          {{sales.verfication_status ? \"Verified\" : \"Not Verified\"}}\n                        </span><br>\n                        <span class=\"text-primary\">\n                          {{sales.delivered_status ? \"Delivered\" : \"Not Delivered\"}}\n                        </span>\n                      </span>\n                    </td>\n                    <td>{{sales.amount_recieved ? (\"$\"+(sales.amount_recieved | number : '1.2-2')) :\n                      \"$0.00\"}}</td>\n                    <td>{{sales.remaining_amount ? (\"$\"+(sales.remaining_amount | number : '1.2-2'))\n                      : \"$0.00\"}}</td>\n                    <td>{{sales.order_profit ? (\"$\"+(sales.order_profit | number : '1.2-2')) :\n                      \"$0.00\"}}\n                    </td>\n                    <td>{{sales.order_profit_percentage + \"%\"}}\n                    </td>\n                    <td>\n                      <span *ngIf=\"sales?.payment_status == 'NOT_PAID'\" class=\"text-danger\">Not\n                        Paid</span>\n                      <span *ngIf=\"sales?.payment_status == 'FULL'\" class=\"text-success\">Paid</span>\n                      <span *ngIf=\"sales?.payment_status == 'PARTIAL'\">Partially Paid</span>\n                      <span *ngIf=\"sales?.payment_status == null\">-</span>\n                    </td>\n                    <td>{{sales.salesman || \"-\"}}</td>\n                    <td>\n                      <div class=\"d-flex align-items-center justify-content-center\">\n                        <a [routerLink]=\"['/sales-management/order-invoice']\"\n                          [queryParams]='{id: sales?.id, customer_id: sales?.customer, verified: sales?.verfication_status, isDelivered: sales?.delivered_status, vs: selectedVerificationStatus, os: selectedOrderStatus, sn: selectedStoreName, ps: selectedPaymentStatus, fdd: selectedFromDueDate, tdd: selectedToDueDate, fd: selectedFromDate, td: selectedToDate, limit: tableLimit, search: searchValue}'\n                          class=\"text-primary mx-2\"><i class=\"fa fa-file-invoice\"></i></a>\n                        <!-- <a [routerLink]=\"['/sales-management/status-order']\" [queryParams]='{id: sales?.id,print: 1}' class=\"text-info mx-2\" href=\"javascript:void(0)\"><i\n                                                        class=\"fa fa-print\"></i></a> -->\n                        <a *ngIf=\"sales.invoice_no\" (click)=\"printPage(sales.invoice_no)\" class=\"text-info mx-2\"\n                          href=\"javascript:void(0)\"><i class=\"fa fa-print\"></i></a>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"salesList?.length == 0\">\n                    <td colspan=\"13\" class=\"no-data-available\">No Data Found !</td>\n                  </tr>\n                </tbody>\n              </table>\n            </perfect-scrollbar>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/sales-management/status-order/status-order.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/sales-management/status-order/status-order.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\" id=\"print-section\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">{{orderData?.status}} Status Order</div>\n        <div class=\"card-body p-4\">\n          <div *ngIf=\"print != 1\" class=\"d-flex flex-wrap justify-content-between align-items-start mb-0\">\n            <div class=\"form-group w-100 text-right\">\n              <!-- <button [printStyle]=\"{h1 : {'color': 'red'}, h2 : {'border': 'solid 1px'}}\" printSectionId=\"print-section\" ngxPrint class=\"btn btn-md btn-primary\">Print Invoice</button> -->\n              <button (click)=\"printPage();\" class=\"btn btn-md btn-primary\">Print Invoice</button>\n            </div>\n          </div>\n          <div class=\"customer-content sales-content\">\n            <ul class=\"d-flex flex-wrap\">\n              <li>\n                <strong>Invoice No</strong>\n                <span>{{orderData?.invoice_no}}</span>\n              </li>\n              <li>\n                <strong>Customer Name</strong>\n                <span>{{orderData?.customer_name}}</span>\n              </li>\n              <li>\n                <strong>Billing Address</strong>\n                <span>{{orderData?.billing_address}}</span>\n              </li>\n              <li>\n                <strong>Shipping Address</strong>\n                <span>{{orderData?.shipping_address}}</span>\n              </li>\n              <li>\n                <strong>Order Date</strong>\n                <span>{{orderData?.order_date ? (orderData?.order_date | date: 'yyyy/MM/dd') : \"\"}}</span>\n              </li>\n              <li>\n                <strong>Order Status</strong>\n                <span>{{orderData?.order_status}}</span>\n              </li>\n              <li>\n                <strong>Payment Due Date</strong>\n                <span>{{orderData?.due_date ? (orderData?.due_date | date: 'yyyy/MM/dd') : \"\"}}</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"responsive-table rounded mb-4\">\n            <perfect-scrollbar>\n              <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                class=\"data row-border hover table order-table border\">\n                <thead>\n                  <tr>\n                    <th>Product Name</th>\n                    <th>Quantity</th>\n                    <th>Sales Rate</th>\n                    <th>Order Amount</th>\n                    <th>Discount</th>\n                    <th>Final Order Amount </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let product of productList;let i = index;\">\n                    <td>{{product.product_name || \"-\"}}</td>\n                    <td>{{product.quantity || \"-\"}}</td>\n                    <td>{{product.sales_rate ? (\"$\"+(product.sales_rate | number : '1.2-2')) : \"$0.00\"}}</td>\n                    <td>{{product.order_price ? (\"$\"+(product.order_price | number : '1.2-2')) : \"$0.00\"}}</td>\n                    <td>{{product.discount ? (\"$\"+(product.discount | number : '1.2-2')) : \"$0.00\"}}</td>\n                    <td>{{product.final_order_amount ? (\"$\"+(product.final_order_amount | number : '1.2-2')) : \"$0.00\"}}</td>\n                  </tr>\n                  <tr *ngIf=\"productList?.length == 0\">\n                    <td colspan=\"6\" class=\"no-data-available\">No Data Found !</td>\n                  </tr>\n                </tbody>\n              </table>\n            </perfect-scrollbar>\n            <div class=\"calcuted-data\">\n              <ul class=\"justify-content-end\">\n                <li>\n                  <strong>Sub Total</strong>\n                  <span>{{orderData?.sub_total ? (\"$ \"+orderData?.sub_total) : \"$ 0\"}}</span>\n                </li>\n                <li>\n                  <strong>Total</strong>\n                  <span>{{orderData?.total ? (\"$ \"+orderData?.total) : \"$ 0\"}}</span>\n                </li>\n                <li>\n                  <strong>Amount Received</strong>\n                  <span>{{orderData?.amount_received ? (\"$ \"+orderData?.amount_received) : \"$ 0\"}}</span>\n                </li>\n                <li>\n                  <strong>Amount Due</strong>\n                  <span>{{orderData?.amount_due ? (\"$ \"+orderData?.amount_due) : \"$ 0\"}}</span>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/sales-management/update-payment-received/update-payment-received.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/sales-management/update-payment-received/update-payment-received.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header d-flex justify-content-between align-items-center\">Payment Method\n                    <div class=\"pull-right\">\n                        <a (click)=\"goPreviousUrl()\" class=\"btn btn-md btn-secondary\" type=\"button\">Back</a>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"addPaymentMethodForm\" (ngSubmit)=\"uncheckAll();\" #formDir=\"ngForm\" novalidate\n                        class=\"customer-content sales-content\">\n                        <ul class=\"d-flex flex-wrap\">\n                            <li>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">Payment Method</label>\n                                    <select (change)=\"changeMode()\" [(ngModel)]=\"selectedMode\" formControlName=\"mode\"\n                                        class=\"form-control\">\n                                        <option value=\"CASH\">Cash</option>\n                                        <option value=\"CHEQUE\">Check</option>\n                                    </select>\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.mode.invalid) || addPaymentMethodForm.controls.mode.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','mode')\" class=\"err-msg\">\n                                            Payment mode is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <li *ngIf=\"(selectedMode == 'CHEQUE') || (selectedMode == 'ONLINE')\">\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">{{selectedMode == 'CHEQUE' ? \"Check No\" :\n                                        \"Transaction No\"}}</label>\n                                    <input formControlName=\"cheque_no\" class=\"form-control\" id=\"name\" type=\"text\"\n                                        placeholder=\"Enter {{selectedMode == 'CHEQUE' ? 'Check No' : 'Transaction No'}}\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.cheque_no.invalid) || addPaymentMethodForm.controls.cheque_no.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','cheque_no')\"\n                                            class=\"err-msg\">{{selectedMode == 'CHEQUE' ? \"Check no\" : \"Transaction\n                                            no\"}} is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <!-- <li>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">Bank Name :</label>\n                                    <input formControlName=\"bank_name\" class=\"form-control\" id=\"name\" type=\"text\"\n                                        placeholder=\"Enter Bank Name\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.bank_name.invalid) || addPaymentMethodForm.controls.bank_name.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','bank_name')\"\n                                            class=\"err-msg\">Bank name is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li> -->\n                            <li>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">Amount Received</label>\n                                    <input [(ngModel)]=\"ammountReceivedValue\" (change)=\"onAmountChange();\"\n                                        formControlName=\"ammount_received\" class=\"form-control quantity\" id=\"name\"\n                                        type=\"number\" placeholder=\"Enter Amount Received\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.ammount_received.invalid) || addPaymentMethodForm.controls.ammount_received.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','ammount_received')\"\n                                            class=\"err-msg\">Amount received is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">Image</label>\n                                    <input (change)=\"onImageFileChange($event)\" formControlName=\"image\"\n                                        class=\"form-control\" id=\"name\" type=\"file\" placeholder=\"Enter Bank Name\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.image.invalid) || addPaymentMethodForm.controls.image.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','image')\" class=\"err-msg\">\n                                            Image is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"w-100 d-block\">\n                                <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Submit</button>\n                            </li>\n                        </ul>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <form class=\"card\">\n                <div class=\"card-header d-flex justify-content-between align-items-center\">Outstanding Order\n                    <div class=\"dropdown pull-right\">\n                        <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                            type=\"button\">\n                            <i class=\"fa fa-file-export mr-2\"></i>\n                            Export\n                        </button>\n                        <div id=\"myDropdown\" class=\"dropdown-content\">\n                            <a href=\"javascript:void(0)\" (click)=\"exportCsv()\"\n                                style=\"font-size: small; text-decoration: none;\">\n                                Export to XLSX\n                            </a>\n                        </div>\n                        <button *ngIf=\"showClearPaymentButton\" class=\"btn btn-md btn-dark\" type=\"button\"\n                            (click)=\"submitAddPaymentMethodForm()\">Clear\n                            Payment</button>\n                    </div>\n                </div>\n                <div class=\"card-body p-4\">\n                    <div class=\"d-flex flex-wrap justify-content-end align-items-start mb-0\">\n                        <!-- <div class=\"form-group\">\n                            <button class=\"btn btn-md btn-primary\" type=\"button\" (click)=\"addmodal.show()\"><i class=\"fa fa-plus mr-2\n                        \"></i>Add Payment</button>\n                        </div> -->\n                        <!-- <div *ngIf=\"showPaymentMessage\" class=\"row\">\n                            <div class=\"col-sm-12 py-3 text-center\">\n                                <button class=\"btn btn-md btn-dark mr-3\" type=\"button\" (click)=\"submitPayment()\">Clear\n                                    Payment</button>\n                            </div>\n                        </div> -->\n                    </div>\n                    <perfect-scrollbar>\n                        <div class=\"responsive-table rounded mb-4\">\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" datatable\n                                class=\"data row-border hover table order-table border\">\n                                <thead>\n                                    <tr>\n                                        <th>Select</th>\n                                        <th>Order Date</th>\n                                        <th>Invoice No#</th>\n                                        <th>Payment Due<br>Date</th>\n                                        <th>Order Amount</th>\n                                        <th>Payment<br>Amount<br>Received</th>\n                                        <th>Open<br>Balance</th>\n                                        <th>Payment</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let order of orderList;let i = index;\">\n                                        <td>\n                                            <div class=\"custom-control custom-checkbox\">\n                                                <input type=\"checkbox\" class=\"custom-control-input\"\n                                                    (click)=\"order.checked=!order.checked; calculateAmountReceived(order.checked, order.open_balance*1, i)\"\n                                                    [id]=\"'checkbox' + order.id\" [checked]=\"order.checked\"\n                                                    [disabled]=\"order.disabled\">\n                                                <label class=\"custom-control-label\"\n                                                    [for]=\"'checkbox' + order.id\"></label>\n                                            </div>\n                                        </td>\n                                        <td>{{order.created_at ? (order.created_at | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                                        <td>{{order.invoice_no || \"-\"}}</td>\n                                        <td>{{order.due_date ? (order.due_date | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                                        <td>\n                                            {{order.amount ? (\"$\"+(order.amount | number : '1.2-2')) : \"$0.00\"}}\n                                        </td>\n                                        <td>\n                                            {{order.amount_recieved ? (\"$\"+(order.amount_recieved | number : '1.2-2')) :\n                                            \"$0.00\"}}\n                                        </td>\n                                        <td>\n                                            {{order.open_balance ? (\"$\"+(order.open_balance | number : '1.2-2')) :\n                                            \"$0.00\"}}\n                                        </td>\n                                        <td>\n                                            <!-- <input style=\"width: 90px;\" class=\"form-control quantity\" #paymentValue\n                                                type=\"number\" [value]=\"order?.payment\"\n                                                (change)=\"changePaymentValue(paymentValue.value,order, i)\"\n                                                (keyup)=\"paymentValue.value > order.remaining_amount ? paymentValue.value = order.remaining_amount : paymentValue.value\"> -->\n                                            <!-- <input style=\"width: 90px;\" class=\"form-control quantity\" type=\"number\"\n                                                [value]=\"order?.payment\"> -->\n                                            {{order.payment ? (\"$\"+(order.payment | number : '1.2-2')) : \"$0.00\"}}\n                                        </td>\n\n                                    </tr>\n                                    <tr *ngIf=\"orderList?.length == 0\">\n                                        <td colspan=\"7\" class=\"no-data-available\">No Data Found !</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </perfect-scrollbar>\n                    <div class=\"calcuted-data\">\n                        <ul class=\"justify-content-end\">\n                            <!-- <li>\n                                <strong>Amount to Apply </strong>\n                                <span>{{\"$ \"+(amountToApply | number : '1.2-2')}}</span>\n                            </li> -->\n                            <li style=\"float: left;\" *ngIf=\"showPaymentMessage\">\n                                <strong>{{amountRecievedMessage}}</strong>\n                                <span>{{calculatedReceivedAmount}}</span>\n                            </li>\n                            <li>\n                                <strong>Outstanding Amount</strong>\n                                <span>{{\"$ \"+(orderData?.total_remaining_amount | number :\n                                    '1.2-2')}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div bsModal #addmodal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-md modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n                <h2 class=\"font-weight-bold mb-4 text-primary\">Outstanding Order</h2>\n                <form class=\"d-inline-block w-100 text-left\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Payment:</label>\n                                <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Payment\">\n                            </div>\n                        </div>\n                        <div class=\"modal-footer justify-content-start flex-wrap w-100 pb-0\">\n                            <button type=\"button\" class=\"btn btn-dark mr-3\">ADD</button>\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"editmodal.hide()\">Cancel</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div bsModal #editmodal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-md modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n                <h2 class=\"font-weight-bold mb-4 text-primary\">Outstanding Order</h2>\n                <form class=\"d-inline-block w-100 text-left\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Payment:</label>\n                                <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Payment\">\n                            </div>\n                        </div>\n                        <div class=\"modal-footer justify-content-start flex-wrap w-100 pb-0\">\n                            <button type=\"button\" class=\"btn btn-dark mr-3\">Edit</button>\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"editmodal.hide()\">Cancel</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- delete modal -->\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n                <h2 class=\"font-weight-bold mb-4 text-primary\">Delete</h2>\n                <p class=\"mb-0\">Are You Sure You Want To Delete ?</p>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-danger\">Delete</button>\n            </div>\n        </div><!-- /.modal-content -->\n    </div>\n</div><!-- /.modal -->");

/***/ }),

/***/ "./src/app/shared/services/sales-management.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/sales-management.service.ts ***!
  \*************************************************************/
/*! exports provided: SalesManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesManagementService", function() { return SalesManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var SalesManagementService = /** @class */ (function () {
    function SalesManagementService(http) {
        this.http = http;
    }
    SalesManagementService.prototype.getDashoardInfo = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/sales/dashboard/");
    };
    SalesManagementService.prototype.orderList = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/orderlist/", data);
    };
    SalesManagementService.prototype.createOrder = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/order/", data);
    };
    SalesManagementService.prototype.getOrder = function (id, data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/orderview/" + id + "/", data);
    };
    SalesManagementService.prototype.creditMemoList = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/credit_memo/customer_or_store_credit/", data);
    };
    SalesManagementService.prototype.applyCredit = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/credit_memo/apply_credit_to_order/", data);
    };
    SalesManagementService.prototype.deleteProduct = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/create_product/" + id + "/");
    };
    SalesManagementService.prototype.createProduct = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/create_product/", data);
    };
    SalesManagementService.prototype.getProduct = function (id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/AddProductToOrder/" + id + "/get_product_data/", "");
    };
    SalesManagementService.prototype.getCategories = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/categorieslistNoPagnination/");
    };
    SalesManagementService.prototype.productlist = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/productlist/", data);
    };
    SalesManagementService.prototype.add_product = function (data, id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/AddProductToOrder/" + id + "/add_product/", data);
    };
    SalesManagementService.prototype.getPackSize = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/pack/listview/", data);
    };
    SalesManagementService.prototype.edit_product = function (data, id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/AddProductToOrder/" + id + "/edit_product/", data);
    };
    SalesManagementService.prototype.delete_product = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/AddProductToOrder/delete_product/", data);
    };
    SalesManagementService.prototype.edit_other_details = function (data, id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/AddProductToOrder/" + id + "/edit_other_details/", data);
    };
    SalesManagementService.prototype.product_from_category = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/product_from_category/listview/", data);
    };
    SalesManagementService.prototype.getCustomer = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/customer/" + id + "/");
    };
    SalesManagementService.prototype.getInvoicePdf = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/invoice_pdf_url/", data);
    };
    SalesManagementService.prototype.getDeliveryReceipt = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/delivery_sheet_pdf_url/", data);
    };
    SalesManagementService.prototype.getVendors = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/vendor/listview/", data);
    };
    SalesManagementService.prototype.getOrderPDF = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/sales_pdf_url/" + id + "/");
    };
    SalesManagementService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SalesManagementService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SalesManagementService);
    return SalesManagementService;
}());



/***/ }),

/***/ "./src/app/views/sales-management/order-invoice/order-invoice.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/sales-management/order-invoice/order-invoice.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OrderInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderInvoiceComponent", function() { return OrderInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_sales_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/sales-management.service */ "./src/app/shared/services/sales-management.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");













var OrderInvoiceComponent = /** @class */ (function () {
    function OrderInvoiceComponent(titleService, location, toastr, salesManagementService, router, route, datePipe, sanitizer, commonService) {
        this.titleService = titleService;
        this.location = location;
        this.toastr = toastr;
        this.salesManagementService = salesManagementService;
        this.router = router;
        this.route = route;
        this.datePipe = datePipe;
        this.sanitizer = sanitizer;
        this.commonService = commonService;
        // dtElement: DataTableDirective;
        // dtOptions: DataTables.Settings = {};
        this.dtOptions = [];
        // dtTrigger: Subject<any> = new Subject();
        this.dtTrigger0 = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.submitted = false;
        this.fromProductOrder = false;
        this.addProductSubmitted = false;
        this.editProductSubmitted = false;
        this.productId = "";
        this.productNameEditValue = "";
        this.selectedCategory = "";
        this.selectedProduct = "";
        this.selectedQuantity = "";
        this.showAction = false;
        this.selectedPacksize = "";
        this.finalAmount = 0;
        this.threeSoldLimit = "0";
        this.minThreeSoldLimitError = "0";
        this.orderAmount = 0;
        this.verified_product = 1;
        this.isDelivered = false;
        this.selectedVendor = "";
        this.tableLimit = 10;
        this.firstTime = false;
        this.firstTimeRender = true;
        this.searchValue = "";
        this.salesSearchValue = "";
        this.afterEdit = false;
        this.storeName = "";
    }
    OrderInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Order Invoice");
        this.addFormControl();
        this.route.queryParams.subscribe(function (param) {
            _this.orderId = param.id;
            _this.customerId = param.customer_id;
            _this.isDelivered = param.isDelivered == "true" ? true : false;
            _this.selectedVerificationStatus = param.vs || "";
            _this.selectedOrderStatus = param.os || "";
            _this.selectedStoreName = param.sn || "";
            _this.selectedPaymentStatus = param.ps || "";
            _this.selectedFromDueDate = param.fdd || "";
            _this.selectedToDueDate = param.tdd || "";
            _this.selectedFromDate = param.fd || "";
            _this.selectedToDate = param.td || "";
            _this.salesSearchValue = param.search || "";
            _this.tableLimit = param.limit;
            _this.firstTime = param.firstTime;
            _this.fromProductOrder = param.fromProductOrder;
            // this.addForm.patchValue({
            //   payment_status:
            //     param.paymentStatus == "NOT_PAID"
            //       ? "Not Paid"
            //       : param.paymentStatus == "FULL"
            //       ? "Paid"
            //       : param.paymentStatus == "PARTIAL"
            //       ? "Partially Paid"
            //       : "-",
            // });
        });
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl("http://180.211.99.165:8080/jaisal/Akshar_App/#/inventory-management");
        this.addProductFormControl();
        this.editProductFormControl();
        this.getCategoryData();
        this.getProductData();
        this.dtOptions[0] = this.getProductList();
        this.dtOptions[1] = this.getCreditList();
        this.getVendorData();
    };
    OrderInvoiceComponent.prototype.addFormControl = function () {
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            invoice_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            payment_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            customer_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            billing_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            shiping_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            order_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            order_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            payment_due_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            payment_delivery_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            po_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
        });
    };
    OrderInvoiceComponent.prototype.addProductFormControl = function () {
        this.addProductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            product_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            product_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            packsize_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            sales_rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            order_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            // Validators.required
            ]),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            final_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
        });
    };
    OrderInvoiceComponent.prototype.editProductFormControl = function () {
        this.editProductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            product_category: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]({ value: "", disabled: true }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
            ]),
            vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]({ value: "", disabled: true }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
            ]),
            packsize_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            product_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]({ value: "" }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            sales_rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            order_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
            final_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]({ value: "", disabled: true }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
            ]),
            order_quantity_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", [
            //Validators.required
            ]),
        });
    };
    OrderInvoiceComponent.prototype.getCategoryData = function () {
        var _this = this;
        this.salesManagementService.getCategories().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.categoryData = resData.data;
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    OrderInvoiceComponent.prototype.changeCategory = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("category", this.selectedCategory);
        this.salesManagementService.product_from_category(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.productDropdownData = resData.data;
                _this.changeProduct();
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    OrderInvoiceComponent.prototype.changeVendor = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("category", this.selectedCategory);
        formData.append("vendor", this.selectedVendor);
        this.salesManagementService.product_from_category(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.productDropdownData = resData.data;
                _this.changeProduct();
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    OrderInvoiceComponent.prototype.changeProduct = function () {
        var _this = this;
        this.productDropdownData.forEach(function (element) {
            if (element.product_id == _this.selectedProduct) {
                _this.packSizeData = element.pack_size_array;
            }
        });
    };
    OrderInvoiceComponent.prototype.selectPackSize = function (type) {
        var _this = this;
        var quantity = type == 1
            ? this.addProductForm.controls.quantity.value
            : this.editProductForm.controls.quantity.value;
        this.productDropdownData.forEach(function (element) {
            if (element.product_id == _this.selectedProduct) {
                _this.orderAmount =
                    quantity != "" ? element.sale_price * quantity : element.sale_price;
                _this.prise = element.sale_price;
            }
        });
    };
    OrderInvoiceComponent.prototype.changeDiscount = function () {
        if (this.addProductForm.controls.discount.value != 0) {
            this.prise = this.prise - this.addProductForm.controls.discount.value;
        }
    };
    OrderInvoiceComponent.prototype.getProductData = function () {
        // this.salesManagementService.getPackSize("").subscribe(response => {
        //   let resData = JSON.parse(JSON.stringify(response));
        var _this = this;
        //   if (resData.status_code == 200) {
        //     this.packSizeData = resData.data;
        //   } else {
        //     this.toastr.error('', resData.message);
        //   }
        // },
        //   err => {
        //     this.toastr.error('', err.error.message);
        //   });
        this.salesManagementService.getCustomer(this.customerId).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.maxThreeSoldLimit = resData.data.max_threshold;
                _this.minThreeSoldLimit = resData.data.min_threshold;
                _this.addForm.patchValue({
                    billing_address: resData.data.billing_address +
                        ", " +
                        resData.data.billing_city +
                        ", " +
                        resData.data.billing_state +
                        " " +
                        resData.data.billing_zipcode,
                    shiping_address: resData.data.shipping_address +
                        ", " +
                        resData.data.shipping_city +
                        ", " +
                        resData.data.shipping_state +
                        " " +
                        resData.data.shipping_zipcode,
                });
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    OrderInvoiceComponent.prototype.getProductList = function () {
        var _this = this;
        return {
            //pagingType: 'full_numbers',
            pageLength: 100,
            order: [0, "desc"],
            serverSide: true,
            processing: true,
            searchDelay: 1300,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page =
                    parseInt(dataTablesParameters.start) /
                        parseInt(dataTablesParameters.length) +
                        1;
                dataTablesParameters.limit = dataTablesParameters.length;
                // dataTablesParameters.search_param = dataTablesParameters.search.value;
                dataTablesParameters.sort_type = dataTablesParameters.order[0].dir;
                dataTablesParameters.order[0].column == 0
                    ? (dataTablesParameters.sort_field =
                        dataTablesParameters.order[0].column == 0
                            ? "order_product_name"
                            : "")
                    : "";
                dataTablesParameters.order[0].column == 1
                    ? (dataTablesParameters.sort_field =
                        dataTablesParameters.order[0].column == 1 ? "item_no" : "")
                    : "";
                dataTablesParameters.order[0].column == 2
                    ? (dataTablesParameters.sort_field =
                        dataTablesParameters.order[0].column == 2 ? "category_name" : "")
                    : "";
                // dataTablesParameters.order[0].column == 1 ? dataTablesParameters.sort_field = (dataTablesParameters.order[0].column == 1 && dataTablesParameters.order[0].dir == "asc") ? ("item_no") : ("-item_no") : "";;
                // dataTablesParameters.order[0].column == 2 ? dataTablesParameters.sort_field = (dataTablesParameters.order[0].column == 2 && dataTablesParameters.order[0].dir == "asc") ? ("category_name") : ("-category_name") : "";;
                // this.searchValue = dataTablesParameters.search.value;
                if (!_this.afterEdit) {
                    dataTablesParameters.search_param = dataTablesParameters.search.value;
                }
                else if (_this.afterEdit) {
                    dataTablesParameters.search_param = _this.searchValue;
                    $(".dataTables_filter input").val(_this.searchValue);
                    _this.afterEdit = false;
                }
                _this.searchValue = dataTablesParameters.search.value;
                _this.datatbaleData = dataTablesParameters;
                _this.salesManagementService
                    .getOrder(_this.orderId, dataTablesParameters)
                    .subscribe(function (respones) {
                    var _a;
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.productList = resData.data.products_list;
                        // console.log(this.productList.order_price);
                        // this.productList.forEach(element => {
                        //   element.order_price = (element.final_order_amount + (element.discount * element.quantity));
                        // });
                        _this.orderData = resData.data;
                        _this.totalAmount = (_a = _this.orderData) === null || _a === void 0 ? void 0 : _a.total;
                        //this.showAction = resData.data.order_status == "OPEN" ? true : false;
                        _this.storeName = resData.data.customer_store;
                        _this.verified_product = resData.data.verfication_status ? 0 : 1;
                        _this.addForm.patchValue({
                            invoice_no: resData.data.invoice_no,
                            payment_status: resData.data.payment_status == "NOT_PAID"
                                ? "Not Paid"
                                : resData.data.payment_status == "FULL"
                                    ? "Paid"
                                    : resData.data.payment_status == "PARTIAL"
                                        ? "Partially Paid"
                                        : "-",
                            // payment_status: resData.data.payment_status,
                            customer_name: resData.data.customer_name,
                            // billing_address: resData.data.billing_address,
                            // shiping_address: resData.data.shipping_address,
                            order_date: _this.datePipe.transform(resData.data.order_date, "MM-dd-yyyy"),
                            order_status: resData.data.order_status,
                            payment_due_date: _this.datePipe.transform(resData.data.due_date, "MM-dd-yyyy"),
                            payment_delivery_date: _this.datePipe.transform(resData.data.delivery_date, "MM-dd-yyyy"),
                            po_number: resData.data.po_num,
                        });
                        callback({
                            // recordsTotal: this.productList.length,
                            // recordsFiltered: this.productList.length,
                            recordsTotal: resData.data.total_record,
                            recordsFiltered: resData.data.total_record,
                            data: [],
                        });
                    }
                    else {
                        _this.toastr.error("", resData.message);
                    }
                }, function (err) {
                    _this.toastr.error("", err.error.message);
                });
            },
            columns: [
                { data: "product_name", searchable: true, orderable: true },
                { data: "item_no", searchable: true, orderable: true },
                { data: "category_name", searchable: true, orderable: true },
                { data: "quantity", searchable: false, orderable: false },
                { data: "order_price", searchable: false, orderable: false },
                { data: "discount", searchable: false, orderable: false },
                { data: "order_net_price", searchable: false, orderable: false },
                // { data: 'sales_rate', searchable: true, orderable: true },
                { data: "final_order_amount", searchable: false, orderable: false },
                // { data: 'final_order_amount', searchable: false, orderable: false },
                { data: "action", searchable: false, orderable: false },
            ],
        };
    };
    OrderInvoiceComponent.prototype.getCreditList = function () {
        var _this = this;
        return {
            pageLength: 100,
            order: [1, "desc"],
            serverSide: true,
            processing: true,
            searchDelay: 1300,
            ajax: function (dataTablesParameters, callback) {
                // dataTablesParameters.page = parseInt(dataTablesParameters.start) / parseInt(dataTablesParameters.length) + 1;
                // dataTablesParameters.limit = dataTablesParameters.length;
                // dataTablesParameters.search_param = dataTablesParameters.search.value;
                // // sorting
                // dataTablesParameters.order[0].column == 0 ? dataTablesParameters.sort_field = "cm_no" : "";
                // dataTablesParameters.order[0].column == 1 ? dataTablesParameters.sort_field = "created_at" : "";
                // dataTablesParameters.order[0].column == 2 ? dataTablesParameters.sort_field = "invoice_no" : "";
                // dataTablesParameters.order[0].column == 3 ? dataTablesParameters.sort_field = "credit_amount" : "";
                // dataTablesParameters.order[0].column == 4 ? dataTablesParameters.sort_field = "credit_applied_invoice_no" : "";
                // dataTablesParameters.order[0].column == 5 ? dataTablesParameters.sort_field = "store_name" : "";
                // dataTablesParameters.sort_type = dataTablesParameters.order[0].dir;
                // // this.datatableData = dataTablesParameters;
                _this.salesManagementService
                    .creditMemoList({ customer_or_store_id: _this.customerId })
                    .subscribe(function (response) {
                    var resData = JSON.parse(JSON.stringify(response));
                    if (resData.status_code == 200) {
                        _this.creditMemoList = resData.data;
                        _this.creditMemoList.forEach(function (element) {
                            element.checked = false;
                            element.amountToApply = false;
                        });
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: resData.filter_record,
                            data: [],
                        });
                    }
                    else {
                        _this.toastr.error("", resData.message);
                    }
                }, function (err) {
                    _this.toastr.error("", err.error.message);
                });
            },
            columns: [
                { name: "checkbox", searchable: false, orderable: false },
                { data: "cm_no", searchable: false, orderable: false },
                { data: "created_at", searchable: false, orderable: false },
                { data: "invoice_no", searchable: false, orderable: false },
                { data: "updated_credit_amount", searchable: false, orderable: false },
                // { data: 'credit_applied_invoice_no', searchable: false, orderable: false },
                { data: "store_name", searchable: false, orderable: false },
                { name: "amountToApply", searchable: false, orderable: false },
            ],
        };
    };
    OrderInvoiceComponent.prototype.changePaymentValue = function (paymentValue, id) {
        for (var index = 0; index < this.creditMemoList.length; index++) {
            if (this.creditMemoList[index].id == id) {
                this.creditMemoList[index].amountToApply = paymentValue;
                // this.creditMemoList[index].checked = true
            }
        }
    };
    OrderInvoiceComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger0.next();
    };
    OrderInvoiceComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger0.unsubscribe();
        this.dtTrigger1.unsubscribe();
    };
    OrderInvoiceComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElements.first.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger0.next();
        });
    };
    OrderInvoiceComponent.prototype.rerenderCreditMemo = function () {
        this.dtElements.last.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
        });
    };
    OrderInvoiceComponent.prototype.submitAddForm = function () {
        var _this = this;
        this.submitted = true;
        var formData = new FormData();
        // formData.append("name", this.addForm.controls.invoice_no.value);
        // formData.append("customer_name", this.addForm.controls.customer_name.value);
        // formData.append("billing_address", this.addForm.controls.billing_address.value);
        // formData.append("shiping_address", this.addForm.controls.shiping_address.value);
        // formData.append("order_date", this.addForm.controls.order_date.value);
        // formData.append("order_status", this.addForm.controls.order_status.value);
        // formData.append("payment_due_date", this.datePipe.transform(this.addForm.controls.payment_due_date.value, "yyyy-MM-dd"));
        formData.append("payment_delivery_date", this.datePipe.transform(this.addForm.controls.payment_delivery_date.value, "yyyy-MM-dd"));
        if (this.addForm.valid) {
            this.salesManagementService
                .edit_other_details(formData, this.orderId)
                .subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.toastr.success("", "Order updated successfully!");
                    _this.rerender();
                }
                else {
                    _this.toastr.error("", resData.message);
                }
            }, function (err) {
                _this.toastr.error("", err.error.message);
            });
        }
    };
    OrderInvoiceComponent.prototype.submitAddProductForm = function () {
        var _this = this;
        this.addProductSubmitted = true;
        var formData = new FormData();
        // formData.append("product_category", this.addProductForm.controls.product_category.value);
        formData.append("product_id", this.addProductForm.controls.product_name.value);
        formData.append("packsize_id", this.addProductForm.controls.packsize_id.value);
        formData.append("quantity", this.addProductForm.controls.quantity.value);
        formData.append("discount", this.addProductForm.controls.discount.value
            ? this.addProductForm.controls.discount.value
            : 0);
        // formData.append("discount", "0");
        //formData.append("price", this.addProductForm.controls.final_amount.value);
        formData.append("price", this.addProductForm.controls.price.value);
        if (this.addProductForm.valid &&
            this.threeSoldLimit == "0" &&
            this.minThreeSoldLimitError == "0") {
            this.salesManagementService.add_product(formData, this.orderId).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.addmodal.hide();
                    _this.toastr.success("", "Product added successfully!");
                    _this.rerender();
                    _this.resetaddProductForm();
                    _this.addProductSubmitted = false;
                }
                else {
                    _this.addmodal.hide();
                    _this.toastr.error("", resData.message);
                    _this.resetaddProductForm();
                    _this.addProductSubmitted = false;
                }
            }, function (err) {
                _this.addmodal.hide();
                _this.toastr.error("", err.error.message);
                _this.resetaddProductForm();
                _this.addProductSubmitted = false;
            });
        }
    };
    OrderInvoiceComponent.prototype.resetaddProductForm = function () {
        this.addProductForm.patchValue({
            quantity: "",
            order_amount: "",
            discount: "",
            final_amount: "",
        });
        this.selectedCategory = "";
        this.selectedVendor = "";
        this.selectedProduct = "";
        this.selectedPacksize = "";
        this.threeSoldLimit = "0";
        this.minThreeSoldLimitError = "0";
        this.addProductSubmitted = false;
    };
    OrderInvoiceComponent.prototype.submitEditProductForm = function () {
        var _this = this;
        this.editProductSubmitted = true;
        var formData = new FormData();
        formData.append("product_id", this.editProductId);
        // formData.append("packsize_id", this.editProductForm.controls.packsize_id.value);
        formData.append("quantity", this.editProductForm.controls.quantity.value);
        formData.append("discount", this.editProductForm.controls.discount.value
            ? this.editProductForm.controls.discount.value
            : 0);
        formData.append("price", this.editProductForm.controls.order_amount.value);
        formData.append("order_product_name", this.editProductForm.controls.product_name.value);
        formData.append("order_quantity_id", this.editProductForm.controls.order_quantity_id.value);
        if (this.editProductForm.controls.quantity.value != this.quantityEditValue ||
            this.editProductForm.controls.order_amount.value !=
                this.orderAmountEditValue ||
            (this.editProductForm.controls.discount.value
                ? this.editProductForm.controls.discount.value
                : 0) != this.discountEditValue) {
            formData.append("update_calculations", "true");
        }
        else if (this.editProductForm.controls.product_name.value !=
            this.productNameEditValue) {
            formData.append("update_calculations", "false");
        }
        else {
            formData.append("update_calculations", "false");
        }
        if (this.editProductForm.valid &&
            this.threeSoldLimit == "0" &&
            this.minThreeSoldLimitError == "0") {
            this.salesManagementService
                .edit_product(formData, this.orderId)
                .subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.editmodal.hide();
                    _this.toastr.success("", "Product updated successfully!");
                    _this.rerender();
                    _this.editProductForm.reset();
                    _this.afterEdit = true;
                    _this.editProductSubmitted = false;
                }
                else {
                    _this.editmodal.hide();
                    _this.toastr.error("", resData.message);
                    _this.editProductForm.reset();
                }
            }, function (err) {
                _this.editmodal.hide();
                _this.toastr.error("", err.error.message);
                _this.editProductForm.reset();
            });
        }
    };
    OrderInvoiceComponent.prototype.changeId = function (Id) {
        this.productId = Id;
    };
    OrderInvoiceComponent.prototype.submitAmountToApply = function () {
        var _this = this;
        var data = [];
        this.creditMemoList.forEach(function (element) {
            if (element.amountToApply && element.checked) {
                data.push({
                    cm_id: element.id,
                    credit_applied: parseFloat(element.amountToApply),
                });
            }
        });
        var total = data.reduce(function (a, b) { return a + b.credit_applied; }, 0);
        if (data.length == 0) {
            this.toastr.error("", "Please Select Atleast One Credit Memo!");
        }
        else if (this.totalAmount < total) {
            this.toastr.error("", "Credit applied amount should not be greater than the invoice amount!");
        }
        else {
            var formData = new FormData();
            formData.append("credit_applied_order_id", this.orderId);
            formData.append("credit_memo_list", JSON.stringify(data));
            this.salesManagementService.applyCredit(formData).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.applyCreditModal.hide();
                    _this.toastr.success("", "Credit Applied successfully!");
                    _this.rerenderCreditMemo();
                    _this.rerender();
                }
                else {
                    _this.toastr.error("", resData.message);
                }
            }, function (err) {
                _this.toastr.error("", err.error.mesaage);
            });
        }
    };
    OrderInvoiceComponent.prototype.deleteProduct = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("order_quantity_id", this.productId);
        this.salesManagementService.delete_product(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.deleteModal.hide();
                _this.toastr.success("", "Product deleted successfully!");
                _this.rerender();
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.mesaage);
        });
    };
    OrderInvoiceComponent.prototype.openEditModel = function (productData, productId) {
        var _this = this;
        this.editmodal.show();
        this.salesManagementService.getProduct(productId).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            _this.editProductId = resData.data.product;
            _this.quantityEditValue = resData.data.quantity;
            _this.orderAmountEditValue = resData.data.price;
            _this.discountEditValue = resData.data.discount;
            _this.editProductForm.patchValue({
                quantity: resData.data.quantity,
                order_amount: resData.data.price,
                discount: resData.data.discount,
                final_amount: resData.data.product_amount,
                order_quantity_id: resData.data.id,
            });
            if (resData.data.order_product_name != null) {
                _this.productNameEditValue = resData.data.order_product_name;
                _this.editProductForm.patchValue({
                    product_name: resData.data.order_product_name,
                });
            }
            else {
                _this.productNameEditValue = resData.data.name;
                _this.editProductForm.patchValue({
                    product_name: resData.data.name,
                });
            }
        });
        //   if (resData.status_code == 200) {
        //     var data = resData.data;
        this.threeSoldLimit = "0";
        this.minThreeSoldLimitError = "0";
        this.selectedCategory = productData.category_id || "";
        this.selectedVendor = productData.vendor_id || "";
        this.selectedProduct = productData.product_id;
        this.selectedPacksize = productData.pack_size_id || "";
        this.changeVendor();
        //   } else {
        //     this.toastr.error('', resData.message);
        //   }
        // },
        //   err => {
        //     this.toastr.error('', err.error.message);
        //   });
    };
    OrderInvoiceComponent.prototype.printDeliveryReceipt = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("invoice_no", this.orderData.invoice_no);
        this.salesManagementService.getDeliveryReceipt(formData).subscribe(function (result) {
            window.open(result.data.pdf_url);
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    OrderInvoiceComponent.prototype.printPage = function () {
        //window.print();
        // print pdf
        var _this = this;
        var formData = new FormData();
        formData.append("invoice_no", this.orderData.invoice_no);
        this.salesManagementService.getInvoicePdf(formData).subscribe(function (result) {
            // It is necessary to create a new blob object with mime-type explicitly set
            // otherwise only Chrome works like it should
            // const newBlob = new Blob([(resultBlob)], { type: 'application/pdf' });
            // // IE doesn't allow using a blob object directly as link href
            // // instead it is necessary to use msSaveOrOpenBlob
            // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            //   window.navigator.msSaveOrOpenBlob(newBlob);
            //   return;
            // }
            // const downloadURL = URL.createObjectURL(newBlob);
            window.open(result.data.pdf_url);
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
        //printJS({printable:'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf', type:'pdf', showModal:false})
    };
    OrderInvoiceComponent.prototype.chnageValue = function (type) {
        this.finalAmount =
            type == 1
                ? this.orderAmount -
                    this.addProductForm.controls.discount.value *
                        this.addProductForm.controls.quantity.value
                : Math.round(this.editProductForm.controls.order_amount.value *
                    this.editProductForm.controls.quantity.value *
                    100) /
                    100 -
                    this.editProductForm.controls.discount.value *
                        this.editProductForm.controls.quantity.value;
    };
    OrderInvoiceComponent.prototype.changeOrderAmount = function (type) {
        this.chnageValue(type);
        this.threeSoldLimit =
            this.finalAmount > this.maxThreeSoldLimit
                ? "Order amount is higher than thresold limit."
                : "0";
        this.minThreeSoldLimitError =
            this.finalAmount < this.minThreeSoldLimit
                ? "Order amount is lower than thresold limit."
                : "0";
    };
    OrderInvoiceComponent.prototype.getVendorData = function () {
        var _this = this;
        this.salesManagementService.getVendors("").subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.vendorData = resData.data;
                _this.selectedVendor = _this.vendorData[0].id;
                _this.addProductForm.value.vendor = _this.vendorData[0].id;
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    OrderInvoiceComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.salesManagementService
            .getOrder(this.orderId, this.datatbaleData)
            .subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.products_list.map(function (x) { return ({
                    "Product Name": x.order_product_name
                        ? x.order_product_name
                        : x.product_name,
                    "Item Number": x.item_no || "-",
                    "Category Name": x.category_name || "-",
                    Quantity: x.quantity || "0",
                    Price: x.order_price ? "$ " + x.order_price : "$0",
                    Discount: x.discount ? "$ " + x.discount : "$0",
                    "Order Amount": x.final_order_amount
                        ? "$ " + x.final_order_amount
                        : "$0",
                }); });
                if (type == "pdf") {
                    if (onlyNameAndSymbolArr.length > 0) {
                        var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                        var values = onlyNameAndSymbolArr.map(function (element) {
                            return Object.values(element);
                        });
                        _this.commonService.exportArrayPDF(keys, values, "productList");
                    }
                    else {
                        _this.toastr.error("", "No Data Found !");
                        $("#myDropdown").toggle();
                    }
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, "productList");
                }
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    OrderInvoiceComponent.prototype.printPoPage = function () {
        //window.print();
        // print pdf
        var _this = this;
        // var formData = new FormData();
        // formData.append("invoice_no", this.orderData.invoice_no);
        this.salesManagementService.getOrderPDF(this.orderId).subscribe(function (response) {
            // It is necessary to create a new blob object with mime-type explicitly set
            // otherwise only Chrome works like it should
            // const newBlob = new Blob([(resultBlob)], { type: 'application/pdf' });
            // IE doesn't allow using a blob object directly as link href
            // instead it is necessary to use msSaveOrOpenBlob
            // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            //   window.navigator.msSaveOrOpenBlob(newBlob);
            //   return;
            // }
            // For other browsers:
            // Create a link pointing to the ObjectURL containing the blob.
            // const downloadURL = URL.createObjectURL(newBlob);
            window.open(response.data.pdf_url);
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
        //printJS({printable:'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf', type:'pdf', showModal:false})
    };
    OrderInvoiceComponent.prototype.goPreviousUrl = function () {
        this.location.back();
    };
    OrderInvoiceComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _shared_services_sales_management_service__WEBPACK_IMPORTED_MODULE_6__["SalesManagementService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("addmodal"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], OrderInvoiceComponent.prototype, "addmodal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("applyCreditModal"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], OrderInvoiceComponent.prototype, "applyCreditModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("editmodal"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], OrderInvoiceComponent.prototype, "editmodal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("deleteModal"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], OrderInvoiceComponent.prototype, "deleteModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], OrderInvoiceComponent.prototype, "dtElements", void 0);
    OrderInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-order-invoice",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/sales-management/order-invoice/order-invoice.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _shared_services_sales_management_service__WEBPACK_IMPORTED_MODULE_6__["SalesManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"]])
    ], OrderInvoiceComponent);
    return OrderInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/views/sales-management/sales-management-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/sales-management/sales-management-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SalesManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesManagementRoutingModule", function() { return SalesManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_invoice_order_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-invoice/order-invoice.component */ "./src/app/views/sales-management/order-invoice/order-invoice.component.ts");
/* harmony import */ var _sales_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales-management.component */ "./src/app/views/sales-management/sales-management.component.ts");
/* harmony import */ var _status_order_status_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-order/status-order.component */ "./src/app/views/sales-management/status-order/status-order.component.ts");
/* harmony import */ var _update_payment_received_update_payment_received_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-payment-received/update-payment-received.component */ "./src/app/views/sales-management/update-payment-received/update-payment-received.component.ts");







var routes = [
    {
        path: '',
        data: {
            title: 'Sales'
        },
        children: [
            {
                path: '',
                component: _sales_management_component__WEBPACK_IMPORTED_MODULE_4__["SalesManagementComponent"],
                data: {
                    title: 'List'
                }
            },
            {
                path: 'status-order',
                component: _status_order_status_order_component__WEBPACK_IMPORTED_MODULE_5__["StatusOrderComponent"],
                data: {
                    title: 'Status Order'
                }
            },
            {
                path: 'order-invoice',
                component: _order_invoice_order_invoice_component__WEBPACK_IMPORTED_MODULE_3__["OrderInvoiceComponent"],
                data: {
                    title: 'Order Invoice'
                }
            },
            {
                path: 'update-payment-received',
                component: _update_payment_received_update_payment_received_component__WEBPACK_IMPORTED_MODULE_6__["UpdatePaymentReceivedComponent"],
                data: {
                    title: 'Update Payment Received'
                }
            },
        ]
    }
];
var SalesManagementRoutingModule = /** @class */ (function () {
    function SalesManagementRoutingModule() {
    }
    SalesManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SalesManagementRoutingModule);
    return SalesManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/sales-management/sales-management.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/sales-management/sales-management.component.ts ***!
  \**********************************************************************/
/*! exports provided: SalesManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesManagementComponent", function() { return SalesManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_sales_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/sales-management.service */ "./src/app/shared/services/sales-management.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_thermal_print__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-thermal-print */ "./node_modules/ng-thermal-print/fesm2015/ng-thermal-print.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");











var SalesManagementComponent = /** @class */ (function () {
    function SalesManagementComponent(titleService, toastr, salesManagementService, datePipe, route, printService, commonService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.salesManagementService = salesManagementService;
        this.datePipe = datePipe;
        this.route = route;
        this.printService = printService;
        this.commonService = commonService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.selectedMode = "CASH";
        this.selectedCustomerName = "";
        this.selectedOrderStatus = "";
        this.selectedVerificationStatus = "";
        this.selectedPaymentStatus = "";
        this.selectedStoreName = "";
        this.status = false;
        this.firstTimeSearch = false;
        this.firstTime = false;
        this.searchValue = "";
    }
    SalesManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Sales Management");
        this.route.queryParams.subscribe(function (param) {
            _this.selectedOrderStatus = param.order_status || "";
            _this.selectedVerificationStatus = param.vs || "";
            _this.selectedOrderStatus = param.os || "";
            _this.selectedStoreName = param.sn || "";
            _this.selectedPaymentStatus = param.ps || "";
            _this.selectedFromDueDate = param.fdd || "";
            _this.selectedToDueDate = param.tdd || "";
            _this.selectedFromDate = param.fd || "";
            _this.selectedToDate = param.td || "";
            _this.tableLimit = param.limit;
            _this.firstTimeSearch = param.firstTime || false;
            _this.searchValue = param.search || "";
            _this.firstTime = param.firstTime || false;
        });
        this.getSalesList();
        this.getSalesDashboardData();
    };
    SalesManagementComponent.prototype.getSalesList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 25,
            order: [0, "desc"],
            serverSide: true,
            scrollY: "450px",
            scrollX: true,
            scrollCollapse: true,
            searchDelay: 1300,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page =
                    parseInt(dataTablesParameters.start) /
                        parseInt(dataTablesParameters.length) +
                        1;
                dataTablesParameters.limit = dataTablesParameters.length;
                // dataTablesParameters.search_param = dataTablesParameters.search.value;
                dataTablesParameters.draw == 1 && _this.firstTime
                    ? (dataTablesParameters.limit = Number(_this.tableLimit))
                    : "";
                dataTablesParameters.draw == 1 && _this.firstTime
                    ? (dataTablesParameters.length = Number(_this.tableLimit))
                    : "";
                if (!_this.firstTime) {
                    dataTablesParameters.search_param = dataTablesParameters.search.value;
                    _this.searchValue = dataTablesParameters.search.value;
                }
                else if (_this.firstTime) {
                    dataTablesParameters.search_param = _this.searchValue;
                    $(".dataTables_filter input").val(_this.searchValue);
                    _this.firstTime = false;
                }
                _this.tableLimit = dataTablesParameters.limit;
                $(".dataTables_wrapper .dataTables_length label select").val(_this.tableLimit);
                // filter
                dataTablesParameters.order[0].column == 0
                    ? (dataTablesParameters.created_at =
                        dataTablesParameters.order[0].column == 0 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "created_at"
                            : "-created_at")
                    : "";
                dataTablesParameters.order[0].column == 1
                    ? (dataTablesParameters.invoice_no =
                        dataTablesParameters.order[0].column == 1 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "invoice_no"
                            : "-invoice_no")
                    : "";
                dataTablesParameters.order[0].column == 2
                    ? (dataTablesParameters.po_num =
                        dataTablesParameters.order[0].column == 2 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "po_num"
                            : "-po_num")
                    : "";
                dataTablesParameters.order[0].column == 3
                    ? (dataTablesParameters.customer__store_name =
                        dataTablesParameters.order[0].column == 3 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "customer__store_name"
                            : "-customer__store_name")
                    : "";
                dataTablesParameters.order[0].column == 4
                    ? (dataTablesParameters.due_date =
                        dataTablesParameters.order[0].column == 4 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "due_date"
                            : "-due_date")
                    : "";
                dataTablesParameters.order[0].column == 5
                    ? (dataTablesParameters.amount =
                        dataTablesParameters.order[0].column == 5 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "amount"
                            : "-amount")
                    : "";
                dataTablesParameters.order[0].column == 6
                    ? (dataTablesParameters.status =
                        dataTablesParameters.order[0].column == 6 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "status"
                            : "-status")
                    : "";
                // dataTablesParameters.order[0].column == 7 ? dataTablesParameters.verfication_status = (dataTablesParameters.order[0].column == 7 && dataTablesParameters.order[0].dir == "asc") ? ("verfication_status") : ("-verfication_status") : "";
                dataTablesParameters.order[0].column == 7
                    ? (dataTablesParameters.amount_recieved =
                        dataTablesParameters.order[0].column == 7 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "amount_recieved"
                            : "-amount_recieved")
                    : "";
                dataTablesParameters.order[0].column == 8
                    ? (dataTablesParameters.remaining_amount =
                        dataTablesParameters.order[0].column == 8 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "remaining_amount"
                            : "-remaining_amount")
                    : "";
                dataTablesParameters.order[0].column == 9
                    ? (dataTablesParameters.order_profit =
                        dataTablesParameters.order[0].column == 9 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "order_profit"
                            : "-order_profit")
                    : "";
                dataTablesParameters.order[0].column == 10
                    ? (dataTablesParameters.order_profit_percentage =
                        dataTablesParameters.order[0].column == 10 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "order_profit_percentage"
                            : "-order_profit_percentage")
                    : "";
                dataTablesParameters.order[0].column == 11
                    ? (dataTablesParameters.payment_status =
                        dataTablesParameters.order[0].column == 11 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "payment_status"
                            : "-payment_status")
                    : "";
                dataTablesParameters.order[0].column == 12
                    ? (dataTablesParameters.salesman =
                        dataTablesParameters.order[0].column == 12 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "salesman"
                            : "-salesman")
                    : "";
                // filters
                dataTablesParameters.filter_verification_status =
                    _this.selectedVerificationStatus;
                dataTablesParameters.filter_order_status = _this.selectedOrderStatus;
                dataTablesParameters.filter_store_name = _this.selectedStoreName;
                // dataTablesParameters.filter_customer_name = this.selectedCustomerName;
                dataTablesParameters.filter_payment_status = _this.selectedPaymentStatus;
                dataTablesParameters.filter_due_date_start = _this.datePipe.transform(_this.selectedFromDueDate, "yyyy-MM-dd");
                dataTablesParameters.filter_due_date_end = _this.datePipe.transform(_this.selectedToDueDate, "yyyy-MM-dd");
                dataTablesParameters.filter_from_date = _this.datePipe.transform(_this.selectedFromDate, "yyyy-MM-dd");
                dataTablesParameters.filter_to_date = _this.datePipe.transform(_this.selectedToDate, "yyyy-MM-dd");
                _this.datatbaleData = dataTablesParameters;
                _this.salesManagementService.orderList(dataTablesParameters).subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.salesList = resData.data;
                        _this.dashboardData = resData.count_data;
                        setTimeout(function () {
                            var table = $("#excel-table").DataTable();
                            table.columns.adjust();
                            document.getElementById("last-header").style.width = "auto";
                        }, 10);
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: dataTablesParameters.search_param == "" &&
                                dataTablesParameters.filter_verification_status == "" &&
                                dataTablesParameters.filter_order_status == "" &&
                                dataTablesParameters.filter_store_name == "" &&
                                dataTablesParameters.filter_payment_status == ""
                                ? resData.total_record
                                : resData.filter_record,
                            data: [],
                        });
                    }
                    else {
                        _this.toastr.error("", resData.message);
                    }
                }, function (err) {
                    _this.toastr.error("", err.error.message);
                });
            },
            columns: [
                { data: "created_at", searchable: false, orderable: true },
                { data: "invoice_no", searchable: true, orderable: true },
                { data: "po_num", searchable: true, orderable: true },
                // { data: 'customer_name', searchable: true, orderable: false },
                { data: "store_name", searchable: true, orderable: true },
                { data: "due_date", searchable: false, orderable: true },
                { data: "amount", searchable: false, orderable: true },
                { data: "status", searchable: false, orderable: true },
                // { data: 'verfication_status', searchable: true, orderable: true },
                { data: "amount_recieved", searchable: false, orderable: true },
                { data: "remaining_amount", searchable: false, orderable: true },
                { data: "order_profit", searchable: false, orderable: true },
                { data: "order_profit_percentage", searchable: false, orderable: true },
                { data: "payment_status", searchable: false, orderable: true },
                { data: "salesman", searchable: true, orderable: true },
                { data: "action", searchable: false, orderable: false },
            ],
        };
    };
    SalesManagementComponent.prototype.getSalesDashboardData = function () {
        var _this = this;
        this.salesManagementService.getDashoardInfo().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.dashboardCommonData = resData.data;
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    SalesManagementComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    SalesManagementComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    SalesManagementComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    SalesManagementComponent.prototype.printPage = function (invoiceNo) {
        var _this = this;
        // check printer attached with computer or not
        this.printService.isConnected.subscribe(function (result) {
            _this.status = result;
            // if (result) {
            //   console.log('Connected to printer!!!');
            // } else {
            //   console.log('Not connected to printer.');
            // }
        });
        var formData = new FormData();
        formData.append("invoice_no", invoiceNo);
        this.salesManagementService.getInvoicePdf(formData).subscribe(function (resultBlob) {
            // It is necessary to create a new blob object with mime-type explicitly set
            // otherwise only Chrome works like it should
            var newBlob = new Blob([resultBlob], { type: "application/pdf" });
            // IE doesn't allow using a blob object directly as link href
            // instead it is necessary to use msSaveOrOpenBlob
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }
            // For other browsers:
            // Create a link pointing to the ObjectURL containing the blob.
            var downloadURL = URL.createObjectURL(newBlob);
            window.open(downloadURL);
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
        // print pdf
        //printJS({printable:'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf', type:'pdf', showModal:false})
    };
    SalesManagementComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.salesManagementService.orderList(this.datatbaleData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                    "Order Date": _this.datePipe.transform(x.created_at, "MM-dd-yyyy"),
                    "Invoice No": x.invoice_no || "-",
                    "PO No": x.po_num || "-",
                    "Store Name": x.store_name || "-",
                    "Payment Due Date": _this.datePipe.transform(x.due_date, "MM-dd-yyyy"),
                    "Order Amount": x.amount || "-",
                    "Order Status": x.status || "-",
                    "Order Verification": x.verfication_status
                        ? "Verified"
                        : "Not Verified",
                    "Order Delivered": x.delivered_status
                        ? "Delivered"
                        : "Not Delivered",
                    "Order Amount Received": x.amount_recieved || "$0",
                    "Open Balance": x.payment_status || "$0",
                    Profit: x.order_profit || "$0",
                    "Profit Percentage": x.order_profit_percentage || "$0",
                    Salesman: x.salesman || "-",
                }); });
                if (type == "pdf") {
                    if (onlyNameAndSymbolArr.length > 0) {
                        var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                        var values = onlyNameAndSymbolArr.map(function (element) {
                            return Object.values(element);
                        });
                        _this.commonService.exportArrayPDF(keys, values, "salesList");
                    }
                    else {
                        _this.toastr.error("", "No Data Found !");
                        $("#myDropdown").toggle();
                    }
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, "salesList");
                }
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    SalesManagementComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _shared_services_sales_management_service__WEBPACK_IMPORTED_MODULE_5__["SalesManagementService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: ng_thermal_print__WEBPACK_IMPORTED_MODULE_9__["PrintService"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], SalesManagementComponent.prototype, "dtElement", void 0);
    SalesManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sales-management",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sales-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/sales-management/sales-management.component.html")).default,
            styles: ["\n      .anchor-tag {\n        color: #23282c;\n        text-decoration: none !important;\n      }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_services_sales_management_service__WEBPACK_IMPORTED_MODULE_5__["SalesManagementService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            ng_thermal_print__WEBPACK_IMPORTED_MODULE_9__["PrintService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]])
    ], SalesManagementComponent);
    return SalesManagementComponent;
}());



/***/ }),

/***/ "./src/app/views/sales-management/sales-management.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/sales-management/sales-management.module.ts ***!
  \*******************************************************************/
/*! exports provided: SalesManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesManagementModule", function() { return SalesManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sales_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-management.component */ "./src/app/views/sales-management/sales-management.component.ts");
/* harmony import */ var _sales_management_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales-management-routing.module */ "./src/app/views/sales-management/sales-management-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _status_order_status_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./status-order/status-order.component */ "./src/app/views/sales-management/status-order/status-order.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _order_invoice_order_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-invoice/order-invoice.component */ "./src/app/views/sales-management/order-invoice/order-invoice.component.ts");
/* harmony import */ var _shared_services_sales_management_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/sales-management.service */ "./src/app/shared/services/sales-management.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var ng_thermal_print__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-thermal-print */ "./node_modules/ng-thermal-print/fesm2015/ng-thermal-print.js");
/* harmony import */ var _update_payment_received_update_payment_received_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./update-payment-received/update-payment-received.component */ "./src/app/views/sales-management/update-payment-received/update-payment-received.component.ts");
/* harmony import */ var _shared_services_payment_received_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/services/payment-received.service */ "./src/app/shared/services/payment-received.service.ts");














 //add this line


var SalesManagementModule = /** @class */ (function () {
    function SalesManagementModule() {
    }
    SalesManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_sales_management_component__WEBPACK_IMPORTED_MODULE_3__["SalesManagementComponent"], _status_order_status_order_component__WEBPACK_IMPORTED_MODULE_8__["StatusOrderComponent"], _order_invoice_order_invoice_component__WEBPACK_IMPORTED_MODULE_10__["OrderInvoiceComponent"], _update_payment_received_update_payment_received_component__WEBPACK_IMPORTED_MODULE_15__["UpdatePaymentReceivedComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _sales_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["SalesManagementRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_13__["NgxPrintModule"],
                ng_thermal_print__WEBPACK_IMPORTED_MODULE_14__["ThermalPrintModule"]
            ],
            providers: [
                _shared_services_sales_management_service__WEBPACK_IMPORTED_MODULE_11__["SalesManagementService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _shared_services_payment_received_service__WEBPACK_IMPORTED_MODULE_16__["PaymentReceivedService"]
            ]
        })
    ], SalesManagementModule);
    return SalesManagementModule;
}());



/***/ }),

/***/ "./src/app/views/sales-management/status-order/status-order.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/sales-management/status-order/status-order.component.ts ***!
  \*******************************************************************************/
/*! exports provided: StatusOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusOrderComponent", function() { return StatusOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_sales_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/sales-management.service */ "./src/app/shared/services/sales-management.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_thermal_print__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-thermal-print */ "./node_modules/ng-thermal-print/fesm2015/ng-thermal-print.js");










var StatusOrderComponent = /** @class */ (function () {
    function StatusOrderComponent(titleService, toastr, salesManagementService, router, route, location, printService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.salesManagementService = salesManagementService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.printService = printService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.productList = [];
        this.status = false;
    }
    StatusOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Complete Status Order");
        this.route.queryParams.subscribe(function (param) {
            _this.orderId = param.id;
            _this.print = param.print;
        });
        this.getOrderData();
    };
    StatusOrderComponent.prototype.getOrderData = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: this.print == 1 ? 100 : 10,
            order: [1, 'desc'],
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page = parseInt(dataTablesParameters.start) / parseInt(dataTablesParameters.length) + 1;
                dataTablesParameters.limit = dataTablesParameters.length;
                dataTablesParameters.search_params = dataTablesParameters.search.value;
                dataTablesParameters.product_name = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("product_name") : ("-product_name");
                _this.salesManagementService
                    .getOrder(_this.orderId, dataTablesParameters)
                    .subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.productList = resData.data.products_list;
                        _this.orderData = resData.data;
                        setTimeout(function () {
                            if (_this.print == 1) {
                                _this.printPage();
                            }
                        }, 1000);
                        callback({
                            recordsTotal: resData.data.total_record,
                            recordsFiltered: resData.data.filter_record,
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
                { data: 'product_name', searchable: true, orderable: true },
                { data: 'quantity', searchable: true, orderable: false },
                { data: 'sales_rate', searchable: true, orderable: true },
                { data: 'order_price', searchable: true, orderable: true },
                { data: 'discount', searchable: true, orderable: false },
                { data: 'final_order_amount', searchable: false, orderable: false }
            ]
        };
    };
    StatusOrderComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
        // setTimeout(() => {
        //   if (this.print == 1) {
        //     this.printPage();
        //   }
        // }, 1000)
    };
    StatusOrderComponent.prototype.printPage = function () {
        var _this = this;
        // print cuurent page
        window.print();
        setTimeout(function () {
            if (_this.print == 1) {
                _this.location.back();
            }
        }, 500);
        // check printer attached with computer or not
        this.printService.isConnected.subscribe(function (result) {
            _this.status = result;
            // if (result) {
            //   console.log('Connected to printer!!!');
            // } else {
            //   console.log('Not connected to printer.');
            // }
        });
        // print pdf
        // printJS({printable:'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf', type:'pdf', showModal:true})
    };
    StatusOrderComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    StatusOrderComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    StatusOrderComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _shared_services_sales_management_service__WEBPACK_IMPORTED_MODULE_5__["SalesManagementService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
        { type: ng_thermal_print__WEBPACK_IMPORTED_MODULE_9__["PrintService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], StatusOrderComponent.prototype, "dtElement", void 0);
    StatusOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status-order',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./status-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/sales-management/status-order/status-order.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_services_sales_management_service__WEBPACK_IMPORTED_MODULE_5__["SalesManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            ng_thermal_print__WEBPACK_IMPORTED_MODULE_9__["PrintService"]])
    ], StatusOrderComponent);
    return StatusOrderComponent;
}());



/***/ }),

/***/ "./src/app/views/sales-management/update-payment-received/update-payment-received.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/sales-management/update-payment-received/update-payment-received.component.ts ***!
  \*****************************************************************************************************/
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_payment_received_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/payment-received.service */ "./src/app/shared/services/payment-received.service.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");













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
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
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
        this.addPaymentReceivedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            customer_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            payment_due_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])
        });
        this.addPaymentMethodForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            cheque_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
            //Validators.required
            ]),
            bank_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
            //Validators.required
            ]),
            ammount_received: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__["RxwebValidators"].extension({
                    extensions: ["png", "jpg", "jpeg", "emf", "jpe", "jfif", "bmp", "gif", "wmf", "dib", "tif", "tiff", 'pdf']
                })
            ]),
            imageSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
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
                if (this.orderList[i].payment != "0") {
                    paymentData.push({
                        invoice_id: this.orderList[i].id, open_balance: parseFloat(this.orderList[i].open_balance), payment_amount: this.orderList[i].payment, payment_status: this.orderList[i].payment_status
                    });
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
        if (this.selectedMode != 'CASH') {
            this.addPaymentMethodForm.get('cheque_no').clearValidators();
            this.addPaymentMethodForm.get('cheque_no').updateValueAndValidity();
        }
        else {
            this.addPaymentMethodForm.get('cheque_no').setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]);
            this.addPaymentMethodForm.get('cheque_no').updateValueAndValidity();
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
                this.amountRecievedMessage = "Under payment for invoice number " + (index + 1);
                this.calculatedReceivedAmount = (this.ammountReceivedValue - this.tickedAmount) * -1;
                this.orderList[index].payment_status = "under";
                for (var i = 0; i < this.orderList.length; i++) {
                    if (this.orderList[i].payment != this.orderList[index].payment && this.orderList[i].payment != 0) {
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
                for (var i = 0; i < this.orderList.length; i++) {
                    if (!this.orderList[i].checked) {
                        this.orderList[i].disabled = true;
                    }
                }
            }
            else {
                this.amountRecievedMessage = "Over payment for invoice number " + (index + 1);
                this.calculatedReceivedAmount = (this.ammountReceivedValue - this.tickedAmount);
                this.orderList[index].payment = amount;
                this.orderList[index].payment_status = "over";
                for (var i = 0; i < this.orderList.length; i++) {
                    if (this.orderList[i].payment != this.orderList[index].payment && this.orderList[i].payment != 0) {
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
                this.amountRecievedMessage = "Under payment for invoice number " + (lastCheckedIndex + 1);
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
                }
            }
            else {
                this.amountRecievedMessage = "Over payment for invoice number " + (lastCheckedIndex + 1);
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
        this.showPaymentMessage = false;
        this.showClearPaymentButton = false;
        this.calculatedReceivedAmount = 0;
        this.tickedAmount = 0;
        for (var i = 0; i < this.orderList.length; i++) {
            this.orderList[i].checked = false;
            this.orderList[i].disabled = false;
            this.orderList[i].payment = 0;
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
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _shared_services_payment_received_service__WEBPACK_IMPORTED_MODULE_11__["PaymentReceivedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] }
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"])
    ], UpdatePaymentReceivedComponent.prototype, "dtElement", void 0);
    UpdatePaymentReceivedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-payment-received',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update-payment-received.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/sales-management/update-payment-received/update-payment-received.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_services_payment_received_service__WEBPACK_IMPORTED_MODULE_11__["PaymentReceivedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]])
    ], UpdatePaymentReceivedComponent);
    return UpdatePaymentReceivedComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-sales-management-sales-management-module.js.map