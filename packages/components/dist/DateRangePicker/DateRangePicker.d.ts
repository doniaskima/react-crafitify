import * as React from 'react';
export interface DateRangePickerProps {
  /**
   * The initial selected date for the DateRangePicker
   */
  selected?: Date;
}
/**
 * @public
 *
 * @description
 *
 * The Date Range Picker component allows a user to select a range of dates.
 */
export declare const DateRangePicker: React.FC<DateRangePickerProps>;
