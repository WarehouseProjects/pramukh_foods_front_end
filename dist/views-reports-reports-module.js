(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-reports-reports-module"],{

/***/ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js ***!
  \*****************************************************************************/
/*! exports provided: InfiniteScrollDirective, InfiniteScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function() { return InfiniteScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollModule", function() { return InfiniteScrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



/**
 * @fileoverview added by tsickle
 * Generated from: src/services/ngx-ins-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} selector
 * @param {?} scrollWindow
 * @param {?} defaultElement
 * @param {?} fromRoot
 * @return {?}
 */
function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
    /** @type {?} */
    var hasWindow = window && !!window.document && window.document.documentElement;
    /** @type {?} */
    var container = hasWindow && scrollWindow ? window : defaultElement;
    if (selector) {
        /** @type {?} */
        var containerIsString = selector && hasWindow && typeof selector === 'string';
        container = containerIsString
            ? findElement(selector, defaultElement.nativeElement, fromRoot)
            : selector;
        if (!container) {
            throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
        }
    }
    return container;
}
/**
 * @param {?} selector
 * @param {?} customRoot
 * @param {?} fromRoot
 * @return {?}
 */
function findElement(selector, customRoot, fromRoot) {
    /** @type {?} */
    var rootEl = fromRoot ? window.document : customRoot;
    return rootEl.querySelector(selector);
}
/**
 * @param {?} prop
 * @return {?}
 */
function inputPropChanged(prop) {
    return prop && !prop.firstChange;
}
/**
 * @return {?}
 */
function hasWindowDefined() {
    return typeof window !== 'undefined';
}
/**
 * @fileoverview added by tsickle
 * Generated from: src/services/axis-resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var VerticalProps = {
    clientHeight: "clientHeight",
    offsetHeight: "offsetHeight",
    scrollHeight: "scrollHeight",
    pageYOffset: "pageYOffset",
    offsetTop: "offsetTop",
    scrollTop: "scrollTop",
    top: "top"
};
/** @type {?} */
var HorizontalProps = {
    clientHeight: "clientWidth",
    offsetHeight: "offsetWidth",
    scrollHeight: "scrollWidth",
    pageYOffset: "pageXOffset",
    offsetTop: "offsetLeft",
    scrollTop: "scrollLeft",
    top: "left"
};
var AxisResolver = /** @class */ (function () {
    /**
     * @param {?=} vertical
     */
    function AxisResolver(vertical) {
        if (vertical === void 0) { vertical = true; }
        this.vertical = vertical;
        this.propsMap = vertical ? VerticalProps : HorizontalProps;
    }
    /**
     * @return {?}
     */
    AxisResolver.prototype.clientHeightKey = function () {
        return this.propsMap.clientHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.offsetHeightKey = function () {
        return this.propsMap.offsetHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.scrollHeightKey = function () {
        return this.propsMap.scrollHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.pageYOffsetKey = function () {
        return this.propsMap.pageYOffset;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.offsetTopKey = function () {
        return this.propsMap.offsetTop;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.scrollTopKey = function () {
        return this.propsMap.scrollTop;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.topKey = function () {
        return this.propsMap.top;
    };
    return AxisResolver;
}());
/**
 * @fileoverview added by tsickle
 * Generated from: src/services/event-trigger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @param {?} alwaysCallback
 * @param {?} shouldFireScrollEvent
 * @param {?} isTriggeredCurrentTotal
 * @return {?}
 */
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
    if (alwaysCallback && shouldFireScrollEvent) {
        return true;
    }
    if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
        return true;
    }
    return false;
}
/**
 * @fileoverview added by tsickle
 * Generated from: src/services/position-resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} __0
 * @return {?}
 */
function createResolver(_a) {
    var windowElement = _a.windowElement, axis = _a.axis;
    return createResolverWithContainer({ axis: axis, isWindow: isElementWindow(windowElement) }, windowElement);
}
/**
 * @param {?} resolver
 * @param {?} windowElement
 * @return {?}
 */
function createResolverWithContainer(resolver, windowElement) {
    /** @type {?} */
    var container = resolver.isWindow || (windowElement && !windowElement.nativeElement)
        ? windowElement
        : windowElement.nativeElement;
    return Object.assign(Object.assign({}, resolver), { container: container });
}
/**
 * @param {?} windowElement
 * @return {?}
 */
function isElementWindow(windowElement) {
    /** @type {?} */
    var isWindow = ['Window', 'global'].some(( /**
     * @param {?} obj
     * @return {?}
     */function (obj) { return Object.prototype.toString.call(windowElement).includes(obj); }));
    return isWindow;
}
/**
 * @param {?} isContainerWindow
 * @param {?} windowElement
 * @return {?}
 */
function getDocumentElement(isContainerWindow, windowElement) {
    return isContainerWindow ? windowElement.document.documentElement : null;
}
/**
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePoints(element, resolver) {
    /** @type {?} */
    var height = extractHeightForElement(resolver);
    return resolver.isWindow
        ? calculatePointsForWindow(height, element, resolver)
        : calculatePointsForElement(height, element, resolver);
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForWindow(height, element, resolver) {
    var axis = resolver.axis, container = resolver.container, isWindow = resolver.isWindow;
    var _a = extractHeightPropKeys(axis), offsetHeightKey = _a.offsetHeightKey, clientHeightKey = _a.clientHeightKey;
    // scrolled until now / current y point
    /** @type {?} */
    var scrolled = height +
        getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
    // total height / most bottom y point
    /** @type {?} */
    var nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
    /** @type {?} */
    var totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) +
        nativeElementHeight;
    return { height: height, scrolled: scrolled, totalToScroll: totalToScroll, isWindow: isWindow };
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForElement(height, element, resolver) {
    var axis = resolver.axis, container = resolver.container;
    // perhaps use container.offsetTop instead of 'scrollTop'
    /** @type {?} */
    var scrolled = container[axis.scrollTopKey()];
    /** @type {?} */
    var totalToScroll = container[axis.scrollHeightKey()];
    return { height: height, scrolled: scrolled, totalToScroll: totalToScroll, isWindow: false };
}
/**
 * @param {?} axis
 * @return {?}
 */
function extractHeightPropKeys(axis) {
    return {
        offsetHeightKey: axis.offsetHeightKey(),
        clientHeightKey: axis.clientHeightKey()
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
function extractHeightForElement(_a) {
    var container = _a.container, isWindow = _a.isWindow, axis = _a.axis;
    var _b = extractHeightPropKeys(axis), offsetHeightKey = _b.offsetHeightKey, clientHeightKey = _b.clientHeightKey;
    return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
/**
 * @param {?} elem
 * @param {?} isWindow
 * @param {?} offsetHeightKey
 * @param {?} clientHeightKey
 * @return {?}
 */
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
    if (isNaN(elem[offsetHeightKey])) {
        /** @type {?} */
        var docElem = getDocumentElement(isWindow, elem);
        return docElem ? docElem[clientHeightKey] : 0;
    }
    else {
        return elem[offsetHeightKey];
    }
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementOffsetTop(elem, axis, isWindow) {
    /** @type {?} */
    var topKey = axis.topKey();
    // elem = elem.nativeElement;
    if (!elem.getBoundingClientRect) {
        // || elem.css('none')) {
        return;
    }
    return (elem.getBoundingClientRect()[topKey] +
        getElementPageYOffset(elem, axis, isWindow));
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementPageYOffset(elem, axis, isWindow) {
    /** @type {?} */
    var pageYOffset = axis.pageYOffsetKey();
    /** @type {?} */
    var scrollTop = axis.scrollTopKey();
    /** @type {?} */
    var offsetTop = axis.offsetTopKey();
    if (isNaN(window.pageYOffset)) {
        return getDocumentElement(isWindow, elem)[scrollTop];
    }
    else if (elem.ownerDocument) {
        return elem.ownerDocument.defaultView[pageYOffset];
    }
    else {
        return elem[offsetTop];
    }
}
/**
 * @fileoverview added by tsickle
 * Generated from: src/services/scroll-resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} container
 * @param {?} distance
 * @param {?} scrollingDown
 * @return {?}
 */
function shouldFireScrollEvent(container, distance, scrollingDown) {
    /** @type {?} */
    var remaining;
    /** @type {?} */
    var containerBreakpoint;
    if (container.totalToScroll <= 0) {
        return false;
    }
    /** @type {?} */
    var scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;
    if (scrollingDown) {
        remaining =
            (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
        containerBreakpoint = distance.down / 10;
    }
    else {
        /** @type {?} */
        var totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
        remaining = container.scrolled / totalHiddenContentHeight;
        containerBreakpoint = distance.up / 10;
    }
    /** @type {?} */
    var shouldFireEvent = remaining <= containerBreakpoint;
    return shouldFireEvent;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @return {?}
 */
function isScrollingDownwards(lastScrollPosition, container) {
    return lastScrollPosition < container.scrolled;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @param {?} distance
 * @return {?}
 */
function getScrollStats(lastScrollPosition, container, distance) {
    /** @type {?} */
    var scrollDown = isScrollingDownwards(lastScrollPosition, container);
    return {
        fire: shouldFireScrollEvent(container, distance, scrollDown),
        scrollDown: scrollDown
    };
}
/**
 * @param {?} position
 * @param {?} scrollState
 * @return {?}
 */
/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @return {?}
 */
/**
 * @param {?} scrollState
 * @return {?}
 */
/**
 * @param {?} scroll
 * @param {?} scrollState
 * @param {?} triggered
 * @param {?} isScrollingDown
 * @return {?}
 */
/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @param {?} isScrollingDown
 * @return {?}
 */
/**
 * @param {?} scrollState
 * @param {?} scrolledUntilNow
 * @param {?} totalToScroll
 * @return {?}
 */
/**
 * @fileoverview added by tsickle
 * Generated from: src/services/scroll-state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollState = /** @class */ (function () {
    /**
     * @param {?} __0
     */
    function ScrollState(_a) {
        var totalToScroll = _a.totalToScroll;
        this.lastScrollPosition = 0;
        this.lastTotalToScroll = 0;
        this.totalToScroll = 0;
        this.triggered = {
            down: 0,
            up: 0
        };
        this.totalToScroll = totalToScroll;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    ScrollState.prototype.updateScrollPosition = function (position) {
        return (this.lastScrollPosition = position);
    };
    /**
     * @param {?} totalToScroll
     * @return {?}
     */
    ScrollState.prototype.updateTotalToScroll = function (totalToScroll) {
        if (this.lastTotalToScroll !== totalToScroll) {
            this.lastTotalToScroll = this.totalToScroll;
            this.totalToScroll = totalToScroll;
        }
    };
    /**
     * @param {?} scrolledUntilNow
     * @param {?} totalToScroll
     * @return {?}
     */
    ScrollState.prototype.updateScroll = function (scrolledUntilNow, totalToScroll) {
        this.updateScrollPosition(scrolledUntilNow);
        this.updateTotalToScroll(totalToScroll);
    };
    /**
     * @param {?} scroll
     * @param {?} isScrollingDown
     * @return {?}
     */
    ScrollState.prototype.updateTriggeredFlag = function (scroll, isScrollingDown) {
        if (isScrollingDown) {
            this.triggered.down = scroll;
        }
        else {
            this.triggered.up = scroll;
        }
    };
    /**
     * @param {?} totalToScroll
     * @param {?} isScrollingDown
     * @return {?}
     */
    ScrollState.prototype.isTriggeredScroll = function (totalToScroll, isScrollingDown) {
        return isScrollingDown
            ? this.triggered.down === totalToScroll
            : this.triggered.up === totalToScroll;
    };
    return ScrollState;
}());
/**
 * @fileoverview added by tsickle
 * Generated from: src/services/scroll-register.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function createScroller(config) {
    var scrollContainer = config.scrollContainer, scrollWindow = config.scrollWindow, element = config.element, fromRoot = config.fromRoot;
    /** @type {?} */
    var resolver = createResolver({
        axis: new AxisResolver(!config.horizontal),
        windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
    });
    /** @type {?} */
    var scrollState = new ScrollState({
        totalToScroll: calculatePoints(element, resolver)
    });
    /** @type {?} */
    var options = {
        container: resolver.container,
        throttle: config.throttle
    };
    /** @type {?} */
    var distance = {
        up: config.upDistance,
        down: config.downDistance
    };
    return attachScrollEvent(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(( /**
     * @return {?}
     */function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(calculatePoints(element, resolver)); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(( /**
     * @param {?} positionStats
     * @return {?}
     */function (positionStats) { return toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(( /**
     * @param {?} __0
     * @return {?}
     */function (_a) {
        var stats = _a.stats;
        return scrollState.updateScroll(stats.scrolled, stats.totalToScroll);
    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(( /**
     * @param {?} __0
     * @return {?}
     */function (_a) {
        var fire = _a.fire, scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
        return shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown));
    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(( /**
     * @param {?} __0
     * @return {?}
     */function (_a) {
        var scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
        scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(toInfiniteScrollAction));
}
/**
 * @param {?} options
 * @return {?}
 */
function attachScrollEvent(options) {
    /** @type {?} */
    var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(options.container, 'scroll');
    // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
    // Let's avoid calling the function unless needed.
    // Replacing with throttleTime seems to solve the problem
    // See https://github.com/orizens/ngx-infinite-scroll/issues/198
    if (options.throttle) {
        obs = obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(options.throttle));
    }
    return obs;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} stats
 * @param {?} distance
 * @return {?}
 */
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
    var _a = getScrollStats(lastScrollPosition, stats, distance), scrollDown = _a.scrollDown, fire = _a.fire;
    return {
        scrollDown: scrollDown,
        fire: fire,
        stats: stats
    };
}
/** @type {?} */
var InfiniteScrollActions = {
    DOWN: '[NGX_ISE] DOWN',
    UP: '[NGX_ISE] UP'
};
/**
 * @param {?} response
 * @return {?}
 */
function toInfiniteScrollAction(response) {
    var scrollDown = response.scrollDown, currentScrollPosition = response.stats.scrolled;
    return {
        type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
        payload: {
            currentScrollPosition: currentScrollPosition
        }
    };
}
/**
 * @fileoverview added by tsickle
 * Generated from: src/modules/infinite-scroll.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfiniteScrollDirective = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} zone
     */
    function InfiniteScrollDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1.5;
        this.infiniteScrollThrottle = 150;
        this.infiniteScrollDisabled = false;
        this.infiniteScrollContainer = null;
        this.scrollWindow = true;
        this.immediateCheck = false;
        this.horizontal = false;
        this.alwaysCallback = false;
        this.fromRoot = false;
    }
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngAfterViewInit = function () {
        if (!this.infiniteScrollDisabled) {
            this.setup();
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnChanges = function (_a) {
        var infiniteScrollContainer = _a.infiniteScrollContainer, infiniteScrollDisabled = _a.infiniteScrollDisabled, infiniteScrollDistance = _a.infiniteScrollDistance;
        /** @type {?} */
        var containerChanged = inputPropChanged(infiniteScrollContainer);
        /** @type {?} */
        var disabledChanged = inputPropChanged(infiniteScrollDisabled);
        /** @type {?} */
        var distanceChanged = inputPropChanged(infiniteScrollDistance);
        /** @type {?} */
        var shouldSetup = (!disabledChanged && !this.infiniteScrollDisabled) ||
            (disabledChanged && !infiniteScrollDisabled.currentValue) || distanceChanged;
        if (containerChanged || disabledChanged || distanceChanged) {
            this.destroyScroller();
            if (shouldSetup) {
                this.setup();
            }
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.setup = function () {
        var _this = this;
        if (hasWindowDefined()) {
            this.zone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                _this.disposeScroller = createScroller({
                    fromRoot: _this.fromRoot,
                    alwaysCallback: _this.alwaysCallback,
                    disable: _this.infiniteScrollDisabled,
                    downDistance: _this.infiniteScrollDistance,
                    element: _this.element,
                    horizontal: _this.horizontal,
                    scrollContainer: _this.infiniteScrollContainer,
                    scrollWindow: _this.scrollWindow,
                    throttle: _this.infiniteScrollThrottle,
                    upDistance: _this.infiniteScrollUpDistance
                }).subscribe(( /**
                 * @param {?} payload
                 * @return {?}
                 */function (payload) { return _this.zone.run(( /**
                 * @return {?}
                 */function () { return _this.handleOnScroll(payload); })); }));
            }));
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    InfiniteScrollDirective.prototype.handleOnScroll = function (_a) {
        var type = _a.type, payload = _a.payload;
        switch (type) {
            case InfiniteScrollActions.DOWN:
                return this.scrolled.emit(payload);
            case InfiniteScrollActions.UP:
                return this.scrolledUp.emit(payload);
            default:
                return;
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnDestroy = function () {
        this.destroyScroller();
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.destroyScroller = function () {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    };
    return InfiniteScrollDirective;
}());
InfiniteScrollDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
            },] }
];
/** @nocollapse */
InfiniteScrollDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
]; };
InfiniteScrollDirective.propDecorators = {
    scrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scrolledUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    infiniteScrollDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollUpDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollThrottle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    immediateCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    alwaysCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fromRoot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * @fileoverview added by tsickle
 * Generated from: src/modules/ngx-infinite-scroll.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfiniteScrollModule = /** @class */ (function () {
    function InfiniteScrollModule() {
    }
    return InfiniteScrollModule;
}());
InfiniteScrollModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [InfiniteScrollDirective],
                exports: [InfiniteScrollDirective],
                imports: [],
                providers: []
            },] }
];
/**
 * @fileoverview added by tsickle
 * Generated from: src/ngx-infinite-scroll.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-library-starter
 */
/**
 * Entry point for all public APIs of the package.
 */
/**
 * @fileoverview added by tsickle
 * Generated from: ngx-infinite-scroll.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-infinite-scroll.es5.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/adjusted-quantity-report/adjusted-quantity-report.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/adjusted-quantity-report/adjusted-quantity-report.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <!-- <div class=\"card-header\">Adjusted Quantity Report</div> -->\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Adjusted Quantity Report\n          <div class=\"dropdown pull-right\">\n            <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\">\n              <i class=\"fa fa-file-export mr-2\"></i>\n              Export\n            </button>\n            <div id=\"myDropdown\" class=\"dropdown-content\">\n              <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\"\n                style=\"font-size: small; text-decoration: none;\">\n                Export to XLSX\n              </a>\n              <!-- <a href=\"javascript:void(0)\"\n                                (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n              <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body p-4\">\n          <form class=\"row justify-content-start align-items-center mb-2\">\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>From Date</label>\n                <input type=\"text\" placeholder=\"From Date\" class=\"form-control\" [(ngModel)]=\"selectedFromDate\"\n                  [ngModelOptions]=\"{standalone: true}\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>To Date</label>\n                <input type=\"text\" placeholder=\"To Date\" class=\"form-control\" [(ngModel)]=\"selectedToDate\"\n                  [ngModelOptions]=\"{standalone: true}\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label>Product Name</label>\n                <select [(ngModel)]=\"selectedProduct\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                  <option value=\"\">Select Product Name</option>\n                  <option *ngFor=\"let product of productDropdownData\" [value]=\"product.id\">\n                    {{product.name}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-sm-12 pt-2\">\n              <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\" type=\"button\">Filter</button>\n            </div>\n          </form>\n          <!-- <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n                        <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                            type=\"button\"><i class=\"fa fa-file-export mr-2\n                        \"></i>Export</button>\n                        <div id=\"myDropdown\" class=\"dropdown-content\">\n                            <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a>\n                            <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a>\n                            <a href=\"javascript:void(0)\" (click)=\"commonService.exportPDF(false, 0, 'adjustedQuanityReportList')\">Export to PDF</a>\n                        </div>\n                    </div> -->\n          <!-- <perfect-scrollbar>\n            <div class=\"responsive-table rounded mb-4\"> -->\n          <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" style=\"width: 100%;\"\n            class=\"data row-border hover table order-table border\" id=\"excel-table\">\n            <thead>\n              <tr>\n                <th>Item Number</th>\n                <th style=\"min-width: 100px;\">Name</th>\n                <th>Quantity On <br> Hand</th>\n                <th>Adjusted Quantity <br> On Date </th>\n                <th>Initial Product <br> Selling Price</th>\n                <th>Adjusted Product <br> Selling Price</th>\n                <th>Initial Product <br> Purchase Price</th>\n                <th>Adjusted Product <br> Purchase Price</th>\n                <th>Average <br> Selling Price</th>\n                <th>Average <br> Purchase Price</th>\n                <th id=\"last-header\">Notes</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let report of reportList;let i = index;\">\n                <td>{{report.product_item_no || \"-\"}}</td>\n                <td>{{report.name || \"-\"}}</td>\n                <td><span class=\"w-100 d-inline-block\">{{report.initial_quanity_date ?\n                    (report.initial_quanity_date.split(\" \")[0]) :\n                    \"\"}}</span><br><span>{{report.initial_quanity_date ?\n                    (report.initial_quanity_date.split(\" \")[1] | date: 'MM-dd-yyyy') :\n                    \"-\"}}</span></td>\n                <td><span class=\"w-100 d-inline-block\">{{report.adjust_quanity_date ?\n                    report.adjust_quanity_date.split(\" \")[0] :\n                    \"\"}}</span><br><span>{{report.adjust_quanity_date ?\n                    (report.adjust_quanity_date.split(\" \")[1] | date: 'MM-dd-yyyy') :\n                    \"-\"}}</span></td>\n                <td>{{report.initial_product_selling ? (\"$\"+(report.initial_product_selling |\n                  number : '1.2-2')) : \"$0.00\"}}</td>\n                <td>{{report.adjust_product_selling ? (\"$\"+(report.adjust_product_selling |\n                  number : '1.2-2')) : \"$0\"}}</td>\n                <td>{{report.initial_product_purchase ? (\"$\"+(report.initial_product_purchase |\n                  number : '1.2-2')) : \"$0.00\"}}</td>\n                <td>{{report.adjust_product_purchase ? (\"$\"+(report.adjust_product_purchase |\n                  number : '1.2-2')) : \"$0.00\"}}</td>\n                <td>{{report.average_price ? (\"$\"+(report.average_price | number : '1.2-2')) :\n                  \"$0.00\"}}</td>\n                <td>{{report.average_purchase_price ? (\"$\"+(report.average_purchase_price |\n                  number : '1.2-2')) : \"$0.00\"}}</td>\n                <td>{{report.notes ? report.notes : \"-\"}}</td>\n              </tr>\n              <tr *ngIf=\"reportList?.length == 0\">\n                <td colspan=\"11\" class=\"no-data-available\">No Data Found !</td>\n              </tr>\n            </tbody>\n          </table>\n          <!-- </div>\n          </perfect-scrollbar> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/aging-report/aging-report.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/aging-report/aging-report.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Aging Report\n          <div class=\"dropdown pull-right\">\n            <button (click)=\"exportDynamic()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\">\n              <i class=\"fa fa-file-export mr-2\"></i>\n              Export\n            </button>\n            <!-- <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                            type=\"button\">\n                            <i class=\"fa fa-file-export mr-2\"></i>\n                            Export\n                        </button> -->\n            <!-- <div id=\"myDropdown\" class=\"dropdown-content\">\n                            <a href=\"javascript:void(0)\" (click)=\"exportDynamic()\"\n                                style=\"font-size: small; text-decoration: none;\">\n                                Export to XLSX\n                            </a> -->\n            <!-- <a href=\"javascript:void(0)\"\n                                (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n            <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n            <!-- </div> -->\n          </div>\n        </div>\n        <div class=\"card-body p-4\">\n          <form class=\"row justify-content-start align-items-center mb-1\">\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>From Due Date</label>\n                <input type=\"text\" placeholder=\"From Due Date\" class=\"form-control\" [(ngModel)]=\"selectedFromDate\"\n                  [ngModelOptions]=\"{standalone: true}\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>To Due Date</label>\n                <input type=\"text\" placeholder=\"To Due Date\" class=\"form-control\" [(ngModel)]=\"selectedToDate\"\n                  [ngModelOptions]=\"{standalone: true}\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label>Store Name</label>\n                <select [(ngModel)]=\"selectedStore\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                  <option value=\"\">Select Store Name</option>\n                  <option *ngFor=\"let item of storeList\" [value]=\"item.store_name\">{{item.store_name}}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-sm-12 pt-2\">\n              <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\" type=\"button\">Filter</button>\n            </div>\n          </form>\n          <!-- <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n                        <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                            type=\"button\"><i class=\"fa fa-file-export mr-2\n                        \"></i>Export</button>\n                        <div id=\"myDropdown\" class=\"dropdown-content\">\n                            <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a>\n                            <a href=\"javascript:void(0)\" (click)=\"exportDynamic()\">Export to XLSX</a>\n                            <a href=\"javascript:void(0)\" (click)=\"commonService.exportPDF(false, 0, 'agingReportList')\">Export to PDF</a>\n                            <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a>\n                        </div>\n                    </div> -->\n          <!-- <perfect-scrollbar> -->\n            <!-- <div class=\"responsive-table rounded mb-4\"> -->\n              <table style=\"width: 100%;\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                class=\"data row-border hover table order-table border\" id=\"excel-table\">\n                <thead>\n                  <tr>\n                    <th>Store name</th>\n                    <th>Invoice <br> Number</th>\n                    <th>PO <br> Number</th>\n                    <th>Delivery <br> Date</th>\n                    <th>Invoice <br> Date</th>\n                    <th>Payment <br> Due Date</th>\n                    <th style=\"min-width: 70px;\">Aging</th>\n                    <th>Total <br> Amount</th>\n                    <th>Amount <br> Received</th>\n                    <th id=\"last-header\">Open <br> Balance</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let report of reportList;let i = index;\">\n                    <td>{{report.store_name || \"-\"}}</td>\n                    <td>{{report.invoice_no || \"-\"}}</td>\n                    <td>{{report.po_num || \"-\"}}</td>\n                    <td>{{report.delivery_date ? (report.delivery_date | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                    <td>{{report.invoice_date ? (report.invoice_date | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                    <td>{{report.due_date ? (report.due_date | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                    <td>\n                      {{report.ageing ? ((report.ageing > 1) ? (report.ageing + \" Days\") : (report.ageing == 1) ?\n                      (report.ageing + \" Day\") : \"-\") : \"-\"}}\n                    </td>\n                    <td>\n                      {{report.total_amount ? (\"$\"+(report.total_amount | number : '1.2-2')) : \"$0.00\"}}\n                    </td>\n                    <td>\n                      {{report.amount_recieved ? (\"$\"+(report.amount_recieved | number : '1.2-2')) : \"$0.00\"}}\n                    </td>\n                    <td>\n                      {{report.open_balance ? (\"$\"+(report.open_balance | number : '1.2-2')) : \"$0.00\"}}\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"reportList?.length == 0\">\n                    <td colspan=\"9\" class=\"no-data-available\">No Data Found !</td>\n                  </tr>\n                </tbody>\n              </table>\n            <!-- </div>\n          </perfect-scrollbar> -->\n          <div class=\"calcuted-data\">\n            <ul class=\"justify-content-end\">\n              <li>\n                <strong>Total Open Balance</strong>\n                <span>\n                  {{totalOpenBalance ? (\"$ \"+(totalOpenBalance | number : '1.2-2')) : \"$ 0.00\"}}\n                </span>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/average-product-hands/average-product-hands.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/average-product-hands/average-product-hands.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <!-- <div class=\"card-header\">\n          <div class=\"d-flex flex-wrap\"> -->\n        <!-- <select (change)=\"changeMonth()\" [(ngModel)]=\"selectedMonth\" class=\"form-control mr-2\" style=\"width:200px;\" name=\"Category-Name\">\n                            <option value=\"1\">January</option>\n                            <option value=\"2\">February</option>\n                            <option value=\"3\">March</option>\n                            <option value=\"4\">April</option>\n                            <option value=\"5\">May</option>\n                            <option value=\"6\">June</option>\n                            <option value=\"7\">July</option>\n                            <option value=\"8\">August</option>\n                            <option value=\"9\">September</option>\n                            <option value=\"10\">October</option>\n                            <option value=\"11\">November</option>\n                            <option value=\"12\">December</option>\n                        </select>\n                        <select class=\"form-control\" (change)=\"changeYear()\" [(ngModel)]=\"selectedYear\" style=\"width:200px;\" name=\"Category-Name\">\n                            <option [value]=\"year\" *ngFor=\"let year of years\">{{year}}</option>\n                        </select> -->\n        <!-- <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"From Date\" class=\"form-control\" [(ngModel)]=\"selectedFromDate\"\n                  [ngModelOptions]=\"{standalone: true}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"To Date\" class=\"form-control\" [(ngModel)]=\"selectedToDate\"\n                  [ngModelOptions]=\"{standalone: true}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <select [(ngModel)]=\"selectedProduct\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                <option value=\"\">Select Product Name</option>\n                <option *ngFor=\"let product of productDropdownData\" [value]=\"product.id\">\n                  {{product.name}}</option>\n              </select>\n            </div>\n            <div class=\"col-md-2 col-sm-12\">\n              <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\" type=\"button\">Filter</button>\n            </div>\n          </div>\n        </div> -->\n        <div class=\"card-body p-4 chart-wrapper\">\n          <div class=\"chart-div\"\n            [ngStyle]=\"{'width': (chartList?.length > 10) ? ((chartList?.length > 20) ? '30000px' : '3000px') : 'auto'}\"\n            style=\"display: block;\" style=\"height:400px;\">\n            <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"ChartOptions\"\n              [colors]=\"barChartColors\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\">\n            </canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Average Product On Hand Report\n          <div class=\"d-flex flex-wrap justify-content-end align-items-center\">\n            <div class=\"dropdown pull-right\">\n              <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\">\n                <i class=\"fa fa-file-export mr-2\"></i>\n                Export\n              </button>\n              <div id=\"myDropdown\" class=\"dropdown-content\">\n                <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\"\n                  style=\"font-size: small; text-decoration: none;\">\n                  Export to XLSX\n                </a>\n                <!-- <a href=\"javascript:void(0)\"\n                        (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n                <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body p-4\">\n          <!-- <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n            <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\"><i\n                class=\"fa fa-file-export mr-2\n                        \"></i>Export</button>\n            <div id=\"myDropdown\" class=\"dropdown-content\">\n              <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a> -->\n          <!-- <a href=\"javascript:void(0)\"\n                                (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n          <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n          <!-- </div>\n          </div> -->\n          <form class=\"row justify-content-start align-items-center mb-2\">\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>From Date</label>\n                <input type=\"text\" placeholder=\"From Date\" class=\"form-control\" [(ngModel)]=\"selectedFromDate\"\n                  [ngModelOptions]=\"{standalone: true}\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>To Date</label>\n                <input type=\"text\" placeholder=\"To Date\" class=\"form-control\" [(ngModel)]=\"selectedToDate\"\n                  [ngModelOptions]=\"{standalone: true}\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label>Product Name</label>\n                <select [(ngModel)]=\"selectedProduct\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                  <option value=\"\">Select Product Name</option>\n                  <option *ngFor=\"let product of productDropdownData\" [value]=\"product.id\">\n                    {{product.name}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-sm-12 pt-2\">\n              <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\" type=\"button\">Filter</button>\n            </div>\n          </form>\n          <!-- <perfect-scrollbar>\n            <div class=\"responsive-table rounded mb-4\"> -->\n              <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" style=\"width: 100%;\"\n                class=\"data row-border hover table order-table border\" id=\"excel-table\">\n                <thead>\n                  <tr>\n                    <th>Item Number</th>\n                    <th style=\"min-width: 100px;\">Name</th>\n                    <th>Number of <br> product sold </th>\n                    <th id=\"last-header\">Average Sale <br> (Average = Total Sum of All products / Number of product\n                      sold)\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let report of reportList;let i = index;\">\n                    <td>{{report.product_item_no || \"-\"}}</td>\n                    <td>{{report.name || \"-\"}}</td>\n                    <td>{{report.order_quanity_recieved}}</td>\n                    <td>{{report.average | number : '1.2-2'}}</td>\n                  </tr>\n                  <tr *ngIf=\"reportList?.length == 0\">\n                    <td colspan=\"4\" class=\"no-data-available\">No Data Found !</td>\n                  </tr>\n                </tbody>\n              </table>\n            <!-- </div>\n          </perfect-scrollbar> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/average-product-sales/average-product-sales.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/average-product-sales/average-product-sales.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <!-- <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header pb-0\">\n          <div class=\"d-flex flex-wrap\"> -->\n\n  <!-- <select (change)=\"changeMonth()\" [(ngModel)]=\"selectedMonth\" class=\"form-control mr-2\" style=\"width:200px;\" name=\"Category-Name\">\n                            <option value=\"1\">January</option>\n                            <option value=\"2\">February</option>\n                            <option value=\"3\">March</option>\n                            <option value=\"4\">April</option>\n                            <option value=\"5\">May</option>\n                            <option value=\"6\">June</option>\n                            <option value=\"7\">July</option>\n                            <option value=\"8\">August</option>\n                            <option value=\"9\">September</option>\n                            <option value=\"10\">October</option>\n                            <option value=\"11\">November</option>\n                            <option value=\"12\">December</option>\n                        </select>\n                        <select class=\"form-control\" (change)=\"changeYear()\" [(ngModel)]=\"selectedYear\" style=\"width:200px;\" name=\"Category-Name\">\n                            <option [value]=\"year\" *ngFor=\"let year of years\">{{year}}</option>\n                        </select> -->\n\n  <!-- <div class=\"col-md-2 col-sm-12\">\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"From Date\" class=\"form-control\" [(ngModel)]=\"selectedFromDate\"\n                  [ngModelOptions]=\"{standalone: true}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-sm-12\">\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"To Date\" class=\"form-control\" [(ngModel)]=\"selectedToDate\"\n                  [ngModelOptions]=\"{standalone: true}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <select [(ngModel)]=\"selectedProduct\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                <option value=\"\">Select Product Name</option>\n                <option *ngFor=\"let product of productDropdownData\" [value]=\"product.id\">\n                  {{product.name}}</option>\n              </select>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <select [(ngModel)]=\"selectedProduct\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                <option value=\"\">Select Category</option>\n                <option *ngFor=\"let product of productDropdownData\" [value]=\"product.id\">\n                  {{product.name}}</option>\n              </select>\n            </div>\n            <div class=\"col-md-2 col-sm-12\">\n              <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\" type=\"button\">Filter</button>\n            </div>\n          </div>\n        </div> -->\n\n  <!-- <div class=\"card-body p-4 chart-wrapper\">\n                    <div class=\"chart-div\"\n                        [ngStyle]=\"{'width': (chartList?.length > 10) ? ((chartList?.length > 20) ? '25000px' : '3000px') : 'auto'}\"\n                        style=\"display: block;\" style=\"height:400px;\">\n                        <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"ChartOptions\"\n                            [colors]=\"barChartColors\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\">\n                        </canvas>\n                    </div>\n                </div> -->\n\n  <!-- </div>\n    </div>\n  </div> -->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Sales by Item Details\n          <div class=\"dropdown pull-right\">\n            <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\" type=\"button\">\n              <i class=\"fa fa-file-export mr-2\"></i>\n              Export\n            </button>\n            <div id=\"myDropdown\" class=\"dropdown-content\">\n              <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\"\n                style=\"font-size: small; text-decoration: none;\">\n                Export to XLSX\n              </a>\n              <!-- <a href=\"javascript:void(0)\"\n                                (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n              <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <!-- <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n                        <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                            type=\"button\"><i class=\"fa fa-file-export mr-2\n                        \"></i>Export</button>\n                        <div id=\"myDropdown\" class=\"dropdown-content\">\n                            <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a> -->\n          <!-- <a href=\"javascript:void(0)\"\n                                (click)=\"commonService.exportPDF(false, 0, 'avarageProductList')\">Export to PDF</a> -->\n          <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n          <!-- </div>\n                    </div> -->\n          <form class=\"row justify-content-start align-items-center mb-2\">\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>From Date</label>\n                <input type=\"text\" placeholder=\"From Date\" class=\"form-control\" [(ngModel)]=\"selectedFromDate\"\n                  [ngModelOptions]=\"{standalone: true}\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>To Date</label>\n                <input type=\"text\" placeholder=\"To Date\" class=\"form-control\" [(ngModel)]=\"selectedToDate\"\n                  [ngModelOptions]=\"{standalone: true}\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n              </div>\n            </div>\n            <strong class=\"pt-2\" style=\"float: right;\">\n              * Average Sales = (Total No of Product Sold Amount / Total Quantity Sold)\n            </strong><br>\n            <div class=\"col-md-4 col-sm-12\">\n              <div class=\"form-group\">\n                <label>Product Name</label>\n                <select [(ngModel)]=\"selectedProduct\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                  <option value=\"\">Select Product Name</option>\n                  <option *ngFor=\"let product of productDropdownData\" [value]=\"product.id\">\n                    {{product.name}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>Category</label>\n                <select [(ngModel)]=\"selectedCategory\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                  <option value=\"\">Select Category</option>\n                  <option *ngFor=\"let category of categoryDropdownData\" [value]=\"category.id\">\n                    {{category.name}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>Sales User</label>\n                <select [(ngModel)]=\"selectedSalesUser\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                  <option value=\"\">Select Sales User</option>\n                  <option *ngFor=\"let user of salesPersonList\" [value]=\"user.id\">\n                    {{user.full_name}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-sm-12 pt-2\">\n              <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\" type=\"button\">Filter</button>\n            </div>\n          </form>\n          <!-- <perfect-scrollbar>\n            <div class=\"responsive-table rounded mb-4\"> -->\n          <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" style=\"width: 100%;\"\n            class=\"data row-border hover table order-table border\" id=\"excel-table\">\n            <thead>\n              <tr style=\"width: 100%;\">\n                <th style=\"width: 10%;\">\n                  Item<br> Number\n                </th>\n                <th style=\"width: 10%;\">Category</th>\n                <th>\n                  Product Name\n                </th>\n                <th style=\"width: 10%;\">\n                  Number of <br> Product Sold\n                </th>\n                <th id=\"last-header\" style=\"width: 10%;\">\n                  Average<br> Sales\n                  <!-- <br> -->\n                  <!-- (Total No# Product Sold Amount / Total Quantity Sold) -->\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let report of reportList\">\n                <td>{{report.product_item_no || \"-\"}}</td>\n                <td>{{report.category_name || \"-\"}}</td>\n                <td style=\"text-align: left; white-space: nowrap; cursor: pointer;\"\n                  (click)=\"goToProductOrderPage(report.product_id)\">\n                  {{report.name || \"-\"}}\n                </td>\n                <td class=\"text-primary\" style=\"cursor: pointer;\" (click)=\"goToProductOrderPage(report.product_id)\">\n                  {{report.order_quanity_recieved}}\n                </td>\n                <td>\n                  {{report.average ? \"$\" + (report.average | number : '1.2-2') : '$0.00'}}\n                </td>\n              </tr>\n              <tr *ngIf=\"reportList?.length == 0\">\n                <td colspan=\"5\" class=\"no-data-available\">No Data Found !</td>\n              </tr>\n            </tbody>\n          </table>\n          <!-- </div>\n          </perfect-scrollbar> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/average-product-sales/product-order/product-order.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/average-product-sales/product-order/product-order.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <!-- <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header pb-0\">\n          <div class=\"d-flex flex-wrap\">\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"From Date\" class=\"form-control\" [(ngModel)]=\"selectedFromDate\"\n                  [ngModelOptions]=\"{standalone: true}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"To Date\" class=\"form-control\" [(ngModel)]=\"selectedToDate\"\n                  [ngModelOptions]=\"{standalone: true}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <select class=\"form-control\">\n                <option value=\"\">Select Store Name</option>\n                <option *ngFor=\"let item of storeList\" [value]=\"item.store_name\">{{item.store_name}}\n                </option>\n              </select>\n            </div>\n            <div class=\"col-md-2 col-sm-12\">\n              <button (click)=\"rerenderModalTable()\" class=\"btn btn-md btn-dark\" type=\"button\">Filter</button>\n              <button (click)=\"goBackToSalesByItemPage()\" class=\"btn btn-md btn-secondary\" type=\"button\">Back</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header d-flex justify-content-between align-items-center\">Product Order Details\n          <div class=\"pull-right\">\n            <a (click)=\"goBackToSalesByItemPage()\" class=\"btn btn-md btn-secondary\" type=\"button\">Back</a>\n          </div>\n        </div>\n        <div class=\"card-body p-4\">\n          <form class=\"row justify-content-start align-items-center mb-2\">\n            <div class=\"col-md-2 col-sm-12\">\n              <div class=\"form-group\">\n                <label>From Date</label>\n                <input type=\"text\" placeholder=\"From Date\" class=\"form-control\" [(ngModel)]=\"selectedFromDate\"\n                  [ngModelOptions]=\"{standalone: true}\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-sm-12\">\n              <div class=\"form-group\">\n                <label>To Date</label>\n                <input type=\"text\" placeholder=\"To Date\" class=\"form-control\" [(ngModel)]=\"selectedToDate\"\n                  [ngModelOptions]=\"{standalone: true}\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\" bsDatepicker>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>Store Name</label>\n                <select class=\"form-control\">\n                  <option value=\"\">Select Store Name</option>\n                  <option *ngFor=\"let item of storeList\" [value]=\"item.store_name\">{{item.store_name}}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-12\">\n              <div class=\"form-group\">\n                <label>Sales User</label>\n                <select [(ngModel)]=\"selectedSalesUser\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n                  <option value=\"\">Select Sales User</option>\n                  <option *ngFor=\"let user of salesPersonList\" [value]=\"user.id\">\n                    {{user.full_name}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-sm-12 pt-2\">\n              <button (click)=\"rerenderModalTable()\" class=\"btn btn-md btn-dark\" type=\"button\">Filter</button>\n            </div>\n          </form>\n          <perfect-scrollbar>\n            <div class=\"responsive-table rounded mb-4\">\n              <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" id=\"excel-table\"\n                class=\"data row-border hover table order-table border\" style=\"width: 100%;\">\n                <thead>\n                  <tr>\n                    <th>Invoice No.</th>\n                    <th>Order Date</th>\n                    <th>Invoice Date</th>\n                    <th>Store Name</th>\n                    <th>Qty</th>\n                    <th>Price</th>\n                    <th>Discount</th>\n                    <th>Net Price</th>\n                    <th>Amount</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let productOrder of productOrderList;let i = index;\">\n                    <td>\n                      <a [routerLink]=\"['/sales-management/order-invoice']\"\n                        [queryParams]='{id: productOrder?.order_id, customer_id: productOrder?.store_id, fromProductOrder: true}'\n                        class=\"text-primary mx-2\">\n                        <span class=\"anchor-tag\">\n                          {{productOrder.invoice_no || \"-\"}}\n                        </span>\n                      </a>\n                    </td>\n                    <td>{{productOrder.order_created_date | date:\"MM-dd-yyyy\" || \"-\"}}</td>\n                    <td>{{productOrder.order_created_date | date:\"MM-dd-yyyy\" || \"-\"}}</td>\n                    <td style=\"text-align: left; white-space: nowrap;\">{{productOrder.store_name || \"-\"}}</td>\n                    <td>{{productOrder.product_order_quantity | number:\"1.0-0\" || \"-\"}}</td>\n                    <td>\n                      {{productOrder.product_original_price ? \"$\" + (productOrder.product_original_price | number :\n                      '1.2-2') : \"$0.00\"}}\n                    </td>\n                    <td>{{productOrder.product_order_discount ? \"$\"+(productOrder.product_order_discount | number :\n                      '1.2-2') : \"$0.00\"}}\n                    </td>\n                    <td>\n                      {{productOrder.product_order_sales_price ? \"$\" + (productOrder.product_order_sales_price | number\n                      : '1.2-2') : \"$0.00\"}}\n                    </td>\n                    <td>{{productOrder.total_of_amount ? \"$\"+(productOrder.total_of_amount | number :\n                      '1.2-2') : \"$0.00\"}}</td>\n                  </tr>\n                  <tr *ngIf=\"productOrderList?.length == 0\">\n                    <td colspan=\"9\" class=\"no-data-available\">No Data Found !</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </perfect-scrollbar>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/initial-quantity-report/initial-quantity-report.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/initial-quantity-report/initial-quantity-report.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">Initial Product Quantity Report</div>\n                <div class=\"card-body p-4\">\n                    <form class=\"row justify-content-start align-items-center mb-0\">\n                        <div class=\"col-md-3 col-sm-12\">\n                            <div class=\"form-group\">\n                                <label>From Date</label>\n                                <input type=\"text\" placeholder=\"From Date\" class=\"form-control\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\"\n                                    [(ngModel)]=\"selectedFromDate\" [ngModelOptions]=\"{standalone: true}\" bsDatepicker>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3 col-sm-12\">\n                            <div class=\"form-group\">\n                                <label>To Date</label>\n                                <input type=\"text\" placeholder=\"To Date\" class=\"form-control\" [bsConfig]=\"{dateInputFormat: 'MM-DD-YYYY'}\"\n                                    [(ngModel)]=\"selectedToDate\" [ngModelOptions]=\"{standalone: true}\" bsDatepicker>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3 col-sm-12\">\n                            <div class=\"form-group\">\n                                <label>Product Name</label>\n                                <select [(ngModel)]=\"selectedProduct\" [ngModelOptions]=\"{standalone: true}\"\n                                    class=\"form-control\">\n                                    <option value=\"\">Select Product Name</option>\n                                    <option *ngFor=\"let product of productDropdownData\" [value]=\"product.id\">\n                                        {{product.name}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-md-2 col-sm-12 pt-3\">\n                            <button (click)=\"rerender()\" class=\"btn btn-md btn-dark mr-3\" type=\"button\">Filter</button>\n                        </div>\n                    </form>\n                    <div class=\"form-group dropdown\" style=\"float: right; margin-left: 10px;\">\n                        <button (click)=\"commonService.toggleDropDown()\" class=\"btn btn-md btn-primary dropbtn\"\n                            type=\"button\"><i class=\"fa fa-file-export mr-2\n                        \"></i>Export</button>\n                        <div id=\"myDropdown\" class=\"dropdown-content\">\n                            <a href=\"javascript:void(0)\" (click)=\"exportTable('xlsx')\">Export to XLSX</a>\n                            <!-- <a href=\"javascript:void(0)\" (click)=\"exportTable('pdf')\">Export to PDF</a> -->\n                            <!-- <a href=\"javascript:void(0)\"\n                                (click)=\"commonService.exportPDF(false, 0, 'initialQuanityReportList')\">Export to\n                                PDF</a> -->\n                        </div>\n                    </div>\n                    <perfect-scrollbar>\n                        <div class=\"responsive-table rounded mb-4\">\n                            <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                                class=\"data row-border hover table order-table border\" style=\"width: 100%;\"\n                                id=\"excel-table\">\n                                <thead>\n                                    <tr>\n                                        <th style=\"max-width: 70px;\">Date</th>\n                                        <th style=\"max-width: 85px;\">Item Number</th>\n                                        <th>Name</th>\n                                        <th style=\"max-width: 70px;\">Quantity</th>\n                                        <th style=\"max-width: 150px;\">Initial Product <br> Selling Price</th>\n                                        <th style=\"max-width: 150px;\">Initial Product <br> Purchase Price</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let report of reportList;let i = index;\">\n                                        <td>{{report.date ? (report.date | date: 'MM-dd-yyyy') : \"-\"}}</td>\n                                        <td>{{report.product_item_no || \"-\"}}</td>\n                                        <td>{{report.name || \"-\"}}</td>\n                                        <td>{{report.quantity ? (report.quantity | number : '1.2-2') : \"0.00\"}}</td>\n                                        <td>{{report.price ? (\"$\"+(report.price | number : '1.2-2')) : \"$0.00\"}}</td>\n                                        <td>{{report.initial_purchase_price ? (\"$\"+(report.initial_purchase_price |\n                                            number : '1.2-2')) : \"$0\"}}</td>\n                                    </tr>\n                                    <tr *ngIf=\"reportList?.length == 0\">\n                                        <td colspan=\"6\" class=\"no-data-available\">No Data Found !</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </perfect-scrollbar>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/reports.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/reports.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>reports works!</p>\n");

/***/ }),

/***/ "./src/app/shared/services/reports.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/reports.service.ts ***!
  \****************************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ReportsService = /** @class */ (function () {
    function ReportsService(http) {
        this.http = http;
    }
    ReportsService.prototype.avarageReportList = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/salesreports/averagereport/", data);
    };
    ReportsService.prototype.initial_reports = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/initial_reports/", data);
    };
    ReportsService.prototype.adjust_quantity_list = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/adjust_quantity/list_view/", data);
    };
    ReportsService.prototype.get_product_orders = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/average_sales_report/get_product_orders/", data);
    };
    ReportsService.prototype.average_sales_report = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/average_sales_report/", data);
    };
    ReportsService.prototype.admin_ageing_report = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/admin_ageing_report/", data);
    };
    ReportsService.prototype.categorieslist = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/categorieslist/", data);
    };
    ReportsService.prototype.productlist = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/productlist/", data);
    };
    ReportsService.prototype.storelist = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/store_name_list/");
    };
    ReportsService.prototype.average_hands_report = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/average_sales_report/", data);
    };
    ReportsService.prototype.new_admin_ageing_report = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/new_admin_ageing_report/", data);
    };
    ReportsService.prototype.average_onhand_product_report = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/average_onhand_product_report/", data);
    };
    ReportsService.prototype.userlist = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "/user/salesuser/", data);
    };
    ReportsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ReportsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReportsService);
    return ReportsService;
}());



/***/ }),

/***/ "./src/app/views/reports/adjusted-quantity-report/adjusted-quantity-report.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/reports/adjusted-quantity-report/adjusted-quantity-report.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AdjustedQuantityReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustedQuantityReportComponent", function() { return AdjustedQuantityReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");









var AdjustedQuantityReportComponent = /** @class */ (function () {
    function AdjustedQuantityReportComponent(titleService, toastr, reportsService, datePipe, commonService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.reportsService = reportsService;
        this.datePipe = datePipe;
        this.commonService = commonService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.selectedProduct = "";
    }
    AdjustedQuantityReportComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Adjusted Quantity Report");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("notlink");
        this.getReportList();
        this.getProductDropdownData();
    };
    AdjustedQuantityReportComponent.prototype.getReportList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 100,
            order: [1, "asc"],
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
                    ? (dataTablesParameters.product_item_no =
                        dataTablesParameters.order[0].column == 0 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "product_item_no"
                            : "-product_item_no")
                    : "";
                dataTablesParameters.order[0].column == 1
                    ? (dataTablesParameters.product__name =
                        dataTablesParameters.order[0].column == 1 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "product__name"
                            : "-product__name")
                    : "";
                dataTablesParameters.order[0].column == 2
                    ? (dataTablesParameters.initial_quanity_date =
                        dataTablesParameters.order[0].column == 2 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "initial_date"
                            : "-initial_date")
                    : "";
                dataTablesParameters.order[0].column == 3
                    ? (dataTablesParameters.date =
                        dataTablesParameters.order[0].column == 3 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "date"
                            : "-date")
                    : "";
                dataTablesParameters.order[0].column == 4
                    ? (dataTablesParameters.initial_amount =
                        dataTablesParameters.order[0].column == 4 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "initial_amount"
                            : "-initial_amount")
                    : "";
                dataTablesParameters.order[0].column == 5
                    ? (dataTablesParameters.new_price =
                        dataTablesParameters.order[0].column == 5 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "new_price"
                            : "-new_price")
                    : "";
                dataTablesParameters.order[0].column == 6
                    ? (dataTablesParameters.initial_purchase_amount =
                        dataTablesParameters.order[0].column == 6 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "initial_purchase_amount"
                            : "-initial_purchase_amount")
                    : "";
                dataTablesParameters.order[0].column == 7
                    ? (dataTablesParameters.new_purchase_price =
                        dataTablesParameters.order[0].column == 7 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "new_purchase_price"
                            : "-new_purchase_price")
                    : "";
                dataTablesParameters.order[0].column == 8
                    ? (dataTablesParameters.average_price =
                        dataTablesParameters.order[0].column == 8 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "average_price"
                            : "-average_price")
                    : "";
                dataTablesParameters.order[0].column == 9
                    ? (dataTablesParameters.average_purchase_price =
                        dataTablesParameters.order[0].column == 9 &&
                            dataTablesParameters.order[0].dir == "asc"
                            ? "average_purchase_price"
                            : "-average_purchase_price")
                    : "";
                // filter
                dataTablesParameters.from_date = _this.datePipe.transform(_this.selectedFromDate, "yyyy-MM-dd");
                dataTablesParameters.to_date = _this.datePipe.transform(_this.selectedToDate, "yyyy-MM-dd");
                dataTablesParameters.filter_by_product = _this.selectedProduct;
                _this.datatbaleData = dataTablesParameters;
                _this.reportsService
                    .adjust_quantity_list(dataTablesParameters)
                    .subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.reportList = resData.data;
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
                { data: "product_item_no" },
                { data: "product_name" },
                { data: "initial_quanity_date" },
                { data: "adjust_quanity_date" },
                { data: "initial_product_selling" },
                { data: "adjust_product_selling" },
                { data: "initial_product_purchase" },
                { data: "adjust_product_purchase" },
                { data: "average_price" },
                { data: "average_purchase_price" },
                { data: "notes", orderable: false },
            ],
        };
    };
    AdjustedQuantityReportComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("notlink");
    };
    AdjustedQuantityReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AdjustedQuantityReportComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    AdjustedQuantityReportComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.reportsService.adjust_quantity_list(this.datatbaleData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                    "Item Number": x.product_item_no || "-",
                    Name: x.name || "-",
                    "Quantity On Hand": (x.initial_quanity_date
                        ? x.initial_quanity_date.split(" ")[0]
                        : "-") +
                        " " +
                        (x.initial_quanity_date
                            ? x.initial_quanity_date.split(" ")[1]
                            : ""),
                    "Adjusted Quantity On Date": (x.adjust_quanity_date
                        ? x.adjust_quanity_date.split(" ")[0]
                        : "-") +
                        " " +
                        (x.adjust_quanity_date
                            ? x.adjust_quanity_date.split(" ")[1]
                            : ""),
                    "Initial Product Selling Price": x.initial_product_selling
                        ? "$ " + x.initial_product_selling
                        : "$0",
                    "Adjusted Product Selling Price": x.adjust_product_selling
                        ? "$ " + x.adjust_product_selling
                        : "$0",
                    "Average Selling Price": x.average_price
                        ? "$ " + x.average_price
                        : "$0",
                    "Average Purchase Price": x.average_purchase_price
                        ? "$ " + x.average_purchase_price
                        : "$0",
                    Notes: x.notes || "-",
                }); });
                if (type == "pdf") {
                    var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                    var values = onlyNameAndSymbolArr.map(function (element) {
                        return Object.values(element);
                    });
                    _this.commonService.exportArrayPDF(keys, values, "adjustedQuanityReportList");
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, "adjustedQuanityReportList");
                }
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    AdjustedQuantityReportComponent.prototype.getProductDropdownData = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("page", "1");
        formData.append("limit", "100000");
        this.reportsService.productlist(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.productDropdownData = resData.data;
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    AdjustedQuantityReportComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], AdjustedQuantityReportComponent.prototype, "dtElement", void 0);
    AdjustedQuantityReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-adjusted-quantity-report",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adjusted-quantity-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/adjusted-quantity-report/adjusted-quantity-report.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
    ], AdjustedQuantityReportComponent);
    return AdjustedQuantityReportComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/aging-report/aging-report.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/reports/aging-report/aging-report.component.ts ***!
  \**********************************************************************/
/*! exports provided: AgingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgingReportComponent", function() { return AgingReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_13__);














var AgingReportComponent = /** @class */ (function () {
    function AgingReportComponent(titleService, toastr, reportsService, datePipe, spinner, commonService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.reportsService = reportsService;
        this.datePipe = datePipe;
        this.spinner = spinner;
        this.commonService = commonService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.totalOpenBalance = 0;
        this.selectedStore = "";
        this.title = "Krishiv Foods";
        this.header = [
            "Type",
            "Invoice Date",
            "Num",
            "P.O.#",
            "Terms",
            "Due Date",
            "Aging",
            "Open Balance",
        ];
        this.data = [
            ["Invoice", "11/20/2020", "KF22 ", "", "Net 30", "12/20/2020", 110, 156.2],
            ["Invoice", "12/09/2020", "KF22 ", "", "Net 30", "12/20/2020", 91, 756.0],
            ["Invoice", "01/15/2021", "KF23 ", "", "Net 30", "12/20/2020", 54, 51.25],
            ["Invoice", "03/16/2021", "KF24 ", "", "Net 30", "12/20/2020", , 2379.25],
        ];
        this.exportData = [
            {
                date: "April 9, 2021",
                totalData: 213347.95,
                allData: [
                    {
                        mainName: "Bombay Grocers",
                        data: [
                            {
                                type: "invoice",
                                date: "11/20/2020",
                                num: "KF22",
                                po_num: "",
                                terms: "Net 30",
                                due_date: "12/20/2020",
                                aging: 110,
                                open_balance: 156.67,
                            },
                            {
                                type: "invoice",
                                date: "12/09/2020",
                                num: "KF22",
                                po_num: "",
                                terms: "Net 30",
                                due_date: "01/08/2021",
                                aging: 91,
                                open_balance: 756.0,
                            },
                            {
                                type: "invoice",
                                date: "01/15/2021",
                                num: "KF23",
                                po_num: "",
                                terms: "Net 30",
                                due_date: "02/14/2021",
                                aging: 54,
                                open_balance: 51.25,
                            },
                            {
                                type: "invoice",
                                date: "03/16/2021",
                                num: "KF24",
                                po_num: "",
                                terms: "Net 30",
                                due_date: "04/15/2021",
                                aging: null,
                                open_balance: 2379.25,
                            },
                        ],
                        totalName: "Total Bombay Grocers",
                        total: 3343.17,
                    },
                    {
                        mainName: "Bombay Market",
                        data: [
                            {
                                type: "invoice",
                                date: "01/18/2021",
                                num: "KF22",
                                po_num: "",
                                terms: "Net 30",
                                due_date: "02/17/2021",
                                aging: 51,
                                open_balance: 48.0,
                            },
                            {
                                type: "invoice",
                                date: "02/01/2021",
                                num: "KF23",
                                po_num: "",
                                terms: "Net 30",
                                due_date: "03/03/2021",
                                aging: 37,
                                open_balance: 1527.5,
                            },
                            {
                                type: "invoice",
                                date: "03/22/2021",
                                num: "KF25",
                                po_num: "",
                                terms: "Net 30",
                                due_date: "04/21/2021",
                                aging: null,
                                open_balance: 1179.14,
                            },
                        ],
                        totalName: "Total Bombay Market",
                        total: 2754.64,
                    },
                ],
            },
        ];
    }
    AgingReportComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Aging Report");
        this.getReportList();
        this.getStoreData();
    };
    AgingReportComponent.prototype.getReportList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 100,
            order: [0, "asc"],
            scrollY: "450px",
            scrollX: true,
            scrollCollapse: true,
            serverSide: true,
            processing: true,
            searchDelay: 1200,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page =
                    parseInt(dataTablesParameters.start) /
                        parseInt(dataTablesParameters.length) +
                        1;
                dataTablesParameters.limit = dataTablesParameters.length;
                dataTablesParameters.search_value = dataTablesParameters.search.value;
                dataTablesParameters.sort_field =
                    dataTablesParameters.columns[dataTablesParameters.order[0].column].data;
                dataTablesParameters.sort_type = dataTablesParameters.order[0].dir;
                dataTablesParameters.customer_or_store = _this.selectedStore;
                dataTablesParameters.from_due_date = _this.datePipe.transform(_this.selectedFromDate, "yyyy-MM-dd");
                dataTablesParameters.to_due_date = _this.datePipe.transform(_this.selectedToDate, "yyyy-MM-dd");
                _this.datatbaleData = dataTablesParameters;
                _this.reportsService.admin_ageing_report(dataTablesParameters).subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.reportList = resData.data;
                        _this.totalOpenBalance = resData.summary.total_open_balance;
                        setTimeout(function () {
                            var table = $("#excel-table").DataTable();
                            table.columns.adjust();
                            document.getElementById("last-header").style.width = "auto";
                        }, 10);
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: dataTablesParameters.search_value == ""
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
                { data: "store_name", searchable: true, orderable: true },
                { data: "invoice_no", searchable: true, orderable: true },
                { data: "po_num", searchable: true, orderable: true },
                { data: "delivery_date", searchable: true, orderable: true },
                { data: "invoice_date", searchable: true, orderable: true },
                { data: "due_date", searchable: true, orderable: true },
                { data: "ageing", searchable: true, orderable: true },
                { data: "total_amount", searchable: true, orderable: true },
                { data: "amount_recieved", searchable: true, orderable: true },
                { data: "open_balance", searchable: true, orderable: true },
            ],
        };
    };
    AgingReportComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("notlink");
    };
    AgingReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AgingReportComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    AgingReportComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.reportsService.admin_ageing_report(this.datatbaleData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                if (resData.data == 0) {
                    _this.toastr.error("", "No Data Found !");
                }
                else {
                    var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                        "Store Name": x.store_name || "-",
                        "Invoice No": x.invoice_no || "-",
                        "PO No": x.po_num || "-",
                        "Delivery Date": _this.datePipe.transform(x.delivery_date, "MM-dd-yyyy") || "-",
                        "Invoice Date": _this.datePipe.transform(x.invoice_date, "MM-dd-yyyy") || "-",
                        "Payment Due Date": _this.datePipe.transform(x.due_date, "MM-dd-yyyy") || "-",
                        Aging: x.ageing ? (x.ageing > 0 ? x.ageing : "-") : "-",
                        "Total Amount": x.total_amount ? "$" + x.total_amount : "$0",
                        "Amount Received": x.amount_recieved
                            ? "$" + x.amount_recieved
                            : "$0",
                        "Open Balance": x.open_balance ? "$" + x.open_balance : "$0",
                    }); });
                    if (type == "pdf") {
                        var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                        var values = onlyNameAndSymbolArr.map(function (element) {
                            return Object.values(element);
                        });
                        _this.commonService.exportArrayPDF(keys, values, "agingReportList");
                    }
                    else {
                        _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, "agingReportList");
                    }
                }
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    AgingReportComponent.prototype.SavePDF = function () {
        // remove action column
        this.spinner.show();
        // $("#excel-table thead tr").find('th:eq(8)').remove();
        // $("#excel-table tbody tr").each(function() {
        //   $(this).find("td:eq(8)").remove();
        // });
        // pdf export
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_9__["default"]();
        jspdf_autotable__WEBPACK_IMPORTED_MODULE_10___default()(doc, {
            html: "#excel-table",
            columnStyles: { europe: { halign: "center" } },
            styles: { halign: "center", font: "times", cellPadding: 5 },
        });
        doc.save("avarageProductList.pdf");
        this.rerender();
        this.spinner.hide();
        $("#myDropdown").toggle();
    };
    AgingReportComponent.prototype.myFunction = function () {
        $("#myDropdown").toggle();
    };
    AgingReportComponent.prototype.getStoreData = function () {
        var _this = this;
        this.reportsService.storelist().subscribe(function (response) {
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
    AgingReportComponent.prototype.exportExcel = function () {
        var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_12__["Workbook"]();
        var worksheet = workbook.addWorksheet("agingReportList", {
            pageSetup: { paperSize: 9, orientation: "landscape" },
        });
        // let titleRow = worksheet.addRow(["Krishiv Foods"]);
        // let title1Row = worksheet.addRow(["Open Invoices"]);
        // let title2Row = worksheet.addRow(["As of April 9, 2021"]);
        worksheet.getCell("B1:H1").value = "Krishiv Foods";
        worksheet.getCell("B2:H2").value = "Open Invoices";
        worksheet.getCell("B3:H3").value = "As of April 9, 2021";
        // Set font, size and style in title row.
        worksheet.getCell("B1:H1").font = {
            name: "Arial",
            family: 4,
            size: 14,
            bold: true,
        };
        worksheet.getCell("B2:H2").font = {
            name: "Arial",
            family: 4,
            size: 16,
            bold: true,
        };
        worksheet.getCell("B3:H3").font = {
            name: "Arial",
            family: 4,
            size: 12,
            bold: true,
        };
        worksheet.getCell("B1:H1").alignment = {
            vertical: "middle",
            horizontal: "center",
        };
        worksheet.getCell("B2:H2").alignment = {
            vertical: "middle",
            horizontal: "center",
        };
        worksheet.getCell("B3:H3").alignment = {
            vertical: "middle",
            horizontal: "center",
        };
        worksheet.mergeCells("B1:H1");
        worksheet.mergeCells("B2:H2");
        worksheet.mergeCells("B3:H3");
        worksheet.getCell("A1").value = this.datePipe.transform(new Date(), "h:mm a");
        worksheet.getCell("A2").value = this.datePipe.transform(new Date(), "MM-dd-yyyy");
        //Add Header Row
        var headerRow = worksheet.addRow(this.header);
        var firstHead = worksheet.addRow(["Bombay Grocers"]).number;
        worksheet.mergeCells("A" + firstHead + ":" + "H" + firstHead);
        worksheet.getCell("A" + firstHead + ":" + "H" + firstHead).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "CCCCCF" },
            bgColor: { argb: "CCCCCF" },
        };
        worksheet.getCell("A" + firstHead + ":" + "H" + firstHead).font = {
            name: "Arial",
            bold: true,
        };
        // Cell Style : Fill and Border
        headerRow.eachCell(function (cell, number) {
            cell.border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" },
            };
            cell.font = { name: "Arial", bold: true };
        });
        // Add Data and Conditional Formatting
        this.data.forEach(function (d) {
            var row = worksheet.addRow(d);
            // let qty = row.getCell(5);
            // let color = 'FF99FF99';
            // if (+qty.value < 500) {
            //   color = 'FF9999'
            // }
            // qty.fill = {
            //   type: 'pattern',
            //   pattern: 'solid',
            //   fgColor: { argb: color }
            // }
        });
        var secondHead = worksheet.addRow([
            "Total Bombay Grocers",
            "3343.17",
        ]).number;
        worksheet.mergeCells("A" + secondHead + ":" + "G" + secondHead);
        worksheet.getCell("A" + secondHead + ":" + "G" + secondHead).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "CCCCCF" },
            bgColor: { argb: "CCCCCF" },
        };
        worksheet.getCell("H" + secondHead).value = 3343.17;
        worksheet.getCell("H" + secondHead).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "CCCCCF" },
            bgColor: { argb: "CCCCCF" },
        };
        worksheet.columns.forEach(function (d) {
            d.width = 15;
        });
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            file_saver__WEBPACK_IMPORTED_MODULE_13__["saveAs"](blob, "CarData.xlsx");
        });
    };
    AgingReportComponent.prototype.exportDynamic = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("customer_or_store", this.selectedStore);
        this.reportsService.new_admin_ageing_report(formData).subscribe(function (response) {
            var _a, _b, _c, _d, _e;
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                if (((_b = (_a = resData) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length) == 0) {
                    _this.toastr.error("", "No Data Found !");
                }
                else {
                    var data = resData.data;
                    var summary_data = resData.summary;
                    var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_12__["Workbook"]();
                    var worksheet_1 = workbook.addWorksheet("agingReportList", {
                        pageSetup: { paperSize: 9, orientation: "landscape" },
                    });
                    worksheet_1.getCell("B1:H1").value = "Krishiv Foods";
                    worksheet_1.getCell("B2:H2").value = "Open Invoices";
                    worksheet_1.getCell("B3:H3").value =
                        "As of " +
                            _this.datePipe.transform((_c = summary_data) === null || _c === void 0 ? void 0 : _c.report_date, "MMMM d, y");
                    // Set font, size and style in title row.
                    worksheet_1.getCell("B1:H1").font = {
                        name: "Arial",
                        family: 4,
                        size: 14,
                        bold: true,
                    };
                    worksheet_1.getCell("B2:H2").font = {
                        name: "Arial",
                        family: 4,
                        size: 16,
                        bold: true,
                    };
                    worksheet_1.getCell("B3:H3").font = {
                        name: "Arial",
                        family: 4,
                        size: 12,
                        bold: true,
                    };
                    worksheet_1.getCell("B1:H1").alignment = {
                        vertical: "middle",
                        horizontal: "center",
                    };
                    worksheet_1.getCell("B2:H2").alignment = {
                        vertical: "middle",
                        horizontal: "center",
                    };
                    worksheet_1.getCell("B3:H3").alignment = {
                        vertical: "middle",
                        horizontal: "center",
                    };
                    worksheet_1.mergeCells("B1:H1");
                    worksheet_1.mergeCells("B2:H2");
                    worksheet_1.mergeCells("B3:H3");
                    worksheet_1.getCell("A1").value = _this.datePipe.transform(new Date(), "h:mm a");
                    worksheet_1.getCell("A2").value = _this.datePipe.transform(new Date(), "MM-dd-yyyy");
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
                        var firstHead = worksheet_1.addRow([e.store_name]).number;
                        worksheet_1.mergeCells("A" + firstHead + ":" + "H" + firstHead);
                        worksheet_1.getCell("A" + firstHead + ":" + "H" + firstHead).fill =
                            {
                                type: "pattern",
                                pattern: "solid",
                                fgColor: { argb: "CCCCCF" },
                                bgColor: { argb: "CCCCCF" },
                            };
                        worksheet_1.getCell("A" + firstHead + ":" + "H" + firstHead).font =
                            {
                                name: "Arial",
                                bold: true,
                            };
                        e.invoice_data
                            .map(function (element) { return Object.values(element); })
                            .forEach(function (e) {
                            var new_array = e.slice(1);
                            new_array.splice(1, 1);
                            new_array[1] =
                                _this.datePipe.transform(new_array[1], "MM-dd-yyyy") || "-";
                            new_array[2] = new_array[2] || "-";
                            new_array[5] =
                                _this.datePipe.transform(new_array[5], "MM-dd-yyyy") || "-";
                            new_array[7] = "$ " + new_array[7];
                            worksheet_1.addRow(new_array);
                        });
                        var secondHead = worksheet_1.addRow([
                            e.total_store_name,
                            e.total_of_open_balance,
                        ]).number;
                        worksheet_1.mergeCells("A" + secondHead + ":" + "G" + secondHead);
                        worksheet_1.getCell("A" + secondHead + ":" + "G" + secondHead).fill = {
                            type: "pattern",
                            pattern: "solid",
                            fgColor: { argb: "DCDCF5" },
                            bgColor: { argb: "DCDCF5" },
                        };
                        worksheet_1.getCell("H" + (secondHead - 1)).font = {
                            underline: true,
                        };
                        // worksheet.getCell("H" + secondHead).value = Number(parseFloat(e.total_of_open_balance).toFixed(2));
                        worksheet_1.getCell("H" + secondHead).value =
                            "$ " + e.total_of_open_balance;
                        worksheet_1.getCell("H" + secondHead).fill = {
                            type: "pattern",
                            pattern: "solid",
                            fgColor: { argb: "DCDCF5" },
                            bgColor: { argb: "DCDCF5" },
                        };
                    });
                    var thirdHead = worksheet_1.addRow([
                        "TOTAL",
                        (_d = summary_data) === null || _d === void 0 ? void 0 : _d.main_total,
                    ]).number;
                    worksheet_1.mergeCells("A" + thirdHead + ":" + "G" + thirdHead);
                    worksheet_1.getCell("A" + thirdHead + ":" + "G" + thirdHead).fill = {
                        type: "pattern",
                        pattern: "solid",
                        fgColor: { argb: "CFCFDF" },
                        bgColor: { argb: "CFCFDF" },
                    };
                    worksheet_1.getCell("A" + thirdHead + ":" + "G" + thirdHead).font = {
                        bold: true,
                    };
                    // worksheet.getCell("H" + thirdHead).value = Number((parseFloat(summary_data?.main_total).toFixed(2)));
                    worksheet_1.getCell("H" + thirdHead).value =
                        "$ " + ((_e = summary_data) === null || _e === void 0 ? void 0 : _e.main_total);
                    worksheet_1.getCell("H" + thirdHead).fill = {
                        type: "pattern",
                        pattern: "solid",
                        fgColor: { argb: "CFCFDF" },
                        bgColor: { argb: "CFCFDF" },
                    };
                    worksheet_1.getCell("H" + thirdHead).font = { bold: true };
                    for (var index = 6; index <= thirdHead - 2; index++) {
                        worksheet_1.getCell("G" + index).alignment = {
                            vertical: "middle",
                            horizontal: "left",
                        };
                    }
                    worksheet_1.columns.forEach(function (d) {
                        d.width = 15;
                    });
                    workbook.xlsx.writeBuffer().then(function (data) {
                        var blob = new Blob([data], {
                            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                        });
                        file_saver__WEBPACK_IMPORTED_MODULE_13__["saveAs"](blob, "agingReportList.xlsx");
                    });
                    // this.myFunction();
                }
            }
            else {
                _this.toastr.error("", resData.message);
                // this.myFunction();
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
            // this.myFunction();
        });
    };
    AgingReportComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], AgingReportComponent.prototype, "dtElement", void 0);
    AgingReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-aging-report",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aging-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/aging-report/aging-report.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"]])
    ], AgingReportComponent);
    return AgingReportComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/average-product-hands/average-product-hands.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/reports/average-product-hands/average-product-hands.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AverageProductHandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AverageProductHandsComponent", function() { return AverageProductHandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");









var AverageProductHandsComponent = /** @class */ (function () {
    function AverageProductHandsComponent(titleService, toastr, reportsService, datePipe, commonService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.reportsService = reportsService;
        this.datePipe = datePipe;
        this.commonService = commonService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.selectedStore = "";
        this.selectedProduct = "";
        this.ChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
        };
        this.barChartLabels = [
            "Garam Masal",
            "Garam Masal",
            "Garam Masal",
            "Garam Masal",
            "Garam Masal",
            "Garam Masal",
        ];
        this.barChartType = "bar";
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: "Avarage Sale" },
        ];
        this.barChartColors = [{ backgroundColor: "#f3741c" }];
    }
    AverageProductHandsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Average Product on Hand Report");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("notlink");
        this.getReportList();
        this.getProductDropdownData();
    };
    AverageProductHandsComponent.prototype.getReportList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 100,
            order: [0, "desc"],
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
                dataTablesParameters.search_value = dataTablesParameters.search.value;
                // dataTablesParameters.sort_field = dataTablesParameters.columns[dataTablesParameters.order[0].column].data;
                // dataTablesParameters.sort_type = dataTablesParameters.order[0].dir;
                // dataTablesParameters.customer_or_store = this.selectedStore;
                // dataTablesParameters.from_due_date = this.datePipe.transform(this.selectedFromDate, "yyyy-MM-dd");
                // dataTablesParameters.to_due_date = this.datePipe.transform(this.selectedToDate, "yyyy-MM-dd");
                _this.datatbaleData = dataTablesParameters;
                var formData = new FormData();
                formData.append("page", dataTablesParameters.page.toString());
                formData.append("limit", dataTablesParameters.length);
                _this.selectedFromDate
                    ? formData.append("from_date", _this.datePipe.transform(_this.selectedFromDate, "yyyy-MM-dd"))
                    : "";
                _this.selectedToDate
                    ? formData.append("to_date", _this.datePipe.transform(_this.selectedToDate, "yyyy-MM-dd"))
                    : "";
                formData.append("product_id", _this.selectedProduct);
                formData.append("search_param", dataTablesParameters.search_value);
                dataTablesParameters.order[0].column == 0
                    ? formData.append("product_item_no", dataTablesParameters.order[0].column == 0 &&
                        dataTablesParameters.order[0].dir == "asc"
                        ? "product_item_no"
                        : "-product_item_no")
                    : "";
                dataTablesParameters.order[0].column == 1
                    ? formData.append("name", dataTablesParameters.order[0].column == 1 &&
                        dataTablesParameters.order[0].dir == "asc"
                        ? "name"
                        : "-name")
                    : "";
                dataTablesParameters.order[0].column == 2
                    ? formData.append("order_quantity_recieved", dataTablesParameters.order[0].column == 2 &&
                        dataTablesParameters.order[0].dir == "asc"
                        ? "order_quantity_recieved"
                        : "-order_quantity_recieved")
                    : "";
                dataTablesParameters.order[0].column == 3
                    ? formData.append("average", dataTablesParameters.order[0].column == 3 &&
                        dataTablesParameters.order[0].dir == "asc"
                        ? "average"
                        : "-average")
                    : "";
                _this.reportsService.average_onhand_product_report(formData).subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.reportList = resData.data.products;
                        _this.chartList = resData.data.chart.x;
                        _this.barChartData = [
                            {
                                //data: Array.prototype.map.call(resData.data.products, s => s.average),
                                data: resData.data.chart.x,
                                label: "Avarage Sale",
                            },
                        ];
                        //this.barChartLabels = Array.prototype.map.call(resData.data.products, s => s.name);
                        _this.barChartLabels = resData.data.chart.y;
                        _this.ChartOptions = {
                            responsive: true,
                            maintainAspectRatio: false,
                            tooltips: {
                                enabled: true,
                                intersect: true,
                                mode: "index",
                                position: "nearest",
                                xPadding: 20,
                                titleMarginBottom: 10,
                                titleFontSize: 15,
                                titleSpacing: 10,
                                bodyFontSize: 14,
                            },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                        };
                        setTimeout(function () {
                            var table = $("#excel-table").DataTable();
                            table.columns.adjust();
                            document.getElementById("last-header").style.width = "auto";
                        }, 10);
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: dataTablesParameters.search_value == ""
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
                { data: "product_item_no", searchable: true, orderable: true },
                { data: "name", searchable: true, orderable: true },
                { data: "order_quanity_recieved", searchable: true, orderable: true },
                { data: "average", searchable: true, orderable: true },
            ],
        };
    };
    AverageProductHandsComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("notlink");
    };
    AverageProductHandsComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AverageProductHandsComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    AverageProductHandsComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.reportsService.adjust_quantity_list(this.datatbaleData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                    "Item No": x.product_item_no || "-",
                    Name: x.name || "-",
                    "Order Quanity Recieved": x.order_quanity_recieved || "0",
                    Average: x.average || "$0",
                }); });
                if (type == "pdf") {
                    var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                    var values = onlyNameAndSymbolArr.map(function (element) {
                        return Object.values(element);
                    });
                    _this.commonService.exportArrayPDF(keys, values, "averageHandsReportList");
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, "averageHandsReportList");
                }
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    AverageProductHandsComponent.prototype.getProductDropdownData = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("page", "1");
        formData.append("limit", "100000");
        this.reportsService.productlist(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.productDropdownData = resData.data;
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    AverageProductHandsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], AverageProductHandsComponent.prototype, "dtElement", void 0);
    AverageProductHandsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-average-product-hands",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./average-product-hands.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/average-product-hands/average-product-hands.component.html")).default,
            styles: [".chart-div {  } .chart-wrapper{ width: auto;overflow-x: scroll; }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
    ], AverageProductHandsComponent);
    return AverageProductHandsComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/average-product-sales/average-product-sales.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/reports/average-product-sales/average-product-sales.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AverageProductSalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AverageProductSalesComponent", function() { return AverageProductSalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var AverageProductSalesComponent = /** @class */ (function () {
    function AverageProductSalesComponent(titleService, toastr, reportsService, commonService, router, datePipe, route) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.reportsService = reportsService;
        this.commonService = commonService;
        this.router = router;
        this.datePipe = datePipe;
        this.route = route;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.years = [];
        this.date = new Date();
        this.selectedFromDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        this.selectedToDate = new Date();
        this.selectedProduct = "";
        this.selectedCategory = "";
        this.selectedSalesUser = "";
        this.searchValue = "";
        this.firstTime = false;
        this.ChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
        };
        this.barChartLabels = [
            "Garam Masal",
            "Garam Masal",
            "Garam Masal",
            "Garam Masal",
            "Garam Masal",
            "Garam Masal",
        ];
        this.barChartType = "bar";
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: "Avarage Sale" },
        ];
        this.barChartColors = [{ backgroundColor: "#f3741c" }];
    }
    AverageProductSalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle("Sales by Item Details");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("notlink");
        this.selectedMonth = (new Date().getMonth() + 1).toString();
        this.selectedYear = new Date().getFullYear().toString();
        for (var i = 1; i <= 5; i++) {
            this.years.push((new Date().getFullYear() - i).toString());
        }
        for (var i = 0; i <= 5; i++) {
            this.years.push((new Date().getFullYear() + i).toString());
        }
        this.years = this.years.sort(function (n1, n2) { return n1 - n2; });
        this.getReportList();
        this.getProductDropdownData();
        this.getCategoryDropdownData();
        this.getSalesUsers();
        this.route.queryParams.subscribe(function (param) {
            _this.selectedFromDate =
                param.selectedFromDate ||
                    new Date(_this.date.getFullYear(), _this.date.getMonth(), 1);
            _this.selectedToDate = param.selectedToDate || new Date();
            _this.searchValue = param.searchValue || "";
            _this.selectedCategory = param.selectedCategory || "";
            _this.selectedSalesUser = param.selectedSalesUser || "";
            _this.selectedProduct = param.selectedProduct || "";
            _this.firstTime = param.firstTime || false;
        });
    };
    AverageProductSalesComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("notlink");
        this.dtTrigger.unsubscribe();
    };
    AverageProductSalesComponent.prototype.getReportList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 100,
            order: [2, "asc"],
            scrollY: "450px",
            scrollX: true,
            scrollCollapse: true,
            serverSide: true,
            processing: true,
            searchDelay: 1500,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page =
                    parseInt(dataTablesParameters.start) /
                        parseInt(dataTablesParameters.length) +
                        1;
                dataTablesParameters.limit = dataTablesParameters.length;
                if (!_this.firstTime) {
                    dataTablesParameters.search_value = dataTablesParameters.search.value;
                    _this.searchValue = dataTablesParameters.search.value;
                }
                else if (_this.firstTime) {
                    dataTablesParameters.search_value = _this.searchValue;
                    $(".dataTables_filter input").val(_this.searchValue);
                    _this.firstTime = false;
                }
                // dataTablesParameters.name =
                //   dataTablesParameters.order[0].column == 0 &&
                //   dataTablesParameters.order[0].dir == "asc"
                //     ? "name"
                //     : "-name";
                // dataTablesParameters.order_quantity_recieved =
                //   dataTablesParameters.order[0].column == 1 &&
                //   dataTablesParameters.order[0].dir == "asc"
                //     ? "order_quantity_recieved"
                //     : "-order_quantity_recieved";
                // dataTablesParameters.average =
                //   dataTablesParameters.order[0].column == 2 &&
                //   dataTablesParameters.order[0].dir == "asc"
                //     ? "average"
                //     : "-average";
                var formData = new FormData();
                formData.append("page", dataTablesParameters.page.toString());
                formData.append("limit", dataTablesParameters.length);
                // filter
                _this.selectedFromDate
                    ? formData.append("from_date", _this.datePipe.transform(_this.selectedFromDate, "yyyy-MM-dd"))
                    : "";
                _this.selectedToDate
                    ? formData.append("to_date", _this.datePipe.transform(_this.selectedToDate, "yyyy-MM-dd"))
                    : "";
                formData.append("product_id", _this.selectedProduct);
                formData.append("category_id", _this.selectedCategory);
                formData.append("sales_user_id", _this.selectedSalesUser);
                formData.append("search_param", dataTablesParameters.search_value);
                dataTablesParameters.order[0].column == 0
                    ? formData.append("product_item_no", dataTablesParameters.order[0].column == 0 &&
                        dataTablesParameters.order[0].dir == "asc"
                        ? "product_item_no"
                        : "-product_item_no")
                    : "";
                dataTablesParameters.order[0].column == 1
                    ? formData.append("category_name", dataTablesParameters.order[0].column == 1 &&
                        dataTablesParameters.order[0].dir == "asc"
                        ? "category_name"
                        : "-category_name")
                    : "";
                dataTablesParameters.order[0].column == 2
                    ? formData.append("name", dataTablesParameters.order[0].column == 2 &&
                        dataTablesParameters.order[0].dir == "asc"
                        ? "name"
                        : "-name")
                    : "";
                dataTablesParameters.order[0].column == 3
                    ? formData.append("order_quantity_recieved", dataTablesParameters.order[0].column == 3 &&
                        dataTablesParameters.order[0].dir == "asc"
                        ? "order_quantity_recieved"
                        : "-order_quantity_recieved")
                    : "";
                dataTablesParameters.order[0].column == 4
                    ? formData.append("average", dataTablesParameters.order[0].column == 4 &&
                        dataTablesParameters.order[0].dir == "asc"
                        ? "average"
                        : "-average")
                    : "";
                _this.datatbaleData = dataTablesParameters;
                _this.reportsService.average_sales_report(formData).subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.reportList = resData.data.products;
                        // this.chartList = resData.data.chart.x;
                        // this.barChartData = [
                        //   {
                        //     //data: Array.prototype.map.call(resData.data.products, s => s.average),
                        //     data: resData.data.chart.x,
                        //     label: "Avarage Sale",
                        //   },
                        // ];
                        // //this.barChartLabels = Array.prototype.map.call(resData.data.products, s => s.name);
                        // this.barChartLabels = resData.data.chart.y;
                        // this.ChartOptions = {
                        //   responsive: true,
                        //   maintainAspectRatio: false,
                        //   tooltips: {
                        //     enabled: true,
                        //     intersect: true,
                        //     mode: "index",
                        //     position: "nearest",
                        //     xPadding: 20,
                        //     titleMarginBottom: 10,
                        //     titleFontSize: 15,
                        //     titleSpacing: 10,
                        //     bodyFontSize: 14,
                        //   },
                        //   scales: {
                        //     yAxes: [
                        //       {
                        //         ticks: {
                        //           beginAtZero: true,
                        //         },
                        //       },
                        //     ],
                        //   },
                        // };
                        setTimeout(function () {
                            var table = $("#excel-table").DataTable();
                            table.columns.adjust();
                            document.getElementById("last-header").style.width = "auto";
                        }, 10);
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: dataTablesParameters.search_value == ""
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
                { data: "product_item_no", searchable: true, orderable: true },
                { data: "category_name", searchable: true, orderable: true },
                { data: "name", searchable: true, orderable: true },
                { data: "order_quantity_recieved", searchable: true, orderable: true },
                { data: "average", searchable: true, orderable: true },
            ],
        };
    };
    AverageProductSalesComponent.prototype.getSalesUsers = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("page", "1");
        formData.append("limit", "10000");
        this.reportsService.userlist(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.salesPersonList = resData.data;
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    AverageProductSalesComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    AverageProductSalesComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    AverageProductSalesComponent.prototype.changeMonth = function () {
        this.rerender();
    };
    AverageProductSalesComponent.prototype.changeYear = function () {
        this.rerender();
    };
    AverageProductSalesComponent.prototype.exportTable = function (type) {
        var _this = this;
        var formData = new FormData();
        formData.append("page", "1");
        formData.append("limit", "10000");
        // filter
        this.selectedFromDate
            ? formData.append("from_date", this.datePipe.transform(this.selectedFromDate, "yyyy-MM-dd"))
            : "";
        this.selectedToDate
            ? formData.append("to_date", this.datePipe.transform(this.selectedToDate, "yyyy-MM-dd"))
            : "";
        formData.append("product_id", this.selectedProduct);
        formData.append("category_id", this.selectedCategory);
        formData.append("sales_user_id", this.selectedSalesUser);
        formData.append("search_param", this.datatbaleData.search_value);
        this.datatbaleData.order[0].column == 0
            ? formData.append("name", this.datatbaleData.name)
            : "";
        this.datatbaleData.order[0].column == 1
            ? formData.append("product_item_no", this.datatbaleData.product_item_no)
            : "";
        this.datatbaleData.order[0].column == 2
            ? formData.append("order_quantity_recieved", this.datatbaleData.order_quantity_recieved)
            : "";
        this.datatbaleData.order[0].column == 3
            ? formData.append("average", this.datatbaleData.average)
            : "";
        this.reportsService.average_sales_report(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.products.map(function (x) { return ({
                    "Item Number": x.product_item_no || "-",
                    "Category Name": x.category_name || "-",
                    "Product Name": x.name || "-",
                    "Number of product sold": x.order_quanity_recieved || "0",
                    "Average Sale (Average = Total Sum of All products / Number of product sold)": x.average || "0",
                }); });
                if (type == "pdf") {
                    var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                    var values = onlyNameAndSymbolArr.map(function (element) {
                        return Object.values(element);
                    });
                    _this.commonService.exportArrayPDF(keys, values, "avarageProductList");
                }
                else {
                    _this.commonService.exportCsv(resData.data.products, onlyNameAndSymbolArr, "avarageProductList");
                }
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    AverageProductSalesComponent.prototype.getProductDropdownData = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("page", "1");
        formData.append("limit", "100000");
        this.reportsService.productlist(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.productDropdownData = resData.data;
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    AverageProductSalesComponent.prototype.getCategoryDropdownData = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("page", "1");
        formData.append("limit", "100000");
        this.reportsService.categorieslist(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.categoryDropdownData = resData.data;
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    AverageProductSalesComponent.prototype.goToProductOrderPage = function (selectedProduct) {
        this.router.navigate(["/reports/product-order"], {
            queryParams: {
                id: selectedProduct,
                selectedFromDate: this.datePipe.transform(this.selectedFromDate, "MM/dd/yyyy"),
                selectedToDate: this.datePipe.transform(this.selectedToDate, "MM/dd/yyyy"),
                selectedCategory: this.selectedCategory,
                searchValue: this.searchValue,
                selectedSalesUser: this.selectedSalesUser,
                selectedProduct: this.selectedProduct,
            },
        });
    };
    AverageProductSalesComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("addmodal"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"])
    ], AverageProductSalesComponent.prototype, "addmodal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], AverageProductSalesComponent.prototype, "dtElement", void 0);
    AverageProductSalesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-average-product-sales",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./average-product-sales.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/average-product-sales/average-product-sales.component.html")).default,
            styles: [".chart-div {  } .chart-wrapper{ width: auto; overflow-x: scroll; }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], AverageProductSalesComponent);
    return AverageProductSalesComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/average-product-sales/product-order/product-order.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/reports/average-product-sales/product-order/product-order.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProductOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrderComponent", function() { return ProductOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");








var ProductOrderComponent = /** @class */ (function () {
    function ProductOrderComponent(reportsService, toastr, datePipe, router, route) {
        this.reportsService = reportsService;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.router = router;
        this.route = route;
        this.dtOptions = {};
        this.selectedProduct = "";
        this.selectedProductDropdown = "";
        this.selectedCategory = "";
        this.selectedSalesUser = "";
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.date = new Date();
        this.selectedFromDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        this.selectedToDate = new Date();
        this.searchValue = "";
        this.firstTime = false;
    }
    ProductOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (param) {
            _this.selectedProduct = param.id;
            _this.selectedFromDate = param.selectedFromDate;
            _this.selectedToDate = param.selectedToDate;
            _this.selectedFromDate = param.selectedFromDate || "";
            _this.selectedToDate = param.selectedToDate || "";
            _this.searchValue = param.searchValue || "";
            _this.selectedCategory = param.selectedCategory || "";
            _this.selectedSalesUser = param.selectedSalesUser || "";
            _this.selectedProductDropdown = param.selectedProduct || "";
            _this.firstTime = param.firstTime || false;
        });
        this.getProductOrderList(this.selectedProduct.toString());
        this.getStoreData();
        this.getSalesUsers();
    };
    ProductOrderComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("notlink");
        this.dtTrigger.unsubscribe();
    };
    ProductOrderComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ProductOrderComponent.prototype.rerenderModalTable = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    ProductOrderComponent.prototype.getProductOrderList = function (selectedProduct) {
        var _this = this;
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 100,
            //order: [1, 'desc'],
            serverSide: true,
            processing: true,
            searchDelay: 1300,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page =
                    parseInt(dataTablesParameters.start) /
                        parseInt(dataTablesParameters.length) +
                        1;
                dataTablesParameters.limit = dataTablesParameters.length;
                dataTablesParameters.search_value = dataTablesParameters.search.value;
                var formData = new FormData();
                formData.append("page", dataTablesParameters.page.toString());
                formData.append("limit", dataTablesParameters.length);
                // filter
                _this.selectedFromDate
                    ? formData.append("from_date", _this.datePipe.transform(_this.selectedFromDate, "yyyy-MM-dd"))
                    : "";
                _this.selectedToDate
                    ? formData.append("to_date", _this.datePipe.transform(_this.selectedToDate, "yyyy-MM-dd"))
                    : "";
                formData.append("product_id", _this.selectedProduct.toString());
                formData.append("sales_user_id", _this.selectedSalesUser.toString());
                formData.append("search_param", dataTablesParameters.search_value);
                dataTablesParameters.order[0].column == 0
                    ? formData.append("sort_field", "invoice_no")
                    : "";
                dataTablesParameters.order[0].column == 1
                    ? formData.append("sort_field", "order_created_date")
                    : "";
                dataTablesParameters.order[0].column == 2
                    ? formData.append("sort_field", "order_created_date")
                    : "";
                dataTablesParameters.order[0].column == 3
                    ? formData.append("sort_field", "store_name")
                    : "";
                dataTablesParameters.order[0].column == 4
                    ? formData.append("sort_field", "product_order_quantity")
                    : "";
                dataTablesParameters.order[0].column == 5
                    ? formData.append("sort_field", "product_original_price")
                    : "";
                dataTablesParameters.order[0].column == 6
                    ? formData.append("sort_field", "product_order_discount")
                    : "";
                dataTablesParameters.order[0].column == 7
                    ? formData.append("sort_field", "product_order_sales_price")
                    : "";
                dataTablesParameters.order[0].column == 8
                    ? formData.append("sort_field", "total_of_amount")
                    : "";
                // dataTablesParameters.order[0].column == 0 ? formData.append("sort_field", (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("invoice_no") : ("invoice_no")) : "";
                // dataTablesParameters.order[0].column == 1 ? formData.append("sort_field", (dataTablesParameters.order[0].column == 1 && dataTablesParameters.order[0].dir == "asc") ? ("order_created_date") : ("order_created_date")) : "";
                // dataTablesParameters.order[0].column == 2 ? formData.append("sort_field", (dataTablesParameters.order[0].column == 2 && dataTablesParameters.order[0].dir == "asc") ? ("order_created_date") : ("order_created_date")) : "";
                // dataTablesParameters.order[0].column == 3 ? formData.append("sort_field", (dataTablesParameters.order[0].column == 3 && dataTablesParameters.order[0].dir == "asc") ? ("store_name") : ("store_name")) : "";
                // dataTablesParameters.order[0].column == 4 ? formData.append("sort_field", (dataTablesParameters.order[0].column == 4 && dataTablesParameters.order[0].dir == "asc") ? ("product_order_quantity") : ("product_order_quantity")) : "";
                // dataTablesParameters.order[0].column == 5 ? formData.append("sort_field", (dataTablesParameters.order[0].column == 5 && dataTablesParameters.order[0].dir == "asc") ? ("product_original_price") : ("product_original_price")) : "";
                // dataTablesParameters.order[0].column == 6 ? formData.append("sort_field", (dataTablesParameters.order[0].column == 6 && dataTablesParameters.order[0].dir == "asc") ? ("product_order_discount") : ("product_order_discount")) : "";
                // dataTablesParameters.order[0].column == 7 ? formData.append("sort_field", (dataTablesParameters.order[0].column == 7 && dataTablesParameters.order[0].dir == "asc") ? ("total_of_amount") : ("total_of_amount")) : "";
                formData.append("sort_type", dataTablesParameters.order[0].dir);
                // this.datatbaleData = dataTablesParameters;
                _this.reportsService.get_product_orders(formData).subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.productOrderList = resData.data;
                        callback({
                            recordsTotal: resData.total_record,
                            recordsFiltered: dataTablesParameters.search_value == ""
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
                { data: "invoice_no", searchable: true, orderable: true },
                { data: "order_created_date", searchable: true, orderable: true },
                { data: "order_created_date", searchable: true, orderable: true },
                { data: "store_name", searchable: true, orderable: true },
                { data: "product_order_quantity", searchable: true, orderable: true },
                { data: "product_original_price", searchable: true, orderable: true },
                { data: "product_order_discount", searchable: true, orderable: true },
                {
                    data: "product_order_sales_price",
                    searchable: true,
                    orderable: true,
                },
                { data: "total_of_amount", searchable: true, orderable: true },
            ],
        };
    };
    ProductOrderComponent.prototype.getSalesUsers = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("page", "1");
        formData.append("limit", "10000");
        this.reportsService.userlist(formData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                _this.salesPersonList = resData.data;
            }
            else {
                _this.toastr.error("", resData.message);
            }
        }, function (err) {
            _this.toastr.error("", err.error.message);
        });
    };
    ProductOrderComponent.prototype.goBackToSalesByItemPage = function () {
        this.router.navigate(["/reports/sales-by-item-details"], {
            queryParams: {
                id: this.selectedProduct,
                selectedFromDate: this.datePipe.transform(this.selectedFromDate, "MM/dd/yyyy"),
                selectedToDate: this.datePipe.transform(this.selectedToDate, "MM/dd/yyyy"),
                selectedCategory: this.selectedCategory,
                searchValue: this.searchValue,
                selectedSalesUser: this.selectedSalesUser,
                selectedProduct: this.selectedProductDropdown,
                firstTime: true,
            },
        });
    };
    ProductOrderComponent.prototype.getStoreData = function () {
        var _this = this;
        this.reportsService.storelist().subscribe(function (response) {
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
    ProductOrderComponent.ctorParameters = function () { return [
        { type: _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_7__["ReportsService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], ProductOrderComponent.prototype, "dtElement", void 0);
    ProductOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-product-order",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/average-product-sales/product-order/product-order.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_7__["ReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductOrderComponent);
    return ProductOrderComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/initial-quantity-report/initial-quantity-report.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/reports/initial-quantity-report/initial-quantity-report.component.ts ***!
  \********************************************************************************************/
/*! exports provided: InitialQuantityReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialQuantityReportComponent", function() { return InitialQuantityReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");









var InitialQuantityReportComponent = /** @class */ (function () {
    function InitialQuantityReportComponent(titleService, toastr, reportsService, datePipe, commonService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.reportsService = reportsService;
        this.datePipe = datePipe;
        this.commonService = commonService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.selectedProduct = '';
    }
    InitialQuantityReportComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Initial Product Quantity Report");
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('notlink');
        this.getReportList();
        this.getProductDropdownData();
    };
    InitialQuantityReportComponent.prototype.getReportList = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 100,
            order: [0, 'desc'],
            serverSide: true,
            processing: true,
            searchDelay: 1300,
            ajax: function (dataTablesParameters, callback) {
                dataTablesParameters.page = parseInt(dataTablesParameters.start) / parseInt(dataTablesParameters.length) + 1;
                dataTablesParameters.limit = dataTablesParameters.length;
                dataTablesParameters.search_param = dataTablesParameters.search.value;
                // sorting
                dataTablesParameters.order[0].column == 0 ? dataTablesParameters.date = (dataTablesParameters.order[0].column == 0 && dataTablesParameters.order[0].dir == "asc") ? ("date") : ("-date") : "";
                dataTablesParameters.order[0].column == 1 ? dataTablesParameters.product_item_no = (dataTablesParameters.order[0].column == 1 && dataTablesParameters.order[0].dir == "asc") ? ("product_item_no") : ("-product_item_no") : "";
                dataTablesParameters.order[0].column == 2 ? dataTablesParameters.product__name = (dataTablesParameters.order[0].column == 2 && dataTablesParameters.order[0].dir == "asc") ? ("product__name") : ("-product__name") : "";
                dataTablesParameters.order[0].column == 3 ? dataTablesParameters.quantity = (dataTablesParameters.order[0].column == 3 && dataTablesParameters.order[0].dir == "asc") ? ("quantity") : ("-quantity") : "";
                dataTablesParameters.order[0].column == 4 ? dataTablesParameters.price = (dataTablesParameters.order[0].column == 4 && dataTablesParameters.order[0].dir == "asc") ? ("price") : ("-price") : "";
                dataTablesParameters.order[0].column == 5 ? dataTablesParameters.product__purchase_cost = (dataTablesParameters.order[0].column == 5 && dataTablesParameters.order[0].dir == "asc") ? ("product__purchase_cost") : ("-product__purchase_cost") : "";
                // filter
                dataTablesParameters.from_date = _this.datePipe.transform(_this.selectedFromDate, "yyyy-MM-dd");
                dataTablesParameters.to_date = _this.datePipe.transform(_this.selectedToDate, "yyyy-MM-dd");
                dataTablesParameters.filter_by_product = _this.selectedProduct;
                _this.datatbaleData = dataTablesParameters;
                _this.reportsService
                    .initial_reports(dataTablesParameters)
                    .subscribe(function (respones) {
                    var resData = JSON.parse(JSON.stringify(respones));
                    if (resData.status_code == 200) {
                        _this.reportList = resData.data;
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
                { data: 'date', searchable: true, orderable: true },
                { data: 'product_item_no', searchable: true, orderable: true },
                { data: 'product__name', searchable: true, orderable: true },
                { data: 'quantity', searchable: true, orderable: true },
                { data: 'price', searchable: true, orderable: true },
                { data: 'initial_purchase_price', searchable: true, orderable: true }
            ]
        };
    };
    InitialQuantityReportComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('notlink');
    };
    InitialQuantityReportComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    InitialQuantityReportComponent.prototype.rerender = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.destroy();
            _this.dtTrigger.next();
        });
    };
    InitialQuantityReportComponent.prototype.exportTable = function (type) {
        var _this = this;
        this.datatbaleData.page = "1";
        this.datatbaleData.limit = "100000";
        this.reportsService.initial_reports(this.datatbaleData).subscribe(function (response) {
            var resData = JSON.parse(JSON.stringify(response));
            if (resData.status_code == 200) {
                var onlyNameAndSymbolArr = resData.data.map(function (x) { return ({
                    'Date': _this.datePipe.transform(x.date, "MM-dd-yyyy"),
                    'Item Number': x.product_item_no || "-",
                    'Name': x.name || "-",
                    'Quantity': x.quantity || "-",
                    'Initial Product Selling Price': x.price ? "$ " + x.price : "$0",
                    'Initial Product Purchase Price': x.initial_purchase_price ? "$ " + x.initial_purchase_price : "$0"
                }); });
                if (type == 'pdf') {
                    var keys = [Object.keys(onlyNameAndSymbolArr[0])];
                    var values = onlyNameAndSymbolArr.map(function (element) { return Object.values(element); });
                    _this.commonService.exportArrayPDF(keys, values, 'initialQuanityReportList');
                }
                else {
                    _this.commonService.exportCsv(resData.data, onlyNameAndSymbolArr, 'initialQuanityReportList');
                }
            }
            else {
                _this.toastr.error('', resData.message);
            }
        }, function (err) {
            _this.toastr.error('', err.error.message);
        });
    };
    InitialQuantityReportComponent.prototype.exportPdf = function () {
    };
    InitialQuantityReportComponent.prototype.getProductDropdownData = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("page", "1");
        formData.append("limit", "100000");
        this.reportsService.productlist(formData).subscribe(function (response) {
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
    InitialQuantityReportComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], InitialQuantityReportComponent.prototype, "dtElement", void 0);
    InitialQuantityReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-initial-quantity-report',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./initial-quantity-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/initial-quantity-report/initial-quantity-report.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]])
    ], InitialQuantityReportComponent);
    return InitialQuantityReportComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/reports-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/reports/reports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _average_product_sales_product_order_product_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./average-product-sales/product-order/product-order.component */ "./src/app/views/reports/average-product-sales/product-order/product-order.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adjusted_quantity_report_adjusted_quantity_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adjusted-quantity-report/adjusted-quantity-report.component */ "./src/app/views/reports/adjusted-quantity-report/adjusted-quantity-report.component.ts");
/* harmony import */ var _aging_report_aging_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aging-report/aging-report.component */ "./src/app/views/reports/aging-report/aging-report.component.ts");
/* harmony import */ var _average_product_hands_average_product_hands_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./average-product-hands/average-product-hands.component */ "./src/app/views/reports/average-product-hands/average-product-hands.component.ts");
/* harmony import */ var _average_product_sales_average_product_sales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./average-product-sales/average-product-sales.component */ "./src/app/views/reports/average-product-sales/average-product-sales.component.ts");
/* harmony import */ var _initial_quantity_report_initial_quantity_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./initial-quantity-report/initial-quantity-report.component */ "./src/app/views/reports/initial-quantity-report/initial-quantity-report.component.ts");









var routes = [
    {
        path: '',
        data: {
            title: 'Reports'
        },
        children: [
            {
                path: '',
                data: {
                    title: 'List'
                }
            },
            {
                path: 'initial-quantity-report',
                component: _initial_quantity_report_initial_quantity_report_component__WEBPACK_IMPORTED_MODULE_8__["InitialQuantityReportComponent"],
                data: {
                    title: 'Initial Product Quantity Report'
                }
            },
            {
                path: 'adjusted-quantity-report',
                component: _adjusted_quantity_report_adjusted_quantity_report_component__WEBPACK_IMPORTED_MODULE_4__["AdjustedQuantityReportComponent"],
                data: {
                    title: 'Adjusted Quantity Report'
                }
            },
            {
                path: 'sales-by-item-details',
                // path: 'average-product-sales',
                component: _average_product_sales_average_product_sales_component__WEBPACK_IMPORTED_MODULE_7__["AverageProductSalesComponent"],
                data: {
                    title: 'Sales by Item Details'
                    // title: 'Average Product Sales Report'
                }
            },
            {
                path: 'product-order',
                component: _average_product_sales_product_order_product_order_component__WEBPACK_IMPORTED_MODULE_1__["ProductOrderComponent"],
                data: {
                    title: 'Product Order Details'
                }
            },
            {
                path: 'aging-report',
                component: _aging_report_aging_report_component__WEBPACK_IMPORTED_MODULE_5__["AgingReportComponent"],
                data: {
                    title: 'Aging Report'
                }
            },
            {
                path: 'average-product-hand',
                component: _average_product_hands_average_product_hands_component__WEBPACK_IMPORTED_MODULE_6__["AverageProductHandsComponent"],
                data: {
                    title: 'Average Product On Hand Report'
                }
            },
        ]
    }
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/reports/reports.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/reports/reports.component.ts ***!
  \****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(titleService) {
        this.titleService = titleService;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Reports");
        var body = document.getElementsByClassName('body')[0];
        body.classList.add('notlink');
    };
    ReportsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
    ]; };
    ReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/reports.component.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/views/reports/reports.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _average_product_sales_product_order_product_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./average-product-sales/product-order/product-order.component */ "./src/app/views/reports/average-product-sales/product-order/product-order.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports.component */ "./src/app/views/reports/reports.component.ts");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/views/reports/reports-routing.module.ts");
/* harmony import */ var _initial_quantity_report_initial_quantity_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initial-quantity-report/initial-quantity-report.component */ "./src/app/views/reports/initial-quantity-report/initial-quantity-report.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _adjusted_quantity_report_adjusted_quantity_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adjusted-quantity-report/adjusted-quantity-report.component */ "./src/app/views/reports/adjusted-quantity-report/adjusted-quantity-report.component.ts");
/* harmony import */ var _average_product_sales_average_product_sales_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./average-product-sales/average-product-sales.component */ "./src/app/views/reports/average-product-sales/average-product-sales.component.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _aging_report_aging_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./aging-report/aging-report.component */ "./src/app/views/reports/aging-report/aging-report.component.ts");
/* harmony import */ var _average_product_hands_average_product_hands_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./average-product-hands/average-product-hands.component */ "./src/app/views/reports/average-product-hands/average-product-hands.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");



















var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"], _initial_quantity_report_initial_quantity_report_component__WEBPACK_IMPORTED_MODULE_6__["InitialQuantityReportComponent"], _adjusted_quantity_report_adjusted_quantity_report_component__WEBPACK_IMPORTED_MODULE_9__["AdjustedQuantityReportComponent"], _average_product_sales_average_product_sales_component__WEBPACK_IMPORTED_MODULE_10__["AverageProductSalesComponent"], _aging_report_aging_report_component__WEBPACK_IMPORTED_MODULE_15__["AgingReportComponent"], _average_product_hands_average_product_hands_component__WEBPACK_IMPORTED_MODULE_16__["AverageProductHandsComponent"], _average_product_sales_product_order_product_order_component__WEBPACK_IMPORTED_MODULE_1__["ProductOrderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportsRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__["ModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_17__["InfiniteScrollModule"]
            ],
            providers: [
                _shared_services_reports_service__WEBPACK_IMPORTED_MODULE_13__["ReportsService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
            ]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-reports-reports-module.js.map