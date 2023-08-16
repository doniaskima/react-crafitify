/* istanbul ignore file */
import * as React from "react";

export interface DaterRangePickerContext {
  selectedDate: Date | undefined;
  setSelectedDate: React.Dispatch<
    React.SetStateAction<Date | undefined>
  >;
}

export const DateRangePickerContext =
  React.createContext<DaterRangePickerContext>({
    selectedDate: undefined,
    setSelectedDate: () => undefined,
  });
