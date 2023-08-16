import * as React from "react";

export type CalculatePositionFn = (dimensions: {
  referrerHeight: number;
  referrerWidth: number;
  targetHeight: number;
  targetWidth: number;
}) => { left: number; top: number };

// Give refs of each target.
// Create a function to use that will transform the style.
// Use the refs and the function to transform style.
// Used for components with multiple different layouts.
export const getLayoutStyle = ({
  calculateLayout,
  referrerRef,
  targetRef,
}: {
  calculateLayout: CalculatePositionFn;
  referrerRef: React.RefObject<HTMLElement>;
  targetRef: React.RefObject<HTMLElement>;
}) => {
  const referrerDOMRect =
    referrerRef.current?.getBoundingClientRect() || {
      height: 0,
      width: 0,
    };
  const targetDOMRect =
    targetRef.current?.getBoundingClientRect() || {
      height: 0,
      width: 0,
    };

  const { left, top } = calculateLayout({
    referrerHeight: referrerDOMRect.height,
    referrerWidth: referrerDOMRect.width,
    targetHeight: targetDOMRect.height,
    targetWidth: targetDOMRect.width,
  });

  return { transform: `translate3d(${left}px, ${top}px, 0)` };
};
