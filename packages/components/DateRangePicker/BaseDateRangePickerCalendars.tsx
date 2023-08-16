/* istanbul ignore file */
import * as React from "react";
import styles from "./BaseDateRangePickerCalendars.module.scss";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import {
  TfiAngleLeft,
  TfiAngleRight,
  TfiAngleDoubleRight,
  TfiAngleDoubleLeft,
} from "react-icons/tfi";
import { IconButton } from "../IconButton/IconButton";
//import { DateRangePickerContext } from "./DateRangePickerContext";

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
export const BaseDateRangePickerCalendars: React.FC<BaseDateRangePickerCalendarsProps> =
  (props) => {
    const { onClose, triggerRefs } = props;

    // const { selectedDate, setSelectedDate } = React.useContext(
    //   DateRangePickerContext
    // );

    const [date, setDate] = React.useState<Date>(new Date());

    const calendarsRef = React.useRef<HTMLDivElement>(null);

    useOnClickOutside([calendarsRef, ...triggerRefs], () =>
      onClose()
    );

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

    return (
      <div
        className={styles.dateRangePickerCalendarsContainer}
        ref={calendarsRef}
      >
        <FocusTrap>
          <div
            className={
              styles.dateRangePickerCalendarNavigationContainer
            }
          >
            <div style={{ display: "flex", gap: "2px" }}>
              <IconButton
                className={
                  styles.dateRangePickerCalendarNavigationIcon
                }
                content={<TfiAngleDoubleLeft />}
                size="medium"
                onClick={decreaseYear}
              />
              <IconButton
                className={
                  styles.dateRangePickerCalendarNavigationIcon
                }
                content={<TfiAngleLeft />}
                size="medium"
                onClick={decreaseMonth}
              />
            </div>
            <div
              className={
                styles.dateRangePickerCalendarNavigationMonth
              }
            >
              {`${date.toLocaleString("en-US", {
                month: "long",
              })} ${date.getFullYear()}`}
            </div>
            <div
              className={
                styles.dateRangePickerCalendarNavigationMonth
              }
            >
              {`${date.toLocaleString("en-US", {
                month: "long",
              })} ${date.getFullYear()}`}
            </div>
            <div style={{ display: "flex", gap: "2px" }}>
              <IconButton
                className={
                  styles.dateRangePickerCalendarNavigationIcon
                }
                content={<TfiAngleRight />}
                size="medium"
                onClick={increaseMonth}
              />
              <IconButton
                className={
                  styles.dateRangePickerCalendarNavigationIcon
                }
                content={<TfiAngleDoubleRight />}
                size="medium"
                onClick={increaseYear}
              />
            </div>
          </div>
        </FocusTrap>
      </div>
    );
  };

BaseDateRangePickerCalendars.displayName =
  "BaseDateRangePickerCalendars";
