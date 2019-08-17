import {addMinutes, format, subMinutes, differenceInCalendarDays} from 'date-fns';
import * as localeEn from 'date-fns/locale/en';


export class DateUtil {
    static SERVER_DATE_FORMAT = 'YYYY-MM-dd';

    static format(date: Date) {
        if (date) {
            return format(date, this.SERVER_DATE_FORMAT, {locale: localeEn});
        }
        return null;
    }

    static differentDays(date1: Date, date2: Date) {
        return differenceInCalendarDays(date1, date2);
    }

    static browserDateToUtc(date: Date): string {
        const offset = date.getTimezoneOffset();

        const utcDate = Math.sign(offset) !== -1 ? addMinutes(date, offset) : subMinutes(date, Math.abs(offset));
        return utcDate.toISOString();
    }

    /**
     * @param date Date is browser date as normal.
     */
    static browserDateToUtc1(date: Date): string {
        return date.toISOString();
    }

    static rangeDate(date: Date, isFromDate: boolean): Date {
        if (!date) {
            return date;
        }
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + (isFromDate ? 0 : 1), 0, 0, 0);
    }

    static buildListMonth({month, year}) {
        const rs = [];
        const now = new Date();
        const fromDate = new Date(year, month - 1, 1, 0, 0, 0, 0);
        while (fromDate.getTime() < now.getTime()) {
            rs.push({
                month: fromDate.getMonth() + 1,
                year: fromDate.getFullYear(),
                date: new Date(fromDate.getTime())
            });
            fromDate.setMonth(fromDate.getMonth() + 1);
        }

        return rs;
    }
}
