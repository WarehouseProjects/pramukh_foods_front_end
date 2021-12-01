(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-customer-user-customer-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/add/add.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/add/add.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-6\">\n            <form class=\"card\" [formGroup]=\"addForm\" (ngSubmit)=\"submitAddForm()\" #formDir=\"ngForm\" novalidate>\n                <div class=\"card-header\">Customer add</div>\n                <div class=\"card-body p-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Store Name :</label>\n                                <input formControlName=\"store_name\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Store Name\">\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.store_name.invalid) || addForm.controls.store_name.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','store_name')\" class=\"err-msg\">Store name is required.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Customer Full Name :</label>\n                                <input formControlName=\"fullname\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Customer Full Name\">\n                                    <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.fullname.invalid) || addForm.controls.fullname.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','fullname')\" class=\"err-msg\">Customer full name is required.\n                                          </div>\n                                          <div *ngIf=\"!addForm.hasError('required','fullname') && addForm.hasError('pattern','fullname')\" class=\"err-msg\">Please enter valid customer full name.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Phone Number :</label>\n                                <input mask='(000) 000-0000' formControlName=\"phone_no\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Phone Number\">\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.phone_no.invalid) || addForm.controls.phone_no.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','phone_no')\" class=\"err-msg\">Phone number is required.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Email Address :</label>\n                                <input formControlName=\"email\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Email Address\">\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.email.invalid) || addForm.controls.email.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','email')\" class=\"err-msg\">Email is required.\n                                          </div>\n                                          <div *ngIf=\"!addForm.hasError('required','email') && addForm.hasError('pattern','email')\" class=\"err-msg\">Please enter valid email.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Billing Address :</label>\n                                <textarea formControlName=\"billing_address\" class=\"form-control\" style=\"resize:none;width:100%;\" name=\"textarea-input\"\n                                    rows=\"9\" placeholder=\"Billing Address\" spellcheck=\"false\"></textarea>\n                                    <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.billing_address.invalid) || addForm.controls.billing_address.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','billing_address')\" class=\"err-msg\">Billing address is required.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Billing City :</label>\n                                <input formControlName=\"billing_city\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Billing City\">\n                                    <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.billing_city.invalid) || addForm.controls.billing_city.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','billing_city')\" class=\"err-msg\">Billing city is required.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Billing State :</label>\n                                    <input formControlName=\"billing_state\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Billing State\">\n                                    <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.billing_state.invalid) || addForm.controls.billing_state.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','billing_state')\" class=\"err-msg\">Billing state is required.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Billing Zipcode :</label>\n                                    <input formControlName=\"billing_zipcode\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Billing Zipcode\">\n                                    <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.billing_zipcode.invalid) || addForm.controls.billing_zipcode.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','billing_zipcode')\" class=\"err-msg\">Billing zipcode is required.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <input [(ngModel)]=\"checkSameBillingAddress\" [ngModelOptions]=\"{standalone: true}\" style=\"margin-right: 5px; margin-top: 5px\" (change)=\"changeCheckSameBillingAddress()\" type=\"checkbox\" id=\"vehicle1\" name=\"vehicle1\" value=\"Bike\">\n                                <label for=\"vehicle1\"> Same as billing address</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Shipping Address :</label>\n                                <textarea formControlName=\"shipping_address\" class=\"form-control\" style=\"resize:none;width:100%;\" name=\"textarea-input\"\n                                    rows=\"9\" placeholder=\"Shipping Address\" spellcheck=\"false\"></textarea>\n                                    <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.shipping_address.invalid) || addForm.controls.shipping_address.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','shipping_address')\" class=\"err-msg\">Shipping address is required.\n                                          </div>\n                                        </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Shipping City :</label>\n                                    <input formControlName=\"shipping_city\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Shipping City\">\n                                    <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.shipping_city.invalid) || addForm.controls.shipping_city.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','shipping_city')\" class=\"err-msg\">Shipping city is required.\n                                          </div>\n                                        </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Shipping State :</label>\n                                    <input formControlName=\"shipping_state\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Shipping State\">\n                                    <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.shipping_state.invalid) || addForm.controls.shipping_state.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','shipping_state')\" class=\"err-msg\">Shipping state is required.\n                                          </div>\n                                        </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Shipping Zipcode :</label>\n                                    <input formControlName=\"shipping_zipcode\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Shipping Zipcode\">\n                                    <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.shipping_zipcode.invalid) || addForm.controls.shipping_zipcode.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','shipping_zipcode')\" class=\"err-msg\">Shipping zipcode is required.\n                                          </div>\n                                        </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Sales Tax ID :</label>\n                                <input formControlName=\"sales_tax_id\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Sales Tax ID\">\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.sales_tax_id.invalid) || addForm.controls.sales_tax_id.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','sales_tax_id')\" class=\"err-msg\">Sales tax id is required.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Upload Sales Tax image or PDF Document :</label>\n                                <input (change)=\"onTaxImgFileChange($event)\" formControlName=\"sales_tax_image\" class=\"form-control\" type=\"file\">\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.sales_tax_image.invalid) || addForm.controls.sales_tax_image.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','sales_tax_image')\" class=\"err-msg\">Tax document file is required.\n                                          </div>\n                                          <div *ngIf=\"!addForm.hasError('required','sales_tax_image') && addForm.controls.sales_tax_image.invalid\" class=\"err-msg\">\n                                            Please upload valid sales tax file.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex align-items-end justify-content-between\">\n                            <div class=\"form-group\" style=\"width:250px;max-width: 100%;\">\n                                <label for=\"name\" class=\"w-100\">Payment Threshold :</label>\n                                <input formControlName=\"minumum_threshold\" class=\"form-control\" id=\"name\" type=\"number\" placeholder=\"Minimum Amount\">\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.minumum_threshold.invalid) || addForm.controls.minumum_threshold.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','minumum_threshold')\" class=\"err-msg\">Minimum amount is required.\n                                          </div>\n                                        </div>\n                            </div>\n                            <div class=\"form-group\" style=\"width:250px;max-width: 100%;\">\n                                <input formControlName=\"maximum_threshold\" class=\"form-control\" id=\"name\" type=\"number\" placeholder=\"Maximum Amount\">\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.maximum_threshold.invalid) || addForm.controls.maximum_threshold.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','maximum_threshold')\" class=\"err-msg\">Maximum amount is required.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Upload Signed Terms & Condition Document :</label>\n                                <input (change)=\"onTermAndConditionFileChange($event)\" formControlName=\"terms_and_condition\" class=\"form-control\" id=\"name\" type=\"file\" placeholder=\"Enter Upload pdf\n                                \">\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.terms_and_condition.invalid) || addForm.controls.terms_and_condition.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','terms_and_condition')\" class=\"err-msg\">Term and condition document is required.\n                                          </div>\n                                          <div *ngIf=\"!addForm.hasError('required','terms_and_condition') && addForm.controls.terms_and_condition.invalid\" class=\"err-msg\">\n                                            Please upload valid sales term and condition file.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div> -->\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Select Sales User :</label>\n                                <select [(ngModel)]=\"selectedSalesPerson\" formControlName=\"sales_person\"\n                                    class=\"form-control\">\n                                    <option disabled value=\"\">Select Sales User</option>\n                                    <option *ngFor=\"let item of salesPersonList\" [value]=\"item.id\">\n                                        {{item.full_name}}</option>\n                                </select>\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && addForm.controls.sales_person.invalid) || addForm.controls.sales_person.touched\">\n                                    <div *ngIf=\"addForm.hasError('required','sales_person')\" class=\"err-msg\">\n                                        Sales person is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row px-3\">\n                            <div class=\"col-sm-12 mt-2\">\n                                <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Add</button>\n                                <button class=\"btn btn-md btn-secondary\" type=\"button\" [routerLink]=\"['/customer-user']\">Cancel</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/customer-invoice/customer-invoice.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/customer-invoice/customer-invoice.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"col-sm-12\">\n                    <!-- <div class=\"mb-0 p-3 pull-left\" style=\"padding-bottom: 20px;\">\n                        <span>\n                            <h4><strong>Name :- </strong>Shane</h4>\n                            <h4><strong>Phone Number :- </strong>Shane</h4>\n                            <h4><strong>Email :- </strong>Shane</h4>\n                        </span>\n                    </div> -->\n                    <div class=\"d-flex flex-wrap justify-content-between align-items-start mb-0 pt-3\">\n                        <div class=\"customer-name\">\n                            <strong>Name :</strong>\n                            <span>{{orderData?.customer_name}}</span>\n                        </div>\n                        <div class=\"form-group mb-2\">\n                            <button class=\"btn btn-md btn-dark\" [routerLink]=\"['/payment-history']\"\n                                [queryParams]='{id: orderData?.customer_id}'>Payment History</button>\n                            <!-- [routerLink]=\"['/customer-user/update-payment-received']\" -->\n                            <button type=\"button\" [routerLink]=\"['/update-payment-received']\"\n                                [queryParams]='{id: customerId,payment_date: orderData?.due_date}'\n                                class=\"btn btn-md btn-success\">Receive Payment</button>\n                            <button class=\"btn btn-md btn-secondary\" [routerLink]=\"['/customer-user']\">Back</button>\n                            <!-- <button class=\"btn btn-md btn-dark\" [routerLink]=\"['/update-payment-received']\">Update payment Method </button> -->\n                        </div>\n                        <!-- <div class=\"form-group w-100 text-right\">\n                            <button type=\"button\" [routerLink]=\"['/customer-user/update-payment-received']\"\n                                [queryParams]='{id: customerId,payment_date: orderData?.due_date}'\n                                class=\"btn btn-md btn-success\">Receive Payment</button>\n                        </div> -->\n                    </div>\n                    <div class=\"customer-content customer-invoice-content\">\n                        <ul class=\"row\">\n                            <!-- <li class=\"\">\n                                <strong>Name :</strong>\n                                <span>{{orderData?.customer_name}}</span>\n                            </li> -->\n                            <li class=\"col-md-4 d-flex\">\n                                <strong>Phone Number :</strong>\n                                <span>{{orderData?.customer_number || \"-\"}}</span>\n                            </li>\n                            <li class=\"col-md-4 d-flex\">\n                                <strong>Email :</strong>\n                                <span>{{orderData?.customer_email || \"-\"}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"row justify-content-center product-box\">\n                        <div class=\"col-md-4 col-sm-12\">\n                            <div class=\"card text-white bg-primary\" style=\"min-height: 161px;border:0;\">\n                                <div class=\"card-body pb-0\">\n                                    <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\n                                    </button>\n                                    <div class=\"text-value\">Total Amount of Order Placed </div>\n                                    <div>Till Date</div>\n                                    <h2>{{orderData?.total_amount ? (\"$ \"+(orderData?.total_amount | number : '1.2-2'))\n                                        : \"$ 0.00\"}}</h2>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4 col-sm-12\">\n                            <div class=\"card text-white bg-danger\" style=\"min-height: 161px;border:0;\">\n                                <div class=\"card-body pb-0\">\n                                    <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\n                                    </button>\n                                    <div class=\"text-value\">Amount Left to be Received </div>\n                                    <div>Till Date</div>\n                                    <h2 style=\"margin-top: 38px;\">{{orderData?.total_remaining_amount ? (\"$\n                                        \"+(orderData?.total_remaining_amount | number : '1.2-2')) : \"$ 0.00\"}}</h2>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4 col-sm-12\">\n                            <div class=\"card text-white bg-success\" style=\"min-height: 161px;border:0;\">\n                                <div class=\"card-body pb-0\">\n                                    <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\n                                    </button>\n                                    <div class=\"text-value\">Amount Received</div>\n                                    <div>Till Date</div>\n                                    <h2 style=\"margin-top: 35px;\">{{orderData?.total_amount_received ? (\"$\n                                        \"+(orderData?.total_amount_received | number : '1.2-2')) : \"$ 0.00\"}}</h2>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <!-- <div class=\"card-header\">Customer Invoice</div> -->\n                <div class=\"card-header d-flex justify-content-between align-items-center\">Customer Invoice\n                    <div class=\"pull-right\">\n                        <!-- <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\"> -->\n                        <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                            type=\"button\"><i class=\"fa fa-file-export mr-2\n                            \"></i>Export</button>\n                        <div id=\"myDropdown\" class=\"dropdown-content\">\n                            <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\"\n                                style=\"font-size: small; text-decoration: none;\">Export to XLSX</a>\n                            <!-- <a href=\"javascript:void(0)\" (click)=\"commonService.exportPDF(true, 10, 'customerInvoiceList');rerender();\">Export to PDF</a> -->\n                            <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n                        </div>\n                    </div>\n                    <!-- </div> -->\n                </div>\n                <div class=\"card-body p-4\">\n                    <form class=\"row justify-content-start align-items-center mb-0\">\n                        <div class=\"col-md-3 col-sm-12\">\n                            <div class=\"form-group\">\n                                <label>From Invoice Date</label>\n                                <input type=\"text\" placeholder=\"From Invoice Date\" class=\"form-control\"\n                                    [(ngModel)]=\"selectedFromDate\" [ngModelOptions]=\"{standalone: true}\" bsDatepicker>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3 col-sm-12\">\n                            <div class=\"form-group\">\n                                <label>To Invoice Date</label>\n                                <input type=\"text\" placeholder=\"To Invoice Date\" class=\"form-control\"\n                                    [(ngModel)]=\"selectedToDate\" [ngModelOptions]=\"{standalone: true}\" bsDatepicker>\n                            </div>\n                        </div>\n                        <div class=\"col-md-2 col-sm-12 pt-2\">\n                            <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\" type=\"button\">Filter</button>\n                        </div>\n                    </form><br>\n                    <!-- <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n                        <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                            type=\"button\"><i class=\"fa fa-file-export mr-2\n                        \"></i>Export</button>\n                        <div id=\"myDropdown\" class=\"dropdown-content\">\n                            <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\"\n                                style=\"font-size: small; text-decoration: none;\">Export to XLSX</a>\n                        </div>\n                    </div> -->\n                    <perfect-scrollbar>\n                        <div class=\"responsive-table rounded mb-4\">\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                                class=\"data row-border hover table order-table border\" id=\"excel-table\">\n                                <thead>\n                                    <tr>\n                                        <th>Order Date</th>\n                                        <th>Invoice No</th>\n                                        <th>Payment Due Date</th>\n                                        <th>Order Amount</th>\n                                        <th>Order Status</th>\n                                        <th>Order Verification</th>\n                                        <th>Payment Amount Received</th>\n                                        <th>Open Balance</th>\n                                        <th>Payment Status</th>\n                                        <th>Salesman</th>\n                                        <!-- <th>Action</th> -->\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let order of orderList;let i = index;\">\n                                        <td>{{order.created_at ? (order.created_at | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                                        <td>\n                                            <a class=\"text-dark mx-2\" [routerLink]=\"['/sales-management/order-invoice']\"\n                                                [queryParams]='{id: order?.id,customer_id: order?.customer, fromProductOrder: true}'>\n                                                <span class=\"anchor-tag\">\n                                                    {{order.invoice_no || \"-\"}}\n                                                </span>\n                                            </a>\n                                        </td>\n                                        <td>{{order.due_date | date: 'MM-dd-yyyy' || \"-\"}}</td>\n                                        <td>{{order.amount ? (\"$\"+(order.amount | number : '1.2-2')) : \"-\"}}</td>\n                                        <td>{{order.status || \"-\"}}</td>\n                                        <td>\n                                            <span *ngIf=\"order.verfication_status\" class=\"text-success\">Verfied</span>\n                                            <span *ngIf=\"!order.verfication_status\" class=\"text-danger\">\n                                                Not Verfied\n                                            </span>\n                                        </td>\n                                        <td>{{order.amount_recieved ? (\"$\"+(order.amount_recieved | number : '1.2-2')) :\n                                            \"$0.00\"}}</td>\n                                        <td>{{order.open_balance ? (\"$\"+(order.open_balance | number : '1.2-2')) :\n                                            \"$0.00\"}}</td>\n                                        <td>\n                                            <span *ngIf=\"order?.payment_status == 'NOT_PAID'\" class=\"text-danger\">Not\n                                                Paid</span>\n                                            <span *ngIf=\"order?.payment_status == 'FULL'\"\n                                                class=\"text-success\">Paid</span>\n                                            <span *ngIf=\"order?.payment_status == 'PARTIAL'\">Partially Paid</span>\n                                            <span *ngIf=\"order?.payment_status == null\">-</span>\n                                        </td>\n                                        <td>{{order.salesman || \"-\"}}</td>\n                                        <!-- <td>\n                                            <div class=\"d-flex align-items-center justify-content-center\">\n                                                <a class=\"text-primary mx-2\"><i class=\"fa fa-eye\"\n                                                        [routerLink]=\"['/order-management/order-invoice']\"\n                                                        [queryParams]='{id: order?.id,customer_id: order?.customer}'></i></a> -->\n                                        <!-- <a class=\"text-dark mx-2\" [routerLink]=\"['/customer-user/edit']\" [queryParams]='{id: order?.id}'><i\n                                                    class=\"far fa-print\"></i></a>\n                                            <a class=\"text-info mx-2\" href=\"javascript:void(0)\"><i\n                                                    class=\"fas fa-file-invoice\"></i></a> -->\n                                        <!-- <a [routerLink]=\"['/order-management/status-order']\"\n                                                    [queryParams]='{id: order?.id,print: 1}' class=\"text-info mx-2\"\n                                                    href=\"javascript:void(0)\"><i class=\"fa fa-print\"></i></a>\n                                            </div>\n                                        </td> -->\n                                    </tr>\n                                    <tr *ngIf=\"orderList?.length == 0\">\n                                        <td colspan=\"11\" class=\"no-data-available\">No Data Found !</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </perfect-scrollbar>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/customer-user.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/customer-user.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">Customer Users</div>\n                <div class=\"card-body p-4\">\n                    <div class=\"d-flex flex-wrap justify-content-end align-items-center\">\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-md btn-primary\" type=\"button\"\n                                [routerLink]=\"['/customer-user/add']\"><i class=\"fa fa-plus mr-2\n                        \"></i>Add Customer User</button>\n                        </div>\n                        <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n                            <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                                type=\"button\"><i class=\"fa fa-file-export mr-2\n                            \"></i>Export</button>\n                            <div id=\"myDropdown\" class=\"dropdown-content\">\n                                <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a>\n                                <!-- <a href=\"javascript:void(0)\" (click)=\"commonService.exportPDF(true, 10, 'customerList');rerender();\">Export to PDF</a> -->\n                                <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n                            </div>\n                        </div>\n                    </div>\n                    <perfect-scrollbar>\n                        <div class=\"responsive-table rounded mb-4\">\n                            <table style=\"width: 100%;\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                                class=\"data row-border hover table order-table border\" id=\"excel-table\">\n                                <thead>\n                                    <tr>\n                                        <th>Store Name</th>\n                                        <th>Customer Name</th>\n                                        <th>Phone Number</th>\n                                        <th>Email Address</th>\n                                        <!-- <th>Sales <br> Tax id</th> -->\n                                        <!-- <th>Credit <br> Balance</th> -->\n                                        <th>Payment threshold</th>\n                                        <!-- <th>Sign off <br> process</th> -->\n                                        <th>Open <br> Balance</th>\n                                        <th>No. of <br> orders placed</th>\n                                        <th>Total <br> Order Amount</th>\n                                        <th class=\"text-center\">Actions</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let customer of customerList;let i = index;\">\n                                        <td>\n                                            <a class=\"text-primary\" [routerLink]=\"['/customer-user/customer-invoice']\"\n                                                [queryParams]='{id: customer?.id}'>\n                                                <span class=\"anchor-tag\">\n                                                    {{customer.store_name || \"-\"}}\n                                                </span>\n                                            </a>\n                                        </td>\n                                        <td>\n                                            <a class=\"text-primary mx-2\"\n                                                [routerLink]=\"['/customer-user/customer-invoice']\"\n                                                [queryParams]='{id: customer?.id}'>\n                                                <span class=\"anchor-tag\">\n                                                    {{customer.full_name || \"-\"}}\n                                                </span>\n                                            </a>\n                                        </td>\n                                        <td>{{customer.phone ? (customer.phone | mask: '(000) 000-0000') : \"-\"}}</td>\n                                        <td>{{customer.email || \"-\"}}</td>\n                                        <!-- <td>{{customer.sales_tax_id || \"-\"}}</td> -->\n                                        <!-- <td>{{customer.credit_balance ? (\"$\"+(customer.credit_balance | number :\n                                            '1.2-2')) : \"$0.00\"}}</td> -->\n                                        <td>{{\"$\"+(customer.min_threshold)+\" - $\"+(customer.max_threshold)}}</td>\n                                        <!-- <td>{{customer.sign_off_process || \"-\"}}</td> -->\n                                        <td>{{customer.open_balance ? (\"$\"+(customer.open_balance | number : '1.2-2')) :\n                                            \"$0.00\"}}</td>\n                                        <td>{{customer.all_order || \"0\"}}</td>\n                                        <td>{{customer.total_order_amount ? (\"$\"+(customer.total_order_amount | number :\n                                            '1.2-2')) : \"$0.00\"}}</td>\n                                        <td>\n                                            <div class=\"d-flex align-items-center justify-content-center\">\n                                                <!-- <a class=\"text-info mx-2\"\n                                                    [routerLink]=\"['/customer-user/customer-invoice']\"\n                                                    [queryParams]='{id: customer?.id}'><i\n                                                        class=\"fas fa-file-invoice\"></i></a> -->\n                                                <a class=\"text-primary mx-2\" [routerLink]=\"['/customer-user/view']\"\n                                                    [queryParams]='{id: customer?.id}'><i class=\"fa fa-eye\"></i></a>\n                                                <a class=\"text-dark mx-2\" [routerLink]=\"['/customer-user/edit']\"\n                                                    [queryParams]='{id: customer?.id}'><i class=\"fa fa-pencil\"></i></a>\n                                                <a class=\"text-danger mx-2\" href=\"javascript:void(0)\"\n                                                    (click)=\"deleteModal.show();saveId(customer?.id);\"><i\n                                                        class=\"far fa-trash-alt\"></i></a>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                    <tr *ngIf=\"customerList?.length == 0\">\n                                        <td colspan=\"12\" class=\"no-data-available\">No Data Found !</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </perfect-scrollbar>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- delete modal -->\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n                <h2 class=\"font-weight-bold mb-4 text-primary\">Delete</h2>\n                <p class=\"mb-0\">Are You Sure You Want To Delete ?</p>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCustomer()\">Delete</button>\n            </div>\n        </div><!-- /.modal-content -->\n    </div>\n</div><!-- /.modal -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/edit/edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/edit/edit.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-6\">\n            <form class=\"card\" [formGroup]=\"editForm\" (ngSubmit)=\"submitEditForm()\" #formDir=\"ngForm\" novalidate>\n                <div class=\"card-header\">Customer Edit</div>\n                <div class=\"card-body p-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Store Name :</label>\n                                <input formControlName=\"store_name\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Store Name*\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.store_name.invalid) || editForm.controls.store_name.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','store_name')\" class=\"err-msg\">Store name\n                                        is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Customer Full Name :</label>\n                                <input formControlName=\"fullname\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Customer Full Name*\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.fullname.invalid) || editForm.controls.fullname.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','fullname')\" class=\"err-msg\">Customer full\n                                        name is required.\n                                    </div>\n                                    <div *ngIf=\"!editForm.hasError('required','fullname') && editForm.hasError('pattern','fullname')\"\n                                        class=\"err-msg\">Please enter valid customer full name.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Phone Number :</label>\n                                <input mask='(000) 000-0000' formControlName=\"phone_no\" class=\"form-control\" id=\"name\"\n                                    type=\"text\" placeholder=\"Phone Number\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.phone_no.invalid) || editForm.controls.phone_no.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','phone_no')\" class=\"err-msg\">Phone number\n                                        is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Email Address :</label>\n                                <input formControlName=\"email\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Email Address\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.email.invalid) || editForm.controls.email.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','email')\" class=\"err-msg\">Email is\n                                        required.\n                                    </div>\n                                    <div *ngIf=\"!editForm.hasError('required','email') && editForm.hasError('pattern','email')\"\n                                        class=\"err-msg\">Please enter valid email.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Billing Address :</label>\n                                <textarea formControlName=\"billing_address\" class=\"form-control\"\n                                    style=\"resize:none;width:100%;\" name=\"textarea-input\" rows=\"9\"\n                                    placeholder=\"Billing Address\" spellcheck=\"false\"></textarea>\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.billing_address.invalid) || editForm.controls.billing_address.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','billing_address')\" class=\"err-msg\">Billing\n                                        address is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Billing City :</label>\n                                <input formControlName=\"billing_city\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Billing City\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.billing_city.invalid) || editForm.controls.billing_city.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','billing_city')\" class=\"err-msg\">Billing\n                                        city is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Billing State :</label>\n                                <input formControlName=\"billing_state\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Billing State\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.billing_state.invalid) || editForm.controls.billing_state.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','billing_state')\" class=\"err-msg\">Billing\n                                        state is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Billing Zipcode :</label>\n                                <input formControlName=\"billing_zipcode\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Billing Zipcode\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.billing_zipcode.invalid) || editForm.controls.billing_zipcode.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','billing_zipcode')\" class=\"err-msg\">Billing\n                                        zipcode is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <input [(ngModel)]=\"checkSameBillingAddress\" [ngModelOptions]=\"{standalone: true}\"\n                                    style=\"margin-right: 5px; margin-top: 5px\"\n                                    (change)=\"changeCheckSameBillingAddress()\" type=\"checkbox\" id=\"vehicle1\"\n                                    name=\"vehicle1\" value=\"Bike\">\n                                <label for=\"vehicle1\"> Same as billing address</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Shipping Address :</label>\n                                <textarea formControlName=\"shipping_address\" class=\"form-control\"\n                                    style=\"resize:none;width:100%;\" name=\"textarea-input\" rows=\"9\"\n                                    placeholder=\"Shipping Address\" spellcheck=\"false\"></textarea>\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.shipping_address.invalid) || editForm.controls.shipping_address.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','shipping_address')\" class=\"err-msg\">\n                                        Shipping address is required.\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Shipping City :</label>\n                                <input formControlName=\"shipping_city\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Shipping City\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.shipping_city.invalid) || editForm.controls.shipping_city.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','shipping_city')\" class=\"err-msg\">Shipping\n                                        city is required.\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Shipping State :</label>\n                                <input formControlName=\"shipping_state\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Shipping State\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.shipping_state.invalid) || editForm.controls.shipping_state.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','shipping_state')\" class=\"err-msg\">Shipping\n                                        state is required.\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex flex-wrap\">\n                            <div class=\"form-group d-flex w-100 flex-wrap\">\n                                <label for=\"name\" class=\"w-100\">Shipping Zipcode :</label>\n                                <input formControlName=\"shipping_zipcode\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Shipping Zipcode\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.shipping_zipcode.invalid) || editForm.controls.shipping_zipcode.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','shipping_zipcode')\" class=\"err-msg\">\n                                        Shipping zipcode is required.\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Sales Tax ID :</label>\n                                <input formControlName=\"sales_tax_id\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Sales Tax ID\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.sales_tax_id.invalid) || editForm.controls.sales_tax_id.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','sales_tax_id')\" class=\"err-msg\">Sales tax\n                                        id is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Upload Sales Tax image or PDF Document :</label>\n                                <input (change)=\"onTaxImgFileChange($event)\" formControlName=\"sales_tax_image\"\n                                    class=\"form-control\" type=\"file\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.sales_tax_image.invalid) || editForm.controls.sales_tax_image.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','sales_tax_image')\" class=\"err-msg\">Tax\n                                        document file is required.\n                                    </div>\n                                    <div *ngIf=\"!editForm.hasError('required','sales_tax_image') && editForm.controls.sales_tax_image.invalid\"\n                                        class=\"err-msg\">\n                                        Please upload valid sales tax file.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 d-flex align-items-end justify-content-between\">\n                            <div class=\"form-group\" style=\"width:250px;max-width: 100%;\">\n                                <label for=\"name\" class=\"w-100\">Payment Threshold :</label>\n                                <input formControlName=\"minumum_threshold\" class=\"form-control\" id=\"name\" type=\"number\"\n                                    placeholder=\"Minimum Amount\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.minumum_threshold.invalid) || editForm.controls.minumum_threshold.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','minumum_threshold')\" class=\"err-msg\">\n                                        Minimum amount is required.\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\" style=\"width:250px;max-width: 100%;\">\n                                <input formControlName=\"maximum_threshold\" class=\"form-control\" id=\"name\" type=\"number\"\n                                    placeholder=\"Maximum Amount\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.maximum_threshold.invalid) || editForm.controls.maximum_threshold.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','maximum_threshold')\" class=\"err-msg\">\n                                        Maximum amount is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Upload Signed Terms & Condition Document :</label>\n                                <input (change)=\"onTermAndConditionFileChange($event)\" formControlName=\"terms_and_condition\" class=\"form-control\" id=\"name\" type=\"file\" placeholder=\"Enter Upload pdf\n                                \">\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && editForm.controls.terms_and_condition.invalid) || editForm.controls.terms_and_condition.touched\">\n                                          <div *ngIf=\"editForm.hasError('required','terms_and_condition')\" class=\"err-msg\">Term and condition document is required.\n                                          </div>\n                                          <div *ngIf=\"!editForm.hasError('required','terms_and_condition') && editForm.controls.terms_and_condition.invalid\" class=\"err-msg\">\n                                            Please upload valid sales term and condition file.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div> -->\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Select Sales User :</label>\n                                <select [(ngModel)]=\"selectedSalesPerson\" formControlName=\"sales_person\"\n                                    class=\"form-control\">\n                                    <option disabled value=\"\">Select Sales User</option>\n                                    <option *ngFor=\"let item of salesPersonList\" [value]=\"item.id\">\n                                        {{item.full_name}}</option>\n                                </select>\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.sales_person.invalid) || editForm.controls.sales_person.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','sales_person')\" class=\"err-msg\">\n                                        Sales person is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row px-3\">\n                            <div class=\"col-sm-12 mt-2\">\n                                <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Save</button>\n                                <button class=\"btn btn-md btn-secondary\" type=\"button\"\n                                    [routerLink]=\"['/customer-user']\">Cancel</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/update-payment-received/update-payment-received.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/update-payment-received/update-payment-received.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header d-flex justify-content-between align-items-center\">Payment Method\n                    <div class=\"pull-right\">\n                        <a (click)=\"goPreviousUrl()\" class=\"btn btn-md btn-secondary\" type=\"button\">Back</a>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"addPaymentMethodForm\" (ngSubmit)=\"uncheckAll();\" #formDir=\"ngForm\" novalidate\n                        class=\"customer-content sales-content\">\n                        <ul class=\"d-flex flex-wrap\">\n                            <li>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">Payment Method</label>\n                                    <select (change)=\"changeMode()\" [(ngModel)]=\"selectedMode\" formControlName=\"mode\"\n                                        class=\"form-control\">\n                                        <option value=\"CASH\">Cash</option>\n                                        <option value=\"CHEQUE\">Check</option>\n                                    </select>\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.mode.invalid) || addPaymentMethodForm.controls.mode.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','mode')\" class=\"err-msg\">\n                                            Payment mode is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <li *ngIf=\"(selectedMode == 'CHEQUE') || (selectedMode == 'ONLINE')\">\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">{{selectedMode == 'CHEQUE' ? \"Check No\" :\n                                        \"Transaction No\"}}</label>\n                                    <input formControlName=\"cheque_no\" class=\"form-control\" id=\"name\" type=\"text\"\n                                        placeholder=\"Enter {{selectedMode == 'CHEQUE' ? 'Check No' : 'Transaction No'}}\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.cheque_no.invalid) || addPaymentMethodForm.controls.cheque_no.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','cheque_no')\"\n                                            class=\"err-msg\">{{selectedMode == 'CHEQUE' ? \"Check no\" : \"Transaction\n                                            no\"}} is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <!-- <li>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">Bank Name :</label>\n                                    <input formControlName=\"bank_name\" class=\"form-control\" id=\"name\" type=\"text\"\n                                        placeholder=\"Enter Bank Name\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.bank_name.invalid) || addPaymentMethodForm.controls.bank_name.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','bank_name')\"\n                                            class=\"err-msg\">Bank name is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li> -->\n                            <li>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">Amount Received</label>\n                                    <input [(ngModel)]=\"ammountReceivedValue\" (change)=\"onAmountChange();\"\n                                        formControlName=\"ammount_received\" class=\"form-control quantity\" id=\"name\"\n                                        type=\"number\" placeholder=\"Enter Amount Received\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.ammount_received.invalid) || addPaymentMethodForm.controls.ammount_received.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','ammount_received')\"\n                                            class=\"err-msg\">Amount received is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"w-100\">Image</label>\n                                    <input (change)=\"onImageFileChange($event)\" formControlName=\"image\"\n                                        class=\"form-control\" id=\"name\" type=\"file\" placeholder=\"Enter Bank Name\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submittedMethodReceived && addPaymentMethodForm.controls.image.invalid) || addPaymentMethodForm.controls.image.touched\">\n                                        <div *ngIf=\"addPaymentMethodForm.hasError('required','image')\" class=\"err-msg\">\n                                            Image is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"w-100 d-block\">\n                                <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Submit</button>\n                            </li>\n                        </ul>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <form class=\"card\">\n                <div class=\"card-header d-flex justify-content-between align-items-center\">Outstanding Order\n                    <div class=\"dropdown pull-right\">\n                        <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                            type=\"button\">\n                            <i class=\"fa fa-file-export mr-2\"></i>\n                            Export\n                        </button>\n                        <div id=\"myDropdown\" class=\"dropdown-content\">\n                            <a href=\"javascript:void(0)\" (click)=\"exportCsv()\"\n                                style=\"font-size: small; text-decoration: none;\">\n                                Export to XLSX\n                            </a>\n                        </div>\n                        <button *ngIf=\"showClearPaymentButton\" class=\"btn btn-md btn-dark\" type=\"button\"\n                            (click)=\"submitAddPaymentMethodForm()\">Clear\n                            Payment</button>\n                    </div>\n                </div>\n                <div class=\"card-body p-4\">\n                    <div class=\"d-flex flex-wrap justify-content-end align-items-start mb-0\">\n                        <!-- <div class=\"form-group\">\n                            <button class=\"btn btn-md btn-primary\" type=\"button\" (click)=\"addmodal.show()\"><i class=\"fa fa-plus mr-2\n                        \"></i>Add Payment</button>\n                        </div> -->\n                        <!-- <div *ngIf=\"showPaymentMessage\" class=\"row\">\n                            <div class=\"col-sm-12 py-3 text-center\">\n                                <button class=\"btn btn-md btn-dark mr-3\" type=\"button\" (click)=\"submitPayment()\">Clear\n                                    Payment</button>\n                            </div>\n                        </div> -->\n                    </div>\n                    <perfect-scrollbar>\n                        <div class=\"responsive-table rounded mb-4\">\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" datatable\n                                class=\"data row-border hover table order-table border\">\n                                <thead>\n                                    <tr>\n                                        <th>Select</th>\n                                        <th>Order Date</th>\n                                        <th>Invoice No#</th>\n                                        <th>Payment Due<br>Date</th>\n                                        <th>Order Amount</th>\n                                        <th>Payment<br>Amount<br>Received</th>\n                                        <th>Open<br>Balance</th>\n                                        <th>Payment</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let order of orderList;let i = index;\">\n                                        <td>\n                                            <div class=\"custom-control custom-checkbox\">\n                                                <input type=\"checkbox\" class=\"custom-control-input\"\n                                                    (click)=\"order.checked=!order.checked; calculateAmountReceived(order.checked, order.open_balance*1, i)\"\n                                                    [id]=\"'checkbox' + order.id\" [checked]=\"order.checked\"\n                                                    [disabled]=\"order.disabled\">\n                                                <label class=\"custom-control-label\"\n                                                    [for]=\"'checkbox' + order.id\"></label>\n                                            </div>\n                                        </td>\n                                        <td>{{order.created_at ? (order.created_at | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                                        <td>{{order.invoice_no || \"-\"}}</td>\n                                        <td>{{order.due_date ? (order.due_date | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                                        <td>\n                                            {{order.amount ? (\"$\"+(order.amount | number : '1.2-2')) : \"$0.00\"}}\n                                        </td>\n                                        <td>\n                                            {{order.amount_recieved ? (\"$\"+(order.amount_recieved | number : '1.2-2')) :\n                                            \"$0.00\"}}\n                                        </td>\n                                        <td>\n                                            {{order.open_balance ? (\"$\"+(order.open_balance | number : '1.2-2')) :\n                                            \"$0.00\"}}\n                                        </td>\n                                        <td>\n                                            <!-- <input style=\"width: 90px;\" class=\"form-control quantity\" #paymentValue\n                                                type=\"number\" [value]=\"order?.payment\"\n                                                (change)=\"changePaymentValue(paymentValue.value,order, i)\"\n                                                (keyup)=\"paymentValue.value > order.remaining_amount ? paymentValue.value = order.remaining_amount : paymentValue.value\"> -->\n                                            <!-- <input style=\"width: 90px;\" class=\"form-control quantity\" type=\"number\"\n                                                [value]=\"order?.payment\"> -->\n                                            {{order.payment ? (\"$\"+(order.payment | number : '1.2-2')) : \"$0.00\"}}\n                                        </td>\n\n                                    </tr>\n                                    <tr *ngIf=\"orderList?.length == 0\">\n                                        <td colspan=\"7\" class=\"no-data-available\">No Data Found !</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </perfect-scrollbar>\n                    <div class=\"calcuted-data\">\n                        <ul class=\"justify-content-end\">\n                            <!-- <li>\n                                <strong>Amount to Apply </strong>\n                                <span>{{\"$ \"+(amountToApply | number : '1.2-2')}}</span>\n                            </li> -->\n                            <li style=\"float: left;\" *ngIf=\"showPaymentMessage\">\n                                <strong>{{amountRecievedMessage}}</strong>\n                                <span>{{calculatedReceivedAmount}}</span>\n                            </li>\n                            <li>\n                                <strong>Outstanding Amount</strong>\n                                <span>{{\"$ \"+(orderData?.total_remaining_amount | number :\n                                    '1.2-2')}}</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div bsModal #addmodal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-md modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n                <h2 class=\"font-weight-bold mb-4 text-primary\">Outstanding Order</h2>\n                <form class=\"d-inline-block w-100 text-left\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Payment:</label>\n                                <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Payment\">\n                            </div>\n                        </div>\n                        <div class=\"modal-footer justify-content-start flex-wrap w-100 pb-0\">\n                            <button type=\"button\" class=\"btn btn-dark mr-3\">ADD</button>\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"editmodal.hide()\">Cancel</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div bsModal #editmodal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-md modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n                <h2 class=\"font-weight-bold mb-4 text-primary\">Outstanding Order</h2>\n                <form class=\"d-inline-block w-100 text-left\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Payment:</label>\n                                <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Payment\">\n                            </div>\n                        </div>\n                        <div class=\"modal-footer justify-content-start flex-wrap w-100 pb-0\">\n                            <button type=\"button\" class=\"btn btn-dark mr-3\">Edit</button>\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"editmodal.hide()\">Cancel</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- delete modal -->\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n                <h2 class=\"font-weight-bold mb-4 text-primary\">Delete</h2>\n                <p class=\"mb-0\">Are You Sure You Want To Delete ?</p>\n            </div>\n            <div class=\"modal-footer justify-content-center\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-danger\">Delete</button>\n            </div>\n        </div><!-- /.modal-content -->\n    </div>\n</div><!-- /.modal -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/view/view.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/view/view.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <!-- <div class=\"card-header\">Customer View</div> -->\n                <div class=\"card-header d-flex justify-content-between align-items-center\">Customer View\n                    <div class=\"pull-right\">\n                        <a [routerLink]=\"['/customer-user']\"\n                            class=\"btn btn-md btn-secondary\" type=\"button\">Back</a>\n                    </div>\n                </div>\n                <div class=\"card-body pt-2 pb-2 pl-4 pr-4\">\n                    <div class=\"responsive-table user-view scan-view-table customer-view\">\n                        <table class=\"table\">\n                            <tbody>\n                                <tr>\n                                    <td><strong>Store Name:</strong></td>\n                                    <td>{{customerData?.store_name}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Customer Full Name:</strong></td>\n                                    <td>{{customerData?.full_name}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Email :</strong></td>\n                                    <td>{{customerData?.email}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Phone Number:</strong></td>\n                                    <td>{{customerData?.phone | mask: '(000) 000-0000'}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Billing address:</strong></td>\n                                    <td>{{customerData?.billing_address+\", \"+customerData?.billing_city+\", \"+customerData?.billing_state+\" \"+customerData?.billing_zipcode}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Shipping address:</strong></td>\n                                    <td>{{customerData?.shipping_address+\", \"+customerData?.shipping_city+\", \"+customerData?.shipping_state+\" \"+customerData?.shipping_zipcode}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Sales Tax ID:</strong></td>\n                                    <td>{{customerData?.sales_tax_id}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Sales Tax Document:</strong></td>\n                                    <td><a *ngIf=\"customerData?.sales_tax_image != null && customerData?.sales_tax_image != ''\" href=\"{{baseUrl + customerData?.sales_tax_image}}\" target=\"_blank\">pdfdocument</a></td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Payment Threshold :</strong></td>\n                                    <td><span>{{customerData?.min_threshold || customerData?.min_threshold == 0 ? (\"$\"+customerData?.min_threshold+\" - \") : \"-\"}}</span><span>{{customerData?.max_threshold || customerData?.max_threshold == 0 ? (\"$\"+customerData?.max_threshold) : \"-\"}}</span></td>\n                                </tr>\n                                <!-- <tr>\n                                    <td><strong>Upload Signed Terms & Condition Document :</strong></td>\n                                    <td><a href=\"{{baseUrl + customerData?.terms}}\" target=\"_blank\">pdfdocument</a></td>\n                                </tr> -->\n                            </tbody>\n                        </table>\n                        <table>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/shared/services/costumer.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/costumer.service.ts ***!
  \*****************************************************/
/*! exports provided: CostumerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostumerService", function() { return CostumerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var CostumerService = /** @class */ (function () {
    function CostumerService(http) {
        this.http = http;
    }
    CostumerService.prototype.customerlist = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/customerlist/", data);
    };
    CostumerService.prototype.createcustomer = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/createcustomer/", data);
    };
    CostumerService.prototype.customereditprofile = function (data, id) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/customereditprofile/" + id, data);
    };
    CostumerService.prototype.getCustomer = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/customer/" + id + "/");
    };
    CostumerService.prototype.deleteCustomer = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/deletecustomer/" + id + "/");
    };
    CostumerService.prototype.displayorder = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/orderdisplay/displayorder/", data);
    };
    CostumerService.prototype.userlist = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/user/salesuser/", data);
    };
    CostumerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CostumerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CostumerService);
    return CostumerService;
}());



/***/ }),

/***/ "./src/app/views/customer-user/add/add.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/customer-user/add/add.component.ts ***!
  \**********************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/costumer.service */ "./src/app/shared/services/costumer.service.ts");
/* harmony import */ var _shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/validators/Validations */ "./src/app/shared/validators/Validations.ts");








var AddComponent = /** @class */ (function () {
    function AddComponent(titleService, costumerService, toastr, router, route) {
        this.titleService = titleService;
        this.costumerService = costumerService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.checkSameBillingAddress = false;
        this.sales_tax_imageUrl = '';
        this.terms_and_conditionUrl = '';
        this.selectedSalesPerson = '';
    }
    AddComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Add Customer");
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            store_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].whitespace)
            ]),
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].whitespace)
            ]),
            phone_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].email_pattern)
            ]),
            billing_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            billing_city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            billing_state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            billing_zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            shipping_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            shipping_city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            shipping_state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            shipping_zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            sales_tax_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            //Validators.required
            ]),
            minumum_threshold: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            maximum_threshold: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            sales_tax_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            // Validators.required,
            // RxwebValidators.extension({extensions:["png","jpg","jpeg","emf","jpe","jfif","bmp","gif","wmf","dib","tif","tiff",'pdf']
            // })
            ]),
            sales_tax_image_Source: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            //Validators.required
            ]),
            terms_and_condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            // Validators.required,
            // RxwebValidators.extension({extensions:["png","jpg","jpeg","emf","jpe","jfif","bmp","gif","wmf","dib","tif","tiff",'pdf']
            // })
            ]),
            terms_and_condition_Source: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            //Validators.required
            ]),
            sales_person: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.getSalesUsers();
    };
    AddComponent.prototype.getSalesUsers = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("page", "1");
        formData.append("limit", "10000");
        this.costumerService.userlist(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.salesPersonList = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    AddComponent.prototype.onTaxImgFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            if (file) {
                this.addForm.patchValue({
                    sales_tax_image_Source: file
                });
                var reader = new FileReader();
                reader.onloadend = function (event) {
                    _this.sales_tax_imageUrl = event.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    };
    AddComponent.prototype.onTermAndConditionFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            if (file) {
                this.addForm.patchValue({
                    terms_and_condition_Source: file
                });
                var reader = new FileReader();
                reader.onloadend = function (event) {
                    _this.terms_and_conditionUrl = event.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    };
    AddComponent.prototype.submitAddForm = function () {
        var _this = this;
        this.submitted = true;
        var formData = new FormData();
        formData.append("store_name", this.addForm.controls.store_name.value);
        formData.append("fullname", this.addForm.controls.fullname.value);
        formData.append("email", this.addForm.controls.email.value);
        formData.append("phone_no", this.addForm.controls.phone_no.value);
        formData.append("billing_address", this.addForm.controls.billing_address.value);
        formData.append("billing_state", this.addForm.controls.billing_state.value);
        formData.append("billing_city", this.addForm.controls.billing_city.value);
        formData.append("billing_zipcode", this.addForm.controls.billing_zipcode.value);
        formData.append("shipping_address", this.addForm.controls.shipping_address.value);
        formData.append("shipping_city", this.addForm.controls.shipping_city.value);
        formData.append("shipping_state", this.addForm.controls.shipping_state.value);
        formData.append("shipping_zipcode", this.addForm.controls.shipping_zipcode.value);
        formData.append("sales_tax_id", this.addForm.controls.sales_tax_id.value);
        formData.append("minumum_threshold", this.addForm.controls.minumum_threshold.value);
        formData.append("maximum_threshold", this.addForm.controls.maximum_threshold.value);
        formData.append("sales_tax_image", this.addForm.get('sales_tax_image_Source').value);
        formData.append("terms_and_condition", this.addForm.get('terms_and_condition_Source').value);
        formData.append("shipping_address_same", this.checkSameBillingAddress == false ? "False" : "True");
        formData.append("sales_person", this.addForm.controls.sales_person.value);
        if (this.addForm.valid) {
            this.costumerService.createcustomer(formData).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.router.navigate(['customer-user']).then(function () {
                        _this.toastr.success('', "Customer added successfully!");
                    });
                }
                else {
                    _this.toastr.error('', resData.message);
                }
            }, function (err) {
                _this.toastr.error('', err.error.message);
            });
        }
    };
    AddComponent.prototype.changeCheckSameBillingAddress = function () {
        if (this.checkSameBillingAddress) {
            this.addForm.patchValue({
                shipping_address: this.addForm.controls.billing_address.value,
                shipping_city: this.addForm.controls.billing_city.value,
                shipping_state: this.addForm.controls.billing_state.value,
                shipping_zipcode: this.addForm.controls.billing_zipcode.value
            });
        }
        else {
            this.addForm.patchValue({
                shipping_address: "",
                shipping_city: "",
                shipping_state: "",
                shipping_zipcode: ""
            });
        }
    };
    AddComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_6__["CostumerService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/add/add.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_6__["CostumerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/views/customer-user/customer-invoice/customer-invoice.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/customer-user/customer-invoice/customer-invoice.component.ts ***!
  \************************************************************************************/
/*! exports provided: CustomerInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerInvoiceComponent", function() { return CustomerInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/costumer.service */ "./src/app/shared/services/costumer.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");











var CustomerInvoiceComponent = /** @class */ (function () {
    function CustomerInvoiceComponent(titleService, toastr, costumerService, router, route, commonService, datePipe) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.costumerService = costumerService;
        this.router = router;
        this.route = route;
        this.commonService = commonService;
        this.datePipe = datePipe;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    CustomerInvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Customer Invoice");
        this.route.queryParams.subscribe(function (param) {
            _this.customerId = param.id;
        });
        this.getOrderList();
    };
    CustomerInvoiceComponent.prototype.getOrderList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 100,
            order: [0, 'asc'],
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page = parseInt(dataTablesParameters.start) / parseInt(dataTablesParameters.length) + 1;
                dataTablesParameters.limit = dataTablesParameters.length;
                dataTablesParameters.customer_id = _this.customerId;
                //sorting
                dataTablesParameters.created_at = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("created_at") : ("-created_at");
                dataTablesParameters.invoice_no = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("invoice_no") : ("-invoice_no");
                dataTablesParameters.due_date = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("due_date") : ("-due_date");
                dataTablesParameters.amount = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("amount") : ("-amount");
                dataTablesParameters.status = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("status") : ("-status");
                dataTablesParameters.verfication_status = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("verfication_status") : ("-verfication_status");
                dataTablesParameters.amount_recieved = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("amount_recieved") : ("-amount_recieved");
                dataTablesParameters.remaining_amount = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("remaining_amount") : ("-remaining_amount");
                dataTablesParameters.payment_status = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("payment_status") : ("-payment_status");
                dataTablesParameters.salesman = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("salesman") : ("-salesman");
                dataTablesParameters.search_params = dataTablesParameters.search.value;
                // filter
                dataTablesParameters.from_date = _this.datePipe.transform(_this.selectedFromDate, "yyyy-MM-dd");
                dataTablesParameters.to_date = _this.datePipe.transform(_this.selectedToDate, "yyyy-MM-dd");
                _this.datatbaleData = dataTablesParameters;
                _this.costumerService
                    .displayorder(dataTablesParameters)
                    .subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.orderList = resData.data.allorder;
                        _this.orderData = resData.data;
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
                { data: 'created_at', searchable: true, orderable: true },
                { data: 'invoice_no', searchable: true, orderable: true },
                { data: 'due_date', searchable: true, orderable: false },
                { data: 'amount', searchable: true, orderable: false },
                { data: 'status', searchable: true, orderable: false },
                { data: 'verfication_status', searchable: true, orderable: false },
                { data: 'amount_recieved', searchable: true, orderable: true },
                { data: 'remaining_amount', searchable: true, orderable: true },
                { data: 'payment_status', searchable: true, orderable: false },
                { data: 'salesman', searchable: false, orderable: false },
            ]
        };
    };
    CustomerInvoiceComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    CustomerInvoiceComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    CustomerInvoiceComponent.prototype.saveId = function (Id) {
        this.customerId = Id;
    };
    CustomerInvoiceComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    CustomerInvoiceComponent.prototype.printPage = function () {
        window.print();
    };
    CustomerInvoiceComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.costumerService
            .displayorder(this.datatbaleData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.allorder.map(function (x) { return ({
                    'Order Date': _this.datePipe.transform(x.created_at, "yyyy-MM-dd"),
                    'Invoice No': x.invoice_no || "-",
                    'Payment Due Date': x.due_date || "-",
                    'Order Amount': x.amount || "$0",
                    'Order Status': x.status || "-",
                    'Order Verification': x.verfication_status ? "Verfied" : "Not Verfied",
                    'Order Amount Received': x.amount_recieved || "-",
                    'Open Balance': x.open_balance || "$0",
                    'Payment Status': x.payment_status,
                    'Salesman': x.salesman || "-"
                }); });
                if (type == 'pdf') {
                    if (onlyNameAndSymbolArr.length > 0) {
                        var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                        var values = onlyNameAndSymbolArr.map(function (element) { return Object.values(element); });
                        _this.commonService.exportArrayPDF(keys, values, 'customerInvoiceList');
                    }
                    else {
                        _this.toastr.error('', "No Data Found !");
                        $("#myDropdown").toggle();
                    }
                }
                else {
                    _this.commonService.exportCsv(resData.data.allorder, onlyNameAndSymbolArr, 'customerInvoiceList');
                }
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    CustomerInvoiceComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_6__["CostumerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], CustomerInvoiceComponent.prototype, "deleteModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], CustomerInvoiceComponent.prototype, "dtElement", void 0);
    CustomerInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-invoice',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customer-invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/customer-invoice/customer-invoice.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_6__["CostumerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]])
    ], CustomerInvoiceComponent);
    return CustomerInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/views/customer-user/customer-user-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/customer-user/customer-user-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CustomerUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerUserRoutingModule", function() { return CustomerUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-user.component */ "./src/app/views/customer-user/customer-user.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ "./src/app/views/customer-user/view/view.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/views/customer-user/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/views/customer-user/add/add.component.ts");
/* harmony import */ var _customer_invoice_customer_invoice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-invoice/customer-invoice.component */ "./src/app/views/customer-user/customer-invoice/customer-invoice.component.ts");
/* harmony import */ var _update_payment_received_update_payment_received_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-payment-received/update-payment-received.component */ "./src/app/views/customer-user/update-payment-received/update-payment-received.component.ts");









var routes = [
    {
        path: '',
        data: {
            title: 'Customer Users'
        },
        children: [
            {
                path: '',
                component: _customer_user_component__WEBPACK_IMPORTED_MODULE_3__["CustomerUserComponent"],
                data: {
                    title: 'List'
                }
            },
            {
                path: 'add',
                component: _add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"],
                data: {
                    title: 'Add'
                },
            },
            {
                path: 'edit',
                component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"],
                data: {
                    title: 'Edit'
                },
            },
            {
                path: 'view',
                component: _view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"],
                data: {
                    title: 'User View'
                },
            },
            {
                path: 'customer-invoice',
                component: _customer_invoice_customer_invoice_component__WEBPACK_IMPORTED_MODULE_7__["CustomerInvoiceComponent"],
                data: {
                    title: 'Customer Invoice'
                },
            },
            {
                path: 'update-payment-received',
                component: _update_payment_received_update_payment_received_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePaymentReceivedComponent"],
                data: {
                    title: 'Update Payment Received'
                }
            },
        ]
    }
];
var CustomerUserRoutingModule = /** @class */ (function () {
    function CustomerUserRoutingModule() {
    }
    CustomerUserRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CustomerUserRoutingModule);
    return CustomerUserRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/customer-user/customer-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/customer-user/customer-user.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerUserComponent", function() { return CustomerUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/costumer.service */ "./src/app/shared/services/costumer.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");










var CustomerUserComponent = /** @class */ (function () {
    function CustomerUserComponent(titleService, toastr, costumerService, commonService, datePipe) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.costumerService = costumerService;
        this.commonService = commonService;
        this.datePipe = datePipe;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    CustomerUserComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Customer User");
        this.getCustomerList();
    };
    CustomerUserComponent.prototype.getCustomerList = function () {
        var _this = this;
        this.dtOptions = {
            //pagingType: 'full_numbers',
            pageLength: 100,
            //order: [1, 'desc'],
            serverSide: true,
            searchDelay: 1000,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page = parseInt(dataTablesParameters.start) / parseInt(dataTablesParameters.length) + 1;
                dataTablesParameters.limit = dataTablesParameters.length;
                dataTablesParameters.search_param = dataTablesParameters.search.value;
                // sorting
                dataTablesParameters.order[0].column == 0 ? dataTablesParameters.store_name = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("store_name") : ("-store_name") : "";
                dataTablesParameters.order[0].column == 1 ? dataTablesParameters.full_name = (dataTablesParameters.order[0].column == 1 && dataTablesParameters.order[0].dir == "asc") ? ("full_name") : ("-full_name") : "";
                dataTablesParameters.order[0].column == 2 ? dataTablesParameters.phone = (dataTablesParameters.order[0].column == 2 && dataTablesParameters.order[0].dir == "asc") ? ("phone") : ("-phone") : "";
                dataTablesParameters.order[0].column == 3 ? dataTablesParameters.email = (dataTablesParameters.order[0].column == 3 && dataTablesParameters.order[0].dir == "asc") ? ("email") : ("-email") : "";
                // dataTablesParameters.order[0].column == 4 ? dataTablesParameters.sales_tax_id = (dataTablesParameters.order[0].column == 4 && dataTablesParameters.order[0].dir == "asc") ? ("sales_tax_id") : ("-sales_tax_id") : "";
                // dataTablesParameters.order[0].column == 5 ? dataTablesParameters.credit_balance = (dataTablesParameters.order[0].column == 5 && dataTablesParameters.order[0].dir == "asc") ? ("credit_balance") : ("-credit_balance") : "";
                dataTablesParameters.order[0].column == 4 ? dataTablesParameters.min_threshold = (dataTablesParameters.order[0].column == 4 && dataTablesParameters.order[0].dir == "asc") ? ("min_threshold") : ("-min_threshold") : "";
                // dataTablesParameters.order[0].column == 6 ? dataTablesParameters.sign_off_process = (dataTablesParameters.order[0].column == 6 && dataTablesParameters.order[0].dir == "asc") ? ("sign_off_process") : ("-sign_off_process") : "";
                dataTablesParameters.order[0].column == 5 ? dataTablesParameters.open_balance = (dataTablesParameters.order[0].column == 5 && dataTablesParameters.order[0].dir == "asc") ? ("open_balance") : ("-open_balance") : "";
                dataTablesParameters.order[0].column == 6 ? dataTablesParameters.no_of_orders_places = (dataTablesParameters.order[0].column == 6 && dataTablesParameters.order[0].dir == "asc") ? ("no_of_orders_places") : ("-no_of_orders_places") : "";
                dataTablesParameters.order[0].column == 7 ? dataTablesParameters.total_order_amount = (dataTablesParameters.order[0].column == 7 && dataTablesParameters.order[0].dir == "asc") ? ("total_order_amount") : ("-total_order_amount") : "";
                _this.datatbaleData = dataTablesParameters;
                _this.costumerService
                    .customerlist(dataTablesParameters)
                    .subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.customerList = resData.data;
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: dataTablesParameters.search_param == "" ? resData.total_record : resData.filter_record,
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
                { data: 'store_name' },
                { data: 'full_name' },
                { data: 'phone' },
                { data: 'email' },
                // { data: 'sales_tax_id' },
                // { data: 'credit_balance' },
                { data: 'min_threshold' },
                // { data: 'sign_off_process' },
                { data: 'open_balance' },
                { data: 'no_of_orders_places' },
                { data: 'total_order_amount' },
                { data: 'action', searchable: false, orderable: false }
            ]
        };
    };
    CustomerUserComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    CustomerUserComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    CustomerUserComponent.prototype.saveId = function (Id) {
        this.customerId = Id;
    };
    CustomerUserComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    CustomerUserComponent.prototype.deleteCustomer = function () {
        var _this = this;
        this.costumerService.deleteCustomer(this.customerId).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.deleteModal.hide();
                _this.toastr.success('', resData.message);
                _this.rerender();
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.mesaage);
        });
    };
    CustomerUserComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.costumerService.customerlist(this.datatbaleData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                    'Store Name': x.store_name || "-",
                    'Customer Name': x.full_name || "-",
                    'Phone Number': x.phone || "-",
                    'Email Address': x.email || "-",
                    'Sales Tax id': x.sales_tax_id || "-",
                    // 'Credit Balance': x.credit_balance || "$0",
                    'Payment threshold': "$ " + x.min_threshold + " - $ " + x.max_threshold,
                    'Sign off process': x.sign_off_process || "-",
                    'No. of  orders placed': x.all_order || "0",
                    "Open Balance": x.open_balance || "$0"
                }); });
                if (type == 'pdf') {
                    var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                    var values = onlyNameAndSymbolArr.map(function (element) { return Object.values(element); });
                    _this.commonService.exportArrayPDF(keys, values, 'customerList');
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, 'customerList');
                }
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    CustomerUserComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_6__["CostumerService"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], CustomerUserComponent.prototype, "deleteModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], CustomerUserComponent.prototype, "dtElement", void 0);
    CustomerUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customer-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/customer-user.component.html")).default,
            styles: ["\n  .anchor-tag{\n    color: #23282c;\n    text-decoration: none !important;\n}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_6__["CostumerService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]])
    ], CustomerUserComponent);
    return CustomerUserComponent;
}());



/***/ }),

/***/ "./src/app/views/customer-user/customer-user.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/customer-user/customer-user.module.ts ***!
  \*************************************************************/
/*! exports provided: CustomerUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerUserModule", function() { return CustomerUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-user.component */ "./src/app/views/customer-user/customer-user.component.ts");
/* harmony import */ var _customer_user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-user-routing.module */ "./src/app/views/customer-user/customer-user-routing.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/view.component */ "./src/app/views/customer-user/view/view.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/views/customer-user/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add/add.component */ "./src/app/views/customer-user/add/add.component.ts");
/* harmony import */ var _customer_invoice_customer_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer-invoice/customer-invoice.component */ "./src/app/views/customer-user/customer-invoice/customer-invoice.component.ts");
/* harmony import */ var _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/services/costumer.service */ "./src/app/shared/services/costumer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");
/* harmony import */ var _update_payment_received_update_payment_received_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./update-payment-received/update-payment-received.component */ "./src/app/views/customer-user/update-payment-received/update-payment-received.component.ts");
/* harmony import */ var _shared_services_payment_received_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/services/payment-received.service */ "./src/app/shared/services/payment-received.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");















var maskConfig = {
    validation: false,
};




var CustomerUserModule = /** @class */ (function () {
    function CustomerUserModule() {
    }
    CustomerUserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_customer_user_component__WEBPACK_IMPORTED_MODULE_3__["CustomerUserComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_8__["ViewComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"], _customer_invoice_customer_invoice_component__WEBPACK_IMPORTED_MODULE_11__["CustomerInvoiceComponent"], _update_payment_received_update_payment_received_component__WEBPACK_IMPORTED_MODULE_16__["UpdatePaymentReceivedComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                _customer_user_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomerUserRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_14__["NgxMaskModule"].forRoot(maskConfig),
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_15__["RxReactiveFormsModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_18__["BsDatepickerModule"].forRoot()
            ],
            providers: [
                _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_12__["CostumerService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _shared_services_payment_received_service__WEBPACK_IMPORTED_MODULE_17__["PaymentReceivedService"]
            ]
        })
    ], CustomerUserModule);
    return CustomerUserModule;
}());



/***/ }),

/***/ "./src/app/views/customer-user/edit/edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/customer-user/edit/edit.component.ts ***!
  \************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/costumer.service */ "./src/app/shared/services/costumer.service.ts");
/* harmony import */ var _shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/validators/Validations */ "./src/app/shared/validators/Validations.ts");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");









var EditComponent = /** @class */ (function () {
    function EditComponent(titleService, costumerService, toastr, router, route) {
        this.titleService = titleService;
        this.costumerService = costumerService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.checkSameBillingAddress = false;
        this.sales_tax_imageUrl = '';
        this.terms_and_conditionUrl = '';
        this.selectedSalesPerson = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Customer Edit");
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            store_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].whitespace)
            ]),
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].whitespace)
            ]),
            phone_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].email_pattern)
            ]),
            billing_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            billing_city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            billing_state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            billing_zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            shipping_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            shipping_city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            shipping_state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            shipping_zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            sales_tax_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            //Validators.required
            ]),
            minumum_threshold: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            maximum_threshold: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            sales_tax_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].extension({ extensions: ["png", "jpg", "jpeg", "emf", "jpe", "jfif", "bmp", "gif", "wmf", "dib", "tif", "tiff", 'pdf'] })
            ]),
            sales_tax_image_Source: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            terms_and_condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].extension({ extensions: ["png", "jpg", "jpeg", "emf", "jpe", "jfif", "bmp", "gif", "wmf", "dib", "tif", "tiff", 'pdf'] })
            ]),
            terms_and_condition_Source: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            sales_person: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.getSalesUsers();
        this.getCustomerInfo();
    };
    EditComponent.prototype.getSalesUsers = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("page", "1");
        formData.append("limit", "10000");
        this.costumerService.userlist(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.salesPersonList = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    EditComponent.prototype.getCustomerInfo = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (param) {
            _this.customerId = param.id;
        });
        this.costumerService.getCustomer(this.customerId).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var customerData = resData.data;
                _this.editForm.patchValue({
                    store_name: customerData.store_name,
                    fullname: customerData.full_name,
                    phone_no: customerData.phone,
                    email: customerData.email,
                    // billing_address: customerData.billing_address_full.split(",")[0],
                    // shipping_address: customerData.shipping_address_full.split(",")[0],
                    sales_tax_id: customerData.sales_tax_id,
                    minumum_threshold: customerData.min_threshold,
                    maximum_threshold: customerData.max_threshold,
                    // billing_city: customerData.billing_address_full.split(",")[1],
                    // billing_state: customerData.billing_address_full.split(",")[2],
                    // shipping_city: customerData.shipping_address_full.split(",")[1],
                    // shipping_state: customerData.shipping_address_full.split(",")[2]
                    billing_address: customerData.billing_address,
                    shipping_address: customerData.shipping_address,
                    billing_city: customerData.billing_city,
                    billing_state: customerData.billing_state,
                    shipping_city: customerData.shipping_city,
                    shipping_state: customerData.shipping_state,
                    billing_zipcode: customerData.billing_zipcode,
                    shipping_zipcode: customerData.shipping_zipcode,
                });
                _this.sales_tax_imageUrl = customerData.sales_tax_image;
                _this.terms_and_conditionUrl = customerData.terms;
                _this.checkSameBillingAddress = customerData.both_address_same;
                _this.selectedSalesPerson = customerData.sales_person || "";
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    EditComponent.prototype.onTaxImgFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            if (file) {
                this.editForm.patchValue({
                    sales_tax_image_Source: file
                });
                var reader = new FileReader();
                reader.onloadend = function (event) {
                    _this.sales_tax_imageUrl = event.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    };
    EditComponent.prototype.onTermAndConditionFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            if (file) {
                this.editForm.patchValue({
                    terms_and_condition_Source: file
                });
                var reader = new FileReader();
                reader.onloadend = function (event) {
                    _this.terms_and_conditionUrl = event.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    };
    EditComponent.prototype.submitEditForm = function () {
        var _this = this;
        this.submitted = true;
        var formData = new FormData();
        formData.append("store_name", this.editForm.controls.store_name.value);
        formData.append("full_name", this.editForm.controls.fullname.value);
        formData.append("phone", this.editForm.controls.phone_no.value);
        formData.append("email", this.editForm.controls.email.value);
        formData.append("billing_address", this.editForm.controls.billing_address.value);
        formData.append("shipping_address", this.editForm.controls.shipping_address.value);
        formData.append("sales_tax_id", this.editForm.controls.sales_tax_id.value);
        formData.append("min_threshold", this.editForm.controls.minumum_threshold.value);
        formData.append("max_threshold", this.editForm.controls.maximum_threshold.value);
        if (this.editForm.get('sales_tax_image_Source').value) {
            formData.append("sales_tax_image", this.editForm.get('sales_tax_image_Source').value);
        }
        if (this.editForm.get('terms_and_condition_Source').value) {
            formData.append("terms_and_condition", this.editForm.get('terms_and_condition_Source').value);
        }
        formData.append("shipping_address_same", this.checkSameBillingAddress == false ? "False" : "True");
        formData.append("billing_state", this.editForm.controls.billing_state.value);
        formData.append("billing_city", this.editForm.controls.billing_city.value);
        formData.append("shipping_city", this.editForm.controls.shipping_city.value);
        formData.append("shipping_state", this.editForm.controls.shipping_state.value);
        formData.append("billing_zipcode", this.editForm.controls.billing_zipcode.value);
        formData.append("shipping_zipcode", this.editForm.controls.shipping_zipcode.value);
        formData.append("sales_person", this.editForm.controls.sales_person.value);
        if (this.editForm.valid) {
            this.costumerService.customereditprofile(formData, this.customerId).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.router.navigate(['customer-user']).then(function () {
                        _this.toastr.success('', "Customer updated successfully!");
                    });
                }
                else {
                    _this.toastr.error('', resData.message);
                }
            }, function (err) {
                _this.toastr.error('', err.error.message);
            });
        }
    };
    EditComponent.prototype.changeCheckSameBillingAddress = function () {
        if (this.checkSameBillingAddress) {
            this.editForm.patchValue({
                shipping_address: this.editForm.controls.billing_address.value,
                shipping_city: this.editForm.controls.billing_city.value,
                shipping_state: this.editForm.controls.billing_state.value,
                shipping_zipcode: this.editForm.controls.billing_zipcode.value
            });
        }
        else {
            this.editForm.patchValue({
                shipping_address: "",
                shipping_city: "",
                shipping_state: "",
                shipping_zipcode: ""
            });
        }
    };
    EditComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_6__["CostumerService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/edit/edit.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_6__["CostumerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/views/customer-user/update-payment-received/update-payment-received.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/customer-user/update-payment-received/update-payment-received.component.ts ***!
  \**************************************************************************************************/
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
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update-payment-received.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/update-payment-received/update-payment-received.component.html")).default,
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



/***/ }),

/***/ "./src/app/views/customer-user/view/view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/customer-user/view/view.component.ts ***!
  \************************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/costumer.service */ "./src/app/shared/services/costumer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");







var ViewComponent = /** @class */ (function () {
    function ViewComponent(titleService, toastr, costumerService, router, route) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.costumerService = costumerService;
        this.router = router;
        this.route = route;
        this.baseUrl = '';
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Customer View");
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url;
        this.getCustomerInfo();
    };
    ViewComponent.prototype.getCustomerInfo = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (param) {
            _this.customerId = param.id;
        });
        this.costumerService.getCustomer(this.customerId).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.customerData = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    ViewComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_3__["CostumerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customer-user/view/view.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_services_costumer_service__WEBPACK_IMPORTED_MODULE_3__["CostumerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-customer-user-customer-user-module.js.map