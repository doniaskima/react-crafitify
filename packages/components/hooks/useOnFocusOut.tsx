import * as React from "react";

export const useOnFocusOut = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  return React.useEffect(() => {
    ref.current?.addEventListener("focusout", handler);

    return () => {
      ref.current?.removeEventListener("focusout", handler);
    };
  }, [ref]);
};
