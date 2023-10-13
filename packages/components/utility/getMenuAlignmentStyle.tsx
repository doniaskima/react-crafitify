
import { BaseMenuAlignment } from "../Menu/BaseMenu";
import { getLayoutStyle } from "./getLayoutStyle";

export const getMenuAlignmentStyle = ({
  alignment,
  referrerRef,
  targetRef,
}: {
  alignment: BaseMenuAlignment;
  referrerRef: React.RefObject<HTMLElement>;
  targetRef: React.RefObject<HTMLElement>;
}) =>
  getLayoutStyle({
    calculateLayout({
      referrerHeight,
      referrerWidth,
      targetHeight,
      targetWidth,
    }) {
      const left =
        alignment === "topLeft" || alignment === "bottomLeft"
          ? 0
          : alignment === "topCenter" || alignment === "bottomCenter"
          ? (targetWidth - referrerWidth) / 2
          : targetWidth - referrerWidth;

      const top = alignment.startsWith("bottom")
        ? targetHeight + 2
        : -referrerHeight - 2;

      return { left, top };
    },
    referrerRef,
    targetRef,
  });
