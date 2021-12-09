(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-category-management-category-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/category-management/add-category/add-category.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/category-management/add-category/add-category.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-6\">\n            <form class=\"card\" [formGroup]=\"addForm\" (ngSubmit)=\"submitAddForm()\" #formDir=\"ngForm\" novalidate>\n                <div class=\"card-header\">Add Category</div>\n                <div class=\"card-body p-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Name :</label>\n                                <input formControlName=\"name\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Name\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && addForm.controls.name.invalid) || addForm.controls.name.touched\">\n                                    <div *ngIf=\"addForm.hasError('required','name')\" class=\"err-msg\">Name is required.\n                                    </div>\n                                    <div *ngIf=\"!addForm.hasError('required','name') && addForm.hasError('pattern','name')\"\n                                        class=\"err-msg\">Name does not allow whitespace.\n                                    </div>\n                                    <div *ngIf=\"!addForm.hasError('required','name') && !addForm.hasError('pattern','name') && addForm.hasError('minlength','name')\"\n                                        class=\"err-msg\">Name should be atleast 2 characters.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Description :</label>\n                                <textarea formControlName=\"description\" class=\"form-control\" style=\"resize:none;\"\n                                    name=\"textarea-input\" rows=\"9\" placeholder=\"Description\"\n                                    spellcheck=\"false\"></textarea>\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && addForm.controls.description.invalid) || addForm.controls.description.touched\">\n                                    <div *ngIf=\"addForm.hasError('required','description')\" class=\"err-msg\">Description\n                                        is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row col-sm-12\">\n                            <div class=\"col-sm-12 mt-2\">\n                                <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Add</button>\n                                <button class=\"btn btn-md btn-secondary\" type=\"button\"\n                                    [routerLink]=\"['/category-management']\">Cancel</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/category-management/category-management.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/category-management/category-management.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Category Management\n          <div class=\"d-flex flex-wrap justify-content-end align-items-center\">\n            <div class=\"pull-right mr-2\">\n              <button class=\"btn btn-md btn-primary\" type=\"button\" [routerLink]=\"['/category-management/add']\">\n                <i class=\"fa fa-plus mr-2\"></i>\n                Add Category\n              </button>\n            </div>\n            <div class=\"dropdown pull-right\">\n              <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\">\n                <i class=\"fa fa-file-export mr-2\"></i>\n                Export\n              </button>\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\"\n                  style=\"font-size: small; text-decoration: none;\">\n                  Export to XLSX\n                </a>\n                <!-- <a href=\"javascript:void(0)\"\n                                                        (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n                <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body p-4\">\n          <!-- <div class=\"d-flex flex-wrap justify-content-end align-items-center\">\n            <div style=\"margin-right: 10px;\" class=\"form-group\">\n              <button class=\"btn btn-md btn-primary\" type=\"button\" [routerLink]=\"['/category-management/add']\"><i class=\"fa fa-plus mr-2\n                        \"></i>Add Category</button>\n            </div>\n            <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n              <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\"><i\n                  class=\"fa fa-file-export mr-2\n                            \"></i>Export</button>\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a> -->\n          <!-- <a href=\"javascript:void(0)\" (click)=\"commonService.exportPDF(true, 2, 'categoryList');rerender();\">Export to PDF</a> -->\n          <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n          <!-- </div>\n            </div>\n          </div> -->\n          <!-- <perfect-scrollbar>\n            <div class=\"responsive-table rounded mb-4\"> -->\n          <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" style=\"width: 100%;\"\n            class=\"data row-border hover table order-table border\" id=\"excel-table\">\n            <thead>\n              <tr>\n                <th>Name</th>\n                <th>Description</th>\n                <th id=\"last-header\" class=\"text-center\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let category of categoryList;let i = index;\">\n                <td>{{category.name || \"-\"}}</td>\n                <td>\n                  <!-- <div *ngIf=\"category.description.length>30\"\n                    style=\"resize: none;height: 94px;width: 300px;overflow: auto;\"><span\n                      [outerHTML]=\"category?.description\">\n                    </span>\n                  </div>\n                  <ng-container *ngIf=\"category.description.length<30\"> -->\n                  {{category?.description}}\n                  <!-- </ng-container> -->\n                </td>\n                <td>\n                  <div class=\"d-flex align-items-center justify-content-center\">\n                    <a class=\"text-dark mx-2\" [routerLink]=\"['/category-management/edit']\"\n                      [queryParams]='{id: category?.id}'>\n                      <i class=\"fa fa-pencil\"></i>\n                    </a>\n                    <a class=\"text-danger mx-2\" href=\"javascript:void(0)\"\n                      (click)=\"deleteModal.show();saveId(category?.id);\">\n                      <i class=\"far fa-trash-alt\"></i>\n                    </a>\n                  </div>\n                </td>\n              </tr>\n              <tr *ngIf=\"categoryList?.length == 0\">\n                <td colspan=\"3\" class=\"no-data-available\">No Data Found !</td>\n              </tr>\n\n            </tbody>\n          </table>\n          <!-- </div>\n          </perfect-scrollbar> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- delete modal -->\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n        <h2 class=\"font-weight-bold mb-4 text-primary\">Delete</h2>\n        <p class=\"mb-0\">Are You Sure You Want To Delete ?</p>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCategory()\">Delete</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div>\n</div><!-- /.modal -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/category-management/edit-category/edit-category.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/category-management/edit-category/edit-category.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-6\">\n            <form class=\"card\" [formGroup]=\"editForm\" (ngSubmit)=\"submitEditForm()\" #formDir=\"ngForm\" novalidate>\n                <div class=\"card-header\">edit Category</div>\n                <div class=\"card-body p-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Name :</label>\n                                <input formControlName=\"name\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Name\">\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && editForm.controls.name.invalid) || editForm.controls.name.touched\">\n                                  <div *ngIf=\"editForm.hasError('required','name')\" class=\"err-msg\">Name is required.\n                                  </div>\n                                  <div *ngIf=\"!editForm.hasError('required','name') && editForm.hasError('pattern','name')\" class=\"err-msg\">Name does not allow whitespace.\n                                  </div>\n                                  <div *ngIf=\"!editForm.hasError('required','name') && !editForm.hasError('pattern','name') && editForm.hasError('minlength','name')\" class=\"err-msg\">Name should be atleast 2 characters.\n                                  </div>\n                                </div>  \n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Description :</label>\n                                <textarea formControlName=\"description\" class=\"form-control\" style=\"resize:none;\" name=\"textarea-input\" rows=\"9\" placeholder=\"Description\" spellcheck=\"false\"></textarea>\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && editForm.controls.description.invalid) || editForm.controls.description.touched\">\n                                  <div *ngIf=\"editForm.hasError('required','description')\" class=\"err-msg\">Description is required.\n                                  </div>\n                                </div>  \n                            </div>\n                        </div>\n                        <div class=\"row col-sm-12\">\n                            <div class=\"col-sm-12 mt-2\">\n                                <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Edit</button>\n                                <button class=\"btn btn-md btn-secondary\" type=\"button\" [routerLink]=\"['/category-management']\">Cancel</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/shared/services/category-management.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/category-management.service.ts ***!
  \****************************************************************/
/*! exports provided: CategoryManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryManagementService", function() { return CategoryManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var CategoryManagementService = /** @class */ (function () {
    function CategoryManagementService(http) {
        this.http = http;
    }
    CategoryManagementService.prototype.categorylist = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/categorieslist/", data);
    };
    CategoryManagementService.prototype.getCategory = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/create_category/" + id + "/view/");
    };
    CategoryManagementService.prototype.createCategory = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/create_category/", data);
    };
    CategoryManagementService.prototype.updateCategory = function (id, data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/create_category/" + id + "/edit/", data);
    };
    CategoryManagementService.prototype.deleteCategory = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/create_category/" + id + "/");
    };
    CategoryManagementService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CategoryManagementService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryManagementService);
    return CategoryManagementService;
}());



/***/ }),

/***/ "./src/app/views/category-management/add-category/add-category.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/category-management/add-category/add-category.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_category_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/category-management.service */ "./src/app/shared/services/category-management.service.ts");
/* harmony import */ var _shared_validators_Validations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/validators/Validations */ "./src/app/shared/validators/Validations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(titleService, categoryManagementService, toastr, router, route) {
        this.titleService = titleService;
        this.categoryManagementService = categoryManagementService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Add Category");
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_6__["Validations"].whitespace),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
    };
    AddCategoryComponent.prototype.submitAddForm = function () {
        var _this = this;
        this.submitted = true;
        var formData = new FormData();
        formData.append("name", this.addForm.controls.name.value);
        formData.append("description", this.addForm.controls.description.value);
        if (this.addForm.valid) {
            this.categoryManagementService.createCategory(formData).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.router.navigate(['category-management']).then(function () {
                        _this.toastr.success('', "Category added successfully!");
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
    AddCategoryComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _shared_services_category_management_service__WEBPACK_IMPORTED_MODULE_5__["CategoryManagementService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    AddCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-category',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/category-management/add-category/add-category.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_category_management_service__WEBPACK_IMPORTED_MODULE_5__["CategoryManagementService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/views/category-management/category-management-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/category-management/category-management-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CategoryManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryManagementRoutingModule", function() { return CategoryManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/views/category-management/add-category/add-category.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/views/category-management/edit-category/edit-category.component.ts");
/* harmony import */ var _category_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-management.component */ "./src/app/views/category-management/category-management.component.ts");






var routes = [
    {
        path: '',
        data: {
            title: 'Category Management'
        },
        children: [
            {
                path: '',
                component: _category_management_component__WEBPACK_IMPORTED_MODULE_5__["CategoryManagementComponent"],
                data: {
                    title: 'List'
                }
            },
            {
                path: 'add',
                component: _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__["AddCategoryComponent"],
                data: {
                    title: 'Add'
                },
            },
            {
                path: 'edit',
                component: _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_4__["EditCategoryComponent"],
                data: {
                    title: 'Edit'
                },
            }
        ]
    }
];
var CategoryManagementRoutingModule = /** @class */ (function () {
    function CategoryManagementRoutingModule() {
    }
    CategoryManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoryManagementRoutingModule);
    return CategoryManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/category-management/category-management.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/category-management/category-management.component.ts ***!
  \****************************************************************************/
/*! exports provided: CategoryManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryManagementComponent", function() { return CategoryManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_category_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/category-management.service */ "./src/app/shared/services/category-management.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");









var CategoryManagementComponent = /** @class */ (function () {
    function CategoryManagementComponent(titleService, toastr, categoryManagementService, commonService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.categoryManagementService = categoryManagementService;
        this.commonService = commonService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    CategoryManagementComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Category Management");
        this.getCategoryList();
    };
    CategoryManagementComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 100,
            //order: [1, 'desc'],
            scrollY: "450px",
            scrollX: true,
            scrollCollapse: true,
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
                    ? (dataTablesParameters.name =
                        dataTablesParameters.order[0].column == 0 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "name"
                            : "-name")
                    : "";
                dataTablesParameters.order[0].column == 1
                    ? (dataTablesParameters.description =
                        dataTablesParameters.order[0].column == 1 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "description"
                            : "-description")
                    : "";
                _this.datatbaleData = dataTablesParameters;
                _this.categoryManagementService
                    .categorylist(dataTablesParameters)
                    .subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.categoryList = resData.data;
                        setTimeout(function () {
                            var table = $("#excel-table").DataTable();
                            table.columns.adjust();
                            document.getElementById("last-header").style.width = "auto";
                        }, 10);
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: dataTablesParameters.search_param == ""
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
                { data: "name" },
                { data: "description" },
                { data: "action", searchable: false, orderable: false },
            ],
        };
    };
    CategoryManagementComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    CategoryManagementComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    CategoryManagementComponent.prototype.saveId = function (categoryId) {
        this.categoryId = categoryId;
    };
    CategoryManagementComponent.prototype.deleteCategory = function () {
        var _this = this;
        this.categoryManagementService.deleteCategory(this.categoryId).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.deleteModal.hide();
                _this.toastr.success("", "Category deleted successfully.");
                _this.rerender();
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.mesaage);
        });
    };
    CategoryManagementComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    CategoryManagementComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.categoryManagementService.categorylist(this.datatbaleData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                    Name: x.name || "-",
                    Description: x.description || "-",
                }); });
                if (type == "pdf") {
                    if (onlyNameAndSymbolArr.length > 0) {
                        var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                        var values = onlyNameAndSymbolArr.map(function (element) {
                            return Object.values(element);
                        });
                        _this.commonService.exportArrayPDF(keys, values, "categoryList");
                    }
                    else {
                        _this.toastr.error("", "No Data Found !");
                        $("#myDropdown").toggle();
                    }
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, "categoryList");
                }
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    CategoryManagementComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _shared_services_category_management_service__WEBPACK_IMPORTED_MODULE_6__["CategoryManagementService"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("deleteModal"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], CategoryManagementComponent.prototype, "deleteModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], CategoryManagementComponent.prototype, "dtElement", void 0);
    CategoryManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-category-management",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/category-management/category-management.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _shared_services_category_management_service__WEBPACK_IMPORTED_MODULE_6__["CategoryManagementService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
    ], CategoryManagementComponent);
    return CategoryManagementComponent;
}());



/***/ }),

/***/ "./src/app/views/category-management/category-management.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/category-management/category-management.module.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryManagementModule", function() { return CategoryManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/views/category-management/add-category/add-category.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/views/category-management/edit-category/edit-category.component.ts");
/* harmony import */ var _category_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-management.component */ "./src/app/views/category-management/category-management.component.ts");
/* harmony import */ var _category_management_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-management-routing.module */ "./src/app/views/category-management/category-management-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _shared_services_category_management_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/category-management.service */ "./src/app/shared/services/category-management.service.ts");












var CategoryManagementModule = /** @class */ (function () {
    function CategoryManagementModule() {
    }
    CategoryManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_category_management_component__WEBPACK_IMPORTED_MODULE_5__["CategoryManagementComponent"], _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__["AddCategoryComponent"], _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_4__["EditCategoryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _category_management_routing_module__WEBPACK_IMPORTED_MODULE_6__["CategoryManagementRoutingModule"]
            ],
            providers: [
                _shared_services_category_management_service__WEBPACK_IMPORTED_MODULE_11__["CategoryManagementService"]
            ]
        })
    ], CategoryManagementModule);
    return CategoryManagementModule;
}());



/***/ }),

/***/ "./src/app/views/category-management/edit-category/edit-category.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/category-management/edit-category/edit-category.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_category_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/category-management.service */ "./src/app/shared/services/category-management.service.ts");
/* harmony import */ var _shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/validators/Validations */ "./src/app/shared/validators/Validations.ts");








var EditCategoryComponent = /** @class */ (function () {
    function EditCategoryComponent(titleService, categoryManagementService, toastr, router, route) {
        this.titleService = titleService;
        this.categoryManagementService = categoryManagementService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.submitted = false;
    }
    EditCategoryComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Edit Category");
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].whitespace),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
        this.getCategoryInfo();
    };
    EditCategoryComponent.prototype.getCategoryInfo = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (param) {
            _this.categoryId = param.id;
        });
        this.categoryManagementService.getCategory(this.categoryId).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.editForm.patchValue({
                    name: resData.data.name,
                    description: resData.data.description
                });
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    EditCategoryComponent.prototype.submitEditForm = function () {
        var _this = this;
        this.submitted = true;
        var formData = new FormData();
        formData.append("name", this.editForm.controls.name.value);
        formData.append("description", this.editForm.controls.description.value);
        if (this.editForm.valid) {
            this.categoryManagementService.updateCategory(this.categoryId, formData).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.router.navigate(['category-management']).then(function () {
                        _this.toastr.success('', "Category updated successfully!");
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
    EditCategoryComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _shared_services_category_management_service__WEBPACK_IMPORTED_MODULE_6__["CategoryManagementService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    EditCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-category',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/category-management/edit-category/edit-category.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_category_management_service__WEBPACK_IMPORTED_MODULE_6__["CategoryManagementService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-category-management-category-management-module.js.map