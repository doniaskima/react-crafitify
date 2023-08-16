import * as React from "react";

export interface FlexRowContainerProps {
  children: React.ReactNode;
}

export const FlexRowContainer: React.FC<FlexRowContainerProps> = (
  props
) => {
  const { children } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {children}
    </div>
  );
};
