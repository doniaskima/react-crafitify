import classNames from "classnames";
import * as React from "react";
import styles from "./Ripple.module.scss";

export interface RippleInstanceCoordinates {
  x?: number;
  y?: number;
  size?: number;
}

export type RipplePosition = "center" | "cursor";

export interface RippleProps
  extends React.ComponentPropsWithoutRef<"div"> {
  color?: string;
  duration?: number;
  position?: RipplePosition;
}

export const Ripple: React.FC<RippleProps> = (props) => {
  const {
    className,
    color = "#381438",
    duration = 1300,
    position = "cursor",
    ...rest
  } = props;
  const [rippleArray, setRippleArray] = React.useState<
    Array<RippleInstanceCoordinates>
  >([]);

  const addRipple = (event: React.MouseEvent) => {
    const rippleContainer =
      event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;

    let x, y;

    if (position === "cursor") {
      x = event.pageX - rippleContainer.x - size / 2;
      y = event.pageY - rippleContainer.y - size / 2;
    } else {
      x = 0;
      y = 0;
    }

    const newRipple: RippleInstanceCoordinates = {
      x,
      y,
      size,
    };

    setRippleArray((prevRipples) => [...prevRipples, newRipple]);
  };

  return (
    <div
      className={classNames(styles.container, className)}
      onMouseDown={addRipple}
      role="presentation"
      {...rest}
    >
      {rippleArray.length > 0 &&
        rippleArray.map(
          (ripple: RippleInstanceCoordinates, index: number) => {
            return (
              <span
                key={"span" + index}
                role="presentation"
                style={{
                  animationDuration: `${duration}ms`,
                  backgroundColor: color,
                  top: ripple.y,
                  left: ripple.x,
                  width: ripple.size,
                  height: ripple.size,
                }}
              />
            );
          }
        )}
    </div>
  );
};
