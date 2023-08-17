import * as React from "react";
import styles from "./MenuLayoutContainer.module.scss";
import { getMenuAlignmentStyle } from "../utility/getMenuAlignmentStyle";
import { BaseMenuAlignment } from "./BaseMenu";
import classNames from "classnames";

export interface MenuLayoutContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * The alignment for the Menu
   */
  alignment: BaseMenuAlignment;
  /**
   * The trigger ref for the Menu
   */
  triggerRef: React.RefObject<HTMLElement>;
}

/**
 * @private
 */
export const MenuLayoutContainer: React.FC<MenuLayoutContainerProps> =
  (props) => {
    const { alignment, className, triggerRef, ...rest } = props;

    const [rootStyle, setRootStyle] =
      React.useState<React.CSSProperties>({ visibility: "hidden" });

    const referrerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      setRootStyle(
        getMenuAlignmentStyle({
          alignment,
          referrerRef,
          targetRef: triggerRef,
        })
      );
    }, [alignment, referrerRef, triggerRef]);

    return (
      <div
        className={classNames(
          className,
          alignment.startsWith("bottom") && styles.bottom,
          alignment.startsWith("top") && styles.top,
          styles.layoutContainer
        )}
        ref={referrerRef}
        style={rootStyle}
        {...rest}
      />
    );
  };

MenuLayoutContainer.displayName = "MenuLayoutContainer";
