/* istanbul ignore file */
import * as React from "react";

export interface DaterPickerContext {
  selectedDate: Date | undefined;
  setSelectedDate: React.Dispatch<
    React.SetStateAction<Date | undefined>
  >;
}

/**
 * @private
 */
export const DatePickerContext =
  React.createContext<DaterPickerContext>({
    selectedDate: undefined,
    setSelectedDate: () => undefined,
  });
