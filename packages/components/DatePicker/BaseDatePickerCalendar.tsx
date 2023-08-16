/* istanbul ignore file */
import * as React from "react";
import styles from "./BaseDatePickerCalendar.module.scss";
import classNames from "classnames";
import { useOnClickOutside, useOnKeyDown } from "../../hooks";
import {
  TfiAngleLeft,
  TfiAngleRight,
  TfiAngleDoubleRight,
  TfiAngleDoubleLeft,
} from "react-icons/tfi";
import {
  getCalendarDays,
  getNextDay,
  getNextWeek,
  getPreviousDay,
  getPreviousWeek,
} from "../../utility/getDatePickerCalendarUtilities";
import { DatePickerContext } from "./DatePickerContext";
import { Button } from "../Button";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { IconButton } from "../IconButton/IconButton";

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
export const BaseDatePickerCalendar: React.FC<BaseDatePickerCalendarProps> =
  (props) => {
    const { onClose, triggerRef } = props;

    const { selectedDate, setSelectedDate } =
      React.useContext(DatePickerContext);
    const [date, setDate] = React.useState<Date>(
      selectedDate ?? new Date()
    );
    const [focusedDate, setFocusedDate] = React.useState<number>(0);
    const [days, setDays] = React.useState<Array<number | null>>([]);
    const daysRefs = React.useRef<Array<HTMLButtonElement | null>>(
      []
    );
    const calendarRef = React.useRef<HTMLDivElement>(null);

    const headerLabels = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];

    const increaseMonth = () => {
      setDate(
        new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          date.getDate()
        )
      );
    };

    const increaseYear = () => {
      setDate(
        new Date(
          date.getFullYear() + 1,
          date.getMonth(),
          date.getDate()
        )
      );
    };

    const decreaseMonth = () => {
      setDate(
        new Date(
          date.getFullYear(),
          date.getMonth() - 1,
          date.getDate()
        )
      );
    };

    const decreaseYear = () => {
      setDate(
        new Date(
          date.getFullYear() - 1,
          date.getMonth(),
          date.getDate()
        )
      );
    };

    React.useEffect(() => {
      setDays(getCalendarDays(date));
      setFocusedDate(date.getDate());
    }, [date]);

    React.useEffect(() => {
      daysRefs.current[focusedDate]?.focus();
    }, [focusedDate]);

    useOnClickOutside([calendarRef, triggerRef], onClose);

    useOnKeyDown(["Escape"], onClose);

    return (
      <div
        className={styles.datePickerCalendarContainer}
        ref={calendarRef}
      >
        <FocusTrap>
          <div
            className={styles.datePickerCalendarNavigationContainer}
          >
            <div style={{ display: "flex", gap: "2px" }}>
              <IconButton
                content={<TfiAngleDoubleLeft />}
                size="medium"
                onClick={decreaseYear}
              />
              <IconButton
                content={<TfiAngleLeft />}
                size="medium"
                onClick={decreaseMonth}
              />
            </div>
            <div className={styles.datePickerCalendarNavigationMonth}>
              {`${date.toLocaleString("en-US", {
                month: "long",
              })} ${date.getFullYear()}`}
            </div>
            <div style={{ display: "flex", gap: "2px" }}>
              <IconButton
                content={<TfiAngleRight />}
                size="medium"
                onClick={increaseMonth}
              />
              <IconButton
                content={<TfiAngleDoubleRight />}
                size="medium"
                onClick={increaseYear}
              />
            </div>
          </div>
          <div className={styles.datePickerCalendarHeaderContainer}>
            {headerLabels.map((label, index) => {
              return (
                <div
                  className={styles.datePickerCalendarHeaderLabel}
                  key={index}
                >
                  {label}
                </div>
              );
            })}
          </div>
          <div className={styles.datePickerCalendarBodyContainer}>
            {days.map((day, index) => {
              if (day !== null) {
                const isSelected =
                  new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    day
                  ).getTime() === selectedDate?.getTime();

                const isToday =
                  new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    day
                  ).getTime() ===
                  new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate()
                  ).getTime();

                return (
                  <div
                    className={styles.datePickerCalendarDayContainer}
                    key={index}
                  >
                    <button
                      className={classNames(
                        styles.datePickerCalendarDay,
                        isSelected && styles.selected,
                        isToday && styles.today
                      )}
                      tabIndex={day === date.getDate() ? 0 : -1}
                      onClick={() => {
                        setSelectedDate(
                          new Date(
                            date.getFullYear(),
                            date.getMonth(),
                            day
                          )
                        );
                        onClose();
                      }}
                      onKeyDown={(event) => {
                        const { code } = event;

                        const keyCodesToGet = {
                          ArrowUp: getPreviousWeek,
                          ArrowDown: getNextWeek,
                          ArrowLeft: getPreviousDay,
                          ArrowRight: getNextDay,
                        };

                        if (code in keyCodesToGet) {
                          event.preventDefault();
                          setDate(keyCodesToGet[code]);
                        }

                        if (code === "Enter") {
                          setSelectedDate(
                            new Date(
                              date.getFullYear(),
                              date.getMonth(),
                              day
                            )
                          );
                          onClose();
                        }
                      }}
                      ref={(el) => (daysRefs.current[day] = el)}
                    >
                      {day}
                    </button>
                  </div>
                );
              } else {
                return (
                  <div
                    className={styles.datePickerCalendarDayContainer}
                    key={index}
                  />
                );
              }
            })}
          </div>
          <div className={styles.buttonContainer}>
            <Button onClick={() => setSelectedDate(undefined)}>
              Clear
            </Button>
          </div>
        </FocusTrap>
      </div>
    );
  };

BaseDatePickerCalendar.displayName = "BaseDatePickerCalendar";
