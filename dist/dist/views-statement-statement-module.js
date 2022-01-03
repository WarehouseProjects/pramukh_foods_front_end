(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-statement-statement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/statement/statement.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/statement/statement.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Statement\n          <div class=\"pull-right\" *ngIf=\"selectedStore != ''\">\n            <a (click)=\"exportToPDF()\" class=\"btn btn-primary text-light\" type=\"button\">Export</a>\n          </div>\n          <!-- <div class=\"dropdown pull-right\" *ngIf=\"selectedStore != ''\">\n            <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\">\n              <i class=\"fa fa-file-export mr-2\"></i>\n              Export\n            </button>\n            <div id=\"myDropdown\" class=\"dropdown-content\"> -->\n          <!-- <a href=\"javascript:void(0)\" (click)=\"exportDynamic()\" style=\"font-size: small; text-decoration: none;\">\n                Export to XLSX\n              </a> -->\n          <!-- <a href=\"javascript:void(0)\"\n                              (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n          <!-- <a href=\"javascript:void(0)\" (click)=\"exportToPDF()\"\n                style=\"font-size: small; text-decoration: none;\">Export to PDF</a>\n            </div>\n          </div> -->\n        </div>\n        <div class=\"card-body p-4\">\n          <form class=\"row justify-content-start align-items-center mb-1\">\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>From Date</label>\n                <input type=\"text\" placeholder=\"From Date\" class=\"form-control\" [(ngModel)]=\"selectedFromDate\"\n                  [ngModelOptions]=\"{standalone: true}\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>To Date</label>\n                <input type=\"text\" placeholder=\"To Date\" class=\"form-control\" [(ngModel)]=\"selectedToDate\"\n                  [ngModelOptions]=\"{standalone: true}\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n                <!-- [bsConfig]=\"{minMode: 'year', dateInputFormat: 'YYYY'}\" -->\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label>Store Name</label>\n                <select class=\"form-control\" [(ngModel)]=\"selectedStore\" [ngModelOptions]=\"{standalone: true}\"\n                  (ngModelChange)=\"rerender()\">\n                  <option value=\"\">Select Store Name</option>\n                  <option *ngFor=\"let item of storeList\" [value]=\"item.id\">\n                    {{item.store_name}}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-sm-12 pt-3\">\n              <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\" type=\"button\">Filter</button>\n            </div>\n          </form>\n          <!-- <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n                      <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                          type=\"button\"><i class=\"fa fa-file-export mr-2\n                      \"></i>Export</button>\n                      <div id=\"myDropdown\" class=\"dropdown-content\">\n                          <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a>\n                          <a href=\"javascript:void(0)\" (click)=\"exportDynamic()\">Export to XLSX</a>\n                          <a href=\"javascript:void(0)\" (click)=\"commonService.exportPDF(false, 0, 'agingReportList')\">Export to PDF</a>\n                          <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a>\n                      </div>\n                  </div> -->\n          <!-- <perfect-scrollbar> -->\n          <div class=\"responsive-table rounded mb-4\">\n            <table style=\"width: 100%;\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n              class=\"data row-border hover table order-table border\" id=\"excel-table\">\n              <thead>\n                <tr>\n                  <th style=\"width: 15%;\">Transaction Date</th>\n                  <th style=\"width: 55%;\">Transaction</th>\n                  <th style=\"width: 15%;\">Amount</th>\n                  <th style=\"width: 15%;\" id=\"last-header\">Balance</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"statementList?.length != 0 && selectedStore != ''\">\n                <tr *ngFor=\"let statement of statementList;let i = index;\">\n                  <td>\n                    {{statement.transaction_date ? (statement.transaction_date | date: 'MM-dd-yyyy') : \"-\"}}\n                  </td>\n                  <td style=\"white-space: nowrap;\">\n                    {{statement.transaction_data}}\n                  </td>\n                  <td>\n                    {{statement.amount ? \"$\" + (statement.amount.substring(1)*1 | number : '1.2-2') : \"$0.00\"}}\n                  </td>\n                  <td>\n                    {{statement.balance ? \"$\" + (statement.balance.substring(1)*1 | number : '1.2-2') : \"$0.00\"}}\n                  </td>\n                </tr>\n              </tbody>\n              <tbody *ngIf=\"statementList?.length == 0 && selectedStore != ''\">\n                <tr>\n                  <td colspan=\"4\" class=\"no-data-available\">No Data Found !</td>\n                </tr>\n              </tbody>\n              <tbody *ngIf=\"statementList?.length == 0 && selectedStore == ''\">\n                <tr>\n                  <td colspan=\"4\" class=\"no-data-available\">Please Select Store !</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <!-- </perfect-scrollbar> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/shared/services/statement.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/statement.service.ts ***!
  \******************************************************/
/*! exports provided: StatementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementService", function() { return StatementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var StatementService = /** @class */ (function () {
    function StatementService(http) {
        this.http = http;
    }
    StatementService.prototype.customerStatment = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/customer_statement/list_view/", data);
    };
    StatementService.prototype.storelist = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/store_name_list/");
    };
    StatementService.prototype.getPdf = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/customer_statement/get_pdf/", data);
    };
    StatementService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    StatementService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StatementService);
    return StatementService;
}());



/***/ }),

/***/ "./src/app/views/statement/statement-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/statement/statement-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: StatementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementRoutingModule", function() { return StatementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _statement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statement.component */ "./src/app/views/statement/statement.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        data: {
            title: 'Statement'
        },
        children: [
            {
                path: '',
                component: _statement_component__WEBPACK_IMPORTED_MODULE_1__["StatementComponent"],
                data: {
                    title: 'List'
                }
            },
        ]
    }
];
var StatementRoutingModule = /** @class */ (function () {
    function StatementRoutingModule() {
    }
    StatementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], StatementRoutingModule);
    return StatementRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/statement/statement.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/statement/statement.component.ts ***!
  \********************************************************/
/*! exports provided: StatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementComponent", function() { return StatementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_services_statement_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/statement.service */ "./src/app/shared/services/statement.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);











var StatementComponent = /** @class */ (function () {
    function StatementComponent(titleService, toastr, statementService, datePipe, commonService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.statementService = statementService;
        this.datePipe = datePipe;
        this.commonService = commonService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.selectedFromDate = new Date(new Date().getFullYear(), 0, 1);
        this.selectedToDate = new Date();
        this.selectedStore = "";
        this.header = [
            "Customer Name",
            "Model Name",
            "Remaining Amount",
            "Transaction Data",
            "Transaction Data",
        ];
    }
    StatementComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Statement");
        this.getStatementList();
        this.getStoreData();
    };
    StatementComponent.prototype.getStatementList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 100,
            serverSide: true,
            processing: true,
            searchDelay: 1300,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page =
                    parseInt(dataTablesParameters.start) /
                        parseInt(dataTablesParameters.length) +
                        1;
                dataTablesParameters.limit = dataTablesParameters.length;
                dataTablesParameters.search_param = dataTablesParameters.search.value;
                // sorting
                dataTablesParameters.order[0].column == 0
                    ? (dataTablesParameters.sort_field = "transaction_date")
                    : "";
                dataTablesParameters.order[0].column == 1
                    ? (dataTablesParameters.sort_field = "transaction_data")
                    : "";
                dataTablesParameters.order[0].column == 2
                    ? (dataTablesParameters.sort_field = "amount")
                    : "";
                dataTablesParameters.order[0].column == 3
                    ? (dataTablesParameters.sort_field = "balance")
                    : "";
                // filter
                dataTablesParameters.from_date = _this.datePipe.transform(_this.selectedFromDate, "yyyy-MM-dd");
                dataTablesParameters.to_date = _this.datePipe.transform(_this.selectedToDate, "yyyy-MM-dd");
                dataTablesParameters.customer = _this.selectedStore;
                dataTablesParameters.sort_type = dataTablesParameters.order[0].dir;
                _this.datatableData = dataTablesParameters;
                _this.statementService.customerStatment(dataTablesParameters).subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200 && _this.selectedStore != "") {
                        _this.statementList = resData.data;
                        _this.totalRemainingAmount = 0;
                        for (var i = 0; i < _this.statementList.length; i++) {
                            _this.totalRemainingAmount =
                                _this.totalRemainingAmount + _this.statementList[i].balance;
                        }
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: dataTablesParameters.search_param == ""
                                ? resData.total_record
                                : resData.filter_record,
                            data: [],
                        });
                    }
                    else if (resData.status_code == 200 && _this.selectedStore == "") {
                        _this.statementList = [];
                        callback({
                            recordsTotal: 0,
                            recordsFiltered: 0,
                            data: [],
                        });
                        var elm = document.querySelector(".dataTables_empty");
                        elm.style.display = "none";
                    }
                    else {
                        _this.toastr.error("", resData.message);
                    }
                }, function (err) {
                    _this.toastr.error("", err.error.message);
                });
            },
            columns: [
                { data: "transaction_date", orderable: false },
                { data: "transaction_data", orderable: false },
                { data: "amount", orderable: false },
                { data: "balance", orderable: false },
            ],
        };
    };
    StatementComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    StatementComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    StatementComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    StatementComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatableData.page = "1";
        this.datatableData.limit = "100000";
        this.statementService.customerStatment(this.datatableData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                    "Store Name": x.store_name || "-",
                    "Transaction Date": x.transaction_date
                        ? _this.datePipe.transform(x.transaction_date, "MM-dd-yyyy")
                        : "-",
                    Transaction: x.transaction_data || "-",
                    Amount: x.amount || "$ 0.00",
                    Balance: x.balance || "$ 0.00",
                }); });
                if (type == "pdf") {
                    var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                    var values = onlyNameAndSymbolArr.map(function (element) {
                        return Object.values(element);
                    });
                    _this.commonService.exportArrayPDF(keys, values, "statementList");
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, "statementList");
                }
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    StatementComponent.prototype.exportDynamic = function () {
        var _this = this;
        this.statementService.customerStatment(this.datatableData).subscribe(function (response) {
            var _a, _b;
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                if (((_b = (_a = resData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                    _this.toastr.error("", "No Data Found !");
                }
                else {
                    var data = resData.data;
                    var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_5__["Workbook"]();
                    var worksheet_1 = workbook.addWorksheet("statementList", {
                        pageSetup: { paperSize: 9, orientation: "landscape" },
                    });
                    worksheet_1.getCell("A1:E1").value = "Krishiv Foods";
                    worksheet_1.getCell("A2:E2").value = "Statements";
                    if (_this.datatableData.from_year == _this.datatableData.to_year) {
                        worksheet_1.getCell("A3:E3").value = _this.datatableData.from_year;
                    }
                    else {
                        worksheet_1.getCell("A3:E3").value =
                            _this.datatableData.from_year + "-" + _this.datatableData.to_year;
                    }
                    // Set font, size and style in title row.
                    worksheet_1.getCell("A1:E1").font = {
                        name: "Arial",
                        family: 4,
                        size: 14,
                        bold: true,
                    };
                    worksheet_1.getCell("A2:E2").font = {
                        name: "Arial",
                        family: 4,
                        size: 16,
                        bold: true,
                    };
                    worksheet_1.getCell("A3:E3").font = {
                        name: "Arial",
                        family: 4,
                        size: 14,
                        bold: true,
                    };
                    worksheet_1.getCell("A1:E1").alignment = {
                        vertical: "middle",
                        horizontal: "center",
                    };
                    worksheet_1.getCell("A2:E2").alignment = {
                        vertical: "middle",
                        horizontal: "center",
                    };
                    worksheet_1.getCell("A3:E3").alignment = {
                        vertical: "middle",
                        horizontal: "center",
                    };
                    worksheet_1.mergeCells("A1:E1");
                    worksheet_1.mergeCells("A2:E2");
                    worksheet_1.mergeCells("A3:E3");
                    // worksheet.getCell("A1").value = this.datePipe.transform(new Date(), "h:mm a");
                    // worksheet.getCell("A2").value = this.datePipe.transform(new Date(), "MM-dd-yyyy");
                    //Add Header Row
                    var headerRow = worksheet_1.addRow(_this.header);
                    // Cell Style : Fill and Border
                    headerRow.eachCell(function (cell, number) {
                        cell.border = {
                            top: { style: "thin" },
                            left: { style: "thin" },
                            bottom: { style: "thin" },
                            right: { style: "thin" },
                        };
                        cell.font = { name: "Arial", bold: true };
                        // cell.alignment = {
                        //   vertical: 'middle',
                        //   horizontal: 'center'
                        // }
                    });
                    data.forEach(function (e) {
                        e = {
                            customer_name: e.customer_name,
                            model_name: e.model_name,
                            balance: e.balance ? "$ " + e.balance : "$ 0.00",
                            transaction_data: e.transaction_data,
                            transaction_date: e.transaction_date,
                        };
                        // let firstHead = worksheet.addRow([e.customer_name]).number;
                        // worksheet.mergeCells('A' + firstHead + ":" + "H" + firstHead);
                        // worksheet.getCell('A' + firstHead + ":" + "H" + firstHead).fill = {
                        //   type: 'pattern',
                        //   pattern: 'solid',
                        //   fgColor: { argb: 'CCCCCF' },
                        //   bgColor: { argb: 'CCCCCF' },
                        // }
                        // worksheet.getCell('A' + firstHead + ":" + "H" + firstHead).font = {
                        //   name: 'Arial', bold: true
                        // }
                        var new_array = Object.values(e);
                        worksheet_1.addRow(new_array);
                        // Model Name", "Remaining Amount", "Transaction Data", "Transaction Data"]
                        // e.map(element => Object.values(element)).forEach(e => {
                        //   var new_array = e.slice(1);
                        //   new_array = new_array.slice(2);
                        //   new_array = new_array.slice(3);
                        //   new_array = new_array.slice(4);
                        //   new_array[4] = this.datePipe.transform(new_array[4], "yyyy")
                        //   // let sum = new_array.reduce(add, 0); // with initial value to avoid when the array is empty
                        //   // function add(a, b) {
                        //   //   return a + b;
                        //   // }
                        //   // element['total'] = sum;
                        //   //new_array[7] = Number(parseFloat(new_array[7]).toFixed(2));
                        //   worksheet.addRow(new_array);
                        // })
                        // let secondHead = worksheet.addRow(["Total: " + e.customer_name, e.total]).number;
                        // worksheet.mergeCells('A' + secondHead + ":" + "G" + secondHead);
                        // worksheet.getCell('A' + secondHead + ":" + "G" + secondHead).fill = {
                        //   type: 'pattern',
                        //   pattern: 'solid',
                        //   fgColor: { argb: 'DCDCF5' },
                        //   bgColor: { argb: 'DCDCF5' },
                        // }
                        // worksheet.getCell("H" + (secondHead - 1)).font = {
                        //   underline: true
                        // }
                        // // worksheet.getCell("H" + secondHead).value = Number(parseFloat(e.total_of_open_balance).toFixed(2));
                        // worksheet.getCell("H" + secondHead).value = e.total_of_open_balance;
                        // worksheet.getCell("H" + secondHead).fill = {
                        //   type: 'pattern',
                        //   pattern: 'solid',
                        //   fgColor: { argb: 'DCDCF5' },
                        //   bgColor: { argb: 'DCDCF5' },
                        // }
                        // const sum = data.reduce(add, 0); // with initial value to avoid when the array is empty
                        // function add(a, b) {
                        //   return a + b;
                        // }
                        // data['total'] = sum;
                    });
                    worksheet_1.columns.forEach(function (d) {
                        d.width = 20;
                        d.alignment = { vertical: "middle", horizontal: "center" };
                    });
                    // let thirdHead = worksheet.addRow(["TOTAL", this.totalRemainingAmount]).number;
                    // worksheet.mergeCells('A' + thirdHead + ":" + "E" + thirdHead);
                    // worksheet.getCell('A' + thirdHead + ":" + "E" + thirdHead).fill = {
                    //   type: 'pattern',
                    //   pattern: 'solid',
                    //   fgColor: { argb: 'CFCFDF' },
                    //   bgColor: { argb: 'CFCFDF' },
                    // }
                    // worksheet.getCell('A' + thirdHead + ":" + "E" + thirdHead).font = { bold: true };
                    // // worksheet.getCell('A' + thirdHead + ":" + "E" + thirdHead).alignment = { vertical: 'middle', horizontal: 'left' };
                    // // worksheet.getCell("H" + thirdHead).value = Number((parseFloat(summary_data?.main_total).toFixed(2)));
                    // worksheet.getCell("E" + thirdHead).value = "$" + parseFloat(this.totalRemainingAmount).toFixed(2);;
                    // worksheet.getCell("E" + thirdHead).fill = {
                    //   type: 'pattern',
                    //   pattern: 'solid',
                    //   fgColor: { argb: 'CFCFDF' },
                    //   bgColor: { argb: 'CFCFDF' },
                    // }
                    // worksheet.getCell("E" + thirdHead).font = { bold: true };
                    // for (let index = 6; index <= thirdHead - 2; index++) {
                    //   worksheet.getCell("G" + index).alignment = {
                    //     vertical: 'middle',
                    //     horizontal: 'left'
                    //   }
                    // }
                    workbook.xlsx.writeBuffer().then(function (data) {
                        var blob = new Blob([data], {
                            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        });
                        file_saver__WEBPACK_IMPORTED_MODULE_10__["saveAs"](blob, "statementList.xlsx");
                    });
                    _this.myFunction();
                }
            }
            else {
                _this.toastr.error("", resData.message);
                _this.myFunction();
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
            _this.myFunction();
        });
    };
    StatementComponent.prototype.myFunction = function () {
        $("#myDropdown").toggle();
    };
    StatementComponent.prototype.getStoreData = function () {
        var _this = this;
        this.statementService.storelist().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.storeList = resData.data;
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    StatementComponent.prototype.exportToPDF = function () {
        var _this = this;
        if (this.statementList.length != 0) {
            var formData = new FormData();
            formData.append("customer", this.selectedStore);
            formData.append("from_date", this.datePipe.transform(this.selectedFromDate, "yyyy-MM-dd"));
            formData.append("to_date", this.datePipe.transform(this.selectedToDate, "yyyy-MM-dd"));
            this.statementService.getPdf(formData).subscribe(function (response) {
                if (response.status_code == 200) {
                    window.open(response.pdf_url);
                }
                else {
                    _this.toastr.error("", response.message);
                }
            }, function (err) {
                _this.toastr.error("", err.error.message);
            });
        }
        else {
            this.toastr.error("", "No data available for export");
        }
    };
    StatementComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _shared_services_statement_service__WEBPACK_IMPORTED_MODULE_9__["StatementService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], StatementComponent.prototype, "dtElement", void 0);
    StatementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-statement",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./statement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/statement/statement.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _shared_services_statement_service__WEBPACK_IMPORTED_MODULE_9__["StatementService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
    ], StatementComponent);
    return StatementComponent;
}());



/***/ }),

/***/ "./src/app/views/statement/statement.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/statement/statement.module.ts ***!
  \*****************************************************/
/*! exports provided: StatementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatementModule", function() { return StatementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_statement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/statement.service */ "./src/app/shared/services/statement.service.ts");
/* harmony import */ var _statement_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statement-routing.module */ "./src/app/views/statement/statement-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _statement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statement.component */ "./src/app/views/statement/statement.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");










var StatementModule = /** @class */ (function () {
    function StatementModule() {
    }
    StatementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _statement_routing_module__WEBPACK_IMPORTED_MODULE_2__["StatementRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [
                _shared_services_statement_service__WEBPACK_IMPORTED_MODULE_1__["StatementService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
            ],
            declarations: [
                _statement_component__WEBPACK_IMPORTED_MODULE_5__["StatementComponent"]
            ]
        })
    ], StatementModule);
    return StatementModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-statement-statement-module.js.map