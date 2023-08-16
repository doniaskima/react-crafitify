/* istanbul ignore file */
import * as React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { TextField } from "../TextField";
import styles from "./DateRangePicker.module.scss";
import { DateRangePickerCalendars } from "./DateRangePickerCalendars";
import { DateRangePickerContext } from "./DateRangePickerContext";

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
export const DateRangePicker: React.FC<DateRangePickerProps> = (
  props
) => {
  const { selected } = props;

  const startTriggerRef = React.useRef<HTMLDivElement>(null);
  const endTriggerRef = React.useRef<HTMLDivElement>(null);

  const [selectedDate, setSelectedDate] =
    React.useState<Date | undefined>(selected);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <DateRangePickerContext.Provider
      value={{
        selectedDate: selectedDate,
        setSelectedDate: setSelectedDate,
      }}
    >
      <div style={{ display: "flex" }}>
        <TextField
          className={styles.customInput}
          onChange={() => undefined}
          label="Start Date"
          trailingIcon={
            <div
              style={{ maxWidth: "34px", maxHeight: "34px" }}
              ref={startTriggerRef}
            >
              <AiFillCalendar
                className={styles.datePickerIconContainer}
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={(event) => {
                  if (event.code === "Enter") {
                    setIsOpen(!isOpen);
                  }
                }}
                size={21}
                tabIndex={0}
              />
            </div>
          }
        />
        <TextField
          className={styles.customInput}
          onChange={() => undefined}
          label="End Date"
          trailingIcon={
            <div
              style={{ maxWidth: "34px", maxHeight: "34px" }}
              ref={endTriggerRef}
            >
              <AiFillCalendar
                className={styles.datePickerIconContainer}
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={(event) => {
                  if (event.code === "Enter") {
                    setIsOpen(!isOpen);
                  }
                }}
                size={21}
                tabIndex={0}
              />
            </div>
          }
        />
      </div>
      <DateRangePickerCalendars
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        triggerRefs={[startTriggerRef, endTriggerRef]}
      />
    </DateRangePickerContext.Provider>
  );
};

DateRangePicker.displayName = "DateRangePicker";
