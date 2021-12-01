(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/notifications.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/notifications.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Notified Out Of Stock\n          <div class=\"d-flex flex-wrap justify-content-end align-items-center\">\n            <div class=\"dropdown pull-right\">\n              <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\">\n                <i class=\"fa fa-file-export mr-2\"></i>\n                Export\n              </button>\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\"\n                  style=\"font-size: small; text-decoration: none;\">\n                  Export to XLSX\n                </a>\n                <!-- <a href=\"javascript:void(0)\"\n                                (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n                <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body p-4\">\n          <form class=\"row justify-content-start align-items-center mb-2\">\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>From Date</label>\n                <input type=\"text\" placeholder=\"From Date\" class=\"form-control\" [(ngModel)]=\"selectedFromDate\"\n                  [ngModelOptions]=\"{standalone: true}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>To Date</label>\n                <input type=\"text\" placeholder=\"To Date\" class=\"form-control\" [(ngModel)]=\"selectedToDate\"\n                  [ngModelOptions]=\"{standalone: true}\" bsDatepicker>\n              </div>\n            </div>\n            <!-- <div class=\"col-md-3 col-sm-12\">\n                            <div class=\"form-group\">\n                                <label>Product Name</label>\n                                <select [(ngModel)]=\"selectedProduct\" [ngModelOptions]=\"{standalone: true}\"\n                                    class=\"form-control\">\n                                    <option value=\"\">Select Product Name</option>\n                                    <option *ngFor=\"let product of productDropdownData\" [value]=\"product.id\">\n                                        {{product.name}}</option>\n                                </select>\n                            </div>\n                        </div> -->\n            <div class=\"col-md-2 col-sm-12 pt-2\">\n              <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\" type=\"button\">Filter</button>\n            </div>\n          </form>\n          <!-- <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n            <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\"><i\n                class=\"fa fa-file-export mr-2\n                        \"></i>Export</button>\n            <div id=\"myDropdown\" class=\"dropdown-content\">\n              <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a> -->\n              <!-- <a href=\"javascript:void(0)\" (click)=\"commonService.exportPDF(true, 3, 'notifiedOutOfStockList');rerender();\">Export to PDF</a> -->\n              <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n            <!-- </div>\n          </div> -->\n          <perfect-scrollbar>\n            <div class=\"responsive-table rounded mb-4\">\n              <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                class=\"data row-border hover table order-table border\" id=\"excel-table\" style=\"width: 100%;\">\n                <thead>\n                  <tr>\n                    <th>Item Number</th>\n                    <th>Name</th>\n                    <th>Warehouse User</th>\n                    <th>Date</th>\n                    <th>Time</th>\n                    <th style=\"max-width: 40px;\">Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let notification of notificationList;let i = index;\">\n                    <td>{{notification.product_item_no || \"-\"}}</td>\n                    <td>{{notification.name || \"-\"}}</td>\n                    <td>{{notification.warehouse_user || \"-\"}}</td>\n                    <td>{{notification.date ? (notification.date | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                    <td>{{notification.time || \"-\"}}</td>\n                    <td>\n                      <a class=\"text-danger mx-2\" href=\"javascript:void(0)\"\n                        (click)=\"deleteModal.show();saveId(notification?.id);\"><i class=\"far fa-trash-alt\"></i></a>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"notificationList?.length == 0\">\n                    <td colspan=\"6\" class=\"no-data-available\">No Data Found !</td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n          </perfect-scrollbar>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- delete modal -->\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n        <h2 class=\"font-weight-bold mb-4 text-primary\">Delete</h2>\n        <p class=\"mb-0\">Are You Sure You Want To Delete ?</p>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteNotification()\">Delete</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div>\n</div><!-- /.modal -->\n");

/***/ }),

/***/ "./src/app/shared/services/notifications.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/notifications.service.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var NotificationsService = /** @class */ (function () {
    function NotificationsService(http) {
        this.http = http;
    }
    NotificationsService.prototype.notifications = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/notifications/list_view/", data);
    };
    NotificationsService.prototype.deleteNotification = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/notifications/delete_view/", data);
    };
    NotificationsService.prototype.productlist = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/productlist/", data);
    };
    NotificationsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    NotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/views/notifications/notifications-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function() { return NotificationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.component */ "./src/app/views/notifications/notifications.component.ts");




var routes = [
    {
        path: '',
        data: {
            title: 'Notified Out Of Stock'
        },
        children: [
            {
                path: '',
                component: _notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"],
                data: {
                    title: 'List'
                }
            }
        ]
    }
];
var NotificationsRoutingModule = /** @class */ (function () {
    function NotificationsRoutingModule() {
    }
    NotificationsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NotificationsRoutingModule);
    return NotificationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/notifications/notifications.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/notifications/notifications.component.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/notifications.service */ "./src/app/shared/services/notifications.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");










var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(titleService, toastr, notificationsService, commonService, datePipe) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.notificationsService = notificationsService;
        this.commonService = commonService;
        this.datePipe = datePipe;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedProduct = '';
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Notified out of stock");
        this.getNotificationList();
        this.getProductDropdownData();
    };
    NotificationsComponent.prototype.getNotificationList = function () {
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
                dataTablesParameters.search_param = dataTablesParameters.search.value;
                // sorting
                dataTablesParameters.order[0].column == 0 ? dataTablesParameters.product_item_no = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("product_item_no") : ("-product_item_no") : "";
                dataTablesParameters.order[0].column == 1 ? dataTablesParameters.product = (dataTablesParameters.order[0].column == 1 && dataTablesParameters.order[0].dir == "asc") ? ("product") : ("-product") : "";
                dataTablesParameters.order[0].column == 2 ? dataTablesParameters.warehouse_user = (dataTablesParameters.order[0].column == 2 && dataTablesParameters.order[0].dir == "asc") ? ("warehouse_user") : ("-warehouse_user") : "";
                dataTablesParameters.order[0].column == 3 ? dataTablesParameters.date = (dataTablesParameters.order[0].column == 3 && dataTablesParameters.order[0].dir == "asc") ? ("date") : ("-date") : "";
                dataTablesParameters.order[0].column == 4 ? dataTablesParameters.time = (dataTablesParameters.order[0].column == 4 && dataTablesParameters.order[0].dir == "asc") ? ("date__time") : ("-date__time") : "";
                // filter
                dataTablesParameters.from_date = _this.datePipe.transform(_this.selectedFromDate, "yyyy-MM-dd");
                dataTablesParameters.to_date = _this.datePipe.transform(_this.selectedToDate, "yyyy-MM-dd");
                _this.datatbaleData = dataTablesParameters;
                _this.notificationsService
                    .notifications(dataTablesParameters)
                    .subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.notificationList = resData.data;
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
                { data: 'product_item_no' },
                { data: 'name' },
                { data: 'warehouse_user' },
                { data: 'date' },
                { data: 'time' },
                { data: 'action', orderable: false, searchable: false }
            ]
        };
    };
    NotificationsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    NotificationsComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    NotificationsComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.notificationsService
            .notifications(this.datatbaleData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                    'Item Number': x.product_item_no || "-",
                    'Name': x.name || "-",
                    'Warehouse User': x.warehouse_user || "-",
                    'Date': x.date || "-",
                    'Time': x.time || "-"
                }); });
                if (type == 'pdf') {
                    if (onlyNameAndSymbolArr.length > 0) {
                        var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                        var values = onlyNameAndSymbolArr.map(function (element) { return Object.values(element); });
                        _this.commonService.exportArrayPDF(keys, values, 'notifyOutOfStockList');
                    }
                    else {
                        _this.toastr.error('', "No Data Found !");
                        $("#myDropdown").toggle();
                    }
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, 'notifyOutOfStockList');
                }
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    NotificationsComponent.prototype.saveId = function (Id) {
        this.notificationId = Id;
    };
    NotificationsComponent.prototype.deleteNotification = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("notification_id", this.notificationId);
        this.notificationsService
            .deleteNotification(formData)
            .subscribe(function (response) {
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
    NotificationsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    NotificationsComponent.prototype.getProductDropdownData = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("page", "1");
        formData.append("limit", "100000");
        this.notificationsService.productlist(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.productDropdownData = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    NotificationsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalDirective"])
    ], NotificationsComponent.prototype, "deleteModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], NotificationsComponent.prototype, "dtElement", void 0);
    NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/notifications.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/views/notifications/notifications.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/notifications/notifications.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/views/notifications/notifications-routing.module.ts");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications.component */ "./src/app/views/notifications/notifications.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/notifications.service */ "./src/app/shared/services/notifications.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");











var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationsRoutingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot()
            ],
            providers: [
                _shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-notifications-notifications-module.js.map