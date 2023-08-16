import * as React from "react";

export const useOnHover = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  return React.useEffect(() => {
    ref.current?.addEventListener("mouseenter", handler);
    return () => {
      ref.current?.removeEventListener("mouseenter", handler);
    };
  }, [ref]);
};
