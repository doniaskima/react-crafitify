import * as React from "react";

export const useOnFocus = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  return React.useEffect(() => {
    ref.current?.addEventListener("focus", handler);
    return () => {
      ref.current?.removeEventListener("focus", handler);
    };
  }, [ref]);
};
