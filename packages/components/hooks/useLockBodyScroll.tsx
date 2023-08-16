import * as React from "react";

export const useLockBodyScroll = (isLocked: boolean) => {
  return React.useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked]);
};
