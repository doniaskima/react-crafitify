import * as React from "react";

export interface FlexColumnContainerProps {
  children: React.ReactNode;
}

export const FlexColumnContainer: React.FC<FlexColumnContainerProps> =
  (props) => {
    const { children } = props;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {children}
      </div>
    );
  };
