import * as React from "react";
export interface BaseDatePickerCalendarProps {
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
export declare const BaseDatePickerCalendar: React.FC<BaseDatePickerCalendarProps>;
