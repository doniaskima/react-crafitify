import * as React from 'react';
export interface DaterRangePickerContext {
  selectedDate: Date | undefined;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
export declare const DateRangePickerContext: React.Context<DaterRangePickerContext>;
