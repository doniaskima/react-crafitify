import { BasePopupPosition } from '../Popup/BasePopup';
export declare const getPopupPositionStyle: ({
  position,
  referrerRef,
  targetRef,
}: {
  position: BasePopupPosition;
  referrerRef: React.RefObject<HTMLElement>;
  targetRef: React.RefObject<HTMLElement>;
}) => {
  transform: string;
};
