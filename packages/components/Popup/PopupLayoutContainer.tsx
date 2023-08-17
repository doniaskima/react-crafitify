import * as React from "react";
import styles from "./PopupLayoutContainer.module.scss";
import { getPopupPositionStyle } from "../utility/getPopupPositionStyle";
import { BasePopupPosition } from "./BasePopup";
import classNames from "classnames";

export interface PopupLayoutContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * If the Popup has an indicator
   */
  hasIndicator: boolean;
  /**
   * The position for the Popup
   */
  position: BasePopupPosition;
  /**
   * The trigger ref for the Popup
   */
  triggerRef: React.RefObject<HTMLElement>;
}

export const PopupLayoutContainer: React.FC<PopupLayoutContainerProps> =
  (props) => {
    const { className, hasIndicator, position, triggerRef, ...rest } =
      props;

    const [rootStyle, setRootStyle] =
      React.useState<React.CSSProperties>({ visibility: "hidden" });

    const referrerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      setRootStyle(
        getPopupPositionStyle({
          position,
          referrerRef,
          targetRef: triggerRef,
        })
      );
    }, [position, referrerRef, triggerRef]);

    return (
      <div
        className={classNames(
          className,
          hasIndicator && styles.hasIndicator,
          position === "top" && styles.top,
          position === "bottom" && styles.bottom,
          position === "left" && styles.left,
          position === "right" && styles.right,
          styles.layoutContainer
        )}
        ref={referrerRef}
        style={rootStyle}
        {...rest}
      />
    );
  };

PopupLayoutContainer.displayName = "PopupLayoutContainer";
