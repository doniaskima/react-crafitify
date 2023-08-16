import * as React from "react";

export const useOnKeyDown = (keys: string[], handler: () => void) => {
  return React.useEffect(() => {
    const checkKey = (event: KeyboardEvent) => {
      if (keys.includes(event.key)) {
        handler();
      }
    };

    document.addEventListener("keydown", checkKey);

    return () => document.removeEventListener("keydown", checkKey);
  }, [keys, handler]);
};
