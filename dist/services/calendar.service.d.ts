import { CalendarDay, CalendarMonth, CalendarOriginal, CalendarResult, InternalCalendarModalOptions } from '../calendar.model';
import * as i0 from "@angular/core";
export declare class CalendarService {
    private readonly defaultOpts;
    static readonly DEFAULT_DATE: Date;
    constructor(defaultOpts: InternalCalendarModalOptions);
    get DEFAULT_STEP(): number;
    safeOpt(calendarOptions?: any): InternalCalendarModalOptions;
    createOriginalCalendar(time: number): CalendarOriginal;
    findDayConfig(day: any, opt: InternalCalendarModalOptions): any;
    createCalendarDay(time: number, opt: InternalCalendarModalOptions, month?: number): CalendarDay;
    createCalendarMonth(original: CalendarOriginal, opt: InternalCalendarModalOptions): CalendarMonth;
    createMonthsByPeriod(startTime: number, monthsNum: number, opt: InternalCalendarModalOptions): Array<CalendarMonth>;
    createSubsctractMonthsByPeriod(startTime: number, monthsNum: number, opt: InternalCalendarModalOptions): Array<CalendarMonth>;
    wrapResult(original: Array<CalendarDay>, pickMode: string | undefined): CalendarDay[] | CalendarResult | CalendarResult[] | {
        from: CalendarResult;
        to: CalendarResult;
    };
    multiFormat(time: number): CalendarResult;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CalendarService>;
}
