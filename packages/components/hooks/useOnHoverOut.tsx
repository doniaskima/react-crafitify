import * as React from "react";

export const useOnHoverOut = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  return React.useEffect(() => {
    ref.current?.addEventListener("mouseleave", handler);
    return () => {
      ref.current?.removeEventListener("mouseleave", handler);
    };
  }, [ref]);
};
