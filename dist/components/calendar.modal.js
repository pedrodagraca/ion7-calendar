"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarModal = void 0;
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var calendar_service_1 = require("../services/calendar.service");
var moment = require("moment");
var config_1 = require("../config");
var i0 = require("@angular/core");
var i1 = require("@ionic/angular");
var i2 = require("../services/calendar.service");
var i3 = require("@angular/common");
var i4 = require("@angular/forms");
var i5 = require("./calendar-week.component");
var i6 = require("./month.component");
var _c0 = ["months"];
function CalendarModal_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "h4", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ion-calendar-month", 11);
    i0.ɵɵlistener("change", function CalendarModal_ng_template_12_Template_ion_calendar_month_change_3_listener($event) { i0.ɵɵrestoreView(_r5); var ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onChange($event)); })("ngModelChange", function CalendarModal_ng_template_12_Template_ion_calendar_month_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); var ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.datesTemp = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    var month_r2 = ctx.$implicit;
    var i_r3 = ctx.index;
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("month-invisible", !ctx_r1.scrolledToInitialPosition);
    i0.ɵɵattribute("data-month", ctx_r1._monthFormatYYYYMM(month_r2.original.date))("id", "month-" + i_r3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1._monthFormat(month_r2.original.date));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("month", month_r2)("pickMode", ctx_r1._d.pickMode || "")("isSaveHistory", ctx_r1._d.isSaveHistory || false)("id", ctx_r1._d.id)("color", ctx_r1._d.color || "")("ngModel", ctx_r1.datesTemp);
} }
var _c1 = [[["", "sub-header", ""]]];
var _c2 = function () { return []; };
var _c3 = function (a0) { return { "multi-selection": a0 }; };
var _c4 = ["[sub-header]"];
var NUM_OF_MONTHS_TO_CREATE = 6;
var CalendarModal = /** @class */ (function () {
    function CalendarModal(_renderer, _elementRef, params, modalCtrl, ref, calSvc) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.ref = ref;
        this.calSvc = calSvc;
        this.ionPage = true;
        // @ts-ignore
        this.datesTemp = [null, null];
        this.scrolledToInitialPosition = false;
        this._scrollLock = false;
        this.prependingMonths = false;
    }
    CalendarModal.prototype.ngOnInit = function () {
        this.init();
        this.initDefaultDate();
    };
    CalendarModal.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.findCssClass();
                        if (!this._d.canBackwardsSelected) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.backwardsMonth()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.scrollToDefaultDate()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CalendarModal.prototype.init = function () {
        this._d = this.calSvc.safeOpt(this.options);
        this._d.showAdjacentMonthDay = false;
        this.step = this._d.step;
        if (this.step < this.calSvc.DEFAULT_STEP) {
            this.step = this.calSvc.DEFAULT_STEP;
        }
        var dateToUse = this.getDateToUse();
        this.calendarMonths = this.calSvc.createMonthsByPeriod(moment(dateToUse).startOf('month').subtract(2, 'months').valueOf(), this.findInitMonthNumber(this._d.defaultScrollTo, dateToUse) + this.step, this._d);
    };
    CalendarModal.prototype.initDefaultDate = function () {
        var _this = this;
        var _a = this._d, pickMode = _a.pickMode, defaultDate = _a.defaultDate, defaultDateRange = _a.defaultDateRange, defaultDates = _a.defaultDates;
        if (pickMode === config_1.pickModes.SINGLE) {
            if (defaultDate) {
                this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDate), this._d);
            }
        }
        else if (pickMode === config_1.pickModes.RANGE) {
            if (defaultDateRange) {
                if (defaultDateRange.from) {
                    this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.from), this._d);
                }
                if (defaultDateRange.to) {
                    this.datesTemp[1] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.to), this._d);
                }
            }
        }
        else if (pickMode === config_1.pickModes.MULTI) {
            if (defaultDates && defaultDates.length) {
                this.datesTemp = defaultDates.map(function (e) { return _this.calSvc.createCalendarDay(_this._getDayTime(e), _this._d); });
            }
        }
        else {
            // @ts-ignore
            this.datesTemp = [null, null];
        }
    };
    CalendarModal.prototype.findCssClass = function () {
        var _this = this;
        var cssClass = this._d.cssClass;
        if (cssClass) {
            cssClass.split(' ').forEach(function (_class) {
                if (_class.trim() !== '')
                    _this._renderer.addClass(_this._elementRef.nativeElement, _class);
            });
        }
    };
    CalendarModal.prototype.onChange = function (data) {
        var _a = this._d, pickMode = _a.pickMode, autoDone = _a.autoDone;
        this.datesTemp = data;
        this.ref.detectChanges();
        if (pickMode !== config_1.pickModes.MULTI && autoDone && this.canDone()) {
            this.done();
        }
        this.repaintDOM();
    };
    CalendarModal.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    CalendarModal.prototype.done = function () {
        var pickMode = this._d.pickMode;
        this.modalCtrl.dismiss(this.calSvc.wrapResult(this.datesTemp, pickMode), 'done');
    };
    CalendarModal.prototype.canDone = function () {
        if (!Array.isArray(this.datesTemp)) {
            return false;
        }
        var _a = this._d, pickMode = _a.pickMode, defaultEndDateToStartDate = _a.defaultEndDateToStartDate;
        if (pickMode === config_1.pickModes.SINGLE) {
            return !!(this.datesTemp[0] && this.datesTemp[0].time);
        }
        else if (pickMode === config_1.pickModes.RANGE) {
            if (defaultEndDateToStartDate) {
                return !!(this.datesTemp[0] && this.datesTemp[0].time);
            }
            return !!(this.datesTemp[0] && this.datesTemp[1]) && !!(this.datesTemp[0].time && this.datesTemp[1].time);
        }
        else if (pickMode === config_1.pickModes.MULTI) {
            return this.datesTemp.length > 0 && this.datesTemp.every(function (e) { return !!e && !!e.time; });
        }
        else {
            return false;
        }
    };
    CalendarModal.prototype.clear = function () {
        // @ts-ignore
        this.datesTemp = [null, null];
        this.modalCtrl.dismiss(null, 'clear');
    };
    CalendarModal.prototype.canClear = function () {
        return !!this.datesTemp[0];
    };
    CalendarModal.prototype.nextMonth = function (event) {
        var _a;
        if (this.prependingMonths) {
            return;
        }
        var len = this.calendarMonths.length;
        var final = this.calendarMonths[len - 1];
        var nextTime = moment(final.original.time).add(1, 'M').valueOf();
        var rangeEnd = this._d.to ? moment(this._d.to).subtract(1, 'M') : 0;
        if (len <= 0 || (rangeEnd !== 0 && moment(final.original.time).isAfter(rangeEnd))) {
            event.target.disabled = true;
            return;
        }
        (_a = this.calendarMonths).push.apply(_a, this.calSvc.createMonthsByPeriod(nextTime, NUM_OF_MONTHS_TO_CREATE, this._d));
        event.target.complete();
        this.repaintDOM();
    };
    CalendarModal.prototype.backwardsMonth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var first, firstTime;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        first = this.calendarMonths[0];
                        if (first.original.time <= 0) {
                            this._d.canBackwardsSelected = false;
                            return [2 /*return*/];
                        }
                        firstTime = (this.actualFirstTime = moment(first.original.time)
                            .subtract(NUM_OF_MONTHS_TO_CREATE, 'M')
                            .valueOf());
                        (_a = this.calendarMonths).unshift.apply(_a, this.calSvc.createMonthsByPeriod(firstTime, NUM_OF_MONTHS_TO_CREATE, this._d));
                        this.ref.detectChanges();
                        return [4 /*yield*/, this.repaintDOM()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CalendarModal.prototype.scrollToDate = function (date) {
        return __awaiter(this, void 0, void 0, function () {
            var dateToUse, monthSelector, element, offsetMargin, defaultMonthScrollPosition, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dateToUse = this.getDateToUse();
                        monthSelector = moment(dateToUse).format('YYYY-MM');
                        element = document.querySelector("[data-month=\"".concat(monthSelector, "\"]"));
                        if (!element) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        this._scrollLock = true;
                        return [4 /*yield*/, this.waitForElementTop(element)];
                    case 2:
                        _a.sent();
                        offsetMargin = 10;
                        defaultMonthScrollPosition = element.offsetTop - offsetMargin;
                        return [4 /*yield*/, this.content.scrollToPoint(0, defaultMonthScrollPosition, 10)];
                    case 3:
                        _a.sent();
                        this._scrollLock = false;
                        this.scrolledToInitialPosition = true;
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        this._scrollLock = false;
                        this.scrolledToInitialPosition = true;
                        console.error("Could not scroll to month with index: ".concat(monthSelector));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CalendarModal.prototype.waitForElementTop = function (element, timeout) {
        if (timeout === void 0) { timeout = 2000; }
        return __awaiter(this, void 0, void 0, function () {
            var start, now;
            return __generator(this, function (_a) {
                start = Date.now();
                now = 0;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var interval = setInterval(function () {
                            if (element.offsetTop) {
                                clearInterval(interval);
                                resolve(element);
                            }
                            now = Date.now();
                            if (now - start >= timeout) {
                                reject("Could not find the element  within ".concat(timeout, " ms"));
                            }
                        }, 50);
                    })];
            });
        });
    };
    CalendarModal.prototype.scrollToDefaultDate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.scrollToDate(this._d.defaultScrollTo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CalendarModal.prototype.onScroll = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var threshold, scrollElem, currentY, isOnTopOfScreen, heightBeforeMonthPrepend, heightAfterMonthPrepend, heightAdded, scrollPositionToGo;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._scrollLock || this.prependingMonths) {
                            return [2 /*return*/];
                        }
                        threshold = 100;
                        return [4 /*yield*/, this.content.getScrollElement()];
                    case 1:
                        scrollElem = _a.sent();
                        currentY = $event.detail.scrollTop;
                        isOnTopOfScreen = currentY < threshold;
                        if (!isOnTopOfScreen) {
                            return [2 /*return*/];
                        }
                        this.prependingMonths = true;
                        this._scrollLock = true;
                        heightBeforeMonthPrepend = scrollElem.scrollHeight;
                        return [4 /*yield*/, this.backwardsMonth()];
                    case 2:
                        _a.sent();
                        heightAfterMonthPrepend = scrollElem.scrollHeight;
                        heightAdded = heightAfterMonthPrepend - heightBeforeMonthPrepend;
                        scrollPositionToGo = heightAdded + 100;
                        return [4 /*yield*/, this.content.scrollToPoint(0, scrollPositionToGo, 1)];
                    case 3:
                        _a.sent();
                        this._scrollLock = false;
                        setTimeout(function () {
                            _this.prependingMonths = false;
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * In some older Safari versions (observed at Mac's Safari 10.0), there is an issue where style updates to
     * shadowRoot descendants don't cause a browser repaint.
     * See for more details: https://github.com/Polymer/polymer/issues/4701
     */
    CalendarModal.prototype.repaintDOM = function () {
        var _this = this;
        return this.content.getScrollElement().then(function (scrollElem) {
            // Update scrollElem to ensure that height of the container changes as Months are appended/prepended
            scrollElem.style.zIndex = '2';
            scrollElem.style.zIndex = 'initial';
            // Update monthsEle to ensure selected state is reflected when tapping on a day
            _this.monthsEle.nativeElement.style.zIndex = '2';
            _this.monthsEle.nativeElement.style.zIndex = 'initial';
        });
    };
    CalendarModal.prototype.findInitMonthNumber = function (date, fromDate) {
        if (fromDate === void 0) { fromDate = this._d.from; }
        var startDate = this.actualFirstTime ? moment(this.actualFirstTime) : moment(fromDate);
        var defaultScrollTo = moment(date);
        var isAfter = defaultScrollTo.isAfter(startDate);
        if (!isAfter)
            return -1;
        if (this.showYearPicker) {
            startDate = moment(new Date(this.year, 0, 1));
        }
        return defaultScrollTo.diff(startDate, 'month');
    };
    CalendarModal.prototype._getDayTime = function (date) {
        return moment(moment(date).format('YYYY-MM-DD')).valueOf();
    };
    CalendarModal.prototype._monthFormat = function (date) {
        // @ts-ignore
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
    };
    CalendarModal.prototype._monthFormatYYYYMM = function (date) {
        // @ts-ignore
        return moment(date).format('YYYY-MM');
    };
    CalendarModal.prototype.trackByIndex = function (index, momentDate) {
        return momentDate.original ? momentDate.original.time : index;
    };
    CalendarModal.prototype.getDateToUse = function () {
        var date = this._d.defaultDate || this._d.defaultScrollTo;
        return date ? moment(date).toDate() : this._d.defaultFrom;
    };
    CalendarModal.ɵfac = function CalendarModal_Factory(t) { return new (t || CalendarModal)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NavParams), i0.ɵɵdirectiveInject(i1.ModalController), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.CalendarService)); };
    CalendarModal.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CalendarModal, selectors: [["ion-calendar-modal"]], viewQuery: function CalendarModal_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(angular_1.IonContent, 5);
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.monthsEle = _t.first);
        } }, hostVars: 2, hostBindings: function CalendarModal_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ion-page", ctx.ionPage);
        } }, inputs: { options: "options" }, ngContentSelectors: _c4, decls: 15, vars: 12, consts: [[3, "color"], ["slot", "end"], ["type", "button", "slot", "icon-only", "fill", "clear", 3, "click"], ["name", "close"], [3, "color", "weekArray", "weekStart"], [1, "calendar-page", 3, "scrollEvents", "ngClass", "ionScroll"], ["months", ""], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["threshold", "25%", "position", "bottom", 3, "ionInfinite"], [1, "month-box"], [1, "text-center", "month-title"], [3, "month", "pickMode", "isSaveHistory", "id", "color", "ngModel", "change", "ngModelChange"]], template: function CalendarModal_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "ion-buttons", 1)(5, "ion-button", 2);
            i0.ɵɵlistener("click", function CalendarModal_Template_ion_button_click_5_listener() { return ctx.onCancel(); });
            i0.ɵɵelement(6, "ion-icon", 3);
            i0.ɵɵelementEnd()()();
            i0.ɵɵprojection(7);
            i0.ɵɵelement(8, "ion-calendar-week", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "ion-content", 5);
            i0.ɵɵlistener("ionScroll", function CalendarModal_Template_ion_content_ionScroll_9_listener($event) { return ctx.onScroll($event); });
            i0.ɵɵelementStart(10, "div", null, 6);
            i0.ɵɵtemplate(12, CalendarModal_ng_template_12_Template, 4, 11, "ng-template", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "ion-infinite-scroll", 8);
            i0.ɵɵlistener("ionInfinite", function CalendarModal_Template_ion_infinite_scroll_ionInfinite_13_listener($event) { return ctx.nextMonth($event); });
            i0.ɵɵelement(14, "ion-infinite-scroll-content");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("color", ctx._d.color || "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx._d.title);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("color", ctx._d.color || "")("weekArray", ctx._d.weekdays || i0.ɵɵpureFunction0(9, _c2))("weekStart", ctx._d.weekStart || 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("scrollEvents", true)("ngClass", i0.ɵɵpureFunction1(10, _c3, ctx._d.pickMode === "multi"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.calendarMonths)("ngForTrackBy", ctx.trackByIndex);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i1.IonButton, i1.IonButtons, i1.IonContent, i1.IonHeader, i1.IonIcon, i1.IonInfiniteScroll, i1.IonInfiniteScrollContent, i1.IonTitle, i1.IonToolbar, i4.NgControlStatus, i4.NgModel, i5.CalendarWeekComponent, i6.MonthComponent], styles: ["[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n[_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%]    > .select-icon-inner[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]   ion-select.select-ios[_ngcontent-%COMP%] {\n  max-width: unset;\n}\n\n[_nghost-%COMP%]   .calendar-page[_ngcontent-%COMP%] {\n  background-color: #fbfbfb;\n}\n\n[_nghost-%COMP%]   .month-box[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1.1rem;\n  display: block;\n  text-align: center;\n  margin: 1rem 0 0;\n  color: #929292;\n}\n\n[_nghost-%COMP%]   .month-invisible[_ngcontent-%COMP%] {\n  opacity: 0;\n}"] });
    return CalendarModal;
}());
exports.CalendarModal = CalendarModal;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarModal, [{
        type: core_1.Component,
        args: [{ selector: 'ion-calendar-modal', template: "\n    <ion-header>\n      <ion-toolbar [color]=\"_d.color || ''\">\n        <ion-title>{{ _d.title }}</ion-title>\n\n        <ion-buttons slot=\"end\">\n          <ion-button type=\"button\" slot=\"icon-only\" fill=\"clear\" (click)=\"onCancel()\">            \n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>     \n        </ion-buttons>\n      </ion-toolbar>\n\n      <ng-content select=\"[sub-header]\"></ng-content>\n\n      <ion-calendar-week [color]=\"_d.color || ''\" [weekArray]=\"_d.weekdays || []\" [weekStart]=\"_d.weekStart || 1\">\n      </ion-calendar-week>\n    </ion-header>\n\n    <ion-content\n      (ionScroll)=\"onScroll($event)\"\n      class=\"calendar-page\"\n      [scrollEvents]=\"true\"\n      [ngClass]=\"{ 'multi-selection': _d.pickMode === 'multi' }\">\n      <div #months>\n        <ng-template ngFor let-month [ngForOf]=\"calendarMonths\" [ngForTrackBy]=\"trackByIndex\" let-i=\"index\">\n          <div class=\"month-box\"\n               [class.month-invisible]=\"!scrolledToInitialPosition\"\n               [attr.data-month]=\"_monthFormatYYYYMM(month.original.date)\"\n               [attr.id]=\"'month-' + i\">\n            <h4 class=\"text-center month-title\">{{ _monthFormat(month.original.date) }}</h4>\n            <ion-calendar-month\n              [month]=\"month\"\n              [pickMode]=\"_d.pickMode || ''\"\n              [isSaveHistory]=\"_d.isSaveHistory || false\"\n              [id]=\"_d.id\"\n              [color]=\"_d.color || ''\"\n              (change)=\"onChange($event)\"\n              [(ngModel)]=\"datesTemp\">\n            </ion-calendar-month>\n          </div>\n        </ng-template>\n      </div>\n\n      <ion-infinite-scroll threshold=\"25%\" (ionInfinite)=\"nextMonth($event)\" position=\"bottom\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-content>\n  ", styles: [":host ion-select {\n  max-width: unset;\n}\n\n:host ion-select .select-icon > .select-icon-inner,\n:host ion-select .select-text {\n  color: #fff !important;\n}\n\n:host ion-select.select-ios {\n  max-width: unset;\n}\n\n:host .calendar-page {\n  background-color: #fbfbfb;\n}\n\n:host .month-box {\n  display: inline-block;\n  width: 100%;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n:host h4 {\n  font-weight: 400;\n  font-size: 1.1rem;\n  display: block;\n  text-align: center;\n  margin: 1rem 0 0;\n  color: #929292;\n}\n\n:host .month-invisible {\n  opacity: 0;\n}"] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.NavParams }, { type: i1.ModalController }, { type: i0.ChangeDetectorRef }, { type: i2.CalendarService }]; }, { content: [{
            type: core_1.ViewChild,
            args: [angular_1.IonContent]
        }], monthsEle: [{
            type: core_1.ViewChild,
            args: ['months']
        }], ionPage: [{
            type: core_1.HostBinding,
            args: ['class.ion-page']
        }], options: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=calendar.modal.js.map