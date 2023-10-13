import * as React from "react";
export interface DatePickerCalendarProps {
    /**
     * If the DatePickerCalendar is open
     *
     * @default false
     */
    isOpen?: boolean;
    /**
     * The callback fired when the DatePickerCalendar requests to close
     */
    onClose: () => void;
    /**
     * The trigger ref for the DatePicker
     */
    triggerRef: React.RefObject<HTMLButtonElement>;
}
/**
 * @private
 */
export declare const DatePickerCalendar: React.FC<DatePickerCalendarProps>;
