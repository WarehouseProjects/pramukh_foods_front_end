(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-inventory-management-inventory-management-module"],{

/***/ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js ***!
  \*******************************************************************************/
/*! exports provided: MultiSelectComponent, NgMultiSelectDropDownModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function() { return MultiSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMultiSelectDropDownModule", function() { return NgMultiSelectDropDownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ListFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ListItem = /** @class */ (function () {
    function ListItem(source) {
        if (typeof source === 'string' || typeof source === 'number') {
            this.id = this.text = source;
            this.isDisabled = false;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
            this.isDisabled = source.isDisabled;
        }
    }
    return ListItem;
}());

var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe() {
    }
    ListFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    ListFilterPipe.prototype.applyFilter = function (item, filter) {
        if (typeof item.text === 'string' && typeof filter.text === 'string') {
            return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
        }
        else {
            return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
        }
    };
    ListFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'multiSelectFilter',
            pure: false
        })
    ], ListFilterPipe);
    return ListFilterPipe;
}());

var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MultiSelectComponent; }),
    multi: true
};
var noop = function () { };
var ɵ0 = noop;
var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent(listFilterPipe) {
        this.listFilterPipe = listFilterPipe;
        this._data = [];
        this.selectedItems = [];
        this.isDropdownOpen = true;
        this._placeholder = "Select";
        this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object
        this._sourceDataFields = []; // store source data fields names
        this.filter = new ListItem(this.data);
        this.defaultSettings = {
            singleSelection: false,
            idField: "id",
            textField: "text",
            disabledField: "isDisabled",
            enableCheckAll: true,
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: "Search",
            noDataAvailablePlaceholderText: "No data available",
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false,
            allowRemoteDataSearch: false
        };
        this.disabled = false;
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(MultiSelectComponent.prototype, "placeholder", {
        set: function (value) {
            if (value) {
                this._placeholder = value;
            }
            else {
                this._placeholder = "Select";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "settings", {
        set: function (value) {
            if (value) {
                this._settings = Object.assign(this.defaultSettings, value);
            }
            else {
                this._settings = Object.assign(this.defaultSettings);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "data", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._data = [];
            }
            else {
                var firstItem = value[0];
                this._sourceDataType = typeof firstItem;
                this._sourceDataFields = this.getFields(firstItem);
                this._data = value.map(function (item) {
                    return typeof item === "string" || typeof item === "number"
                        ? new ListItem(item)
                        : new ListItem({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField],
                            isDisabled: item[_this._settings.disabledField]
                        });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    MultiSelectComponent.prototype.onFilterTextChange = function ($event) {
        this.onFilterChange.emit($event);
    };
    MultiSelectComponent.prototype.onItemClick = function ($event, item) {
        if (this.disabled || item.isDisabled) {
            return false;
        }
        var found = this.isSelected(item);
        var allowAdd = this._settings.limitSelection === -1 || (this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection);
        if (!found) {
            if (allowAdd) {
                this.addSelected(item);
            }
        }
        else {
            this.removeSelected(item);
        }
        if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
            this.closeDropdown();
        }
    };
    MultiSelectComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (value !== undefined && value !== null && value.length > 0) {
            if (this._settings.singleSelection) {
                try {
                    if (value.length >= 1) {
                        var firstItem = value[0];
                        this.selectedItems = [
                            typeof firstItem === "string" || typeof firstItem === "number"
                                ? new ListItem(firstItem)
                                : new ListItem({
                                    id: firstItem[this._settings.idField],
                                    text: firstItem[this._settings.textField],
                                    isDisabled: firstItem[this._settings.disabledField]
                                })
                        ];
                    }
                }
                catch (e) {
                    // console.error(e.body.msg);
                }
            }
            else {
                var _data = value.map(function (item) {
                    return typeof item === "string" || typeof item === "number"
                        ? new ListItem(item)
                        : new ListItem({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField],
                            isDisabled: item[_this._settings.disabledField]
                        });
                });
                if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                }
                else {
                    this.selectedItems = _data;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
        this.onChangeCallback(value);
    };
    // From ControlValueAccessor interface
    MultiSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    MultiSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    // Set touched on blur
    MultiSelectComponent.prototype.onTouched = function () {
        this.closeDropdown();
        this.onTouchedCallback();
    };
    MultiSelectComponent.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    MultiSelectComponent.prototype.isSelected = function (clickedItem) {
        var found = false;
        this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    };
    MultiSelectComponent.prototype.isLimitSelectionReached = function () {
        return this._settings.limitSelection === this.selectedItems.length;
    };
    MultiSelectComponent.prototype.isAllItemsSelected = function () {
        // get disabld item count
        var filteredItems = this.listFilterPipe.transform(this._data, this.filter);
        var itemDisabledCount = filteredItems.filter(function (item) { return item.isDisabled; }).length;
        // take disabled items into consideration when checking
        if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
            return false;
        }
        return filteredItems.length === this.selectedItems.length + itemDisabledCount;
    };
    MultiSelectComponent.prototype.showButton = function () {
        if (!this._settings.singleSelection) {
            if (this._settings.limitSelection > 0) {
                return false;
            }
            // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
            return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        }
        else {
            // should be disabled in single selection mode
            return false;
        }
    };
    MultiSelectComponent.prototype.itemShowRemaining = function () {
        return this.selectedItems.length - this._settings.itemsShowLimit;
    };
    MultiSelectComponent.prototype.addSelected = function (item) {
        if (this._settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.push(item);
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(item));
    };
    MultiSelectComponent.prototype.removeSelected = function (itemSel) {
        var _this = this;
        this.selectedItems.forEach(function (item) {
            if (itemSel.id === item.id) {
                _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(itemSel));
    };
    MultiSelectComponent.prototype.emittedValue = function (val) {
        var _this = this;
        var selected = [];
        if (Array.isArray(val)) {
            val.map(function (item) {
                selected.push(_this.objectify(item));
            });
        }
        else {
            if (val) {
                return this.objectify(val);
            }
        }
        return selected;
    };
    MultiSelectComponent.prototype.objectify = function (val) {
        if (this._sourceDataType === 'object') {
            var obj = {};
            obj[this._settings.idField] = val.id;
            obj[this._settings.textField] = val.text;
            if (this._sourceDataFields.includes(this._settings.disabledField)) {
                obj[this._settings.disabledField] = val.isDisabled;
            }
            return obj;
        }
        if (this._sourceDataType === 'number') {
            return Number(val.id);
        }
        else {
            return val.text;
        }
    };
    MultiSelectComponent.prototype.toggleDropdown = function (evt) {
        evt.preventDefault();
        if (this.disabled && this._settings.singleSelection) {
            return;
        }
        this._settings.defaultOpen = !this._settings.defaultOpen;
        if (!this._settings.defaultOpen) {
            this.onDropDownClose.emit();
        }
    };
    MultiSelectComponent.prototype.closeDropdown = function () {
        this._settings.defaultOpen = false;
        // clear search text
        if (this._settings.clearSearchFilter) {
            this.filter.text = "";
        }
        this.onDropDownClose.emit();
    };
    MultiSelectComponent.prototype.toggleSelectAll = function () {
        if (this.disabled) {
            return false;
        }
        if (!this.isAllItemsSelected()) {
            // filter out disabled item first before slicing
            this.selectedItems = this.listFilterPipe.transform(this._data, this.filter).filter(function (item) { return !item.isDisabled; }).slice();
            this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        else {
            this.selectedItems = [];
            this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
    };
    MultiSelectComponent.prototype.getFields = function (inputData) {
        var fields = [];
        if (typeof inputData !== "object") {
            return fields;
        }
        // tslint:disable-next-line:forin
        for (var prop in inputData) {
            fields.push(prop);
        }
        return fields;
    };
    MultiSelectComponent.ctorParameters = function () { return [
        { type: ListFilterPipe }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MultiSelectComponent.prototype, "placeholder", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MultiSelectComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MultiSelectComponent.prototype, "settings", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MultiSelectComponent.prototype, "data", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onFilterChange")
    ], MultiSelectComponent.prototype, "onFilterChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDropDownClose")
    ], MultiSelectComponent.prototype, "onDropDownClose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelect")
    ], MultiSelectComponent.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelect")
    ], MultiSelectComponent.prototype, "onDeSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelectAll")
    ], MultiSelectComponent.prototype, "onSelectAll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelectAll")
    ], MultiSelectComponent.prototype, "onDeSelectAll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("blur")
    ], MultiSelectComponent.prototype, "onTouched", null);
    MultiSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ng-multiselect-dropdown",
            template: "<div tabindex=\"0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\n  <div [class.disabled]=\"disabled\">\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\n      <span class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\n        <span>{{item.text}}</span>\n        <a style=\"padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\n      </span>\n      <span [ngClass]=\"{ 'dropdown-multiselect--active': _settings.defaultOpen }\" style=\"float:right !important;padding-right:4px\">\n        <span style=\"padding-right: 15px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\n        <span class=\"dropdown-multiselect__caret\"></span>\n      </span>\n    </span>\n  </div>\n  <div class=\"dropdown-list\" [hidden]=\"!_settings.defaultOpen\">\n    <ul class=\"item1\">\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\n      </li>\n      <li class=\"filter-textbox\" *ngIf=\"(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter\">\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\n      </li>\n    </ul>\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\n      <li *ngFor=\"let item of _data | multiSelectFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\n        <input type=\"checkbox\" [attr.aria-label]=\"item.text\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled\" />\n        <div>{{item.text}}</div>\n      </li>\n      <li class='no-data' *ngIf=\"_data.length == 0 && !_settings.allowRemoteDataSearch\">\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\n      </li>\n    </ul>\n  </div>\n</div>\n",
            providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left;display:flex;max-width:100px}.multiselect-dropdown .dropdown-btn .selected-item span{overflow:hidden;text-overflow:ellipsis}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0;border-color:#999 transparent;content:\"\"}.multiselect-dropdown .dropdown-btn .dropdown-multiselect--active .dropdown-multiselect__caret{transform:rotateZ(180deg)}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox:hover{background-color:#e4e3e3}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"]
        })
    ], MultiSelectComponent);
    return MultiSelectComponent;
}());

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target'])
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[clickOutside]'
        })
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());

var NgMultiSelectDropDownModule = /** @class */ (function () {
    function NgMultiSelectDropDownModule() {
    }
    NgMultiSelectDropDownModule_1 = NgMultiSelectDropDownModule;
    NgMultiSelectDropDownModule.forRoot = function () {
        return {
            ngModule: NgMultiSelectDropDownModule_1
        };
    };
    var NgMultiSelectDropDownModule_1;
    NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
            providers: [ListFilterPipe],
            exports: [MultiSelectComponent]
        })
    ], NgMultiSelectDropDownModule);
    return NgMultiSelectDropDownModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-multiselect-dropdown.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory-management/add-inventory/add-inventory.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory-management/add-inventory/add-inventory.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-12\">\n            <form class=\"card\" [formGroup]=\"addForm\" (ngSubmit)=\"submitAddForm()\" #formDir=\"ngForm\" novalidate>\n                <div class=\"card-header\">Product Add</div>\n                <div class=\"card-body p-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Product Name :</label>\n                                <input formControlName=\"name\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Product Name\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && addForm.controls.name.invalid) || addForm.controls.name.touched\">\n                                    <div *ngIf=\"addForm.hasError('required','name')\" class=\"err-msg\">Product name is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Select Product Category :</label>\n                                        <select [(ngModel)]=\"selectedcategory\" formControlName=\"category\"\n                                            class=\"form-control\">\n                                            <option value=\"\">Select Product Category</option>\n                                            <option *ngFor=\"let category of categoryData\" [value]=\"category.id\">\n                                                {{category.name}}</option>\n                                        </select>\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.category.invalid) || addForm.controls.category.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','category')\" class=\"err-msg\">Product\n                                                category is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Select Vendor :</label>\n                                        <div class=\"form-group\">\n                                            <select [(ngModel)]=\"selectedVendor\" formControlName=\"vendor\"\n                                                class=\"form-control\">\n                                                <option value=\"\">Select Vendor</option>\n                                                <option *ngFor=\"let vendor of vendorData\" [value]=\"vendor.id\">\n                                                    {{vendor.name}}</option>\n                                            </select>\n                                            <div class=\"error\"\n                                                *ngIf=\"(submitted && addForm.controls.vendor.invalid) || addForm.controls.vendor.touched\">\n                                                <div *ngIf=\"addForm.hasError('required','vendor')\" class=\"err-msg\">\n                                                    Vendor is required.\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Select Pack Size :</label>\n                                <select [(ngModel)]=\"selectedPackSize\" formControlName=\"pack_size\" class=\"form-control\">\n                                    <option value=\"\">Select Pack Size</option>\n                                    <option *ngFor=\"let packSize of packSizeData\" [value]=\"packSize.id\">{{packSize.size}}</option>\n                                </select>\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.pack_size.invalid) || addForm.controls.pack_size.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','pack_size')\" class=\"err-msg\">Pack size is required.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div> -->\n                        <div class=\"border-bottom p-2 mb-3 w-100\"></div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Quantity On Hand :</label>\n                                        <input formControlName=\"available_quantity\" class=\"form-control\" id=\"name\"\n                                            type=\"number\" placeholder=\"Quantity On Hand\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.available_quantity.invalid) || addForm.controls.available_quantity.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','available_quantity')\"\n                                                class=\"err-msg\">Quantity on hand is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">As of Date - Default Today's Date :</label>\n                                        <input [(ngModel)]=\"selectedDate\" formControlName=\"updated_on\"\n                                            class=\"form-control\" id=\"name\" type=\"date\" placeholder=\"Enter Today's Date\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.updated_on.invalid) || addForm.controls.updated_on.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','updated_on')\" class=\"err-msg\">Date\n                                                is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Add Reorder Point of Quantity :</label>\n                                        <input formControlName=\"low_stock_qauntity\" class=\"form-control\" id=\"name\"\n                                            type=\"number\" placeholder=\"Reorder Point of Quantity\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.low_stock_qauntity.invalid) || addForm.controls.low_stock_qauntity.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','low_stock_qauntity')\"\n                                                class=\"err-msg\">Reorder point is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Warehouse Location :</label>\n                                        <input formControlName=\"location\" class=\"form-control\" id=\"name\" type=\"text\"\n                                            placeholder=\"Warehouse Location\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.location.invalid) || addForm.controls.location.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','location')\" class=\"err-msg\">\n                                                Location is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"border-bottom p-2 mb-3 w-100\"></div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Sales Price :</label>\n                                        <input formControlName=\"sale_price\" class=\"form-control\" type=\"number\"\n                                            placeholder=\"Sales Price\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.sale_price.invalid) || addForm.controls.sale_price.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','sale_price')\" class=\"err-msg\">Sale\n                                                price is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Purchase Price:</label>\n                                        <input formControlName=\"purchase_cost\" class=\"form-control\" type=\"number\"\n                                            placeholder=\"Purchase Price\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.purchase_cost.invalid) || addForm.controls.purchase_cost.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','purchase_cost')\" class=\"err-msg\">\n                                                Purchase Price is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Sales Description :</label>\n                                        <textarea formControlName=\"description\" class=\"form-control\"\n                                            style=\"resize:none;\" name=\"textarea-input\" rows=\"9\"\n                                            placeholder=\"Sales Description\" spellcheck=\"false\"></textarea>\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.description.invalid) || addForm.controls.description.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','description')\" class=\"err-msg\">\n                                                Sales description is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Purchase Description:</label>\n                                        <textarea formControlName=\"purchase_info\" class=\"form-control\"\n                                            style=\"resize:none;\" name=\"textarea-input\" rows=\"9\"\n                                            placeholder=\"Purchase Description\" spellcheck=\"false\"></textarea>\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.purchase_info.invalid) || addForm.controls.purchase_info.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','purchase_info')\" class=\"err-msg\">\n                                                Purchase description is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"border-bottom p-2 mb-3 w-100\"></div>\n                        <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Upload Product Barcode :</label>\n                                <input (change)=\"onBarcodeFileChange($event)\" formControlName=\"barcode_image\" class=\"form-control\" type=\"file\" placeholder=\"Enter Product Barcode \">\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && addForm.controls.barcode_image.invalid) || addForm.controls.barcode_image.touched\">\n                                          <div *ngIf=\"addForm.hasError('required','barcode_image')\" class=\"err-msg\">Barcode image is required.\n                                          </div>\n                                          <div *ngIf=\"!addForm.hasError('required','barcode_image') && addForm.controls.barcode_image.invalid\" class=\"err-msg\">\n                                            Please upload valid barcode image.\n                                          </div>\n                                        </div>\n                                        <div style=\"margin: 11px;\" class=\"mb-3\" *ngIf=\"barcode_imageUrl\"><img src=\"{{barcode_imageUrl}}\" height=\"150\" width=\"200\"></div>\n                            </div>\n                        </div> -->\n\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Product Barcode :</label>\n                                        <input formControlName=\"barcode\" class=\"form-control\" type=\"text\"\n                                            placeholder=\"Barcode\" (change)=\"changeBarcodeValue()\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.barcode.invalid) || addForm.controls.barcode.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','barcode')\" class=\"err-msg\">Barcode is\n                                                required.\n                                            </div>\n                                            <div *ngIf=\"!addForm.hasError('required','barcode') && addForm.controls.barcode.invalid\"\n                                                class=\"err-msg\">\n                                                Please enter valid barcode.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Item Number :</label>\n                                        <input formControlName=\"item_number\" class=\"form-control\" type=\"text\"\n                                        placeholder=\"Item Number\">\n                                    <div class=\"error\"\n                                        *ngIf=\"(submitted && addForm.controls.item_number.invalid) || addForm.controls.item_number.touched\">\n                                        <div *ngIf=\"addForm.hasError('required','item_number')\" class=\"err-msg\">Item number\n                                            is required.\n                                        </div>\n                                        <div *ngIf=\"!addForm.hasError('required','item_number') && addForm.controls.item_number.invalid\"\n                                            class=\"err-msg\">\n                                            Please enter valid item number.\n                                        </div>\n                                    </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Weight :</label>\n                                <input formControlName=\"weight\" class=\"form-control\" type=\"text\"\n                                    placeholder=\"Weight\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && addForm.controls.weight.invalid) || addForm.controls.weight.touched\">\n                                    <div *ngIf=\"addForm.hasError('required','weight')\" class=\"err-msg\">Weight is\n                                        required.\n                                    </div>\n                                    <div *ngIf=\"!addForm.hasError('required','weight') && addForm.controls.weight.invalid\"\n                                        class=\"err-msg\">\n                                        Please enter valid weight.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row px-3\">\n                            <div class=\"col-sm-12 mt-2\">\n                                <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">ADD</button>\n                                <button class=\"btn btn-md btn-danger mr-3\" type=\"reset\"\n                                    (click)=\"addForm.reset()\">Reset</button>\n                                <button class=\"btn btn-md btn-secondary\" type=\"button\"\n                                    [routerLink]=\"['/inventory-management']\" [queryParams]='{vendor: filterVendor, category: filterCategory, product: filterProduct, stock: filterQuantity, limit: tableLimit, firstTime: true}'>Cancel</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory-management/adjust-quantity/adjust-quantity.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory-management/adjust-quantity/adjust-quantity.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-6\">\n            <form class=\"card\" [formGroup]=\"addForm\" (ngSubmit)=\"submitAddForm()\" #formDir=\"ngForm\" novalidate>\n                <div class=\"card-header\">Adjust Quantity</div>\n                <div class=\"card-body p-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Date :</label>\n                                <input formControlName=\"date\" type=\"text\" placeholder=\"Date\" class=\"form-control\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\"\n                                    bsDatepicker>\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && addForm.controls.date.invalid) || addForm.controls.date.touched\">\n                                    <div *ngIf=\"addForm.hasError('required','date')\" class=\"err-msg\">Date is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Product Name :</label>\n                                <input formControlName=\"name\" class=\"form-control\" type=\"text\" readonly\n                                    value=\"Ramdev Masala Garam Masala 100 Grams\" placeholder=\"Enter Product Name\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && addForm.controls.name.invalid) || addForm.controls.name.touched\">\n                                    <div *ngIf=\"addForm.hasError('required','name')\" class=\"err-msg\">Product name is\n                                        required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Quantity On Hand :</label>\n                                <input formControlName=\"available_quantity\" class=\"form-control\" type=\"number\"\n                                    value=\"10\" readonly placeholder=\"Enter Quantity On Hand\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && addForm.controls.available_quantity.invalid) || addForm.controls.available_quantity.touched\">\n                                    <div *ngIf=\"addForm.hasError('required','available_quantity')\" class=\"err-msg\">\n                                        Available quantity is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">New Quantity:</label>\n                                        <input formControlName=\"quantity\" class=\"form-control\" type=\"number\"\n                                            placeholder=\"Enter New Quantity\" (keyup)=\"chnageQunatity()\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.quantity.invalid) || addForm.controls.quantity.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','quantity')\" class=\"err-msg\">\n                                                Quantity is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">New Purchase Price:</label>\n                                        <input formControlName=\"new_purchase_price\" class=\"form-control\" type=\"number\"\n                                            placeholder=\"Enter New Purchase Price\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.new_price.invalid) || addForm.controls.new_price.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','new_price')\" class=\"err-msg\">Sale\n                                                price is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">New Sales Price:</label>\n                                        <input formControlName=\"new_price\" class=\"form-control\" type=\"number\"\n                                            placeholder=\"Enter New Sales Price\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.new_price.invalid) || addForm.controls.new_price.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','new_price')\" class=\"err-msg\">Sale\n                                                price is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Total Quantity :</label>\n                                <input [(ngModel)]=\"totalQunatity\" formControlName=\"total\" class=\"form-control\"\n                                    type=\"number\" readonly placeholder=\"Enter Total Quantity\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && addForm.controls.total.invalid) || addForm.controls.total.touched\">\n                                    <div *ngIf=\"addForm.hasError('required','total')\" class=\"err-msg\">Total is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Old Purchase Price :</label>\n                                        <input formControlName=\"purchase_price\" class=\"form-control\" type=\"number\"\n                                            placeholder=\"Enter Purchase Price\" readonly>\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.purchase_price.invalid) || addForm.controls.purchase_price.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','purchase_price')\" class=\"err-msg\">\n                                                Purchase price is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Old Sales Price :</label>\n                                        <input formControlName=\"sale_price\" class=\"form-control\" type=\"number\"\n                                            placeholder=\"Enter Sales Price\" readonly>\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && addForm.controls.sale_price.invalid) || addForm.controls.sale_price.touched\">\n                                            <div *ngIf=\"addForm.hasError('required','sale_price')\" class=\"err-msg\">\n                                                Sales price is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Note :</label>\n                                <!-- <input [(ngModel)]=\"totalQunatity\" formControlName=\"total\" class=\"form-control\"\n                                    type=\"number\" readonly placeholder=\"Enter Note\"> -->\n                                <textarea rows=\"4\" formControlName=\"note\" class=\"form-control\"\n                                    placeholder=\"Enter Note\"></textarea>\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && addForm.controls.total.invalid) || addForm.controls.total.touched\">\n                                    <div *ngIf=\"addForm.hasError('required','total')\" class=\"err-msg\">Total is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 mt-2\">\n                            <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Save</button>\n                            <button *ngIf=\"redirect == 0\" class=\"btn btn-md btn-secondary\" type=\"button\"\n                                [routerLink]=\"['/inventory-management/edit-inventory']\"\n                                [queryParams]='{id: productId,vendor: filterVendor, category: filterCategory, product: filterProduct, stock: filterQuantity, limit: tableLimit, firstTime: true, search: searchValue}'>Cancel</button>\n                            <button *ngIf=\"redirect == 2\" class=\"btn btn-md btn-secondary\" type=\"button\"\n                                [routerLink]=\"['/inventory-management']\"\n                                [queryParams]='{vendor: filterVendor, category: filterCategory, product: filterProduct, stock: filterQuantity, limit: tableLimit, firstTime: true, search: searchValue}'>Cancel</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory-management/edit-invertory/edit-invertory.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory-management/edit-invertory/edit-invertory.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-sm-12\">\n            <form class=\"card\" [formGroup]=\"editForm\" (ngSubmit)=\"submitEditForm()\" #formDir=\"ngForm\" novalidate>\n                <div class=\"card-header d-flex justify-content-between align-items-center\">Product Edit\n                    <div class=\"pull-right\">\n                        <a [routerLink]=\"['/inventory-management']\"\n                            [queryParams]='{vendor: filterVendor, category: filterCategory, product: filterProduct, stock: filterQuantity, limit: tableLimit, firstTime: true, search: searchValue}'\n                            class=\"btn btn-md btn-secondary\" type=\"button\">Back</a>\n                    </div>\n                </div>\n                <div class=\"card-body p-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Product Name :</label>\n                                <input formControlName=\"name\" class=\"form-control\" id=\"name\" type=\"text\"\n                                    placeholder=\"Enter Product Name\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.name.invalid) || editForm.controls.name.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','name')\" class=\"err-msg\">Product name is\n                                        required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Product Status :</label>\n                                <!-- <select class=\"form-control\" formControlName=\"status\" disabled>\n                                    <option>Active</option>\n                                    <option>Inactive</option>\n                                </select> -->\n                                <input formControlName=\"status\" class=\"form-control\" type=\"text\"\n                                    placeholder=\"Product Status\" readonly>\n                                <!-- <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.name.invalid) || editForm.controls.name.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','name')\" class=\"err-msg\">Product name is\n                                        required.\n                                    </div>\n                                </div> -->\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Select Product Category :</label>\n                                        <select [(ngModel)]=\"selectedcategory\" formControlName=\"category\"\n                                            class=\"form-control\">\n                                            <option value=\"\">Select Product Category</option>\n                                            <option *ngFor=\"let category of categoryData\" [value]=\"category.id\">\n                                                {{category.name}}</option>\n                                        </select>\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && editForm.controls.category.invalid) || editForm.controls.category.touched\">\n                                            <div *ngIf=\"editForm.hasError('required','category')\" class=\"err-msg\">\n                                                Product category is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Select Vendor :</label>\n                                        <div class=\"form-group\">\n                                            <select [(ngModel)]=\"selectedVendor\" formControlName=\"vendor\"\n                                                class=\"form-control\">\n                                                <option value=\"\">Select Vendor</option>\n                                                <option *ngFor=\"let vendor of vendorData\" [value]=\"vendor.id\">\n                                                    {{vendor.name}}</option>\n                                            </select>\n                                            <div class=\"error\"\n                                                *ngIf=\"(submitted && editForm.controls.vendor.invalid) || editForm.controls.vendor.touched\">\n                                                <div *ngIf=\"editForm.hasError('required','vendor')\" class=\"err-msg\">\n                                                    Vendor is required.\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Select Pack Size :</label>\n                                <select [(ngModel)]=\"selectedPackSize\" formControlName=\"pack_size\" class=\"form-control\">\n                                    <option value=\"\">Select Pack Size</option>\n                                    <option *ngFor=\"let packSize of packSizeData\" [value]=\"packSize.id\">{{packSize.size}}</option>\n                                </select>\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && editForm.controls.pack_size.invalid) || editForm.controls.pack_size.touched\">\n                                          <div *ngIf=\"editForm.hasError('required','pack_size')\" class=\"err-msg\">Pack size is required.\n                                          </div>\n                                        </div>\n                            </div>\n                        </div> -->\n                        <div class=\"border-bottom p-2 mb-3 w-100\"></div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Quantity On Hand :</label>\n                                        <input formControlName=\"available_quantity\" class=\"form-control\" id=\"name\"\n                                            type=\"number\" placeholder=\"Enter Quantity On Hand\" disabled>\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && editForm.controls.available_quantity.invalid) || editForm.controls.available_quantity.touched\">\n                                            <div *ngIf=\"editForm.hasError('required','available_quantity')\"\n                                                class=\"err-msg\">Quantity on hand is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">As of Date - Default Today's Date :</label>\n                                        <input [(ngModel)]=\"selectedDate\" formControlName=\"updated_on\"\n                                            class=\"form-control\" id=\"name\" type=\"date\" placeholder=\"Enter Today's Date\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && editForm.controls.updated_on.invalid) || editForm.controls.updated_on.touched\">\n                                            <div *ngIf=\"editForm.hasError('required','updated_on')\" class=\"err-msg\">Date\n                                                is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Add Reorder Point of Quantity :</label>\n                                        <input formControlName=\"low_stock_qauntity\" class=\"form-control\" id=\"name\"\n                                            type=\"number\" placeholder=\"Enter Reorder Point of Quantity\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && editForm.controls.low_stock_qauntity.invalid) || editForm.controls.low_stock_qauntity.touched\">\n                                            <div *ngIf=\"editForm.hasError('required','low_stock_qauntity')\"\n                                                class=\"err-msg\">Reorder point is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6 d-flex align-items-center pt-3\">\n                                    <button class=\"btn btn-md btn-dark mr-3\" type=\"button\"\n                                        [routerLink]=\"['/inventory-management/adjust-quantity']\"\n                                        [queryParams]='{id: productId,redirect: 0,vendor: filterVendor, category: filterCategory, product: filterProduct, stock: filterQuantity, limit: tableLimit, firstTime: true, search: searchValue}'>Adjust\n                                        Product Quantity</button>\n                                    <button class=\"btn btn-md btn-dark mr-3\" type=\"button\"\n                                        (click)=\"salespricemodal.show();\">Set Sales\n                                        Price</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Warehouse Location :</label>\n                                <input class=\"form-control\" formControlName=\"location\" id=\"name\" type=\"text\"\n                                    placeholder=\"Enter Warehouse Location\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.location.invalid) || editForm.controls.location.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','location')\" class=\"err-msg\">Location is\n                                        required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"border-bottom p-2 mb-3 w-100\"></div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Sales Price :</label>\n                                        <input formControlName=\"sale_price\" class=\"form-control\" type=\"number\"\n                                            placeholder=\"Enter Sales Price\" disabled>\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && editForm.controls.sale_price.invalid) || editForm.controls.sale_price.touched\">\n                                            <div *ngIf=\"editForm.hasError('required','sale_price')\" class=\"err-msg\">Sale\n                                                price is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Purchase Price:</label>\n                                        <input formControlName=\"purchase_cost\" class=\"form-control\" type=\"number\"\n                                            placeholder=\"Enter Purchase Price\" disabled>\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && editForm.controls.purchase_cost.invalid) || editForm.controls.purchase_cost.touched\">\n                                            <div *ngIf=\"editForm.hasError('required','purchase_cost')\" class=\"err-msg\">\n                                                Purchase Price is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Sales Description :</label>\n                                        <textarea formControlName=\"description\" class=\"form-control\"\n                                            style=\"resize:none;\" name=\"textarea-input\" rows=\"9\"\n                                            placeholder=\"Sales Description\" spellcheck=\"false\"></textarea>\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && editForm.controls.description.invalid) || editForm.controls.description.touched\">\n                                            <div *ngIf=\"editForm.hasError('required','description')\" class=\"err-msg\">\n                                                Sales description is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Purchase Description:</label>\n                                        <textarea formControlName=\"purchase_info\" class=\"form-control\"\n                                            style=\"resize:none;\" name=\"textarea-input\" rows=\"9\"\n                                            placeholder=\"Purchase Description\" spellcheck=\"false\"></textarea>\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && editForm.controls.purchase_info.invalid) || editForm.controls.purchase_info.touched\">\n                                            <div *ngIf=\"editForm.hasError('required','purchase_info')\" class=\"err-msg\">\n                                                Purchase description is required.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"border-bottom p-2 mb-3 w-100\"></div>\n                        <!-- <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Upload Product Barcode :</label>\n                                <input (change)=\"onBarcodeFileChange($event)\" formControlName=\"barcode_image\" class=\"form-control\" type=\"file\" placeholder=\"Enter Product Barcode \">\n                                <div class=\"error\"\n                                          *ngIf=\"(submitted && editForm.controls.barcode_image.invalid) || editForm.controls.barcode_image.touched\">\n                                          <div *ngIf=\"editForm.hasError('required','barcode_image')\" class=\"err-msg\">Barcode image is required.\n                                          </div>\n                                          <div *ngIf=\"!editForm.hasError('required','barcode_image') && editForm.controls.barcode_image.invalid\" class=\"err-msg\">\n                                            Please upload valid barcode image.\n                                          </div>\n                                        </div>\n                                        <div style=\"margin: 11px;\" class=\"mb-3\" *ngIf=\"barcode_imageUrl\"><img src=\"{{barcode_imageUrl}}\" height=\"150\" width=\"200\"></div>\n                            </div>\n                        </div> -->\n\n                        <div class=\"col-sm-12\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Product Barcode :</label>\n                                        <input formControlName=\"barcode\" class=\"form-control\" type=\"text\"\n                                            placeholder=\"Enter Barcode\" (change)=\"changeBarcodeValue()\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && editForm.controls.barcode.invalid) || editForm.controls.barcode.touched\">\n                                            <div *ngIf=\"editForm.hasError('required','barcode')\" class=\"err-msg\">Barcode\n                                                is\n                                                required.\n                                            </div>\n                                            <div *ngIf=\"!editForm.hasError('required','barcode') && editForm.controls.barcode.invalid\"\n                                                class=\"err-msg\">\n                                                Please enter valid barcode.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"name\" class=\"w-100\">Item Number :</label>\n                                        <input formControlName=\"item_number\" class=\"form-control\" type=\"text\"\n                                            placeholder=\"Enter Item Number\">\n                                        <div class=\"error\"\n                                            *ngIf=\"(submitted && editForm.controls.item_number.invalid) || editForm.controls.item_number.touched\">\n                                            <div *ngIf=\"editForm.hasError('required','item_number')\" class=\"err-msg\">\n                                                Item number\n                                                is required.\n                                            </div>\n                                            <div *ngIf=\"!editForm.hasError('required','item_number') && editForm.controls.item_number.invalid\"\n                                                class=\"err-msg\">\n                                                Please enter valid item number.\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label for=\"name\" class=\"w-100\">Weight :</label>\n                                <input formControlName=\"weight\" class=\"form-control\" type=\"text\"\n                                    placeholder=\"Enter Weight\">\n                                <div class=\"error\"\n                                    *ngIf=\"(submitted && editForm.controls.weight.invalid) || editForm.controls.weight.touched\">\n                                    <div *ngIf=\"editForm.hasError('required','weight')\" class=\"err-msg\">Weight is\n                                        required.\n                                    </div>\n                                    <div *ngIf=\"!editForm.hasError('required','weight') && editForm.controls.weight.invalid\"\n                                        class=\"err-msg\">\n                                        Please enter valid weight.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 mt-2\">\n                            <button class=\"btn btn-md btn-dark mr-3\" type=\"submit\">Edit</button>\n                            <button class=\"btn btn-md btn-secondary\" type=\"button\"\n                                [routerLink]=\"['/inventory-management']\"\n                                [queryParams]='{vendor: filterVendor, category: filterCategory, product: filterProduct, stock: filterQuantity, limit: tableLimit, firstTime: true, search: searchValue}'>Cancel</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n<div bsModal #salespricemodal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"Delete\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-md modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n                <h2 class=\"font-weight-bold mb-4 text-primary\">Set Sales Price</h2>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <label for=\"name\" class=\"w-100\">Old Sales Price:</label>\n                            <input [(ngModel)]=\"old_sales_price\" class=\"form-control\" type=\"number\"\n                                placeholder=\"Old Sales Price\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <label for=\"name\" class=\"w-100\">New Sales Price:</label>\n                            <input [(ngModel)]=\"new_sales_price\" class=\"form-control\" type=\"number\"\n                                placeholder=\"New Sales Price\">\n                        </div>\n                    </div>\n                    <div class=\"modal-footer justify-content-start flex-wrap w-100 pb-0\">\n                        <button type=\"button\" (click)=\"salesPriceChange()\" class=\"btn btn-dark mr-3\">Submit</button>\n                        <button type=\"button\" class=\"btn btn-secondary\"\n                            (click)=\"salespricemodal.hide();\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory-management/inventory-management.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory-management/inventory-management.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row justify-content-center product-box\">\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"card text-white bg-orange\" style=\"min-height: 80px;border:0;\">\n        <div class=\"card-body pt-4\">\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\n          </button>\n          <div class=\"text-value\" style=\"font-size: 30px;\">\n            Products At Low Stock\n            <a style=\"float: right;font-size: 40px;\" href=\"javascript:void(0)\" (click)=\"changeQuantity('low_stock')\">\n              {{dashboardData?.low_stock}}\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"card text-white bg-orange\" style=\"min-height: 80px;border:0;\">\n        <div class=\"card-body pt-4\">\n          <button type=\"button\" class=\"btn btn-transparent p-0 float-right\">\n          </button>\n          <div class=\"text-value\" style=\"font-size: 30px;\">\n            Products Out of Stock\n            <a style=\"float: right;font-size: 40px;\" href=\"javascript:void(0)\" (click)=\"changeQuantity('out_of_stock')\">\n              {{dashboardData?.product_out_of_stock}}\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <!-- <div class=\"card-header\">Product Management</div> -->\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Product Management\n          <div class=\"d-flex flex-wrap justify-content-end align-items-center\">\n            <div class=\"pull-right mr-2\">\n              <button class=\"btn btn-md btn-primary\" type=\"button\"\n                [routerLink]=\"['/inventory-management/add-inventory']\"\n                [queryParams]='{vendor: selectedVendor, category: selectedcategory, product: selectedProductIdArray, quantity: selectedQuantity, limit: tableLimit, firstTime: firstTime, search: searchValue}'>\n                <i class=\"fa fa-plus mr-2\"></i>\n                Add New Product\n              </button>\n            </div>\n            <div class=\"dropdown pull-right\">\n              <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\">\n                <i class=\"fa fa-file-export mr-2\"></i>\n                Export\n              </button>\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\"\n                  style=\"font-size: small; text-decoration: none;\">\n                  Export to XLSX\n                </a>\n                <!-- <a href=\"javascript:void(0)\"\n                        (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n                <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body p-4\">\n          <div class=\"row justify-content-start align-items-center mb-2\">\n            <div class=\"form-group col-md-4\">\n              <label>Stock availability</label>\n              <select (change)=\"rerender()\" [(ngModel)]=\"selectedQuantity\" [ngModelOptions]=\"{standalone: true}\"\n                class=\"form-control\">\n                <option value=\"\">All</option>\n                <option value=\"out_of_stock\">Out of Stock</option>\n                <option value=\"low_stock\">Low Stock</option>\n              </select>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label>Category</label>\n              <select (change)=\"rerender()\" [(ngModel)]=\"selectedcategory\" [ngModelOptions]=\"{standalone: true}\"\n                class=\"form-control\">\n                <option value=\"\">All</option>\n                <option *ngFor=\"let category of categoryData\" [value]=\"category.id\">{{category.name}}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label>Vendor</label>\n              <select (change)=\"rerender()\" [(ngModel)]=\"selectedVendor\" [ngModelOptions]=\"{standalone: true}\"\n                class=\"form-control\">\n                <option value=\"\">All</option>\n                <option *ngFor=\"let vendor of vendorData\" [value]=\"vendor.id\">{{vendor.name}}</option>\n              </select>\n            </div>\n            <!-- <div style=\"margin-top: 25px;\" class=\"form-group\">\n              <button class=\"btn btn-md btn-primary\" type=\"button\"\n                [routerLink]=\"['/inventory-management/add-inventory']\"\n                [queryParams]='{vendor: selectedVendor, category: selectedcategory, product: selectedProductIdArray, quantity: selectedQuantity, limit: tableLimit, firstTime: firstTime, search: searchValue}'><i\n                  class=\"fa fa-plus mr-2\n                        \"></i>Add New Product</button>\n            </div>\n            <div class=\"form-group dropdown\" style=\"float: right; margin-top: 25px;\">\n              <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\"><i\n                  class=\"fa fa-file-export mr-2\n                            \"></i>Export</button>\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a> -->\n            <!-- <a href=\"javascript:void(0)\"\n                                    (click)=\"commonService.exportPDF(true, 8, 'productList');rerender();\">Export to\n                                    PDF</a> -->\n            <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to\n                                    PDF</a> -->\n            <!-- </div>\n            </div> -->\n            <div class=\"form-group col-md-12\">\n              <label>Product Name</label>\n              <!-- <select (change)=\"rerender()\" [(ngModel)]=\"selectedProduct\"\n                              [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                              <option value=\"\">All</option>\n                              <option *ngFor=\"let product of productDropdownData\" [value]=\"product.name\">\n                                  {{product.name}}</option>\n                          </select> -->\n              <ng-multiselect-dropdown [placeholder]=\"'All'\" [settings]=\"dropdownSettings\" [data]=\"productDropdownData\"\n                [(ngModel)]=\"selectedProduct\" (onSelect)=\"onSelectProduct($event)\"\n                (onSelectAll)=\"onSelectAllProduct($event)\" (onDeSelect)=\"onDeSelectProduct($event)\"\n                (onDeSelectAll)=\"onDeSelectAllProduct()\">\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n          <!-- <perfect-scrollbar>\n            <div class=\"responsive-table rounded mb-4\"> -->\n          <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" style=\"width: 100%;\"\n            class=\"data row-border hover table order-table border\" id=\"excel-table\">\n            <thead>\n              <tr>\n                <th style=\"padding:12px !important;\">Status</th>\n                <th>Category</th>\n                <th>Item <br> Number</th>\n                <th style=\"min-width: 100px;\">Name</th>\n                <th>Weight</th>\n                <th style=\"min-width: 10px;\">Quantity <br> On Hand</th>\n                <th>Sales <br> Price</th>\n                <th>Avg.<br> Purchase<br> Price</th>\n                <th>Margin</th>\n                <th>Mark up</th>\n                <th id=\"last-header\">Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let product of productList;let i = index;\">\n                <td style=\"text-align: center;padding: 0;\">\n                  <i class=\"fa fa-check\" *ngIf=\"product.is_active\" style=\"color: green; cursor: pointer;\"\n                    (click)=\"productStatus = product.is_active;statusModal.show();saveId(product?.id);\"></i>\n                  <i class=\"fa fa-times\" *ngIf=\"!product.is_active\" style=\"color: red; cursor: pointer;\"\n                    (click)=\"productStatus = product.is_active; statusModal.show();saveId(product?.id);\"></i>\n                </td>\n                <td>{{product.category_name || \"-\"}}</td>\n                <td>\n                  <a class=\"text-dark mx-2\" [routerLink]=\"['/inventory-management/edit-inventory']\"\n                    [queryParams]='{id: product?.id, vendor: selectedVendor, category: selectedcategory, product: selectedProductIdArray, quantity: selectedQuantity, limit: tableLimit, firstTime: true, search: searchValue}'>\n                    <span class=\"anchor-tag\">\n                      {{product.item_no || \"-\"}}\n                    </span>\n                  </a>\n                </td>\n                <!-- <td>\n                  <a class=\"text-dark mx-2\" [routerLink]=\"['/inventory-management/edit-inventory']\"\n                    [queryParams]='{id: product?.id, vendor: selectedVendor, category: selectedcategory, product: selectedProductIdArray, quantity: selectedQuantity, limit: tableLimit, firstTime: true, search: searchValue}'>\n                    <span class=\"anchor-tag\">\n                      {{product.barcode_string || \"-\"}}\n                    </span>\n                  </a>\n                </td> -->\n                <td style=\"text-align: left; white-space: nowrap;\">\n                  <a class=\"text-dark\" [routerLink]=\"['/inventory-management/edit-inventory']\"\n                    [queryParams]='{id: product?.id, vendor: selectedVendor, category: selectedcategory, product: selectedProductIdArray, quantity: selectedQuantity, limit: tableLimit, firstTime: true, search: searchValue}'>\n                    <span class=\"anchor-tag\">\n                      {{product.name || \"-\"}}\n                    </span>\n                  </a>\n                </td>\n                <td>{{product.weight ? (product.weight+\" lbs\") : \"0 lbs\"}}</td>\n                <td>{{product.available_quantity ? (product.available_quantity | number :\n                  '1.2-2') : \"0.00\"}}</td>\n                <td>{{product.sale_price ? (\"$\"+(product.sale_price | number : '1.2-2')) :\n                  \"$0.00\"}}</td>\n                <!-- <td>{{product.purchase_cost ? (\"$\"+(product.purchase_cost | number : '1.2-2')) :\n                                            \"$0.00\"}}</td> -->\n                <!-- <td>{{product.average_purchase_price ? (\"$\"+(product.average_purchase_price |\n                                            number : '1.2-2')) :\n                                            \"$0.00\"}}</td> -->\n                <td>{{product.average_purchase_price ? (\"$\"+(product.average_purchase_price |\n                  number : '1.2-2')) :\n                  (\"$\"+(product.purchase_cost |\n                  number : '1.2-2'))}}</td>\n                <!-- <td>${{((product.sale_price - product.purchase_cost) | number : '.2-2')}}</td>\n                                        <td>{{(((product.sale_price - product.purchase_cost) * 100\n                                            )/product.purchase_cost) | number : '.2-2'}}%</td> -->\n                <td>{{product.margin ? (\"$\"+(product.margin | number : '1.2-2')) : \"$0.00\"}}</td>\n                <td>{{product.mark_up ? ((product.mark_up | number : '1.2-2')+\"%\") : \"0.00%\"}}\n                </td>\n                <!-- <td>\n                                        <div *ngIf=\"product.description.length>30\" style=\"resize: none;height: 94px;width: 300px;overflow: auto;\"><span [outerHTML]=\"product?.description\">\n                                        </span>\n                                        </div>\n                                        <ng-container *ngIf=\"product.description.length<30\">\n                                            {{product?.description}}\n                                        </ng-container></td> -->\n\n                <td>\n                  <div class=\"d-flex align-items-center justify-content-center\">\n                    <a class=\"text-dark mx-2\" [routerLink]=\"['/inventory-management/adjust-quantity']\"\n                      [queryParams]='{id: product?.id,redirect: 2, vendor: selectedVendor, category: selectedcategory, product: selectedProductIdArray, quantity: selectedQuantity, limit: tableLimit, search: searchValue}'><i\n                        class=\"fa fa-adjust\"></i></a>\n                    <a class=\"text-dark mx-2\" [routerLink]=\"['/inventory-management/edit-inventory']\"\n                      [queryParams]='{id: product?.id, vendor: selectedVendor, category: selectedcategory, product: selectedProductIdArray, quantity: selectedQuantity, limit: tableLimit, search: searchValue}'><i\n                        class=\"fa fa-pencil\"></i></a>\n                    <a class=\"text-danger mx-2\" href=\"javascript:void(0)\"\n                      (click)=\"deleteModal.show();saveId(product?.id);\"><i class=\"far fa-trash-alt\"></i></a>\n\n                  </div>\n                </td>\n              </tr>\n              <tr *ngIf=\"productList?.length == 0\">\n                <td colspan=\"11\" class=\"no-data-available\">No Data Found !</td>\n              </tr>\n            </tbody>\n          </table>\n          <!-- </div>\n          </perfect-scrollbar> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- delete modal -->\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n        <h2 class=\"font-weight-bold mb-4 text-primary\">Delete</h2>\n        <p class=\"mb-0\">Are You Sure You Want To Delete ?</p>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">Cancel</button>\n        <button (click)=\"deleteProduct()\" type=\"button\" class=\"btn btn-danger\">Delete</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div>\n</div><!-- /.modal -->\n\n<div bsModal #statusModal=\"bs-modal\" class=\"modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Delete\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body py-4 text-center d-flex flex-column justify-content-center\">\n        <h2 class=\"font-weight-bold mb-4 text-primary\">Status</h2>\n        <p class=\"mb-0\">Are You Sure You Want To Change Status ?</p>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"statusModal.hide()\">No</button>\n        <button (click)=\"changeStatus()\" type=\"button\" class=\"btn btn-danger\">Yes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/shared/services/inventory-management.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/inventory-management.service.ts ***!
  \*****************************************************************/
/*! exports provided: InventoryManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryManagementService", function() { return InventoryManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var InventoryManagementService = /** @class */ (function () {
    function InventoryManagementService(http) {
        this.http = http;
    }
    InventoryManagementService.prototype.productlist = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/productlist/", data);
    };
    InventoryManagementService.prototype.productDropdownData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/product_only_list/");
    };
    InventoryManagementService.prototype.getDashoardInfo = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/dashboard/");
    };
    InventoryManagementService.prototype.createProduct = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/create_product/", data);
    };
    InventoryManagementService.prototype.updateProduct = function (data, id) {
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/create_product/" + id + "/", data);
    };
    InventoryManagementService.prototype.getVendors = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/vendor/listview/", data);
    };
    InventoryManagementService.prototype.getPackSize = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/pack/listview/", data);
    };
    InventoryManagementService.prototype.getCategories = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/categorieslistNoPagnination/");
    };
    InventoryManagementService.prototype.deleteProduct = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/create_product/" + id + "/");
    };
    InventoryManagementService.prototype.getProduct = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/product/" + id + "/");
    };
    InventoryManagementService.prototype.adjustQuantity = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/adjust_quantity/", data);
    };
    InventoryManagementService.prototype.salesPriceChange = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/adjust_product_data/modify_salesprice/", data);
    };
    InventoryManagementService.prototype.statusChange = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/adjust_product_data/change_active_status/", data);
    };
    InventoryManagementService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    InventoryManagementService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InventoryManagementService);
    return InventoryManagementService;
}());



/***/ }),

/***/ "./src/app/views/inventory-management/add-inventory/add-inventory.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/inventory-management/add-inventory/add-inventory.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInventoryComponent", function() { return AddInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/inventory-management.service */ "./src/app/shared/services/inventory-management.service.ts");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var AddInventoryComponent = /** @class */ (function () {
    function AddInventoryComponent(titleService, inventoryManagementService, toastr, router, route, datePipe) {
        this.titleService = titleService;
        this.inventoryManagementService = inventoryManagementService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.datePipe = datePipe;
        this.submitted = false;
        this.selectedcategory = '';
        this.selectedVendor = '';
        this.selectedPackSize = '';
        this.barcode_imageUrl = '';
        this.selectedDate = "2020-10-20";
        this.tableLimit = 10;
    }
    AddInventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.titleService.setTitle("Add Inventory");
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            // pack_size: new FormControl('', [
            //   Validators.required
            // ]),
            available_quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            updated_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            low_stock_qauntity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            // Validators.required
            ]),
            sale_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            // Validators.required
            ]),
            purchase_cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            purchase_info: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            // Validators.required
            ]),
            barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            item_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            barcode_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__["RxwebValidators"].extension({ extensions: ["png", "jpg", "jpeg", "emf", "jpe", "jfif", "bmp", "gif", "wmf", "dib", "tif", "tiff", 'pdf']
                })
            ]),
            barcode_imageSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
        });
        this.route.queryParams.subscribe(function (param) {
            _this.filterVendor = param.vendor;
            _this.filterCategory = param.category;
            _this.filterProduct = param.product;
            _this.filterQuantity = param.quantity;
            _this.tableLimit = param.limit;
        });
        this.getProductData();
    };
    AddInventoryComponent.prototype.getProductData = function () {
        var _this = this;
        this.inventoryManagementService.getVendors("").subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.vendorData = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
        this.inventoryManagementService.getPackSize("").subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.packSizeData = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
        this.inventoryManagementService.getCategories().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.categoryData = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    AddInventoryComponent.prototype.onBarcodeFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            if (file) {
                this.addForm.patchValue({
                    barcode_imageSource: file
                });
                var reader = new FileReader();
                reader.onloadend = function (event) {
                    _this.barcode_imageUrl = event.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    };
    AddInventoryComponent.prototype.submitAddForm = function () {
        var _this = this;
        this.submitted = true;
        var formData = new FormData();
        formData.append("name", this.addForm.controls.name.value);
        formData.append("category", this.addForm.controls.category.value);
        formData.append("vendor", this.addForm.controls.vendor.value);
        // formData.append("pack_size", this.addForm.controls.pack_size.value);
        formData.append("available_quantity", this.addForm.controls.available_quantity.value);
        formData.append("updated_on", this.addForm.controls.updated_on.value);
        formData.append("low_stock_qauntity", this.addForm.controls.low_stock_qauntity.value);
        formData.append("location", this.addForm.controls.location.value);
        formData.append("sale_price", this.addForm.controls.sale_price.value);
        formData.append("description", this.addForm.controls.description.value);
        formData.append("purchase_cost", this.addForm.controls.purchase_cost.value);
        formData.append("purchase_info", this.addForm.controls.purchase_info.value);
        // formData.append("barcode_image", this.addForm.get('barcode_imageSource').value);
        formData.append("barcode_string", this.addForm.controls.barcode.value);
        formData.append("weight", this.addForm.controls.weight.value);
        formData.append("item_no", this.addForm.controls.item_number.value);
        if (this.addForm.valid) {
            this.inventoryManagementService.createProduct(formData).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.router.navigate(['inventory-management'], { queryParams: { vendor: _this.filterVendor, category: _this.filterCategory, product: _this.filterProduct, stock: _this.filterQuantity, limit: _this.tableLimit, firstTime: true } }).then(function () {
                        _this.toastr.success('', "Product added successfully!");
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
    AddInventoryComponent.prototype.changeBarcodeValue = function () {
        this.addForm.patchValue({
            item_number: this.addForm.controls.barcode.value.substr(-6)
        });
    };
    AddInventoryComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_6__["InventoryManagementService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }
    ]; };
    AddInventoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-inventory',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-inventory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory-management/add-inventory/add-inventory.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_6__["InventoryManagementService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
    ], AddInventoryComponent);
    return AddInventoryComponent;
}());



/***/ }),

/***/ "./src/app/views/inventory-management/adjust-quantity/adjust-quantity.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/inventory-management/adjust-quantity/adjust-quantity.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdjustQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustQuantityComponent", function() { return AdjustQuantityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/inventory-management.service */ "./src/app/shared/services/inventory-management.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var AdjustQuantityComponent = /** @class */ (function () {
    function AdjustQuantityComponent(titleService, inventoryManagementService, toastr, router, route, datePipe) {
        this.titleService = titleService;
        this.inventoryManagementService = inventoryManagementService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.datePipe = datePipe;
        this.submitted = false;
        this.productId = '';
        this.totalQunatity = 0;
        this.redirect = 0;
        this.tableLimit = 10;
        this.firstTime = false;
        this.searchValue = "";
    }
    AdjustQuantityComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Add Inventory");
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            new_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            purchase_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            new_purchase_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            sale_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            available_quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.getProductData();
    };
    AdjustQuantityComponent.prototype.getProductData = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (param) {
            _this.productId = param.id;
            _this.redirect = param.redirect;
            _this.filterVendor = param.vendor;
            _this.filterCategory = param.category;
            _this.filterProduct = param.product;
            _this.filterQuantity = param.quantity;
            _this.tableLimit = param.limit;
            _this.firstTime = param.firstTime;
            _this.searchValue = param.search;
        });
        this.inventoryManagementService.getProduct(this.productId).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var data = resData.data;
                _this.addForm.patchValue({
                    name: data.name,
                    available_quantity: data.available_quantity,
                    date: new Date(data.updated_on),
                    purchase_price: data.purchase_cost,
                    new_purchase_price: data.purchase_cost,
                    sale_price: data.sale_price,
                    new_price: data.sale_price
                });
                _this.totalQunatity = data.available_quantity;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    AdjustQuantityComponent.prototype.submitAddForm = function () {
        var _this = this;
        this.submitted = true;
        var formData = new FormData();
        formData.append("product_id", this.productId);
        formData.append("date", this.datePipe.transform(this.addForm.controls.date.value, "yyyy-MM-dd"));
        formData.append("new_selling_price", this.addForm.controls.new_price.value);
        formData.append("quantity", this.addForm.controls.quantity.value);
        formData.append("new_purchase_price", this.addForm.controls.new_purchase_price.value);
        formData.append("notes", this.addForm.controls.note.value);
        if (this.addForm.valid) {
            this.inventoryManagementService.adjustQuantity(formData).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    if (_this.redirect == 0) {
                        _this.router.navigate(['/inventory-management/edit-inventory'], { queryParams: { id: _this.productId, vendor: _this.filterVendor, category: _this.filterCategory, product: _this.filterProduct, stock: _this.filterQuantity, limit: _this.tableLimit, firstTime: true, search: _this.searchValue } }).then(function () {
                            _this.toastr.success('', "Quantity adjusted successfully!");
                        });
                    }
                    else {
                        _this.router.navigate(['/inventory-management'], { queryParams: { vendor: _this.filterVendor, category: _this.filterCategory, product: _this.filterProduct, stock: _this.filterQuantity } }).then(function () {
                            _this.toastr.success('', "Quantity adjusted successfully!");
                        });
                    }
                }
                else {
                    _this.toastr.error('', resData.message);
                }
            }, function (err) {
                _this.toastr.error('', err.error.message);
            });
        }
    };
    AdjustQuantityComponent.prototype.chnageQunatity = function () {
        this.totalQunatity = this.addForm.controls.available_quantity.value + this.addForm.controls.quantity.value;
    };
    AdjustQuantityComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_6__["InventoryManagementService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
    ]; };
    AdjustQuantityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adjust-quantity',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adjust-quantity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory-management/adjust-quantity/adjust-quantity.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_6__["InventoryManagementService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], AdjustQuantityComponent);
    return AdjustQuantityComponent;
}());



/***/ }),

/***/ "./src/app/views/inventory-management/edit-invertory/edit-invertory.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/inventory-management/edit-invertory/edit-invertory.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditInvertoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInvertoryComponent", function() { return EditInvertoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/inventory-management.service */ "./src/app/shared/services/inventory-management.service.ts");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");











var EditInvertoryComponent = /** @class */ (function () {
    function EditInvertoryComponent(titleService, inventoryManagementService, toastr, router, route, datePipe) {
        this.titleService = titleService;
        this.inventoryManagementService = inventoryManagementService;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.datePipe = datePipe;
        this.submitted = false;
        this.old_sales_price = "";
        this.new_sales_price = "";
        this.selectedcategory = '';
        this.selectedVendor = '';
        this.selectedPackSize = '';
        this.barcode_imageUrl = '';
        this.productId = '';
        this.selectedDate = "2020-10-20";
        this.tableLimit = 10;
        this.firstTime = false;
        this.searchValue = "";
    }
    EditInvertoryComponent.prototype.ngOnInit = function () {
        this.selectedDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.titleService.setTitle("Edit Inventory");
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            // pack_size: new FormControl('', [
            //   Validators.required
            // ]),
            available_quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            updated_on: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            low_stock_qauntity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            // Validators.required
            ]),
            sale_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            // Validators.required
            ]),
            purchase_cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            purchase_info: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            // Validators.required
            ]),
            barcode_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__["RxwebValidators"].extension({
                    extensions: ["png", "jpg", "jpeg", "emf", "jpe", "jfif", "bmp", "gif", "wmf", "dib", "tif", "tiff", 'pdf']
                })
            ]),
            barcode_imageSource: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            item_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
        this.getProductData();
    };
    EditInvertoryComponent.prototype.getProductData = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (param) {
            _this.productId = param.id;
            _this.filterVendor = param.vendor;
            _this.filterCategory = param.category;
            _this.filterProduct = param.product;
            _this.filterQuantity = param.quantity;
            _this.tableLimit = param.limit;
            _this.firstTime = param.firstTime;
            _this.searchValue = param.search;
        });
        this.inventoryManagementService.getVendors("").subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.vendorData = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
        this.inventoryManagementService.getPackSize({ product_id: this.productId }).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.packSizeData = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
        this.inventoryManagementService.getCategories().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.categoryData = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
        this.inventoryManagementService.getProduct(this.productId).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var data = resData.data;
                _this.old_sales_price = data.sale_price;
                _this.editForm.patchValue({
                    name: data.name,
                    status: data.is_active ? "Active" : "Inactive",
                    available_quantity: data.available_quantity,
                    updated_on: data.updated_on,
                    low_stock_qauntity: data.low_stock_qauntity,
                    location: data.location,
                    sale_price: data.sale_price,
                    description: data.description,
                    purchase_cost: data.purchase_cost,
                    purchase_info: data.purchase_info,
                    barcode: data.barcode_string,
                    item_number: data.barcode_string.substr(-6),
                    weight: data.weight
                });
                _this.selectedcategory = data.category;
                _this.selectedVendor = data.vendor;
                // this.selectedPackSize = data.pack_size;
                if (data.barcode_image != null) {
                    _this.barcode_imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].base_url + data.barcode_image;
                }
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    EditInvertoryComponent.prototype.onBarcodeFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            if (file) {
                this.editForm.patchValue({
                    barcode_imageSource: file
                });
                var reader = new FileReader();
                reader.onloadend = function (event) {
                    _this.barcode_imageUrl = event.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
    };
    EditInvertoryComponent.prototype.submitEditForm = function () {
        var _this = this;
        this.submitted = true;
        var formData = new FormData();
        formData.append("name", this.editForm.controls.name.value);
        formData.append("category", this.editForm.controls.category.value);
        formData.append("vendor", this.editForm.controls.vendor.value);
        // formData.append("pack_size", this.editForm.controls.pack_size.value);
        formData.append("available_quantity", this.editForm.controls.available_quantity.value);
        formData.append("updated_on", this.editForm.controls.updated_on.value);
        formData.append("low_stock_qauntity", this.editForm.controls.low_stock_qauntity.value);
        formData.append("location", this.editForm.controls.location.value);
        formData.append("sale_price", this.editForm.controls.sale_price.value);
        formData.append("description", this.editForm.controls.description.value);
        formData.append("purchase_cost", this.editForm.controls.purchase_cost.value);
        formData.append("purchase_info", this.editForm.controls.purchase_info.value);
        if (this.editForm.get('barcode_imageSource').value) {
            formData.append("barcode_image", this.editForm.get('barcode_imageSource').value);
        }
        formData.append("barcode_string", this.editForm.controls.barcode.value);
        formData.append("weight", this.editForm.controls.weight.value);
        formData.append("item_no", this.editForm.controls.item_number.value);
        if (this.editForm.valid) {
            this.inventoryManagementService.updateProduct(formData, this.productId).subscribe(function (response) {
                var resData = JSON.parse(JSON.stringify(response));
                if (resData.status_code == 200) {
                    _this.router.navigate(['inventory-management'], { queryParams: { vendor: _this.filterVendor, category: _this.filterCategory, product: _this.filterProduct, stock: _this.filterQuantity, limit: _this.tableLimit, firstTime: true, search: _this.searchValue } }).then(function () {
                        _this.toastr.success('', "Product updated successfully!");
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
    EditInvertoryComponent.prototype.changeBarcodeValue = function () {
        this.editForm.patchValue({
            item_number: this.editForm.controls.barcode.value.substr(-6)
        });
    };
    EditInvertoryComponent.prototype.salesPriceChange = function () {
        var _this = this;
        var data = {
            product_id: this.productId,
            new_sales_price: this.new_sales_price
        };
        this.inventoryManagementService.salesPriceChange(data).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.salespricemodal.hide();
                _this.toastr.success('', "Product added successfully!");
                _this.getProductData();
                _this.old_sales_price = '';
                _this.new_sales_price = '';
            }
            else {
                _this.salespricemodal.hide();
                _this.toastr.error('', resData.message);
                _this.old_sales_price = '';
                _this.new_sales_price = '';
            }
        });
    };
    EditInvertoryComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_6__["InventoryManagementService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('salespricemodal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalDirective"])
    ], EditInvertoryComponent.prototype, "salespricemodal", void 0);
    EditInvertoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-invertory',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-invertory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory-management/edit-invertory/edit-invertory.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_6__["InventoryManagementService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]])
    ], EditInvertoryComponent);
    return EditInvertoryComponent;
}());



/***/ }),

/***/ "./src/app/views/inventory-management/inventory-management-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/inventory-management/inventory-management-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: InventoryManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryManagementRoutingModule", function() { return InventoryManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-inventory/add-inventory.component */ "./src/app/views/inventory-management/add-inventory/add-inventory.component.ts");
/* harmony import */ var _adjust_quantity_adjust_quantity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adjust-quantity/adjust-quantity.component */ "./src/app/views/inventory-management/adjust-quantity/adjust-quantity.component.ts");
/* harmony import */ var _edit_invertory_edit_invertory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-invertory/edit-invertory.component */ "./src/app/views/inventory-management/edit-invertory/edit-invertory.component.ts");
/* harmony import */ var _inventory_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory-management.component */ "./src/app/views/inventory-management/inventory-management.component.ts");







var routes = [
    {
        path: '',
        data: {
            title: 'Inventory Management'
        },
        children: [
            {
                path: '',
                component: _inventory_management_component__WEBPACK_IMPORTED_MODULE_6__["InventoryManagementComponent"],
                data: {
                    title: 'List'
                }
            },
            {
                path: 'add-inventory',
                component: _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_3__["AddInventoryComponent"],
                data: {
                    title: 'Add'
                }
            },
            {
                path: 'edit-inventory',
                component: _edit_invertory_edit_invertory_component__WEBPACK_IMPORTED_MODULE_5__["EditInvertoryComponent"],
                data: {
                    title: 'Edit'
                }
            },
            {
                path: 'adjust-quantity',
                component: _adjust_quantity_adjust_quantity_component__WEBPACK_IMPORTED_MODULE_4__["AdjustQuantityComponent"],
                data: {
                    title: 'Adjust Quantity'
                }
            },
        ]
    }
];
var InventoryManagementRoutingModule = /** @class */ (function () {
    function InventoryManagementRoutingModule() {
    }
    InventoryManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InventoryManagementRoutingModule);
    return InventoryManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/inventory-management/inventory-management.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/inventory-management/inventory-management.component.ts ***!
  \******************************************************************************/
/*! exports provided: InventoryManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryManagementComponent", function() { return InventoryManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/inventory-management.service */ "./src/app/shared/services/inventory-management.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");











var InventoryManagementComponent = /** @class */ (function () {
    function InventoryManagementComponent(titleService, toastr, inventoryManagementService, route, commonService, _decimalPipe) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.inventoryManagementService = inventoryManagementService;
        this.route = route;
        this.commonService = commonService;
        this._decimalPipe = _decimalPipe;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.selectedQuantity = "";
        this.selectedcategory = '';
        this.searchValue = '';
        this.selectedVendor = '';
        this.searchTextInput = "";
        this.selectedProduct = [];
        this.selectedProductIdArray = [];
        this.firstTime = false;
        this.firstTimeSearch = false;
        this.dropdownSettings = {};
    }
    InventoryManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Inventory Management");
        this.getProductDropdownData();
        this.route.queryParams.subscribe(function (param) {
            _this.selectedQuantity = param.stock || "";
            _this.selectedVendor = param.vendor || "";
            _this.selectedcategory = param.category || "";
            _this.selectedProductIdArray = param.product || [];
            if (typeof _this.selectedProductIdArray == "string") {
                _this.selectedProductIdArray = _this.selectedProductIdArray.split(',');
            }
            for (var i = 0; i < _this.selectedProductIdArray.length; i++) {
                _this.selectedProductIdArray[i] = _this.selectedProductIdArray[i] * 1;
            }
            ;
            _this.tableLimit = param.limit;
            _this.firstTime = param.firstTime || false;
            _this.firstTimeSearch = param.firstTime || false;
            _this.searchValue = param.search || "";
        });
        this.getProductList();
        this.getDashboardCount();
        this.getCategoryData();
        this.getVendorData();
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true
        };
    };
    InventoryManagementComponent.prototype.getDashboardCount = function () {
        var _this = this;
        this.inventoryManagementService.getDashoardInfo().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.dashboardData = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    InventoryManagementComponent.prototype.getCategoryData = function () {
        var _this = this;
        this.inventoryManagementService.getCategories().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.categoryData = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    InventoryManagementComponent.prototype.getProductDropdownData = function () {
        var _this = this;
        this.inventoryManagementService.productDropdownData().subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.productDropdownData = resData.data;
                _this.selectedProduct = [];
                for (var i = 0; i < _this.selectedProductIdArray.length; i++) {
                    for (var k = 0; k < _this.productDropdownData.length; k++) {
                        if (_this.selectedProductIdArray[i] == _this.productDropdownData[k].id) {
                            _this.selectedProduct.push({ id: _this.productDropdownData[k].id, name: _this.productDropdownData[k].name });
                        }
                    }
                }
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    InventoryManagementComponent.prototype.getProductList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 100,
            order: [1, 'asc'],
            serverSide: true,
            scrollY: "450px",
            scrollX: true,
            scrollCollapse: true,
            searchDelay: 1300,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page = parseInt(dataTablesParameters.start) / parseInt(dataTablesParameters.length) + 1;
                dataTablesParameters.limit = dataTablesParameters.length;
                (dataTablesParameters.draw == 1 && _this.firstTime) ? ((dataTablesParameters.limit = Number(_this.tableLimit))) : "";
                (dataTablesParameters.draw == 1 && _this.firstTime) ? ((dataTablesParameters.length = Number(_this.tableLimit))) : "";
                dataTablesParameters.filter = _this.selectedQuantity;
                if (!_this.firstTime) {
                    dataTablesParameters.search_param = dataTablesParameters.search.value;
                    _this.searchValue = dataTablesParameters.search.value;
                }
                else if (_this.firstTime) {
                    dataTablesParameters.search_param = _this.searchValue;
                    $('.dataTables_filter input').val(_this.searchValue);
                    _this.firstTime = false;
                }
                _this.tableLimit = dataTablesParameters.limit;
                $('.dataTables_wrapper .dataTables_length label select').val(_this.tableLimit);
                // sorting
                dataTablesParameters.order[0].column == 1 ? dataTablesParameters.category = (dataTablesParameters.order[0].column == 1 && dataTablesParameters.order[0].dir == "asc") ? ("category") : ("-category") : "";
                dataTablesParameters.order[0].column == 3 ? dataTablesParameters.item_no = (dataTablesParameters.order[0].column == 3 && dataTablesParameters.order[0].dir == "asc") ? ("item_no") : ("-item_no") : "";
                dataTablesParameters.order[0].column == 4 ? dataTablesParameters.name = (dataTablesParameters.order[0].column == 4 && dataTablesParameters.order[0].dir == "asc") ? ("name") : ("-name") : "";
                dataTablesParameters.order[0].column == 5 ? dataTablesParameters.weight = (dataTablesParameters.order[0].column == 5 && dataTablesParameters.order[0].dir == "asc") ? ("weight") : ("-weight") : "";
                dataTablesParameters.order[0].column == 6 ? dataTablesParameters.available_quantity = (dataTablesParameters.order[0].column == 6 && dataTablesParameters.order[0].dir == "asc") ? ("available_quantity") : ("-available_quantity") : "";
                dataTablesParameters.order[0].column == 7 ? dataTablesParameters.sale_price = (dataTablesParameters.order[0].column == 7 && dataTablesParameters.order[0].dir == "asc") ? ("sale_price") : ("-sale_price") : "";
                dataTablesParameters.order[0].column == 8 ? dataTablesParameters.purchase_cost = (dataTablesParameters.order[0].column == 8 && dataTablesParameters.order[0].dir == "asc") ? ("purchase_cost") : ("-purchase_cost") : "";
                dataTablesParameters.order[0].column == 9 ? dataTablesParameters.margin = (dataTablesParameters.order[0].column == 9 && dataTablesParameters.order[0].dir == "asc") ? ("margin") : ("-margin") : "";
                dataTablesParameters.order[0].column == 10 ? dataTablesParameters.mark_up = (dataTablesParameters.order[0].column == 10 && dataTablesParameters.order[0].dir == "asc") ? ("mark_up") : ("-mark_up") : "";
                // dataTablesParameters.order[0].column == 2 ? dataTablesParameters.description = (dataTablesParameters.order[0].column == 2 && dataTablesParameters.order[0].dir == "asc") ? ("description") : ("-description") : "";
                // dataTablesParameters.order[0].column == 6 ? dataTablesParameters.average_purchase_price = (dataTablesParameters.order[0].column == 6 && dataTablesParameters.order[0].dir == "asc") ? ("average_purchase_price") : ("-average_purchase_price") : "";
                // filter
                dataTablesParameters.product_name_filter = _this.selectedProductIdArray;
                dataTablesParameters.category_id_filter = _this.selectedcategory;
                dataTablesParameters.vendor_id_filter = _this.selectedVendor;
                _this.datatbaleData = dataTablesParameters;
                _this.inventoryManagementService.productlist(dataTablesParameters).subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.productList = resData.data;
                        setTimeout(function () {
                            var table = $('#excel-table').DataTable();
                            table.columns.adjust();
                            document.getElementById("last-header").style.width = "auto";
                        }, 10);
                        // this.productList.forEach(element => {
                        //   element.margin = element.sale_price - element.purchase_cost;
                        //   element.markup = (((element.sale_price - element.purchase_cost) * 100
                        //   ) / element.purchase_cost);
                        // });
                        // dataTablesParameters.order[0].column == 1 ? dataTablesParameters.item_no = (dataTablesParameters.order[0].column == 1 && dataTablesParameters.order[0].dir == "asc") ? (this.productList.sort((a, b) => 0 - (a.item_no > b.item_no ? -1 : 1))) : (this.productList.sort((a, b) => 0 - (a.item_no > b.item_no ? 1 : -1))) : "";
                        // dataTablesParameters.order[0].column == 3 ? dataTablesParameters.weight = (dataTablesParameters.order[0].column == 3 && dataTablesParameters.order[0].dir == "asc") ? (this.productList.sort((a, b) => 0 - (a.weight > b.weight ? -1 : 1))) : (this.productList.sort((a, b) => 0 - (a.weight > b.weight ? 1 : -1))) : "";
                        // dataTablesParameters.order[0].column == 7 ? dataTablesParameters.margin = (dataTablesParameters.order[0].column == 7 && dataTablesParameters.order[0].dir == "asc") ? (this.productList.sort((a, b) => 0 - (a.margin > b.margin ? -1 : 1))) : (this.productList.sort((a, b) => 0 - (a.margin > b.margin ? 1 : -1))) : "";
                        // dataTablesParameters.order[0].column == 8 ? dataTablesParameters.markup = (dataTablesParameters.order[0].column == 8 && dataTablesParameters.order[0].dir == "asc") ? (this.productList.sort((a, b) => 0 - (a.markup > b.markup ? -1 : 1))) : (this.productList.sort((a, b) => 0 - (a.markup > b.markup ? 1 : -1))) : "";
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: (dataTablesParameters.search_param == "" && dataTablesParameters.product_name_filter == [] && dataTablesParameters.category_id_filter == "" && dataTablesParameters.vendor_id_filter == "") ? resData.total_record : resData.filter_record,
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
                { data: 'status', searchable: false, orderable: false },
                { data: 'category_name', searchable: true, orderable: true },
                { data: 'item_no', searchable: true, orderable: true },
                // { data: 'barcode_string', searchable: true, orderable: false },
                { data: 'name', searchable: true, orderable: true },
                { data: 'weight', searchable: false, orderable: true },
                { data: 'available_quantity', searchable: false, orderable: true },
                { data: 'sale_price', searchable: false, orderable: true },
                { data: 'purchase_cost', searchable: false, orderable: true },
                { data: 'margin', searchable: false, orderable: true },
                { data: 'mark_up', searchable: false, orderable: true },
                { data: 'action', searchable: false, orderable: false }
            ]
        };
    };
    InventoryManagementComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    InventoryManagementComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    InventoryManagementComponent.prototype.saveId = function (productId) {
        this.productId = productId;
    };
    InventoryManagementComponent.prototype.deleteProduct = function () {
        var _this = this;
        this.inventoryManagementService
            .deleteProduct(this.productId)
            .subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.deleteModal.hide();
                _this.toastr.success('', "Product deleted successfully!");
                _this.rerender();
                _this.getDashboardCount();
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.mesaage);
        });
    };
    InventoryManagementComponent.prototype.changeStatus = function () {
        var _this = this;
        this.inventoryManagementService
            .statusChange({ product_id: this.productId, product_status: this.productStatus ? "inactive" : "active" })
            .subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.statusModal.hide();
                _this.toastr.success('', resData.message);
                _this.rerender();
                _this.getDashboardCount();
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.mesaage);
        });
    };
    InventoryManagementComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    InventoryManagementComponent.prototype.changeQuantity = function (type) {
        this.selectedQuantity = type;
        this.rerender();
    };
    InventoryManagementComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.inventoryManagementService
            .productlist(this.datatbaleData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                    'Category': x.category_name || "-",
                    'Item Number': x.item_no || "-",
                    // 'Barcode': x.barcode_string || "-",
                    'Name': x.name || "-",
                    'Weight': x.weight ? x.weight + " lbs" : "0 lbs",
                    'Margin': (Number((x.sale_price - x.purchase_cost).toFixed(2))),
                    'Mark up': (Number((((x.sale_price - x.purchase_cost) * 100) / x.purchase_cost).toFixed(2))),
                    'Quantity': x.available_quantity,
                    'Sales Price': x.sale_price ? "$ " + _this._decimalPipe.transform(x.sale_price, '1.2-2') : "$0",
                    'Purchase Price': x.purchase_cost ? "$ " + _this._decimalPipe.transform(x.purchase_cost, '1.2-2') : "$0",
                }); });
                if (type == 'pdf') {
                    if (onlyNameAndSymbolArr.length > 0) {
                        var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                        var values = onlyNameAndSymbolArr.map(function (element) { return Object.values(element); });
                        _this.commonService.exportArrayPDF(keys, values, 'productList');
                    }
                    else {
                        _this.toastr.error('', "No Data Found !");
                        $("#myDropdown").toggle();
                    }
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, 'productList');
                }
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    InventoryManagementComponent.prototype.getVendorData = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("page", "1");
        formData.append("limit", "100000");
        this.inventoryManagementService.getVendors(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.vendorData = resData.data;
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    InventoryManagementComponent.prototype.onSelectProduct = function (event) {
        this.selectedProductIdArray.push(event.id);
        this.rerender();
    };
    InventoryManagementComponent.prototype.onSelectAllProduct = function (event) {
        this.selectedProductIdArray = [];
        for (var i = 0; i < event.length; i++) {
            this.selectedProductIdArray.push(event[i].id);
        }
        this.rerender();
    };
    InventoryManagementComponent.prototype.onDeSelectProduct = function (event) {
        var index = this.selectedProductIdArray.indexOf(event.id);
        if (index > -1) {
            this.selectedProductIdArray.splice(index, 1);
        }
        this.rerender();
    };
    InventoryManagementComponent.prototype.onDeSelectAllProduct = function () {
        this.selectedProductIdArray = [];
        this.rerender();
    };
    InventoryManagementComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_6__["InventoryManagementService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], InventoryManagementComponent.prototype, "deleteModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('statusModal'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], InventoryManagementComponent.prototype, "statusModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InventoryManagementComponent.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], InventoryManagementComponent.prototype, "dtElement", void 0);
    InventoryManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-management',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory-management/inventory-management.component.html")).default,
            styles: ["\n  .anchor-tag {\n    color: #23282c;\n    text-decoration: none !important;\n  }\n  #last-header {\n    width: auto;\n  }\n  "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_6__["InventoryManagementService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]])
    ], InventoryManagementComponent);
    return InventoryManagementComponent;
}());



/***/ }),

/***/ "./src/app/views/inventory-management/inventory-management.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/inventory-management/inventory-management.module.ts ***!
  \***************************************************************************/
/*! exports provided: InventoryManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryManagementModule", function() { return InventoryManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _inventory_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory-management.component */ "./src/app/views/inventory-management/inventory-management.component.ts");
/* harmony import */ var _inventory_management_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-management-routing.module */ "./src/app/views/inventory-management/inventory-management-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-inventory/add-inventory.component */ "./src/app/views/inventory-management/add-inventory/add-inventory.component.ts");
/* harmony import */ var _edit_invertory_edit_invertory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-invertory/edit-invertory.component */ "./src/app/views/inventory-management/edit-invertory/edit-invertory.component.ts");
/* harmony import */ var _adjust_quantity_adjust_quantity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adjust-quantity/adjust-quantity.component */ "./src/app/views/inventory-management/adjust-quantity/adjust-quantity.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/services/inventory-management.service */ "./src/app/shared/services/inventory-management.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
















var InventoryManagementModule = /** @class */ (function () {
    function InventoryManagementModule() {
    }
    InventoryManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_inventory_management_component__WEBPACK_IMPORTED_MODULE_3__["InventoryManagementComponent"], _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_7__["AddInventoryComponent"], _edit_invertory_edit_invertory_component__WEBPACK_IMPORTED_MODULE_8__["EditInvertoryComponent"], _adjust_quantity_adjust_quantity_component__WEBPACK_IMPORTED_MODULE_9__["AdjustQuantityComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _inventory_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["InventoryManagementRoutingModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_14__["RxReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_15__["NgMultiSelectDropDownModule"].forRoot()
            ],
            providers: [
                _shared_services_inventory_management_service__WEBPACK_IMPORTED_MODULE_12__["InventoryManagementService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ]
        })
    ], InventoryManagementModule);
    return InventoryManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-inventory-management-inventory-management-module.js.map