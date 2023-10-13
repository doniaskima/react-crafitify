import * as React from "react";
export interface DatePickerProps extends React.ComponentPropsWithoutRef<"div"> {
    /**
     * The initial selected date for the DatePicker
     */
    selected?: Date;
    /**
     * The callback fired when requested to change the value for the DatePicker
     */
    setValue: React.Dispatch<React.SetStateAction<string>>;
    /**
     * The value for the DatePicker
     */
    value?: string;
}
/**
 * @public
 *
 * @description
 *
 * The Date Picker allows users to select a date on a calendar.
 */
export declare const DatePicker: React.FC<DatePickerProps>;
