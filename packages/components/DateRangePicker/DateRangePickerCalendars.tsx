/* istanbul ignore file */
import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { BaseDateRangePickerCalendars } from "./BaseDateRangePickerCalendars";
import styles from "./DateRangePickerCalendars.module.scss";

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
export const DateRangePickerCalendars: React.FC<DateRangePickerCalendarsProps> =
  (props) => {
    const { isOpen, onClose, triggerRefs } = props;

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
        <BaseDateRangePickerCalendars
          onClose={onClose}
          triggerRefs={triggerRefs}
        />
      </CSSTransition>
    );
  };

DateRangePickerCalendars.displayName = "DateRangePickerCalendars";
