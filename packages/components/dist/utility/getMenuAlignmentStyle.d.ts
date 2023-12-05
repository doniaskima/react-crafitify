import { BaseMenuAlignment } from '../Menu/BaseMenu';
export declare const getMenuAlignmentStyle: ({
  alignment,
  referrerRef,
  targetRef,
}: {
  alignment: BaseMenuAlignment;
  referrerRef: React.RefObject<HTMLElement>;
  targetRef: React.RefObject<HTMLElement>;
}) => {
  transform: string;
};
