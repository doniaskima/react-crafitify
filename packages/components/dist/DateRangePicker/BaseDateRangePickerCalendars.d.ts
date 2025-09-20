import * as React from "react";
export interface BaseDateRangePickerCalendarsProps {
    /**
     * The callback fired when the DatePickerCalendar requests to close
     */
    onClose: () => void;
    /**
     * The trigger ref for the DatePicker
     */
    triggerRefs: React.RefObject<HTMLDivElement>[];
}
/**
 * @private
 */
export declare const BaseDateRangePickerCalendars: React.FC<BaseDateRangePickerCalendarsProps>;
