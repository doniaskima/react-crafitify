import * as React from "react";

export const useOnClickInside = (
  ref: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
  handler: () => void
) => {
  return React.useEffect(() => {
    const checkIfInside = (event: MouseEvent) => {
      const elementRefs = Array.isArray(ref) ? ref : [ref];
      const isInside = elementRefs.some((refs) =>
        refs.current?.contains(event.target as Node)
      );
      if (isInside) {
        handler();
      }
    };
    document.addEventListener("mousedown", checkIfInside);

    return () => {
      document.removeEventListener("mousedown", checkIfInside);
    };
  }, [ref]);
};
