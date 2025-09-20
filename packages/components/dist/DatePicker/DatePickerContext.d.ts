import * as React from "react";
export interface DaterPickerContext {
    selectedDate: Date | undefined;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
/**
 * @private
 */
export declare const DatePickerContext: React.Context<DaterPickerContext>;
