/* istanbul ignore file */
import * as React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./DatePickerCalendar.module.scss";

import { BaseDatePickerCalendar } from "./BaseDatePickerCalendar";

export interface DatePickerCalendarProps {
  /**
   * If the DatePickerCalendar is open
   *
   * @default false
   */
  isOpen?: boolean;
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
export const DatePickerCalendar: React.FC<DatePickerCalendarProps> = (
  props
) => {
  const { onClose, isOpen = false, triggerRef } = props;

  return (
    <CSSTransition
      in={isOpen}
      timeout={200}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
    >
      <BaseDatePickerCalendar
        onClose={onClose}
        triggerRef={triggerRef}
      />
    </CSSTransition>
  );
};

DatePickerCalendar.displayName = "DatePickerCalendar";
