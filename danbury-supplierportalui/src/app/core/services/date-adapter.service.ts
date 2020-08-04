import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DateAdapterService extends NativeDateAdapter {
  /**
   * display the date in specific format
   * @param date date of type Date
   * @param displayFormat display format for date
   */
  format(date: Date, displayFormat: any): string {
    /**check the conditon */
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${year}-${this._to2digit(month)}-${this._to2digit(day)}`;

    } else {
      return date.toDateString();
    }
  }
  /**method to convert the value to two digit format */
  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}
