(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-out-of-stock-out-of-stock-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/out-of-stock/out-of-stock.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/out-of-stock/out-of-stock.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">Out Of Stock</div>\n                <div class=\"card-body p-4\">\n                    <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n                        <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                            type=\"button\"><i class=\"fa fa-file-export mr-2\n                        \"></i>Export</button>\n                        <div id=\"myDropdown\" class=\"dropdown-content\">\n                            <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a>\n                            <!-- <a href=\"javascript:void(0)\" (click)=\"commonService.exportPDF(false, 0, 'outOfStockList');rerender();\">Export to PDF</a> -->\n                            <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n                        </div>\n                    </div>\n                    <perfect-scrollbar>\n                        <div class=\"responsive-table rounded mb-4\">\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                                class=\"data row-border hover table order-table border\" id=\"excel-table\">\n                                <thead>\n                                    <tr>\n                                        <th style=\"max-width: 150px;\">Item Number</th>\n                                        <th>Product</th>\n                                        <th style=\"max-width: 150px;\">Lifetime Quantity</th>\n                                        <th>Date</th>\n                                        <th>Time</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let notification of notificationList;let i = index;\">\n                                        <td>{{notification.item_no || \"-\"}}</td>\n                                        <td>{{notification.name || \"-\"}}</td>\n                                        <td>{{notification.lifetime_quantity || \"0\"}}</td>\n                                        <td>{{notification.date_out_of_stock ? (notification.date_out_of_stock | date:\n                                            'MM-dd-yyyy') : \"-\"}}</td>\n                                        <td>{{notification.time_out_of_stock || \"-\"}}</td>\n                                    </tr>\n                                    <tr *ngIf=\"notificationList?.length == 0\">\n                                        <td colspan=\"5\" class=\"no-data-available\">No Data Found !</td>\n                                    </tr>\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </perfect-scrollbar>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/shared/services/out-of-stock.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/out-of-stock.service.ts ***!
  \*********************************************************/
/*! exports provided: OutOfStockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutOfStockService", function() { return OutOfStockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var OutOfStockService = /** @class */ (function () {
    function OutOfStockService(http) {
        this.http = http;
    }
    OutOfStockService.prototype.product_out_ofstock = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/dashboard/product_out_ofstock/", data);
    };
    OutOfStockService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OutOfStockService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OutOfStockService);
    return OutOfStockService;
}());



/***/ }),

/***/ "./src/app/views/out-of-stock/out-of-stock-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/out-of-stock/out-of-stock-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OutOfStockRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutOfStockRoutingModule", function() { return OutOfStockRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _out_of_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./out-of-stock.component */ "./src/app/views/out-of-stock/out-of-stock.component.ts");




var routes = [
    {
        path: '',
        data: {
            title: 'Out Of Stock'
        },
        children: [
            {
                path: '',
                component: _out_of_stock_component__WEBPACK_IMPORTED_MODULE_3__["OutOfStockComponent"],
                data: {
                    title: 'List'
                }
            }
        ]
    }
];
var OutOfStockRoutingModule = /** @class */ (function () {
    function OutOfStockRoutingModule() {
    }
    OutOfStockRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OutOfStockRoutingModule);
    return OutOfStockRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/out-of-stock/out-of-stock.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/out-of-stock/out-of-stock.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL291dC1vZi1zdG9jay9vdXQtb2Ytc3RvY2suY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/out-of-stock/out-of-stock.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/out-of-stock/out-of-stock.component.ts ***!
  \**************************************************************/
/*! exports provided: OutOfStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutOfStockComponent", function() { return OutOfStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_out_of_stock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/out-of-stock.service */ "./src/app/shared/services/out-of-stock.service.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");








var OutOfStockComponent = /** @class */ (function () {
    function OutOfStockComponent(titleService, toastr, outOfStockService, commonService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.outOfStockService = outOfStockService;
        this.commonService = commonService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    OutOfStockComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Out Of Stock");
        this.getNotificationList();
    };
    OutOfStockComponent.prototype.getNotificationList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 100,
            //order: [1, 'desc'],
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page = parseInt(dataTablesParameters.start) / parseInt(dataTablesParameters.length) + 1;
                dataTablesParameters.limit = dataTablesParameters.length;
                dataTablesParameters.search_field_value = dataTablesParameters.search.value;
                // sorting
                dataTablesParameters.order[0].column == 0 ? dataTablesParameters.item_no = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("item_no") : ("-item_no") : "";
                dataTablesParameters.order[0].column == 1 ? dataTablesParameters.name = (dataTablesParameters.order[0].column == 1 && dataTablesParameters.order[0].dir == "asc") ? ("name") : ("-name") : "";
                dataTablesParameters.order[0].column == 2 ? dataTablesParameters.lifetime_quantity = (dataTablesParameters.order[0].column == 2 && dataTablesParameters.order[0].dir == "asc") ? ("lifetime_quantity") : ("-lifetime_quantity") : "";
                dataTablesParameters.order[0].column == 3 ? dataTablesParameters.date_out_of_stock = (dataTablesParameters.order[0].column == 3 && dataTablesParameters.order[0].dir == "asc") ? ("date_out_of_stock") : ("-date_out_of_stock") : "";
                dataTablesParameters.order[0].column == 4 ? dataTablesParameters.time_out_of_stock = (dataTablesParameters.order[0].column == 4 && dataTablesParameters.order[0].dir == "asc") ? ("time_out_of_stock") : ("-time_out_of_stock") : "";
                _this.datatbaleData = dataTablesParameters;
                _this.outOfStockService
                    .product_out_ofstock(dataTablesParameters)
                    .subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.notificationList = resData.data;
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: dataTablesParameters.search_field_value == "" ? resData.total_record : resData.filter_record,
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
                { data: 'item_no' },
                { data: 'name' },
                { data: 'lifetime_quantity' },
                { data: 'date_out_of_stock' },
                { data: 'time_out_of_stock' }
            ]
        };
    };
    OutOfStockComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    OutOfStockComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    OutOfStockComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.outOfStockService
            .product_out_ofstock(this.datatbaleData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                    'Item Number': x.item_no || "-",
                    'Product': x.name || "-",
                    'Lifetime Quantity': x.lifetime_quantity || "-",
                    'Date': x.date_out_of_stock || "-",
                    'Time': x.time_out_of_stock || "-"
                }); });
                if (type == 'pdf') {
                    if (onlyNameAndSymbolArr.length > 0) {
                        var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                        var values = onlyNameAndSymbolArr.map(function (element) { return Object.values(element); });
                        _this.commonService.exportArrayPDF(keys, values, 'outOfStockList');
                    }
                    else {
                        _this.toastr.error('', "No Data Found !");
                        $("#myDropdown").toggle();
                    }
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, 'outOfStockList');
                }
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    OutOfStockComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    OutOfStockComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _shared_services_out_of_stock_service__WEBPACK_IMPORTED_MODULE_6__["OutOfStockService"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], OutOfStockComponent.prototype, "dtElement", void 0);
    OutOfStockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-out-of-stock',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./out-of-stock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/out-of-stock/out-of-stock.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./out-of-stock.component.css */ "./src/app/views/out-of-stock/out-of-stock.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _shared_services_out_of_stock_service__WEBPACK_IMPORTED_MODULE_6__["OutOfStockService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], OutOfStockComponent);
    return OutOfStockComponent;
}());



/***/ }),

/***/ "./src/app/views/out-of-stock/out-of-stock.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/out-of-stock/out-of-stock.module.ts ***!
  \***********************************************************/
/*! exports provided: OutOfStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutOfStockModule", function() { return OutOfStockModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _out_of_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./out-of-stock.component */ "./src/app/views/out-of-stock/out-of-stock.component.ts");
/* harmony import */ var _out_of_stock_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./out-of-stock-routing.module */ "./src/app/views/out-of-stock/out-of-stock-routing.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_services_out_of_stock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/out-of-stock.service */ "./src/app/shared/services/out-of-stock.service.ts");








var OutOfStockModule = /** @class */ (function () {
    function OutOfStockModule() {
    }
    OutOfStockModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_out_of_stock_component__WEBPACK_IMPORTED_MODULE_3__["OutOfStockComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _out_of_stock_routing_module__WEBPACK_IMPORTED_MODULE_4__["OutOfStockRoutingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"]
            ],
            providers: [
                _shared_services_out_of_stock_service__WEBPACK_IMPORTED_MODULE_7__["OutOfStockService"]
            ]
        })
    ], OutOfStockModule);
    return OutOfStockModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-out-of-stock-out-of-stock-module.js.map