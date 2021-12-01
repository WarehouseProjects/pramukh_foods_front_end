(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-warehouse-user-warehouse-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/warehouse-user/add/add.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/warehouse-user/add/add.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-6\">\n            <form class=\"card\" [formGroup]=\"addForm\" (ngSubmit)=\"submitAddForm()\" #formDir=\"ngForm\" novalidate>\n                <div class=\"card-header\">Warehouse Add</div>\n                <div class=\"card-body p-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Full Name :</label>\n                                <input formControlName=\"full_name\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Full Name\">\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && addForm.controls.full_name.invalid) || addForm.controls.full_name.touched\">\n                                  <div *ngIf=\"addForm.hasError('required','full_name')\" class=\"err-msg\">Full name is required.\n                                  </div>\n                                </div>  \n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Email :</label>\n                                <input formControlName=\"email\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Email\">\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && addForm.controls.email.invalid) || addForm.controls.email.touched\">\n                                  <div *ngIf=\"addForm.hasError('required','email')\" class=\"err-msg\">Email is required.\n                                  </div>\n                                  <div *ngIf=\"!addForm.hasError('required','email') && addForm.hasError('pattern','email')\"\n                                class=\"err-msg\">Please enter valid email address.</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Phone Number :</label>\n                                <input mask='(000) 000-0000' formControlName=\"phone_number\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Phone Number\">\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && addForm.controls.phone_number.invalid) || addForm.controls.phone_number.touched\">\n                                  <div *ngIf=\"addForm.hasError('required','phone_number')\" class=\"err-msg\">Phone number is required.\n                                  </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Address :</label>\n                                <input formControlName=\"address\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Address\">\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && addForm.controls.address.invalid) || addForm.controls.address.touched\">\n                                  <div *ngIf=\"addForm.hasError('required','address')\" class=\"err-msg\">Address is required.\n                                  </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">City :</label>\n                                <input formControlName=\"city\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"City\">\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && addForm.controls.city.invalid) || addForm.controls.city.touched\">\n                                  <div *ngIf=\"addForm.hasError('required','city')\" class=\"err-msg\">City is required.\n                                  </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">State :</label>\n                                <input formControlName=\"state\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"State\">\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && addForm.controls.state.invalid) || addForm.controls.state.touched\">\n                                  <div *ngIf=\"addForm.hasError('required','state')\" class=\"err-msg\">State is required.\n                                  </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Country :</label>\n                                <input formControlName=\"country\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Enter Country\">\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && addForm.controls.country.invalid) || addForm.controls.country.touched\">\n                                  <div *ngIf=\"addForm.hasError('required','country')\" class=\"err-msg\">Country is required.\n                                  </div>\n                                </div>\n                            </div>\n                        </div> -->\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Zip code :</label>\n                                <input formControlName=\"zipcode\" class=\"form-control\" id=\"name\" type=\"number\" placeholder=\"Zip code\">\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && addForm.controls.zipcode.invalid) || addForm.controls.zipcode.touched\">\n                                  <div *ngIf=\"addForm.hasError('required','zipcode')\" class=\"err-msg\">Zipcode is required.\n                                  </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Username :</label>\n                                <input formControlName=\"name\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Enter Username\">\n                            </div>\n                        </div> -->\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Password :</label>\n                                <input formControlName=\"password\" class=\"form-control\" id=\"name\" type=\"password\" placeholder=\"Password\">\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && addForm.controls.password.invalid) || addForm.controls.password.touched\">\n                                  <div *ngIf=\"addForm.hasError('required','password')\" class=\"err-msg\">Password is required.\n                                  </div>\n                                  <div *ngIf=\"!addForm.hasError('required','password') && addForm.hasError('minlength','password')\" class=\"err-msg\">Password should be atleast 6 characters.\n                                  </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Confirm Password :</label>\n                                <input formControlName=\"cpassword\" class=\"form-control\" id=\"name\" type=\"password\" placeholder=\"Confirm Password\" (keyup)=\"checkPassword()\">\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && addForm.controls.cpassword.invalid) || addForm.controls.cpassword.touched\">\n                                  <div *ngIf=\"addForm.hasError('required','cpassword')\" class=\"err-msg\">Confirm password is required.\n                                  </div>\n                                  <div *ngIf=\"!addForm.hasError('required','cpassword') && addForm.hasError('minlength','cpassword')\" class=\"err-msg\">Confirm password should be atleast 6 characters.\n                                  </div>\n                                  <div *ngIf=\"passmessage != ''\" class=\"err-msg\">{{passmessage}}</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row col-sm-12\">\n                            <div class=\"col-sm-12 mt-2\">\n                                <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Add</button>\n                                <button class=\"btn btn-md btn-secondary\" type=\"button\" [routerLink]=\"['/warehouse-user']\">Cancel</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/warehouse-user/edit/edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/warehouse-user/edit/edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-6\">\n            <form class=\"card\" [formGroup]=\"editForm\" (ngSubmit)=\"submitEditForm()\" #formDir=\"ngForm\" novalidate>\n                <div class=\"card-header\">Warehouse Edit</div>\n                <div class=\"card-body p-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Full Name :</label>\n                                <input formControlName=\"full_name\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Full Name\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.full_name.invalid) || editForm.controls.full_name.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','full_name')\" class=\"err-msg\">Full name is\n                                        required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Email :</label>\n                                <input formControlName=\"email\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Email\" readonly>\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.email.invalid) || editForm.controls.email.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','email')\" class=\"err-msg\">Email is\n                                        required.\n                                    </div>\n                                    <div *ngIf=\"!editForm.hasError('required','email') && editForm.hasError('pattern','email')\"\n                                        class=\"err-msg\">Please enter valid email address.</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Phone Number :</label>\n                                <input mask='(000) 000-0000' formControlName=\"phone_number\" class=\"form-control\"\n                                    id=\"name\" type=\"text\" placeholder=\"Phone Number\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.phone_number.invalid) || editForm.controls.phone_number.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','phone_number')\" class=\"err-msg\">Phone\n                                        number is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Address :</label>\n                                <input formControlName=\"address\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Address\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.address.invalid) || editForm.controls.address.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','address')\" class=\"err-msg\">Address is\n                                        required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">City :</label>\n                                <input formControlName=\"city\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"City\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.city.invalid) || editForm.controls.city.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','city')\" class=\"err-msg\">City is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">State :</label>\n                                <input formControlName=\"state\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"State\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.state.invalid) || editForm.controls.state.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','state')\" class=\"err-msg\">State is\n                                        required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Country :</label>\n                                <input formControlName=\"country\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Enter Country\">\n                                <div class=\"error\"\n                                  *ngIf=\"(submitted && editForm.controls.country.invalid) || editForm.controls.country.touched\">\n                                  <div *ngIf=\"editForm.hasError('required','country')\" class=\"err-msg\">Country is required.\n                                  </div>\n                                </div>\n                            </div>\n                        </div> -->\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Zip code :</label>\n                                <input formControlName=\"zipcode\" class=\"form-control\" id=\"name\" type=\"number\"\n                                    placeholder=\"Zip code\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.zipcode.invalid) || editForm.controls.zipcode.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','zipcode')\" class=\"err-msg\">Zipcode is\n                                        required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Username :</label>\n                                <input formControlName=\"name\" class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Enter Username\">\n                            </div>\n                        </div> -->\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Password :</label>\n                                <input formControlName=\"password\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Password\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.password.invalid) || editForm.controls.password.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','password')\" class=\"err-msg\">Password is\n                                        required.\n                                    </div>\n                                    <div *ngIf=\"!editForm.hasError('required','password') && editForm.hasError('minlength','password')\"\n                                        class=\"err-msg\">Password should be atleast 6 characters.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Confirm Password :</label>\n                                <input formControlName=\"cpassword\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Confirm Password\" (keyup)=\"checkPassword()\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.cpassword.invalid) || editForm.controls.cpassword.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','cpassword')\" class=\"err-msg\">Confirm\n                                        password is required.\n                                    </div>\n                                    <div *ngIf=\"!editForm.hasError('required','cpassword') && editForm.hasError('minlength','cpassword')\"\n                                        class=\"err-msg\">Confirm password should be atleast 6 characters.\n                                    </div>\n                                    <div *ngIf=\"passmessage != ''\" class=\"err-msg\">{{passmessage}}</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row col-sm-12\">\n                            <div class=\"col-sm-12 mt-2\">\n                                <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Save</button>\n                                <button class=\"btn btn-md btn-secondary\" type=\"button\"\n                                    [routerLink]=\"['/warehouse-user']\">Cancel</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/warehouse-user/view/view.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/warehouse-user/view/view.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <!-- <div class=\"card-header\">Warehouse View</div> -->\n                <div class=\"card-header d-flex justify-content-between align-items-center\">Warehouse View\n                    <div class=\"pull-right\">\n                        <a [routerLink]=\"['/warehouse-user']\" class=\"btn btn-md btn-secondary\" type=\"button\">Back</a>\n                    </div>\n                </div>\n                <div class=\"card-body pt-2 pb-2 pl-4 pr-4\">\n                    <div class=\"responsive-table user-view scan-view-table\">\n                        <table class=\"table\">\n                            <tbody>\n                                <tr>\n                                    <td><strong>Full Name:</strong></td>\n                                    <td>{{userData?.full_name}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Email :</strong></td>\n                                    <td>{{userData?.email}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Phone Number:</strong></td>\n                                    <td>{{userData?.phone_number | mask: '(000) 000-0000'}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Address:</strong></td>\n                                    <td>{{userData?.address}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>City :</strong></td>\n                                    <td>{{userData?.city}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>State:</strong></td>\n                                    <td>{{userData?.state}}</td>\n                                </tr>\n                                <!-- <tr>\n                                    <td><strong>Country:</strong></td>\n                                    <td>{{userData?.country}}</td>\n                                </tr> -->\n                                <tr>\n                                    <td><strong>Zip code :</strong></td>\n                                    <td>{{userData?.zipcode}}</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Password :</strong></td>\n                                    <td>{{userData?.user_passowrd}}</td>\n                                </tr>\n                                <!-- <tr>\n                                    <td><strong>Username :</strong></td>\n                                    <td>username</td>\n                                </tr>\n                                <tr>\n                                    <td><strong>Password :</strong></td>\n                                    <td>{{userData?.full_name}}</td>\n                                </tr> -->\n                            </tbody>\n                        </table>\n                        <table>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/warehouse-user/warehouse-user.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/warehouse-user/warehouse-user.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Warehouse Users\n          <div class=\"d-flex flex-wrap justify-content-end align-items-center\">\n            <div class=\"pull-right mr-2\">\n              <button class=\"btn btn-md btn-primary\" type=\"button\" [routerLink]=\"['/warehouse-user/add']\">\n                <i class=\"fa fa-plus mr-2\"></i>\n                Add Warehouse User\n              </button>\n            </div>\n            <div class=\"dropdown pull-right\">\n              <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\">\n                <i class=\"fa fa-file-export mr-2\"></i>\n                Export\n              </button>\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <a href=\"javascript:void(0)\" (click)=\"exportType('xlsx')\"\n                  style=\"font-size: small; text-decoration: none;\">\n                  Export to XLSX\n                </a>\n                <!-- <a href=\"javascript:void(0)\"\n                                                (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n                <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body p-4\">\n          <!-- <div class=\"d-flex flex-wrap justify-content-end align-items-center\">\n            <div class=\"form-group\">\n              <button class=\"btn btn-md btn-primary\" type=\"button\" [routerLink]=\"['/warehouse-user/add']\"><i class=\"fa fa-plus mr-2\n                        \"></i>Add Warehouse User</button>\n            </div>\n\n            <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n              <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\"><i\n                  class=\"fa fa-file-export mr-2\n                            \"></i>Export</button>\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <a href=\"javascript:void(0)\" (click)=\"exportType('xlsx')\">Export to XLSX</a> -->\n                <!-- <a href=\"javascript:void(0)\" (click)=\"commonService.exportPDF(true, 3, 'warehouseUserList');rerender();\">Export to PDF</a> -->\n                <!-- <a href=\"javascript:void(0)\" (click)=\"exportType('pdf')\">Export to PDF</a> -->\n              <!-- </div>\n            </div>\n          </div> -->\n          <perfect-scrollbar>\n            <div class=\"responsive-table rounded mb-4\">\n              <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                class=\"data row-border hover table order-table border\" id=\"excel-table\">\n                <thead>\n                  <tr>\n                    <th>Full Name</th>\n                    <th>Email</th>\n                    <th>Phone Number</th>\n                    <th class=\"text-center\">Actions</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let user of userList;let i = index;\">\n                    <td>{{user.full_name || \"-\"}}</td>\n                    <td>{{user.email || \"-\"}}</td>\n                    <td>{{user.phone_number ? (user.phone_number | mask: '(000) 000-0000') : \"-\"}}</td>\n                    <td>\n                      <div class=\"d-flex align-items-center justify-content-center\">\n                        <a class=\"text-primary mx-2\" [routerLink]=\"['/warehouse-user/view']\"\n                          [queryParams]='{id: user?.id}'><i class=\"fa fa-eye\"></i></a>\n                        <a class=\"text-dark mx-2\" [routerLink]=\"['/warehouse-user/edit']\"\n                          [queryParams]='{id: user?.id}'><i class=\"fa fa-pencil\"></i></a>\n                        <a class=\"text-danger mx-2\" href=\"javascript:void(0)\"\n                          (click)=\"deleteModal.show();saveId(user?.id);\"><i class=\"far fa-trash-alt\"></i></a>\n                      </div>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"userList?.length == 0\">\n                    <td colspan=\"4\" class=\"no-data-available\">No Data Found !</td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n          </perfect-scrollbar>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- delete modal -->\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n        <h2 class=\"font-weight-bold mb-4 text-primary\">Delete</h2>\n        <p class=\"mb-0\">Are You Sure You Want To Delete ?</p>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUser()\">Delete</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div>\n</div><!-- /.modal -->\n");

/***/ }),

/***/ "./src/app/views/warehouse-user/add/add.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/warehouse-user/add/add.component.ts ***!
  \***********************************************************/
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
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/validators/Validations */ "./src/app/shared/validators/Validations.ts");








var AddComponent = /** @class */ (function () {
    function AddComponent(titleService, userService, toastr, router, route) {
        this.titleService = titleService;
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.passmessage = "";
    }
    AddComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Warehouse Add");
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            full_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].email_pattern)
            ]),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            // country: new FormControl('', [
            //   Validators.required
            // ]),
            zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
            ]),
            cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
            ])
            //username: new FormControl('', [
            //Validators.required
            //])
        });
    };
    AddComponent.prototype.checkPassword = function () {
        var password = this.addForm.controls.password.value;
        var cpassword = this.addForm.controls.cpassword.value;
        if (password != cpassword && this.addForm.valid == true) {
            this.passmessage = "Password and confirm password must be same.";
            return true;
        }
        else {
            this.passmessage = "";
            return false;
        }
    };
    AddComponent.prototype.submitAddForm = function () {
        var _this = this;
        this.submitted = true;
        var formData = new FormData();
        formData.append("full_name", this.addForm.controls.full_name.value);
        formData.append("email", this.addForm.controls.email.value);
        formData.append("phone_number", this.addForm.controls.phone_number.value);
        formData.append("address", this.addForm.controls.address.value);
        formData.append("city", this.addForm.controls.city.value);
        formData.append("state", this.addForm.controls.state.value);
        //formData.append("country", this.addForm.controls.country.value);
        formData.append("zipcode", this.addForm.controls.zipcode.value);
        formData.append("password", this.addForm.controls.password.value);
        formData.append("confirm_password", this.addForm.controls.cpassword.value);
        formData.append("user_type", "WAREHOUSE");
        if (this.addForm.valid) {
            this.userService.register(formData).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.router.navigate(['warehouse-user']).then(function () {
                        _this.toastr.success('', "Warehouse user added successfully!");
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
    AddComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/warehouse-user/add/add.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/views/warehouse-user/edit/edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/warehouse-user/edit/edit.component.ts ***!
  \*************************************************************/
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
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/validators/Validations */ "./src/app/shared/validators/Validations.ts");








var EditComponent = /** @class */ (function () {
    function EditComponent(titleService, userService, toastr, router, route) {
        this.titleService = titleService;
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.passmessage = "";
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Warehouse Edit");
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            full_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_shared_validators_Validations__WEBPACK_IMPORTED_MODULE_7__["Validations"].email_pattern)
            ]),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            // country: new FormControl('', [
            //   Validators.required
            // ]),
            zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
            ]),
            cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
            ])
            //username: new FormControl('', [
            //Validators.required
            //])
        });
        this.route.queryParams.subscribe(function (param) {
            _this.userId = param.id;
        });
        this.getUserInfo();
    };
    EditComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userService.getUser(this.userId).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var data = resData.data;
                _this.editForm.patchValue({
                    full_name: data.full_name,
                    email: data.email,
                    phone_number: data.phone_number,
                    address: data.address,
                    city: data.city,
                    state: data.state,
                    //country : data.country,
                    zipcode: data.zipcode,
                    password: data.user_passowrd,
                    cpassword: data.user_passowrd
                });
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    EditComponent.prototype.checkPassword = function () {
        var password = this.editForm.controls.password.value;
        var cpassword = this.editForm.controls.cpassword.value;
        if (password != cpassword && this.editForm.valid == true) {
            this.passmessage = "Password and confirm password must be same.";
            return true;
        }
        else {
            this.passmessage = "";
            return false;
        }
    };
    EditComponent.prototype.submitEditForm = function () {
        var _this = this;
        this.submitted = true;
        this.editForm.markAllAsTouched();
        if (this.editForm.controls.password.value == this.editForm.controls.cpassword.value) {
            var formData = new FormData();
            formData.append("full_name", this.editForm.controls.full_name.value);
            formData.append("email", this.editForm.controls.email.value);
            formData.append("phone_number", this.editForm.controls.phone_number.value);
            formData.append("address", this.editForm.controls.address.value);
            formData.append("city", this.editForm.controls.city.value);
            formData.append("state", this.editForm.controls.state.value);
            //formData.append("country", this.editForm.controls.country.value);
            formData.append("zipcode", this.editForm.controls.zipcode.value);
            formData.append("password", this.editForm.controls.password.value);
            formData.append("confirm_password", this.editForm.controls.cpassword.value);
            formData.append("user_type", "WAREHOUSE");
            if (this.editForm.valid) {
                this.userService.editprofile(formData, this.userId).subscribe(function (response) {
                    var resData = JSON.parse(JSON.stringify(response));
                    if (resData.status_code == 200) {
                        _this.router.navigate(['warehouse-user']).then(function () {
                            _this.toastr.success('', "Warehouse user updated successfully!");
                        });
                    }
                    else {
                        _this.toastr.error('', resData.message);
                    }
                }, function (err) {
                    _this.toastr.error('', err.error.message);
                });
            }
        }
        else {
            this.passmessage = "Password and confirm password must be same.";
        }
    };
    EditComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    EditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/warehouse-user/edit/edit.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/views/warehouse-user/view/view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/warehouse-user/view/view.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ViewComponent = /** @class */ (function () {
    function ViewComponent(titleService, toastr, userService, router, route) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Warehouse View");
        this.getUserInfo();
    };
    ViewComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (param) {
            _this.userId = param.id;
        });
        this.userService.getUser(this.userId).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.userData = resData.data;
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
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/warehouse-user/view/view.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/views/warehouse-user/warehouse-user-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/warehouse-user/warehouse-user-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: WarehouseUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseUserRoutingModule", function() { return WarehouseUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _warehouse_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse-user.component */ "./src/app/views/warehouse-user/warehouse-user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/view.component */ "./src/app/views/warehouse-user/view/view.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/views/warehouse-user/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add/add.component */ "./src/app/views/warehouse-user/add/add.component.ts");







var routes = [
    {
        path: '',
        data: {
            title: 'Warehouse Users'
        },
        children: [
            {
                path: '',
                component: _warehouse_user_component__WEBPACK_IMPORTED_MODULE_2__["WarehouseUserComponent"],
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
        ]
    }
];
var WarehouseUserRoutingModule = /** @class */ (function () {
    function WarehouseUserRoutingModule() {
    }
    WarehouseUserRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], WarehouseUserRoutingModule);
    return WarehouseUserRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/warehouse-user/warehouse-user.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/warehouse-user/warehouse-user.component.ts ***!
  \******************************************************************/
/*! exports provided: WarehouseUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseUserComponent", function() { return WarehouseUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");









var WarehouseUserComponent = /** @class */ (function () {
    function WarehouseUserComponent(titleService, toastr, userService, commonService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.userService = userService;
        this.commonService = commonService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    WarehouseUserComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Warehouse User");
        this.getUserList();
    };
    WarehouseUserComponent.prototype.getUserList = function () {
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
                dataTablesParameters.search_params = dataTablesParameters.search.value;
                // sorting
                dataTablesParameters.order[0].column == 0 ? dataTablesParameters.full_name = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("full_name") : ("-full_name") : "";
                dataTablesParameters.order[0].column == 1 ? dataTablesParameters.email = (dataTablesParameters.order[0].column == 1 && dataTablesParameters.order[0].dir == "asc") ? ("email") : ("-email") : "";
                dataTablesParameters.order[0].column == 2 ? dataTablesParameters.email = (dataTablesParameters.order[0].column == 2 && dataTablesParameters.order[0].dir == "asc") ? ("phone_number") : ("-phone_number") : "";
                _this.datatbaleData = dataTablesParameters;
                _this.userService
                    .warehouseUserList(dataTablesParameters)
                    .subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.userList = resData.data;
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
                { data: 'full_name', searchable: true, orderable: true },
                { data: 'email', searchable: true, orderable: true },
                { data: 'phone_number', searchable: true, orderable: true },
                { data: 'action', searchable: false, orderable: false }
            ]
        };
    };
    WarehouseUserComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    WarehouseUserComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    WarehouseUserComponent.prototype.saveId = function (userId) {
        this.userId = userId;
    };
    WarehouseUserComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService
            .deleteuser(this.userId)
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
    WarehouseUserComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    WarehouseUserComponent.prototype.exportType = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.userService
            .warehouseUserList(this.datatbaleData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                    'Full Name': x.full_name || "-",
                    'Email': x.email || "-",
                    'Phone Number': x.phone_number || "-"
                }); });
                if (type == 'pdf') {
                    if (onlyNameAndSymbolArr.length > 0) {
                        var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                        var values = onlyNameAndSymbolArr.map(function (element) { return Object.values(element); });
                        _this.commonService.exportArrayPDF(keys, values, 'warehouseUserList');
                    }
                    else {
                        _this.toastr.error('', "No Data Found !");
                        $("#myDropdown").toggle();
                    }
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, 'warehouseUserList');
                }
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    WarehouseUserComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], WarehouseUserComponent.prototype, "deleteModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], WarehouseUserComponent.prototype, "dtElement", void 0);
    WarehouseUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-warehouse-user',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./warehouse-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/warehouse-user/warehouse-user.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
    ], WarehouseUserComponent);
    return WarehouseUserComponent;
}());



/***/ }),

/***/ "./src/app/views/warehouse-user/warehouse-user.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/warehouse-user/warehouse-user.module.ts ***!
  \***************************************************************/
/*! exports provided: WarehouseUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseUserModule", function() { return WarehouseUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _warehouse_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./warehouse-user.component */ "./src/app/views/warehouse-user/warehouse-user.component.ts");
/* harmony import */ var _warehouse_user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warehouse-user-routing.module */ "./src/app/views/warehouse-user/warehouse-user-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view.component */ "./src/app/views/warehouse-user/view/view.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/views/warehouse-user/edit/edit.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add/add.component */ "./src/app/views/warehouse-user/add/add.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");














var maskConfig = {
    validation: false,
};
var WarehouseUserModule = /** @class */ (function () {
    function WarehouseUserModule() {
    }
    WarehouseUserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_warehouse_user_component__WEBPACK_IMPORTED_MODULE_3__["WarehouseUserComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_9__["AddComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _warehouse_user_routing_module__WEBPACK_IMPORTED_MODULE_4__["WarehouseUserRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_13__["NgxMaskModule"].forRoot(maskConfig)
            ],
            providers: [
                _shared_services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]
            ]
        })
    ], WarehouseUserModule);
    return WarehouseUserModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-warehouse-user-warehouse-user-module.js.map