import * as React from "react";
import FocusLock from "react-focus-lock";

export interface FocusTrapProps
  extends React.ComponentProps<typeof FocusLock> {
  children: React.ReactNode;
  returnFocus?: boolean;
}

export const FocusTrap: React.FC<FocusTrapProps> = (props) => {
  const { children, returnFocus = true, ...rest } = props;

  return (
    <FocusLock returnFocus={returnFocus} {...rest}>
      {children}
    </FocusLock>
  );
};

FocusTrap.displayName = "FocusTrap";
