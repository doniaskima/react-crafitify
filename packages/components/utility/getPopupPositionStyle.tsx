import { BasePopupPosition } from "../components/Popup/BasePopup";
import { getLayoutStyle } from "./getLayoutStyle";

export const getPopupPositionStyle = ({
  position,
  referrerRef,
  targetRef,
}: {
  position: BasePopupPosition;
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
        position === "left"
          ? -1 * referrerWidth
          : position === "right"
          ? targetWidth
          : (targetWidth - referrerWidth) / 2;

      const top =
        position === "bottom"
          ? targetHeight
          : position === "top"
          ? -1 * referrerHeight
          : (targetHeight - referrerHeight) / 2;

      return { left, top };
    },
    referrerRef,
    targetRef,
  });
