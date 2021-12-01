(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-credit-memo-credit-memo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/credit-memo/add-credit-memo/add-credit-memo.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/credit-memo/add-credit-memo/add-credit-memo.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-6\">\n      <form class=\"card\" [formGroup]=\"addForm\" (ngSubmit)=\"submitAddForm()\" #formDir=\"ngForm\" novalidate>\n        <div class=\"card-header\">Add Credit Memo</div>\n        <div class=\"card-body p-4\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Store Name :</label>\n                <select formControlName=\"customer_id\" class=\"form-control\">\n                  <option value=\"\">Select Store Name</option>\n                  <option *ngFor=\"let item of storeList\" [value]=\"item.id\">{{item.store_name}}\n                  </option>\n                </select>\n                <div class=\"error\"\n                  *ngIf=\"(submitted && addForm.controls.customer_id.invalid) || addForm.controls.customer_id.touched\">\n                  <div *ngIf=\"addForm.hasError('required','customer_id')\" class=\"err-msg\">\n                    Store Name is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Credit Amount :</label>\n                <input formControlName=\"credit_amount\" class=\"form-control\" id=\"name\" type=\"text\"\n                  placeholder=\"Credit Amount\">\n                <div class=\"error\"\n                  *ngIf=\"(submitted && addForm.controls.credit_amount.invalid) || addForm.controls.credit_amount.touched\">\n                  <div *ngIf=\"addForm.hasError('required','credit_amount')\" class=\"err-msg\">\n                    Payment Amount is required.\n                  </div>\n                  <div\n                    *ngIf=\"!addForm.hasError('required','credit_amount') && addForm.hasError('pattern','credit_amount')\"\n                    class=\"err-msg\">\n                    Payment Amount does not allow whitespace.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Description :</label>\n                <textarea formControlName=\"description\" class=\"form-control\" name=\"textarea-input\" rows=\"4\"\n                  placeholder=\"Description\" spellcheck=\"false\"></textarea>\n                <div class=\"error\"\n                  *ngIf=\"(submitted && addForm.controls.description.invalid) || addForm.controls.description.touched\">\n                  <div *ngIf=\"!addForm.hasError('required','description') && addForm.hasError('pattern','description')\"\n                    class=\"err-msg\">\n                    Description does not allow whitespace.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row col-sm-12\">\n              <div class=\"col-sm-12 mt-2\">\n                <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Add</button>\n                <button class=\"btn btn-md btn-secondary\" type=\"button\" [routerLink]=\"['/credit-memo']\">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/credit-memo/credit-memo.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/credit-memo/credit-memo.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Credit Memo\n          <div class=\"d-flex flex-wrap justify-content-end align-items-center\">\n            <div class=\"pull-right mr-2\">\n              <button class=\"btn btn-md btn-primary\" type=\"button\" [routerLink]=\"['/credit-memo/add']\">\n                <i class=\"fa fa-plus mr-2\"></i>\n                Add Credit Memo\n              </button>\n            </div>\n            <div class=\"dropdown pull-right\">\n              <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\">\n                <i class=\"fa fa-file-export mr-2\"></i>\n                Export\n              </button>\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\"\n                  style=\"font-size: small; text-decoration: none;\">\n                  Export to XLSX\n                </a>\n                <!-- <a href=\"javascript:void(0)\"\n                        (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n                <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body p-4\">\n          <div class=\"responsive-table rounded mb-4\">\n            <form class=\"row justify-content-start align-items-center mb-4\">\n              <div class=\"col-md-3 col-sm-12\">\n                <div class=\"form-group\">\n                  <label>Credit Memo No</label>\n                  <select [(ngModel)]=\"selectedCreditMemo\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                    <option value=\"\">Select Credit Memo No</option>\n                    <option *ngFor=\"let item of creditMemoNoList\" [value]=\"item\">{{item}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-md-3 col-sm-12\">\n                <div class=\"form-group\">\n                  <label>Store Name</label>\n                  <select [(ngModel)]=\"selectedStore\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                    <option value=\"\">Select Store Name</option>\n                    <option *ngFor=\"let item of storeList\" [value]=\"item.id\">{{item.store_name}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-md-3 col-sm-12\">\n                <div class=\"form-group\">\n                  <label>Invoice No#</label>\n                  <select [(ngModel)]=\"selectedInvoice\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                    <option value=\"\">Select Invoice No#</option>\n                    <option *ngFor=\"let item of invoiceNoList\" [value]=\"item\">{{item}}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\" style=\"margin-top: 12px;\"\n                  type=\"button\">Filter</button>\n              </div>\n            </form>\n            <perfect-scrollbar>\n              <table style=\"width: 100%;\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                class=\"data row-border hover table order-table border\" id=\"excel-table\">\n                <thead>\n                  <tr>\n                    <th>Credit Memo No#</th>\n                    <th>Credit Memo Date</th>\n                    <th>Invoice No#</th>\n                    <th>Credit Amount</th>\n                    <th>Available Credit</th>\n                    <th>Credit Applied Invoice No#</th>\n                    <th>Store Name</th>\n                    <th>Description</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let creditMemoDetails of creditMemoList;let i = index;\">\n                    <td>\n                      <!-- <a class=\"text-dark\"\n                        *ngIf=\"creditMemoDetails?.credit_applied_status != 'FULLY' && creditMemoDetails?.credit_applied_status != 'PARTIALLY'\"\n                        [routerLink]=\"['/credit-memo/edit']\"\n                        [queryParams]='{id: creditMemoDetails?.id, selectedCreditMemo: selectedCreditMemo, selectedStore: selectedStore, selectedInvoice: selectedInvoice, limit: tableLimit, firstTime: true, search: searchValue}'>\n                      </a> -->\n                      <a (click)=\"printPage(creditMemoDetails?.cm_no)\" class=\"text-dark\" href=\"javascript:void(0)\">\n                        {{creditMemoDetails.cm_no || \"-\"}}\n                      </a>\n                      <!-- <span\n                        *ngIf=\"!(creditMemoDetails?.credit_applied_status != 'FULLY' && creditMemoDetails?.credit_applied_status != 'PARTIALLY')\">\n                        {{creditMemoDetails.cm_no || \"-\"}}\n                      </span> -->\n                    </td>\n                    <td style=\"width: 10px;\">\n                      {{creditMemoDetails.created_at ? (creditMemoDetails.created_at | date:'MM-dd-yyyy') : \"-\"}}\n                    </td>\n                    <td style=\"text-align: center;\">\n                      <a *ngIf=\"creditMemoDetails?.order\" class=\"text-dark mx-2\"\n                        [routerLink]=\"['/sales-management/order-invoice']\"\n                        [queryParams]='{id: creditMemoDetails?.order,customer_id: creditMemoDetails?.customer, fromProductOrder: true}'>\n                        <span class=\"anchor-tag\">\n                          {{creditMemoDetails.invoice_no || \"-\"}}\n                        </span>\n                      </a>\n                      <span class=\"anchor-tag\" *ngIf=\"!creditMemoDetails?.order\">\n                        {{creditMemoDetails.invoice_no || \"-\"}}\n                      </span>\n                    </td>\n                    <td>\n                      {{creditMemoDetails.credit_amount ? \"$\" + (creditMemoDetails.credit_amount | number:\"1.2-2\") :\n                      \"$0.00\"}}\n                    </td>\n                    <td>\n                      {{creditMemoDetails.updated_credit_amount ? \"$\" + (creditMemoDetails.updated_credit_amount |\n                      number:\"1.2-2\") :\n                      \"$0.00\"}}\n                    </td>\n                    <td>\n                      <div *ngIf=\"creditMemoDetails.credit_applied_invoice_no.length != 0\">\n                        <span *ngFor=\"let data of creditMemoDetails.credit_applied_invoice_no\">\n                          {{data.credit_applied_order__invoice_no || \"-\"}} : {{ \"$\" + (data.applied_amount |\n                          number:\"1.2-2\")}}<br>\n                        </span>\n                      </div>\n                      <span *ngIf=\"creditMemoDetails.credit_applied_invoice_no.length == 0\">\n                        -\n                      </span>\n                    </td>\n                    <td style=\"white-space: nowrap;\">\n                      {{creditMemoDetails.store_name || \"-\"}}\n                    </td>\n                    <td style=\"white-space: nowrap;\">\n                      {{creditMemoDetails.description ? creditMemoDetails.description.length < 50 ? creditMemoDetails.description :\n                        (creditMemoDetails.description | slice:0:50) + \" ...\" : \"-\" }} </td>\n                    <td>\n                      <div class=\"d-flex align-items-center justify-content-center\">\n                        <a *ngIf=\"creditMemoDetails?.credit_applied_status != 'FULLY' && creditMemoDetails?.credit_applied_status != 'PARTIALLY'\"\n                          class=\"text-dark mx-2\" [routerLink]=\"['/credit-memo/edit']\"\n                          [queryParams]='{id: creditMemoDetails?.id, selectedCreditMemo: selectedCreditMemo, selectedStore: selectedStore, selectedInvoice: selectedInvoice, limit: tableLimit, firstTime: true, search: searchValue}'>\n                          <i class=\"fa fa-pencil\"></i>\n                        </a>\n                        <a (click)=\"printPage(creditMemoDetails?.cm_no)\" class=\"text-info mx-2\"\n                          href=\"javascript:void(0)\">\n                          <i class=\"fa fa-print\"></i>\n                        </a>\n                        <a class=\"text-danger mx-2\" href=\"javascript:void(0)\"\n                          (click)=\"deleteModal.show(); creditMemoId = creditMemoDetails?.id;\">\n                          <i class=\"far fa-trash-alt\"></i>\n                        </a>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"creditMemoList?.length == 0\">\n                    <td colspan=\"7\" class=\"no-data-available\">\n                      No Data Found!\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </perfect-scrollbar>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n        <h2 class=\"font-weight-bold mb-4 text-primary\">\n          Delete\n        </h2>\n        <p class=\"mb-0\">\n          Are You Sure You Want To Delete?\n        </p>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\n          Cancel\n        </button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCreditMemo()\">\n          Delete\n        </button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/credit-memo/edit-credit-memo/edit-credit-memo.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/credit-memo/edit-credit-memo/edit-credit-memo.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-6\">\n      <form class=\"card\" [formGroup]=\"editForm\" (ngSubmit)=\"submitEditForm()\" #formDir=\"ngForm\" novalidate>\n        <div class=\"card-header\">Edit Credit Memo</div>\n        <div class=\"card-body p-4\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Store Name :</label>\n                <select formControlName=\"customer_or_store_id\" class=\"form-control\">\n                  <option value=\"\">Select Store Name</option>\n                  <option *ngFor=\"let item of storeList\" [value]=\"item.id\">\n                    {{item.store_name}}\n                  </option>\n                </select>\n                <div class=\"error\"\n                  *ngIf=\"(submitted && editForm.controls.customer_or_store_id.invalid) || editForm.controls.customer_or_store_id.touched\">\n                  <div *ngIf=\"editForm.hasError('required','customer_or_store_id')\" class=\"err-msg\">\n                    Store Name is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Credit Amount :</label>\n                <input formControlName=\"credit_amount\" class=\"form-control\" id=\"name\" type=\"text\"\n                  placeholder=\"Credit Amount\">\n                <div class=\"error\"\n                  *ngIf=\"(submitted && editForm.controls.credit_amount.invalid) || editForm.controls.credit_amount.touched\">\n                  <div *ngIf=\"editForm.hasError('required','credit_amount')\" class=\"err-msg\">\n                    Payment Amount is required.\n                  </div>\n                  <div\n                    *ngIf=\"!editForm.hasError('required','credit_amount') && editForm.hasError('pattern','credit_amount')\"\n                    class=\"err-msg\">\n                    Payment Amount does not allow whitespace.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"w-100\">Description :</label>\n                <textarea formControlName=\"description\" class=\"form-control\" name=\"textarea-input\" rows=\"4\"\n                  placeholder=\"Description\" spellcheck=\"false\"></textarea>\n                <div class=\"error\"\n                  *ngIf=\"(submitted && editForm.controls.description.invalid) || editForm.controls.description.touched\">\n                  <div\n                    *ngIf=\"!editForm.hasError('required','description') && editForm.hasError('pattern','description')\"\n                    class=\"err-msg\">\n                    Description does not allow whitespace.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row col-sm-12\">\n              <div class=\"col-sm-12 mt-2\">\n                <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Edit</button>\n                <button class=\"btn btn-md btn-secondary\" type=\"button\" [routerLink]=\"['/credit-memo']\"\n                  [queryParams]='{selectedCreditMemo: selectedCreditMemo, selectedStore: selectedStore, selectedInvoice: selectedInvoice, limit: tableLimit, firstTime: true, search: searchValue}'>Cancel</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/shared/services/credit-memo.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/credit-memo.service.ts ***!
  \********************************************************/
/*! exports provided: CreditMemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditMemoService", function() { return CreditMemoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var CreditMemoService = /** @class */ (function () {
    function CreditMemoService(http) {
        this.http = http;
    }
    CreditMemoService.prototype.createCreditMemo = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/credit_memo/", data);
    };
    CreditMemoService.prototype.creditMemoList = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/credit_memo/show_list/", data);
    };
    CreditMemoService.prototype.creditMemoDetails = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/credit_memo/details/", data);
    };
    CreditMemoService.prototype.updateCreditMemo = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/credit_memo/edit/", data);
    };
    CreditMemoService.prototype.storeList = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/store_name_list/");
    };
    CreditMemoService.prototype.creditMemoNoList = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/creditmemo_no_list/");
    };
    CreditMemoService.prototype.invoiceNoList = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/invoice_no_list/");
    };
    CreditMemoService.prototype.deleteCreditMemo = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/credit_memo/delete/", data);
    };
    CreditMemoService.prototype.getPdf = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/creditmemo_pdf_url/", data);
    };
    CreditMemoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CreditMemoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CreditMemoService);
    return CreditMemoService;
}());



/***/ }),

/***/ "./src/app/views/credit-memo/add-credit-memo/add-credit-memo.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/credit-memo/add-credit-memo/add-credit-memo.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddCreditMemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCreditMemoComponent", function() { return AddCreditMemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_credit_memo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/credit-memo.service */ "./src/app/shared/services/credit-memo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/validators/Validations */ "./src/app/shared/validators/Validations.ts");








var AddCreditMemoComponent = /** @class */ (function () {
    function AddCreditMemoComponent(titleService, creditMemoService, toastr, router, route) {
        this.titleService = titleService;
        this.creditMemoService = creditMemoService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    AddCreditMemoComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Add Credit Memo");
        this.getStoreData();
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            credit_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].whitespace)
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].whitespace)
            ]),
            customer_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    };
    AddCreditMemoComponent.prototype.getStoreData = function () {
        var _this = this;
        this.creditMemoService.storeList().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.storeList = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    AddCreditMemoComponent.prototype.submitAddForm = function () {
        var _this = this;
        this.submitted = true;
        if (this.addForm.valid) {
            this.creditMemoService.createCreditMemo(this.addForm.value).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.router.navigate(['credit-memo']).then(function () {
                        _this.toastr.success('', "Credit Memo added successfully!");
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
    AddCreditMemoComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _shared_services_credit_memo_service__WEBPACK_IMPORTED_MODULE_1__["CreditMemoService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddCreditMemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-credit-memo',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-credit-memo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/credit-memo/add-credit-memo/add-credit-memo.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _shared_services_credit_memo_service__WEBPACK_IMPORTED_MODULE_1__["CreditMemoService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddCreditMemoComponent);
    return AddCreditMemoComponent;
}());



/***/ }),

/***/ "./src/app/views/credit-memo/credit-memo-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/credit-memo/credit-memo-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CreditMemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditMemoRoutingModule", function() { return CreditMemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _edit_credit_memo_edit_credit_memo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-credit-memo/edit-credit-memo.component */ "./src/app/views/credit-memo/edit-credit-memo/edit-credit-memo.component.ts");
/* harmony import */ var _add_credit_memo_add_credit_memo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-credit-memo/add-credit-memo.component */ "./src/app/views/credit-memo/add-credit-memo/add-credit-memo.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _credit_memo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credit-memo.component */ "./src/app/views/credit-memo/credit-memo.component.ts");






var routes = [
    {
        path: '',
        data: {
            title: 'Credit Memo'
        },
        children: [
            {
                path: '',
                component: _credit_memo_component__WEBPACK_IMPORTED_MODULE_5__["CreditMemoComponent"],
                data: {
                    title: 'List'
                }
            },
            {
                path: 'add',
                component: _add_credit_memo_add_credit_memo_component__WEBPACK_IMPORTED_MODULE_2__["AddCreditMemoComponent"],
                data: {
                    title: 'Add'
                }
            },
            {
                path: 'edit',
                component: _edit_credit_memo_edit_credit_memo_component__WEBPACK_IMPORTED_MODULE_1__["EditCreditMemoComponent"],
                data: {
                    title: 'Edit'
                }
            }
        ]
    }
];
var CreditMemoRoutingModule = /** @class */ (function () {
    function CreditMemoRoutingModule() {
    }
    CreditMemoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], CreditMemoRoutingModule);
    return CreditMemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/credit-memo/credit-memo.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/credit-memo/credit-memo.component.ts ***!
  \************************************************************/
/*! exports provided: CreditMemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditMemoComponent", function() { return CreditMemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_credit_memo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/credit-memo.service */ "./src/app/shared/services/credit-memo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var ng_thermal_print__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-thermal-print */ "./node_modules/ng-thermal-print/fesm2015/ng-thermal-print.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var CreditMemoComponent = /** @class */ (function () {
    function CreditMemoComponent(titleService, toastr, creditMemoService, commonService, route, printService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.creditMemoService = creditMemoService;
        this.commonService = commonService;
        this.route = route;
        this.printService = printService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.selectedStore = '';
        this.selectedCreditMemo = '';
        this.selectedInvoice = '';
        this.searchValue = '';
        this.firstTime = false;
        this.firstTimeSearch = false;
    }
    CreditMemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Credit Memo");
        this.route.queryParams.subscribe(function (param) {
            _this.selectedStore = param.selectedStore || "";
            _this.selectedCreditMemo = param.selectedCreditMemo || "";
            _this.selectedInvoice = param.selectedInvoice || "";
            _this.tableLimit = param.limit;
            _this.firstTime = param.firstTime || false;
            _this.firstTimeSearch = param.firstTime || false;
            _this.searchValue = param.search || "";
        });
        this.getCreditMemoList();
        this.getStoreData();
        this.getCreditMemoNoList();
        this.getInvoiceNoList();
    };
    CreditMemoComponent.prototype.getCreditMemoList = function () {
        var _this = this;
        this.dtOptions = {
            pageLength: 100,
            order: [1, 'desc'],
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page = parseInt(dataTablesParameters.start) / parseInt(dataTablesParameters.length) + 1;
                dataTablesParameters.limit = dataTablesParameters.length;
                (dataTablesParameters.draw == 1 && _this.firstTime) ? ((dataTablesParameters.limit = Number(_this.tableLimit))) : "";
                (dataTablesParameters.draw == 1 && _this.firstTime) ? ((dataTablesParameters.length = Number(_this.tableLimit))) : "";
                dataTablesParameters.search_params = dataTablesParameters.search.value;
                dataTablesParameters.store_name_id = _this.selectedStore;
                dataTablesParameters.cm_no = _this.selectedCreditMemo;
                dataTablesParameters.invoice_no = _this.selectedInvoice;
                if (!_this.firstTime) {
                    dataTablesParameters.search_params = dataTablesParameters.search.value;
                    _this.searchValue = dataTablesParameters.search.value;
                }
                else if (_this.firstTime) {
                    dataTablesParameters.search_params = _this.searchValue;
                    $('.dataTables_filter input').val(_this.searchValue);
                    _this.firstTime = false;
                }
                _this.tableLimit = dataTablesParameters.limit;
                $('.dataTables_wrapper .dataTables_length label select').val(_this.tableLimit);
                // sorting
                dataTablesParameters.order[0].column == 0 ? dataTablesParameters.sort_field = "cm_no" : "";
                dataTablesParameters.order[0].column == 1 ? dataTablesParameters.sort_field = "created_at" : "";
                dataTablesParameters.order[0].column == 2 ? dataTablesParameters.sort_field = "invoice_no" : "";
                dataTablesParameters.order[0].column == 3 ? dataTablesParameters.sort_field = "credit_amount" : "";
                // dataTablesParameters.order[0].column == 4 ? dataTablesParameters.sort_field = "credit_applied_invoice_no" : "";
                dataTablesParameters.order[0].column == 5 ? dataTablesParameters.sort_field = "updated_credit_amount" : "";
                dataTablesParameters.order[0].column == 6 ? dataTablesParameters.sort_field = "store_name" : "";
                dataTablesParameters.sort_type = dataTablesParameters.order[0].dir;
                _this.datatableData = dataTablesParameters;
                _this.creditMemoService.creditMemoList(dataTablesParameters).subscribe(function (response) {
                    var resData = JSON.parse(JSON.stringify(response));
                    if (resData.status_code == 200) {
                        _this.creditMemoList = resData.data;
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
                { data: 'cm_no' },
                { data: 'created_at' },
                { data: 'invoice_no' },
                { data: 'credit_amount' },
                { data: 'updated_credit_amount' },
                { data: 'credit_applied_invoice_no', searchable: false, orderable: false },
                { data: 'store_name' },
                { data: 'description', searchable: true, orderable: false },
                { name: 'action', searchable: false, orderable: false }
            ]
        };
    };
    CreditMemoComponent.prototype.getStoreData = function () {
        var _this = this;
        this.creditMemoService.storeList().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.storeList = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    CreditMemoComponent.prototype.getCreditMemoNoList = function () {
        var _this = this;
        this.creditMemoService.creditMemoNoList().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.creditMemoNoList = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    CreditMemoComponent.prototype.getInvoiceNoList = function () {
        var _this = this;
        this.creditMemoService.invoiceNoList().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.invoiceNoList = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    CreditMemoComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    CreditMemoComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    CreditMemoComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    CreditMemoComponent.prototype.deleteCreditMemo = function () {
        var _this = this;
        this.creditMemoService.deleteCreditMemo({ creditmemo_id: this.creditMemoId }).subscribe(function (response) {
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
    CreditMemoComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatableData.page = "1";
        this.datatableData.limit = "100000";
        this.creditMemoService.creditMemoList(this.datatableData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                    'Credit Memo No#': x.cm_no || "-",
                    'Credit Memo Date': x.created_at || "-",
                    'Invoice No#': x.invoice_no || "-",
                    'Credit Amount': x.credit_amount ? "$" + parseFloat(x.credit_amount).toFixed(2) : '$0.00',
                    'Updated Credit Amount': x.updated_credit_amount ? "$" + parseFloat(x.updated_credit_amount).toFixed(2) : '$0.00',
                    'Credit Applied Invoice No#': ((x.credit_applied_invoice_no.map(function (y) { return (y.credit_applied_order__invoice_no ? y.credit_applied_order__invoice_no : '-') + " : " + ("$" + parseFloat(y.applied_amount).toFixed(2)); })).toString()).replace(",", ", "),
                    'Store Name': x.store_name || "-",
                    'Description': x.description || "-"
                }); });
                if (type == 'pdf') {
                    var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                    var values = onlyNameAndSymbolArr.map(function (element) { return Object.values(element); });
                    _this.commonService.exportArrayPDF(keys, values, 'creditMemoList');
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, 'creditMemoList');
                }
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    CreditMemoComponent.prototype.printPage = function (cm_no) {
        var _this = this;
        this.printService.isConnected.subscribe(function (result) { });
        var formData = new FormData();
        formData.append("cm_no", cm_no);
        this.creditMemoService.getPdf(formData).subscribe(function (response) {
            // (resultBlob: Blob) => {
            // const newBlob = new Blob([(resultBlob)], { type: 'application/pdf' });
            // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            //   window.navigator.msSaveOrOpenBlob(newBlob);
            //   return;
            // }
            // const downloadURL = URL.createObjectURL(newBlob);
            window.open(response.data.pdf_url);
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
        // print pdf
        //printJS({printable:'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf', type:'pdf', showModal:false})
    };
    CreditMemoComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _shared_services_credit_memo_service__WEBPACK_IMPORTED_MODULE_1__["CreditMemoService"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: ng_thermal_print__WEBPACK_IMPORTED_MODULE_9__["PrintService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('deleteModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], CreditMemoComponent.prototype, "deleteModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], CreditMemoComponent.prototype, "dtElement", void 0);
    CreditMemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-credit-memo',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./credit-memo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/credit-memo/credit-memo.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _shared_services_credit_memo_service__WEBPACK_IMPORTED_MODULE_1__["CreditMemoService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            ng_thermal_print__WEBPACK_IMPORTED_MODULE_9__["PrintService"]])
    ], CreditMemoComponent);
    return CreditMemoComponent;
}());



/***/ }),

/***/ "./src/app/views/credit-memo/credit-memo.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/credit-memo/credit-memo.module.ts ***!
  \*********************************************************/
/*! exports provided: CreditMemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditMemoModule", function() { return CreditMemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _edit_credit_memo_edit_credit_memo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-credit-memo/edit-credit-memo.component */ "./src/app/views/credit-memo/edit-credit-memo/edit-credit-memo.component.ts");
/* harmony import */ var _add_credit_memo_add_credit_memo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-credit-memo/add-credit-memo.component */ "./src/app/views/credit-memo/add-credit-memo/add-credit-memo.component.ts");
/* harmony import */ var _credit_memo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credit-memo-routing.module */ "./src/app/views/credit-memo/credit-memo-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _credit_memo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credit-memo.component */ "./src/app/views/credit-memo/credit-memo.component.ts");
/* harmony import */ var _shared_services_credit_memo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/credit-memo.service */ "./src/app/shared/services/credit-memo.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");












var CreditMemoModule = /** @class */ (function () {
    function CreditMemoModule() {
    }
    CreditMemoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _credit_memo_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreditMemoRoutingModule"]
            ],
            providers: [
                _shared_services_credit_memo_service__WEBPACK_IMPORTED_MODULE_7__["CreditMemoService"]
            ],
            declarations: [
                _credit_memo_component__WEBPACK_IMPORTED_MODULE_6__["CreditMemoComponent"],
                _add_credit_memo_add_credit_memo_component__WEBPACK_IMPORTED_MODULE_2__["AddCreditMemoComponent"],
                _edit_credit_memo_edit_credit_memo_component__WEBPACK_IMPORTED_MODULE_1__["EditCreditMemoComponent"]
            ]
        })
    ], CreditMemoModule);
    return CreditMemoModule;
}());



/***/ }),

/***/ "./src/app/views/credit-memo/edit-credit-memo/edit-credit-memo.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/credit-memo/edit-credit-memo/edit-credit-memo.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditCreditMemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCreditMemoComponent", function() { return EditCreditMemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_credit_memo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/credit-memo.service */ "./src/app/shared/services/credit-memo.service.ts");
/* harmony import */ var _shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/validators/Validations */ "./src/app/shared/validators/Validations.ts");








var EditCreditMemoComponent = /** @class */ (function () {
    function EditCreditMemoComponent(titleService, creditMemoService, toastr, router, route) {
        this.titleService = titleService;
        this.creditMemoService = creditMemoService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.isManual = false;
        this.submitted = false;
        this.tableLimit = 10;
        this.firstTime = false;
        this.searchValue = "";
    }
    EditCreditMemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Edit Credit Memo");
        this.route.queryParams.subscribe(function (param) {
            _this.id = param.id;
            _this.selectedCreditMemo = param.selectedCreditMemo;
            _this.selectedStore = param.selectedStore;
            _this.selectedInvoice = param.selectedInvoice;
            _this.tableLimit = param.limit;
            _this.firstTime = param.firstTime;
            _this.searchValue = param.search;
        });
        this.getStoreData();
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            // id: new FormControl(''),
            cm_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            credit_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].whitespace)
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].whitespace)
            ]),
            customer_or_store_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.creditMemoService.creditMemoDetails({ cm_id: this.id }).subscribe(function (response) {
            _this.editForm.patchValue({
                cm_no: response.data.cm_no,
                credit_amount: response.data.credit_amount,
                description: response.data.description,
                customer_or_store_id: response.data.customer
            });
            if (response.data.invoice_no != "") {
                _this.editForm.controls['credit_amount'].disable();
                _this.editForm.controls['customer_or_store_id'].disable();
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    EditCreditMemoComponent.prototype.getStoreData = function () {
        var _this = this;
        this.creditMemoService.storeList().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.storeList = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    EditCreditMemoComponent.prototype.submitEditForm = function () {
        var _this = this;
        this.submitted = true;
        if (this.editForm.valid) {
            this.creditMemoService.updateCreditMemo(this.editForm.value).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.router.navigate(['credit-memo'], { queryParams: { selectedCreditMemo: _this.selectedCreditMemo, selectedStore: _this.selectedStore, selectedInvoice: _this.selectedInvoice, limit: _this.tableLimit, firstTime: true, search: _this.searchValue } }).then(function () {
                        _this.toastr.success('', "Credit Memo Edited Successfully!");
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
    EditCreditMemoComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _shared_services_credit_memo_service__WEBPACK_IMPORTED_MODULE_6__["CreditMemoService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    EditCreditMemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-credit-memo',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-credit-memo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/credit-memo/edit-credit-memo/edit-credit-memo.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _shared_services_credit_memo_service__WEBPACK_IMPORTED_MODULE_6__["CreditMemoService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditCreditMemoComponent);
    return EditCreditMemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-credit-memo-credit-memo-module.js.map