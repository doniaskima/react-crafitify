import * as React from "react";
export interface DateRangePickerCalendarsProps {
    /**
     * If the DateRangePickerCalendars is open
     */
    isOpen: boolean;
    /**
     * The callback fired when the DateRangePickerCalendars requests to close
     */
    onClose: () => void;
    /**
     * The refs for both triggers of the DateRangePicke
     */
    triggerRefs: React.RefObject<HTMLDivElement>[];
}
/**
 * @private
 */
export declare const DateRangePickerCalendars: React.FC<DateRangePickerCalendarsProps>;
