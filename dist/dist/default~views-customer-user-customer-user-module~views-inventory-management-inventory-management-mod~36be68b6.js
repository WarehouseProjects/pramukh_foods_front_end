(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-customer-user-customer-user-module~views-inventory-management-inventory-management-mod~36be68b6"],{

/***/ "./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@rxweb/reactive-form-validators/fesm5/rxweb-reactive-form-validators.js ***!
  \**********************************************************************************************/
/*! exports provided: ErrorMessageBindingStrategy, FormBuilderConfiguration, IAbstractControl, IpVersion, NumericValueType, ReactiveFormConfig, ReactiveTypedFormsModule, ResetFormType, RxFormArray, RxFormBuilder, RxFormControl, RxFormGroup, RxReactiveFormsModule, RxwebValidators, TypedForm, TypedFormBuilder, ValidationAlphabetLocale, allOf, allOfAsync, alpha, alphaAsync, alphaNumeric, alphaNumericAsync, and, ascii, async, blacklist, choice, choiceAsync, compare, compose, contains, containsAsync, creditCard, creditCardAsync, cusip, custom, customAsync, dataUri, date, dateAsync, different, digit, disable, elementClass, email, endsWith, endsWithAsync, error, escape, even, extension, extensionAsync, factor, factorAsync, file, fileAsync, fileSize, fileSizeAsync, greaterThan, greaterThanAsync, greaterThanEqualTo, greaterThanEqualToAsync, grid, hexColor, image, imageAsync, json, latLong, latitude, leapYear, lessThan, lessThanAsync, lessThanEqualTo, lessThanEqualToAsync, longitude, lowerCase, ltrim, mac, mask, maxDate, maxDateAsync, maxLength, maxLengthAsync, maxNumber, maxNumberAsync, maxTime, maxTimeAsync, minDate, minDateAsync, minLength, minLengthAsync, minNumber, minNumberAsync, minTime, minTimeAsync, model, noneOf, noneOfAsync, not, notEmpty, numeric, numericAsync, odd, oneOf, oneOfAsync, or, password, passwordAsync, pattern, patternAsync, port, prefix, primeNumber, prop, propArray, propObject, range, rangeAsync, required, requiredTrue, rtrim, rule, sanitize, startsWith, startsWithAsync, stripLow, suffix, time, timeAsync, toBoolean, toDate, toDouble, toFloat, toInt, toString, trim, unique, upperCase, url, urlAsync, whitelist, ??a, ??b, ??c, ??d, ??e, ??f, ??g, ??h, ??i, ??j, ??k, ??l */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageBindingStrategy", function() { return ErrorMessageBindingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderConfiguration", function() { return FormBuilderConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IAbstractControl", function() { return IAbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpVersion", function() { return IpVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericValueType", function() { return NumericValueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormConfig", function() { return ReactiveFormConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveTypedFormsModule", function() { return ReactiveTypedFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetFormType", function() { return ResetFormType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormArray", function() { return RxFormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormBuilder", function() { return RxFormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormControl", function() { return RxFormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormGroup", function() { return RxFormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxReactiveFormsModule", function() { return RxReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxwebValidators", function() { return RxwebValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypedForm", function() { return TypedForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypedFormBuilder", function() { return TypedFormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationAlphabetLocale", function() { return ValidationAlphabetLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allOf", function() { return allOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allOfAsync", function() { return allOfAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaAsync", function() { return alphaAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNumeric", function() { return alphaNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNumericAsync", function() { return alphaNumericAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ascii", function() { return ascii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blacklist", function() { return blacklist$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choiceAsync", function() { return choiceAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsAsync", function() { return containsAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCard", function() { return creditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardAsync", function() { return creditCardAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cusip", function() { return cusip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom", function() { return custom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAsync", function() { return customAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataUri", function() { return dataUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateAsync", function() { return dateAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "different", function() { return different; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digit", function() { return digit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disable", function() { return disable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementClass", function() { return elementClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWithAsync", function() { return endsWithAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "even", function() { return even; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extension", function() { return extension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensionAsync", function() { return extensionAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factor", function() { return factor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factorAsync", function() { return factorAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "file", function() { return file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileAsync", function() { return fileAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSize", function() { return fileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSizeAsync", function() { return fileSizeAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThan", function() { return greaterThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThanAsync", function() { return greaterThanAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThanEqualTo", function() { return greaterThanEqualTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThanEqualToAsync", function() { return greaterThanEqualToAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexColor", function() { return hexColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image", function() { return image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageAsync", function() { return imageAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "json", function() { return json; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latLong", function() { return latLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latitude", function() { return latitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leapYear", function() { return leapYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThan", function() { return lessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThanAsync", function() { return lessThanAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThanEqualTo", function() { return lessThanEqualTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThanEqualToAsync", function() { return lessThanEqualToAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longitude", function() { return longitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowerCase", function() { return lowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ltrim", function() { return ltrim$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mac", function() { return mac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mask", function() { return mask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDate", function() { return maxDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDateAsync", function() { return maxDateAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLengthAsync", function() { return maxLengthAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxNumber", function() { return maxNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxNumberAsync", function() { return maxNumberAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxTime", function() { return maxTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxTimeAsync", function() { return maxTimeAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minDate", function() { return minDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minDateAsync", function() { return minDateAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLength", function() { return minLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLengthAsync", function() { return minLengthAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minNumber", function() { return minNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minNumberAsync", function() { return minNumberAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minTime", function() { return minTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minTimeAsync", function() { return minTimeAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "model", function() { return model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noneOf", function() { return noneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noneOfAsync", function() { return noneOfAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEmpty", function() { return notEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numeric", function() { return numeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericAsync", function() { return numericAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "odd", function() { return odd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOf", function() { return oneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOfAsync", function() { return oneOfAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordAsync", function() { return passwordAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternAsync", function() { return patternAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "port", function() { return port; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primeNumber", function() { return primeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propArray", function() { return propArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propObject", function() { return propObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeAsync", function() { return rangeAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredTrue", function() { return requiredTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtrim", function() { return rtrim$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rule", function() { return rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return sanitize$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWithAsync", function() { return startsWithAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripLow", function() { return stripLow$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suffix", function() { return suffix$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeAsync", function() { return timeAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDouble", function() { return toDouble$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat", function() { return toFloat$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt", function() { return toInt$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return unique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperCase", function() { return upperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAsync", function() { return urlAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitelist", function() { return whitelist$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??a", function() { return RxwebFormDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??b", function() { return BaseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??c", function() { return HtmlControlTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??d", function() { return ControlHostDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??e", function() { return RxFormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??f", function() { return BaseValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??g", function() { return ControlExpressionProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??h", function() { return DecimalProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??i", function() { return FileControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??j", function() { return ImageFileControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??k", function() { return AsyncValidationDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "??l", function() { return BaseFormBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var CONTROLS_ERROR = "controlsError";
var VALUE_CHANGED_SYNC = "valueChangedSync";
var FUNCTION_STRING = "function";
var OBJECT_STRING = "object";
var RX_WEB_VALIDATOR = "rxwebValidator";
var NUMBER = "number";
var BOOLEAN = "boolean";
var TEMPLATE_VALIDATION_CONFIG = "template-validation-config";
var CONDITIONAL_VALIDATOR = "conditionalValidator";
var VALIDATOR_CONFIG = "validatorConfig";
var THIS = "this";
var RXCODE = "-rxw-";
var MODEL = "model";
var MODEL_INSTANCE = "modelInstance";
var PATCH = "patch";

var Linq = /** @class */ (function () {
    function Linq() {
    }
    Linq.functionCreator = function (expression) {
        var functionSetter = [];
        var match = expression.match(/^\s*\(?\s*([^)]*)\s*\)?\s*=>(.*)/);
        var splitSelect = match[2].split(",");
        for (var i = 0; i < splitSelect.length; i++) {
            var equalToOperator = splitSelect[i].match(/^\s*\(?\s*([^)]*)\s*\)?\s*|===|!==|==|!=|>=|>|<=|<|(.*)/);
            if (equalToOperator !== null) {
                functionSetter = new Function(match[1], "return " + equalToOperator.input);
            }
            else {
                equalToOperator = splitSelect[i].match(/^\s*\(?\s*([^)]*)\s*\)?\s*=(.*)/);
                if (equalToOperator === null) {
                    functionSetter = new Function(match[1], "return " + splitSelect.input);
                }
                else {
                    functionSetter = new Function(match[1], "return " + equalToOperator.input);
                }
            }
        }
        if (splitSelect.length == 0)
            functionSetter = { accessFunction: new Function(match[1], "return " + match[2]) };
        return functionSetter;
    };
    Linq.execute = function (jObject, config, parentObject, modelInstance, isDynamicConfig) {
        var expressionFunction = isDynamicConfig ? config.dynamicConfig : config.conditionalExpression;
        var lastParam = isDynamicConfig ? config : modelInstance;
        if (parentObject && typeof expressionFunction == "string")
            expressionFunction = Linq.functionCreator(expressionFunction);
        if (parentObject && expressionFunction)
            return modelInstance && modelInstance.constructor !== Object ? expressionFunction.call(modelInstance, parentObject, jObject, lastParam) : expressionFunction(parentObject, jObject, lastParam);
        return true;
    };
    Linq.getConditionPath = function (texts) {
        var path = "";
        for (var i = 1; i < texts.length; i++)
            path += (texts.length - 1) == i ? texts[i].trim() : texts[i].trim() + ".";
        return path;
    };
    Linq.expressionParser = function (expression, isNonValidationExpression) {
        var _this = this;
        var columns = [];
        var expressionString = expression.toString();
        var expressionArguments = Linq.extractArguments(expressionString);
        if (expressionArguments.length > 0) {
            var splitTexts_1 = [];
            expressionString.replace(/\s/g, '').replace(new RegExp(/{|}/, "g"), "").split(new RegExp(/return|===|!==|==|!=|>=|>|<=|<|&&/)).forEach(function (t) {
                var e_1, _a;
                var texts = t.replace(/\(|\)/g, "").split("||");
                try {
                    for (var texts_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(texts), texts_1_1 = texts_1.next(); !texts_1_1.done; texts_1_1 = texts_1.next()) {
                        var text = texts_1_1.value;
                        splitTexts_1.push(text);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (texts_1_1 && !texts_1_1.done && (_a = texts_1.return)) _a.call(texts_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
            splitTexts_1.forEach(function (t) {
                expressionArguments.forEach(function (x, i) {
                    t = t.trim();
                    if (t.startsWith(x + '.')) {
                        var splitText = t.split('.');
                        if (splitText.length == 2 || (splitText.length >= 2 && isNonValidationExpression))
                            if (!isNonValidationExpression)
                                columns.push({ propName: splitText[1].trim(), argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i });
                            else
                                columns.push({ propName: _this.getConditionPath(splitText), argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i });
                        else {
                            var arrayProp = splitText[1].split('[');
                            var jObject = {
                                propName: splitText[splitText.length - 1].trim(),
                                objectPropName: arrayProp[0],
                                arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined,
                                argumentIndex: i === 3 ? 0 : i === 2 ? 1 : i
                            };
                            columns.push(jObject);
                        }
                    }
                });
            });
        }
        return columns;
    };
    Linq.extractArguments = function (splitText) {
        var expressionArguments = [THIS];
        if (splitText[0].trim() !== "(" && !splitText.trim().startsWith("function")) {
            var text = splitText[0].split("=>")[0];
            expressionArguments.push(text.trim().replace("(", "").replace(")", ""));
        }
        else {
            var splitTexts = splitText.match(/\(([^)]+)\)/g);
            if (splitTexts && splitTexts[0])
                splitTexts[0].split(",").forEach(function (t) { return expressionArguments.push(t.trim().replace("(", "").replace(")", "")); });
        }
        return expressionArguments;
    };
    Linq.expressionColumns = function (expression, isNonValidationExpression) {
        if (isNonValidationExpression === void 0) { isNonValidationExpression = false; }
        var columns = [];
        var splitExpressions = [];
        if (typeof expression == "string") {
            expression.split("=>")[1].split(" && ").forEach(function (t) {
                t.split(" || ").forEach(function (x) {
                    splitExpressions.push(x.trim().split(' ')[0]);
                });
            });
            splitExpressions.forEach(function (t) {
                var splitText = t.split('.');
                if (splitText.length == 2)
                    columns.push({ propName: splitText[1].trim() });
                else {
                    var arrayProp = splitText[1].split('[');
                    var jObject = {
                        propName: splitText[splitText.length - 1].trim(),
                        objectPropName: arrayProp[0],
                        arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined
                    };
                    columns.push(jObject);
                }
            });
        }
        else {
            columns = Linq.expressionParser(expression, isNonValidationExpression);
        }
        return columns;
    };
    Linq.dynamicConfigParser = function (expression, propName) {
        var controlNames = [];
        var expressionString = expression.toString();
        var expressionArguments = Linq.extractArguments(expressionString);
        var splitString = expressionString.replace(new RegExp(/\r?\n|\r|;/g), ' ').replace(/["%()\{}=\\????`'#<>|,;:+-]+/g, " ").split(/ /g);
        if (expressionArguments.length > 3)
            expressionArguments.splice(expressionArguments.length - 1, 1);
        expressionArguments.forEach(function (t) {
            splitString.filter(function (x) { return x != t + "." + propName && x.startsWith(t + "."); }).forEach(function (x) {
                var split = x.split('.');
                if (split.length == 2)
                    controlNames.push({ propName: x.replace(t + ".", '') });
                else {
                    var arrayProp = split[1].split('[');
                    var jObject = {
                        propName: split[split.length - 1].trim(),
                        objectPropName: arrayProp[0],
                        arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined,
                    };
                    controlNames.push(jObject);
                }
            });
        });
        return controlNames;
    };
    return Linq;
}());

var AnnotationTypes = {
    numeric: 'numeric',
    required: 'required',
    minLength: 'minLength',
    maxLength: 'maxLength',
    minNumber: 'minNumber',
    maxNumber: 'maxNumber',
    pattern: 'pattern',
    password: 'password',
    compare: 'compare',
    minDate: 'minDate',
    maxDate: 'maxDate',
    alpha: 'alpha',
    alphaNumeric: 'alphaNumeric',
    email: 'email',
    hexColor: 'hexColor',
    lowerCase: 'lowerCase',
    url: 'url',
    upperCase: 'upperCase',
    nested: 'nested',
    propArray: 'propArray',
    propObject: 'propObject',
    contains: 'contains',
    range: 'range',
    custom: 'custom',
    digit: "digit",
    creditCard: "creditCard",
    time: "time",
    json: "json",
    greaterThan: "greaterThan",
    greaterThanEqualTo: "greaterThanEqualTo",
    lessThan: "lessThan",
    lessThanEqualTo: "lessThanEqualTo",
    choice: "choice",
    different: "different",
    even: "even",
    odd: "odd",
    factor: "factor",
    leapYear: "leapYear",
    allOf: "allOf",
    oneOf: "oneOf",
    noneOf: "noneOf",
    mac: "mac",
    ascii: "ascii",
    dataUri: "dataUri",
    port: "port",
    latLong: "latLong",
    extension: "extension",
    fileSize: "fileSize",
    endsWith: "endsWith",
    startsWith: "startsWith",
    primeNumber: "primeNumber",
    latitude: "latitude",
    longitude: "longitude",
    compose: "compose",
    rule: "rule",
    file: "file",
    image: "image",
    unique: "unique",
    notEmpty: "notEmpty",
    ip: "ip",
    cusip: "cusip",
    grid: "grid",
    date: 'date',
    and: 'and',
    or: 'or',
    not: 'not',
    minTime: 'minTime',
    maxTime: 'maxTime',
    requiredTrue: 'requiredTrue',
    mask: 'mask',
    iban: 'iban'
};

var PROPERTY = "property";
var OBJECT_PROPERTY = "objectProperty";
var ARRAY_PROPERTY = "arrayProperty";
var STRING = "string";
var MESSAGE = "message";
var BLANK = "";

var ELEMENT_VALUE = "value";
var BLUR = "blur";
var FOCUS = "focus";
var CHANGE = "change";
var KEY_DOWN = "keydown";
var KEY_PRESS = "keypress";
var PASTE = "paste";

var INPUT = "INPUT";
var SELECT = "SELECT";
var CHECKBOX = "checkbox";
var RADIO = "radio";
var FILE = "file";
var TEXTAREA = "textarea";

var ValidationAlphabetLocale = {
    'danish': 'danish',
    'french': 'french',
    'german': 'german',
    'greek': 'greek',
    'spanish': 'spanish',
    'russian': 'russian'
};

var DECORATORS = {
    disabled: 'disabled',
    error: 'error',
    trim: 'trim',
    ltrim: 'ltrim',
    rtrim: 'rtrim',
    blacklist: 'blacklist',
    stripLow: 'stripLow',
    toBoolean: 'toBoolean',
    toDate: 'toDate',
    toDouble: 'toDouble',
    toFloat: 'toFloat',
    toInt: 'toInt',
    string: 'toString',
    whitelist: 'whitelist',
    escape: 'escape',
    prefix: 'prefix',
    suffix: 'suffix',
    sanitize: 'sanitize',
    elementClass: 'elementClass'
};

var defaultContainer = new (/** @class */ (function () {
    function class_1() {
        this.instances = [];
        this.modelIncrementCount = 0;
    }
    class_1.prototype.get = function (instanceFunc) {
        var instance = this.instances.filter(function (instance) { return instance.instance === instanceFunc; })[0];
        return instance;
    };
    class_1.prototype.getInstance = function (target, parameterIndex, propertyKey, decoratorType) {
        var isPropertyKey = (propertyKey != undefined);
        var instanceFunc = !isPropertyKey ? target : target.constructor;
        var instance = this.instances.filter(function (instance) { return instance.instance === instanceFunc; })[0];
        if (!instance)
            instance = this.addInstanceContainer(instanceFunc);
        return instance;
    };
    class_1.prototype.addPropsConfig = function (target, configs) {
        var e_1, _a, e_2, _b;
        var instanceContainer = this.instances.filter(function (instance) { return instance.instance == target; })[0];
        if (instanceContainer) {
            try {
                for (var configs_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(configs), configs_1_1 = configs_1.next(); !configs_1_1.done; configs_1_1 = configs_1.next()) {
                    var config = configs_1_1.value;
                    var _loop_1 = function (prop) {
                        var propertyInfo = instanceContainer.properties.filter(function (t) { return t.name == prop && (t.propertyType !== OBJECT_PROPERTY && t.propertyType !== ARRAY_PROPERTY); })[0];
                        if (propertyInfo) {
                            this_1.addPropConfig(target, [propertyInfo], config);
                        }
                        else if (prop === ":all:")
                            this_1.addPropConfig(target, instanceContainer.properties.filter(function (t) { return t.propertyType !== OBJECT_PROPERTY && t.propertyType !== ARRAY_PROPERTY; }), config);
                    };
                    var this_1 = this;
                    try {
                        for (var _c = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(config.propNames)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var prop = _d.value;
                            _loop_1(prop);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (configs_1_1 && !configs_1_1.done && (_a = configs_1.return)) _a.call(configs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (configs === undefined)
            this.addInstanceContainer(target);
    };
    class_1.prototype.addPropConfig = function (target, properties, config) {
        var e_3, _a;
        try {
            for (var properties_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                var propertyInfo = properties_1_1.value;
                var excludeProp = false;
                if (config.excludePropNames)
                    excludeProp = config.excludePropNames.filter(function (t) { return t == propertyInfo.name; })[0] !== undefined;
                if (!excludeProp) {
                    if (config.validationConfig)
                        for (var typeName in config.validationConfig) {
                            this.init({ constructor: target }, 0, propertyInfo.name, typeName, config.validationConfig[typeName] === true ? undefined : config.validationConfig[typeName], false);
                        }
                    if (config.error)
                        this.addDecoratorConfig({ constructor: target }, 0, propertyInfo.name, config.error, DECORATORS.error);
                    if (config.disable)
                        this.addDecoratorConfig({ constructor: target }, 0, propertyInfo.name, config.disable, DECORATORS.disabled);
                    if (config.elementClass)
                        this.addDecoratorConfig({ constructor: target }, 0, propertyInfo.name, config.elementClass, DECORATORS.elementClass);
                    if (config.ignore)
                        propertyInfo.ignore = config.ignore;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    class_1.prototype.addSanitizer = function (target, parameterIndex, propertyKey, decoratorType, value) {
        var instance = this.getInstance(target, parameterIndex, propertyKey, decoratorType);
        if (instance) {
            if (!instance.sanitizers[propertyKey])
                instance.sanitizers[propertyKey] = [];
            instance.sanitizers[propertyKey].push({ name: decoratorType, config: value });
        }
    };
    class_1.prototype.addDecoratorConfig = function (target, parameterIndex, propertyKey, config, decoratorType) {
        var isPropertyKey = (propertyKey != undefined);
        var instanceFunc = !isPropertyKey ? target : target.constructor;
        var instance = this.instances.filter(function (instance) { return instance.instance === instanceFunc; })[0];
        if (!instance)
            instance = this.addInstanceContainer(instanceFunc);
        instance.nonValidationDecorators[decoratorType].conditionalExpressions[propertyKey] = config.conditionalExpression;
        var columns = Linq.expressionColumns(config.conditionalExpression, true);
        columns.forEach(function (column) {
            if (column.argumentIndex !== -1) {
                var columnName = (!column.objectPropName) ? "" + column.propName + RXCODE + column.argumentIndex : column.objectPropName + "." + column.propName + RXCODE + column.argumentIndex;
                if (!instance.nonValidationDecorators[decoratorType].changeDetection[columnName])
                    instance.nonValidationDecorators[decoratorType].changeDetection[columnName] = [];
                var disabledColumns = instance.nonValidationDecorators[decoratorType].changeDetection[columnName];
                if (disabledColumns.indexOf(columnName) === -1)
                    disabledColumns.push(propertyKey);
            }
            else {
                if (!instance.nonValidationDecorators[decoratorType].controlProp[propertyKey])
                    instance.nonValidationDecorators[decoratorType].controlProp[propertyKey] = {};
                instance.nonValidationDecorators[decoratorType].controlProp[propertyKey][column.propName.replace(";", "")] = true;
            }
        });
    };
    class_1.prototype.init = function (target, parameterIndex, propertyKey, annotationType, config, isAsync) {
        var decoratorConfiguration = {
            propertyIndex: parameterIndex,
            propertyName: propertyKey,
            annotationType: annotationType,
            config: config,
            isAsync: isAsync
        };
        var isPropertyKey = (propertyKey != undefined);
        this.addAnnotation(!isPropertyKey ? target : target.constructor, decoratorConfiguration);
    };
    class_1.prototype.initPropertyObject = function (name, propertyType, entity, target, config) {
        var propertyInfo = {
            name: name,
            propertyType: propertyType,
            entity: entity,
            dataPropertyName: config ? config.name : undefined,
            entityProvider: config ? config.entityProvider : undefined
        };
        defaultContainer.addProperty(target.constructor, propertyInfo);
    };
    class_1.prototype.addInstanceContainer = function (instanceFunc) {
        var instanceContainer = {
            instance: instanceFunc,
            propertyAnnotations: [],
            properties: [],
            nonValidationDecorators: {
                disabled: {
                    conditionalExpressions: {},
                    changeDetection: {},
                    controlProp: {}
                }, error: {
                    conditionalExpressions: {},
                    changeDetection: {},
                    controlProp: {}
                }, elementClass: {
                    conditionalExpressions: {},
                    changeDetection: {},
                    controlProp: {}
                }
            },
            sanitizers: {}
        };
        this.instances.push(instanceContainer);
        return instanceContainer;
    };
    class_1.prototype.addProperty = function (instanceFunc, propertyInfo, isFromAnnotation) {
        if (isFromAnnotation === void 0) { isFromAnnotation = false; }
        var instance = this.instances.filter(function (instance) { return instance.instance === instanceFunc; })[0];
        if (instance) {
            this.addPropertyInfo(instance, propertyInfo, !isFromAnnotation);
        }
        else {
            instance = this.addInstanceContainer(instanceFunc);
            this.addPropertyInfo(instance, propertyInfo);
        }
    };
    class_1.prototype.addPropertyInfo = function (instance, propertyInfo, isAddProperty) {
        if (isAddProperty === void 0) { isAddProperty = false; }
        var property = this.getProperty(instance, propertyInfo);
        if (!property)
            instance.properties.push(propertyInfo);
        else if (isAddProperty)
            this.updateProperty(property, propertyInfo);
    };
    class_1.prototype.addAnnotation = function (instanceFunc, decoratorConfiguration) {
        this.addProperty(instanceFunc, { propertyType: PROPERTY, name: decoratorConfiguration.propertyName }, true);
        var instance = this.instances.filter(function (instance) { return instance.instance === instanceFunc; })[0];
        if (instance)
            instance.propertyAnnotations.push(decoratorConfiguration);
        else {
            instance = this.addInstanceContainer(instanceFunc);
            instance.propertyAnnotations.push(decoratorConfiguration);
        }
        if (decoratorConfiguration.config && decoratorConfiguration.config.conditionalExpression) {
            var columns = Linq.expressionColumns(decoratorConfiguration.config.conditionalExpression);
            this.addChangeValidation(instance, decoratorConfiguration.propertyName, columns);
        }
        if (decoratorConfiguration.config && decoratorConfiguration.config.dynamicConfig) {
            var columns = Linq.dynamicConfigParser(decoratorConfiguration.config.dynamicConfig, decoratorConfiguration.propertyName);
            this.addChangeValidation(instance, decoratorConfiguration.propertyName, columns);
        }
        this.setConditionalColumns(instance, decoratorConfiguration);
    };
    class_1.prototype.setConditionalColumns = function (instance, decoratorConfiguration) {
        var _this = this;
        if (instance && decoratorConfiguration.config) {
            if (decoratorConfiguration.annotationType == AnnotationTypes.and || decoratorConfiguration.annotationType == AnnotationTypes.or || decoratorConfiguration.annotationType == AnnotationTypes.not) {
                Object.keys(decoratorConfiguration.config.validation).forEach(function (t) {
                    if (typeof decoratorConfiguration.config.validation[t] !== "boolean")
                        _this.setLogicalConditional(instance, t, decoratorConfiguration.config.validation[t].fieldName, decoratorConfiguration.propertyName);
                });
            }
            else
                this.setLogicalConditional(instance, decoratorConfiguration.annotationType, decoratorConfiguration.config.fieldName, decoratorConfiguration.propertyName);
        }
    };
    class_1.prototype.setLogicalConditional = function (instance, annotationType, fieldName, propertyName) {
        if (instance && ((annotationType == AnnotationTypes.compare || annotationType == AnnotationTypes.greaterThan || annotationType == AnnotationTypes.greaterThanEqualTo || annotationType == AnnotationTypes.lessThan || annotationType == AnnotationTypes.lessThanEqualTo || annotationType == AnnotationTypes.different || annotationType == AnnotationTypes.factor || annotationType == AnnotationTypes.minTime || annotationType == AnnotationTypes.maxTime) || (annotationType == AnnotationTypes.creditCard && fieldName) || ((annotationType == AnnotationTypes.minDate || annotationType == AnnotationTypes.maxDate) && fieldName))) {
            this.setConditionalValueProp(instance, fieldName, propertyName);
        }
    };
    class_1.prototype.setConditionalValueProp = function (instance, propName, refPropName) {
        if (propName) {
            var splitProps = propName.split ? propName.split('.') : '';
            if (splitProps.length < 2) {
                if (!instance.conditionalValidationProps)
                    instance.conditionalValidationProps = {};
                if (!instance.conditionalValidationProps[propName])
                    instance.conditionalValidationProps[propName] = [];
                if (instance.conditionalValidationProps[propName].indexOf(refPropName) == -1)
                    instance.conditionalValidationProps[propName].push(refPropName);
            }
            else
                this.addChangeValidation(instance, refPropName, [{ argumentIndex: 1, objectPropName: splitProps[0], propName: splitProps[1], referencePropName: refPropName }]);
        }
    };
    class_1.prototype.addChangeValidation = function (instance, propertyName, columns) {
        if (instance) {
            if (!instance.conditionalValidationProps)
                instance.conditionalValidationProps = {};
            columns.forEach(function (t) {
                if (t.propName && !t.objectPropName) {
                    if (!instance.conditionalValidationProps[t.propName])
                        instance.conditionalValidationProps[t.propName] = [];
                    if (instance.conditionalValidationProps[t.propName].indexOf(propertyName) == -1)
                        instance.conditionalValidationProps[t.propName].push(propertyName);
                }
                else {
                    if (t.propName && t.objectPropName) {
                        if (!instance.conditionalObjectProps)
                            instance.conditionalObjectProps = [];
                        t.referencePropName = propertyName;
                        instance.conditionalObjectProps.push(t);
                    }
                }
            });
        }
    };
    class_1.prototype.clearInstance = function (instanceFunc) {
        var instance = this.instances.filter(function (instance) { return instance.instance === instanceFunc; })[0];
        if (instance) {
            var indexOf = this.instances.indexOf(instance);
            this.instances.splice(indexOf, 1);
        }
    };
    class_1.prototype.getProperty = function (instance, propertyInfo) {
        return instance.properties.filter(function (t) { return t.name == propertyInfo.name; })[0];
    };
    class_1.prototype.updateProperty = function (property, currentProperty) {
        property.dataPropertyName = currentProperty.dataPropertyName;
        property.defaultValue = currentProperty.defaultValue;
    };
    return class_1;
}()))();

var RegExRule = {
    alpha: /^[a-zA-Z]+$/,
    alphaExits: /[a-zA-Z]/,
    alphaWithSpace: /^[a-zA-Z\s]+$/,
    macId: /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,
    onlyDigit: /^[0-9]+$/,
    isDigitExits: /[0-9]/,
    lowerCase: /[a-z]/,
    upperCase: /[A-Z]/,
    specialCharacter: /[!@#$%^&*(),.?":{}|<>]/,
    advancedEmail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    basicEmail: /^(([^<>()\[\]\\.,,:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    alphaNumeric: /^[0-9a-zA-Z]+$/,
    alphaNumericWithSpace: /^[0-9a-zA-Z\s]+$/,
    hexColor: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
    strictHexColor: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
    float: /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/,
    decimal: /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/,
    hexaDecimal: /^[0-9A-F]+$/i,
    date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
    time: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    timeWithSeconds: /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
    url: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/,
    localhostUrl: /^(https?:\/\/localhost\:([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|localhost\::([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|https?:\/\/localhost\::([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))$/,
    interanetUrl: /^(https?:\/\/[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9])$/,
    ascii: /^[\x00-\x7F]+$/,
    dataUri: /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)$/i,
    lat: /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,
    long: /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,
    ipV4: /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
    ipV6: /^((?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(:[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(:[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(:[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(:[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,6}|:)|(?::((?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(%[0-9a-zA-Z]{1,})?$/,
    cidrV4: /^(3[0-2]|[12]?[0-9])$/,
    cidrV6: /^(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    cusip: /^[0-9A-Z]{9}$/,
    grid: /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g
};

var ALPHABET = "alphabet";
var DIGIT = "digit";
var CONTAINS = "contains";
var LOWERCASE = "lowerCase";
var UPPERCASE = "upperCase";
var SPECIAL_CHARACTER = "specialCharacter";
var MIN_LENGTH = "minLength";
var MAX_LENGTH = "maxLength";
var RegexValidator = /** @class */ (function () {
    function RegexValidator() {
    }
    RegexValidator.isExits = function (value, regex) {
        return value.match(regex) != null;
    };
    RegexValidator.isValid = function (value, regex) {
        return regex.test(value);
    };
    RegexValidator.isNotBlank = function (value, isRemoveSpace) {
        if (isRemoveSpace === void 0) { isRemoveSpace = false; }
        return !isRemoveSpace ?
            (value === 0) || (value !== undefined && value !== null && value !== "") :
            (value === 0) || (value !== undefined && value !== null && String(value).trim() !== "");
    };
    RegexValidator.isValidPassword = function (passwordValidation, value) {
        var e_1, _a;
        var isValid = false;
        var keyName = "status";
        var objectProperties = Object.getOwnPropertyNames(passwordValidation);
        try {
            for (var objectProperties_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(objectProperties), objectProperties_1_1 = objectProperties_1.next(); !objectProperties_1_1.done; objectProperties_1_1 = objectProperties_1.next()) {
                var propertyName = objectProperties_1_1.value;
                switch (propertyName) {
                    case ALPHABET:
                        isValid = RegexValidator.isExits(value, RegExRule.alphaExits);
                        keyName = ALPHABET;
                        break;
                    case DIGIT:
                        isValid = RegexValidator.isValid(value, RegExRule.isDigitExits);
                        keyName = DIGIT;
                        break;
                    case CONTAINS:
                        isValid = value.indexOf(passwordValidation[CONTAINS]) != -1;
                        keyName = CONTAINS;
                        break;
                    case LOWERCASE:
                        isValid = RegexValidator.isValid(value, RegExRule.lowerCase);
                        keyName = LOWERCASE;
                        break;
                    case UPPERCASE:
                        isValid = RegexValidator.isValid(value, RegExRule.upperCase);
                        keyName = UPPERCASE;
                        break;
                    case SPECIAL_CHARACTER:
                        isValid = RegexValidator.isExits(value, RegExRule.specialCharacter);
                        keyName = SPECIAL_CHARACTER;
                        break;
                    case MIN_LENGTH:
                        isValid = value.length >= passwordValidation[propertyName];
                        keyName = MIN_LENGTH;
                        break;
                    case MAX_LENGTH:
                        isValid = value.length <= passwordValidation[propertyName];
                        keyName = MAX_LENGTH;
                        break;
                }
                if (!isValid)
                    break;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (objectProperties_1_1 && !objectProperties_1_1.done && (_a = objectProperties_1.return)) _a.call(objectProperties_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return { isValid: isValid, keyName: keyName };
    };
    RegexValidator.isZero = function (value) {
        return value == 0;
    };
    RegexValidator.commaRegex = function () {
        return new RegExp(",", "g");
    };
    return RegexValidator;
}());

var ReactiveFormConfig = /** @class */ (function () {
    function ReactiveFormConfig() {
    }
    ReactiveFormConfig.set = function (jObject) {
        if (jObject)
            ReactiveFormConfig.json = jObject;
    };
    ReactiveFormConfig.get = function (path) {
        var e_1, _a;
        var jObject;
        if (ReactiveFormConfig.json) {
            var splitPath = path.split('.');
            try {
                for (var splitPath_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(splitPath), splitPath_1_1 = splitPath_1.next(); !splitPath_1_1.done; splitPath_1_1 = splitPath_1.next()) {
                    var columnName = splitPath_1_1.value;
                    jObject = (!jObject) ? ReactiveFormConfig.json[columnName] : jObject[columnName];
                    if (!jObject)
                        break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (splitPath_1_1 && !splitPath_1_1.done && (_a = splitPath_1.return)) _a.call(splitPath_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return jObject;
    };
    ReactiveFormConfig.i18n = {};
    ReactiveFormConfig.number = {};
    ReactiveFormConfig.json = {};
    ReactiveFormConfig.autoInstancePush = false;
    return ReactiveFormConfig;
}());

function isObjectType(value) {
    return !(typeof value == "string" || typeof value === "number" || typeof value === "boolean" || value instanceof Date);
}
function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
function clone(jsonObject) {
    var e_1, _a;
    var jObject = {};
    if (isObjectType(jsonObject)) {
        for (var columnName in jsonObject) {
            if ((columnName != "formGroup")) {
                if (Array.isArray(jsonObject[columnName])) {
                    jObject[columnName] = [];
                    try {
                        for (var _b = (e_1 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(jsonObject[columnName])), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var row = _c.value;
                            if (isObject(row))
                                jObject[columnName].push(clone(row));
                            else
                                jObject[columnName].push(row);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else if (typeof jsonObject[columnName] == "object" && !(jsonObject[columnName] instanceof RegExp))
                    jObject[columnName] = clone(jsonObject[columnName]);
                else
                    jObject[columnName] = jsonObject[columnName];
            }
        }
        return jObject;
    }
    else
        return jsonObject;
}
function merge(firstObject, secondObject) {
    var e_2, _a;
    for (var columnName in secondObject) {
        if (Array.isArray(secondObject[columnName])) {
            if (!firstObject[columnName])
                firstObject[columnName] = [];
            try {
                for (var _b = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(secondObject[columnName])), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var row = _c.value;
                    firstObject[columnName].push(clone(row));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else if (typeof firstObject[columnName] == "object" && !(firstObject[columnName] instanceof RegExp))
            firstObject[columnName] = merge(firstObject[columnName], secondObject[columnName]);
        else
            firstObject[columnName] = secondObject[columnName];
    }
    return firstObject;
}
function isMatched(jsonObject, compareObject) {
    var isModified = false;
    for (var columnName in compareObject) {
        if (Array.isArray(jsonObject[columnName])) {
            for (var i = 0; i < jsonObject[columnName].length; i++) {
                isModified = isMatched(jsonObject[columnName][i], compareObject[columnName][i]);
            }
        }
        else if (typeof jsonObject[columnName] == "object" && !(jsonObject[columnName] instanceof RegExp))
            isModified = isMatched(jsonObject[columnName], compareObject[columnName]);
        else
            isModified = !(jsonObject[columnName] == compareObject[columnName]);
        if (isModified)
            break;
    }
    return isModified;
}

var ObjectMaker = /** @class */ (function () {
    function ObjectMaker() {
    }
    ObjectMaker.toJson = function (key, config, values) {
        ObjectMaker.setMessage();
        var message = config ? config.message : null;
        var messageKey = undefined;
        if (!message && config && config.messageKey)
            messageKey = config.messageKey;
        var messageText = (message) ? message : (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.validationMessage && ReactiveFormConfig.json.validationMessage[messageKey || key]) ? ReactiveFormConfig.json.validationMessage[messageKey || key] : '';
        values.forEach(function (t, index) {
            messageText = messageText.replace("{{" + index + "}}", t);
        });
        var jObject = {};
        jObject[key] = {
            message: messageText, refValues: values
        };
        if (config && config.isAddMessageKey)
            jObject["messageKey"] = messageKey;
        return jObject;
    };
    ObjectMaker.null = function () {
        return null;
    };
    ObjectMaker.getPasswordMessage = function () {
        var messageKey = "password";
        return (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.validationMessage && ReactiveFormConfig.json.validationMessage[messageKey]) ? ReactiveFormConfig.json.validationMessage[messageKey] : '';
    };
    ObjectMaker.setMessage = function () {
        if (ReactiveFormConfig.i18n && ReactiveFormConfig.i18n.validationMessage && ObjectMaker.language !== ReactiveFormConfig.i18n.language) {
            if (!ReactiveFormConfig.json)
                ReactiveFormConfig.json = {};
            ReactiveFormConfig.json.validationMessage = ReactiveFormConfig.i18n.validationMessage();
            ObjectMaker.language = ReactiveFormConfig.i18n.language;
        }
    };
    ObjectMaker.language = "";
    return ObjectMaker;
}());

var PROP_ARRAY = "propArray";
var RxFormArray = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RxFormArray, _super);
    function RxFormArray(arrayObject, controls, validatorOrOpts, asyncValidator, arrayConfig) {
        var _this = _super.call(this, controls, validatorOrOpts, asyncValidator) || this;
        _this.arrayObject = arrayObject;
        _this.arrayConfig = arrayConfig;
        _this._isModified = false;
        _this._modified = [];
        _this.cloneObject(arrayObject);
        return _this;
    }
    Object.defineProperty(RxFormArray.prototype, "isModified", {
        get: function () {
            return this._isModified;
        },
        enumerable: true,
        configurable: true
    });
    RxFormArray.prototype.push = function (control, isAddedInstance) {
        if (isAddedInstance === void 0) { isAddedInstance = false; }
        var formGroup = this.root;
        if (this.arrayObject)
            if (control.modelInstance) {
                if (!isAddedInstance)
                    this.arrayObject.push(control.modelInstance);
                else
                    this.arrayObject[this.arrayObject.length] = control.modelInstance;
            }
        _super.prototype.push.call(this, control);
        if (formGroup[VALUE_CHANGED_SYNC])
            formGroup.valueChangedSync();
        this.patch();
        this.checkValidation();
    };
    RxFormArray.prototype.patch = function () {
        this.checkModification();
        if (this.parent)
            this.parent[PATCH]();
    };
    RxFormArray.prototype.resetForm = function (options) {
        if (options && options.index >= 0 && options.groupOption) {
            this.controls[options.index].resetForm(options.groupOption);
        }
        else {
            for (var i = 0; i < this._baseValue.length; i++) {
                if (this.controls[i] !== undefined)
                    this.controls[i].resetForm({ value: this._baseValue[i] });
                else if (options && options.pushFunction) {
                    var formGroup = options.pushFunction(this._baseValue[i]);
                    this.push(formGroup);
                }
            }
        }
    };
    RxFormArray.prototype.commit = function () {
        var e_1, _a;
        this._baseValue = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var formGroup = _c.value;
                formGroup.commit();
                this._baseValue.push(clone(formGroup.value));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.patch();
    };
    RxFormArray.prototype.removeAt = function (index, isRemovedInstance) {
        if (isRemovedInstance === void 0) { isRemovedInstance = false; }
        var formGroup = this.root;
        if (!isRemovedInstance)
            this.arrayObject.splice(index, 1);
        else {
            for (var i = index; i < this.arrayObject.length - 1; i++)
                this.arrayObject[i] = this.arrayObject[i + 1];
            this.arrayObject.pop();
        }
        _super.prototype.removeAt.call(this, index);
        if (formGroup[VALUE_CHANGED_SYNC])
            formGroup.valueChangedSync();
        this.patch();
        this.checkValidation();
    };
    RxFormArray.prototype.checkValidation = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.arrayConfig != undefined && _this.arrayConfig.allowMaxIndex && _this.length > _this.arrayConfig.allowMaxIndex)
                _this.setErrors(ObjectMaker.toJson(PROP_ARRAY, _this.arrayConfig, [_this.length, _this.arrayConfig.allowMaxIndex]));
            else if (_this.errors && _this.errors[PROP_ARRAY])
                delete _this.errors[PROP_ARRAY];
        });
    };
    RxFormArray.prototype.checkModification = function () {
        this._isModified = !(this._baseValue.length == this.controls.length);
        if (!this._isModified)
            for (var i = 0; i < this.controls.length; i++) {
                this._isModified = isMatched(this._baseValue[i], this.controls[i].value);
                if (this._isModified)
                    break;
            }
    };
    RxFormArray.prototype.cloneObject = function (value) {
        var e_2, _a;
        this._baseValue = [];
        try {
            for (var value_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                var row = value_1_1.value;
                this._baseValue.push(clone(row));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    return RxFormArray;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]));

var NumericValueType;
(function (NumericValueType) {
    NumericValueType[NumericValueType["PositiveNumber"] = 1] = "PositiveNumber";
    NumericValueType[NumericValueType["NegativeNumber"] = 2] = "NegativeNumber";
    NumericValueType[NumericValueType["Both"] = 3] = "Both";
})(NumericValueType || (NumericValueType = {}));

var IpVersion;
(function (IpVersion) {
    IpVersion[IpVersion["V4"] = 1] = "V4";
    IpVersion[IpVersion["V6"] = 2] = "V6";
    IpVersion[IpVersion["AnyOne"] = 3] = "AnyOne";
})(IpVersion || (IpVersion = {}));

var ErrorMessageBindingStrategy;
(function (ErrorMessageBindingStrategy) {
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["None"] = 0] = "None";
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnSubmit"] = 1] = "OnSubmit";
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnDirty"] = 2] = "OnDirty";
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnTouched"] = 3] = "OnTouched";
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnDirtyOrTouched"] = 4] = "OnDirtyOrTouched";
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnDirtyOrSubmit"] = 5] = "OnDirtyOrSubmit";
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnTouchedOrSubmit"] = 6] = "OnTouchedOrSubmit";
})(ErrorMessageBindingStrategy || (ErrorMessageBindingStrategy = {}));

var ResetFormType;
(function (ResetFormType) {
    ResetFormType[ResetFormType["ControlsOnly"] = 1] = "ControlsOnly";
    ResetFormType[ResetFormType["FormGroupsOnly"] = 2] = "FormGroupsOnly";
    ResetFormType[ResetFormType["FormArraysOnly"] = 3] = "FormArraysOnly";
    ResetFormType[ResetFormType["ControlsAndFormGroupsOnly"] = 4] = "ControlsAndFormGroupsOnly";
    ResetFormType[ResetFormType["DefinedPropsOnly"] = 5] = "DefinedPropsOnly";
    ResetFormType[ResetFormType["All"] = 6] = "All";
})(ResetFormType || (ResetFormType = {}));

var MODEL_INSTANCE_VALUE = "modelInstanceValue";
var ApplicationUtil = /** @class */ (function () {
    function ApplicationUtil() {
    }
    ApplicationUtil.getParentObjectValue = function (control) {
        if (control.parent) {
            var parent_1 = this.parentObjectValue(control.parent);
            return parent_1.value;
        }
        return {};
    };
    ApplicationUtil.getParentModelInstanceValue = function (control) {
        if (control.parent) {
            var parent_2 = this.parentObjectValue(control.parent);
            return parent_2[MODEL_INSTANCE_VALUE];
        }
        return {};
    };
    ApplicationUtil.getRootFormGroup = function (control) {
        if (control.parent) {
            return this.getRootFormGroup(control.parent);
        }
        return control;
    };
    ApplicationUtil.getParentControl = function (control) {
        if (control.parent) {
            var parent_3 = this.parentObjectValue(control.parent);
            return parent_3;
        }
        return control;
    };
    ApplicationUtil.getFormControlName = function (control) {
        var controlName = '';
        if (control.parent) {
            for (var formControlName in control.parent.controls) {
                if (control.parent.controls[formControlName] == control) {
                    controlName = formControlName;
                    break;
                }
            }
        }
        return controlName;
    };
    ApplicationUtil.getParentFormArray = function (control) {
        if (control.parent && !(control.parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || control.parent instanceof RxFormArray)) {
            var parent_4 = this.getParentFormArray(control.parent);
            return parent_4;
        }
        return control.parent;
    };
    ApplicationUtil.toLower = function (value) {
        if (value)
            return String(value).toLowerCase();
        return value;
    };
    ApplicationUtil.getControl = function (fieldName, formGroup) {
        var splitText = fieldName.split('.');
        if (splitText.length > 1) {
            var formControl = formGroup;
            splitText.forEach(function (name, index) { formControl = formControl.controls[name]; });
            return formControl;
        }
        else
            return formGroup.controls[fieldName];
    };
    ApplicationUtil.getFormControl = function (fieldName, control) {
        var splitText = fieldName.split('.');
        if (splitText.length > 1 && control.parent) {
            var formControl = this.getParentControl(control);
            splitText.forEach(function (name, index) { formControl = formControl.controls[name]; });
            return formControl;
        }
        return (control.parent) ? control.parent.get([fieldName]) : undefined;
    };
    ApplicationUtil.parentObjectValue = function (control) {
        if (!control.parent)
            return control;
        else
            control = this.parentObjectValue(control.parent);
        return control;
    };
    ApplicationUtil.isNumeric = function (value) {
        return (value - parseFloat(value) + 1) >= 0;
    };
    ApplicationUtil.notEqualTo = function (primaryValue, secondaryValue) {
        var firstValue = (primaryValue === undefined || primaryValue === null) ? "" : primaryValue;
        var secondValue = (secondaryValue === undefined || secondaryValue === null) ? "" : secondaryValue;
        if (firstValue instanceof Date && secondValue instanceof Date)
            return +firstValue != +secondValue;
        return (firstValue != secondValue);
    };
    ApplicationUtil.numericValidation = function (allowDecimal, acceptValue) {
        var decimalSymbol;
        if (ReactiveFormConfig && ReactiveFormConfig.number) {
            decimalSymbol = (ReactiveFormConfig.json && ReactiveFormConfig.json.allowDecimalSymbol) ? ReactiveFormConfig.json.allowDecimalSymbol : ReactiveFormConfig.number.decimalSymbol;
        }
        else {
            decimalSymbol = ".";
        }
        acceptValue = (acceptValue == undefined) ? NumericValueType.PositiveNumber : acceptValue;
        var regex = /^[0-9]+$/;
        switch (acceptValue) {
            case NumericValueType.PositiveNumber:
                regex = (!allowDecimal) ? /^[0-9]+$/ : (decimalSymbol == "." || decimalSymbol == undefined) ? /^[0-9\.]+$/ : /^[0-9\,]+$/;
                break;
            case NumericValueType.NegativeNumber:
                regex = (!allowDecimal) ? /^[-][0-9]+$/ : (decimalSymbol == "." || decimalSymbol == undefined) ? /^[-][0-9\.]+$/ : /^[-][0-9\,]+$/;
                break;
            case NumericValueType.Both:
                regex = (!allowDecimal) ? /^[-|+]?[0-9]+$/ : (decimalSymbol == "." || decimalSymbol == undefined) ? /^[-|+]?[0-9\.]+$/ : /^[-|+]?[0-9\,]+$/;
                break;
        }
        return regex;
    };
    ApplicationUtil.configureControl = function (control, config, type) {
        if (!control.validatorConfig) {
            var jObject = {};
            jObject[type] = config;
            Object.assign(control, { validatorConfig: jObject });
        }
        else
            control.validatorConfig[type] = config;
    };
    ApplicationUtil.lowerCaseWithTrim = function (value) {
        return typeof value === "string" ? value.toLowerCase().trim() : String(value).toLowerCase().trim();
    };
    /** Check if a value is an object */
    ApplicationUtil.isObject = function (value) {
        return Object.prototype.toString.call(value) === '[object Object]';
    };
    /** Check if a value is an object */
    ApplicationUtil.isArray = function (value) {
        return Array.isArray(value);
    };
    ApplicationUtil.cloneValue = function (value) {
        return ApplicationUtil.isObject(value) ? ApplicationUtil.isArray(value) ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(value) : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value) : value;
    };
    return ApplicationUtil;
}());

var ISO_DATE_REGEX = /^(?:[\+-]?\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[\.,]\d+(?!:))?)?(?:\2[0-5]\d(?:[\.,]\d+)?)?(?:[zZ]|(?:[\+-])(?:[01]\d|2[0-3]):?(?:[0-5]\d)?)?)?)?$/;
var DateProvider = /** @class */ (function () {
    function DateProvider() {
    }
    DateProvider.prototype.isDate = function (value) {
        return value instanceof Date && !isNaN(value.valueOf());
    };
    DateProvider.prototype.getRegex = function (dateFormat) {
        var regExp;
        switch (dateFormat) {
            case 'ymd':
                regExp = "^(?:[0-9]{4})-(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])$";
                break;
            case 'dmy':
                regExp = "^(3[01]|[12][0-9]|0?[1-9])-(1[0-2]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$";
                break;
            case 'mdy':
                regExp = "^(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$";
                break;
        }
        return new RegExp(regExp);
    };
    DateProvider.prototype.regex = function () {
        var regExp;
        if (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator)
            regExp = this.getRegex(ReactiveFormConfig.json.internationalization.dateFormat);
        else
            regExp = (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat) ? this.getRegex(ReactiveFormConfig.json.baseConfig.dateFormat) : this.getRegex("mdy");
        return regExp;
    };
    DateProvider.prototype.getDate = function (value, isBaseFormat) {
        var _a, _b, _c;
        if (isBaseFormat === void 0) { isBaseFormat = false; }
        var year, month, day;
        if (!this.isDate(value)) {
            var seperator = void 0;
            var dateFormat = void 0;
            if (ISO_DATE_REGEX.test(value)) {
                return new Date(value);
            }
            else {
                seperator = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.seperator ? ReactiveFormConfig.json.baseConfig.seperator : "/";
                dateFormat = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat ? ReactiveFormConfig.json.baseConfig.dateFormat : "mdy";
            }
            if (!isBaseFormat && ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator) {
                seperator = ReactiveFormConfig.json.internationalization.seperator;
                dateFormat = ReactiveFormConfig.json.internationalization.dateFormat;
            }
            switch (dateFormat) {
                case 'ymd':
                    _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(value.split(seperator).map(function (val) { return +val; }), 3), year = _a[0], month = _a[1], day = _a[2];
                    break;
                case 'dmy':
                    _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(value.split(seperator).map(function (val) { return +val; }), 3), day = _b[0], month = _b[1], year = _b[2];
                    break;
                case 'mdy':
                    _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(value.split(seperator).map(function (val) { return +val; }), 3), month = _c[0], day = _c[1], year = _c[2];
                    break;
            }
            return new Date(year, month - 1, day);
        }
        else
            return value;
    };
    DateProvider.prototype.isValid = function (value, config) {
        if (typeof value == "string") {
            // Fixed issue : https://github.com/rxweb/rxweb/issues/280 & feature request : https://github.com/rxweb/rxweb/issues/295
            if (config && config.allowISODate && ISO_DATE_REGEX.test(value))
                return true;
            var seperator = '/';
            if (ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.seperator)
                seperator = ReactiveFormConfig.json.internationalization.seperator;
            if (value.split(seperator).length !== 3)
                return false;
            value = value.replace(seperator, '-').replace(seperator, '-');
            return this.regex().test(value);
        }
        else
            return this.isDate(value);
    };
    DateProvider.prototype.getConfigDateValue = function (config) {
        var date = config.value;
        if (config.value && typeof config.value == "string") {
            date = this.getDate(config.value, true);
        }
        return date;
    };
    DateProvider.prototype.getCompareDate = function (config, control) {
        var date = this.getConfigDateValue(config);
        if (config.fieldName) {
            var checkControl = ApplicationUtil.getFormControl(config.fieldName, control);
            if (checkControl && checkControl.value) {
                date = this.getDate(checkControl.value);
            }
        }
        return date;
    };
    return DateProvider;
}());

function isNotBlank(value) {
    return (value !== undefined && value !== null && value !== "");
}
function trim(value) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.trim();
    return value;
}
function ltrim(value) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.replace(/^\s+/g, '');
    return value;
}
function rtrim(value) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.replace(/\s+$/g, '');
    return value;
}
function blacklist(value, chars) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.replace(new RegExp('[$' + chars + ']+', 'g'), '');
    return value;
}
function stripLow(value, keepNewLines) {
    var chars = keepNewLines === true ? '\x00-\x09\x0B\x0C\x0E-\x1F\x7F' : '\x00-\x1F\x7F';
    return blacklist(value, chars);
}
function toBoolean(value, strict) {
    if (isNotBlank(value)) {
        if (strict) {
            return value === '1' || value === 'true';
        }
        return value !== '0' && value !== 'false' && value !== '';
    }
    return value;
}
function toFloat(value) {
    if (isNotBlank(value)) {
        var decimalSymbol = '.';
        if (ReactiveFormConfig && ReactiveFormConfig.number) {
            decimalSymbol = (ReactiveFormConfig.json && ReactiveFormConfig.json.allowDecimalSymbol) ? ReactiveFormConfig.json.allowDecimalSymbol : ReactiveFormConfig.number.decimalSymbol;
        }
        if (decimalSymbol == ',' && typeof value == "string")
            value = value.replace(',', '.');
        if (ApplicationUtil.isNumeric(value))
            return parseFloat(value);
    }
    return null;
}
function toDouble(value) {
    return toFloat(value);
}
function toInt(value, radix) {
    if (isNotBlank(value))
        if (ApplicationUtil.isNumeric(value))
            return parseInt(value, radix || 10);
    return null;
}
function toString(value, radix) {
    if (isNotBlank(value))
        return String(value);
    return value;
}
function whitelist(value, chars) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.replace(new RegExp("[^" + chars + "]+", 'g'), '');
    return value;
}
function toDate(value, config) {
    var dateProvider = new DateProvider();
    if (isNotBlank(value))
        if (typeof value === "string" && dateProvider.isValid(value, config)) {
            value = dateProvider.getDate(value);
            return value;
        }
    return null;
}
function escape(value) {
    if (isNotBlank(value))
        return (value.replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\//g, '&#x2F;')
            .replace(/\\/g, '&#x5C;')
            .replace(/`/g, '&#96;'));
    return value;
}
function prefix(value, text) {
    if (isNotBlank(value))
        return "" + text + value;
    return value;
}
function suffix(value, text) {
    if (isNotBlank(value))
        return "" + value + text;
    return value;
}
function sanitize(value, config) {
    return config.custom(value);
}
var SANITIZERS = {
    trim: trim,
    ltrim: ltrim,
    rtrim: rtrim,
    blacklist: blacklist,
    stripLow: stripLow,
    toBoolean: toBoolean,
    toDouble: toDouble,
    toFloat: toFloat,
    toInt: toInt,
    'toString': toString,
    whitelist: whitelist,
    toDate: toDate,
    escape: escape,
    prefix: prefix,
    suffix: suffix,
    sanitize: sanitize
};

function instanceProvider(instanceFunc, entityObject) {
    var instance = defaultContainer.get(instanceFunc);
    var prototype = entityObject ? entityObject.__proto__ : getInstance(instanceFunc, []).__proto__;
    if (prototype.__proto__) {
        var isLoop = false;
        do {
            isLoop = prototype.__proto__.constructor != Object;
            if (isLoop) {
                var extendClassInstance = defaultContainer.get(prototype.__proto__.constructor);
                instance = merge(clone(instance), clone(extendClassInstance));
                prototype = prototype.__proto__;
            }
        } while (isLoop);
    }
    return instance;
}
function getInstance(model, objectArguments) {
    var classInstance = Object.create(model.prototype);
    try {
        model.apply(classInstance, objectArguments);
    }
    catch (ex) {
        ///resolution of issue https://github.com/rxweb/rxweb/issues/188
        classInstance = Reflect.construct(model, objectArguments);
    }
    return classInstance;
}

var BaseFormBuilder = /** @class */ (function () {
    function BaseFormBuilder() {
    }
    BaseFormBuilder.prototype.createInstance = function () {
        var instance = {};
        defaultContainer.modelIncrementCount = defaultContainer.modelIncrementCount + 1;
        var modelName = "RxWebModel" + defaultContainer.modelIncrementCount;
        instance.constructor = Function("\"use strict\";return(function " + modelName + "(){ })")();
        return instance;
    };
    BaseFormBuilder.prototype.createClassObject = function (model, formBuilderConfiguration, classInstance) {
        var _this = this;
        var instanceContainer = defaultContainer.get(model);
        var autoInstanceConfig = formBuilderConfiguration ? formBuilderConfiguration.autoInstanceConfig : undefined;
        if (!autoInstanceConfig) {
            return classInstance && typeof classInstance != "function" ? classInstance : getInstance(model, []);
        }
        else {
            classInstance = classInstance && typeof classInstance != "function" ? classInstance : getInstance(model, autoInstanceConfig.arguments || []);
            if (autoInstanceConfig.objectPropInstanceConfig && autoInstanceConfig.objectPropInstanceConfig.length > 0) {
                autoInstanceConfig.objectPropInstanceConfig.forEach(function (t) {
                    var objectProperty = instanceContainer.properties.filter(function (property) { return property.name == t.propertyName && property.propertyType == OBJECT_PROPERTY; })[0];
                    if (objectProperty) {
                        var data = classInstance[t.propertyName];
                        classInstance[t.propertyName] = getInstance(objectProperty.entity, t.arguments || []);
                        if (data)
                            _this.setObjectValue(data, classInstance[t.propertyName]);
                    }
                });
            }
            if (autoInstanceConfig.arrayPropInstanceConfig && autoInstanceConfig.arrayPropInstanceConfig.length > 0) {
                autoInstanceConfig.arrayPropInstanceConfig.forEach(function (t) {
                    var property = instanceContainer.properties.filter(function (property) { return property.name == t.propertyName && property.propertyType == ARRAY_PROPERTY; })[0];
                    if (property) {
                        var data = classInstance[t.propertyName];
                        classInstance[t.propertyName] = [];
                        for (var i = 0; i < t.rowItems; i++) {
                            var instance = getInstance(property.entity, t.arguments || []);
                            if (data && data[i])
                                _this.setObjectValue(data[i], instance);
                            classInstance[t.propertyName].push(instance);
                        }
                    }
                });
            }
            return classInstance;
        }
    };
    BaseFormBuilder.prototype.updateObject = function (model, entityObject, formBuilderConfiguration) {
        var _this = this;
        var instanceContainer = instanceProvider(model);
        var classInstance = getInstance(model, []);
        if (instanceContainer) {
            instanceContainer.properties.forEach(function (t) {
                var e_1, _a;
                var entity = ((t.propertyType == OBJECT_PROPERTY || t.propertyType == ARRAY_PROPERTY) && t.entity) ? t.entity : (formBuilderConfiguration && formBuilderConfiguration.genericEntities) ? formBuilderConfiguration.genericEntities[t.name] : undefined;
                if (!entity && t.entityProvider)
                    entity = t.entityProvider.call(entityObject);
                switch (t.propertyType) {
                    case PROPERTY:
                        classInstance[t.name] = _this.getValue(entityObject, t, formBuilderConfiguration);
                        break;
                    case OBJECT_PROPERTY:
                        var objectValue = _this.getValue(entityObject, t, formBuilderConfiguration);
                        if (objectValue)
                            classInstance[t.name] = _this.updateObject(entity, objectValue, formBuilderConfiguration);
                        break;
                    case ARRAY_PROPERTY:
                        var arrayObjectValue = _this.getValue(entityObject, t, formBuilderConfiguration);
                        if (arrayObjectValue && Array.isArray(arrayObjectValue)) {
                            classInstance[t.name] = [];
                            try {
                                for (var arrayObjectValue_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayObjectValue), arrayObjectValue_1_1 = arrayObjectValue_1.next(); !arrayObjectValue_1_1.done; arrayObjectValue_1_1 = arrayObjectValue_1.next()) {
                                    var row = arrayObjectValue_1_1.value;
                                    var instanceObject = _this.updateObject(entity, row, formBuilderConfiguration);
                                    classInstance[t.name].push(instanceObject);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (arrayObjectValue_1_1 && !arrayObjectValue_1_1.done && (_a = arrayObjectValue_1.return)) _a.call(arrayObjectValue_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        break;
                }
            });
        }
        return classInstance;
    };
    BaseFormBuilder.prototype.instaceProvider = function (instanceFunc, entityObject) {
        return instanceProvider(instanceFunc, entityObject);
    };
    BaseFormBuilder.prototype.getDefaultValue = function (propertyInfo, value, formBuilderConfiguration) {
        var defaultValue = (formBuilderConfiguration && formBuilderConfiguration.propsConfig && formBuilderConfiguration.propsConfig[propertyInfo.name] && formBuilderConfiguration.propsConfig[propertyInfo.name].defaultValue && !RegexValidator.isNotBlank(value)) ? formBuilderConfiguration.propsConfig[propertyInfo.name].defaultValue : (propertyInfo.defaultValue != undefined && !RegexValidator.isNotBlank(value)) ?
            propertyInfo.defaultValue :
            value;
        return defaultValue;
    };
    BaseFormBuilder.prototype.sanitizeValue = function (instanceContainer, propertyName, value, entityObject, baseObject) {
        var e_2, _a;
        if (instanceContainer.sanitizers && instanceContainer.sanitizers[propertyName]) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(instanceContainer.sanitizers[propertyName]), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sanitizer = _c.value;
                    value = SANITIZERS[sanitizer.name](value, sanitizer.config);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (entityObject[propertyName] !== undefined && entityObject[propertyName] !== value)
            entityObject[propertyName] = value;
        if (baseObject[propertyName] !== undefined && baseObject[propertyName] !== value)
            baseObject[propertyName] = value;
        return value;
    };
    BaseFormBuilder.prototype.getValue = function (entityObject, propertyInfo, formBuilderConfiguration) {
        var propValue = (propertyInfo.dataPropertyName) ? entityObject[propertyInfo.dataPropertyName] : entityObject[propertyInfo.name];
        return this.getDefaultValue(propertyInfo, propValue, formBuilderConfiguration);
    };
    BaseFormBuilder.prototype.setObjectValue = function (entityObject, classInstance) {
        for (var column in entityObject) {
            classInstance[column] = entityObject[column];
        }
    };
    return BaseFormBuilder;
}());

var FormBuilderConfiguration = /** @class */ (function () {
    function FormBuilderConfiguration(formBuilderConfiguration) {
        if (formBuilderConfiguration)
            for (var column in formBuilderConfiguration)
                this[column] = formBuilderConfiguration[column];
    }
    return FormBuilderConfiguration;
}());

var DisableProvider = /** @class */ (function () {
    function DisableProvider(decoratorType, entityObject) {
        this.decoratorType = decoratorType;
        this.entityObject = entityObject;
    }
    DisableProvider.prototype.getFormGroupName = function (currentFormGroup) {
        var e_1, _a;
        var keyName = '';
        if (currentFormGroup.parent)
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(currentFormGroup.parent.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var controlName = _c.value;
                    if (currentFormGroup.parent.controls[controlName] == currentFormGroup) {
                        keyName = controlName;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        return keyName;
    };
    DisableProvider.prototype.zeroArgumentProcess = function (control, columnName) {
        var disabledColumns = [];
        this.getDisabledColumns(control.parent, "" + columnName + RXCODE + "0", false).forEach(function (t) { return disabledColumns.push(t); });
        var path = this.topControlPath(control, columnName);
        var splitPath = path.split(".");
        if (splitPath.length > 1) {
            var rootFormGroup = ApplicationUtil.getRootFormGroup(control);
            this.getDisabledColumns(rootFormGroup, "" + path + RXCODE + "0", true).forEach(function (t) { return disabledColumns.push(t); });
            var controlPath = '';
            for (var i = 0; i < splitPath.length - 2; i++) {
                var controlName = splitPath[i];
                controlPath = "" + path.replace(controlName + ".", '') + RXCODE + "-0";
                if (rootFormGroup.controls[controlName]) {
                    this.getDisabledColumns(rootFormGroup.controls[controlName], controlPath, true, controlName).forEach(function (t) { return disabledColumns.push(t); });
                    rootFormGroup = rootFormGroup.controls[controlName];
                }
            }
        }
        return disabledColumns;
    };
    DisableProvider.prototype.getDisabledColumns = function (formGroup, columnName, isRoot, pathName) {
        if (pathName === void 0) { pathName = ""; }
        if (formGroup[MODEL_INSTANCE]) {
            var instanceContainer = instanceProvider(formGroup[MODEL_INSTANCE].constructor, this.entityObject);
            return this.getChangeDetectionColumns(instanceContainer, columnName, isRoot, pathName);
        }
        return [];
    };
    DisableProvider.prototype.getChangeDetectionColumns = function (instanceContainer, columnName, isRoot, pathName) {
        var _this = this;
        if (pathName === void 0) { pathName = ""; }
        var conditionalDisableControls = [];
        var columns = instanceContainer.nonValidationDecorators[this.decoratorType].changeDetection[columnName];
        if (columns) {
            columns.forEach(function (t) {
                conditionalDisableControls.push({ controlPath: pathName ? pathName + "." + t : t, conditionalExpression: instanceContainer.nonValidationDecorators[_this.decoratorType].conditionalExpressions[t], isRoot: isRoot });
            });
        }
        return conditionalDisableControls;
    };
    DisableProvider.prototype.topControlPath = function (control, columnName) {
        if (control.parent) {
            var name_1 = this.getFormGroupName(control.parent);
            if (name_1) {
                columnName = name_1 + "." + columnName;
                return this.topControlPath(control.parent, columnName);
            }
        }
        return columnName;
    };
    DisableProvider.prototype.childControlDisabledExpression = function (formGroup, columnName, path) {
        var _this = this;
        if (path === void 0) { path = ""; }
        var disabledColumns = [];
        if (formGroup[MODEL_INSTANCE]) {
            var instanceContainer = defaultContainer.get(formGroup[MODEL_INSTANCE].constructor);
            if (instanceContainer) {
                this.getChangeDetectionColumns(instanceContainer, columnName, true, path).forEach(function (t) { return disabledColumns.push(t); });
                var props = instanceContainer.properties.filter(function (t) { return t.propertyType == OBJECT_PROPERTY; });
                props.forEach(function (t) {
                    if (formGroup.controls[t.name]) {
                        var columns = _this.getDisabledColumns(formGroup.controls[t.name], columnName, true, path ? path + "." + t.name : "" + t.name);
                        columns.forEach(function (x) { return disabledColumns.push(x); });
                        _this.childControlDisabledExpression(formGroup.controls[t.name], columnName, path ? path + "." + t.name : "" + t.name).forEach(function (y) { return disabledColumns.push(y); });
                    }
                });
            }
        }
        return disabledColumns;
    };
    DisableProvider.prototype.oneArgumentProcess = function (control, columnName) {
        var path = this.topControlPath(control, columnName);
        var rootFormGroup = ApplicationUtil.getRootFormGroup(control);
        var childColumns = this.childControlDisabledExpression(rootFormGroup, path);
        return childColumns;
    };
    return DisableProvider;
}());

var DIRTY = "dirty";
var TOUCHED = "touched";
var UNTOUCHED = "untouched";
var PRISTINE = "pristine";
var PENDING = "pending";
var RxFormControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RxFormControl, _super);
    function RxFormControl(formState, validator, asyncValidator, entityObject, baseObject, controlName, _sanitizers) {
        var _this = _super.call(this, formState, validator, asyncValidator) || this;
        _this.entityObject = entityObject;
        _this.baseObject = baseObject;
        _this._sanitizers = _sanitizers;
        _this._errorMessages = [];
        _this._childColumns = [];
        _this._refDisableControls = [];
        _this._refMessageControls = [];
        _this._refClassNameControls = [];
        _this._isPassedExpression = false;
        _this._dirty = false;
        _this.backEndErrors = {};
        _this._baseValue = formState === undefined ? null : _this.getFormState(formState);
        _this._isModified = false;
        _this.keyName = controlName;
        _this._validators = validator.validators;
        _this._asyncValidators = validator.asyncValidators;
        _this._errorMessageBindingStrategy = ReactiveFormConfig.get("reactiveForm.errorMessageBindingStrategy");
        if (_this._sanitizers) {
            var floatSanitizer = _this._sanitizers.filter(function (t) { return t.name == "toFloat"; })[0];
            if (floatSanitizer && _this._baseValue && ReactiveFormConfig.number && ReactiveFormConfig.number.decimalSymbol == ",") {
                var baseValue = String(_this._baseValue);
                if (baseValue.indexOf('.') != -1) {
                    _this._baseValue = baseValue.replace(".", ReactiveFormConfig.number.decimalSymbol);
                    _super.prototype.setValue.call(_this, _this._baseValue);
                }
            }
        }
        return _this;
    }
    Object.defineProperty(RxFormControl.prototype, "errors", {
        get: function () {
            if (this._language && this._language != this.getLanguage() && this.validator) {
                this.errors = this.validator(this);
            }
            return this._errors;
        },
        set: function (value) {
            this._errors = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RxFormControl.prototype, "errorMessages", {
        get: function () {
            if (!this._messageExpression) {
                if (this._errorMessages.length == 0 && this.errors)
                    this.setControlErrorMessages();
            }
            else if (this._messageExpression && !this._isPassedExpression)
                return [];
            if (!this.errors && this._errorMessages.length > 0)
                this.setControlErrorMessages();
            if (this._language != this.getLanguage())
                this.setControlErrorMessages();
            return this._errorMessages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RxFormControl.prototype, "errorMessage", {
        get: function () {
            if (!this._messageExpression) {
                if (this._errorMessage == undefined && this.errors)
                    this.setControlErrorMessages();
            }
            else if (this._messageExpression && !this._isPassedExpression)
                return undefined;
            if (!this.errors && this._errorMessage)
                this.setControlErrorMessages();
            if (this._language != this.getLanguage())
                this.setControlErrorMessages();
            return this._errorMessage;
        },
        enumerable: true,
        configurable: true
    });
    RxFormControl.prototype.getFormState = function (value) {
        var baseValue = value;
        if (Array.isArray(value)) {
            baseValue = [];
            value.forEach(function (t) { return baseValue.push(t); });
        }
        return baseValue;
    };
    Object.defineProperty(RxFormControl.prototype, "isModified", {
        get: function () {
            return this._isModified;
        },
        enumerable: true,
        configurable: true
    });
    RxFormControl.prototype.getValidators = function () {
        return this.getValidatorSource(this._validators);
    };
    RxFormControl.prototype.getAsyncValidators = function () {
        return this.getValidatorSource(this._asyncValidators);
    };
    RxFormControl.prototype.getValidatorSource = function (validators) {
        if (validators)
            return Array.isArray(validators) ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(validators) : [validators];
        return [];
    };
    RxFormControl.prototype.setValidators = function (newValidator) {
        this._validators = newValidator;
        _super.prototype.setValidators.call(this, newValidator);
    };
    RxFormControl.prototype.setAsyncValidators = function (newValidator) {
        this._asyncValidators = newValidator;
        _super.prototype.setAsyncValidators.call(this, newValidator);
    };
    RxFormControl.prototype.setValue = function (value, options) {
        this.parent.changing = true;
        var parsedValue = this.getSanitizedValue(value);
        if (options && options.dirty)
            this.baseObject[this.keyName] = value;
        this.entityObject[this.keyName] = parsedValue;
        _super.prototype.setValue.call(this, value, options);
        this.bindError();
        this.bindClassName();
        this.executeExpressions();
        this.callPatch();
        if (options && !options.updateChanged && this.root[VALUE_CHANGED_SYNC]) {
            this.root[VALUE_CHANGED_SYNC]();
        }
        this.parent.changing = false;
    };
    RxFormControl.prototype.getControlValue = function () {
        return this.getSanitizedValue(this.value);
    };
    RxFormControl.prototype.bindError = function () {
        if (this._messageExpression)
            this._isPassedExpression = this.executeExpression(this._messageExpression, this);
        this.setControlErrorMessages();
        this.errors = this.errors;
    };
    RxFormControl.prototype.bindClassName = function () {
        if (this.updateOnElementClass && typeof this.updateOnElementClass === "function") {
            var className = this.executeExpression(this._classNameExpression, this);
            var updateElement = this.updateOnElementClass;
            updateElement(className);
        }
    };
    RxFormControl.prototype.setBackEndErrors = function (error) {
        var _this = this;
        Object.keys(error).forEach(function (key) { return _this.backEndErrors[key] = error[key]; });
        this.setControlErrorMessages();
    };
    RxFormControl.prototype.clearBackEndErrors = function (errors) {
        var _this = this;
        if (!errors)
            this.backEndErrors = {};
        else
            Object.keys(errors).forEach(function (t) { return delete _this.backEndErrors[t]; });
        this.setControlErrorMessages();
    };
    RxFormControl.prototype.markAsTouched = function (opts) {
        var currentState = this.touched;
        _super.prototype.markAsTouched.call(this, opts);
        if (currentState != this.touched)
            this.runControlPropChangeExpression([TOUCHED, UNTOUCHED]);
    };
    RxFormControl.prototype.markAsUntouched = function (opts) {
        var currentState = this.untouched;
        _super.prototype.markAsUntouched.call(this, opts);
        if (currentState != this.untouched)
            this.runControlPropChangeExpression([UNTOUCHED, TOUCHED]);
    };
    RxFormControl.prototype.markAsDirty = function (opts) {
        var currentState = this._dirty;
        _super.prototype.markAsDirty.call(this, opts);
        this._dirty = true;
        if (currentState != this._dirty)
            this.runControlPropChangeExpression([DIRTY]);
    };
    RxFormControl.prototype.markAsPristine = function (opts) {
        var currentState = this.pristine;
        _super.prototype.markAsDirty.call(this, opts);
        if (currentState != this.pristine)
            this.runControlPropChangeExpression([PRISTINE]);
    };
    RxFormControl.prototype.markAsPending = function (opts) {
        var currentState = this.pending;
        _super.prototype.markAsDirty.call(this, opts);
        if (currentState != this.pending)
            this.runControlPropChangeExpression([PENDING]);
    };
    RxFormControl.prototype.runControlPropChangeExpression = function (propNames) {
        var _this = this;
        propNames.forEach(function (name) {
            if ((_this._controlProp && _this._messageExpression && _this._controlProp[name]) || (!_this._messageExpression && _this.checkErrorMessageStrategy()))
                _this.bindError();
            if (_this._classNameControlProp && _this._classNameControlProp[name])
                _this.bindClassName();
        });
    };
    RxFormControl.prototype.refresh = function () {
        this.getMessageExpression(this.parent, this.keyName);
        this.bindConditionalControls(DECORATORS.disabled, "_refDisableControls");
        this.bindConditionalControls(DECORATORS.error, "_refMessageControls");
        this.bindConditionalControls(DECORATORS.elementClass, "_refClassNameControls");
        this.executeExpressions();
        this.bindError();
    };
    RxFormControl.prototype.reset = function (value) {
        if (value !== undefined)
            this.setValue(value);
        else
            this.setValue(this.getFormState(this._baseValue));
        this._dirty = false;
    };
    RxFormControl.prototype.commit = function () {
        this._baseValue = this.value;
        this.callPatch();
    };
    RxFormControl.prototype.callPatch = function () {
        this._isModified = this.getValue(this._baseValue) != this.getValue(this.value);
        if (this.parent && this.parent[PATCH])
            this.parent[PATCH](this.keyName);
    };
    RxFormControl.prototype.checkErrorMessageStrategy = function () {
        var isBind = true;
        switch (this._errorMessageBindingStrategy) {
            case ErrorMessageBindingStrategy.OnSubmit:
                isBind = this.parent.submitted;
                break;
            case ErrorMessageBindingStrategy.OnDirty:
                isBind = this._dirty;
                break;
            case ErrorMessageBindingStrategy.OnTouched:
                isBind = this.touched;
                break;
            case ErrorMessageBindingStrategy.OnDirtyOrTouched:
                isBind = this._dirty || this.touched;
                break;
            case ErrorMessageBindingStrategy.OnDirtyOrSubmit:
                isBind = this._dirty || this.parent.submitted;
                break;
            case ErrorMessageBindingStrategy.OnTouchedOrSubmit:
                isBind = this.touched || this.parent.submitted;
                break;
            default:
                isBind = true;
        }
        return isBind;
    };
    RxFormControl.prototype.executeExpressions = function () {
        this.processExpression("_refDisableControls", "disabled");
        this.processExpression("_refMessageControls", "bindError");
        this.processExpression("_refClassNameControls", "bindClassName");
    };
    RxFormControl.prototype.getMessageExpression = function (formGroup, keyName) {
        if (formGroup[MODEL_INSTANCE]) {
            var instanceContainer = defaultContainer.get(formGroup[MODEL_INSTANCE].constructor);
            if (instanceContainer) {
                this._messageExpression = instanceContainer.nonValidationDecorators.error.conditionalExpressions[keyName];
                this._controlProp = instanceContainer.nonValidationDecorators.error.controlProp[this.keyName];
                this._classNameExpression = instanceContainer.nonValidationDecorators.elementClass.conditionalExpressions[keyName];
                this._classNameControlProp = instanceContainer.nonValidationDecorators.elementClass.controlProp[keyName];
                if (this._classNameExpression)
                    this.updateOnElementClass = true;
            }
        }
    };
    RxFormControl.prototype.getSanitizedValue = function (value) {
        var e_1, _a;
        if (this._sanitizers) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this._sanitizers), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sanitizer = _c.value;
                    value = SANITIZERS[sanitizer.name](value, sanitizer.config);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return value;
    };
    RxFormControl.prototype.bindConditionalControls = function (decoratorType, refName) {
        var _this = this;
        this._disableProvider = new DisableProvider(decoratorType, this.entityObject);
        this[refName] = this._disableProvider.zeroArgumentProcess(this, this.keyName);
        this._disableProvider.oneArgumentProcess(this, "" + this.keyName + RXCODE + "1").forEach(function (t) { return _this[refName].push(t); });
    };
    RxFormControl.prototype.setControlErrorMessages = function () {
        var _this = this;
        if ((!this._messageExpression && this.checkErrorMessageStrategy()) || this._isPassedExpression) {
            this._errorMessages = [];
            if (this.errors) {
                Object.keys(this.errors).forEach(function (t) {
                    if (_this.parent) {
                        _this.parent[CONTROLS_ERROR][_this.keyName] = _this._errorMessage = _this.getErrorMessage(_this.errors, t);
                        if (!_this._errorMessage) {
                            var errorObject = ObjectMaker.toJson(t, undefined, [_this.errors[t][t]]);
                            _this.parent[CONTROLS_ERROR][_this.keyName] = _this._errorMessage = _this.getErrorMessage(errorObject, t);
                        }
                    }
                    else
                        _this._errorMessage = _this.getErrorMessage(_this.errors, t);
                    _this._errorMessages.push(_this._errorMessage);
                });
            }
            else {
                this._errorMessage = undefined;
                if (this.parent) {
                    this.parent[CONTROLS_ERROR][this.keyName] = undefined;
                    delete this.parent[CONTROLS_ERROR][this.keyName];
                }
            }
            var backEndErrors = Object.keys(this.backEndErrors);
            if (backEndErrors.length > 0)
                backEndErrors.forEach(function (t) { _this._errorMessages.push(_this._errorMessage = _this.backEndErrors[t]); });
        }
        else {
            this._errorMessages = [];
            this._errorMessage = undefined;
        }
        this._language = this.getLanguage();
    };
    RxFormControl.prototype.getLanguage = function () {
        return (ReactiveFormConfig.i18n && ReactiveFormConfig.i18n.language) ? ReactiveFormConfig.i18n.language : undefined;
    };
    RxFormControl.prototype.getErrorMessage = function (errorObject, keyName) {
        if (errorObject[keyName][MESSAGE])
            return errorObject[keyName][MESSAGE];
        return;
    };
    RxFormControl.prototype.processExpression = function (propName, operationType) {
        var e_2, _a;
        if (this[propName])
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this[propName]), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var controlInfo = _c.value;
                    var control = controlInfo.isRoot ? ApplicationUtil.getControl(controlInfo.controlPath, ApplicationUtil.getRootFormGroup(this)) : ApplicationUtil.getFormControl(controlInfo.controlPath, this);
                    if (control) {
                        if (operationType == "disabled") {
                            var result = this.executeExpression(controlInfo.conditionalExpression, control);
                            if (result)
                                control.disable();
                            else
                                control.enable();
                        }
                        else if (operationType == "bindError")
                            control.bindError();
                        else if (operationType == "bindClassName")
                            control.bindClassName();
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
    };
    RxFormControl.prototype.executeExpression = function (expression, control) {
        return expression.call(control.parent[MODEL_INSTANCE], control, ApplicationUtil.getParentModelInstanceValue(this), control.parent[MODEL_INSTANCE]);
    };
    RxFormControl.prototype.getValue = function (value) {
        return value !== undefined && value !== null && value !== "" ? value : "";
    };
    return RxFormControl;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]));

var OBJECT = "object";
var BOOLEAN$1 = "boolean";
var FormDataProvider = /** @class */ (function () {
    function FormDataProvider() {
    }
    FormDataProvider.prototype.convertToFormData = function (jObject, options) {
        return this.convertFormData(jObject, undefined, undefined, options);
    };
    FormDataProvider.prototype.convertFormData = function (jObject, currentFormData, parentKey, options) {
        var _this = this;
        var formData = currentFormData || new FormData();
        var propName = '';
        for (var columnName in jObject) {
            propName = !parentKey ? columnName : parentKey + "[" + columnName + "]";
            if (Array.isArray(jObject[columnName])) {
                jObject[columnName].forEach(function (row, index) {
                    propName = columnName + "[" + index + "]";
                    if (typeof row === OBJECT)
                        _this.convertFormData(row, formData, propName, options);
                    else
                        _this.nonObjectValueBind(row, formData, propName, options);
                });
            }
            else if (jObject[columnName] !== null && !(jObject[columnName] instanceof Date) && typeof jObject[columnName] === OBJECT && !(jObject[columnName] instanceof File || jObject[columnName] instanceof FileList)) {
                this.convertFormData(jObject[columnName], formData, propName, options);
            }
            else {
                this.nonObjectValueBind(jObject[columnName], formData, propName, options);
            }
        }
        return formData;
    };
    FormDataProvider.prototype.nonObjectValueBind = function (value, formData, propName, options) {
        if (typeof value === BOOLEAN$1) {
            var formValue = value ? true : false;
            formData.append(propName, formValue);
        }
        else if (value instanceof FileList) {
            for (var i = 0; i < value.length; i++) {
                formData.append(options && options.excludeImageIndex && value.length === 1 ? propName : propName + "[" + i + "]", value.item(i));
            }
        }
        else {
            if (RegexValidator.isNotBlank(value))
                formData.append(propName, value);
        }
    };
    return FormDataProvider;
}());

function isResetControl(controlName, control, options) {
    var isReset = true;
    if (options) {
        isReset = false;
        if (options.resetType)
            switch (options.resetType) {
                case ResetFormType.ControlsOnly:
                    isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"];
                    break;
                case ResetFormType.ControlsAndFormGroupsOnly:
                    isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"];
                    break;
                case ResetFormType.FormGroupsOnly:
                    isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"];
                    break;
                case ResetFormType.FormArraysOnly:
                    isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"];
                    break;
                case ResetFormType.DefinedPropsOnly:
                    isReset = options.value ? Object.keys(options.value).indexOf(controlName) != -1 : false;
                    break;
                default:
                    isReset = true;
                    break;
            }
        if (!isReset && options.with)
            isReset = options.with.filter(function (x) { return x.split('.')[0] == controlName.split('.')[0]; })[0] !== undefined;
        if (!isReset && options.value && (options.resetType === undefined || options.resetType !== ResetFormType.DefinedPropsOnly))
            isReset = true;
    }
    return isReset;
}
function getNestedOptions(controlName, options) {
    if (options) {
        var jObjectOptions = {};
        if (options.resetType)
            jObjectOptions.resetType = (options.resetType == ResetFormType.FormGroupsOnly || options.resetType == ResetFormType.FormArraysOnly) ? ResetFormType.ControlsOnly : options.resetType;
        if (options.with) {
            var nestedControls = options.with.filter(function (t) { return t.split('.')[0] == controlName; });
            var controlNames = nestedControls.map(function (x) {
                var splitControls = x.split('.');
                splitControls.splice(0, 1);
                return splitControls.join('.');
            });
            jObjectOptions.with = controlNames;
        }
        if (options.value && options.value[controlName])
            jObjectOptions.value = options.value[controlName];
        jObjectOptions = Object.keys(jObjectOptions).length > 0 ? jObjectOptions : undefined;
        return jObjectOptions;
    }
    return undefined;
}

var RxFormGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RxFormGroup, _super);
    function RxFormGroup(model, entityObject, controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, controls, validatorOrOpts, asyncValidator) || this;
        _this.model = model;
        _this.entityObject = entityObject;
        _this._modified = {};
        _this._isModified = false;
        _this.changing = false;
        _this.baseObject = {};
        for (var column in _this.entityObject)
            _this.baseObject[column] = _this.entityObject[column];
        _this.formDataProvider = new FormDataProvider();
        return _this;
    }
    RxFormGroup.prototype.bindPrimaryKey = function (modelInstance, jObject) {
        var instanceContainer = defaultContainer.get(modelInstance.constructor);
        if (instanceContainer) {
            var primaryKeyProp = instanceContainer.properties.filter(function (x) { return x.isPrimaryKey; })[0];
            if (primaryKeyProp && this.modelInstance[primaryKeyProp.name])
                jObject[primaryKeyProp.name] = this.modelInstance[primaryKeyProp.name];
        }
    };
    Object.defineProperty(RxFormGroup.prototype, "modifiedValue", {
        get: function () {
            var jObject = {};
            if (Object.keys(this._modified).length > 0) {
                this.bindPrimaryKey(this.modelInstance, jObject);
                for (var columnName in this._modified) {
                    if (this.controls[columnName] instanceof RxFormGroup)
                        jObject[columnName] = this.controls[columnName].modifiedValue;
                    else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                        var formArray = this.controls[columnName];
                        jObject[columnName] = [];
                        for (var i = 0; i < this._modified[columnName].length; i++) {
                            var modifiedValue = formArray.controls[i].modifiedValue;
                            if (Object.keys(modifiedValue).length > 0)
                                jObject[columnName].push(modifiedValue);
                        }
                        if (jObject[columnName].length == 0)
                            delete jObject[columnName];
                    }
                    else
                        jObject[columnName] = this._modified[columnName];
                }
                return jObject;
            }
            return this._modified;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RxFormGroup.prototype, "isModified", {
        get: function () {
            return this._isModified;
        },
        enumerable: true,
        configurable: true
    });
    RxFormGroup.prototype.patch = function (controlName) {
        if (controlName) {
            var control = this.controls[controlName];
            this.processModified(controlName, control);
        }
        else {
            this.nestedFormsModification();
        }
        this._isModified = Object.keys(this._modified).length > 0;
        if (!this._isModified)
            this.nestedArrayIsModified();
        if (this.parent && this.parent.patch)
            this.parent.patch();
    };
    RxFormGroup.prototype.isDirty = function () {
        var e_1, _a;
        var isDirty = false;
        for (var name_1 in this.value) {
            var currentValue = this.modelInstance[name_1];
            if (!(this.controls[name_1] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || this.controls[name_1] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"])) {
                isDirty = ApplicationUtil.notEqualTo(this.baseObject[name_1], currentValue);
            }
            else if (this.controls[name_1] instanceof RxFormGroup)
                isDirty = this.controls[name_1].isDirty();
            else if (this.controls[name_1] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                try {
                    for (var _b = (e_1 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.controls[name_1].controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var formGroup = _c.value;
                        isDirty = formGroup.isDirty();
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            if (isDirty)
                break;
        }
        return isDirty;
    };
    RxFormGroup.prototype.resetForm = function (options) {
        for (var name_2 in this.controls) {
            if (isResetControl(name_2, this.controls[name_2], options)) {
                if (this.controls[name_2] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
                    this.controls[name_2].resetForm(getNestedOptions(name_2, options));
                else if (this.controls[name_2] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                    this.controls[name_2].resetForm(options && options.value ? options.value[name_2] : undefined);
                }
                else {
                    if (options && options.value && RegexValidator.isNotBlank(options.value[name_2]))
                        this.controls[name_2].reset(options.value[name_2]);
                    else
                        this.controls[name_2].reset();
                }
            }
        }
    };
    RxFormGroup.prototype.commit = function () {
        for (var name_3 in this.controls) {
            if (this.controls[name_3] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
                this.controls[name_3].commit();
            else if (this.controls[name_3] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                this.controls[name_3].commit();
            }
            else {
                this.controls[name_3].commit();
            }
        }
    };
    RxFormGroup.prototype.patchModelValue = function (value, options) {
        var e_2, _a;
        if (value) {
            for (var name_4 in this.controls) {
                if (this.controls[name_4] instanceof RxFormGroup && value[name_4])
                    this.controls[name_4].patchModelValue(value[name_4], options);
                else if (this.controls[name_4] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] && Array.isArray(value[name_4])) {
                    var index = 0;
                    try {
                        for (var _b = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.controls[name_4].controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var formGroup = _c.value;
                            if (value[name_4][index])
                                formGroup.patchModelValue(value[name_4][index], options);
                            index = index + 1;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                else if (value[name_4] !== undefined)
                    this.controls[name_4].patchValue(value[name_4], options);
            }
        }
    };
    RxFormGroup.prototype.getErrorSummary = function (onlyMessage) {
        var _this = this;
        var jObject = {};
        Object.keys(this.controls).forEach(function (columnName) {
            var e_3, _a;
            if (_this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                var error = _this.controls[columnName].getErrorSummary(false);
                if (Object.keys(error).length > 0)
                    jObject[columnName] = error;
            }
            else if (_this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                var index = 0;
                try {
                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.controls[columnName].controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var formGroup = _c.value;
                        var error = formGroup.getErrorSummary(false);
                        if (Object.keys(error).length > 0) {
                            error.index = index;
                            if (!jObject[columnName])
                                jObject[columnName] = [];
                            jObject[columnName].push(error);
                        }
                        index++;
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            else {
                if (_this.controls[columnName].errors) {
                    var error = _this.controls[columnName].errors;
                    if (onlyMessage)
                        for (var validationName in error)
                            jObject[columnName] = error[validationName].message;
                    else
                        jObject[columnName] = error;
                }
            }
        });
        return jObject;
    };
    RxFormGroup.prototype.valueChangedSync = function () {
        var _this = this;
        Object.keys(this.controls).forEach(function (columnName) {
            var e_4, _a;
            if (!(_this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || _this.controls[columnName] instanceof RxFormArray) && !(_this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || _this.controls[columnName] instanceof RxFormGroup) && !(_this.entityObject[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || _this.entityObject[columnName] instanceof RxFormControl) && _this.controls[columnName].getControlValue && ApplicationUtil.notEqualTo(_this.controls[columnName].getControlValue(), _this.entityObject[columnName])) {
                _this.controls[columnName].setValue(_this.entityObject[columnName], { updateChanged: true });
            }
            else if ((_this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || _this.controls[columnName] instanceof RxFormArray)) {
                try {
                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.controls[columnName].controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var formGroup = _c.value;
                        formGroup.valueChangedSync();
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
            else if ((_this.controls[columnName] instanceof RxFormGroup)) {
                _this.controls[columnName].valueChangedSync();
            }
        });
    };
    RxFormGroup.prototype.refreshDisable = function () {
        var _this = this;
        Object.keys(this.controls).forEach(function (columnName) {
            if (!(_this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || _this.controls[columnName] instanceof RxFormArray) && !(_this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || _this.controls[columnName] instanceof RxFormGroup)) {
                _this.controls[columnName].refresh();
            }
            else if ((_this.controls[columnName] instanceof RxFormGroup)) {
                _this.controls[columnName].refreshDisable();
            }
        });
    };
    RxFormGroup.prototype.bindErrorMessages = function () {
        var _this = this;
        Object.keys(this.controls).forEach(function (columnName) {
            if (!(_this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || _this.controls[columnName] instanceof RxFormArray) && !(_this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || _this.controls[columnName] instanceof RxFormGroup)) {
                _this.controls[columnName].bindError();
            }
            else if ((_this.controls[columnName] instanceof RxFormGroup)) {
                _this.controls[columnName].bindErrorMessages();
            }
        });
    };
    Object.defineProperty(RxFormGroup.prototype, "submitted", {
        get: function () {
            return this._submitted;
        },
        set: function (value) {
            var _this = this;
            this._submitted = value;
            Object.keys(this.controls).forEach(function (columnName) {
                var e_5, _a;
                if (_this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                    var formArray = _this.controls[columnName];
                    try {
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(formArray.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var formGroup = _c.value;
                            formGroup.submitted = value;
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
                else if (_this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                    _this.controls[columnName].submitted = value;
                }
                else
                    _this.controls[columnName].bindError();
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RxFormGroup.prototype, "modelInstanceValue", {
        get: function () {
            return clone(this.entityObject);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RxFormGroup.prototype, "modelInstance", {
        get: function () {
            return this.entityObject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RxFormGroup.prototype, "controlsError", {
        get: function () {
            return this.getErrorSummary(true);
        },
        enumerable: true,
        configurable: true
    });
    RxFormGroup.prototype.toFormData = function (options) {
        return this.formDataProvider.convertToFormData(this.value, options);
    };
    RxFormGroup.prototype.processModified = function (controlName, control) {
        if (control.isModified)
            this._modified[controlName] = control.value;
        else
            delete this._modified[controlName];
        this._isModified = Object.keys(this._modified).length > 0;
    };
    RxFormGroup.prototype.nestedArrayIsModified = function () {
        for (var controlName in this.controls) {
            if (this.controls[controlName] instanceof RxFormArray)
                this._isModified = this.controls[controlName].isModified;
            if (this._isModified)
                break;
        }
    };
    RxFormGroup.prototype.setBackEndErrors = function (errors) {
        var _this = this;
        Object.keys(errors).forEach(function (controlName) {
            if (_this.controls[controlName]) {
                if (_this.controls[controlName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
                    _this.controls[controlName].setBackEndErrors(errors[controlName]);
                else
                    _this.controls[controlName].setBackEndErrors(errors[controlName]);
            }
        });
    };
    RxFormGroup.prototype.clearBackEndErrors = function (errors) {
        var _this = this;
        var clearErrors = errors ? Object.keys(errors) : Object.keys(this.controls);
        clearErrors.forEach(function (controlName) {
            if (_this.controls[controlName]) {
                if (_this.controls[controlName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
                    errors ? _this.controls[controlName].clearBackEndErrors(errors[controlName]) : _this.controls[controlName].clearBackEndErrors();
                else
                    errors ? _this.controls[controlName].clearBackEndErrors(errors[controlName]) : _this.controls[controlName].clearBackEndErrors();
            }
        });
    };
    RxFormGroup.prototype.nestedFormsModification = function () {
        var e_6, _a;
        for (var controlName in this.controls) {
            if (this.controls[controlName] instanceof RxFormGroup)
                this.processModified(controlName, this.controls[controlName]);
            else if (this.controls[controlName] instanceof RxFormArray) {
                if (this.controls[controlName].isModified) {
                    var formGroups = this.controls[controlName].controls;
                    this._modified[controlName] = [];
                    try {
                        for (var formGroups_1 = (e_6 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(formGroups)), formGroups_1_1 = formGroups_1.next(); !formGroups_1_1.done; formGroups_1_1 = formGroups_1.next()) {
                            var formGroup = formGroups_1_1.value;
                            if (formGroup.isModified) {
                                if (!this._modified[controlName])
                                    this._modified[controlName] = [];
                                this._modified[controlName].push(formGroup.modifiedValue);
                            }
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (formGroups_1_1 && !formGroups_1_1.done && (_a = formGroups_1.return)) _a.call(formGroups_1);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                    if (this._modified[controlName].length == 0)
                        delete this._modified[controlName];
                }
                else if (this._modified[controlName])
                    delete this._modified[controlName];
            }
        }
    };
    return RxFormGroup;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]));

var FormProvider = /** @class */ (function () {
    function FormProvider() {
    }
    FormProvider.ProcessRule = function (control, config, isDynamicConfig) {
        if (isDynamicConfig === void 0) { isDynamicConfig = false; }
        if (config && config.expressionProcessed)
            return true;
        var formGroupValue = ApplicationUtil.getParentObjectValue(control);
        var parentObject = (control.parent) ? ApplicationUtil.cloneValue(control.parent.value) : undefined;
        var modelInstance = undefined;
        if (control.parent && control.parent instanceof RxFormGroup)
            modelInstance = control.parent.modelInstance;
        if (parentObject) {
            this.updateFormControlValue(parentObject, control.parent.controls, control, config);
            this.forDisableUpdate(parentObject, config);
        }
        else if (config.conditionalExpression)
            return false;
        return Linq.execute(formGroupValue, config, parentObject, modelInstance, isDynamicConfig);
    };
    FormProvider.updateFormControlValue = function (parentObject, controls, control, config) {
        for (var controlName in parentObject) {
            if (!(parentObject[controlName] instanceof Object))
                if (controls[controlName] === control) {
                    parentObject[controlName] = control.value;
                    break;
                }
        }
    };
    FormProvider.forDisableUpdate = function (parentObject, config) {
        if (config.disableConfig)
            Object.keys(config.disableConfig).forEach(function (column) {
                parentObject[column] = config.disableConfig[column];
            });
    };
    return FormProvider;
}());

var DISABLED_EXPRESSION = "disableExpression";
function conditionalChangeValidator(conditionalValidationProps) {
    var oldValue = undefined;
    var setTimeOut = function (control, config) {
        if (control[DISABLED_EXPRESSION])
            runDisabledExpression(control, config);
        var timeOut = setTimeout(function (t) {
            clearTimeout(timeOut);
            control.updateValueAndValidity({ onlySelf: true });
        }, 100);
    };
    return function (control) {
        var _a;
        var value = control.value;
        if (control.parent && oldValue != value) {
            var rootFormGroup_1 = ApplicationUtil.getRootFormGroup(control);
            var parentFormGroup_1 = control.parent;
            oldValue = value;
            var controlName = ApplicationUtil.getFormControlName(control);
            var disabledConfig_1 = (_a = {}, _a[controlName] = value, _a);
            conditionalValidationProps.forEach(function (t) {
                if (t.indexOf("[]") != -1) {
                    var splitText = t.split("[]");
                    var formArray = rootFormGroup_1.get([splitText[0]]);
                    if (formArray)
                        formArray.controls.forEach(function (formGroup) {
                            var abstractControl = formGroup.get(splitText[1]);
                            if (abstractControl) {
                                setTimeOut(abstractControl, disabledConfig_1);
                            }
                        });
                }
                else {
                    var splitText_1 = t.split('.');
                    if (splitText_1.length > 1) {
                        var control = null;
                        t.split('.').forEach(function (name, index) { control = (index == 0) ? rootFormGroup_1.controls[name] : control.controls[name]; });
                    }
                    else {
                        control = parentFormGroup_1.controls[t];
                    }
                    if (control) {
                        setTimeOut(control, disabledConfig_1);
                    }
                }
            });
        }
        return ObjectMaker.null();
    };
}
function runDisabledExpression(control, config) {
    var isDisabled = FormProvider.ProcessRule(control, { conditionalExpression: control[DISABLED_EXPRESSION], disableConfig: config });
    if (isDisabled && !control.disabled)
        control.disable();
    else if (control.disabled)
        control.enable();
}

var ValidatorValueChecker = /** @class */ (function () {
    function ValidatorValueChecker() {
    }
    ValidatorValueChecker.pass = function (control, config) {
        if (FormProvider.ProcessRule(control, config))
            return RegexValidator.isNotBlank(control.value);
        else
            return false;
    };
    ValidatorValueChecker.passArrayValue = function (control, config) {
        if (FormProvider.ProcessRule(control, config))
            return control.value instanceof Array;
        else
            return false;
    };
    return ValidatorValueChecker;
}());

var ARRAY_CONFIG = "ArrayConfig";
var FIELD_CONFIG = "FieldConfig";
var IP_CONFIG = "IpConfig";
var NUMBER_CONFIG = "NumberConfig";
var PASSWORD_CONFIG = "PasswordConfig";
var PATTERN_CONFIG = "PatternConfig";
var RANGE_CONFIG = "RangeConfig";

var _a;
var CONFIG_REQUIRED_FIELDS = (_a = {},
    _a[ARRAY_CONFIG] = ["matchValues"],
    _a[FIELD_CONFIG] = ["fieldName"],
    _a[IP_CONFIG] = ["version"],
    _a[PASSWORD_CONFIG] = ["validation"],
    _a[NUMBER_CONFIG] = ["value"],
    _a[PATTERN_CONFIG] = ["expression"],
    _a[RANGE_CONFIG] = ["minimumNumber", "maximumNumber"],
    _a);

function getConfigObject(config, control, configName) {
    if (configName === void 0) { configName = ''; }
    return (config != undefined && config != true) ? configProvider(control, config, configName) : {};
}
function configProvider(control, config, configName) {
    if (config.dynamicConfig) {
        var currentConfig_1 = FormProvider.ProcessRule(control, clone(config), true);
        if (typeof currentConfig_1 != "boolean") {
            currentConfig_1.conditionalExpression = config.conditionalExpression;
            currentConfig_1.dynamicConfig = config.dynamicConfig;
            Object.keys(config).forEach(function (t) {
                if ((t != "conditionalExpression" && t != "dynamicConfig") || currentConfig_1[t] === undefined) {
                    currentConfig_1[t] = config[t];
                }
            });
            return currentConfig_1;
        }
        else
            return config;
    }
    return checkRequiredProps(config, configName);
}
function checkRequiredProps(config, configName) {
    var props = CONFIG_REQUIRED_FIELDS[configName];
    if (configName) {
        props.forEach(function (prop) {
            if (config[prop] === undefined)
                throw new Error("Pass the property of '" + prop + "' with value in the " + configName + ", otherwise it won't work.");
        });
    }
    return config;
}

var alphabet = {
    'danish': /^[A-Z??????]+$/,
    'french': /^[A-Z????????????????????????????????]+$/,
    'german': /^[A-Z????????]+$/,
    'spanish': /^[a-z??????????????]+$/i,
    'russian': /^[??-????]+$/,
};
var alphaWithWhitespace = {
    'danish': /^[A-Z??????\s]+$/,
    'french': /^[A-Z????????????????????????????????\s]+$/,
    'german': /^[A-Z????????\s]+$/,
    'spanish': /^[a-z??????????????\s]+$/i,
    'russian': /^[??-????\s]+$/,
};
var alphanumeric = {
    'danish': /^[0-9A-Z??????]+$/,
    'french': /^[0-9A-Z????????????????????????????????]+$/,
    'german': /^[0-9A-Z????????]+$/,
    'spanish': /^[0-9a-z??????????????]+$/i,
    'russian': /^[0-9??-????]+$/,
};
var alphanumericWithWitespace = {
    'danish': /^[0-9A-Z??????]+$/,
    'french': /^[0-9A-Z????????????????????????????????]+$/,
    'german': /^[0-9A-Z????????]+$/,
    'spanish': /^[0-9a-z??????????????\s]+$/i,
    'russian': /^[0-9??-????]+$/,
};

function alphaValidation(configModel, control, regExps, key) {
    var config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
        regExps = getRegex(key, regExps, config);
        var isValid = (!config || !config.allowWhiteSpace) ?
            RegexValidator.isValid(control.value, regExps[0]) :
            RegexValidator.isValid(control.value, regExps[1]);
        if (!isValid)
            return ObjectMaker.toJson(key, config, [control.value]);
    }
    return ObjectMaker.null();
}
function getRegex(key, regExps, config) {
    switch (key) {
        case "alpha":
            var alphaLocale = config.locale ? config.locale : ReactiveFormConfig.json && ReactiveFormConfig.json.defaultValidationLocale && ReactiveFormConfig.json.defaultValidationLocale.alpha ? ReactiveFormConfig.json.defaultValidationLocale.alpha : "";
            return [
                alphaLocale && alphaLocale in alphabet ? alphabet[alphaLocale] : regExps[0],
                alphaLocale && alphaLocale in alphaWithWhitespace ? alphaWithWhitespace[alphaLocale] : regExps[1]
            ];
            break;
        case "alphaNumeric":
            var alphaNumericLocale = config.locale ? config.locale : ReactiveFormConfig.json && ReactiveFormConfig.json.defaultValidationLocale && ReactiveFormConfig.json.defaultValidationLocale.alphaNumeric ? ReactiveFormConfig.json.defaultValidationLocale.alphaNumeric : "";
            return [
                alphaNumericLocale && alphaNumericLocale in alphanumeric ? alphanumeric[alphaNumericLocale] : regExps[0],
                alphaNumericLocale && alphaNumericLocale in alphanumericWithWitespace ? alphanumericWithWitespace[alphaNumericLocale] : regExps[1]
            ];
            break;
    }
}

function alphaValidator(configModel) {
    return function (control) {
        return alphaValidation(configModel, control, [RegExRule.alpha, RegExRule.alphaWithSpace], AnnotationTypes.alpha);
    };
}

function alphaNumericValidator(configModel) {
    return function (control) {
        return alphaValidation(configModel, control, [RegExRule.alphaNumeric, RegExRule.alphaNumericWithSpace], AnnotationTypes.alphaNumeric);
    };
}

function compareValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control, FIELD_CONFIG);
        var compareControl = ApplicationUtil.getFormControl(config.fieldName, control);
        var controlValue = control.value;
        var compareControlValue = (compareControl) ? compareControl.value : '';
        if (RegexValidator.isNotBlank(controlValue) || RegexValidator.isNotBlank(compareControlValue)) {
            if (!(compareControl && compareControl.value === controlValue))
                return ObjectMaker.toJson(AnnotationTypes.compare, config, [controlValue, compareControlValue]);
        }
        return ObjectMaker.null();
    };
}

function containsValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (control.value.indexOf(config.value) == -1)
                return ObjectMaker.toJson(AnnotationTypes.contains, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function checkLength(length, checks) {
    var e_1, _a;
    var isPassed = false;
    try {
        for (var checks_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(checks), checks_1_1 = checks_1.next(); !checks_1_1.done; checks_1_1 = checks_1.next()) {
            var check = checks_1_1.value;
            isPassed = (check == length);
            if (isPassed)
                break;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (checks_1_1 && !checks_1_1.done && (_a = checks_1.return)) _a.call(checks_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return isPassed;
}

function calculate(numbers) {
    var numberSum = 0;
    for (var i = 0; i < numbers.length; i++)
        numberSum += parseInt(numbers.substring(i, i + 1));
    var deltas = new Array(0, 1, 2, 3, 4, -4, -3, -2, -1, 0);
    for (var i = numbers.length - 1; i >= 0; i -= 2) {
        numberSum += deltas[parseInt(numbers.substring(i, i + 1))];
    }
    var mod = numberSum % 10;
    mod = 10 - mod;
    if (mod == 10)
        mod = 0;
    return mod;
}

function creditCardValidator(configModel) {
    var cardDigits = {
        AmericanExpress: [15],
        DinersClub: [14, 16, 19],
        Discover: [16, 19],
        JCB: [16, 19],
        Maestro: [12, 16, 19],
        MasterCard: [16],
        Visa: [13, 16, 19]
    };
    function validate(creditCardNumber) {
        var digit = parseInt(creditCardNumber.substring(creditCardNumber.length - 1, creditCardNumber.length));
        return calculate(creditCardNumber.substring(0, creditCardNumber.length - 1)) == parseInt(String(digit)) ? !0 : !1;
    }
    function getCardProviderName(cardNumber) {
        var cardProviderName = "";
        return /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/.test(cardNumber) ? cardProviderName = "Maestro" : /^5[1-5]/.test(cardNumber) ? cardProviderName = "MasterCard" : /^4/.test(cardNumber) ? cardProviderName = "Visa" : /^3[47]/.test(cardNumber) ? cardProviderName = "AmericanExpress" : /^(?:2131|1800|35)/.test(cardNumber) ? cardProviderName = "JCB" : /^3(?:0[0-5]|[68])/.test(cardNumber) ? cardProviderName = "DinersClub" : /^6(?:011|5)/.test(cardNumber) && (cardProviderName = "Discover"), cardProviderName;
    }
    return function (control) {
        var e_1, _a;
        var controlValue = control.value;
        var config = getConfigObject(configModel, control);
        var parentObject = (control.parent) ? control.parent.value : undefined;
        if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(controlValue)) {
                var isValid = false;
                var cardTypes = config.fieldName && parentObject[config.fieldName] ? [parentObject[config.fieldName]] : config.creditCardTypes;
                var cardType = '';
                try {
                    for (var cardTypes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(cardTypes), cardTypes_1_1 = cardTypes_1.next(); !cardTypes_1_1.done; cardTypes_1_1 = cardTypes_1.next()) {
                        var creditCardType = cardTypes_1_1.value;
                        isValid = checkLength(controlValue.length, cardDigits[creditCardType]) && getCardProviderName(controlValue) == creditCardType && validate(controlValue);
                        cardType = creditCardType;
                        if (isValid)
                            break;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (cardTypes_1_1 && !cardTypes_1_1.done && (_a = cardTypes_1.return)) _a.call(cardTypes_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (!isValid)
                    return ObjectMaker.toJson(AnnotationTypes.creditCard, config, [controlValue, cardType]);
            }
        }
        return ObjectMaker.null();
    };
}

function regexValidation(configModel, control, regExp, key) {
    var config = getConfigObject(configModel, control);
    return validate(config, control, regExp, key);
}
function validate(config, control, regExp, key) {
    if (ValidatorValueChecker.pass(control, config)) {
        if (!RegexValidator.isValid(control.value, regExp))
            return ObjectMaker.toJson(key, config, [control.value]);
    }
    return ObjectMaker.null();
}

function digitValidator(configModel) {
    return function (control) {
        return regexValidation(configModel, control, RegExRule.onlyDigit, AnnotationTypes.digit);
    };
}

function emailValidator(configModel) {
    return function (control) {
        return regexValidation(configModel, control, RegExRule.basicEmail, AnnotationTypes.email);
    };
}

function hexColorValidator(configModel) {
    return function (control) {
        return regexValidation(configModel, control, RegExRule.strictHexColor, AnnotationTypes.hexColor);
    };
}

function lowercaseValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value === control.value.toLowerCase()))
                return ObjectMaker.toJson(AnnotationTypes.lowerCase, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

var OPERATORS = {
    lessThan: "<",
    greaterThan: ">",
    lessThanEqualTo: "<=",
    greaterThanEqualTo: ">="
};

function runCondition(leftValue, rightValue, operator) {
    var result = false;
    switch (operator) {
        case OPERATORS.lessThan:
        case OPERATORS.greaterThan:
            result = leftValue > rightValue;
            break;
        case OPERATORS.lessThanEqualTo:
        case OPERATORS.greaterThanEqualTo:
            result = leftValue >= rightValue;
            break;
    }
    return result;
}
function dateChecker(control, config, operationType) {
    config = getConfigObject(config, control);
    var dateProvider = new DateProvider();
    if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
            if (dateProvider.isDate(control.value) || dateProvider.isValid(control.value, config)) {
                var checkDate = dateProvider.getCompareDate(config, control);
                var currentControlValue = dateProvider.getDate(control.value);
                var isValid = operationType == AnnotationTypes.minDate ? runCondition(currentControlValue, checkDate, config.operator || OPERATORS.greaterThanEqualTo) : runCondition(checkDate, currentControlValue, config.operator || OPERATORS.lessThanEqualTo);
                if (!isValid)
                    return ObjectMaker.toJson(operationType, config, [control.value]);
            }
            else
                return ObjectMaker.toJson(operationType, config, [control.value]);
        }
    }
    return ObjectMaker.null();
}
function validateDate(control, config, operationType) {
    config = getConfigObject(config, control);
    var dateProvider = new DateProvider();
    if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
            if (!dateProvider.isDate(control.value) && !dateProvider.isValid(control.value, config)) {
                return ObjectMaker.toJson(operationType, config, [control.value]);
            }
        }
    }
    return ObjectMaker.null();
}

function maxDateValidator(configModel) {
    return function (control) {
        return dateChecker(control, configModel, AnnotationTypes.maxDate);
    };
}

function maxLengthValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control, NUMBER_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value.length <= config.value))
                return ObjectMaker.toJson(AnnotationTypes.maxLength, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function maxNumberValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control, NUMBER_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(parseFloat(control.value) <= config.value))
                return ObjectMaker.toJson(AnnotationTypes.maxNumber, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function minDateValidator(configModel) {
    return function (control) {
        return dateChecker(control, configModel, AnnotationTypes.minDate);
    };
}

function minLengthValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control, NUMBER_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(String(control.value).length >= config.value))
                return ObjectMaker.toJson(AnnotationTypes.minLength, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function minNumberValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control, NUMBER_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(parseFloat(control.value) >= config.value))
                return ObjectMaker.toJson(AnnotationTypes.minNumber, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function passwordValidator(configModel) {
    function getMessageObject(jObject, keyName) {
        if (!jObject.message && !jObject.messageKey) {
            var message = ObjectMaker.getPasswordMessage();
            jObject.message = message && typeof message == "string" ? message : ApplicationUtil.isObject(message) ? message[keyName] : "";
            if (!jObject.message)
                jObject.message = message["password"];
            jObject.messageKey = "";
        }
        return jObject;
    }
    return function (control) {
        var config = getConfigObject(configModel, control, PASSWORD_CONFIG);
        var controlValue = control.value;
        if (RegexValidator.isNotBlank(controlValue)) {
            var validation = RegexValidator.isValidPassword(config.validation, controlValue);
            var jObject = {};
            jObject.message = (config.message && config.message[validation.keyName]) ? config.message[validation.keyName] : typeof config.message == "string" ? config.message : '';
            jObject.messageKey = (config.messageKey && config.messageKey[validation.keyName]) ? config.messageKey[validation.keyName] : typeof config.messageKey == "string" ? config.messageKey : "";
            jObject = getMessageObject(jObject, validation.keyName);
            if (!validation.isValid)
                return ObjectMaker.toJson(AnnotationTypes.password, jObject, [controlValue]);
        }
        return ObjectMaker.null();
    };
}

function rangeValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control, RANGE_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!((control.value || control.value === 0) && parseFloat(control.value) >= config.minimumNumber && parseFloat(control.value) <= config.maximumNumber))
                return ObjectMaker.toJson(AnnotationTypes.range, config, [control.value, config.minimumNumber, config.maximumNumber]);
        }
        return ObjectMaker.null();
    };
}

function uppercaseValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value === control.value.toUpperCase()))
                return ObjectMaker.toJson(AnnotationTypes.upperCase, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function requiredValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (!RegexValidator.isNotBlank(control.value)) {
                return ObjectMaker.toJson(AnnotationTypes.required, config, []);
            }
        }
        return ObjectMaker.null();
    };
}

function patternValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control, PATTERN_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            for (var pattern in config.expression)
                if (!(RegexValidator.isValid(control.value, config.expression[pattern])))
                    return ObjectMaker.toJson(pattern, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function timeValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var isValid = config.allowSeconds ? RegexValidator.isValid(control.value, RegExRule.timeWithSeconds) : RegexValidator.isValid(control.value, RegExRule.time);
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.time, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function urlValidation(configModel, control) {
    var regex = RegExRule.url;
    var config = getConfigObject(configModel, control);
    if (config && config.urlValidationType) {
        switch (config.urlValidationType) {
            case 1:
                regex = RegExRule.url;
                break;
            case 2:
                regex = RegExRule.localhostUrl;
                break;
            case 3:
                regex = RegExRule.interanetUrl;
                break;
        }
    }
    return validate(config, control, regex, AnnotationTypes.url);
}
function urlValidator(configModel) {
    return function (control) {
        return urlValidation(configModel, control);
    };
}

function jsonValidator(configModel) {
    function process(value) {
        var result = false;
        try {
            var json = JSON.parse(value);
            result = !!json && typeof json === 'object';
        }
        catch (ex) {
            result = false;
        }
        return result;
    }
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!process(control.value))
                return ObjectMaker.toJson(AnnotationTypes.json, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

var _a$1;
var operatorOpposite = (_a$1 = {},
    _a$1[AnnotationTypes.greaterThan] = AnnotationTypes.lessThan,
    _a$1[AnnotationTypes.lessThan] = AnnotationTypes.greaterThan,
    _a$1[AnnotationTypes.greaterThanEqualTo] = AnnotationTypes.lessThanEqualTo,
    _a$1[AnnotationTypes.lessThanEqualTo] = AnnotationTypes.greaterThanEqualTo,
    _a$1);
function relationalCheck(control, config, relationalOperatorName) {
    config = getConfigObject(config, control);
    var matchControl = config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
    var matchControlValue = (matchControl) ? matchControl.value : config.value !== undefined ? config.value : '';
    if (FormProvider.ProcessRule(control, config)) {
        if (config.isArrayControl)
            return arrayControlValidation(control, config, relationalOperatorName);
        if (isValid(control, matchControlValue, relationalOperatorName) === false)
            return ObjectMaker.toJson(relationalOperatorName, config, [control.value, matchControlValue]);
    }
    return ObjectMaker.null();
}
function isValid(control, matchControlValue, relationalOperatorName) {
    if (RegexValidator.isNotBlank(control.value) && RegexValidator.isNotBlank(matchControlValue)) {
        var isValid_1 = false;
        switch (relationalOperatorName) {
            case AnnotationTypes.greaterThan:
                isValid_1 = parseFloat(control.value) > parseFloat(matchControlValue);
                break;
            case AnnotationTypes.lessThan:
                isValid_1 = parseFloat(control.value) < parseFloat(matchControlValue);
                break;
            case AnnotationTypes.greaterThanEqualTo:
                isValid_1 = parseFloat(control.value) >= parseFloat(matchControlValue);
                break;
            case AnnotationTypes.lessThanEqualTo:
                isValid_1 = parseFloat(control.value) <= parseFloat(matchControlValue);
                break;
        }
        return isValid_1;
    }
    return null;
}
function setTimeFunc(invalidateControls) {
    var timeOut = setTimeout(function () {
        invalidateControls.forEach(function (t) {
            t.updateValueAndValidity();
        });
        clearTimeout(timeOut);
    }, 200);
}
function arrayControlValidation(control, config, relationalOperatorName) {
    var formArray = ApplicationUtil.getParentFormArray(control);
    var parentFormGroup = control.parent ? control.parent : undefined;
    var oppositeOperator = operatorOpposite[relationalOperatorName];
    var updateValidityControls = [];
    if (formArray && parentFormGroup && formArray.controls.length > 1) {
        var indexOf = formArray.controls.indexOf(parentFormGroup);
        var fieldName = ApplicationUtil.getFormControlName(control);
        var valid = true;
        if (indexOf > 0)
            valid = validateControl(formArray, control, indexOf - 1, fieldName, oppositeOperator, relationalOperatorName, updateValidityControls);
        if (valid && formArray.controls.length > indexOf + 1)
            valid = validateControl(formArray, control, indexOf + 1, fieldName, relationalOperatorName, relationalOperatorName, updateValidityControls);
        if (updateValidityControls.length > 0)
            setTimeFunc(updateValidityControls);
        if (valid === false)
            return ObjectMaker.toJson(relationalOperatorName, config, [control.value]);
    }
    return ObjectMaker.null();
}
function validateControl(formArray, control, indexOf, fieldName, oppositeOperator, relationalOperatorName, updateValidityControls) {
    var valid = false;
    var formGroup = formArray.controls[indexOf];
    if (formGroup && formGroup.controls) {
        var formControl = formGroup.controls[fieldName];
        valid = isValid(control, formControl.value, oppositeOperator);
        if (valid && formControl.errors && formControl.errors[relationalOperatorName])
            updateValidityControls.push(formControl);
    }
    return valid;
}

function greaterThanValidator(configModel) {
    return function (control) {
        return relationalCheck(control, configModel, AnnotationTypes.greaterThan);
    };
}

function greaterThanEqualToValidator(configModel) {
    return function (control) {
        return relationalCheck(control, configModel, AnnotationTypes.greaterThanEqualTo);
    };
}

function lessThanEqualToValidator(configModel) {
    return function (control) {
        return relationalCheck(control, configModel, AnnotationTypes.lessThanEqualTo);
    };
}

function lessThanValidator(configModel) {
    return function (control) {
        return relationalCheck(control, configModel, AnnotationTypes.lessThan);
    };
}

function choiceValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (control.value instanceof Array) {
                config.minLength = (config.minLength == undefined) ? 0 : config.minLength;
                config.maxLength = (config.maxLength == undefined) ? 0 : config.maxLength;
                if ((((control.value.length) < config.minLength) || (config.maxLength !== 0 && control.value.length > config.maxLength)))
                    return ObjectMaker.toJson(AnnotationTypes.choice, config, [control.value]);
            }
        }
        return ObjectMaker.null();
    };
}

function differentValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control, FIELD_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            var differentControl = ApplicationUtil.getFormControl(config.fieldName, control);
            var differentControlValue = (differentControl) ? differentControl.value : '';
            if (!(differentControl && differentControl.value != control.value))
                return ObjectMaker.toJson(AnnotationTypes.different, config, [control.value, differentControlValue]);
        }
        return ObjectMaker.null();
    };
}

function numericValidator(configModel) {
    return function (control) {
        if (configModel && (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.numeric]))
            ApplicationUtil.configureControl(control, configModel, AnnotationTypes.numeric);
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!RegexValidator.isValid(control.value, ApplicationUtil.numericValidation(config.allowDecimal, config.acceptValue)))
                return ObjectMaker.toJson(AnnotationTypes.numeric, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function evenValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value % 2 == 0))
                return ObjectMaker.toJson(AnnotationTypes.even, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function oddValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(!(control.value % 2 == 0)) || !ApplicationUtil.isNumeric(control.value))
                return ObjectMaker.toJson(AnnotationTypes.odd, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function factorValidator(configModel) {
    function positiveFactors(dividend, value) {
        var isPositive = false;
        for (var index = 1; index <= Math.floor(Math.sqrt(dividend)); index += 1) {
            if (dividend % index === 0) {
                if (index == value)
                    isPositive = true;
                if (dividend / index !== index)
                    if ((dividend / index) == value)
                        isPositive = true;
                if (isPositive)
                    break;
            }
        }
        return isPositive;
    }
    return function (control) {
        var config = getConfigObject(configModel, control);
        var dividendField = (control.parent && config.fieldName) ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
        var dividend = (config.fieldName && dividendField) ? dividendField.value : config.dividend;
        if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value) && dividend > 0) {
                if (!RegexValidator.isValid(control.value, RegExRule.onlyDigit) || !positiveFactors(dividend, parseInt(control.value)))
                    return ObjectMaker.toJson(AnnotationTypes.factor, config, [control.value]);
            }
        }
        return ObjectMaker.null();
    };
}

function leapYearValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var isValid = (control.value % 100 === 0) ? (control.value % 400 === 0) : (control.value % 4 === 0);
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.leapYear, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function allOfValidator(configModel) {
    return function (control) {
        var e_1, _a;
        var config = getConfigObject(configModel, control, ARRAY_CONFIG);
        if (ValidatorValueChecker.passArrayValue(control, config)) {
            var testResult = false;
            var _loop_1 = function (value) {
                testResult = control.value.some(function (y) { return y == value; });
                if (!testResult)
                    return "break";
            };
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(config.matchValues), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var value = _c.value;
                    var state_1 = _loop_1(value);
                    if (state_1 === "break")
                        break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (!testResult)
                return ObjectMaker.toJson(AnnotationTypes.allOf, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function oneOfValidator(configModel) {
    return function (control) {
        var e_1, _a;
        var config = getConfigObject(configModel, control, ARRAY_CONFIG);
        if (ValidatorValueChecker.passArrayValue(control, config)) {
            var testResult = false;
            var _loop_1 = function (value) {
                testResult = control.value.some(function (y) { return y == value; });
                if (testResult)
                    return "break";
            };
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(config.matchValues), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var value = _c.value;
                    var state_1 = _loop_1(value);
                    if (state_1 === "break")
                        break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (!testResult)
                return ObjectMaker.toJson(AnnotationTypes.oneOf, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function noneOfValidator(configModel) {
    return function (control) {
        var e_1, _a;
        var config = getConfigObject(configModel, control, ARRAY_CONFIG);
        if (FormProvider.ProcessRule(control, config)) {
            var testResult = false;
            var _loop_1 = function (value) {
                var matchValue = ApplicationUtil.lowerCaseWithTrim(value);
                testResult = Array.isArray(control.value) ? control.value.some(function (y) { return ApplicationUtil.lowerCaseWithTrim(y) === matchValue; }) : ApplicationUtil.lowerCaseWithTrim(control.value) === matchValue;
                if (testResult)
                    return "break";
            };
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(config.matchValues), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var value = _c.value;
                    var state_1 = _loop_1(value);
                    if (state_1 === "break")
                        break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (testResult)
                return ObjectMaker.toJson(AnnotationTypes.noneOf, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function macValidator(configModel) {
    return function (control) {
        return regexValidation(configModel, control, RegExRule.macId, AnnotationTypes.mac);
    };
}

function asciiValidator(configModel) {
    return function (control) {
        return regexValidation(configModel, control, RegExRule.ascii, AnnotationTypes.ascii);
    };
}

function dataUriValidator(configModel) {
    return function (control) {
        return regexValidation(configModel, control, RegExRule.dataUri, AnnotationTypes.dataUri);
    };
}

function portValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var isValid = RegexValidator.isValid(control.value, RegExRule.onlyDigit) && (control.value >= 0 && control.value <= 65535);
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.port, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function latLongValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var splitText = control.value.split(',');
            if (!(splitText.length > 1 && RegexValidator.isValid(splitText[0], RegExRule.lat) && RegexValidator.isValid(splitText[1], RegExRule.long)))
                return ObjectMaker.toJson(AnnotationTypes.latLong, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function extensionValidator(configModel) {
    return function (control, files) {
        var config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.extension])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.extension);
        if (files && FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
                var testResult = true;
                var extension_1 = '';
                for (var i = 0; i < files.length; i++) {
                    var file = files.item(i);
                    var splitText = file.name.split(".");
                    extension_1 = splitText[splitText.length - 1];
                    var result = config.extensions.filter(function (t) { return extension_1.toLowerCase() == t.toLowerCase(); })[0];
                    if (!result && !configModel.isExcludeExtensions) {
                        testResult = false;
                        break;
                    }
                    else {
                        if (result && configModel.isExcludeExtensions) {
                            testResult = false;
                            break;
                        }
                    }
                }
                if (!testResult)
                    return ObjectMaker.toJson(AnnotationTypes.extension, config, [extension_1, config.extensions.join(",")]);
            }
        }
        return ObjectMaker.null();
    };
}

function fileSizeValidator(configModel) {
    return function (control, files) {
        var config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.fileSize])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.fileSize);
        if (files && FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
                var minFileSize = config.minSize ? config.minSize : 0;
                var testResult = false;
                var fileSize = 0;
                for (var i = 0; i < files.length; i++) {
                    var file = files.item(i);
                    fileSize = file.size;
                    testResult = (!(fileSize >= minFileSize && fileSize <= config.maxSize));
                    if (testResult)
                        break;
                }
                if (testResult)
                    return ObjectMaker.toJson(AnnotationTypes.fileSize, config, [fileSize, config.maxSize]);
            }
        }
        return ObjectMaker.null();
    };
}

function endsWithValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var endString = String(control.value).substr(control.value.length - config.value.length, config.value.length);
            if (endString != config.value)
                return ObjectMaker.toJson(AnnotationTypes.endsWith, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function startsWithValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var startString = String(control.value).substr(0, config.value.length);
            if ((config.isRestrict && String(startString).toLowerCase() == String(config.value).toLowerCase()) || (!config.isRestrict && startString != config.value))
                return ObjectMaker.toJson(AnnotationTypes.startsWith, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function primeNumberValidator(configModel) {
    function isPrime(value) {
        var isPrimeNumber = value != 1;
        for (var i = 2; i < value; i++) {
            if (value % i == 0) {
                isPrimeNumber = false;
                break;
            }
        }
        return isPrimeNumber;
    }
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!ApplicationUtil.isNumeric(control.value) || !isPrime(control.value))
                return ObjectMaker.toJson(AnnotationTypes.primeNumber, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function latitudeValidator(configModel) {
    return function (control) {
        return regexValidation(configModel, control, RegExRule.lat, AnnotationTypes.latitude);
    };
}

function longitudeValidator(configModel) {
    return function (control) {
        return regexValidation(configModel, control, RegExRule.long, AnnotationTypes.longitude);
    };
}

function composeValidator(configModel) {
    return function (control) {
        var e_1, _a;
        var config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (config.validators) {
                var result = undefined;
                try {
                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(config.validators), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var validator = _c.value;
                        result = validator(control);
                        if (result)
                            break;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (result)
                    return (config.messageKey || config.message) ? ObjectMaker.toJson(config.messageKey || AnnotationTypes.compose, config, [control.value]) : result;
            }
        }
        return ObjectMaker.null();
    };
}

function ruleValidator(configModel, entity) {
    return function (control) {
        var e_1, _a;
        var config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            var result = null;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(config.customRules), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var rule = _c.value;
                    result = rule(entity);
                    if (result)
                        break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (result)
                return result;
        }
        return ObjectMaker.null();
    };
}

function fileValidator(configModel) {
    return function (control, files) {
        var config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.file])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.file);
        if (files) {
            if (FormProvider.ProcessRule(control, config)) {
                if (RegexValidator.isNotBlank(control.value)) {
                    var minFiles = config.minFiles ? config.minFiles : 0;
                    var maxFiles = config.maxFiles ? config.maxFiles : files.length;
                    if (!(files.length > 0 && files[0] instanceof File && files.length >= minFiles && files.length <= maxFiles))
                        return ObjectMaker.toJson(AnnotationTypes.file, config, [files.length, minFiles, maxFiles]);
                }
            }
        }
        return ObjectMaker.null();
    };
}

function customValidator(configModel) {
    return function (control) {
        var e_1, _a;
        var config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            var formGroupValue = ApplicationUtil.getParentObjectValue(control);
            var parentObject = (control.parent) ? control.parent.value : undefined;
            var result = null;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(config.customRules), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var rule = _c.value;
                    result = rule(formGroupValue, parentObject, config.additionalValue);
                    if (result)
                        break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (result)
                return result;
        }
        return ObjectMaker.null();
    };
}

function uniqueValidator(configModel) {
    var setTimeoutFunc = function (invalidateControls, controlValues) {
        var timeOut = setTimeout(function () {
            invalidateControls.forEach(function (t) {
                var isMatched = controlValues.filter(function (x) { return x == t.value; })[0];
                if (!isMatched)
                    t.updateValueAndValidity();
            });
            clearTimeout(timeOut);
        }, 200);
    };
    var additionalValidation = function (config, fieldName, formGroup, formArray, currentValue) {
        var indexOf = formArray.controls.indexOf(formGroup);
        var formArrayValue = [];
        if (indexOf != -1) {
            formArray.value.forEach(function (t, i) {
                if (indexOf != i)
                    formArrayValue.push(t);
            });
            return config.additionalValidation(currentValue, indexOf, fieldName, formGroup.value, formArrayValue);
        }
        return false;
    };
    return function (control) {
        var e_1, _a;
        var config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
                var formArray = ApplicationUtil.getParentFormArray(control);
                var parentFormGroup = control.parent ? control.parent : undefined;
                var invalidateControls = [];
                var controlValues = [];
                if (formArray && parentFormGroup) {
                    var currentValue = control.value;
                    var fieldName_1 = ApplicationUtil.getFormControlName(control);
                    var isMatched = false;
                    var _loop_1 = function (formGroup) {
                        if (formGroup != parentFormGroup) {
                            isMatched = (ApplicationUtil.toLower(formGroup.controls[fieldName_1].value) == ApplicationUtil.toLower(currentValue) && !(formGroup.controls[fieldName_1].errors && formGroup.controls[fieldName_1].errors[AnnotationTypes.unique]));
                            if (formGroup.controls[fieldName_1].errors && formGroup.controls[fieldName_1].errors[AnnotationTypes.unique]) {
                                matchedControl = formArray.controls.filter(function (t) { return t.controls[fieldName_1] != formGroup.controls[fieldName_1] && ApplicationUtil.toLower(t.controls[fieldName_1].value) == ApplicationUtil.toLower(formGroup.controls[fieldName_1].value); })[0];
                                if (!matchedControl)
                                    invalidateControls.push(formGroup.controls[fieldName_1]);
                            }
                            else
                                controlValues.push(formGroup.controls[fieldName_1].value);
                        }
                        if (isMatched)
                            return "break";
                    };
                    var matchedControl;
                    try {
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(formArray.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var formGroup = _c.value;
                            var state_1 = _loop_1(formGroup);
                            if (state_1 === "break")
                                break;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    if (invalidateControls.length > 0)
                        setTimeoutFunc(invalidateControls, controlValues);
                    var validation = false;
                    if (config.additionalValidation) {
                        validation = additionalValidation(config, fieldName_1, parentFormGroup, formArray, currentValue);
                    }
                    if (isMatched && !validation)
                        return ObjectMaker.toJson(AnnotationTypes.unique, config, [control.value]);
                }
            }
        }
        return ObjectMaker.null();
    };
}

function imageValidator(configModel) {
    return function (control, files) {
        var config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.image])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.image);
        if (!files)
            return ObjectMaker.null();
        return new Promise(function (resolve, reject) {
            if (FormProvider.ProcessRule(control, config)) {
                if (RegexValidator.isNotBlank(control.value)) {
                    var testResult_1 = false;
                    var _loop_1 = function () {
                        var file = files.item(i);
                        var type = file.type ? file.type.split('/') : [];
                        testResult_1 = type.length > 1 && type[0] == "image";
                        if (!testResult_1)
                            return "break";
                        var image = new Image();
                        config.minWidth = config.minWidth ? config.minWidth : 0;
                        config.minHeight = config.minHeight ? config.minHeight : 0;
                        image.onload = function () {
                            testResult_1 = (image.width >= config.minWidth && image.height >= config.minHeight) && (image.width <= config.maxWidth && image.height <= config.maxHeight);
                            if (!testResult_1)
                                resolve(ObjectMaker.toJson(AnnotationTypes.image, config, [image.width, image.height]));
                            else
                                resolve(ObjectMaker.null());
                        };
                        image.onerror = function () {
                            resolve(ObjectMaker.toJson(AnnotationTypes.image, config, []));
                        };
                        image.src = URL.createObjectURL(file);
                    };
                    for (var i = 0; i < files.length; i++) {
                        var state_1 = _loop_1();
                        if (state_1 === "break")
                            break;
                    }
                    if (!testResult_1)
                        resolve(ObjectMaker.toJson(AnnotationTypes.image, config, []));
                }
            }
            return ObjectMaker.null();
        });
    };
}

function notEmptyValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (!RegexValidator.isNotBlank(control.value, true)) {
                return ObjectMaker.toJson(AnnotationTypes.notEmpty, config, []);
            }
        }
        return ObjectMaker.null();
    };
}

function checkIpV4(value) {
    var e_1, _a;
    var isValid = RegexValidator.isValid(value, RegExRule.ipV4);
    if (isValid) {
        var splitDots = value.split('.');
        try {
            for (var splitDots_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(splitDots), splitDots_1_1 = splitDots_1.next(); !splitDots_1_1.done; splitDots_1_1 = splitDots_1.next()) {
                var ipNum = splitDots_1_1.value;
                isValid = ipNum <= 255;
                if (!isValid)
                    break;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (splitDots_1_1 && !splitDots_1_1.done && (_a = splitDots_1.return)) _a.call(splitDots_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return isValid;
}
function checkIpV6(value) {
    return RegexValidator.isValid(value, RegExRule.ipV6);
}

function ipValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control, IP_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            var values = config.isCidr ? control.value.split('/') : [control.value];
            var isValid = (config.version == IpVersion.V4) ?
                checkIpV4(values[0]) :
                (config.version == IpVersion.V6) ?
                    checkIpV6(values[0]) :
                    (checkIpV4(values[0]) || checkIpV6(values[0]));
            if (config.isCidr && isValid) {
                isValid = (values.length > 1) ?
                    config.version == IpVersion.V4 ?
                        RegexValidator.isValid(values[1], RegExRule.cidrV4) :
                        config.version == IpVersion.V6 ?
                            RegexValidator.isValid(values[1], RegExRule.cidrV6) :
                            (RegexValidator.isValid(values[1], RegExRule.cidrV4) || RegexValidator.isValid(values[1], RegExRule.cidrV6)) :
                    false;
            }
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.ip, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function cusipValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var controlValue = control.value.toUpperCase();
            var isValid = RegexValidator.isValid(controlValue, RegExRule.cusip);
            if (isValid) {
                var numericValues = controlValue.split("").map(function (value) {
                    var charCode = value.charCodeAt(0);
                    return charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0) ? charCode - "A".charCodeAt(0) + 10 : value;
                });
                var totalCount = 0;
                for (var i = 0; i < numericValues.length - 1; i++) {
                    var numericValue = parseInt(numericValues[i], 10);
                    if (i % 2 !== 0) {
                        numericValue *= 2;
                    }
                    if (numericValue > 9) {
                        numericValue -= 9;
                    }
                    totalCount += numericValue;
                }
                totalCount = (10 - (totalCount % 10)) % 10;
                isValid = totalCount == numericValues[numericValues.length - 1];
            }
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.cusip, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function gridValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var controlValue = control.value.toUpperCase();
            var isValid = RegexValidator.isValid(controlValue, RegExRule.grid);
            if (isValid) {
                controlValue = controlValue.replace(/\s/g, '').replace(/-/g, '');
                if ('GRID:' === controlValue.substr(0, 5)) {
                    controlValue = controlValue.substr(5);
                }
                var alphaNums = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var alphaNumLength = alphaNums.length, length = controlValue.length, check = Math.floor(alphaNumLength / 2);
                for (var i = 0; i < length; i++) {
                    check = (((check || alphaNumLength) * 2) % (alphaNumLength + 1) + alphaNums.indexOf(controlValue.charAt(i))) % alphaNumLength;
                }
                isValid = (check === 1);
            }
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.grid, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function dateValidator(configModel) {
    return function (control) {
        return validateDate(control, configModel, AnnotationTypes.date);
    };
}

function runCondition$1(leftValue, rightValue, operator) {
    var result = false;
    switch (operator) {
        case OPERATORS.lessThan:
        case OPERATORS.greaterThan:
            result = leftValue > rightValue;
            break;
        case OPERATORS.lessThanEqualTo:
        case OPERATORS.greaterThanEqualTo:
            result = leftValue >= rightValue;
            break;
    }
    return result;
}
function isValid$1(control, config) {
    return config.allowSeconds ? RegexValidator.isValid(control.value, RegExRule.timeWithSeconds) : RegexValidator.isValid(control.value, RegExRule.time);
}
function getTime(value) {
    var splitTime = (value) ? value.split(':') : [];
    return new Date(1970, 0, 1, splitTime[0] ? splitTime[0] : 0, splitTime[1] ? splitTime[1] : 0, splitTime[2] ? splitTime[2] : 0).getTime();
}
function timeChecker(control, config, operationType) {
    config = getConfigObject(config, control);
    if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
            if (isValid$1(control, config)) {
                var crossFormControl = config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
                var crossControlValue = crossFormControl ? getTime(crossFormControl.value) : getTime(config.value);
                var currentControlValue = getTime(control.value);
                var isValid_1 = operationType == AnnotationTypes.minTime ? runCondition$1(currentControlValue, crossControlValue, config.operator || OPERATORS.greaterThanEqualTo) : runCondition$1(crossControlValue, currentControlValue, config.operator || OPERATORS.lessThanEqualTo);
                if (!isValid_1)
                    return ObjectMaker.toJson(operationType, config, [control.value]);
            }
            else
                return ObjectMaker.toJson(operationType, config, [control.value]);
        }
    }
    return ObjectMaker.null();
}

function minTimeValidator(configModel) {
    return function (control) {
        return timeChecker(control, configModel, AnnotationTypes.minTime);
    };
}

function maxTimeValidator(configModel) {
    return function (control) {
        return timeChecker(control, configModel, AnnotationTypes.maxTime);
    };
}

function requiredTrueValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (control.value !== true) {
                return ObjectMaker.toJson(AnnotationTypes.requiredTrue, config, []);
            }
        }
        return ObjectMaker.null();
    };
}

function maskValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.mask])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.mask);
        return null;
    };
}

var IBAN_COUNTRY_CODE_REGEX = {
    AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
    AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
    AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    AT: /^(AT[0-9]{2})\d{16}$/,
    AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    BA: /^(BA[0-9]{2})\d{16}$/,
    BE: /^(BE[0-9]{2})\d{12}$/,
    BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
    BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
    BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
    BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    CR: /^(CR[0-9]{2})\d{18}$/,
    CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    CZ: /^(CZ[0-9]{2})\d{20}$/,
    DE: /^(DE[0-9]{2})\d{18}$/,
    DK: /^(DK[0-9]{2})\d{14}$/,
    DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
    EE: /^(EE[0-9]{2})\d{16}$/,
    EG: /^(EG[0-9]{2})\d{25}$/,
    ES: /^(ES[0-9]{2})\d{20}$/,
    FI: /^(FI[0-9]{2})\d{14}$/,
    FO: /^(FO[0-9]{2})\d{14}$/,
    FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
    GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
    GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
    GL: /^(GL[0-9]{2})\d{14}$/,
    GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
    GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
    HR: /^(HR[0-9]{2})\d{17}$/,
    HU: /^(HU[0-9]{2})\d{24}$/,
    IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
    IL: /^(IL[0-9]{2})\d{19}$/,
    IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
    IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
    IS: /^(IS[0-9]{2})\d{22}$/,
    IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
    KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
    KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
    LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
    LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    LT: /^(LT[0-9]{2})\d{16}$/,
    LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
    MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
    ME: /^(ME[0-9]{2})\d{18}$/,
    MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
    MR: /^(MR[0-9]{2})\d{23}$/,
    MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
    MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
    NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
    NO: /^(NO[0-9]{2})\d{11}$/,
    PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    PL: /^(PL[0-9]{2})\d{24}$/,
    PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
    PT: /^(PT[0-9]{2})\d{21}$/,
    QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
    RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
    RS: /^(RS[0-9]{2})\d{18}$/,
    SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
    SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
    SE: /^(SE[0-9]{2})\d{20}$/,
    SI: /^(SI[0-9]{2})\d{15}$/,
    SK: /^(SK[0-9]{2})\d{20}$/,
    SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    TL: /^(TL[0-9]{2})\d{19}$/,
    TN: /^(TN[0-9]{2})\d{20}$/,
    TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
    UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
    VA: /^(VA[0-9]{2})\d{18}$/,
    VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    XK: /^(XK[0-9]{2})\d{16}$/,
};

function hasValidIbanFormat(value, countryCode) {
    var strippedStr = value.replace(/[\s\-]+/gi, '').toUpperCase();
    var isoCountryCode = countryCode || strippedStr.slice(0, 2).toUpperCase();
    return (isoCountryCode in IBAN_COUNTRY_CODE_REGEX) &&
        IBAN_COUNTRY_CODE_REGEX[isoCountryCode].test(strippedStr);
}
function hasValidIbanChecksum(str) {
    var strippedStr = str.replace(/[^A-Z0-9]+/gi, '').toUpperCase(); // Keep only digits and A-Z latin alphabetic
    var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
    var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function (char) { return char.charCodeAt(0) - 55; });
    var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g)
        .reduce(function (acc, value) { return Number(acc + value) % 97; }, '');
    return remainder === 1;
}
function ibanValidator(configModel) {
    return function (control) {
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(hasValidIbanFormat(control.value, config.countryCode) && hasValidIbanChecksum(control.value)))
                return ObjectMaker.toJson(AnnotationTypes.iban, config, [control.value, config.countryCode]);
        }
        return ObjectMaker.null();
    };
}

var APP_VALIDATORS = {
    "alphaNumeric": alphaNumericValidator,
    "alpha": alphaValidator,
    "compare": compareValidator,
    "email": emailValidator,
    "hexColor": hexColorValidator,
    "lowerCase": lowercaseValidator,
    "maxDate": maxDateValidator,
    "maxNumber": maxNumberValidator,
    "minDate": minDateValidator,
    "minNumber": minNumberValidator,
    "contains": containsValidator,
    "upperCase": uppercaseValidator,
    "maxLength": maxLengthValidator,
    "minLength": minLengthValidator,
    "password": passwordValidator,
    "range": rangeValidator,
    "required": requiredValidator,
    "creditCard": creditCardValidator,
    "digit": digitValidator,
    "pattern": patternValidator,
    "time": timeValidator,
    "url": urlValidator,
    "json": jsonValidator,
    "greaterThan": greaterThanValidator,
    "greaterThanEqualTo": greaterThanEqualToValidator,
    "lessThan": lessThanValidator,
    "lessThanEqualTo": lessThanEqualToValidator,
    "choice": choiceValidator,
    "different": differentValidator,
    "numeric": numericValidator,
    "even": evenValidator,
    "odd": oddValidator,
    "factor": factorValidator,
    "leapYear": leapYearValidator,
    "allOf": allOfValidator,
    "oneOf": oneOfValidator,
    "noneOf": noneOfValidator,
    "mac": macValidator,
    "ascii": asciiValidator,
    "dataUri": dataUriValidator,
    "port": portValidator,
    "latLong": latLongValidator,
    "extension": extensionValidator,
    "fileSize": fileSizeValidator,
    "endsWith": endsWithValidator,
    "startsWith": startsWithValidator,
    "primeNumber": primeNumberValidator,
    "latitude": latitudeValidator,
    "longitude": longitudeValidator,
    "compose": composeValidator,
    "rule": ruleValidator,
    "file": fileValidator,
    "unique": uniqueValidator,
    "image": imageValidator,
    "notEmpty": notEmptyValidator,
    "ip": ipValidator,
    "cusip": cusipValidator,
    "grid": gridValidator,
    "date": dateValidator,
    "minTime": minTimeValidator,
    "maxTime": maxTimeValidator,
    "requiredTrue": requiredTrueValidator,
    "mask": maskValidator,
    "iban": ibanValidator
};

function andValidator(configModel) {
    return function (control) {
        var e_1, _a;
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var validatorNames = Object.keys(config.validation);
            var failed = false;
            try {
                for (var validatorNames_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(validatorNames), validatorNames_1_1 = validatorNames_1.next(); !validatorNames_1_1.done; validatorNames_1_1 = validatorNames_1.next()) {
                    var validatorName = validatorNames_1_1.value;
                    failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
                    if (failed)
                        break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (validatorNames_1_1 && !validatorNames_1_1.done && (_a = validatorNames_1.return)) _a.call(validatorNames_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (failed)
                return ObjectMaker.toJson(AnnotationTypes.and, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function orValidator(configModel) {
    return function (control) {
        var e_1, _a;
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var validatorNames = Object.keys(config.validation);
            var failed = false;
            try {
                for (var validatorNames_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(validatorNames), validatorNames_1_1 = validatorNames_1.next(); !validatorNames_1_1.done; validatorNames_1_1 = validatorNames_1.next()) {
                    var validatorName = validatorNames_1_1.value;
                    failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
                    if (!failed)
                        break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (validatorNames_1_1 && !validatorNames_1_1.done && (_a = validatorNames_1.return)) _a.call(validatorNames_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (failed)
                return ObjectMaker.toJson(AnnotationTypes.or, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function notValidator(configModel) {
    return function (control) {
        var e_1, _a;
        var config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var validatorNames = Object.keys(config.validation);
            var failed = false;
            try {
                for (var validatorNames_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(validatorNames), validatorNames_1_1 = validatorNames_1.next(); !validatorNames_1_1.done; validatorNames_1_1 = validatorNames_1.next()) {
                    var validatorName = validatorNames_1_1.value;
                    failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
                    if (!failed)
                        break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (validatorNames_1_1 && !validatorNames_1_1.done && (_a = validatorNames_1.return)) _a.call(validatorNames_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (!failed)
                return ObjectMaker.toJson(AnnotationTypes.not, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

var LOGICAL_VALIDATORS = { and: andValidator, or: orValidator, not: notValidator };
var ASYNC = "async";
var ENTITY_OBJECT = "entityObject";
var RxFormBuilder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RxFormBuilder, _super);
    function RxFormBuilder() {
        var _this = _super.call(this) || this;
        _this.conditionalObjectProps = [];
        _this.conditionalValidationInstance = {};
        _this.builderConfigurationConditionalObjectProps = [];
        _this.formGroupPropOtherValidator = {};
        _this.currentFormGroupPropOtherValidator = {};
        _this.isNested = false;
        _this.isGroupCalled = false;
        _this.isNestedBinding = false;
        return _this;
    }
    RxFormBuilder.prototype.getInstanceContainer = function (instanceFunc, entityObject) {
        return this.instaceProvider(instanceFunc, entityObject);
    };
    RxFormBuilder.prototype.setValue = function (formGroup, object) {
        for (var col in object) {
            var control = formGroup.get([col]);
            control.setValue(object[col]);
            control.updateValueAndValidity();
        }
    };
    RxFormBuilder.prototype.extractExpressions = function (fomrBuilderConfiguration) {
        if (fomrBuilderConfiguration && fomrBuilderConfiguration.dynamicValidation) {
            for (var property in fomrBuilderConfiguration.dynamicValidation) {
                for (var decorator in fomrBuilderConfiguration.dynamicValidation[property]) {
                    if (fomrBuilderConfiguration.dynamicValidation[property][decorator].conditionalExpression) {
                        var columns = Linq.expressionColumns(fomrBuilderConfiguration.dynamicValidation[property][decorator].conditionalExpression);
                        defaultContainer.addChangeValidation(this.conditionalValidationInstance, property, columns);
                    }
                }
            }
        }
        return null;
    };
    RxFormBuilder.prototype.addAsyncValidation = function (property, propertyValidators, propValidationConfig) {
        var e_1, _a;
        var asyncValidators = [];
        if (propertyValidators) {
            try {
                for (var propertyValidators_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(propertyValidators), propertyValidators_1_1 = propertyValidators_1.next(); !propertyValidators_1_1.done; propertyValidators_1_1 = propertyValidators_1.next()) {
                    var propertyValidator = propertyValidators_1_1.value;
                    if (propertyValidator.isAsync)
                        propertyValidator.config.forEach(function (t) { asyncValidators.push(t); });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (propertyValidators_1_1 && !propertyValidators_1_1.done && (_a = propertyValidators_1.return)) _a.call(propertyValidators_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (propValidationConfig && propValidationConfig[ASYNC]) {
            propValidationConfig[ASYNC].forEach(function (t) { asyncValidators.push(t); });
        }
        return asyncValidators;
    };
    RxFormBuilder.prototype.addFormControl = function (property, propertyValidators, propValidationConfig, instance, entity) {
        var e_2, _a;
        var validators = [];
        var columns = [];
        if ((instance.conditionalValidationProps && instance.conditionalValidationProps[property.name]) || (this.conditionalValidationInstance.conditionalValidationProps && this.conditionalValidationInstance.conditionalValidationProps[property.name])) {
            var props_1 = [];
            if ((instance.conditionalValidationProps && instance.conditionalValidationProps[property.name]))
                instance.conditionalValidationProps[property.name].forEach(function (t) { return props_1.push(t); });
            if (this.conditionalValidationInstance.conditionalValidationProps && this.conditionalValidationInstance.conditionalValidationProps[property.name])
                this.conditionalValidationInstance.conditionalValidationProps[property.name].forEach(function (t) { return props_1.push(t); });
            validators.push(conditionalChangeValidator(props_1));
        }
        if (this.conditionalObjectProps.length > 0 || this.builderConfigurationConditionalObjectProps.length > 0) {
            var propConditions_1 = [];
            if (this.conditionalObjectProps)
                propConditions_1 = this.conditionalObjectProps.filter(function (t) { return t.propName == property.name; });
            if (this.builderConfigurationConditionalObjectProps)
                this.builderConfigurationConditionalObjectProps.filter(function (t) { return t.propName == property.name; }).forEach(function (t) { return propConditions_1.push(t); });
            propConditions_1.forEach(function (t) {
                if (t.referencePropName && columns.indexOf(t.referencePropName) == -1)
                    columns.push(t.referencePropName);
            });
            if (columns.length > 0)
                validators.push(conditionalChangeValidator(columns));
        }
        try {
            for (var propertyValidators_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(propertyValidators), propertyValidators_2_1 = propertyValidators_2.next(); !propertyValidators_2_1.done; propertyValidators_2_1 = propertyValidators_2.next()) {
                var propertyValidator = propertyValidators_2_1.value;
                if (!propertyValidator.isAsync)
                    switch (propertyValidator.annotationType) {
                        case AnnotationTypes.rule:
                            validators.push(APP_VALIDATORS[propertyValidator.annotationType](propertyValidator.config, entity));
                            break;
                        case AnnotationTypes.and:
                        case AnnotationTypes.or:
                        case AnnotationTypes.not:
                            validators.push(LOGICAL_VALIDATORS[propertyValidator.annotationType](propertyValidator.config));
                            break;
                        default:
                            validators.push(APP_VALIDATORS[propertyValidator.annotationType](propertyValidator.config));
                            break;
                    }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (propertyValidators_2_1 && !propertyValidators_2_1.done && (_a = propertyValidators_2.return)) _a.call(propertyValidators_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (propValidationConfig)
            this.additionalValidation(validators, propValidationConfig);
        if (this.currentFormGroupPropOtherValidator[property.name])
            this.currentFormGroupPropOtherValidator[property.name].forEach(function (t) { validators.push(t); });
        return validators;
    };
    RxFormBuilder.prototype.additionalValidation = function (validations, propValidationConfig) {
        for (var col in AnnotationTypes) {
            if (propValidationConfig[AnnotationTypes[col]] && col != "custom") {
                validations.push(APP_VALIDATORS[AnnotationTypes[col]](propValidationConfig[AnnotationTypes[col]]));
            }
            else if (col == AnnotationTypes.custom && propValidationConfig[AnnotationTypes[col]])
                validations.push(propValidationConfig[col]);
        }
    };
    RxFormBuilder.prototype.getEntity = function (object, formBuilderConfiguration, propertyName, isSameObjectConstructor) {
        if (isSameObjectConstructor === void 0) { isSameObjectConstructor = false; }
        if (formBuilderConfiguration && formBuilderConfiguration.genericEntities && formBuilderConfiguration.genericEntities[propertyName])
            return formBuilderConfiguration.genericEntities[propertyName];
        return isSameObjectConstructor ? object.constructor : undefined;
    };
    RxFormBuilder.prototype.getObjectPropertyInstance = function (object, propertyInfo, formBuilderConfiguration) {
        if (propertyInfo.propertyType == OBJECT_PROPERTY && object[propertyInfo.name])
            return object[propertyInfo.name].constructor;
        else if (propertyInfo.propertyType == ARRAY_PROPERTY && object[propertyInfo.name] && object[propertyInfo.name].length > 0)
            return object[propertyInfo.name][0].constructor;
        return this.getEntity(object, formBuilderConfiguration, propertyInfo.name);
    };
    RxFormBuilder.prototype.checkObjectPropAdditionalValidation = function (instanceContainer, object, formBuilderConfiguration) {
        var _this = this;
        var props = instanceContainer.properties.filter(function (t) { return t.propertyType == OBJECT_PROPERTY || t.propertyType == ARRAY_PROPERTY; });
        props.forEach(function (t) {
            var entity = t.entity;
            if (!t.entity)
                entity = _this.getObjectPropertyInstance(object, t, formBuilderConfiguration);
            if (entity) {
                var instance = _this.getInstanceContainer(entity, null);
                if (instance && instance.conditionalValidationProps) {
                    for (var key in instance.conditionalValidationProps) {
                        var prop = instanceContainer.properties.filter(function (t) { return t.name == key; })[0];
                        if (prop) {
                            if (!instanceContainer.conditionalValidationProps)
                                instanceContainer.conditionalValidationProps = {};
                            if (!instanceContainer.conditionalValidationProps[key])
                                instanceContainer.conditionalValidationProps[key] = [];
                            instance.conditionalValidationProps[key].forEach(function (x) {
                                if (t.propertyType != ARRAY_PROPERTY)
                                    instanceContainer.conditionalValidationProps[key].push([t.name, x].join('.'));
                                else
                                    instanceContainer.conditionalValidationProps[key].push([t.name, x].join('[]'));
                            });
                        }
                    }
                }
            }
        });
    };
    RxFormBuilder.prototype.getObject = function (model, entityObject, formBuilderConfiguration) {
        var json = {};
        if (typeof model == FUNCTION_STRING)
            json.model = model;
        if (typeof model == FUNCTION_STRING && (entityObject instanceof FormBuilderConfiguration)) {
            json.entityObject = this.createClassObject(json.model, entityObject);
        }
        if (entityObject && !(entityObject instanceof FormBuilderConfiguration))
            json.entityObject = entityObject;
        if (entityObject instanceof FormBuilderConfiguration && !formBuilderConfiguration)
            json.formBuilderConfiguration = entityObject;
        else if (!(entityObject instanceof FormBuilderConfiguration) && formBuilderConfiguration) {
            json.formBuilderConfiguration = formBuilderConfiguration;
            json.entityObject = this.createClassObject(json.model, json.formBuilderConfiguration, json.entityObject);
        }
        if (!entityObject) {
            if (typeof model == OBJECT_STRING)
                json.model = model.constructor;
            json.entityObject = this.createClassObject(json.model, json.formBuilderConfiguration, model);
        }
        else if (model && (entityObject instanceof FormBuilderConfiguration) && (typeof model == OBJECT_STRING)) {
            json[MODEL] = model.constructor;
            json[ENTITY_OBJECT] = this.createClassObject(json.model, json.formBuilderConfiguration, model);
        }
        return json;
    };
    RxFormBuilder.prototype.control = function (value, validators, asyncValidators) {
        return new RxFormControl(value, validators, asyncValidators, {}, {}, '', []);
    };
    RxFormBuilder.prototype.array = function (values, validatorConfig) {
        var formArray = this.group({ temp: values }, validatorConfig).get("temp");
        var formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]();
        return formBuilder.array(formArray.controls);
    };
    RxFormBuilder.prototype.group = function (groupObject, validatorConfig) {
        var modelInstance = _super.prototype.createInstance.call(this);
        var entityObject = {};
        this.formGroupPropOtherValidator = {};
        this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
        this.createValidatorFormGroup(groupObject, entityObject, modelInstance, validatorConfig);
        this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
        this.isGroupCalled = true;
        var formGroup = this.formGroup(modelInstance.constructor, entityObject, validatorConfig);
        this.isGroupCalled = false;
        this.formGroupPropOtherValidator = {};
        this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
        this.formGroupPropOtherValidator = {};
        return formGroup;
    };
    RxFormBuilder.prototype.applyAllPropValidator = function (propName, validatorConfig, modelInstance) {
        var _this = this;
        if (validatorConfig && validatorConfig.applyAllProps) {
            if (!(validatorConfig.excludeProps && validatorConfig.excludeProps.length > 0 && validatorConfig.excludeProps.indexOf(propName) == -1)) {
                validatorConfig.applyAllProps.forEach(function (t) {
                    if (t.name == RX_WEB_VALIDATOR) {
                        t(propName, modelInstance);
                    }
                    else {
                        if (!_this.currentFormGroupPropOtherValidator[propName])
                            _this.currentFormGroupPropOtherValidator[propName] = [];
                        _this.currentFormGroupPropOtherValidator[propName].push(t);
                    }
                });
            }
        }
    };
    RxFormBuilder.prototype.dynamicValidationPropCheck = function (propName, validatorConfig) {
        return (validatorConfig == undefined) ? true : (!validatorConfig.dynamicValidationConfigurationPropertyName) ? true : validatorConfig.dynamicValidationConfigurationPropertyName == propName ? false : true;
    };
    RxFormBuilder.prototype.isNotObject = function (value) {
        return value instanceof Date || value === null || typeof value != OBJECT_STRING;
    };
    RxFormBuilder.prototype.createValidatorFormGroup = function (groupObject, entityObject, modelInstance, validatorConfig) {
        var e_3, _a;
        for (var propName in groupObject) {
            var prop = groupObject[propName];
            if (prop instanceof Array && prop.length > 0 && this.isNotObject(prop[0])) {
                var propValidators = (prop.length > 1 && prop[1] instanceof Array) ? prop[1] : (prop.length == 2) ? [prop[1]] : [];
                var propertyAdded = false;
                for (var i = 0; i < propValidators.length; i++) {
                    if (propValidators[i].name == RX_WEB_VALIDATOR) {
                        propValidators[i](propName, modelInstance);
                        propertyAdded = true;
                    }
                    else {
                        if (!this.currentFormGroupPropOtherValidator[propName])
                            this.currentFormGroupPropOtherValidator[propName] = [];
                        this.currentFormGroupPropOtherValidator[propName].push(propValidators[i]);
                    }
                }
                if (!propertyAdded)
                    defaultContainer.initPropertyObject(propName, PROPERTY, undefined, typeof modelInstance == OBJECT_STRING ? modelInstance : { constructor: modelInstance });
                this.applyAllPropValidator(propName, validatorConfig, modelInstance);
            }
            else if (prop === null || prop === undefined || typeof prop == STRING || typeof prop == NUMBER || typeof prop == BOOLEAN || prop instanceof Date) {
                defaultContainer.initPropertyObject(propName, PROPERTY, undefined, typeof modelInstance == OBJECT_STRING ? modelInstance : { constructor: modelInstance });
                this.applyAllPropValidator(propName, validatorConfig, modelInstance);
            }
            else if (prop instanceof Array) {
                if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                    entityObject[propName] = prop;
                }
                else {
                    var propModelInstance = _super.prototype.createInstance.call(this);
                    if (typeof modelInstance == "function")
                        modelInstance.constructor = modelInstance;
                    defaultContainer.initPropertyObject(propName, ARRAY_PROPERTY, propModelInstance.constructor, modelInstance);
                    entityObject[propName] = [];
                    try {
                        for (var prop_1 = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(prop)), prop_1_1 = prop_1.next(); !prop_1_1.done; prop_1_1 = prop_1.next()) {
                            var row = prop_1_1.value;
                            var jObject = {};
                            entityObject[propName].push(jObject);
                            this.createValidatorFormGroup(row, jObject, propModelInstance.constructor, validatorConfig);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (prop_1_1 && !prop_1_1.done && (_a = prop_1.return)) _a.call(prop_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
            else if (typeof prop == OBJECT_STRING && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || prop instanceof RxFormControl)) {
                var formGroup = (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) ? prop.controls[0] : prop;
                if (!formGroup.model && (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || prop instanceof RxFormGroup)) {
                    formGroup = this.group(formGroup.controls);
                }
                if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || prop instanceof RxFormGroup) {
                    entityObject[propName] = prop;
                    defaultContainer.initPropertyObject(propName, OBJECT_PROPERTY, formGroup.model, modelInstance);
                }
                else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                    entityObject[propName] = prop;
                    defaultContainer.initPropertyObject(propName, ARRAY_PROPERTY, formGroup.model, modelInstance);
                }
                else {
                    if (this.dynamicValidationPropCheck(propName, validatorConfig)) {
                        this.formGroupPropOtherValidator[propName] = {};
                        this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator[propName];
                        var propModelInstance = _super.prototype.createInstance.call(this);
                        entityObject[propName] = {};
                        entityObject[propName].constructor = propModelInstance.constructor;
                        defaultContainer.initPropertyObject(propName, OBJECT_PROPERTY, entityObject[propName].constructor, modelInstance.constructor == Function ? { constructor: modelInstance } : modelInstance);
                        var objectValidationConfig = this.getValidatorConfig(validatorConfig, groupObject, propName + ".");
                        this.createValidatorFormGroup(groupObject[propName], entityObject[propName], entityObject[propName].constructor, objectValidationConfig);
                    }
                    else
                        entityObject[propName] = groupObject[propName];
                }
            }
            if (typeof prop == STRING || typeof prop == NUMBER || typeof prop == BOOLEAN || prop instanceof Date) {
                entityObject[propName] = prop;
            }
            else if ((prop && prop.length > 0 && this.isNotObject(prop[0]) && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || prop instanceof RxFormControl) && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]))) {
                entityObject[propName] = prop[0];
            }
            else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                entityObject[propName] = prop;
            }
            else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || prop instanceof RxFormControl) {
                entityObject[propName] = prop;
                defaultContainer.initPropertyObject(propName, PROPERTY, undefined, modelInstance.constructor ? modelInstance : { constructor: modelInstance });
            }
        }
    };
    RxFormBuilder.prototype.getValidatorConfig = function (validatorConfig, entityObject, rootPropertyName, arrayPropertyName) {
        var validationProps = {};
        var excludeProps = [];
        var includeProps = [];
        var ignoreUndefinedProps = [];
        if (validatorConfig) {
            for (var propName in validatorConfig.dynamicValidation) {
                if (propName.indexOf(rootPropertyName) != -1 || (arrayPropertyName && propName.indexOf(arrayPropertyName) != -1)) {
                    var splitProp = propName.split(".")[1];
                    if (splitProp)
                        validationProps[splitProp] = validatorConfig.dynamicValidation[propName];
                }
            }
            if (validatorConfig.excludeProps)
                excludeProps = this.getProps(validatorConfig.excludeProps, rootPropertyName);
            if (validatorConfig.includeProps)
                includeProps = this.getProps(validatorConfig.includeProps, rootPropertyName);
            if (validatorConfig.ignoreUndefinedProps)
                ignoreUndefinedProps = this.getProps(validatorConfig.ignoreUndefinedProps, rootPropertyName, true);
            return { ignoreUndefinedProps: ignoreUndefinedProps, includeProps: includeProps, dynamicValidation: (validatorConfig.dynamicValidationConfigurationPropertyName && entityObject[validatorConfig.dynamicValidationConfigurationPropertyName]) ? entityObject[validatorConfig.dynamicValidationConfigurationPropertyName] : validationProps, excludeProps: excludeProps };
        }
        return {};
    };
    RxFormBuilder.prototype.getProps = function (properties, rootPropertyName, isIgnoreProp) {
        var e_4, _a;
        if (isIgnoreProp === void 0) { isIgnoreProp = false; }
        var props = [];
        try {
            for (var properties_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                var prop = properties_1_1.value;
                if (prop.indexOf(rootPropertyName) != -1) {
                    var splitProps = prop.split(".");
                    if (splitProps.length == 2) {
                        props.push(splitProps[1]);
                    }
                    else if (splitProps.length > 2) {
                        splitProps.splice(0, 1);
                        props.push(splitProps.join("."));
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (isIgnoreProp && properties.filter(function (x) { return x == rootPropertyName.replace('.', ''); }).length == 1)
            props.push(':self:');
        return props;
    };
    RxFormBuilder.prototype.formGroup = function (model, entityObject, formBuilderConfiguration) {
        var _this = this;
        var json = this.getObject(model, entityObject, formBuilderConfiguration);
        model = json.model;
        entityObject = json.entityObject;
        if (entityObject.constructor != model && !this.isGroupCalled) {
            entityObject = json.entityObject = this.updateObject(model, json.entityObject, formBuilderConfiguration);
        }
        formBuilderConfiguration = json.formBuilderConfiguration;
        if (formBuilderConfiguration)
            this.extractExpressions(formBuilderConfiguration);
        var instanceContainer = this.getInstanceContainer(model, entityObject);
        this.checkObjectPropAdditionalValidation(instanceContainer, entityObject, formBuilderConfiguration);
        var formGroupObject = {};
        var extendedProperties = {};
        var additionalValidations = {};
        instanceContainer.properties.forEach(function (property) {
            var e_5, _a;
            var isIncludeProp = true;
            if (formBuilderConfiguration) {
                if (formBuilderConfiguration.excludeProps && formBuilderConfiguration.excludeProps.length > 0)
                    isIncludeProp = formBuilderConfiguration.excludeProps.indexOf(property.name) == -1;
                if (formBuilderConfiguration.dynamicValidation)
                    additionalValidations = formBuilderConfiguration.dynamicValidation;
                if (formBuilderConfiguration.includeProps && formBuilderConfiguration.includeProps.length > 0)
                    isIncludeProp = formBuilderConfiguration.includeProps.indexOf(property.name) != -1;
                if (formBuilderConfiguration.ignoreUndefinedProps && formBuilderConfiguration.ignoreUndefinedProps.length > 0) {
                    isIncludeProp = !(property.propertyType == PROPERTY && !RegexValidator.isNotBlank(json.entityObject[property.name]) && (formBuilderConfiguration.ignoreUndefinedProps.indexOf(property.name) !== -1 || formBuilderConfiguration.ignoreUndefinedProps.indexOf(":self:") !== -1));
                }
            }
            if (property.ignore)
                isIncludeProp = !property.ignore.call(json.entityObject, json.entityObject);
            if (isIncludeProp) {
                switch (property.propertyType) {
                    case PROPERTY:
                        if (!(entityObject[property.name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || entityObject[property.name] instanceof RxFormControl)) {
                            var propertyValidators = instanceContainer.propertyAnnotations.filter(function (t) { return t.propertyName == property.name; });
                            var sanitizeValue = _super.prototype.sanitizeValue.call(_this, instanceContainer, property.name, _super.prototype.getDefaultValue.call(_this, property, entityObject[property.name], formBuilderConfiguration), json.entityObject, Object.assign({}, json.entityObject));
                            if (entityObject[property.name] === undefined && sanitizeValue)
                                entityObject[property.name] = sanitizeValue;
                            var validators = _this.addFormControl(property, propertyValidators, additionalValidations[property.name], instanceContainer, entityObject);
                            var abstractControlOptions_1 = { validators: validators, asyncValidators: _this.addAsyncValidation(property, propertyValidators, additionalValidations[property.name]) };
                            if (formBuilderConfiguration && formBuilderConfiguration.abstractControlOptions && formBuilderConfiguration.abstractControlOptions[property.name])
                                abstractControlOptions_1.updateOn = formBuilderConfiguration.abstractControlOptions[property.name];
                            abstractControlOptions_1 = _this.getAbstractControlOptions(property.name, formBuilderConfiguration ? formBuilderConfiguration.baseAbstractControlOptions : {}, abstractControlOptions_1);
                            formGroupObject[property.name] = new RxFormControl(sanitizeValue, abstractControlOptions_1, [], json.entityObject, Object.assign({}, json.entityObject), property.name, instanceContainer.sanitizers[property.name]);
                            _this.isNested = false;
                        }
                        else
                            formGroupObject[property.name] = _super.prototype.getDefaultValue.call(_this, property, entityObject[property.name], formBuilderConfiguration);
                        extendedProperties[property.name] = true;
                        break;
                    case OBJECT_PROPERTY:
                        var objectValue = entityObject[property.name];
                        if (objectValue && objectValue instanceof Object && !(objectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || objectValue instanceof RxFormGroup)) {
                            _this.isNestedBinding = _this.isNested = true;
                            if (instanceContainer && instanceContainer.conditionalObjectProps)
                                _this.conditionalObjectProps = instanceContainer.conditionalObjectProps.filter(function (t) { return t.objectPropName == property.name; });
                            if (_this.conditionalValidationInstance && _this.conditionalValidationInstance.conditionalObjectProps)
                                _this.builderConfigurationConditionalObjectProps = _this.conditionalValidationInstance.conditionalObjectProps.filter(function (t) { return t.objectPropName == property.name; });
                            if (_this.formGroupPropOtherValidator[property.name])
                                _this.currentFormGroupPropOtherValidator = _this.formGroupPropOtherValidator[property.name];
                            var objectValidationConfig = _this.getValidatorConfig(formBuilderConfiguration, objectValue, property.name + ".");
                            var entity = property.entityProvider ? property.entityProvider.call(entityObject) : undefined;
                            formGroupObject[property.name] = _this.formGroup(entity || property.entity || _this.getEntity(objectValue, formBuilderConfiguration, property.name, true), objectValue, objectValidationConfig);
                            _this.conditionalObjectProps = [];
                            _this.builderConfigurationConditionalObjectProps = [];
                            _this.isNestedBinding = _this.isNested = false;
                        }
                        else if (objectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || objectValue instanceof RxFormGroup)
                            formGroupObject[property.name] = objectValue;
                        break;
                    case ARRAY_PROPERTY:
                        var arrayObjectValue = entityObject[property.name];
                        if (arrayObjectValue && arrayObjectValue instanceof Array && !(arrayObjectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"])) {
                            _this.isNestedBinding = _this.isNested = true;
                            var formArrayGroup = [];
                            var index_1 = 0;
                            var entity = property.entityProvider ? property.entityProvider.call(entityObject) : undefined;
                            var objectValidationConfig_1 = null;
                            try {
                                for (var arrayObjectValue_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayObjectValue), arrayObjectValue_1_1 = arrayObjectValue_1.next(); !arrayObjectValue_1_1.done; arrayObjectValue_1_1 = arrayObjectValue_1.next()) {
                                    var subObject = arrayObjectValue_1_1.value;
                                    if (instanceContainer && instanceContainer.conditionalObjectProps)
                                        _this.conditionalObjectProps = instanceContainer.conditionalObjectProps.filter(function (t) { return t.objectPropName == property.name && t.arrayIndex == index_1; });
                                    if (_this.conditionalValidationInstance && _this.conditionalValidationInstance.conditionalObjectProps)
                                        _this.builderConfigurationConditionalObjectProps = _this.conditionalValidationInstance.conditionalObjectProps.filter(function (t) { return t.objectPropName == property.name && t.arrayIndex == index_1; });
                                    if (_this.formGroupPropOtherValidator[property.name])
                                        _this.currentFormGroupPropOtherValidator = _this.formGroupPropOtherValidator[property.name];
                                    objectValidationConfig_1 = _this.getValidatorConfig(formBuilderConfiguration, subObject, property.name + ".", property.name + "[" + index_1 + "].");
                                    formArrayGroup.push(_this.formGroup(entity || property.entity || _this.getEntity(subObject, formBuilderConfiguration, property.name, true), subObject, objectValidationConfig_1));
                                    index_1++;
                                    _this.conditionalObjectProps = [];
                                    _this.builderConfigurationConditionalObjectProps = [];
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (arrayObjectValue_1_1 && !arrayObjectValue_1_1.done && (_a = arrayObjectValue_1.return)) _a.call(arrayObjectValue_1);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                            formGroupObject[property.name] = new RxFormArray(arrayObjectValue, formArrayGroup, null, null, property.arrayConfig);
                            if (ReactiveFormConfig.autoInstancePush) {
                                arrayObjectValue.push = function (instance) { var formGroup = _this.formGroup(instance.constructor, instance, objectValidationConfig_1); formGroupObject[property.name].push(formGroup, true); return 0; };
                                arrayObjectValue.splice = function (start, deleteCount) {
                                    var end = (start + deleteCount) - 1;
                                    for (var i = start; i <= end; i++) {
                                        formGroupObject[property.name].removeAt(i, true);
                                    }
                                    return [];
                                };
                            }
                            _this.isNestedBinding = _this.isNested = false;
                        }
                        else if (arrayObjectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"])
                            formGroupObject[property.name] = arrayObjectValue;
                        else if (property.arrayConfig && property.arrayConfig.createBlank)
                            formGroupObject[property.name] = new RxFormArray([], [], null, null, property.arrayConfig);
                        break;
                }
            }
        });
        if (!this.isNested) {
            this.conditionalValidationInstance = {};
            this.builderConfigurationConditionalObjectProps = [];
        }
        var abstractControlOptions = this.getAbstractControlOptions("global", formBuilderConfiguration ? formBuilderConfiguration.baseAbstractControlOptions : {}, { validators: [], asyncValidators: [] });
        var formGroup = new RxFormGroup(json.model, json.entityObject, formGroupObject, abstractControlOptions.validators, abstractControlOptions.asyncValidators);
        if (defaultContainer.isExperimental) {
            json.entityObject["formGroup"] = formGroup;
            this.overrideProperties(formGroup, json.entityObject, extendedProperties);
        }
        if (!this.isNestedBinding && !this.isGroupCalled)
            formGroup.refreshDisable();
        return formGroup;
    };
    RxFormBuilder.prototype.overrideProperties = function (formGroup, entityObject, properties) {
        var _this = this;
        Object.keys(properties).forEach(function (t) {
            _this.overrideProp(entityObject, t, formGroup);
        });
    };
    RxFormBuilder.prototype.getAbstractControlOptions = function (name, controlOptions, abstractControlOptions) {
        if (controlOptions && controlOptions[name]) {
            if (controlOptions[name].updateOn)
                abstractControlOptions.updateOn = controlOptions[name].updateOn;
            if (controlOptions[name].validators) {
                if (Array.isArray(controlOptions[name].validators))
                    controlOptions[name].validators.forEach(function (validator) { return abstractControlOptions.validators.push(validator); });
                else
                    abstractControlOptions.validators.push(controlOptions[name].validators);
            }
            if (controlOptions[name].asyncValidators) {
                if (Array.isArray(controlOptions[name].asyncValidators))
                    controlOptions[name].asyncValidators.forEach(function (validator) { return abstractControlOptions.asyncValidators.push(validator); });
                else
                    abstractControlOptions.asyncValidators.push(controlOptions[name].validators);
            }
        }
        return abstractControlOptions;
    };
    RxFormBuilder.prototype.overrideProp = function (entityObject, propName, formGroup) {
        var descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(entityObject), propName);
        var value = entityObject[propName];
        var oldValue = null;
        Object.defineProperty(entityObject, propName, {
            get: function () { return descriptor ? descriptor.get.call(entityObject) : value; },
            set: function (v) {
                value = v;
                if (oldValue != v) {
                    if (descriptor)
                        descriptor.set.call(entityObject, v);
                    if (!formGroup.changing && formGroup.controls[propName]) {
                        formGroup.controls[propName].setValue(v);
                    }
                }
                oldValue = v;
            }
        });
    };
    RxFormBuilder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RxFormBuilder);
    return RxFormBuilder;
}(BaseFormBuilder));

var BaseDirective = /** @class */ (function () {
    function BaseDirective() {
    }
    BaseDirective.prototype.applyValidations = function (controls, model) {
        var _this = this;
        if (model === void 0) { model = null; }
        if (this.model) {
            var modelConfig_1 = defaultContainer.get(model || this.model.constructor);
            if (modelConfig_1) {
                modelConfig_1.properties.forEach(function (property) {
                    if (controls[property.name]) {
                        switch (property.propertyType) {
                            case PROPERTY:
                                _this.setValidatorConfig(controls[property.name], modelConfig_1, property);
                                break;
                            case OBJECT_PROPERTY:
                                _this.applyValidations(controls[property.name].controls, property.entity);
                                break;
                        }
                    }
                });
            }
        }
    };
    BaseDirective.prototype.setValidatorConfig = function (control, modelConfig, property) {
        var annotations = modelConfig.propertyAnnotations.filter(function (t) { return t.propertyName == property.name; });
        annotations.forEach(function (annotation) {
            if (!control[TEMPLATE_VALIDATION_CONFIG])
                control[TEMPLATE_VALIDATION_CONFIG] = {};
            ApplicationUtil.configureControl(control, annotation.config ? annotation.config : "", annotation.annotationType);
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], BaseDirective.prototype, "model", void 0);
    return BaseDirective;
}());

var RxwebFormDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RxwebFormDirective, _super);
    function RxwebFormDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clearTimeoutNumber = 0;
        _this.validationRule = {};
        return _this;
    }
    RxwebFormDirective.prototype.ngAfterContentInit = function () {
        if (this.formGroup && !this.formGroup[MODEL] && this.formGroup.parent == null) {
            this.expressionProcessor(this.formGroup.controls);
            this.setConditionalValidator(this.formGroup.controls);
        }
        else if (this.formGroup && !this.formGroup[MODEL] && this.formGroup.parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
            this.expressionProcessor(this.formGroup.controls);
            this.setConditionalValidator(this.formGroup.controls);
        }
        else if (this.ngForm) {
            this.configureModelValidations();
        }
    };
    RxwebFormDirective.prototype.configureModelValidations = function () {
        var _this = this;
        this.clearTimeoutNumber = setTimeout(function () {
            clearTimeout(_this.clearTimeoutNumber);
            _this.applyValidations(_this.ngForm.form.controls);
            _this.expressionProcessor(_this.ngForm.form.controls);
            _this.setConditionalValidator(_this.ngForm.form.controls);
            _this.updateValueAndValidity(_this.ngForm.form.controls);
        }, 500);
    };
    RxwebFormDirective.prototype.updateValueAndValidity = function (controls) {
        var _this = this;
        Object.keys(controls).forEach(function (key) {
            if (controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
                _this.updateValueAndValidity(controls[key].controls);
            else if (controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"])
                _this.updateValueAndValidity(controls[key].controls);
            else
                controls[key].updateValueAndValidity();
        });
    };
    RxwebFormDirective.prototype.expressionProcessor = function (controls, rootFieldName) {
        var _this = this;
        if (rootFieldName === void 0) { rootFieldName = ""; }
        Object.keys(controls).forEach(function (fieldName) {
            var formControl = controls[fieldName];
            if (formControl.validatorConfig) {
                Object.keys(AnnotationTypes).forEach(function (validatorName) {
                    if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].disableExpression) {
                        formControl["disableExpression"] = formControl.validatorConfig[validatorName].disableExpression;
                        var columns = Linq.expressionColumns(formControl.validatorConfig[validatorName].disableExpression);
                        defaultContainer.addChangeValidation(_this.validationRule, rootFieldName + fieldName, columns);
                    }
                    if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].conditionalExpression) {
                        var columns = Linq.expressionColumns(formControl.validatorConfig[validatorName].conditionalExpression);
                        defaultContainer.addChangeValidation(_this.validationRule, rootFieldName + fieldName, columns);
                    }
                    if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].dynamicConfig) {
                        var columns = Linq.dynamicConfigParser(formControl.validatorConfig[validatorName].dynamicConfig, fieldName);
                        defaultContainer.addChangeValidation(_this.validationRule, rootFieldName + fieldName, columns);
                    }
                    if (formControl.validatorConfig[validatorName] && (validatorName == AnnotationTypes.and || validatorName == AnnotationTypes.or || validatorName == AnnotationTypes.not)) {
                        Object.keys(formControl.validatorConfig[validatorName].validation).forEach(function (t) {
                            if (typeof formControl.validatorConfig[validatorName].validation[t] !== "boolean")
                                defaultContainer.setLogicalConditional(_this.validationRule, t, formControl.validatorConfig[validatorName].validation[t].fieldName, fieldName);
                        });
                    }
                    else if (formControl.validatorConfig[validatorName] && ((validatorName == AnnotationTypes.compare || validatorName == AnnotationTypes.greaterThan || validatorName == AnnotationTypes.greaterThanEqualTo || validatorName == AnnotationTypes.lessThan || validatorName == AnnotationTypes.lessThanEqualTo || validatorName == AnnotationTypes.different || validatorName == AnnotationTypes.factor || validatorName == AnnotationTypes.minTime || validatorName == AnnotationTypes.maxTime) || (validatorName == AnnotationTypes.creditCard && formControl.validatorConfig[validatorName].fieldName) || ((validatorName == AnnotationTypes.minDate || validatorName == AnnotationTypes.maxDate) && formControl.validatorConfig[validatorName].fieldName))) {
                        defaultContainer.setConditionalValueProp(_this.validationRule, formControl.validatorConfig[validatorName].fieldName, fieldName);
                    }
                });
            }
            else if (formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                _this.expressionProcessor(formControl.controls, fieldName + ".");
            }
            else if (formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                if (formControl.controls)
                    formControl.controls.forEach(function (t, i) {
                        if (t.controls)
                            _this.expressionProcessor(t.controls, fieldName + "[]");
                    });
            }
        });
    };
    RxwebFormDirective.prototype.setConditionalValidator = function (controls) {
        var _this = this;
        Object.keys(controls).forEach(function (fieldName) {
            if (_this.validationRule.conditionalValidationProps && _this.validationRule.conditionalValidationProps[fieldName]) {
                controls[fieldName][CONDITIONAL_VALIDATOR] = conditionalChangeValidator(_this.validationRule.conditionalValidationProps[fieldName]);
            }
            else if (controls[fieldName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] && _this.validationRule.conditionalObjectProps) {
                var fields = _this.validationRule.conditionalObjectProps.filter(function (t) { return t.objectPropName == fieldName; });
                var nestedFormGroup_1 = controls[fieldName];
                var propWiseConditionalControls_1 = {};
                fields.forEach(function (x) {
                    if (!propWiseConditionalControls_1[x.propName])
                        propWiseConditionalControls_1[x.propName] = [];
                    propWiseConditionalControls_1[x.propName].push(x.referencePropName);
                });
                Object.keys(propWiseConditionalControls_1).forEach(function (key) {
                    nestedFormGroup_1.controls[key][CONDITIONAL_VALIDATOR] = conditionalChangeValidator(propWiseConditionalControls_1[key]);
                });
            }
            else if (controls[fieldName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                //fix https://github.com/rxweb/rxweb/issues/274
                controls[fieldName].controls.forEach(function (t, i) {
                    var _a;
                    if (t.controls == undefined)
                        _this.setConditionalValidator((_a = {}, _a[i] = t, _a));
                    else
                        _this.setConditionalValidator(t.controls);
                });
            }
        });
    };
    RxwebFormDirective.prototype.ngOnDestroy = function () {
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], RxwebFormDirective.prototype, "formGroup", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rxwebForm'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxwebFormDirective.prototype, "ngForm", void 0);
    RxwebFormDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[formGroup],[rxwebForm]',
        })
    ], RxwebFormDirective);
    return RxwebFormDirective;
}(BaseDirective));

var DecimalProvider = /** @class */ (function () {
    function DecimalProvider(decimalPipe, localeId) {
        this.decimalPipe = decimalPipe;
        this.localeId = localeId;
        this.decimalSeperator = ".";
        this.groupSeperator = ",";
        this.isSetConfig = false;
        this.decimalSeperator = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["getLocaleNumberSymbol"])(localeId, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NumberSymbol"].Decimal);
        this.groupSeperator = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["getLocaleNumberSymbol"])(localeId, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NumberSymbol"].Group);
        this.setSymbolInConfig();
    }
    DecimalProvider.prototype.replacer = function (value) {
        value = String(value);
        if (!this.isSetConfig)
            this.bindConfig();
        value = value.split(this.groupSeperator).join(BLANK);
        if (this.allowDecimalSymbol)
            value = value.replace(this.decimalSeperator, this.allowDecimalSymbol);
        var splitValue = value.split(this.decimalSeperator);
        value = (splitValue.length > 1 && splitValue[1] && RegexValidator.isZero(splitValue[1])) ? splitValue[0] : value;
        return value;
    };
    DecimalProvider.prototype.transFormDecimal = function (value, digitsInfo) {
        value = String(value);
        if (!value) {
            return value;
        }
        return this.decimalPipe.transform(value.replace(ReactiveFormConfig.number.groupSymbol, "").replace(this.decimalSeperator, "."), digitsInfo, this.localeId);
    };
    DecimalProvider.prototype.setSymbolInConfig = function () {
        ReactiveFormConfig.number = { decimalSymbol: this.decimalSeperator, groupSymbol: this.groupSeperator };
    };
    DecimalProvider.prototype.bindConfig = function () {
        if (ReactiveFormConfig.json) {
            if (ReactiveFormConfig.json.localeId)
                this.localeId = ReactiveFormConfig.json.localeId;
            if (ReactiveFormConfig.json.allowDecimalSymbol)
                this.allowDecimalSymbol = ReactiveFormConfig.json.allowDecimalSymbol;
        }
        this.isSetConfig = true;
    };
    DecimalProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], String])
    ], DecimalProvider);
    return DecimalProvider;
}());

var HtmlControlTemplateDirective = /** @class */ (function () {
    function HtmlControlTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('htmlControlTemplate'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], HtmlControlTemplateDirective.prototype, "type", void 0);
    HtmlControlTemplateDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[htmlControlTemplate]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], HtmlControlTemplateDirective);
    return HtmlControlTemplateDirective;
}());

var ControlHostDirective = /** @class */ (function () {
    function ControlHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(ControlHostDirective.prototype, "portal", {
        set: function (context) {
            if (context.templateRef) {
                if (this.view) {
                    this.view.destroy();
                    this.view = undefined;
                }
                this.view = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
            }
        },
        enumerable: true,
        configurable: true
    });
    ControlHostDirective.prototype.ngOnDestroy = function () {
        if (this.view)
            this.view.destroy();
        if (this.viewContainerRef)
            this.viewContainerRef.clear();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('controlHost'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], ControlHostDirective.prototype, "portal", null);
    ControlHostDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[controlHost]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], ControlHostDirective);
    return ControlHostDirective;
}());

var ControlExpressionProcess = /** @class */ (function () {
    function ControlExpressionProcess() {
        this.controlConfig = {};
        this.isProcessed = false;
    }
    ControlExpressionProcess.prototype.setModelConfig = function (control) {
        this.isProcessed = true;
        if (this.controlConfig && this.controlConfig.validatorConfig) {
            control[VALIDATOR_CONFIG] = this.controlConfig.validatorConfig;
            this.controlConfig = undefined;
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], ControlExpressionProcess.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], ControlExpressionProcess.prototype, "formControlName", void 0);
    return ControlExpressionProcess;
}());

var BaseValidator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseValidator, _super);
    function BaseValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validators = [];
        return _this;
    }
    BaseValidator.prototype.validation = function (control) {
        var e_1, _a;
        var result = null;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.validators), _c = _b.next(); !_c.done; _c = _b.next()) {
                var validator = _c.value;
                result = validator(control);
                if (result)
                    break;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!result && this.maskProvider)
            result = this.maskProvider.validate();
        return result;
    };
    BaseValidator.prototype.setEventName = function () {
        var eventName = '';
        switch (this.element.tagName) {
            case INPUT:
            case TEXTAREA:
                eventName = (this.element.type == CHECKBOX || this.element.type == RADIO || this.element.type == FILE) ? CHANGE : INPUT;
                break;
            case SELECT:
                eventName = CHANGE;
                break;
        }
        this.eventName = eventName.toLowerCase();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], BaseValidator.prototype, "formControl", void 0);
    return BaseValidator;
}(ControlExpressionProcess));

var MaskProvider = /** @class */ (function () {
    function MaskProvider(input, mask, renderer, formControl, config) {
        this.input = input;
        this.mask = mask;
        this.renderer = renderer;
        this.formControl = formControl;
        this.config = config;
        this.eventListeners = [];
        this.oldValue = '';
        this.type = 'text';
        this.slotChar = '_';
        this.autoClear = false;
        this.isInvalid = false;
        this.internalProcess = false;
        this.bind();
    }
    MaskProvider.prototype.bind = function () {
        if (RegexValidator.isNotBlank(this.formControl.value))
            this.input.value = this.formControl.value;
        this.tests = [];
        this.partialPosition = this.mask.length;
        this.len = this.mask.length;
        this.firstNonMaskPos = null;
        this.defs = {
            '9': '[0-9]',
            'a': '[A-Za-z]',
            '*': '[A-Za-z0-9]'
        };
        this.androidChrome = false;
        var maskTokens = this.mask.split('');
        for (var i = 0; i < maskTokens.length; i++) {
            var c = maskTokens[i];
            if (c == '?') {
                this.len--;
                this.partialPosition = i;
            }
            else if (this.defs[c]) {
                this.tests.push(new RegExp(this.defs[c]));
                if (this.firstNonMaskPos === null) {
                    this.firstNonMaskPos = this.tests.length - 1;
                }
                if (i < this.partialPosition) {
                    this.lastRequiredNonMaskPos = this.tests.length - 1;
                }
            }
            else {
                this.tests.push(null);
            }
        }
        this.minLength = this.config.minLength ? this.lastRequiredNonMaskPos - (this.lastRequiredNonMaskPos - this.config.minLength) : this.lastRequiredNonMaskPos;
        this.buffer = [];
        for (var i = 0; i < maskTokens.length; i++) {
            var c = maskTokens[i];
            if (c != '?') {
                if (this.defs[c])
                    this.buffer.push(this.getPlaceholder(i));
                else
                    this.buffer.push(c);
            }
        }
        this.defaultBuffer = this.buffer.join('');
        this.focusText = this.input.value;
        this.bindEvents();
        this.checkVal();
    };
    MaskProvider.prototype.bindEvents = function () {
        this.eventListeners.push(this.renderer.listen(this.input, FOCUS, this.onFocus.bind(this)));
        this.eventListeners.push(this.renderer.listen(this.input, BLUR, this.onBlur.bind(this)));
        this.eventListeners.push(this.renderer.listen(this.input, KEY_DOWN, this.onKeyDown.bind(this)));
        this.eventListeners.push(this.renderer.listen(this.input, KEY_PRESS, this.onKeyPress.bind(this)));
        this.eventListeners.push(this.renderer.listen(this.input, "input", this.onInput.bind(this)));
        this.eventListeners.push(this.renderer.listen(this.input, PASTE, this.handleInputChange.bind(this)));
    };
    MaskProvider.prototype.validate = function () {
        if ((this.input.value && this.oldValue != this.input.value)) {
            this.checkVal(true);
            this.isCompleted(null, true);
            this.oldValue = this.input.value;
        }
        var config = getConfigObject(this.config, this.formControl);
        if (RegexValidator.isNotBlank(this.getUnmaskedValue()) && FormProvider.ProcessRule(this.formControl, config)) {
            if (this.isInvalid) {
                return ObjectMaker.toJson(AnnotationTypes.mask, config, [this.formControl.value]);
            }
        }
        return ObjectMaker.null();
    };
    MaskProvider.prototype.writeValue = function (value) {
        this.value = value;
        if (this.input) {
            if (this.value == undefined || this.value == null) {
                this.input.value = '';
            }
            this.checkVal();
        }
        this.updateFilledState();
    };
    MaskProvider.prototype.caret = function (first, last) {
        var range, begin, end;
        if (!this.input.offsetParent || this.input !== document.activeElement) {
            return;
        }
        if (typeof first == 'number') {
            begin = first;
            end = (typeof last === 'number') ? last : begin;
            if (this.input.setSelectionRange) {
                this.input.setSelectionRange(begin, end);
            }
            else if (this.input['createTextRange']) {
                range = this.input['createTextRange']();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', begin);
                range.select();
            }
        }
        else {
            if (this.input.setSelectionRange) {
                begin = this.input.selectionStart;
                end = this.input.selectionEnd;
            }
            else if (document['selection'] && document['selection'].createRange) {
                range = document['selection'].createRange();
                begin = 0 - range.duplicate().moveStart('character', -100000);
                end = begin + range.text.length;
            }
            return { begin: begin, end: end };
        }
    };
    MaskProvider.prototype.isCompleted = function (lastRequiredNonMaskPos, isNotRunValidator) {
        lastRequiredNonMaskPos = lastRequiredNonMaskPos || this.lastRequiredNonMaskPos;
        for (var i = this.firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
            if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
                return false;
            }
        }
        this.isInvalid = false;
        if (!isNotRunValidator)
            this.formControl.updateValueAndValidity();
        return true;
    };
    MaskProvider.prototype.getPlaceholder = function (i) {
        if (i < this.slotChar.length) {
            return this.slotChar.charAt(i);
        }
        return this.slotChar.charAt(0);
    };
    MaskProvider.prototype.seekNext = function (pos) {
        while (++pos < this.len && !this.tests[pos])
            ;
        return pos;
    };
    MaskProvider.prototype.seekPrev = function (pos) {
        while (--pos >= 0 && !this.tests[pos])
            ;
        return pos;
    };
    MaskProvider.prototype.shiftL = function (begin, end) {
        var i, j;
        if (begin < 0) {
            return;
        }
        for (i = begin, j = this.seekNext(end); i < this.len; i++) {
            if (this.tests[i]) {
                if (j < this.len && this.tests[i].test(this.buffer[j])) {
                    this.buffer[i] = this.buffer[j];
                    this.buffer[j] = this.getPlaceholder(j);
                }
                else {
                    break;
                }
                j = this.seekNext(j);
            }
        }
        this.writeBuffer();
        this.caret(Math.max(this.firstNonMaskPos, begin));
    };
    MaskProvider.prototype.shiftR = function (pos) {
        var i, c, j, t;
        for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
            if (this.tests[i]) {
                j = this.seekNext(i);
                t = this.buffer[i];
                this.buffer[i] = c;
                if (j < this.len && this.tests[j].test(t)) {
                    c = t;
                }
                else {
                    break;
                }
            }
        }
    };
    MaskProvider.prototype.handleAndroidInput = function (e) {
        var curVal = this.input.value;
        var pos = this.caret();
        if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
            this.checkVal(true);
            while (pos.begin > 0 && !this.tests[pos.begin - 1])
                pos.begin--;
            if (pos.begin === 0) {
                while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin])
                    pos.begin++;
            }
            this.caret(pos.begin, pos.begin);
        }
        else {
            var pos2 = this.checkVal(true);
            while (pos.begin < this.len && !this.tests[pos.begin])
                pos.begin++;
            this.caret(pos.begin, pos.begin);
        }
        if (this.isCompleted()) {
            this.isInvalid = false;
        }
        else {
            this.isInvalid = true;
            this.formControl.updateValueAndValidity();
        }
    };
    MaskProvider.prototype.onBlur = function (e) {
        this.focus = false;
        this.checkVal();
        this.updateModel(e);
        this.updateFilledState();
        if (this.input.value != this.focusText) {
            var event_1 = document.createEvent('HTMLEvents');
            event_1.initEvent('change', true, false);
            this.input.dispatchEvent(event_1);
            var maskedValue = this.input.value;
            this.formControl.setValue(this.config.valueWithMask ? maskedValue : this.getUnmaskedValue());
            this.input.value = maskedValue;
        }
    };
    MaskProvider.prototype.onKeyDown = function (e) {
        var k = e.which || e.keyCode, pos, begin, end;
        var iPhone = false;
        this.oldVal = this.input.value;
        var controlValid = this.config.minLength ? this.isCompleted(this.minLength + 1) : false;
        if (k === 8 || k === 46 || (iPhone )) {
            pos = this.caret();
            begin = pos.begin;
            end = pos.end;
            if (end - begin === 0) {
                begin = k !== 46 ? this.seekPrev(begin) : (end = this.seekNext(begin - 1));
                end = k === 46 ? this.seekNext(end) : end;
            }
            this.clearBuffer(begin, end);
            this.shiftL(begin, end - 1);
            this.setControlValue(e, false, controlValid);
            this.updateModel(e);
            e.preventDefault();
        }
        else if (k === 13) {
            this.onBlur(e);
            this.setControlValue(e, false, controlValid);
            this.updateModel(e);
        }
        else if (k === 27) {
            this.input.value = this.focusText;
            this.caret(0, this.checkVal());
            this.updateModel(e);
            this.setControlValue(e, false, controlValid);
            e.preventDefault();
        }
    };
    MaskProvider.prototype.onKeyPress = function (e) {
        var k = e.which || e.keyCode, pos = this.caret(), p, c, next, completed;
        if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {
            return;
        }
        else if (k && k !== 13) {
            if (pos.end - pos.begin !== 0) {
                this.clearBuffer(pos.begin, pos.end);
                this.shiftL(pos.begin, pos.end - 1);
            }
            p = this.seekNext(pos.begin - 1);
            if (p < this.len) {
                c = String.fromCharCode(k);
                if (this.tests[p].test(c)) {
                    this.shiftR(p);
                    this.buffer[p] = c;
                    this.writeBuffer();
                    next = this.seekNext(p);
                    this.caret(next);
                    if (pos.begin <= this.lastRequiredNonMaskPos) {
                        completed = this.isCompleted();
                    }
                }
            }
            e.preventDefault();
        }
        this.updateModel(e);
        if (completed === undefined)
            completed = this.isCompleted();
        this.setControlValue(e, completed, this.config.minLength ? this.isCompleted(this.minLength) : false);
    };
    MaskProvider.prototype.clearBuffer = function (start, end) {
        var i;
        for (i = start; i < end && i < this.len; i++) {
            if (this.tests[i]) {
                this.buffer[i] = this.getPlaceholder(i);
            }
        }
    };
    MaskProvider.prototype.writeBuffer = function () {
        this.input.value = this.buffer.join('');
    };
    MaskProvider.prototype.checkVal = function (allow) {
        var test = this.input.value, lastMatch = -1, i, c, pos;
        for (i = 0, pos = 0; i < this.len; i++) {
            if (this.tests[i]) {
                this.buffer[i] = this.getPlaceholder(i);
                while (pos++ < test.length) {
                    c = test.charAt(pos - 1);
                    if (this.tests[i].test(c)) {
                        this.buffer[i] = c;
                        lastMatch = i;
                        break;
                    }
                }
                if (pos > test.length) {
                    this.clearBuffer(i + 1, this.len);
                    break;
                }
            }
            else {
                if (this.buffer[i] === test.charAt(pos)) {
                    pos++;
                }
                if (i < this.partialPosition) {
                    lastMatch = i;
                }
            }
        }
        if (allow) {
            this.writeBuffer();
        }
        else if ((lastMatch + 1 < this.partialPosition) && (!this.config.minLength || !(lastMatch >= this.minLength))) {
            if (this.autoClear || this.buffer.join('') === this.defaultBuffer) {
                this.isInvalid = true;
            }
            else {
                this.isInvalid = true;
                this.writeBuffer();
            }
        }
        else {
            this.writeBuffer();
            this.input.value = this.input.value.substring(0, lastMatch + 1);
        }
        return (this.partialPosition ? i : this.firstNonMaskPos);
    };
    MaskProvider.prototype.onFocus = function (event) {
        var _this = this;
        this.focus = true;
        clearTimeout(this.caretTimeoutId);
        var pos;
        this.focusText = this.input.value;
        pos = this.checkVal();
        this.caretTimeoutId = setTimeout(function () {
            if (_this.input !== document.activeElement) {
                return;
            }
            _this.writeBuffer();
            if (pos == _this.mask.replace("?", "").length) {
                _this.caret(0, pos);
            }
            else {
                _this.caret(pos);
            }
            _this.updateFilledState();
        }, 10);
    };
    MaskProvider.prototype.onInput = function (event) {
        if (this.androidChrome)
            this.handleAndroidInput(event);
        else
            this.handleInputChange(event);
    };
    MaskProvider.prototype.setControlValue = function (e, isValid, isValidControl) {
        this.isInvalid = isValidControl ? !isValidControl : !isValid;
        var value = this.input.value;
        var controlValue = '';
        if (!this.isInvalid)
            controlValue = this.config.valueWithMask ? value : this.getUnmaskedValue();
        this.formControl.setValue(controlValue);
        this.oldValue = this.input.value = value;
        if (!isValid)
            this.onFocus(e);
    };
    MaskProvider.prototype.handleInputChange = function (event) {
        var _this = this;
        setTimeout(function () {
            var pos = _this.checkVal(true);
            _this.caret(pos);
            _this.updateModel(event);
            _this.setControlValue(event, _this.isCompleted());
        }, 0);
    };
    MaskProvider.prototype.getUnmaskedValue = function () {
        var unmaskedBuffer = [];
        for (var i = 0; i < this.buffer.length; i++) {
            var c = this.buffer[i];
            if (this.tests[i] && c != this.getPlaceholder(i)) {
                unmaskedBuffer.push(c);
            }
        }
        return unmaskedBuffer.join('');
    };
    MaskProvider.prototype.updateModel = function (e) {
    };
    MaskProvider.prototype.updateFilledState = function () {
        this.filled = this.input && this.input.value != '';
    };
    MaskProvider.prototype.onDestroy = function () {
        var eventCount = this.eventListeners.length;
        for (var i = 0; i < eventCount; i++) {
            this.eventListeners[0]();
            this.eventListeners.splice(0, 1);
        }
        this.eventListeners = [];
    };
    return MaskProvider;
}());

var NGMODEL_BINDING = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RxFormControlDirective; }),
    multi: true
};
var ALLOW_VALIDATOR_WITHOUT_CONFIG = ['required', 'notEmpty', 'alpha', 'alphaNumeric', 'ascii', 'dataUri', 'digit', 'email', 'even', 'hexColor', 'json', 'latitude', 'latLong', 'leapYear', 'longitude', 'lowerCase', 'mac', 'odd', 'port', 'primeNumber', 'time', 'upperCase', 'url', 'unique', 'cusip', 'gird'];
var NUMERIC = "numeric";
var IS_FORMAT = "isFormat";
var DIGITS_INFO = "digitsInfo";
var RxFormControlDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RxFormControlDirective, _super);
    function RxFormControlDirective(elementRef, renderer, decimalProvider) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.decimalProvider = decimalProvider;
        _this.eventListeners = [];
        _this.isNumericSubscribed = false;
        _this.isFocusCalled = false;
        _this.isMasked = false;
        _this.element = elementRef.nativeElement;
        _this.setEventName();
        return _this;
    }
    Object.defineProperty(RxFormControlDirective.prototype, "validationControls", {
        get: function () {
            return this.controls;
        },
        set: function (value) {
            this.controls = value;
        },
        enumerable: true,
        configurable: true
    });
    RxFormControlDirective.prototype.ngOnInit = function () {
        var _this = this;
        var validators = [];
        Object.keys(APP_VALIDATORS).forEach(function (validatorName) {
            if ((_this["rx" + validatorName]) || (ALLOW_VALIDATOR_WITHOUT_CONFIG.indexOf(validatorName) != -1 && _this["rx" + validatorName] == BLANK)) {
                validators.push(APP_VALIDATORS[validatorName](_this["rx" + validatorName]));
                if (_this.name && !(_this.formControlName && _this.formControl)) {
                    ApplicationUtil.configureControl(_this.controlConfig, _this["rx" + validatorName], validatorName);
                }
            }
        });
        if (validators.length > 0)
            this.validators = validators;
        if (this.rxnumeric && (this.rxnumeric.isFormat || this.rxnumeric.digitsInfo)) {
            this.bindNumericElementEvent();
        }
    };
    RxFormControlDirective.prototype.blurEvent = function () {
        if (!(this.formControl && this.formControl.errors && this.formControl.errors.numeric)) {
            if (this.formControl.value !== null && this.formControl.value !== undefined) {
                var value = this.decimalProvider.transFormDecimal(this.formControl.value, this.rxnumeric.digitsInfo);
                value = (!this.rxnumeric.isFormat) ? this.decimalProvider.replacer(value) : value;
                this.setValueOnElement(value);
            }
            this.isFocusCalled = false;
        }
    };
    RxFormControlDirective.prototype.bindNumericElementEvent = function (config) {
        var _this = this;
        if (config)
            this.rxnumeric = config;
        var listener = this.renderer.listen(this.element, BLUR, this.blurEvent.bind(this));
        this.eventListeners.push(listener);
        listener = this.renderer.listen(this.element, FOCUS, function (event) {
            _this.isFocusCalled = true;
            if (!(_this.formControl && _this.formControl.errors && _this.formControl.errors.numeric) && _this.formControl.value != null) {
                var value = _this.decimalProvider.replacer(_this.element.value);
                _this.setValueOnElement(value);
            }
        });
        this.eventListeners.push(listener);
    };
    RxFormControlDirective.prototype.bindValueChangeEvent = function () {
        var _this = this;
        if (this.eventName != BLANK) {
            var listener = this.renderer.listen(this.element, this.eventName, function () {
                Object.keys(_this.validationControls).forEach(function (fieldName) {
                    _this.validationControls[fieldName].updateValueAndValidity();
                });
            });
            this.eventListeners.push(listener);
        }
    };
    RxFormControlDirective.prototype.subscribeNumericFormatter = function () {
        if (this.formControl[VALIDATOR_CONFIG] && this.formControl[VALIDATOR_CONFIG][NUMERIC] && (this.formControl[VALIDATOR_CONFIG][NUMERIC][IS_FORMAT] || this.formControl[VALIDATOR_CONFIG][NUMERIC][DIGITS_INFO])) {
            if (!this.isNumericSubscribed) {
                this.bindNumericElementEvent(this.formControl[VALIDATOR_CONFIG][NUMERIC]);
                this.isNumericSubscribed = true;
            }
            if (!this.isFocusCalled && RegexValidator.isNotBlank(this.formControl.value)) {
                this.blurEvent();
            }
        }
    };
    RxFormControlDirective.prototype.subscribeMaskValidator = function () {
        if (this.formControl[VALIDATOR_CONFIG] && this.formControl[VALIDATOR_CONFIG]["mask"] && !this.isMasked) {
            var config = this.formControl[VALIDATOR_CONFIG]["mask"];
            this.maskProvider = new MaskProvider(this.element, config.mask, this.renderer, this.formControl, config);
            this.isMasked = true;
        }
    };
    RxFormControlDirective.prototype.setValueOnElement = function (value) {
        this.renderer.setProperty(this.element, ELEMENT_VALUE, value);
    };
    RxFormControlDirective.prototype.setTemplateValidators = function (control) {
        for (var validatorName in control[VALIDATOR_CONFIG]) {
            this[validatorName] = control[VALIDATOR_CONFIG][validatorName];
        }
        delete control[TEMPLATE_VALIDATION_CONFIG];
        delete control[VALIDATOR_CONFIG];
        this.ngOnInit();
    };
    RxFormControlDirective.prototype.updateOnElementClass = function (element) {
        var previousClassName = '';
        return function (className) {
            if (previousClassName)
                element.classList.remove(previousClassName);
            if (className)
                element.classList.add(className);
            previousClassName = className;
        };
    };
    RxFormControlDirective.prototype.setValidatorConfig = function (control) {
        if (!this.formControl) {
            this.formControl = control;
            var rxFormControl = this.formControl;
            if (rxFormControl.updateOnElementClass)
                rxFormControl.updateOnElementClass = this.updateOnElementClass(this.element);
        }
        this.subscribeMaskValidator();
        this.subscribeNumericFormatter();
        if (control[TEMPLATE_VALIDATION_CONFIG])
            this.setTemplateValidators(control);
        if (control[CONDITIONAL_VALIDATOR]) {
            this.conditionalValidator = control[CONDITIONAL_VALIDATOR];
            delete control[CONDITIONAL_VALIDATOR];
        }
    };
    RxFormControlDirective.prototype.validate = function (control) {
        this.setValidatorConfig(control);
        if (this.conditionalValidator)
            this.conditionalValidator(control);
        if (!this.isProcessed)
            this.setModelConfig(control);
        return ((this.validators && this.validators.length > 0) || this.maskProvider) ? this.validation(control) : null;
    };
    RxFormControlDirective.prototype.ngOnDestroy = function () {
        this.controls = undefined;
        var eventCount = this.eventListeners.length;
        for (var i = 0; i < eventCount; i++) {
            this.eventListeners[0]();
            this.eventListeners.splice(0, 1);
        }
        this.eventListeners = [];
        if (this.maskProvider)
            this.maskProvider.onDestroy();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxalpha", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxalphaNumeric", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxascii", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxcompare", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxcompose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxcontains", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxcreditCard", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxdataUri", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxdifferent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxdigit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxemail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxendsWith", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxeven", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxextension", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxfactor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxfileSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxgreaterThanEqualTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxgreaterThan", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxhexColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxjson", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxlatitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxlatLong", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxleapYear", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxlessThan", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxlessThanEqualTo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxlongitude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxlowerCase", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxmac", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxmaxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxmaxLength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxmaxNumber", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxminDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxminLength", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxminNumber", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxnumeric", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxodd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxpassword", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxport", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxprimeNumber", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxrequired", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxrange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxrule", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxstartsWith", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxtime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxupperCase", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxurl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxunique", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxnotEmpty", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxcusip", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxgrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], RxFormControlDirective.prototype, "rxdate", void 0);
    RxFormControlDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngModel],[formControlName],[formControl]',
            providers: [NGMODEL_BINDING],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], DecimalProvider])
    ], RxFormControlDirective);
    return RxFormControlDirective;
}(BaseValidator));

var VALIDATOR_CONFIG$1 = "validatorConfig";
var FILE_VALIDATOR_NAMES = ["extension", "fileSize", "file"];
var FileControlDirective = /** @class */ (function () {
    function FileControlDirective(elementRef) {
        this.elementRef = elementRef;
        this.isProcessed = false;
        this.validators = [];
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this.element = elementRef.nativeElement;
    }
    FileControlDirective_1 = FileControlDirective;
    FileControlDirective.prototype.onChangeCall = function (element) {
        var files = element.files;
        if (this.writeFile)
            this.onChange(files);
        else {
            if (files.length > 0)
                this.onChange(element.value);
            else
                this.onChange(undefined);
        }
    };
    FileControlDirective.prototype.writeValue = function (value) { };
    FileControlDirective.prototype.registerOnChange = function (invocation) { this.onChange = invocation; };
    FileControlDirective.prototype.registerOnTouched = function (invocation) { this.onTouched = invocation; };
    Object.defineProperty(FileControlDirective.prototype, "extension", {
        set: function (config) {
            this.pushValidator(FILE_VALIDATOR_NAMES[0], config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileControlDirective.prototype, "fileSize", {
        set: function (config) {
            this.pushValidator(FILE_VALIDATOR_NAMES[1], config);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileControlDirective.prototype, "file", {
        set: function (config) {
            this.pushValidator(FILE_VALIDATOR_NAMES[2], config);
        },
        enumerable: true,
        configurable: true
    });
    FileControlDirective.prototype.setConfig = function (control) {
        var _this = this;
        FILE_VALIDATOR_NAMES.forEach(function (t) {
            if (!_this[t] && control[VALIDATOR_CONFIG$1] && control[VALIDATOR_CONFIG$1][t])
                _this[t] = control[VALIDATOR_CONFIG$1][t];
        });
        this.isProcessed = true;
    };
    FileControlDirective.prototype.pushValidator = function (validatorName, config) {
        if (config)
            this.validators.push(APP_VALIDATORS[validatorName](config));
    };
    FileControlDirective.prototype.validate = function (control) {
        var e_1, _a;
        if (!this.isProcessed)
            this.setConfig(control);
        var result = null;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.validators), _c = _b.next(); !_c.done; _c = _b.next()) {
                var validator = _c.value;
                result = validator(control, this.element.files);
                if (result)
                    break;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    var FileControlDirective_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], FileControlDirective.prototype, "writeFile", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], FileControlDirective.prototype, "extension", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], FileControlDirective.prototype, "fileSize", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], FileControlDirective.prototype, "file", null);
    FileControlDirective = FileControlDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "input[type=file]",
            host: {
                "(change)": "onChangeCall($event.target)",
                "(blur)": "onTouched()"
            },
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], useExisting: FileControlDirective_1, multi: true }, {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FileControlDirective_1; }),
                    multi: true
                }]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], FileControlDirective);
    return FileControlDirective;
}());

var VALIDATOR_CONFIG$2 = "validatorConfig";
var ImageFileControlDirective = /** @class */ (function () {
    function ImageFileControlDirective(elementRef) {
        this.elementRef = elementRef;
        this.isProcessed = false;
        this.element = elementRef.nativeElement;
    }
    ImageFileControlDirective_1 = ImageFileControlDirective;
    Object.defineProperty(ImageFileControlDirective.prototype, "image", {
        set: function (config) {
            this.imageValidation = APP_VALIDATORS.image(config);
        },
        enumerable: true,
        configurable: true
    });
    ImageFileControlDirective.prototype.setConfig = function (control) {
        var image = "image";
        if (!this[image] && control[VALIDATOR_CONFIG$2] && control[VALIDATOR_CONFIG$2][image])
            this[image] = control[VALIDATOR_CONFIG$2][image];
        this.isProcessed = true;
    };
    ImageFileControlDirective.prototype.validate = function (control) {
        if (!this.isProcessed)
            this.setConfig(control);
        if (this.imageValidation) {
            return this.imageValidation(control, this.element.files);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
    };
    var ImageFileControlDirective_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], ImageFileControlDirective.prototype, "image", null);
    ImageFileControlDirective = ImageFileControlDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "input[type=file]",
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_ASYNC_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ImageFileControlDirective_1; }),
                    multi: true
                }]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ImageFileControlDirective);
    return ImageFileControlDirective;
}());

var AsyncValidationDirective = /** @class */ (function () {
    function AsyncValidationDirective() {
    }
    AsyncValidationDirective_1 = AsyncValidationDirective;
    AsyncValidationDirective.prototype.validate = function (control) {
        if (this.async)
            return this.async(control);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
    };
    var AsyncValidationDirective_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AsyncValidationDirective.prototype, "async", void 0);
    AsyncValidationDirective = AsyncValidationDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ngModel],[formControlName],[formControl]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_ASYNC_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return AsyncValidationDirective_1; }),
                    multi: true
                }]
        })
    ], AsyncValidationDirective);
    return AsyncValidationDirective;
}());

var TypedFormBuilder = /** @class */ (function () {
    function TypedFormBuilder() {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]();
        this.rxFormBuilder = new RxFormBuilder();
    }
    TypedFormBuilder.prototype.group = function (controlsConfig, options) {
        var paramOptions = options || {};
        if (typeof controlsConfig == FUNCTION_STRING)
            return !(paramOptions && paramOptions.isInstance) ? this.rxFormBuilder.formGroup(controlsConfig, paramOptions.data, paramOptions.config) : this.rxFormBuilder.formGroup(controlsConfig, paramOptions.data, paramOptions.config).modelInstance;
        return this.formBuilder.group(controlsConfig, options);
    };
    return TypedFormBuilder;
}());

var RxReactiveFormsModule = /** @class */ (function () {
    function RxReactiveFormsModule() {
    }
    RxReactiveFormsModule_1 = RxReactiveFormsModule;
    RxReactiveFormsModule.forRoot = function () { return { ngModule: RxReactiveFormsModule_1, providers: [] }; };
    var RxReactiveFormsModule_1;
    RxReactiveFormsModule = RxReactiveFormsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [RxwebFormDirective, HtmlControlTemplateDirective, ControlHostDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective, AsyncValidationDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            providers: [RxFormBuilder, DecimalProvider, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
            exports: [AsyncValidationDirective, RxwebFormDirective, HtmlControlTemplateDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective]
        })
    ], RxReactiveFormsModule);
    return RxReactiveFormsModule;
}());
// Experimental
var ReactiveTypedFormsModule = /** @class */ (function () {
    function ReactiveTypedFormsModule() {
        defaultContainer.isExperimental = true;
        ReactiveFormConfig.autoInstancePush = true;
    }
    ReactiveTypedFormsModule_1 = ReactiveTypedFormsModule;
    ReactiveTypedFormsModule.forRoot = function () { return { ngModule: ReactiveTypedFormsModule_1, providers: [] }; };
    var ReactiveTypedFormsModule_1;
    ReactiveTypedFormsModule = ReactiveTypedFormsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], RxReactiveFormsModule.forRoot()],
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], useClass: TypedFormBuilder }, TypedFormBuilder],
            exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ReactiveTypedFormsModule);
    return ReactiveTypedFormsModule;
}());

function baseDecoratorFunction(annotationType, config, isAsync) {
    if (isAsync === void 0) { isAsync = false; }
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.init(target, parameterIndex, propertyKey, annotationType, config, isAsync);
    };
}

function baseAsyncValidator(configModel, validatorName) {
    return function (control) {
        configModel = configModel || {};
        if (configModel.validatorConfig) {
            if (FormProvider.ProcessRule(control, configModel)) {
                return configModel.validatorConfig.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(resolveConfig(configModel, validatorName, control)));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }
        else
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(resolveConfig(configModel, validatorName, control)(configModel));
    };
}
function resolveConfig(configModel, validatorName, control) {
    return function (config) {
        var configClone = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, configModel, config, { expressionProcessed: true });
        return APP_VALIDATORS[validatorName](configClone)(control);
    };
}

function alpha(config) {
    return baseDecoratorFunction(AnnotationTypes.alpha, config);
}
function alphaAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.alpha, [baseAsyncValidator(config, AnnotationTypes.alpha)], true);
}

function alphaNumeric(config) {
    return baseDecoratorFunction(AnnotationTypes.alphaNumeric, config);
}
function alphaNumericAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.alphaNumeric, [baseAsyncValidator(config, AnnotationTypes.alphaNumeric)], true);
}

function compare(config) {
    return baseDecoratorFunction(AnnotationTypes.compare, config);
}

function contains(config) {
    return baseDecoratorFunction(AnnotationTypes.contains, config);
}
function containsAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.contains, [baseAsyncValidator(config, AnnotationTypes.contains)], true);
}

function creditCard(config) {
    return baseDecoratorFunction(AnnotationTypes.creditCard, config);
}
function creditCardAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.creditCard, [baseAsyncValidator(config, AnnotationTypes.creditCard)], true);
}

function digit(config) {
    return baseDecoratorFunction(AnnotationTypes.digit, config);
}

function email(config) {
    return baseDecoratorFunction(AnnotationTypes.email, config);
}

function hexColor(config) {
    return baseDecoratorFunction(AnnotationTypes.hexColor, config);
}

function lowerCase(config) {
    return baseDecoratorFunction(AnnotationTypes.lowerCase, config);
}

function maxDate(config) {
    return baseDecoratorFunction(AnnotationTypes.maxDate, config);
}
function maxDateAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.maxDate, [baseAsyncValidator(config, AnnotationTypes.maxDate)], true);
}

function maxLength(config) {
    return baseDecoratorFunction(AnnotationTypes.maxLength, config);
}
function maxLengthAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.maxLength, [baseAsyncValidator(config, AnnotationTypes.maxLength)], true);
}

function minDate(config) {
    return baseDecoratorFunction(AnnotationTypes.minDate, config);
}
function minDateAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.minDate, [baseAsyncValidator(config, AnnotationTypes.minDate)], true);
}

function maxNumber(config) {
    return baseDecoratorFunction(AnnotationTypes.maxNumber, config);
}
function maxNumberAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.maxNumber, [baseAsyncValidator(config, AnnotationTypes.maxNumber)], true);
}

function minLength(config) {
    return baseDecoratorFunction(AnnotationTypes.minLength, config);
}
function minLengthAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.minLength, [baseAsyncValidator(config, AnnotationTypes.minLength)], true);
}

function minNumber(config) {
    return baseDecoratorFunction(AnnotationTypes.minNumber, config);
}
function minNumberAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.minNumber, [baseAsyncValidator(config, AnnotationTypes.minNumber)], true);
}

function password(config) {
    return baseDecoratorFunction(AnnotationTypes.password, config);
}
function passwordAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.password, [baseAsyncValidator(config, AnnotationTypes.password)], true);
}

function pattern(config) {
    return baseDecoratorFunction(AnnotationTypes.pattern, config);
}
function patternAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.pattern, [baseAsyncValidator(config, AnnotationTypes.pattern)], true);
}

function propArray(entity, config) {
    return function (target, propertyKey, parameterIndex) {
        var propertyInfo = {
            name: propertyKey,
            propertyType: ARRAY_PROPERTY,
            entity: entity,
            dataPropertyName: config ? config.name : undefined,
            entityProvider: config ? config.entityProvider : undefined,
            arrayConfig: config ? {
                allowMaxIndex: config.allowMaxIndex, messageKey: config.messageKey, createBlank: config.createBlank
            } : undefined
        };
        defaultContainer.addProperty(target.constructor, propertyInfo);
    };
}

function propObject(entity, config) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.initPropertyObject(propertyKey, OBJECT_PROPERTY, entity, target, config);
    };
}

function prop(config) {
    return function (target, propertyKey, parameterIndex) {
        var propertyInfo = {
            name: propertyKey,
            propertyType: PROPERTY,
            dataPropertyName: config ? config.name : undefined,
            defaultValue: config ? config.defaultValue : undefined,
            ignore: config ? config.ignore : undefined,
            isPrimaryKey: config ? config.isPrimaryKey : undefined
        };
        defaultContainer.addProperty(target.constructor, propertyInfo);
    };
}

function range(config) {
    return baseDecoratorFunction(AnnotationTypes.range, config);
}
function rangeAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.range, [baseAsyncValidator(config, AnnotationTypes.range)], true);
}

function required(config) {
    return baseDecoratorFunction(AnnotationTypes.required, config);
}

function upperCase(config) {
    return baseDecoratorFunction(AnnotationTypes.upperCase, config);
}

function time(config) {
    return baseDecoratorFunction(AnnotationTypes.time, config);
}
function timeAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.time, [baseAsyncValidator(config, AnnotationTypes.time)], true);
}

function url(config) {
    return baseDecoratorFunction(AnnotationTypes.url, config);
}
function urlAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.url, [baseAsyncValidator(config, AnnotationTypes.url)], true);
}

function json(config) {
    return baseDecoratorFunction(AnnotationTypes.json, config);
}

function greaterThan(config) {
    return baseDecoratorFunction(AnnotationTypes.greaterThan, config);
}
function greaterThanAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.greaterThan, [baseAsyncValidator(config, AnnotationTypes.greaterThan)], true);
}

function greaterThanEqualTo(config) {
    return baseDecoratorFunction(AnnotationTypes.greaterThanEqualTo, config);
}
function greaterThanEqualToAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.greaterThanEqualTo, [baseAsyncValidator(config, AnnotationTypes.greaterThanEqualTo)], true);
}

function lessThanEqualTo(config) {
    return baseDecoratorFunction(AnnotationTypes.lessThanEqualTo, config);
}
function lessThanEqualToAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.lessThanEqualTo, [baseAsyncValidator(config, AnnotationTypes.lessThanEqualTo)], true);
}

function lessThan(config) {
    return baseDecoratorFunction(AnnotationTypes.lessThan, config);
}
function lessThanAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.lessThan, [baseAsyncValidator(config, AnnotationTypes.lessThan)], true);
}

function choice(config) {
    return baseDecoratorFunction(AnnotationTypes.choice, config);
}
function choiceAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.choice, [baseAsyncValidator(config, AnnotationTypes.choice)], true);
}

function different(config) {
    return baseDecoratorFunction(AnnotationTypes.different, config);
}

function numeric(config) {
    return baseDecoratorFunction(AnnotationTypes.numeric, config);
}
function numericAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.numeric, [baseAsyncValidator(config, AnnotationTypes.numeric)], true);
}

function even(config) {
    return baseDecoratorFunction(AnnotationTypes.even, config);
}

function odd(config) {
    return baseDecoratorFunction(AnnotationTypes.odd, config);
}

function factor(config) {
    return baseDecoratorFunction(AnnotationTypes.factor, config);
}
function factorAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.factor, [baseAsyncValidator(config, AnnotationTypes.factor)], true);
}

function leapYear(config) {
    return baseDecoratorFunction(AnnotationTypes.leapYear, config);
}

function allOf(config) {
    return baseDecoratorFunction(AnnotationTypes.allOf, config);
}
function allOfAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.allOf, [baseAsyncValidator(config, AnnotationTypes.allOf)], true);
}

function oneOf(config) {
    return baseDecoratorFunction(AnnotationTypes.oneOf, config);
}
function oneOfAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.oneOf, [baseAsyncValidator(config, AnnotationTypes.oneOf)], true);
}

function noneOf(config) {
    return baseDecoratorFunction(AnnotationTypes.noneOf, config);
}
function noneOfAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.noneOf, [baseAsyncValidator(config, AnnotationTypes.noneOf)], true);
}

function mac(config) {
    return baseDecoratorFunction(AnnotationTypes.mac, config);
}

function ascii(config) {
    return baseDecoratorFunction(AnnotationTypes.ascii, config);
}

function dataUri(config) {
    return baseDecoratorFunction(AnnotationTypes.dataUri, config);
}

function port(config) {
    return baseDecoratorFunction(AnnotationTypes.port, config);
}

function latLong(config) {
    return baseDecoratorFunction(AnnotationTypes.latLong, config);
}

function extension(config) {
    return baseDecoratorFunction(AnnotationTypes.extension, config);
}
function extensionAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.extension, [baseAsyncValidator(config, AnnotationTypes.extension)], true);
}

function fileSize(config) {
    return baseDecoratorFunction(AnnotationTypes.fileSize, config);
}
function fileSizeAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.fileSize, [baseAsyncValidator(config, AnnotationTypes.fileSize)], true);
}

function endsWith(config) {
    return baseDecoratorFunction(AnnotationTypes.endsWith, config);
}
function endsWithAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.endsWith, [baseAsyncValidator(config, AnnotationTypes.endsWith)], true);
}

function startsWith(config) {
    return baseDecoratorFunction(AnnotationTypes.startsWith, config);
}
function startsWithAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.startsWith, [baseAsyncValidator(config, AnnotationTypes.startsWith)], true);
}

function primeNumber(config) {
    return baseDecoratorFunction(AnnotationTypes.primeNumber, config);
}

function latitude(config) {
    return baseDecoratorFunction(AnnotationTypes.latitude, config);
}

function longitude(config) {
    return baseDecoratorFunction(AnnotationTypes.longitude, config);
}

function rule(config) {
    return baseDecoratorFunction(AnnotationTypes.rule, config);
}

function file(config) {
    return baseDecoratorFunction(AnnotationTypes.file, config);
}
function fileAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.file, [baseAsyncValidator(config, AnnotationTypes.file)], true);
}

function custom(config) {
    return baseDecoratorFunction(AnnotationTypes.custom, config);
}
function customAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.custom, [baseAsyncValidator(config, AnnotationTypes.custom)], true);
}

function unique(config) {
    return baseDecoratorFunction(AnnotationTypes.unique, config);
}

function image(config) {
    return baseDecoratorFunction(AnnotationTypes.image, config);
}
function imageAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.image, [baseAsyncValidator(config, AnnotationTypes.image)], true);
}

function notEmpty(config) {
    return baseDecoratorFunction(AnnotationTypes.notEmpty, config);
}

function async(validators) {
    return baseDecoratorFunction(AnnotationTypes.async, validators, true);
}

function cusip(config) {
    return baseDecoratorFunction(AnnotationTypes.cusip, config);
}

function grid(config) {
    return baseDecoratorFunction(AnnotationTypes.grid, config);
}

function date(config) {
    return baseDecoratorFunction(AnnotationTypes.date, config);
}
function dateAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.date, [baseAsyncValidator(config, AnnotationTypes.date)], true);
}

function disable(config) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.disabled);
    };
}

function error(config) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.error);
    };
}

function and(config) {
    return baseDecoratorFunction(AnnotationTypes.and, config);
}

function or(config) {
    return baseDecoratorFunction(AnnotationTypes.or, config);
}

function not(config) {
    return baseDecoratorFunction(AnnotationTypes.not, config);
}

function trim$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.trim);
    };
}

function ltrim$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.ltrim);
    };
}

function rtrim$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.rtrim);
    };
}

function blacklist$1(chars) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.blacklist, chars);
    };
}

function stripLow$1(keepNewLines) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.stripLow, keepNewLines);
    };
}

function toBoolean$1(strict) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toBoolean, strict);
    };
}

function toDouble$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toDouble);
    };
}

function toFloat$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toFloat);
    };
}

function toInt$1(radix) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toInt, radix);
    };
}

function toString$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.string);
    };
}

function whitelist$1(chars) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.whitelist, chars);
    };
}

function toDate$1(config) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toDate, config);
    };
}

function escape$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.escape);
    };
}

function prefix$1(text) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.prefix, text);
    };
}

function suffix$1(text) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.suffix, text);
    };
}

function model(config) {
    return function (target) {
        defaultContainer.addPropsConfig(target, config);
    };
}

function sanitize$1(config) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.sanitize, config);
    };
}

function elementClass(config) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.elementClass);
    };
}

function minTime(config) {
    return baseDecoratorFunction(AnnotationTypes.minTime, config);
}
function minTimeAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.minTime, [baseAsyncValidator(config, AnnotationTypes.minTime)], true);
}

function maxTime(config) {
    return baseDecoratorFunction(AnnotationTypes.maxTime, config);
}
function maxTimeAsync(config) {
    return baseDecoratorFunction(AnnotationTypes.maxTime, [baseAsyncValidator(config, AnnotationTypes.maxTime)], true);
}

function compose(config) {
    return baseDecoratorFunction(AnnotationTypes.compose, config);
}

function requiredTrue(config) {
    return baseDecoratorFunction(AnnotationTypes.requiredTrue, config);
}

function mask(config) {
    return baseDecoratorFunction(AnnotationTypes.mask, config);
}

function baseValidator(config, type, validator) {
    var rxwebValidator = function (control, target) {
        if (typeof control == STRING)
            defaultContainer.init(target, 0, control, type, config, false);
        else {
            if (config && (!control.validatorConfig || !control.validatorConfig[type]))
                ApplicationUtil.configureControl(control, config, type);
            return validator(control);
        }
        return null;
    };
    Object.defineProperty(rxwebValidator, "name", { value: RX_WEB_VALIDATOR });
    return rxwebValidator;
}
function baseAsyncValidatorExtension(config, type, validator) {
    var rxwebValidator = function (control, target) {
        if (typeof control == STRING)
            defaultContainer.init(target, 0, control, type, config, true);
        else {
            if (config && (!control.validatorConfig || !control.validatorConfig[type]))
                ApplicationUtil.configureControl(control, config, type);
            return validator(control);
        }
        return null;
    };
    Object.defineProperty(rxwebValidator, "name", { value: RX_WEB_VALIDATOR });
    return rxwebValidator;
}

function alphaValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.alpha, alphaValidator(config));
}
function alphaAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.alpha, baseAsyncValidator(config, AnnotationTypes.alpha));
}

function allOfValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.allOf, allOfValidator(config));
}
function allOfAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.allOf, baseAsyncValidator(config, AnnotationTypes.allOf));
}

function alphaNumericValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.alphaNumeric, alphaNumericValidator(config));
}
function alphaNumericAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.alphaNumeric, baseAsyncValidator(config, AnnotationTypes.alphaNumeric));
}

function choiceValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.choice, choiceValidator(config));
}
function choiceAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.choice, baseAsyncValidator(config, AnnotationTypes.choice));
}

function compareValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.compare, compareValidator(config));
}

function containsValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.contains, containsValidator(config));
}
function containsAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.contains, baseAsyncValidator(config, AnnotationTypes.contains));
}

function creditCardValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.creditCard, creditCardValidator(config));
}
function creditCardAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.creditCard, baseAsyncValidator(config, AnnotationTypes.creditCard));
}

function differentValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.different, differentValidator(config));
}

function digitValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.digit, digitValidator(config));
}

function emailValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.email, emailValidator(config));
}

function evenValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.even, evenValidator(config));
}

function factorValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.factor, factorValidator(config));
}
function factorAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.factor, baseAsyncValidator(config, AnnotationTypes.factor));
}

function greaterThanEqualToValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.greaterThanEqualTo, greaterThanEqualToValidator(config));
}
function greaterThanEqualToAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.greaterThanEqualTo, baseAsyncValidator(config, AnnotationTypes.greaterThanEqualTo));
}

function greaterThanValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.greaterThan, greaterThanValidator(config));
}
function greaterThanAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.greaterThan, baseAsyncValidator(config, AnnotationTypes.greaterThan));
}

function hexColorValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.hexColor, hexColorValidator(config));
}

function jsonValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.json, jsonValidator(config));
}

function leapYearValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.leapYear, leapYearValidator(config));
}

function lessThanEqualToValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.lessThanEqualTo, lessThanEqualToValidator(config));
}
function lessThanEqualToAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.lessThanEqualTo, baseAsyncValidator(config, AnnotationTypes.lessThanEqualTo));
}

function lessThanValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.lessThan, lessThanValidator(config));
}
function lessThanAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.lessThan, baseAsyncValidator(config, AnnotationTypes.lessThan));
}

function lowerCaseValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.lowerCase, lowercaseValidator(config));
}

function macValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.mac, macValidator(config));
}

function maxDateValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.maxDate, maxDateValidator(config));
}
function maxDateAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.maxDate, baseAsyncValidator(config, AnnotationTypes.maxDate));
}

function maxLengthValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.maxLength, maxLengthValidator(config));
}
function maxLengthAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.maxLength, baseAsyncValidator(config, AnnotationTypes.maxLength));
}

function maxNumberValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.maxNumber, maxNumberValidator(config));
}
function maxNumberAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.maxNumber, baseAsyncValidator(config, AnnotationTypes.maxNumber));
}

function minDateValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.minDate, minDateValidator(config));
}
function minDateAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.minDate, baseAsyncValidator(config, AnnotationTypes.minDate));
}

function minLengthValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.minLength, minLengthValidator(config));
}
function minLengthAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.minLength, baseAsyncValidator(config, AnnotationTypes.minLength));
}

function minNumberValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.minNumber, minNumberValidator(config));
}
function minNumberAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.minNumber, baseAsyncValidator(config, AnnotationTypes.minNumber));
}

function noneOfValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.noneOf, noneOfValidator(config));
}
function noneOfAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.noneOf, baseAsyncValidator(config, AnnotationTypes.noneOf));
}

function numericValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.numeric, numericValidator(config));
}
function numericAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.numeric, baseAsyncValidator(config, AnnotationTypes.numeric));
}

function oddValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.odd, oddValidator(config));
}

function oneOfValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.oneOf, oneOfValidator(config));
}
function oneOfAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.oneOf, baseAsyncValidator(config, AnnotationTypes.oneOf));
}

function passwordcValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.password, passwordValidator(config));
}
function passwordAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.password, baseAsyncValidator(config, AnnotationTypes.password));
}

function patternValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.pattern, patternValidator(config));
}
function patternAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.pattern, baseAsyncValidator(config, AnnotationTypes.pattern));
}

function rangeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.range, rangeValidator(config));
}
function rangeAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.range, baseAsyncValidator(config, AnnotationTypes.range));
}

function requiredValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.required, requiredValidator(config));
}

function timeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.time, timeValidator(config));
}
function timeAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.time, baseAsyncValidator(config, AnnotationTypes.time));
}

function upperCaseValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.upperCase, uppercaseValidator(config));
}

function urlValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.url, urlValidator(config));
}
function urlAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.url, baseAsyncValidator(config, AnnotationTypes.url));
}

function asciiValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.ascii, asciiValidator(config));
}

function dataUriValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.dataUri, dataUriValidator(config));
}

function portValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.port, portValidator(config));
}

function latLongValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.latLong, latLongValidator(config));
}

function extensionValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.extension, function (control) { return null; });
}
function extensionAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.extension, baseAsyncValidator(config, AnnotationTypes.extension));
}

function fileSizeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.fileSize, function (control) { return null; });
}
function fileSizeAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.fileSize, baseAsyncValidator(config, AnnotationTypes.fileSize));
}

function endsWithValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.endsWith, endsWithValidator(config));
}
function endsWithAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.endsWith, baseAsyncValidator(config, AnnotationTypes.endsWith));
}

function startsWithValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.startsWithWith, startsWithValidator(config));
}
function startsWithAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.startsWithWith, baseAsyncValidator(config, AnnotationTypes.startsWithWith));
}

function primeNumberValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.primeNumber, primeNumberValidator(config));
}

function latitudeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.latitude, latitudeValidator(config));
}

function longitudeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.longitude, longitudeValidator(config));
}

function composeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.compose, composeValidator(config));
}

function fileValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.file, function (control) { return null; });
}
function fileAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.file, baseAsyncValidator(config, AnnotationTypes.file));
}

function customValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.custom, customValidator(config));
}
function customAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.custom, baseAsyncValidator(config, AnnotationTypes.custom));
}

function uniqueValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.unique, uniqueValidator(config));
}

function imageValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.image, function (control) { return null; });
}
function imageAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.image, baseAsyncValidator(config, AnnotationTypes.image));
}

function notEmptyValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.notEmpty, notEmptyValidator(config));
}

function ipValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.ip, ipValidator(config));
}
function ipAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.ip, baseAsyncValidator(config, AnnotationTypes.ip));
}

function cusipValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.cusip, cusipValidator(config));
}

function gridValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.grid, gridValidator(config));
}

function dateValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.date, dateValidator(config));
}
function dateAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.date, baseAsyncValidator(config, AnnotationTypes.date));
}

function andValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.and, andValidator(config));
}

function orValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.or, orValidator(config));
}

function notValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.not, notValidator(config));
}

function minTimeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.minTime, minTimeValidator(config));
}
function minTimeAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.minTime, baseAsyncValidator(config, AnnotationTypes.minTime));
}

function maxTimeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.maxTime, maxTimeValidator(config));
}
function maxTimeAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.maxTime, baseAsyncValidator(config, AnnotationTypes.maxTime));
}

function requiredTrueValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.requiredTrue, requiredTrueValidator(config));
}

function maskValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.mask, maskValidator(config));
}

function ibanValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.iban, ibanValidator(config));
}
function ibanAsyncValidatorExtension(config) {
    return baseAsyncValidatorExtension(config, AnnotationTypes.iban, baseAsyncValidator(config, AnnotationTypes.iban));
}

var RxwebValidators = /** @class */ (function () {
    function RxwebValidators() {
    }
    RxwebValidators.alpha = alphaValidatorExtension;
    RxwebValidators.allOf = allOfValidatorExtension;
    RxwebValidators.alphaNumeric = alphaNumericValidatorExtension;
    RxwebValidators.choice = choiceValidatorExtension;
    RxwebValidators.compare = compareValidatorExtension;
    RxwebValidators.contains = containsValidatorExtension;
    RxwebValidators.creditCard = creditCardValidatorExtension;
    RxwebValidators.different = differentValidatorExtension;
    RxwebValidators.digit = digitValidatorExtension;
    RxwebValidators.email = emailValidatorExtension;
    RxwebValidators.even = evenValidatorExtension;
    RxwebValidators.factor = factorValidatorExtension;
    RxwebValidators.greaterThanEqualTo = greaterThanEqualToValidatorExtension;
    RxwebValidators.greaterThan = greaterThanValidatorExtension;
    RxwebValidators.hexColor = hexColorValidatorExtension;
    RxwebValidators.json = jsonValidatorExtension;
    RxwebValidators.leapYear = leapYearValidatorExtension;
    RxwebValidators.lessThanEqualTo = lessThanEqualToValidatorExtension;
    RxwebValidators.lessThan = lessThanValidatorExtension;
    RxwebValidators.lowerCase = lowerCaseValidatorExtension;
    RxwebValidators.mac = macValidatorExtension;
    RxwebValidators.maxDate = maxDateValidatorExtension;
    RxwebValidators.maxLength = maxLengthValidatorExtension;
    RxwebValidators.maxNumber = maxNumberValidatorExtension;
    RxwebValidators.minDate = minDateValidatorExtension;
    RxwebValidators.minLength = minLengthValidatorExtension;
    RxwebValidators.minNumber = minNumberValidatorExtension;
    RxwebValidators.noneOf = noneOfValidatorExtension;
    RxwebValidators.numeric = numericValidatorExtension;
    RxwebValidators.odd = oddValidatorExtension;
    RxwebValidators.oneOf = oneOfValidatorExtension;
    RxwebValidators.password = passwordcValidatorExtension;
    RxwebValidators.pattern = patternValidatorExtension;
    RxwebValidators.range = rangeValidatorExtension;
    RxwebValidators.required = requiredValidatorExtension;
    RxwebValidators.time = timeValidatorExtension;
    RxwebValidators.upperCase = upperCaseValidatorExtension;
    RxwebValidators.url = urlValidatorExtension;
    RxwebValidators.ascii = asciiValidatorExtension;
    RxwebValidators.dataUri = dataUriValidatorExtension;
    RxwebValidators.port = portValidatorExtension;
    RxwebValidators.latLong = latLongValidatorExtension;
    RxwebValidators.extension = extensionValidatorExtension;
    RxwebValidators.fileSize = fileSizeValidatorExtension;
    RxwebValidators.endsWith = endsWithValidatorExtension;
    RxwebValidators.startsWith = startsWithValidatorExtension;
    RxwebValidators.primeNumber = primeNumberValidatorExtension;
    RxwebValidators.latitude = latitudeValidatorExtension;
    RxwebValidators.longitude = longitudeValidatorExtension;
    RxwebValidators.compose = composeValidatorExtension;
    RxwebValidators.file = fileValidatorExtension;
    RxwebValidators.custom = customValidatorExtension;
    RxwebValidators.unique = uniqueValidatorExtension;
    RxwebValidators.image = imageValidatorExtension;
    RxwebValidators.notEmpty = notEmptyValidatorExtension;
    RxwebValidators.ip = ipValidatorExtension;
    RxwebValidators.cusip = cusipValidatorExtension;
    RxwebValidators.grid = gridValidatorExtension;
    RxwebValidators.date = dateValidatorExtension;
    RxwebValidators.and = andValidatorExtension;
    RxwebValidators.or = orValidatorExtension;
    RxwebValidators.not = notValidatorExtension;
    RxwebValidators.minTime = minTimeValidatorExtension;
    RxwebValidators.maxTime = maxTimeValidatorExtension;
    RxwebValidators.requiredTrue = requiredTrueValidatorExtension;
    RxwebValidators.mask = maskValidatorExtension;
    RxwebValidators.iban = ibanValidatorExtension;
    RxwebValidators.alphaAsync = alphaAsyncValidatorExtension;
    RxwebValidators.alphaNumericAsync = alphaNumericAsyncValidatorExtension;
    RxwebValidators.allOfAsync = allOfAsyncValidatorExtension;
    RxwebValidators.choiceAsync = choiceAsyncValidatorExtension;
    RxwebValidators.containsAsync = containsAsyncValidatorExtension;
    RxwebValidators.creditCardAsync = creditCardAsyncValidatorExtension;
    RxwebValidators.customAsync = customAsyncValidatorExtension;
    RxwebValidators.dateAsync = dateAsyncValidatorExtension;
    RxwebValidators.endsWithAsync = endsWithAsyncValidatorExtension;
    RxwebValidators.extensionAsync = extensionAsyncValidatorExtension;
    RxwebValidators.factorAsync = factorAsyncValidatorExtension;
    RxwebValidators.fileSizeAsync = fileSizeAsyncValidatorExtension;
    RxwebValidators.fileAsync = fileAsyncValidatorExtension;
    RxwebValidators.greaterThanEqualToAsync = greaterThanEqualToAsyncValidatorExtension;
    RxwebValidators.greaterThanAsync = greaterThanAsyncValidatorExtension;
    RxwebValidators.imageAsync = imageAsyncValidatorExtension;
    RxwebValidators.ipAsync = ipAsyncValidatorExtension;
    RxwebValidators.lessThanEqualToAsync = lessThanEqualToAsyncValidatorExtension;
    RxwebValidators.lessThanAsync = lessThanAsyncValidatorExtension;
    RxwebValidators.maxDateAsync = maxDateAsyncValidatorExtension;
    RxwebValidators.maxLengthAsync = maxLengthAsyncValidatorExtension;
    RxwebValidators.maxNumberAsync = maxNumberAsyncValidatorExtension;
    RxwebValidators.maxTimeAsync = maxTimeAsyncValidatorExtension;
    RxwebValidators.minDateAsync = minDateAsyncValidatorExtension;
    RxwebValidators.minLengthAsync = minLengthAsyncValidatorExtension;
    RxwebValidators.minNumberAsync = minNumberAsyncValidatorExtension;
    RxwebValidators.minTimeAsync = minTimeAsyncValidatorExtension;
    RxwebValidators.noneOfAsync = noneOfAsyncValidatorExtension;
    RxwebValidators.numericAsync = numericAsyncValidatorExtension;
    RxwebValidators.oneOfAsync = oneOfAsyncValidatorExtension;
    RxwebValidators.passwordAsync = passwordAsyncValidatorExtension;
    RxwebValidators.patternAsync = patternAsyncValidatorExtension;
    RxwebValidators.rangeAsync = rangeAsyncValidatorExtension;
    RxwebValidators.startsWithAsync = startsWithAsyncValidatorExtension;
    RxwebValidators.timeAsync = timeAsyncValidatorExtension;
    RxwebValidators.urlAsync = urlAsyncValidatorExtension;
    RxwebValidators.ibanAsync = ibanAsyncValidatorExtension;
    return RxwebValidators;
}());

var IAbstractControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IAbstractControl, _super);
    function IAbstractControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IAbstractControl;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["AbstractControl"]));

var TypedForm = /** @class */ (function () {
    function TypedForm() {
    }
    return TypedForm;
}());


//# sourceMappingURL=rxweb-reactive-form-validators.js.map


/***/ })

}]);
//# sourceMappingURL=default~views-customer-user-customer-user-module~views-inventory-management-inventory-management-mod~36be68b6.js.map