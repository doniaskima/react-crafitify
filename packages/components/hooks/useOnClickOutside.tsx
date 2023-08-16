import * as React from "react";

export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
  handler: () => void
) => {
  return React.useEffect(() => {
    const checkIfOutside = (event: MouseEvent) => {
      const elementRefs = Array.isArray(ref) ? ref : [ref];
      const isOutside = !elementRefs.some((refs) =>
        refs.current?.contains(event.target as Node)
      );
      if (isOutside) {
        handler();
      }
    };
    document.addEventListener("mousedown", checkIfOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfOutside);
    };
  }, [ref]);
};
