import * as React from "react";
import { getLayoutStyle } from "../../utility";

describe("getLayoutStyle", () => {
  test("Should return a null transform style on inadequate refs.", () => {
    const style = getLayoutStyle({
      calculateLayout({
        referrerHeight,
        referrerWidth,
        targetHeight,
        targetWidth,
      }) {
        const left = referrerHeight - targetHeight;
        const top = referrerWidth - targetWidth;
        return { left, top };
      },
      referrerRef: React.createRef<HTMLElement>(),
      targetRef: React.createRef<HTMLElement>(),
    });

    expect(style).toEqual({ transform: "translate3d(0px, 0px, 0)" });
  });
});
